import type { BlobSource } from '@blockexpanse/sync';

import { CloudBlobSource } from '@blockexpanse/sync';

/**
 * Playground / e2e shadow blob source.
 *
 * Routes: `/api/collection/:id/blob/:key` — same as {@link CloudBlobSource}.
 *
 * @deprecated Prefer `CloudBlobSource` directly; kept for `?blobSource=mock` compat.
 */
export class MockServerBlobSource implements BlobSource {
  private readonly _source: CloudBlobSource;

  readonly name: string;

  readonly readonly = false;

  constructor(collectionId: string) {
    this.name = collectionId;
    this._source = new CloudBlobSource({
      baseUrl: '/api/collection',
      collectionId,
      name: collectionId,
    });
  }

  delete(key: string) {
    return this._source.delete(key);
  }

  get(key: string) {
    return this._source.get(key);
  }

  list() {
    return this._source.list();
  }

  set(key: string, value: Blob) {
    return this._source.set(key, value);
  }
}
