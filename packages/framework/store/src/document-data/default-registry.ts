import { coreDocumentBlockCodecs } from './codecs.js';
import { DocumentBlockCodecRegistry } from './registry.js';

export const defaultDocumentBlockCodecRegistry =
  new DocumentBlockCodecRegistry();

coreDocumentBlockCodecs.forEach(codec =>
  defaultDocumentBlockCodecRegistry.register(codec)
);
