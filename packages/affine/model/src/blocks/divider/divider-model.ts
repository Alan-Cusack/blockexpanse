import { defineBlockSchema, type SchemaToModel } from '@blockexpanse/store';

export const DividerBlockSchema = defineBlockSchema({
  flavour: 'affine:divider',
  metadata: {
    version: 1,
    role: 'content',
    children: [],
  },
});

export type DividerBlockModel = SchemaToModel<typeof DividerBlockSchema>;

declare global {
  namespace BlockExpanse {
    interface BlockModels {
      'affine:divider': DividerBlockModel;
    }
  }
}
