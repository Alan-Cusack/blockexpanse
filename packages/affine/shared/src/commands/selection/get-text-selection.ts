import type { Command, TextSelection } from '@blockexpanse/block-std';

export const getTextSelectionCommand: Command<never, 'currentTextSelection'> = (
  ctx,
  next
) => {
  const currentTextSelection = ctx.std.selection.find('text');
  if (!currentTextSelection) return;

  next({ currentTextSelection });
};

declare global {
  namespace BlockExpanse {
    interface CommandContext {
      currentTextSelection?: TextSelection;
    }

    interface Commands {
      getTextSelection: typeof getTextSelectionCommand;
    }
  }
}
