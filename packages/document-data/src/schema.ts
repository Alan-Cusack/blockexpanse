import { z } from 'zod';

const jsonPrimitiveSchema = z.union([
  z.string(),
  z.number().finite(),
  z.boolean(),
  z.null(),
]);

export const jsonValueSchema: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    jsonPrimitiveSchema,
    z.array(jsonValueSchema),
    z.record(jsonValueSchema),
  ])
);

const jsonObjectSchema = z.record(jsonValueSchema);

const simpleMarkSchema = z
  .object({ type: z.enum(['bold', 'italic', 'underline', 'strike', 'code']) })
  .strict();
const colorMarkSchema = z
  .object({ type: z.enum(['color', 'background']), color: z.string().min(1) })
  .strict();
const textMarkSchema = z.union([simpleMarkSchema, colorMarkSchema]);

const textInlineSchema = z
  .object({
    type: z.literal('text'),
    text: z.string(),
    marks: z.array(textMarkSchema),
  })
  .strict();

const linkInlineSchema = z
  .object({
    type: z.literal('link'),
    href: z.string().min(1),
    text: z.string(),
    marks: z.array(textMarkSchema),
  })
  .strict();

const mentionInlineSchema = z
  .object({
    type: z.literal('mention'),
    targetType: z.enum(['user', 'document', 'block']),
    targetId: z.string().min(1),
    label: z.string().optional(),
  })
  .strict();

const inlineContentSchema = z.discriminatedUnion('type', [
  textInlineSchema,
  linkInlineSchema,
  mentionInlineSchema,
]);

const blockBaseShape = {
  id: z.string().min(1),
  metadata: jsonObjectSchema.optional(),
};

export const blockNodeSchema: z.ZodType<unknown> = z.lazy(() => {
  const children = z.array(blockNodeSchema);
  const textBlockShape = {
    ...blockBaseShape,
    content: z.array(inlineContentSchema),
    children,
  };

  return z.discriminatedUnion('type', [
    z.object({ type: z.literal('paragraph'), ...textBlockShape }).strict(),
    z
      .object({
        type: z.literal('heading'),
        ...textBlockShape,
        level: z.number().int().min(1).max(6),
      })
      .strict(),
    z
      .object({
        type: z.literal('list-item'),
        ...textBlockShape,
        style: z.enum(['bulleted', 'numbered', 'todo']),
        checked: z.boolean().optional(),
      })
      .strict(),
    z.object({ type: z.literal('quote'), ...textBlockShape }).strict(),
    z
      .object({
        type: z.literal('code'),
        ...blockBaseShape,
        children,
        language: z.string().optional(),
        text: z.string(),
      })
      .strict(),
    z
      .object({ type: z.literal('divider'), ...blockBaseShape, children })
      .strict(),
    z
      .object({
        type: z.literal('image'),
        ...blockBaseShape,
        children,
        assetId: z.string().min(1),
        caption: z.string().optional(),
        width: z.number().positive().optional(),
        height: z.number().positive().optional(),
      })
      .strict(),
    z
      .object({
        type: z.literal('attachment'),
        ...blockBaseShape,
        children,
        assetId: z.string().min(1),
        caption: z.string().optional(),
        display: z.enum(['card', 'embed']).optional(),
      })
      .strict(),
  ]);
});

const assetDescriptorSchema = z
  .object({
    checksum: z.string().optional(),
    mimeType: z.string().optional(),
    name: z.string().optional(),
    size: z.number().int().nonnegative().optional(),
    source: z.string().optional(),
  })
  .strict();

export const documentDataV1Schema = z
  .object({
    format: z.literal('blockexpanse-document'),
    specVersion: z.literal('1.0'),
    document: z
      .object({
        id: z.string().min(1),
        title: z.string(),
        blocks: z.array(blockNodeSchema),
        metadata: jsonObjectSchema.optional(),
      })
      .strict(),
    assets: z.record(assetDescriptorSchema),
    extensions: jsonObjectSchema,
  })
  .strict();
