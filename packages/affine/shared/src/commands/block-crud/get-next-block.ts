import type { BlockComponent, Command } from '@blockexpanse/block-std';

import { assertExists } from '@blockexpanse/global/utils';

import { getNextContentBlock } from '../../utils/index.js';

function getNextBlock(std: BlockExpanse.Std, path: string) {
  const view = std.view;
  const model = std.doc.getBlock(path)?.model;
  if (!model) return null;
  const nextModel = getNextContentBlock(std.host, model);
  if (!nextModel) return null;
  return view.getBlock(nextModel.id);
}

export const getNextBlockCommand: Command<
  'currentSelectionPath',
  'nextBlock',
  {
    path?: string;
  }
> = (ctx, next) => {
  const path = ctx.path ?? ctx.currentSelectionPath;
  assertExists(
    path,
    '`path` is required, you need to pass it in args or ctx before adding this command to the pipeline.'
  );

  const nextBlock = getNextBlock(ctx.std, path);

  if (nextBlock) {
    next({ nextBlock });
  }
};

declare global {
  namespace BlockExpanse {
    interface CommandContext {
      nextBlock?: BlockComponent;
    }

    interface Commands {
      getNextBlock: typeof getNextBlockCommand;
    }
  }
}
