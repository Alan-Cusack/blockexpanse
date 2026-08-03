import type { ExtensionType } from '@blockexpanse/block-std';

import {
  embedFigmaBlockMarkdownAdapterMatcher,
  EmbedFigmaMarkdownAdapterExtension,
  embedGithubBlockMarkdownAdapterMatcher,
  EmbedGithubMarkdownAdapterExtension,
  embedLinkedDocBlockMarkdownAdapterMatcher,
  EmbedLinkedDocMarkdownAdapterExtension,
  embedLoomBlockMarkdownAdapterMatcher,
  EmbedLoomMarkdownAdapterExtension,
  EmbedSyncedDocBlockMarkdownAdapterExtension,
  embedSyncedDocBlockMarkdownAdapterMatcher,
  embedYoutubeBlockMarkdownAdapterMatcher,
  EmbedYoutubeMarkdownAdapterExtension,
} from '@blockexpanse/affine-block-embed';
import {
  ListBlockMarkdownAdapterExtension,
  listBlockMarkdownAdapterMatcher,
} from '@blockexpanse/affine-block-list';
import {
  ParagraphBlockMarkdownAdapterExtension,
  paragraphBlockMarkdownAdapterMatcher,
} from '@blockexpanse/affine-block-paragraph';

import {
  BookmarkBlockMarkdownAdapterExtension,
  bookmarkBlockMarkdownAdapterMatcher,
} from '../../../bookmark-block/adapters/markdown.js';
import {
  CodeBlockMarkdownAdapterExtension,
  codeBlockMarkdownAdapterMatcher,
} from '../../../code-block/adapters/markdown.js';
import {
  DatabaseBlockMarkdownAdapterExtension,
  databaseBlockMarkdownAdapterMatcher,
} from '../../../database-block/adapters/markdown.js';
import {
  DividerBlockMarkdownAdapterExtension,
  dividerBlockMarkdownAdapterMatcher,
} from '../../../divider-block/adapters/markdown.js';
import {
  ImageBlockMarkdownAdapterExtension,
  imageBlockMarkdownAdapterMatcher,
} from '../../../image-block/adapters/markdown.js';
import {
  LatexBlockMarkdownAdapterExtension,
  latexBlockMarkdownAdapterMatcher,
} from '../../../latex-block/adapters/markdown.js';
import {
  RootBlockMarkdownAdapterExtension,
  rootBlockMarkdownAdapterMatcher,
} from '../../../root-block/adapters/markdown.js';
import {
  TableBlockMarkdownAdapterExtension,
  tableBlockMarkdownAdapterMatcher,
} from '../../../table-block/adapters/markdown.js';

export const defaultBlockMarkdownAdapterMatchers = [
  embedFigmaBlockMarkdownAdapterMatcher,
  embedGithubBlockMarkdownAdapterMatcher,
  embedLinkedDocBlockMarkdownAdapterMatcher,
  embedLoomBlockMarkdownAdapterMatcher,
  embedSyncedDocBlockMarkdownAdapterMatcher,
  embedYoutubeBlockMarkdownAdapterMatcher,
  listBlockMarkdownAdapterMatcher,
  paragraphBlockMarkdownAdapterMatcher,
  bookmarkBlockMarkdownAdapterMatcher,
  codeBlockMarkdownAdapterMatcher,
  tableBlockMarkdownAdapterMatcher,
  databaseBlockMarkdownAdapterMatcher,
  dividerBlockMarkdownAdapterMatcher,
  imageBlockMarkdownAdapterMatcher,
  latexBlockMarkdownAdapterMatcher,
  rootBlockMarkdownAdapterMatcher,
];

export const BlockMarkdownAdapterExtensions: ExtensionType[] = [
  EmbedFigmaMarkdownAdapterExtension,
  EmbedGithubMarkdownAdapterExtension,
  EmbedLinkedDocMarkdownAdapterExtension,
  EmbedLoomMarkdownAdapterExtension,
  EmbedSyncedDocBlockMarkdownAdapterExtension,
  EmbedYoutubeMarkdownAdapterExtension,
  ListBlockMarkdownAdapterExtension,
  ParagraphBlockMarkdownAdapterExtension,
  BookmarkBlockMarkdownAdapterExtension,
  CodeBlockMarkdownAdapterExtension,
  TableBlockMarkdownAdapterExtension,
  DatabaseBlockMarkdownAdapterExtension,
  DividerBlockMarkdownAdapterExtension,
  ImageBlockMarkdownAdapterExtension,
  LatexBlockMarkdownAdapterExtension,
  RootBlockMarkdownAdapterExtension,
];
