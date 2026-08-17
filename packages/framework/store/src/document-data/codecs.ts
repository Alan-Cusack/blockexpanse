import type {
  AttachmentBlockV1,
  BlockNodeV1,
  CodeBlockV1,
  DividerBlockV1,
  HeadingBlockV1,
  ImageBlockV1,
  ListItemBlockV1,
  ParagraphBlockV1,
  QuoteBlockV1,
} from '@blockexpanse/document-data';

import type { BlockSnapshot } from '../transformer/index.js';
import type {
  ConversionResult,
  DocumentBlockCodec,
  DocumentExportContext,
  DocumentImportContext,
} from './types.js';

import { inlineToSnapshotText, snapshotTextToInline } from './inline.js';
import { errorResult, isSnapshotText } from './utils.js';

function convertChildrenFromSnapshot(
  children: BlockSnapshot[],
  context: DocumentExportContext
): ConversionResult<BlockNodeV1[]> {
  const registry = context.registry;
  if (!registry) {
    return errorResult(
      'conversion.registry_missing',
      'A codec registry is required to convert child blocks.'
    );
  }
  const value: BlockNodeV1[] = [];
  const diagnostics = [];
  let lossy = false;
  for (const child of children) {
    const result = registry.fromSnapshot(child, context);
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

function convertChildrenToSnapshot(
  children: BlockNodeV1[],
  context: DocumentImportContext
): ConversionResult<BlockSnapshot[]> {
  const registry = context.registry;
  if (!registry) {
    return errorResult(
      'conversion.registry_missing',
      'A codec registry is required to convert child blocks.'
    );
  }
  const value: BlockSnapshot[] = [];
  const diagnostics = [];
  let lossy = false;
  for (const child of children) {
    const result = registry.toSnapshot(child, context);
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

function textFromSnapshot(snapshot: BlockSnapshot) {
  const text = snapshot.props.text;
  return isSnapshotText(text)
    ? snapshotTextToInline(text)
    : errorResult<never>(
        'block.invalid_property',
        'Block text is not a valid snapshot text.'
      );
}

function textBlockToSnapshot(
  block: ParagraphBlockV1 | QuoteBlockV1 | HeadingBlockV1,
  context: DocumentImportContext,
  paragraphType: string
): ConversionResult<BlockSnapshot> {
  const text = inlineToSnapshotText(block.content, context.documentId);
  const children = convertChildrenToSnapshot(block.children, context);
  return {
    diagnostics: [...text.diagnostics, ...children.diagnostics],
    lossy: text.lossy || children.lossy,
    value:
      text.value && children.value
        ? {
            type: 'block',
            id: block.id,
            flavour: 'affine:paragraph',
            version: 1,
            props: { type: paragraphType, text: text.value, collapsed: false },
            children: children.value,
          }
        : undefined,
  };
}

function paragraphFromSnapshot(
  snapshot: BlockSnapshot,
  context: DocumentExportContext
): ConversionResult<ParagraphBlockV1> {
  if (snapshot.props.type !== 'text') {
    return errorResult('block.invalid_property', 'Paragraph type is not text.');
  }
  const text = textFromSnapshot(snapshot);
  const children = convertChildrenFromSnapshot(snapshot.children, context);
  return {
    diagnostics: [...text.diagnostics, ...children.diagnostics],
    lossy: text.lossy || children.lossy,
    value:
      text.value && children.value
        ? {
            id: snapshot.id,
            type: 'paragraph',
            content: text.value,
            children: children.value,
          }
        : undefined,
  };
}

export const paragraphCodec: DocumentBlockCodec<ParagraphBlockV1> = {
  type: 'paragraph',
  flavours: ['affine:paragraph'],
  fromSnapshot: paragraphFromSnapshot,
  toSnapshot: (block, context) => textBlockToSnapshot(block, context, 'text'),
};

export const headingCodec: DocumentBlockCodec<HeadingBlockV1> = {
  type: 'heading',
  flavours: ['affine:paragraph'],
  fromSnapshot(snapshot, context) {
    const type = snapshot.props.type;
    if (typeof type !== 'string' || !/^h[1-6]$/.test(type)) {
      return errorResult(
        'block.invalid_property',
        'Paragraph is not a valid heading.'
      );
    }
    const text = textFromSnapshot(snapshot);
    const children = convertChildrenFromSnapshot(snapshot.children, context);
    return {
      diagnostics: [...text.diagnostics, ...children.diagnostics],
      lossy: text.lossy || children.lossy,
      value:
        text.value && children.value
          ? {
              id: snapshot.id,
              type: 'heading',
              level: Number(type.slice(1)) as HeadingBlockV1['level'],
              content: text.value,
              children: children.value,
            }
          : undefined,
    };
  },
  toSnapshot: (block, context) =>
    textBlockToSnapshot(block, context, `h${block.level}`),
};

export const quoteCodec: DocumentBlockCodec<QuoteBlockV1> = {
  type: 'quote',
  flavours: ['affine:paragraph'],
  fromSnapshot(snapshot, context) {
    if (snapshot.props.type !== 'quote') {
      return errorResult('block.invalid_property', 'Paragraph is not a quote.');
    }
    const text = textFromSnapshot(snapshot);
    const children = convertChildrenFromSnapshot(snapshot.children, context);
    return {
      diagnostics: [...text.diagnostics, ...children.diagnostics],
      lossy: text.lossy || children.lossy,
      value:
        text.value && children.value
          ? {
              id: snapshot.id,
              type: 'quote',
              content: text.value,
              children: children.value,
            }
          : undefined,
    };
  },
  toSnapshot: (block, context) => textBlockToSnapshot(block, context, 'quote'),
};

export const listItemCodec: DocumentBlockCodec<ListItemBlockV1> = {
  type: 'list-item',
  flavours: ['affine:list'],
  fromSnapshot(snapshot, context) {
    const style = snapshot.props.type;
    if (style !== 'bulleted' && style !== 'numbered' && style !== 'todo') {
      return errorResult(
        'block.invalid_property',
        `Unsupported list type: ${String(style)}`
      );
    }
    const text = textFromSnapshot(snapshot);
    const children = convertChildrenFromSnapshot(snapshot.children, context);
    return {
      diagnostics: [...text.diagnostics, ...children.diagnostics],
      lossy: text.lossy || children.lossy,
      value:
        text.value && children.value
          ? {
              id: snapshot.id,
              type: 'list-item',
              style,
              ...(style === 'todo'
                ? { checked: snapshot.props.checked === true }
                : {}),
              content: text.value,
              children: children.value,
            }
          : undefined,
    };
  },
  toSnapshot(block, context) {
    const text = inlineToSnapshotText(block.content, context.documentId);
    const children = convertChildrenToSnapshot(block.children, context);
    return {
      diagnostics: [...text.diagnostics, ...children.diagnostics],
      lossy: text.lossy || children.lossy,
      value:
        text.value && children.value
          ? {
              type: 'block',
              id: block.id,
              flavour: 'affine:list',
              version: 1,
              props: {
                type: block.style,
                text: text.value,
                checked: block.style === 'todo' && block.checked === true,
                collapsed: false,
                order: null,
              },
              children: children.value,
            }
          : undefined,
    };
  },
};

export const codeCodec: DocumentBlockCodec<CodeBlockV1> = {
  type: 'code',
  flavours: ['affine:code'],
  fromSnapshot(snapshot) {
    const text = snapshot.props.text;
    if (!isSnapshotText(text)) {
      return errorResult(
        'block.invalid_property',
        'Code text is not a valid snapshot text.'
      );
    }
    return {
      diagnostics: [],
      lossy: false,
      value: {
        id: snapshot.id,
        type: 'code',
        text: text.delta.map(item => item.insert).join(''),
        ...(typeof snapshot.props.language === 'string'
          ? { language: snapshot.props.language }
          : {}),
        children: [],
      },
    };
  },
  toSnapshot(block) {
    return {
      diagnostics: [],
      lossy: false,
      value: {
        type: 'block',
        id: block.id,
        flavour: 'affine:code',
        version: 1,
        props: {
          text: {
            '$blockexpanse:internal:text$': true,
            delta: block.text ? [{ insert: block.text }] : [],
          },
          language: block.language ?? null,
          wrap: false,
          caption: '',
        },
        children: [],
      },
    };
  },
};

export const dividerCodec: DocumentBlockCodec<DividerBlockV1> = {
  type: 'divider',
  flavours: ['affine:divider'],
  fromSnapshot: snapshot => ({
    diagnostics: [],
    lossy: false,
    value: { id: snapshot.id, type: 'divider', children: [] },
  }),
  toSnapshot: block => ({
    diagnostics: [],
    lossy: false,
    value: {
      type: 'block',
      id: block.id,
      flavour: 'affine:divider',
      version: 1,
      props: {},
      children: [],
    },
  }),
};

export const imageCodec: DocumentBlockCodec<ImageBlockV1> = {
  type: 'image',
  flavours: ['affine:image'],
  fromSnapshot(snapshot, context) {
    const assetId = snapshot.props.sourceId;
    if (typeof assetId !== 'string' || assetId.length === 0) {
      return errorResult(
        'block.invalid_property',
        'Image block does not contain a valid sourceId.'
      );
    }
    context.assets[assetId] ??= {};
    return {
      diagnostics: [],
      lossy: false,
      value: {
        id: snapshot.id,
        type: 'image',
        assetId,
        ...(typeof snapshot.props.caption === 'string' &&
        snapshot.props.caption.length
          ? { caption: snapshot.props.caption }
          : {}),
        ...(typeof snapshot.props.width === 'number' && snapshot.props.width > 0
          ? { width: snapshot.props.width }
          : {}),
        ...(typeof snapshot.props.height === 'number' &&
        snapshot.props.height > 0
          ? { height: snapshot.props.height }
          : {}),
        children: [],
      },
    };
  },
  toSnapshot(block, context) {
    if (!context.assets[block.assetId]) {
      return errorResult(
        'asset.missing',
        `Image asset is missing from the manifest: ${block.assetId}`
      );
    }
    return {
      diagnostics: [],
      lossy: false,
      value: {
        type: 'block',
        id: block.id,
        flavour: 'affine:image',
        version: 1,
        props: {
          sourceId: block.assetId,
          caption: block.caption ?? '',
          width: block.width ?? 0,
          height: block.height ?? 0,
          index: 'a0',
          xywh: '[0,0,0,0]',
          lockedBySelf: false,
          rotate: 0,
          size: -1,
        },
        children: [],
      },
    };
  },
};

export const attachmentCodec: DocumentBlockCodec<AttachmentBlockV1> = {
  type: 'attachment',
  flavours: ['affine:attachment'],
  fromSnapshot(snapshot, context) {
    const assetId = snapshot.props.sourceId;
    if (typeof assetId !== 'string' || assetId.length === 0) {
      return errorResult(
        'block.invalid_property',
        'Attachment block does not contain a valid sourceId.'
      );
    }
    context.assets[assetId] = {
      ...context.assets[assetId],
      ...(typeof snapshot.props.name === 'string'
        ? { name: snapshot.props.name }
        : {}),
      ...(typeof snapshot.props.type === 'string'
        ? { mimeType: snapshot.props.type }
        : {}),
      ...(typeof snapshot.props.size === 'number'
        ? { size: snapshot.props.size }
        : {}),
    };
    return {
      diagnostics: [],
      lossy: false,
      value: {
        id: snapshot.id,
        type: 'attachment',
        assetId,
        ...(typeof snapshot.props.caption === 'string' &&
        snapshot.props.caption.length
          ? { caption: snapshot.props.caption }
          : {}),
        display: snapshot.props.embed === true ? 'embed' : 'card',
        children: [],
      },
    };
  },
  toSnapshot(block, context) {
    const asset = context.assets[block.assetId];
    if (!asset) {
      return errorResult(
        'asset.missing',
        `Attachment asset is missing from the manifest: ${block.assetId}`
      );
    }
    return {
      diagnostics: [],
      lossy: false,
      value: {
        type: 'block',
        id: block.id,
        flavour: 'affine:attachment',
        version: 1,
        props: {
          sourceId: block.assetId,
          name: asset.name ?? '',
          size: asset.size ?? 0,
          type: asset.mimeType ?? 'application/octet-stream',
          caption: block.caption,
          embed: block.display === 'embed',
          style: 'horizontalThin',
          index: 'a0',
          xywh: '[0,0,0,0]',
          lockedBySelf: false,
          rotate: 0,
        },
        children: [],
      },
    };
  },
};

export const coreDocumentBlockCodecs = [
  paragraphCodec,
  headingCodec,
  quoteCodec,
  listItemCodec,
  codeCodec,
  dividerCodec,
  imageCodec,
  attachmentCodec,
] as const;
