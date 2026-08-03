import { createEmbedBlockHtmlAdapterMatcher } from '@blockexpanse/affine-block-embed';
import { BookmarkBlockSchema } from '@blockexpanse/affine-model';
import { BlockHtmlAdapterExtension } from '@blockexpanse/affine-shared/adapters';

export const bookmarkBlockHtmlAdapterMatcher =
  createEmbedBlockHtmlAdapterMatcher(BookmarkBlockSchema.model.flavour);

export const BookmarkBlockHtmlAdapterExtension = BlockHtmlAdapterExtension(
  bookmarkBlockHtmlAdapterMatcher
);
