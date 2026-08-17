import type { DocumentDataV1 } from './types.js';

export type ProjectionStatus = 'error' | 'pending' | 'ready';

export interface DocumentProjectionJob {
  documentId: string;
  targetRevision: number;
}

export interface DocumentProjectionV1 {
  content: DocumentDataV1;
  documentId: string;
  plainText?: string;
  sourceRevision: number;
  specVersion: '1.0';
}

export interface DocumentProjectionState {
  currentRevision: number;
  projectedRevision: number;
  projectionStatus: ProjectionStatus;
}

export function canApplyProjection(
  currentSourceRevision: number,
  targetRevision: number
) {
  return (
    Number.isSafeInteger(currentSourceRevision) &&
    Number.isSafeInteger(targetRevision) &&
    targetRevision >= 0 &&
    targetRevision > currentSourceRevision
  );
}
