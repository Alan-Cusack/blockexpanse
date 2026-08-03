import type { BlockCommands } from '@blockexpanse/block-std';

import { insertEdgelessTextCommand } from './insert-edgeless-text.js';

export const commands: BlockCommands = {
  insertEdgelessText: insertEdgelessTextCommand,
};
