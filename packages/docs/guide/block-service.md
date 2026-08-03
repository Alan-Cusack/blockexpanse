# Block Service

Each kind of block can register its own service, so as to define block-specific methods to be called during the editor lifecycle. The service is a class that extends the `BlockService` class:

```ts
import { BlockService } from '@blockexpanse/block-std';
import { defineBlockSchema, type SchemaToModel } from '@blockexpanse/store';

const myBlockSchema = defineBlockSchema({
  //...
});

type MyBlockModel = SchemaToModel<typeof myBlockSchema>;

class MyBlockService extends BlockService<MyBlockModel> {
  //...
}
```

For each block type, its service will only be instantiated once. And even though there is no block instance, the service will still be instantiated. So it's designed for defining editor-level methods for certain kind of block.

For example, if you want to bind certain hotkey for creating a new block, you can do it in the service:

```ts
class MyBlockService extends BlockService<MyBlockModel> {
  override mounted() {
    super.mounted();
    this.bindHotkey(
      {
        'Alt-1': this._addMyBlock,
      },
      { global: true }
    );
  }

  private _addMyBlock = () => {
    this.doc.addBlock('my-block', {});
  };
}
```

## Lifecycle Hooks

The `BlockService` class provides some lifecycle hooks for you to override.

- `mounted`: This hook will be called when the service is instantiated.
- `unmounted`: This hook will be called when the service is destroyed.

## Set Runtime Configs

Sometimes you may want to set some runtime configurations for some blocks to better fit your needs.

### Images & attachments

Image blocks store a `sourceId` (blob key), not an HTTP URL. Upload and persistence are handled by **`BlobSource`** on `DocCollection.blobSync` — see [Blob Storage guide](./blob-storage.md).

For edit-time paste of external image URLs (optional):

```ts
import { FetchExternalAssetExtension } from '@blockexpanse/affine-shared/services';

// extensions: [
//   FetchExternalAssetExtension(async (url) => {
//     const res = await fetch('/api/fetch-image', {
//       method: 'POST',
//       body: JSON.stringify({ url }),
//     });
//     return res.ok ? res.blob() : null;
//   }),
// ]
```

Batch Markdown/HTML import should pre-localize external images on your server before calling SDK import APIs.

### Link preview (bookmarks / embeds)

```ts
import { LinkPreviewExtension } from '@blockexpanse/affine-shared/services';

// extensions: [
//   LinkPreviewExtension('https://your.api/link-preview'),
// ]
```

For different blocks, the method to set runtime configurations may be different. You can check the [block API document](/api/@blockexpanse/blocks/index) to find out the methods you need.
