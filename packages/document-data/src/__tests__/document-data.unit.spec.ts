import { describe, expect, test } from 'vitest';

import {
  canApplyProjection,
  canonicalizeDocumentData,
  type DocumentDataV1,
  normalizeDocumentData,
  validateDocumentData,
} from '../index.js';

const validDocument: DocumentDataV1 = {
  format: 'blockexpanse-document',
  specVersion: '1.0',
  document: {
    id: 'doc_01',
    title: 'Example',
    blocks: [
      {
        id: 'heading_01',
        type: 'heading',
        level: 1,
        content: [{ type: 'text', text: 'Title', marks: [] }],
        children: [],
      },
      {
        id: 'paragraph_01',
        type: 'paragraph',
        content: [
          { type: 'text', text: 'Hello ', marks: [{ type: 'bold' }] },
          {
            type: 'text',
            text: 'world',
            marks: [{ type: 'bold' }, { type: 'bold' }],
          },
        ],
        children: [],
      },
    ],
  },
  assets: {},
  extensions: {},
};

describe('document data protocol', () => {
  test('validates a core document', () => {
    const result = validateDocumentData(validDocument);
    expect(result.valid).toBe(true);
    expect(result.diagnostics).toEqual([]);
  });

  test('rejects duplicate block ids', () => {
    const duplicate = structuredClone(validDocument);
    duplicate.document.blocks[1].id = 'heading_01';
    const result = validateDocumentData(duplicate);
    expect(result.valid).toBe(false);
    expect(result.diagnostics[0]?.code).toBe('block.duplicate_id');
  });

  test('rejects unsafe link protocols', () => {
    const unsafe = structuredClone(validDocument);
    const paragraph = unsafe.document.blocks[1];
    if (paragraph.type !== 'paragraph') throw new Error('Unexpected fixture');
    paragraph.content = [
      { type: 'link', href: 'javascript:alert(1)', text: 'bad', marks: [] },
    ];
    const result = validateDocumentData(unsafe);
    expect(result.valid).toBe(false);
    expect(result.diagnostics[0]?.code).toBe('inline.invalid_url');
  });

  test('normalizes marks and adjacent text runs', () => {
    const result = normalizeDocumentData(validDocument);
    const paragraph = result.value?.document.blocks[1];
    expect(paragraph?.type).toBe('paragraph');
    if (paragraph?.type !== 'paragraph') throw new Error('Unexpected result');
    expect(paragraph.content).toEqual([
      { type: 'text', text: 'Hello world', marks: [{ type: 'bold' }] },
    ]);
  });

  test('canonicalization is idempotent', () => {
    const once = canonicalizeDocumentData(validDocument);
    expect(canonicalizeDocumentData(once)).toEqual(once);
  });

  test('applies caller-provided limits', () => {
    const result = validateDocumentData(validDocument, {
      limits: { maxBlocks: 1 },
    });
    expect(result.valid).toBe(false);
    expect(
      result.diagnostics.some(item => item.code === 'document.limit_exceeded')
    ).toBe(true);
  });

  test('only applies monotonically newer projections', () => {
    expect(canApplyProjection(10, 11)).toBe(true);
    expect(canApplyProjection(10, 10)).toBe(false);
    expect(canApplyProjection(10, 9)).toBe(false);
    expect(canApplyProjection(10, Number.NaN)).toBe(false);
  });

  test('requires referenced assets in the manifest', () => {
    const withImage = structuredClone(validDocument);
    withImage.document.blocks.push({
      id: 'image_01',
      type: 'image',
      assetId: 'missing_asset',
      children: [],
    });
    const result = validateDocumentData(withImage);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some(item => item.code === 'asset.missing')).toBe(
      true
    );
  });
});
