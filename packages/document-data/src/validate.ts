import type {
  BlockNodeV1,
  Diagnostic,
  DocumentDataLimits,
  DocumentDataV1,
  InlineContentV1,
  ValidationOptions,
  ValidationResult,
} from './types.js';

import { defaultDocumentDataLimits } from './limits.js';
import { documentDataV1Schema } from './schema.js';

const allowedUrlProtocols = new Set(['http:', 'https:', 'mailto:']);

function diagnostic(
  code: string,
  message: string,
  path: Array<number | string>
): Diagnostic {
  return { code, message, path, severity: 'error' };
}

function validateUrl(href: string): boolean {
  try {
    return allowedUrlProtocols.has(new URL(href).protocol);
  } catch {
    return false;
  }
}

function inspectInline(
  inline: InlineContentV1,
  path: Array<number | string>,
  state: { inlineRuns: number; textLength: number },
  diagnostics: Diagnostic[]
) {
  state.inlineRuns += 1;
  if ('text' in inline) state.textLength += inline.text.length;
  if (inline.type === 'mention' && inline.label) {
    state.textLength += inline.label.length;
  }
  if (inline.type === 'link' && !validateUrl(inline.href)) {
    diagnostics.push(
      diagnostic(
        'inline.invalid_url',
        'Link URL uses an unsupported protocol.',
        [...path, 'href']
      )
    );
  }
}

function inspectBlock(
  block: BlockNodeV1,
  path: Array<number | string>,
  depth: number,
  state: {
    assetIds: Set<string>;
    blockIds: Set<string>;
    blocks: number;
    inlineRuns: number;
    maxDepth: number;
    textLength: number;
  },
  diagnostics: Diagnostic[]
) {
  state.blocks += 1;
  state.maxDepth = Math.max(state.maxDepth, depth);
  if (state.blockIds.has(block.id)) {
    diagnostics.push(
      diagnostic('block.duplicate_id', `Duplicate block id: ${block.id}`, [
        ...path,
        'id',
      ])
    );
  }
  state.blockIds.add(block.id);
  if (block.type === 'image' || block.type === 'attachment') {
    state.assetIds.add(block.assetId);
  }

  if ('content' in block) {
    block.content.forEach((inline, index) => {
      inspectInline(inline, [...path, 'content', index], state, diagnostics);
    });
  }
  if (block.type === 'code') state.textLength += block.text.length;
  block.children.forEach((child, index) => {
    inspectBlock(
      child,
      [...path, 'children', index],
      depth + 1,
      state,
      diagnostics
    );
  });
}

function inspectLimits(
  data: DocumentDataV1,
  limits: DocumentDataLimits,
  diagnostics: Diagnostic[]
) {
  const state = {
    assetIds: new Set<string>(),
    blockIds: new Set<string>(),
    blocks: 0,
    inlineRuns: 0,
    maxDepth: 0,
    textLength: data.document.title.length,
  };

  data.document.blocks.forEach((block, index) => {
    inspectBlock(block, ['document', 'blocks', index], 1, state, diagnostics);
  });

  for (const assetId of state.assetIds) {
    if (!(assetId in data.assets)) {
      diagnostics.push(
        diagnostic(
          'asset.missing',
          `Referenced asset is missing from the asset manifest: ${assetId}`,
          ['assets', assetId]
        )
      );
    }
  }

  const byteLength = new TextEncoder().encode(JSON.stringify(data)).byteLength;
  const extensionBytes = new TextEncoder().encode(
    JSON.stringify(data.extensions)
  ).byteLength;
  const checks: Array<[boolean, string, string, Array<number | string>]> = [
    [
      byteLength > limits.maxDocumentBytes,
      'maxDocumentBytes',
      'Document byte size exceeds the configured limit.',
      [],
    ],
    [
      state.blocks > limits.maxBlocks,
      'maxBlocks',
      'Block count exceeds the configured limit.',
      ['document', 'blocks'],
    ],
    [
      state.maxDepth > limits.maxDepth,
      'maxDepth',
      'Block tree depth exceeds the configured limit.',
      ['document', 'blocks'],
    ],
    [
      state.textLength > limits.maxTextLength,
      'maxTextLength',
      'Text length exceeds the configured limit.',
      ['document'],
    ],
    [
      state.inlineRuns > limits.maxInlineRuns,
      'maxInlineRuns',
      'Inline run count exceeds the configured limit.',
      ['document', 'blocks'],
    ],
    [
      Object.keys(data.assets).length > limits.maxAssets,
      'maxAssets',
      'Asset count exceeds the configured limit.',
      ['assets'],
    ],
    [
      extensionBytes > limits.maxExtensionBytes,
      'maxExtensionBytes',
      'Extensions size exceeds the configured limit.',
      ['extensions'],
    ],
  ];

  for (const [exceeded, limit, message, path] of checks) {
    if (exceeded) {
      diagnostics.push({
        code: 'document.limit_exceeded',
        details: { limit },
        message,
        path,
        severity: 'error',
      });
    }
  }
}

export function validateDocumentData(
  input: unknown,
  options: ValidationOptions = {}
): ValidationResult {
  const parsed = documentDataV1Schema.safeParse(input);
  if (!parsed.success) {
    return {
      diagnostics: parsed.error.issues.map(issue => ({
        code:
          issue.path[0] === 'specVersion'
            ? 'document.unsupported_version'
            : 'document.invalid_format',
        message: issue.message,
        path: issue.path,
        severity: 'error',
      })),
      valid: false,
    };
  }

  const diagnostics: Diagnostic[] = [];
  const limits = { ...defaultDocumentDataLimits, ...options.limits };
  inspectLimits(parsed.data as DocumentDataV1, limits, diagnostics);
  const valid = diagnostics.every(item => item.severity !== 'error');
  return {
    diagnostics,
    valid,
    value: valid ? (parsed.data as DocumentDataV1) : undefined,
  };
}
