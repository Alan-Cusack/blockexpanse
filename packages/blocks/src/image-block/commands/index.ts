import type { BlockCommands } from '@blockexpanse/block-std';

import { getImageSelectionsCommand } from '@blockexpanse/affine-shared/commands';

import { insertImagesCommand } from './insert-images.js';

export const commands: BlockCommands = {
  getImageSelections: getImageSelectionsCommand,
  insertImages: insertImagesCommand,
};
