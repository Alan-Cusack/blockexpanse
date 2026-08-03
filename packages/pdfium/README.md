# @blockexpanse/pdfium

PDFium compiled to WebAssembly, plus the Emscripten JS glue.

This is a vendored copy of [`@toeverything/pdfium`](https://github.com/toeverything/pdfium-builder)
`v0.1.1` (MPL-2.0), the WASM build of Google's [PDFium](https://pdfium.googlesource.com/pdfium/)
originally packaged for [AFFiNE](https://affine.pro/). The `.wasm` binary is a prebuilt
C/C++ artifact and is shipped as-is under `dist/`.

## Usage

```ts
import createPDFium from '@blockexpanse/pdfium';
import wasmUrl from '@blockexpanse/pdfium/wasm?url';

const pdfium = await createPDFium({ locateFile: () => wasmUrl });
```

## License

MPL-2.0. See [LICENSE](./LICENSE).
