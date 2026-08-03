import { createEmbedBlockPlainTextAdapterMatcher } from '@blockexpanse/affine-block-embed';
import { BookmarkBlockSchema } from '@blockexpanse/affine-model';
import { BlockPlainTextAdapterExtension } from '@blockexpanse/affine-shared/adapters';

export const bookmarkBlockPlainTextAdapterMatcher =
  createEmbedBlockPlainTextAdapterMatcher(BookmarkBlockSchema.model.flavour);

export const BookmarkBlockPlainTextAdapterExtension =
  BlockPlainTextAdapterExtension(bookmarkBlockPlainTextAdapterMatcher);
