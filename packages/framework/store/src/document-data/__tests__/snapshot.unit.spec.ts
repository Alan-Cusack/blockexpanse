import {
  canonicalizeDocumentData,
  type DocumentDataV1,
  type InlineContentV1,
} from '@blockexpanse/document-data';
import { describe, expect, test } from 'vitest';

import {
  documentDataToSnapshot,
  inlineToSnapshotText,
  snapshotTextToInline,
  snapshotToDocumentData,
} from '../index.js';

const documentData: DocumentDataV1 = {
  format: 'blockexpanse-document',
  specVersion: '1.0',
  document: {
    id: 'doc_01',
    title: 'Codec test',
    blocks: [
      {
        id: 'heading_01',
        type: 'heading',
        level: 2,
        content: [{ type: 'text', text: 'Heading', marks: [] }],
        children: [],
      },
      {
        id: 'quote_01',
        type: 'quote',
        content: [
          { type: 'text', text: 'Quoted ', marks: [{ type: 'italic' }] },
          {
            type: 'link',
            href: 'https://example.com',
            text: 'link',
            marks: [],
          },
        ],
        children: [
          {
            id: 'todo_01',
            type: 'list-item',
            style: 'todo',
            checked: true,
            content: [{ type: 'text', text: 'Nested', marks: [] }],
            children: [],
          },
        ],
      },
      {
        id: 'code_01',
        type: 'code',
        language: 'typescript',
        text: 'const ok = true;',
        children: [],
      },
      { id: 'divider_01', type: 'divider', children: [] },
      {
        id: 'image_01',
        type: 'image',
        assetId: 'asset_image',
        caption: 'Image',
        width: 640,
        height: 480,
        children: [],
      },
      {
        id: 'attachment_01',
        type: 'attachment',
        assetId: 'asset_attachment',
        caption: 'Attachment',
        display: 'embed',
        children: [],
      },
    ],
  },
  assets: {
    asset_image: {},
    asset_attachment: {
      name: 'report.pdf',
      mimeType: 'application/pdf',
      size: 42,
    },
  },
  extensions: {},
};

describe('document snapshot codecs', () => {
  test('converts inline content to snapshot delta and back', () => {
    const content: InlineContentV1[] = [
      { type: 'text', text: 'bold', marks: [{ type: 'bold' }] },
      { type: 'link', href: 'https://example.com', text: 'link', marks: [] },
    ];
    const encoded = inlineToSnapshotText(content, 'doc_01');
    expect(encoded.value).toBeDefined();
    const decoded = snapshotTextToInline(encoded.value!);
    expect(decoded.value).toEqual(content);
  });

  test('round-trips the core document blocks', () => {
    const snapshot = documentDataToSnapshot(documentData);
    expect(snapshot.diagnostics).toEqual([]);
    expect(snapshot.value).toBeDefined();
    const exported = snapshotToDocumentData(snapshot.value!);
    expect(exported.diagnostics).toEqual([]);
    expect(canonicalizeDocumentData(exported.value!)).toEqual(
      canonicalizeDocumentData(documentData)
    );
  });

  test('maps headings and quotes to affine paragraph types', () => {
    const snapshot = documentDataToSnapshot(documentData).value!;
    const content = snapshot.blocks.children[0].children;
    expect(content[0].flavour).toBe('affine:paragraph');
    expect(content[0].props.type).toBe('h2');
    expect(content[1].props.type).toBe('quote');
  });

  test('does not return a snapshot when a block codec rejects input', () => {
    const snapshot = documentDataToSnapshot(documentData).value!;
    snapshot.blocks.children[0].children.push({
      type: 'block',
      id: 'unsupported_01',
      flavour: 'affine:unsupported',
      props: {},
      children: [],
    });
    const result = snapshotToDocumentData(snapshot);
    expect(result.value).toBeUndefined();
    expect(result.diagnostics[0]?.code).toBe('block.unsupported_flavour');
  });

  test('rejects unsafe links found in an internal snapshot', () => {
    const snapshot = documentDataToSnapshot(documentData).value!;
    const paragraph = snapshot.blocks.children[0].children[0];
    paragraph.props.text = {
      '$blockexpanse:internal:text$': true,
      delta: [
        {
          insert: 'unsafe',
          attributes: { link: 'javascript:alert(1)' },
        },
      ],
    };

    const result = snapshotToDocumentData(snapshot);
    expect(result.value).toBeUndefined();
    expect(
      result.diagnostics.some(item => item.code === 'inline.invalid_url')
    ).toBe(true);
  });
});
