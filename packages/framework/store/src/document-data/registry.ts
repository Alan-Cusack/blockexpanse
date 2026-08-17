import type { BlockNodeV1 } from '@blockexpanse/document-data';

import type { BlockSnapshot } from '../transformer/index.js';
import type {
  ConversionResult,
  DocumentBlockCodec,
  DocumentBlockCodecRegistryLike,
  DocumentExportContext,
  DocumentImportContext,
} from './types.js';

import { errorResult } from './utils.js';

export class DocumentBlockCodecRegistry
  implements DocumentBlockCodecRegistryLike
{
  private readonly byFlavour = new Map<string, DocumentBlockCodec[]>();

  private readonly byType = new Map<string, DocumentBlockCodec>();

  fromSnapshot(
    snapshot: BlockSnapshot,
    context: DocumentExportContext
  ): ConversionResult<BlockNodeV1> {
    const codecs = this.byFlavour.get(snapshot.flavour);
    if (!codecs) {
      return errorResult(
        'block.unsupported_flavour',
        `Unsupported internal block flavour: ${snapshot.flavour}`
      );
    }
    const attempts = codecs.map(codec =>
      codec.fromSnapshot(snapshot, { ...context, registry: this })
    );
    const matched = attempts.find(result => result.value !== undefined);
    return (
      matched ??
      errorResult(
        'block.invalid_property',
        `No document block codec accepted flavour: ${snapshot.flavour}`
      )
    );
  }

  register(codec: DocumentBlockCodec) {
    if (this.byType.has(codec.type)) {
      throw new Error(`Document block codec already registered: ${codec.type}`);
    }
    this.byType.set(codec.type, codec);
    codec.flavours.forEach(flavour => {
      const codecs = this.byFlavour.get(flavour) ?? [];
      codecs.push(codec);
      this.byFlavour.set(flavour, codecs);
    });
    return this;
  }

  toSnapshot(
    block: BlockNodeV1,
    context: DocumentImportContext
  ): ConversionResult<BlockSnapshot> {
    const codec = this.byType.get(block.type);
    if (!codec) {
      return errorResult(
        'block.unknown_type',
        `Unsupported document block type: ${block.type}`
      );
    }
    return codec.toSnapshot(block, { ...context, registry: this });
  }
}
