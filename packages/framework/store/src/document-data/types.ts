import type {
  AssetDescriptorV1,
  BlockNodeV1,
  Diagnostic,
  JsonObject,
} from '@blockexpanse/document-data';

import type { Doc } from '../store/index.js';
import type { BlockSnapshot, DraftModel } from '../transformer/index.js';

export interface ConversionResult<T> {
  diagnostics: Diagnostic[];
  lossy: boolean;
  value?: T;
}

export interface DocumentExportContext {
  assets: Record<string, AssetDescriptorV1>;
  documentId: string;
  registry?: DocumentBlockCodecRegistryLike;
}

export interface DocumentImportContext {
  assets: Record<string, AssetDescriptorV1>;
  documentId: string;
  registry?: DocumentBlockCodecRegistryLike;
}

export interface DocumentBlockCodec<TBlock extends BlockNodeV1 = BlockNodeV1> {
  readonly flavours: readonly string[];
  readonly type: TBlock['type'];
  fromSnapshot(
    snapshot: BlockSnapshot,
    context: DocumentExportContext
  ): ConversionResult<TBlock>;
  toSnapshot(
    block: TBlock,
    context: DocumentImportContext
  ): ConversionResult<BlockSnapshot>;
}

export interface SnapshotTextDelta {
  attributes?: JsonObject;
  insert: string;
}

export interface SnapshotText {
  '$blockexpanse:internal:text$': true;
  delta: SnapshotTextDelta[];
}

export interface DocumentSnapshotConversionOptions {
  registry?: DocumentBlockCodecRegistryLike;
}

export interface DocumentBlockCodecRegistryLike {
  fromSnapshot(
    snapshot: BlockSnapshot,
    context: DocumentExportContext
  ): ConversionResult<BlockNodeV1>;
  toSnapshot(
    block: BlockNodeV1,
    context: DocumentImportContext
  ): ConversionResult<BlockSnapshot>;
}

export type ImportMode = 'create' | 'replace';

export type IdPolicy = 'preserve' | 'regenerate';

export interface CreateDocumentOptions {
  idPolicy?: IdPolicy;
  mode: 'create';
}

export interface ReplaceDocumentOptions {
  mode: 'replace';
  targetDocumentId?: string;
}

export type ImportDocumentOptions =
  | CreateDocumentOptions
  | ReplaceDocumentOptions;

export interface ImportDocumentResult extends ConversionResult<Doc> {
  assetIdMap: Record<string, string>;
  blockIdMap: Record<string, string>;
  documentId?: string;
}

export interface DraftBlockTree {
  children: DraftBlockTree[];
  draft: DraftModel;
}
