import type { MarkdownAST } from '@blockexpanse/affine-shared/adapters';

import type { ElementModelMatcher } from '../../type.js';

export type ElementModelToMarkdownAdapterMatcher =
  ElementModelMatcher<MarkdownAST>;
