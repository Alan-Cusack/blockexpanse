import type { ReferenceParams } from '@blockexpanse/affine-model';
import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

export interface GenerateDocUrlService {
  generateDocUrl: (docId: string, params?: ReferenceParams) => string | void;
}

export const GenerateDocUrlProvider = createIdentifier<GenerateDocUrlService>(
  'GenerateDocUrlService'
);

export function GenerateDocUrlExtension(
  generateDocUrlProvider: GenerateDocUrlService
): ExtensionType {
  return {
    setup: di => {
      di.addImpl(GenerateDocUrlProvider, generateDocUrlProvider);
    },
  };
}
