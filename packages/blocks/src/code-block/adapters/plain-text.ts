import type { DeltaInsert } from '@blockexpanse/inline';

import { CodeBlockSchema } from '@blockexpanse/affine-model';
import {
  BlockPlainTextAdapterExtension,
  type BlockPlainTextAdapterMatcher,
} from '@blockexpanse/affine-shared/adapters';

export const codeBlockPlainTextAdapterMatcher: BlockPlainTextAdapterMatcher = {
  flavour: CodeBlockSchema.model.flavour,
  toMatch: () => false,
  fromMatch: o => o.node.flavour === CodeBlockSchema.model.flavour,
  toBlockSnapshot: {},
  fromBlockSnapshot: {
    enter: (o, context) => {
      const text = (o.node.props.text ?? { delta: [] }) as {
        delta: DeltaInsert[];
      };
      const buffer = text.delta.map(delta => delta.insert).join('');
      context.textBuffer.content += buffer;
      context.textBuffer.content += '\n';
    },
  },
};

export const CodeBlockPlainTextAdapterExtension =
  BlockPlainTextAdapterExtension(codeBlockPlainTextAdapterMatcher);
