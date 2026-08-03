import type { Command } from '@blockexpanse/block-std';

export const retainFirstModelCommand: Command<'selectedModels'> = (
  ctx,
  next
) => {
  if (!ctx.selectedModels) {
    console.error(
      '`selectedModels` is required, you need to use `getSelectedModels` command before adding this command to the pipeline.'
    );
    return;
  }

  if (ctx.selectedModels.length > 0) {
    ctx.selectedModels.shift();
  }

  return next();
};

declare global {
  namespace BlockExpanse {
    interface Commands {
      retainFirstModel: typeof retainFirstModelCommand;
    }
  }
}
