import type { Command } from '@blockexpanse/block-std';

import { Slice } from '@blockexpanse/store';

export const copySelectedModelsCommand: Command<'draftedModels' | 'onCopy'> = (
  ctx,
  next
) => {
  const models = ctx.draftedModels;
  if (!models) {
    console.error(
      '`draftedModels` is required, you need to use `draftSelectedModels` command before adding this command to the pipeline.'
    );
    return;
  }

  models
    .then(models => {
      const slice = Slice.fromModels(ctx.std.doc, models);

      return ctx.std.clipboard.copy(slice);
    })
    .then(() => ctx.onCopy?.())
    .catch(console.error);
  return next();
};

declare global {
  namespace BlockExpanse {
    interface CommandContext {
      onCopy?: () => void;
    }
    interface Commands {
      copySelectedModels: typeof copySelectedModelsCommand;
    }
  }
}
