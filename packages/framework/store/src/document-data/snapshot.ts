import {
  type BlockNodeV1,
  canonicalizeDocumentData,
  type Diagnostic,
  type DocumentDataV1,
  normalizeDocumentData,
} from '@blockexpanse/document-data';

import type { BlockSnapshot, DocSnapshot } from '../transformer/index.js';
import type {
  ConversionResult,
  DocumentSnapshotConversionOptions,
} from './types.js';

import { defaultDocumentBlockCodecRegistry } from './default-registry.js';

function convertBlocksToSnapshot(
  blocks: BlockNodeV1[],
  documentId: string,
  assets: DocumentDataV1['assets'],
  options: DocumentSnapshotConversionOptions
): ConversionResult<BlockSnapshot[]> {
  const registry = options.registry ?? defaultDocumentBlockCodecRegistry;
  const value: BlockSnapshot[] = [];
  const diagnostics: Diagnostic[] = [];
  let lossy = false;
  for (const block of blocks) {
    const result = registry.toSnapshot(block, { assets, documentId });
    diagnostics.push(...result.diagnostics);
    lossy ||= result.lossy;
    if (result.value) value.push(result.value);
  }
  return {
    diagnostics,
    lossy,
    value: diagnostics.some(item => item.severity === 'error')
      ? undefined
      : value,
  };
}

function convertBlocksFromSnapshot(
  blocks: BlockSnapshot[],
  documentId: string,
  assets: DocumentDataV1['assets'],
  options: DocumentSnapshotConversionOptions
): ConversionResult<BlockNodeV1[]> {
  const registry = options.registry ?? defaultDocumentBlockCodecRegistry;
  const value: BlockNodeV1[] = [];
  const diagnostics: Diagnostic[] = [];
  let lossy = false;
  for (const block of blocks) {
    const result = registry.fromSnapshot(block, { assets, documentId });
    diagnostics.push(...result.diagnostics);
    lossy ||= result.lossy;
    if (result.value) value.push(result.value);
  }
  return {
    diagnostics,
    lossy,
    value: diagnostics.some(item => item.severity === 'error')
      ? undefined
      : value,
  };
}

export function documentDataToSnapshot(
  data: DocumentDataV1,
  options: DocumentSnapshotConversionOptions = {}
): ConversionResult<DocSnapshot> {
  let canonical: DocumentDataV1;
  try {
    canonical = canonicalizeDocumentData(data);
  } catch (error) {
    return {
      diagnostics: [
        {
          code: 'document.invalid_format',
          message: error instanceof Error ? error.message : String(error),
          path: [],
          severity: 'error',
        },
      ],
      lossy: false,
    };
  }
  const blocks = convertBlocksToSnapshot(
    canonical.document.blocks,
    canonical.document.id,
    canonical.assets,
    options
  );
  return {
    diagnostics: blocks.diagnostics,
    lossy: blocks.lossy,
    value: blocks.value
      ? {
          type: 'page',
          meta: {
            id: canonical.document.id,
            title: canonical.document.title,
            createDate: 0,
            tags: [],
          },
          blocks: {
            type: 'block',
            id: `${canonical.document.id}:page`,
            flavour: 'affine:page',
            version: 2,
            props: {},
            children: [
              {
                type: 'block',
                id: `${canonical.document.id}:note`,
                flavour: 'affine:note',
                version: 1,
                props: {},
                children: blocks.value,
              },
            ],
          },
        }
      : undefined,
  };
}

function findContentBlocks(root: BlockSnapshot): BlockSnapshot[] {
  if (root.flavour === 'affine:note') return root.children;
  const notes = root.children.filter(child => child.flavour === 'affine:note');
  return notes.length ? notes.flatMap(note => note.children) : root.children;
}

export function snapshotToDocumentData(
  snapshot: DocSnapshot,
  options: DocumentSnapshotConversionOptions = {}
): ConversionResult<DocumentDataV1> {
  const assets: DocumentDataV1['assets'] = {};
  const blocks = convertBlocksFromSnapshot(
    findContentBlocks(snapshot.blocks),
    snapshot.meta.id,
    assets,
    options
  );
  if (!blocks.value) {
    return { diagnostics: blocks.diagnostics, lossy: blocks.lossy };
  }
  const candidate: DocumentDataV1 = {
    format: 'blockexpanse-document',
    specVersion: '1.0',
    document: {
      id: snapshot.meta.id,
      title: snapshot.meta.title,
      blocks: blocks.value,
    },
    assets,
    extensions: {},
  };
  const normalized = normalizeDocumentData(candidate);
  return {
    diagnostics: [...blocks.diagnostics, ...normalized.diagnostics],
    lossy: blocks.lossy,
    value: normalized.value,
  };
}
