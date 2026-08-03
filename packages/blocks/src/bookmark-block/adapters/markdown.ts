import { createEmbedBlockMarkdownAdapterMatcher } from '@blockexpanse/affine-block-embed';
import { BookmarkBlockSchema } from '@blockexpanse/affine-model';
import { BlockMarkdownAdapterExtension } from '@blockexpanse/affine-shared/adapters';

export const bookmarkBlockMarkdownAdapterMatcher =
  createEmbedBlockMarkdownAdapterMatcher(BookmarkBlockSchema.model.flavour);

export const BookmarkBlockMarkdownAdapterExtension =
  BlockMarkdownAdapterExtension(bookmarkBlockMarkdownAdapterMatcher);
