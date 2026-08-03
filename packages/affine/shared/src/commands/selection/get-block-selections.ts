import type { BlockSelection, Command } from '@blockexpanse/block-std';

export const getBlockSelectionsCommand: Command<
  never,
  'currentBlockSelections'
> = (ctx, next) => {
  const currentBlockSelections = ctx.std.selection.filter('block');
  if (currentBlockSelections.length === 0) return;

  next({ currentBlockSelections });
};

declare global {
  namespace BlockExpanse {
    interface CommandContext {
      currentBlockSelections?: BlockSelection[];
    }

    interface Commands {
      getBlockSelections: typeof getBlockSelectionsCommand;
    }
  }
}
