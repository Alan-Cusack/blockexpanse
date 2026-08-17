import type { DocumentDataLimits } from './types.js';

export const defaultDocumentDataLimits: Readonly<DocumentDataLimits> = {
  maxAssets: 10_000,
  maxBlocks: 50_000,
  maxDepth: 128,
  maxDocumentBytes: 10 * 1024 * 1024,
  maxExtensionBytes: 1024 * 1024,
  maxInlineRuns: 200_000,
  maxTextLength: 5_000_000,
};
