/**
 * Optional progress callback for `set` operations.
 * Called with `loaded` bytes and `total` bytes during upload.
 * Implementations that cannot report progress (e.g. Memory, IndexedDB) simply ignore it.
 */
export type BlobUploadProgressCallback = (
  loaded: number,
  total: number
) => void;

export interface BlobSource {
  name: string;
  readonly: boolean;
  get: (key: string) => Promise<Blob | null>;
  /**
   * Store a blob and return its key.
   *
   * @param onProgress - Optional upload progress callback. Only meaningful for
   *   network-backed sources (e.g. a custom OSS/S3 BlobSource using XHR).
   *   Local sources (Memory, IndexedDB) ignore it.
   */
  set: (
    key: string,
    value: Blob,
    onProgress?: BlobUploadProgressCallback
  ) => Promise<string>;
  delete: (key: string) => Promise<void>;
  list: () => Promise<string[]>;
}
