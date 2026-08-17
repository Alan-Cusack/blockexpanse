import type {
  BlockNodeV1,
  DocumentDataV1,
  InlineContentV1,
  OperationResult,
  TextMarkV1,
} from './types.js';

import { validateDocumentData } from './validate.js';

const markOrder: Record<TextMarkV1['type'], number> = {
  bold: 0,
  italic: 1,
  underline: 2,
  strike: 3,
  code: 4,
  color: 5,
  background: 6,
};

function markKey(mark: TextMarkV1) {
  return 'color' in mark ? `${mark.type}:${mark.color}` : mark.type;
}

function normalizeMarks(marks: TextMarkV1[]): TextMarkV1[] {
  const unique = new Map(marks.map(mark => [markKey(mark), mark]));
  return [...unique.values()].sort((left, right) => {
    const typeOrder = markOrder[left.type] - markOrder[right.type];
    return typeOrder || markKey(left).localeCompare(markKey(right));
  });
}

function sameMarks(left: TextMarkV1[], right: TextMarkV1[]) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function normalizeInline(content: InlineContentV1[]): InlineContentV1[] {
  const normalized: InlineContentV1[] = [];
  for (const inline of content) {
    if ('text' in inline && inline.text.length === 0) continue;
    const value =
      inline.type === 'mention'
        ? { ...inline }
        : { ...inline, marks: normalizeMarks(inline.marks) };
    const previous = normalized.at(-1);
    if (
      previous &&
      value.type === 'text' &&
      previous.type === 'text' &&
      sameMarks(previous.marks, value.marks)
    ) {
      previous.text += value.text;
    } else if (
      previous &&
      value.type === 'link' &&
      previous.type === 'link' &&
      previous.href === value.href &&
      sameMarks(previous.marks, value.marks)
    ) {
      previous.text += value.text;
    } else {
      normalized.push(value);
    }
  }
  return normalized;
}

function normalizeBlock(block: BlockNodeV1): BlockNodeV1 {
  const children = block.children.map(normalizeBlock);
  if ('content' in block) {
    return { ...block, children, content: normalizeInline(block.content) };
  }
  return { ...block, children };
}

export function normalizeDocumentData(
  input: DocumentDataV1
): OperationResult<DocumentDataV1> {
  const validation = validateDocumentData(input);
  if (!validation.valid || !validation.value) {
    return { diagnostics: validation.diagnostics };
  }

  return {
    diagnostics: [],
    value: {
      ...validation.value,
      assets: { ...validation.value.assets },
      document: {
        ...validation.value.document,
        blocks: validation.value.document.blocks.map(normalizeBlock),
      },
      extensions: { ...validation.value.extensions },
    },
  };
}
