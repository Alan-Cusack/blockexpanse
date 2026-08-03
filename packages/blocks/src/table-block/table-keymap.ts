import { textKeymap } from '@blockexpanse/affine-components/rich-text';
import { TableBlockSchema } from '@blockexpanse/affine-model';
import { KeymapExtension } from '@blockexpanse/block-std';

export const TableKeymapExtension = KeymapExtension(textKeymap, {
  flavour: TableBlockSchema.model.flavour,
});
