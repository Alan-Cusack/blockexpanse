import type { BlobSource } from '../source.js';

export class MemoryBlobSource implements BlobSource {
  readonly map = new Map<string, Blob>();

  name = 'memory';

  readonly = false;

  delete(key: string) {
    this.map.delete(key);
    return Promise.resolve();
  }

  get(key: string) {
    return Promise.resolve(this.map.get(key) ?? null);
  }

  list() {
    return Promise.resolve(Array.from(this.map.keys()));
  }

  // onProgress is accepted for interface compatibility but ignored — memory writes are instant.
  set(
    key: string,
    value: Blob,
    _onProgress?: (loaded: number, total: number) => void
  ) {
    this.map.set(key, value);
    return Promise.resolve(key);
  }
}
