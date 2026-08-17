import {
  type BlockNodeV1,
  canonicalizeDocumentData,
  type Diagnostic,
  type DocumentDataV1,
  migrateDocumentData,
  normalizeDocumentData,
} from '@blockexpanse/document-data';

import type { Doc, DocCollection } from '../store/index.js';
import type {
  ConversionResult,
  DraftBlockTree,
  ImportDocumentOptions,
  ImportDocumentResult,
} from './types.js';

import {
  type BlockSnapshot,
  type DraftModel,
  Job,
  type JobMiddleware,
} from '../transformer/index.js';
import { documentDataToSnapshot, snapshotToDocumentData } from './snapshot.js';

export const DOCUMENT_DATA_IMPORT_ORIGIN = 'blockexpanse:document-data-import';

function conversionError(
  code: string,
  message: string
): ConversionResult<never> {
  return {
    diagnostics: [{ code, message, path: [], severity: 'error' }],
    lossy: false,
  };
}

function generateAvailableId(collection: DocCollection): string {
  let id = collection.idGenerator();
  while (collection.getDoc(id)) id = collection.idGenerator();
  return id;
}

function remapBlockIds(
  blocks: BlockNodeV1[],
  collection: DocCollection,
  blockIdMap: Record<string, string>,
  assetIdMap: Record<string, string>
): BlockNodeV1[] {
  return blocks.map(block => {
    const id = collection.idGenerator();
    blockIdMap[block.id] = id;
    const assetId =
      'assetId' in block
        ? (assetIdMap[block.assetId] ??
          (assetIdMap[block.assetId] = collection.idGenerator()))
        : undefined;
    return {
      ...block,
      id,
      ...(assetId ? { assetId } : {}),
      children: remapBlockIds(
        block.children,
        collection,
        blockIdMap,
        assetIdMap
      ),
    };
  });
}

function applyIdPolicy(
  data: DocumentDataV1,
  collection: DocCollection,
  options: ImportDocumentOptions
) {
  const blockIdMap: Record<string, string> = {};
  const assetIdMap: Record<string, string> = {};
  if (options.mode !== 'create' || options.idPolicy !== 'regenerate') {
    return { data, assetIdMap, blockIdMap };
  }
  const documentId = generateAvailableId(collection);
  Object.keys(data.assets).forEach(assetId => {
    assetIdMap[assetId] = collection.idGenerator();
  });
  const blocks = remapBlockIds(
    data.document.blocks,
    collection,
    blockIdMap,
    assetIdMap
  );
  return {
    assetIdMap,
    blockIdMap,
    data: {
      ...data,
      assets: Object.fromEntries(
        Object.entries(data.assets).map(([assetId, asset]) => [
          assetIdMap[assetId] ?? assetId,
          asset,
        ])
      ),
      document: {
        ...data.document,
        id: documentId,
        blocks,
      },
    },
  };
}

async function prepareDraftTree(
  job: Job,
  snapshot: BlockSnapshot
): Promise<DraftBlockTree | undefined> {
  const modelData = await job.snapshotToModelData(snapshot);
  if (!modelData) return;
  const children: DraftBlockTree[] = [];
  for (const child of snapshot.children) {
    const prepared = await prepareDraftTree(job, child);
    if (!prepared) return;
    children.push(prepared);
  }
  const draft = {
    id: modelData.id,
    flavour: modelData.flavour,
    children: [],
    ...modelData.props,
  } as DraftModel;
  return { children, draft };
}

function insertDraftTree(doc: Doc, tree: DraftBlockTree, parentId?: string) {
  const { children: _children, flavour, ...blockProps } = tree.draft;
  doc.addBlock(flavour as never, blockProps as never, parentId);
  tree.children.forEach(child => insertDraftTree(doc, child, tree.draft.id));
}

function validateDraftTree(
  collection: DocCollection,
  tree: DraftBlockTree,
  parentFlavour?: string
) {
  collection.schema.validate(
    tree.draft.flavour,
    parentFlavour,
    tree.children.map(child => child.draft.flavour)
  );
  tree.children.forEach(child =>
    validateDraftTree(collection, child, tree.draft.flavour)
  );
}

async function replaceDocument(
  collection: DocCollection,
  job: Job,
  data: DocumentDataV1,
  options: Extract<ImportDocumentOptions, { mode: 'replace' }>,
  diagnostics: Diagnostic[],
  lossy: boolean
): Promise<ImportDocumentResult> {
  const documentId = options.targetDocumentId ?? data.document.id;
  const doc = collection.getDoc(documentId);
  if (!doc) {
    return {
      diagnostics: [
        ...diagnostics,
        {
          code: 'document.not_found',
          message: `Document ${documentId} does not exist.`,
          path: ['document', 'id'],
          severity: 'error',
        },
      ],
      lossy,
      assetIdMap: {},
      blockIdMap: {},
    };
  }
  if (!doc.loaded) doc.load();
  const replacementData = {
    ...data,
    document: { ...data.document, id: documentId },
  };
  const snapshot = documentDataToSnapshot(replacementData);
  if (!snapshot.value) {
    return {
      diagnostics: [...diagnostics, ...snapshot.diagnostics],
      lossy: lossy || snapshot.lossy,
      assetIdMap: {},
      blockIdMap: {},
    };
  }
  snapshot.value.blocks.id = doc.generateBlockId();
  const note = snapshot.value.blocks.children.find(
    child => child.flavour === 'affine:note'
  );
  if (note) note.id = doc.generateBlockId();
  const draftTree = await prepareDraftTree(job, snapshot.value.blocks);
  if (!draftTree) {
    return {
      diagnostics: [
        ...diagnostics,
        ...snapshot.diagnostics,
        {
          code: 'conversion.snapshot_import_failed',
          message: 'The replacement snapshot could not be prepared.',
          path: [],
          severity: 'error',
        },
      ],
      lossy: lossy || snapshot.lossy,
      assetIdMap: {},
      blockIdMap: {},
    };
  }
  try {
    validateDraftTree(collection, draftTree);
  } catch (error) {
    return {
      diagnostics: [
        ...diagnostics,
        ...snapshot.diagnostics,
        {
          code: 'conversion.schema_validation_failed',
          message: error instanceof Error ? error.message : String(error),
          path: [],
          severity: 'error',
        },
      ],
      lossy: lossy || snapshot.lossy,
      assetIdMap: {},
      blockIdMap: {},
    };
  }

  doc.transact(
    () => {
      doc.clear();
      insertDraftTree(doc, draftTree);
    },
    true,
    DOCUMENT_DATA_IMPORT_ORIGIN
  );
  collection.setDocMeta(documentId, { title: replacementData.document.title });
  return {
    diagnostics: [...diagnostics, ...snapshot.diagnostics],
    lossy: lossy || snapshot.lossy,
    value: doc,
    documentId,
    assetIdMap: {},
    blockIdMap: {},
  };
}

export function exportDocumentData(
  job: Job,
  doc: Doc
): ConversionResult<DocumentDataV1> {
  const snapshot = job.docToSnapshot(doc);
  if (!snapshot) {
    return conversionError(
      'conversion.snapshot_export_failed',
      'The Store document could not be exported to a snapshot.'
    );
  }
  return snapshotToDocumentData(snapshot);
}

export async function importDocumentData(
  collection: DocCollection,
  job: Job,
  input: unknown,
  options: ImportDocumentOptions
): Promise<ImportDocumentResult> {
  const migrated = migrateDocumentData(input);
  if (!migrated.value) {
    return {
      diagnostics: migrated.diagnostics,
      lossy: false,
      assetIdMap: {},
      blockIdMap: {},
    };
  }
  const normalized = normalizeDocumentData(migrated.value);
  if (!normalized.value) {
    return {
      diagnostics: normalized.diagnostics,
      lossy: false,
      assetIdMap: {},
      blockIdMap: {},
    };
  }

  if (options.mode === 'replace') {
    return replaceDocument(
      collection,
      job,
      normalized.value,
      options,
      normalized.diagnostics,
      false
    );
  }

  const remapped = applyIdPolicy(normalized.value, collection, options);
  const documentId = remapped.data.document.id;
  if (collection.getDoc(documentId)) {
    return {
      diagnostics: [
        {
          code: 'document.id_conflict',
          message: `A document with id ${documentId} already exists.`,
          path: ['document', 'id'],
          severity: 'error',
        },
      ],
      lossy: false,
      assetIdMap: remapped.assetIdMap,
      blockIdMap: remapped.blockIdMap,
    };
  }

  const snapshot = documentDataToSnapshot(remapped.data);
  if (!snapshot.value) {
    return {
      diagnostics: snapshot.diagnostics,
      lossy: snapshot.lossy,
      assetIdMap: remapped.assetIdMap,
      blockIdMap: remapped.blockIdMap,
    };
  }

  let doc: Doc | undefined;
  try {
    doc = await job.snapshotToDoc(snapshot.value);
    if (!doc || !doc.root) {
      throw new Error('Store snapshot import returned no root document.');
    }
    const verification = exportDocumentData(job, doc);
    const expectedBlocks = canonicalizeDocumentData(remapped.data).document
      .blocks;
    const actualBlocks = verification.value
      ? canonicalizeDocumentData(verification.value).document.blocks
      : undefined;
    if (
      !actualBlocks ||
      JSON.stringify(actualBlocks) !== JSON.stringify(expectedBlocks)
    ) {
      throw new Error('Imported document failed semantic verification.');
    }
    collection.setDocMeta(documentId, {
      title: remapped.data.document.title,
      createDate: Date.now(),
    });
  } catch (error) {
    if (collection.getDoc(documentId)) collection.removeDoc(documentId);
    const message = error instanceof Error ? error.message : String(error);
    return {
      diagnostics: [
        ...snapshot.diagnostics,
        {
          code: 'conversion.snapshot_import_failed',
          message,
          path: [],
          severity: 'error',
        },
      ],
      lossy: snapshot.lossy,
      assetIdMap: remapped.assetIdMap,
      blockIdMap: remapped.blockIdMap,
    };
  }

  return {
    diagnostics: snapshot.diagnostics,
    lossy: snapshot.lossy,
    value: doc,
    documentId,
    assetIdMap: remapped.assetIdMap,
    blockIdMap: remapped.blockIdMap,
  };
}

export class DocumentDataStore {
  readonly job: Job;

  constructor(
    readonly collection: DocCollection,
    middlewares: JobMiddleware[] = []
  ) {
    this.job = new Job({ collection, middlewares });
  }

  export(doc: Doc) {
    return exportDocumentData(this.job, doc);
  }

  import(input: unknown, options: ImportDocumentOptions) {
    return importDocumentData(this.collection, this.job, input, options);
  }
}
