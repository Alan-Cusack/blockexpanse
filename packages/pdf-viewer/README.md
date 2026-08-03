# @blockexpanse/pdf-viewer

A PDF viewer API built on top of the PDFium WASM runtime.

Vendored from [`@toeverything/pdf-viewer`](https://github.com/toeverything/pdfium-builder) `v0.1.1`
(MPL-2.0), the viewer package originally built for [AFFiNE](https://affine.pro/).
Shipped as a local workspace package so BlockExpanse is fully isolated from the upstream
`@toeverything/*` npm scope.

## Usage

```ts
import { createPDFium, Runtime, Viewer } from '@blockexpanse/pdf-viewer';
import wasmUrl from '@blockexpanse/pdfium/wasm?url';

const pdfium = await createPDFium({ locateFile: () => wasmUrl });
const viewer = new Viewer(new Runtime(pdfium));
const doc = viewer.open(pdfBytes);
```

## Dependencies

- [`@blockexpanse/pdfium`](../pdfium) — the WASM runtime
- [`@blockexpanse/pdf-viewer-types`](../pdf-viewer-types) — shared enums and types

## License

MPL-2.0. See [LICENSE](./LICENSE).
