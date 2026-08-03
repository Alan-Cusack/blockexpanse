import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';
import { Slot } from '@blockexpanse/global/utils';

import type { RefNodeSlots } from '../inline/index.js';

export const RefNodeSlotsProvider =
  createIdentifier<RefNodeSlots>('AffineRefNodeSlots');

export function RefNodeSlotsExtension(
  slots: RefNodeSlots = {
    docLinkClicked: new Slot(),
  }
): ExtensionType {
  return {
    setup: di => {
      di.addImpl(RefNodeSlotsProvider, () => slots);
    },
  };
}
