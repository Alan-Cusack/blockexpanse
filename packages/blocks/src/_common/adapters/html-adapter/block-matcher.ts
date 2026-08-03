import type { ExtensionType } from '@blockexpanse/block-std';

import {
  EmbedFigmaBlockHtmlAdapterExtension,
  embedFigmaBlockHtmlAdapterMatcher,
  EmbedGithubBlockHtmlAdapterExtension,
  embedGithubBlockHtmlAdapterMatcher,
  embedLinkedDocBlockHtmlAdapterMatcher,
  EmbedLinkedDocHtmlAdapterExtension,
  EmbedLoomBlockHtmlAdapterExtension,
  embedLoomBlockHtmlAdapterMatcher,
  EmbedSyncedDocBlockHtmlAdapterExtension,
  embedSyncedDocBlockHtmlAdapterMatcher,
  EmbedYoutubeBlockHtmlAdapterExtension,
  embedYoutubeBlockHtmlAdapterMatcher,
} from '@blockexpanse/affine-block-embed';
import {
  ListBlockHtmlAdapterExtension,
  listBlockHtmlAdapterMatcher,
} from '@blockexpanse/affine-block-list';
import {
  ParagraphBlockHtmlAdapterExtension,
  paragraphBlockHtmlAdapterMatcher,
} from '@blockexpanse/affine-block-paragraph';

import {
  BookmarkBlockHtmlAdapterExtension,
  bookmarkBlockHtmlAdapterMatcher,
} from '../../../bookmark-block/adapters/html.js';
import {
  CodeBlockHtmlAdapterExtension,
  codeBlockHtmlAdapterMatcher,
} from '../../../code-block/adapters/html.js';
import {
  DatabaseBlockHtmlAdapterExtension,
  databaseBlockHtmlAdapterMatcher,
} from '../../../database-block/adapters/html.js';
import {
  DividerBlockHtmlAdapterExtension,
  dividerBlockHtmlAdapterMatcher,
} from '../../../divider-block/adapters/html.js';
import {
  ImageBlockHtmlAdapterExtension,
  imageBlockHtmlAdapterMatcher,
} from '../../../image-block/adapters/html.js';
import {
  RootBlockHtmlAdapterExtension,
  rootBlockHtmlAdapterMatcher,
} from '../../../root-block/adapters/html.js';
import {
  TableBlockHtmlAdapterExtension,
  tableBlockHtmlAdapterMatcher,
} from '../../../table-block/adapters/html.js';

export const defaultBlockHtmlAdapterMatchers = [
  listBlockHtmlAdapterMatcher,
  paragraphBlockHtmlAdapterMatcher,
  codeBlockHtmlAdapterMatcher,
  dividerBlockHtmlAdapterMatcher,
  imageBlockHtmlAdapterMatcher,
  rootBlockHtmlAdapterMatcher,
  embedYoutubeBlockHtmlAdapterMatcher,
  embedFigmaBlockHtmlAdapterMatcher,
  embedLoomBlockHtmlAdapterMatcher,
  embedGithubBlockHtmlAdapterMatcher,
  bookmarkBlockHtmlAdapterMatcher,
  tableBlockHtmlAdapterMatcher,
  databaseBlockHtmlAdapterMatcher,
  embedLinkedDocBlockHtmlAdapterMatcher,
  embedSyncedDocBlockHtmlAdapterMatcher,
];

export const BlockHtmlAdapterExtensions: ExtensionType[] = [
  ListBlockHtmlAdapterExtension,
  ParagraphBlockHtmlAdapterExtension,
  CodeBlockHtmlAdapterExtension,
  DividerBlockHtmlAdapterExtension,
  ImageBlockHtmlAdapterExtension,
  RootBlockHtmlAdapterExtension,
  EmbedYoutubeBlockHtmlAdapterExtension,
  EmbedFigmaBlockHtmlAdapterExtension,
  EmbedLoomBlockHtmlAdapterExtension,
  EmbedGithubBlockHtmlAdapterExtension,
  BookmarkBlockHtmlAdapterExtension,
  TableBlockHtmlAdapterExtension,
  DatabaseBlockHtmlAdapterExtension,
  EmbedLinkedDocHtmlAdapterExtension,
  EmbedSyncedDocBlockHtmlAdapterExtension,
];
