# @blockexpanse/y-indexeddb

IndexedDB persistence adapter for Yjs documents.

Vendored from [`@toeverything/y-indexeddb`](https://github.com/toeverything/AFFiNE)
`v0.10.0-canary.9` (MIT), the IndexedDB adapter originally built for
[AFFiNE](https://affine.pro/). Shipped as a local workspace package so BlockExpanse is fully
isolated from the upstream `@toeverything/*` npm scope.

## Usage

```ts
import {
  createIndexedDBProvider,
  downloadBinary,
} from '@blockexpanse/y-indexeddb';
import * as Y from 'yjs';

const yDoc = new Y.Doc({ guid: 'my-doc' });

const provider = createIndexedDBProvider(yDoc);
provider.connect();
```

## License

MIT. See [LICENSE](./LICENSE).
