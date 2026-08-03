import type { ReferenceParams } from '@blockexpanse/affine-model';
import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

export interface QuickSearchService {
  openQuickSearch: () => Promise<QuickSearchResult>;
}

export type QuickSearchResult =
  | {
      docId: string;
      params?: ReferenceParams;
    }
  | {
      externalUrl: string;
    }
  | null;

export const QuickSearchProvider = createIdentifier<QuickSearchService>(
  'AffineQuickSearchService'
);

export function QuickSearchExtension(
  quickSearchService: QuickSearchService
): ExtensionType {
  return {
    setup: di => {
      di.addImpl(QuickSearchProvider, quickSearchService);
    },
  };
}
