import type { BlobSource } from '../source.js';

export type CloudBlobSourceOptions = {
  /**
   * Base URL for blob REST API.
   * @example '/api/blobs' → GET/PUT `${baseUrl}/${key}`
   * @example '/api/collection' with collectionId → `${baseUrl}/${collectionId}/blob/${key}`
   */
  baseUrl: string;
  /** When set, uses `/api/collection/:id/blob/:key` layout (MockServer / AFFiNE-style). */
  collectionId?: string;
  name?: string;
  getHeaders?: () => Record<string, string> | Promise<Record<string, string>>;
};

/**
 * HTTP-backed {@link BlobSource} for host apps.
 *
 * Upload on `set`, download on `get` — this is BlockExpanse's equivalent of
 * BlockNote's `uploadFile`: wire your `/uploads` or S3 presigned API here.
 */
export class CloudBlobSource implements BlobSource {
  private readonly _cache = new Map<string, Blob>();

  readonly name: string;

  readonly = false;

  constructor(private readonly _options: CloudBlobSourceOptions) {
    this.name = _options.name ?? _options.collectionId ?? 'cloud';
  }

  private _blobUrl(key: string): string {
    const base = this._options.baseUrl.replace(/\/$/, '');
    if (this._options.collectionId) {
      return `${base}/${this._options.collectionId}/blob/${key}`;
    }
    return `${base}/${key}`;
  }

  private async _headers(): Promise<Record<string, string>> {
    return (await this._options.getHeaders?.()) ?? {};
  }

  async delete(key: string): Promise<void> {
    this._cache.delete(key);
    await fetch(this._blobUrl(key), {
      method: 'DELETE',
      headers: await this._headers(),
    });
  }

  async get(key: string): Promise<Blob | null> {
    if (this._cache.has(key)) {
      return this._cache.get(key) as Blob;
    }
    const response = await fetch(this._blobUrl(key), {
      method: 'GET',
      headers: await this._headers(),
    });
    if (!response.ok) {
      return null;
    }
    const blob = await response.blob();
    this._cache.set(key, blob);
    return blob;
  }

  /**
   * Returns keys cached in this session only.
   * Does NOT list the full server-side blob inventory.
   * The editor does not rely on this for rendering (it fetches by known sourceId).
   */
  list(): Promise<string[]> {
    return Promise.resolve(Array.from(this._cache.keys()));
  }

  async set(key: string, value: Blob): Promise<string> {
    const headers: Record<string, string> = {
      ...(await this._headers()),
    };
    if (value.type) {
      headers['Content-Type'] = value.type;
    }
    const body = await value.arrayBuffer();

    // Retry once on transient failure to improve reliability on flaky networks.
    let response: Response | null = null;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        response = await fetch(this._blobUrl(key), {
          method: 'PUT',
          body,
          headers,
        });
        if (response.ok) break;
      } catch {
        // network error, will retry
      }
    }

    if (!response || !response.ok) {
      throw new Error(
        `CloudBlobSource.set failed for "${key}": ${response?.status ?? 'network error'} ${response?.statusText ?? ''}`
      );
    }
    this._cache.set(key, value);
    return key;
  }
}
