import type { BlockCommands } from '@blockexpanse/block-std';

import {
  getSelectedPeekableBlocksCommand,
  peekSelectedBlockCommand,
} from '@blockexpanse/affine-components/peek';
import { textCommands } from '@blockexpanse/affine-components/rich-text';
import {
  clearAndSelectFirstModelCommand,
  copySelectedModelsCommand,
  deleteSelectedModelsCommand,
  draftSelectedModelsCommand,
  duplicateSelectedModelsCommand,
  getSelectedModelsCommand,
  getSelectionRectsCommand,
  retainFirstModelCommand,
} from '@blockexpanse/affine-shared/commands';

export const commands: BlockCommands = {
  // models
  clearAndSelectFirstModel: clearAndSelectFirstModelCommand,
  copySelectedModels: copySelectedModelsCommand,
  deleteSelectedModels: deleteSelectedModelsCommand,
  draftSelectedModels: draftSelectedModelsCommand,
  duplicateSelectedModels: duplicateSelectedModelsCommand,
  getSelectedModels: getSelectedModelsCommand,
  retainFirstModel: retainFirstModelCommand,
  // text
  ...textCommands,
  // peekable
  peekSelectedBlock: peekSelectedBlockCommand,
  getSelectedPeekableBlocks: getSelectedPeekableBlocksCommand,
  // rect
  getSelectionRects: getSelectionRectsCommand,
};
