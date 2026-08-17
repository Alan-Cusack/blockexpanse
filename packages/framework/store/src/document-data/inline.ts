import type {
  Diagnostic,
  InlineContentV1,
  JsonObject,
  TextMarkV1,
} from '@blockexpanse/document-data';

import type {
  ConversionResult,
  SnapshotText,
  SnapshotTextDelta,
} from './types.js';

import { snapshotText } from './utils.js';

const markAttributes = [
  'bold',
  'italic',
  'underline',
  'strike',
  'code',
] as const;

function diagnostic(
  code: string,
  message: string,
  severity: Diagnostic['severity'] = 'warning'
): Diagnostic {
  return { code, message, path: [], severity };
}

function attributesToMarks(attributes: JsonObject): TextMarkV1[] {
  const marks: TextMarkV1[] = [];
  for (const type of markAttributes) {
    if (attributes[type] === true) marks.push({ type });
  }
  if (typeof attributes.color === 'string') {
    marks.push({ type: 'color', color: attributes.color });
  }
  if (typeof attributes.background === 'string') {
    marks.push({ type: 'background', color: attributes.background });
  }
  return marks;
}

function marksToAttributes(marks: TextMarkV1[]): JsonObject {
  const attributes: JsonObject = {};
  for (const mark of marks) {
    if (mark.type === 'color') attributes.color = mark.color;
    else if (mark.type === 'background') attributes.background = mark.color;
    else attributes[mark.type] = true;
  }
  return attributes;
}

function referenceToInline(
  insert: string,
  reference: JsonObject
): InlineContentV1 | undefined {
  if (typeof reference.pageId !== 'string') return;
  const params = reference.params;
  if (
    params &&
    typeof params === 'object' &&
    !Array.isArray(params) &&
    Array.isArray(params.blockIds) &&
    typeof params.blockIds[0] === 'string'
  ) {
    return {
      type: 'mention',
      targetType: 'block',
      targetId: params.blockIds[0],
      label: typeof reference.title === 'string' ? reference.title : insert,
    };
  }
  return {
    type: 'mention',
    targetType: 'document',
    targetId: reference.pageId,
    label: typeof reference.title === 'string' ? reference.title : insert,
  };
}

export function snapshotTextToInline(
  text: SnapshotText
): ConversionResult<InlineContentV1[]> {
  const diagnostics: Diagnostic[] = [];
  const value: InlineContentV1[] = [];
  let lossy = false;

  for (const operation of text.delta) {
    const attributes = operation.attributes ?? {};
    const reference = attributes.reference;
    const mention = attributes.mention;
    if (
      reference &&
      typeof reference === 'object' &&
      !Array.isArray(reference)
    ) {
      const converted = referenceToInline(operation.insert, reference);
      if (converted) value.push(converted);
      else {
        diagnostics.push(
          diagnostic(
            'inline.unsupported_attribute',
            'Invalid reference attribute was converted to text.'
          )
        );
        value.push({
          type: 'text',
          text: operation.insert,
          marks: attributesToMarks(attributes),
        });
        lossy = true;
      }
      continue;
    }
    if (mention && typeof mention === 'object' && !Array.isArray(mention)) {
      if (
        (mention.targetType === 'user' ||
          mention.targetType === 'document' ||
          mention.targetType === 'block') &&
        typeof mention.targetId === 'string'
      ) {
        value.push({
          type: 'mention',
          targetType: mention.targetType,
          targetId: mention.targetId,
          label: typeof mention.label === 'string' ? mention.label : undefined,
        });
        continue;
      }
    }

    const marks = attributesToMarks(attributes);
    if (typeof attributes.link === 'string') {
      value.push({
        type: 'link',
        href: attributes.link,
        text: operation.insert,
        marks,
      });
    } else {
      value.push({ type: 'text', text: operation.insert, marks });
    }

    const known = new Set([
      ...markAttributes,
      'background',
      'color',
      'link',
      'mention',
      'reference',
    ]);
    const unknown = Object.keys(attributes).filter(key => !known.has(key));
    if (unknown.length) {
      diagnostics.push(
        diagnostic(
          'inline.unsupported_attribute',
          `Unsupported inline attributes were omitted: ${unknown.join(', ')}`
        )
      );
      lossy = true;
    }
  }
  return { diagnostics, lossy, value };
}

function mentionToDelta(
  inline: Extract<InlineContentV1, { type: 'mention' }>,
  documentId: string
): SnapshotTextDelta {
  if (inline.targetType === 'document') {
    return {
      insert: inline.label ?? ' ',
      attributes: {
        reference: {
          type: 'LinkedPage',
          pageId: inline.targetId,
          ...(inline.label ? { title: inline.label } : {}),
        },
      },
    };
  }
  if (inline.targetType === 'block') {
    return {
      insert: inline.label ?? ' ',
      attributes: {
        reference: {
          type: 'LinkedPage',
          pageId: documentId,
          params: { blockIds: [inline.targetId] },
          ...(inline.label ? { title: inline.label } : {}),
        },
      },
    };
  }
  return {
    insert: inline.label ?? ' ',
    attributes: {
      mention: {
        targetType: inline.targetType,
        targetId: inline.targetId,
        ...(inline.label ? { label: inline.label } : {}),
      },
    },
  };
}

export function inlineToSnapshotText(
  content: InlineContentV1[],
  documentId: string
): ConversionResult<SnapshotText> {
  const delta: SnapshotTextDelta[] = content.map(inline => {
    if (inline.type === 'mention') return mentionToDelta(inline, documentId);
    const attributes = marksToAttributes(inline.marks);
    if (inline.type === 'link') attributes.link = inline.href;
    return {
      insert: inline.text,
      ...(Object.keys(attributes).length ? { attributes } : {}),
    };
  });
  return { diagnostics: [], lossy: false, value: snapshotText(delta) };
}
