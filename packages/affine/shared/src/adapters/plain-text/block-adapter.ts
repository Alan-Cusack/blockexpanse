import type { ExtensionType } from '@blockexpanse/block-std';

import {
  createIdentifier,
  type ServiceIdentifier,
} from '@blockexpanse/global/di';

import type { BlockAdapterMatcher, TextBuffer } from '../types/adapter.js';

export type BlockPlainTextAdapterMatcher = BlockAdapterMatcher<TextBuffer>;

export const BlockPlainTextAdapterMatcherIdentifier =
  createIdentifier<BlockPlainTextAdapterMatcher>(
    'BlockPlainTextAdapterMatcher'
  );

export function BlockPlainTextAdapterExtension(
  matcher: BlockPlainTextAdapterMatcher
): ExtensionType & {
  identifier: ServiceIdentifier<BlockPlainTextAdapterMatcher>;
} {
  const identifier = BlockPlainTextAdapterMatcherIdentifier(matcher.flavour);
  return {
    setup: di => {
      di.addImpl(identifier, () => matcher);
    },
    identifier,
  };
}
