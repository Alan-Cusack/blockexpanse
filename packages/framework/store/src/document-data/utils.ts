import type { Diagnostic, JsonObject } from '@blockexpanse/document-data';

import type {
  ConversionResult,
  SnapshotText,
  SnapshotTextDelta,
} from './types.js';

export function errorResult<T>(
  code: string,
  message: string,
  path: Array<number | string> = []
): ConversionResult<T> {
  return {
    diagnostics: [{ code, message, path, severity: 'error' }],
    lossy: false,
  };
}

export function mergeDiagnostics(...diagnostics: Diagnostic[][]): Diagnostic[] {
  return diagnostics.flat();
}

export function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isSnapshotText(value: unknown): value is SnapshotText {
  if (!isJsonObject(value)) return false;
  return (
    value['$blockexpanse:internal:text$'] === true &&
    Array.isArray(value.delta) &&
    value.delta.every(isSnapshotTextDelta)
  );
}

function isSnapshotTextDelta(value: unknown): value is SnapshotTextDelta {
  return (
    isJsonObject(value) &&
    typeof value.insert === 'string' &&
    (value.attributes === undefined || isJsonObject(value.attributes))
  );
}

export function snapshotText(delta: SnapshotTextDelta[]): SnapshotText {
  return { '$blockexpanse:internal:text$': true, delta };
}
