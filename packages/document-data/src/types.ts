export type JsonPrimitive = boolean | null | number | string;

export type JsonValue = JsonPrimitive | JsonValue[] | JsonObject;

export interface JsonObject extends Record<string, JsonValue> {}

export type DiagnosticSeverity = 'error' | 'info' | 'warning';

export interface Diagnostic {
  code: string;
  details?: JsonObject;
  message: string;
  path: Array<number | string>;
  severity: DiagnosticSeverity;
}

export interface OperationResult<T> {
  diagnostics: Diagnostic[];
  value?: T;
}

export interface ValidationResult extends OperationResult<DocumentDataV1> {
  valid: boolean;
}

export interface TextMarkBoldV1 {
  type: 'bold';
}

export interface TextMarkItalicV1 {
  type: 'italic';
}

export interface TextMarkUnderlineV1 {
  type: 'underline';
}

export interface TextMarkStrikeV1 {
  type: 'strike';
}

export interface TextMarkCodeV1 {
  type: 'code';
}

export interface TextMarkColorV1 {
  color: string;
  type: 'color';
}

export interface TextMarkBackgroundV1 {
  color: string;
  type: 'background';
}

export type TextMarkV1 =
  | TextMarkBackgroundV1
  | TextMarkBoldV1
  | TextMarkCodeV1
  | TextMarkColorV1
  | TextMarkItalicV1
  | TextMarkStrikeV1
  | TextMarkUnderlineV1;

export interface TextInlineV1 {
  marks: TextMarkV1[];
  text: string;
  type: 'text';
}

export interface LinkInlineV1 {
  href: string;
  marks: TextMarkV1[];
  text: string;
  type: 'link';
}

export interface MentionInlineV1 {
  label?: string;
  targetId: string;
  targetType: 'block' | 'document' | 'user';
  type: 'mention';
}

export type InlineContentV1 = LinkInlineV1 | MentionInlineV1 | TextInlineV1;

export interface BlockBaseV1 {
  children: BlockNodeV1[];
  id: string;
  metadata?: JsonObject;
  type: string;
}

export interface ParagraphBlockV1 extends BlockBaseV1 {
  content: InlineContentV1[];
  type: 'paragraph';
}

export interface HeadingBlockV1 extends BlockBaseV1 {
  content: InlineContentV1[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
  type: 'heading';
}

export interface ListItemBlockV1 extends BlockBaseV1 {
  checked?: boolean;
  content: InlineContentV1[];
  style: 'bulleted' | 'numbered' | 'todo';
  type: 'list-item';
}

export interface QuoteBlockV1 extends BlockBaseV1 {
  content: InlineContentV1[];
  type: 'quote';
}

export interface CodeBlockV1 extends BlockBaseV1 {
  language?: string;
  text: string;
  type: 'code';
}

export interface DividerBlockV1 extends BlockBaseV1 {
  type: 'divider';
}

export interface ImageBlockV1 extends BlockBaseV1 {
  assetId: string;
  caption?: string;
  height?: number;
  type: 'image';
  width?: number;
}

export interface AttachmentBlockV1 extends BlockBaseV1 {
  assetId: string;
  caption?: string;
  display?: 'card' | 'embed';
  type: 'attachment';
}

export type BlockNodeV1 =
  | AttachmentBlockV1
  | CodeBlockV1
  | DividerBlockV1
  | HeadingBlockV1
  | ImageBlockV1
  | ListItemBlockV1
  | ParagraphBlockV1
  | QuoteBlockV1;

export interface AssetDescriptorV1 {
  checksum?: string;
  mimeType?: string;
  name?: string;
  size?: number;
  source?: string;
}

export interface DocumentDataV1 {
  assets: Record<string, AssetDescriptorV1>;
  document: {
    blocks: BlockNodeV1[];
    id: string;
    metadata?: JsonObject;
    title: string;
  };
  extensions: JsonObject;
  format: 'blockexpanse-document';
  specVersion: '1.0';
}

export interface DocumentDataLimits {
  maxAssets: number;
  maxBlocks: number;
  maxDepth: number;
  maxDocumentBytes: number;
  maxExtensionBytes: number;
  maxInlineRuns: number;
  maxTextLength: number;
}

export interface ValidationOptions {
  limits?: Partial<DocumentDataLimits>;
}
