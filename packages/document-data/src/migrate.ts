import type { DocumentDataV1, OperationResult } from './types.js';

import { validateDocumentData } from './validate.js';

export function migrateDocumentData(
  input: unknown,
  targetVersion = '1.0'
): OperationResult<DocumentDataV1> {
  if (targetVersion !== '1.0') {
    return {
      diagnostics: [
        {
          code: 'document.unsupported_version',
          message: `Unsupported target version: ${targetVersion}`,
          path: ['specVersion'],
          severity: 'error',
        },
      ],
    };
  }
  const result = validateDocumentData(input);
  return { diagnostics: result.diagnostics, value: result.value };
}
