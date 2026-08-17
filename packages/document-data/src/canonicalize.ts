import type { DocumentDataV1, JsonObject, JsonValue } from './types.js';

import { normalizeDocumentData } from './normalize.js';

function sortJson(value: JsonValue): JsonValue {
  if (Array.isArray(value)) return value.map(sortJson);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, item]) => [key, sortJson(item)])
    );
  }
  return value;
}

export function canonicalizeDocumentData(
  input: DocumentDataV1
): DocumentDataV1 {
  const result = normalizeDocumentData(input);
  if (!result.value) {
    throw new TypeError(
      'Cannot canonicalize invalid BlockExpanse Document Data.'
    );
  }
  return sortJson(
    result.value as unknown as JsonObject
  ) as unknown as DocumentDataV1;
}
