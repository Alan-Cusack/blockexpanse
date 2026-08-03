import type { BlockPlainTextAdapterMatcher } from '@blockexpanse/affine-shared/adapters';
import type { ExtensionType } from '@blockexpanse/block-std';

import {
  EmbedFigmaBlockPlainTextAdapterExtension,
  embedFigmaBlockPlainTextAdapterMatcher,
  EmbedGithubBlockPlainTextAdapterExtension,
  embedGithubBlockPlainTextAdapterMatcher,
  EmbedLinkedDocBlockPlainTextAdapterExtension,
  embedLinkedDocBlockPlainTextAdapterMatcher,
  EmbedLoomBlockPlainTextAdapterExtension,
  embedLoomBlockPlainTextAdapterMatcher,
  EmbedSyncedDocBlockPlainTextAdapterExtension,
  embedSyncedDocBlockPlainTextAdapterMatcher,
  EmbedYoutubeBlockPlainTextAdapterExtension,
  embedYoutubeBlockPlainTextAdapterMatcher,
} from '@blockexpanse/affine-block-embed';
import {
  ListBlockPlainTextAdapterExtension,
  listBlockPlainTextAdapterMatcher,
} from '@blockexpanse/affine-block-list';
import {
  ParagraphBlockPlainTextAdapterExtension,
  paragraphBlockPlainTextAdapterMatcher,
} from '@blockexpanse/affine-block-paragraph';

import {
  BookmarkBlockPlainTextAdapterExtension,
  bookmarkBlockPlainTextAdapterMatcher,
} from '../../../bookmark-block/adapters/plain-text.js';
import {
  CodeBlockPlainTextAdapterExtension,
  codeBlockPlainTextAdapterMatcher,
} from '../../../code-block/adapters/plain-text.js';
import {
  DividerBlockPlainTextAdapterExtension,
  dividerBlockPlainTextAdapterMatcher,
} from '../../../divider-block/adapters/plain-text.js';
import {
  LatexBlockPlainTextAdapterExtension,
  latexBlockPlainTextAdapterMatcher,
} from '../../../latex-block/adapters/plain-text.js';
import {
  TableBlockPlainTextAdapterExtension,
  tableBlockPlainTextAdapterMatcher,
} from '../../../table-block/adapters/plain-text.js';

export const defaultBlockPlainTextAdapterMatchers: BlockPlainTextAdapterMatcher[] =
  [
    paragraphBlockPlainTextAdapterMatcher,
    listBlockPlainTextAdapterMatcher,
    dividerBlockPlainTextAdapterMatcher,
    codeBlockPlainTextAdapterMatcher,
    bookmarkBlockPlainTextAdapterMatcher,
    embedFigmaBlockPlainTextAdapterMatcher,
    embedGithubBlockPlainTextAdapterMatcher,
    embedLoomBlockPlainTextAdapterMatcher,
    embedYoutubeBlockPlainTextAdapterMatcher,
    embedLinkedDocBlockPlainTextAdapterMatcher,
    embedSyncedDocBlockPlainTextAdapterMatcher,
    latexBlockPlainTextAdapterMatcher,
    tableBlockPlainTextAdapterMatcher,
  ];

export const BlockPlainTextAdapterExtensions: ExtensionType[] = [
  ParagraphBlockPlainTextAdapterExtension,
  ListBlockPlainTextAdapterExtension,
  DividerBlockPlainTextAdapterExtension,
  CodeBlockPlainTextAdapterExtension,
  BookmarkBlockPlainTextAdapterExtension,
  EmbedFigmaBlockPlainTextAdapterExtension,
  EmbedGithubBlockPlainTextAdapterExtension,
  EmbedLoomBlockPlainTextAdapterExtension,
  EmbedYoutubeBlockPlainTextAdapterExtension,
  EmbedLinkedDocBlockPlainTextAdapterExtension,
  EmbedSyncedDocBlockPlainTextAdapterExtension,
  LatexBlockPlainTextAdapterExtension,
  TableBlockPlainTextAdapterExtension,
];
