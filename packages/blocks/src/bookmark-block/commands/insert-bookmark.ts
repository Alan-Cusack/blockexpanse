import type { EmbedCardStyle } from '@blockexpanse/affine-model';
import type { Command } from '@blockexpanse/block-std';

import { insertEmbedCard } from '@blockexpanse/affine-block-embed';
import { EmbedOptionProvider } from '@blockexpanse/affine-shared/services';

export const insertBookmarkCommand: Command<
  never,
  'insertedLinkType',
  { url: string }
> = (ctx, next) => {
  const { url, std } = ctx;
  const embedOptions = std.get(EmbedOptionProvider).getEmbedBlockOptions(url);

  let flavour = 'affine:bookmark';
  let targetStyle: EmbedCardStyle = 'vertical';
  const props: Record<string, unknown> = { url };
  if (embedOptions) {
    flavour = embedOptions.flavour;
    targetStyle = embedOptions.styles[0];
  }
  insertEmbedCard(std, { flavour, targetStyle, props });
  next();
};
