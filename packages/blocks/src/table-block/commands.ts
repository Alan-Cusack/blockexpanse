import type { BlockCommands, Command } from '@blockexpanse/block-std';

import {
  type TableBlockModel,
  TableModelFlavour,
} from '@blockexpanse/affine-model';

import { TableDataManager } from './table-data-manager.js';

export const insertTableBlockCommand: Command<
  'selectedModels',
  'insertedTableBlockId',
  {
    place?: 'after' | 'before';
    removeEmptyLine?: boolean;
  }
> = (ctx, next) => {
  const { selectedModels, place, removeEmptyLine, std } = ctx;
  if (!selectedModels?.length) return;

  const targetModel =
    place === 'before'
      ? selectedModels[0]
      : selectedModels[selectedModels.length - 1];

  if (!targetModel) return;

  const result = std.doc.addSiblingBlocks(
    targetModel,
    [{ flavour: TableModelFlavour }],
    place
  );
  const blockId = result[0];

  if (blockId == null) return;

  const model = std.doc.getBlock(blockId)?.model as TableBlockModel;
  if (model == null) return;

  const dataManager = new TableDataManager(model);

  dataManager.addNRow(2);
  dataManager.addNColumn(2);

  if (removeEmptyLine && targetModel.text?.length === 0) {
    std.doc.deleteBlock(targetModel);
  }

  next({ insertedTableBlockId: blockId });
};

export const commands: BlockCommands = {
  insertTableBlock: insertTableBlockCommand,
};

declare global {
  namespace BlockExpanse {
    interface CommandContext {
      insertedTableBlockId?: string;
    }

    interface Commands {
      insertTableBlock: typeof insertTableBlockCommand;
    }
  }
}
