---
'@blockexpanse/blocks': major
---

Remove browser-side Image Proxy; use BlobSource + server-side import instead.

### Breaking changes

- Removed `ImageProxyExtension`, `defaultImageProxyMiddleware`, and `ImageBlockService.setImageProxyURL`
- Removed `DEFAULT_IMAGE_PROXY_ENDPOINT` and `AFFINE_IMAGE_PROXY_ENDPOINT` from `@blockexpanse/affine-shared/consts`
- External `http(s)` image URLs in Markdown/HTML/Notion import are **skipped** unless `FetchExternalAssetExtension` is configured or URLs are pre-localized on your server

### Added

- `CloudBlobSource` in `@blockexpanse/sync` — HTTP-backed blob persistence (BlockNote `uploadFile` equivalent)
- `FetchExternalAssetExtension` in `@blockexpanse/affine-shared/services` — host-provided fetch for paste/import
- `ingestExternalImageUrl` utility for adapter pipelines
- [Blob storage guide](./packages/docs/guide/blob-storage.md)

### Migration

1. Wire **`BlobSource`** (e.g. `CloudBlobSource`) for upload and reload
2. Run **server-side import** to localize external image URLs before client import
3. Optionally register **`FetchExternalAssetExtension`** for edit-time paste of external HTML

See [packages/docs/guide/blob-storage.md](./packages/docs/guide/blob-storage.md).
