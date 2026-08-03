import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

import type { PeekViewService } from './type.js';

export const PeekViewProvider = createIdentifier<PeekViewService>(
  'AffinePeekViewProvider'
);

export function PeekViewExtension(service: PeekViewService): ExtensionType {
  return {
    setup: di => {
      di.addImpl(PeekViewProvider, () => service);
    },
  };
}
