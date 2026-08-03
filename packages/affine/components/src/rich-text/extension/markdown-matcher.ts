import type { AffineTextAttributes } from '@blockexpanse/affine-shared/types';
import type { ExtensionType } from '@blockexpanse/block-std';

import {
  createIdentifier,
  type ServiceIdentifier,
} from '@blockexpanse/global/di';

import type { InlineMarkdownMatch } from './type.js';

export const MarkdownMatcherIdentifier = createIdentifier<
  InlineMarkdownMatch<AffineTextAttributes>
>('AffineMarkdownMatcher');

export function InlineMarkdownExtension(
  matcher: InlineMarkdownMatch<AffineTextAttributes>
): ExtensionType & {
  identifier: ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>>;
} {
  const identifier = MarkdownMatcherIdentifier(matcher.name);

  return {
    setup: di => {
      di.addImpl(identifier, () => ({ ...matcher }));
    },
    identifier,
  };
}
