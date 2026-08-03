# Blob Storage & Images

BlockExpanse stores images as **blob references** (`sourceId`), not HTTP URLs. You must persist blobs separately from CRDT document state.

## Dual persistence (required for production)

| Layer    | What is stored                                   | Typical backend         |
| -------- | ------------------------------------------------ | ----------------------- |
| **CRDT** | Block tree, text, `sourceId` on image blocks     | Yjs / your doc API      |
| **Blob** | Actual image bytes keyed by `sourceId` (SHA-256) | S3 / OSS / `/api/blobs` |

If you only save CRDT state (e.g. base64 Yjs update) **without** blob data, image blocks will exist after reload but **`blobSync.get(sourceId)` returns null** — broken images.

## BlockExpanse equivalent of BlockNote `uploadFile`

BlockNote: `uploadFile(file) => url` stored in the block.

BlockExpanse: `doc.blobSync.set(blob) => sourceId` stored in the block. Wire your backend via **`BlobSource`**:

```ts
import { CloudBlobSource, IndexedDBBlobSource } from '@blockexpanse/sync';
import { createEmptyDoc } from '@blockexpanse/presets';

const { doc, collection, init } = createEmptyDoc({
  id: 'my-workspace',
  blobSources: {
    main: new CloudBlobSource({
      baseUrl: '/api/collection',
      collectionId: 'my-workspace',
    }),
    shadows: [new IndexedDBBlobSource('my-workspace')],
  },
});
```

Local file upload (picker / drag / paste screenshot) flows:

```
File → blobSync.set → CloudBlobSource.set → your API
                   → sourceId written to affine:image block
```

Rendering: `blobSync.get(sourceId)` → `blob:` URL in `<img>`.

## Batch import (knowledge base recommended)

Do **not** rely on browser-side CORS proxy for Markdown/HTML bulk import.

**Server-side pipeline** (Feishu-style):

```
Markdown ![](https://external/...)
  → your import API parses images
  → server download + POST /uploads/image
  → replace with your CDN URL or pre-uploaded blob
  → client calls importMarkdownToDoc with localized content
```

Benefits: no CORS, SSRF control, stable archives, no fake-ip issues.

## Edit-time paste of external HTML (optional)

If users paste HTML containing `<img src="https://...">`, configure **`FetchExternalAssetExtension`** — call **your backend**, not a browser proxy:

```ts
import { FetchExternalAssetExtension } from '@blockexpanse/affine-shared/services';

FetchExternalAssetExtension(async url => {
  const res = await fetch('/api/fetch-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
  if (!res.ok) return null;
  return res.blob();
});
```

Without this extension, external URLs in import/paste are **skipped** (with a console warning).

## Image proxy removed

`ImageProxyExtension` has been removed. Browser-side `?url=` proxies are not part of the SDK. Use:

1. **BlobSource** for upload/persistence
2. **Server import pipeline** for batch localization
3. **FetchExternalAssetExtension** for optional edit-time paste

## Link preview (bookmarks / embeds)

Unrelated to image blobs. Still opt-in via `LinkPreviewExtension` — see [block-service.md](./block-service.md).

## Playground

Run the dev server and open:

```
http://localhost:5173/starter/?blobSource=cloud,idb
```

| Query param            | Effect                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `blobSource=cloud`     | `CloudBlobSource` as **main** — uploads go to `/api/collection/:id/blob/:key` (requires Playground server on `:8787`) |
| `blobSource=cloud,idb` | Cloud main + IndexedDB shadow (offline cache)                                                                         |
| `blobSource=mock`      | Memory main + cloud shadow (legacy alias, same HTTP routes)                                                           |
| `blobSource=idb`       | Memory main + IndexedDB shadow only                                                                                   |

The starter app registers **`FetchExternalAssetExtension`** with browser `fetch` for demo paste/import. Production hosts should proxy through their own API.
