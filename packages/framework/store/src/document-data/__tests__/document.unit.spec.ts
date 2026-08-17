import type { DocumentDataV1 } from '@blockexpanse/document-data';

import { describe, expect, test, vi } from 'vitest';

import {
  defineBlockSchema,
  DocCollection,
  IdGeneratorType,
  Schema,
} from '../../index.js';
import { DOCUMENT_DATA_IMPORT_ORIGIN, DocumentDataStore } from '../index.js';

const rootSchema = defineBlockSchema({
  flavour: 'affine:page',
  props: () => ({}),
  metadata: { version: 2, role: 'root' },
});

const noteSchema = defineBlockSchema({
  flavour: 'affine:note',
  props: () => ({}),
  metadata: {
    version: 1,
    role: 'hub',
    parent: ['affine:page'],
    children: [
      'affine:paragraph',
      'affine:list',
      'affine:code',
      'affine:divider',
      'affine:image',
      'affine:attachment',
    ],
  },
});

const paragraphSchema = defineBlockSchema({
  flavour: 'affine:paragraph',
  props: internal => ({
    type: 'text',
    text: internal.Text(),
    collapsed: false,
  }),
  metadata: {
    version: 1,
    role: 'content',
    parent: ['affine:note', 'affine:paragraph', 'affine:list'],
  },
});

const listSchema = defineBlockSchema({
  flavour: 'affine:list',
  props: internal => ({
    type: 'bulleted',
    text: internal.Text(),
    checked: false,
    collapsed: false,
    order: null as number | null,
  }),
  metadata: {
    version: 1,
    role: 'content',
    parent: ['affine:note', 'affine:paragraph', 'affine:list'],
  },
});

const codeSchema = defineBlockSchema({
  flavour: 'affine:code',
  props: internal => ({
    text: internal.Text(),
    language: null as string | null,
    wrap: false,
    caption: '',
  }),
  metadata: {
    version: 1,
    role: 'content',
    parent: ['affine:note', 'affine:paragraph', 'affine:list'],
    children: [],
  },
});

const dividerSchema = defineBlockSchema({
  flavour: 'affine:divider',
  metadata: { version: 1, role: 'content', children: [] },
});

const imageSchema = defineBlockSchema({
  flavour: 'affine:image',
  props: () => ({
    sourceId: '',
    caption: '',
    width: 0,
    height: 0,
    index: 'a0',
    xywh: '[0,0,0,0]',
    lockedBySelf: false,
    rotate: 0,
    size: -1,
  }),
  metadata: { version: 1, role: 'content', parent: ['affine:note'] },
});

const attachmentSchema = defineBlockSchema({
  flavour: 'affine:attachment',
  props: () => ({
    sourceId: '',
    name: '',
    size: 0,
    type: 'application/octet-stream',
    caption: undefined as string | undefined,
    embed: false,
    style: 'horizontalThin',
    index: 'a0',
    xywh: '[0,0,0,0]',
    lockedBySelf: false,
    rotate: 0,
  }),
  metadata: { version: 1, role: 'content', parent: ['affine:note'] },
});

function createStore(
  schemas = [
    rootSchema,
    noteSchema,
    paragraphSchema,
    listSchema,
    codeSchema,
    dividerSchema,
    imageSchema,
    attachmentSchema,
  ]
) {
  const schema = new Schema().register(schemas);
  const collection = new DocCollection({
    id: 'document-data-test',
    idGenerator: IdGeneratorType.AutoIncrement,
    schema,
  });
  collection.meta.initialize();
  return new DocumentDataStore(collection);
}

const input: DocumentDataV1 = {
  format: 'blockexpanse-document',
  specVersion: '1.0',
  document: {
    id: 'imported_doc',
    title: 'Imported document',
    blocks: [
      {
        id: 'heading_01',
        type: 'heading',
        level: 1,
        content: [{ type: 'text', text: 'Heading', marks: [] }],
        children: [],
      },
      {
        id: 'paragraph_01',
        type: 'paragraph',
        content: [{ type: 'text', text: 'Body', marks: [{ type: 'bold' }] }],
        children: [],
      },
    ],
  },
  assets: {},
  extensions: {},
};

describe('DocumentDataStore', () => {
  test('imports a document into a real Yjs-backed store and exports it', async () => {
    const store = createStore();
    const imported = await store.import(input, {
      mode: 'create',
      idPolicy: 'preserve',
    });
    expect(imported.diagnostics).toEqual([]);
    expect(imported.value?.root).not.toBeNull();
    expect(store.collection.getDoc('imported_doc')).not.toBeNull();

    const exported = store.export(imported.value!);
    expect(exported.diagnostics).toEqual([]);
    expect(exported.value?.document.title).toBe('Imported document');
    expect(exported.value?.document.blocks).toEqual(input.document.blocks);
  });

  test('rejects a preserved document id conflict without modifying it', async () => {
    const store = createStore();
    await store.import(input, { mode: 'create', idPolicy: 'preserve' });
    const before = store.collection.docs.size;
    const duplicate = await store.import(input, {
      mode: 'create',
      idPolicy: 'preserve',
    });
    expect(duplicate.diagnostics[0]?.code).toBe('document.id_conflict');
    expect(store.collection.docs.size).toBe(before);
  });

  test('regenerates document and block ids', async () => {
    const store = createStore();
    const imported = await store.import(input, {
      mode: 'create',
      idPolicy: 'regenerate',
    });
    expect(imported.documentId).not.toBe(input.document.id);
    expect(imported.blockIdMap.heading_01).toBeDefined();
    expect(imported.blockIdMap.paragraph_01).toBeDefined();
  });

  test('regenerates asset ids and updates block references', async () => {
    const store = createStore();
    const withImage = structuredClone(input);
    withImage.assets.asset_image = {};
    withImage.document.blocks.push({
      id: 'image_01',
      type: 'image',
      assetId: 'asset_image',
      children: [],
    });
    const imported = await store.import(withImage, {
      mode: 'create',
      idPolicy: 'regenerate',
    });
    expect(imported.diagnostics).toEqual([]);
    const generatedAssetId = imported.assetIdMap.asset_image;
    expect(generatedAssetId).toBeDefined();
    const exported = store.export(imported.value!);
    const image = exported.value?.document.blocks.find(
      block => block.type === 'image'
    );
    expect(image?.type).toBe('image');
    if (image?.type !== 'image') throw new Error('Expected image block');
    expect(image.assetId).toBe(generatedAssetId);
    expect(exported.value?.assets[generatedAssetId]).toBeDefined();
  });

  test('does not create a document for invalid input', async () => {
    const store = createStore();
    const result = await store.import(
      { ...input, format: 'invalid' },
      { mode: 'create', idPolicy: 'preserve' }
    );
    expect(result.value).toBeUndefined();
    expect(store.collection.docs.size).toBe(0);
  });

  test('removes a partially created document when Store import fails', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const store = createStore([
      rootSchema,
      noteSchema,
      listSchema,
      codeSchema,
      dividerSchema,
      imageSchema,
      attachmentSchema,
    ]);
    const result = await store.import(input, {
      mode: 'create',
      idPolicy: 'preserve',
    });

    expect(result.value).toBeUndefined();
    expect(
      result.diagnostics.some(
        item => item.code === 'conversion.snapshot_import_failed'
      )
    ).toBe(true);
    expect(store.collection.getDoc(input.document.id)).toBeNull();
    expect(store.collection.docs.size).toBe(0);
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });

  test('replaces an existing document in one content transaction', async () => {
    const store = createStore();
    const imported = await store.import(input, {
      mode: 'create',
      idPolicy: 'preserve',
    });
    const replacement = structuredClone(input);
    replacement.document.title = 'Replacement';
    replacement.document.blocks = [
      {
        id: 'replacement_01',
        type: 'paragraph',
        content: [{ type: 'text', text: 'Replaced', marks: [] }],
        children: [],
      },
    ];
    const origins: unknown[] = [];
    imported.value!.spaceDoc.on('afterTransaction', transaction => {
      if (transaction.origin === DOCUMENT_DATA_IMPORT_ORIGIN) {
        origins.push(transaction.origin);
      }
    });

    const result = await store.import(replacement, { mode: 'replace' });
    expect(result.diagnostics).toEqual([]);
    expect(origins).toEqual([DOCUMENT_DATA_IMPORT_ORIGIN]);
    const exported = store.export(result.value!);
    expect(exported.value?.document.title).toBe('Replacement');
    expect(exported.value?.document.blocks).toEqual(
      replacement.document.blocks
    );
  });

  test('does not modify the target when replacement preparation fails', async () => {
    const store = createStore();
    const imported = await store.import(input, {
      mode: 'create',
      idPolicy: 'preserve',
    });
    const before = store.export(imported.value!).value;
    const invalid = structuredClone(input) as unknown as Record<
      string,
      unknown
    >;
    invalid.format = 'invalid';
    const result = await store.import(invalid, { mode: 'replace' });
    expect(result.value).toBeUndefined();
    expect(store.export(imported.value!).value).toEqual(before);
  });

  test('reports a missing replace target', async () => {
    const store = createStore();
    const result = await store.import(input, {
      mode: 'replace',
      targetDocumentId: 'missing',
    });
    expect(result.diagnostics[0]?.code).toBe('document.not_found');
  });
});
