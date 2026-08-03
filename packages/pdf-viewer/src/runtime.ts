import type {
  BitmapFormat,
  ErrorCode,
  FileIdentifier,
  PageMode,
  Rotation,
} from '@blockexpanse/pdf-viewer-types';
import type { FPDF_Config, PDFiumModule } from '@blockexpanse/pdfium';

export const DefaultConfig: FPDF_Config = {
  version: 3,
  m_pIsolate: null,
  m_pPlatform: null,
  m_pUserFontPaths: null,
  m_v8EmbedderSlot: 0,
};

/**
 * PDFium runtime.
 */
export class Runtime {
  bitmapBuffer = this.wasm.FPDFBitmap_GetBuffer;

  bitmapHeight = this.wasm.FPDFBitmap_GetHeight;

  bitmapStride = this.wasm.FPDFBitmap_GetStride;

  bitmapWidth = this.wasm.FPDFBitmap_GetWidth;

  closeBitmap = this.wasm.FPDFBitmap_Destroy;

  closePage = this.wasm.FPDF_ClosePage;

  createBitmap = this.wasm.FPDFBitmap_Create;

  createBitmapWith = this.wasm.FPDFBitmap_CreateEx<BitmapFormat>;

  deinit = this.wasm.FPDF_DestroyLibrary;

  fileIdentifier = this.wasm.FPDF_GetFileIdentifier<FileIdentifier>;

  fillBitmap = this.wasm.FPDFBitmap_FillRect;

  /**
   * Initialize the PDFium library and allocate global resources for it.
   */
  init = this.wasm.FPDF_InitLibraryWithConfig;

  /**
   * Gets last error code when a function fails.
   */
  lastErrorCode = this.wasm.FPDF_GetLastError<ErrorCode>;

  loadPage = this.wasm.FPDF_LoadPage;

  metaText = this.wasm.FPDF_GetMetaText;

  openDocument = this.wasm.FPDF_LoadMemDocument64;

  pageCount = this.wasm.FPDF_GetPageCount;

  pageHeight = this.wasm.FPDF_GetPageHeightF;

  pageLabel = this.wasm.FPDF_GetPageLabel;

  pageMode = this.wasm.FPDFDoc_GetPageMode<PageMode>;

  pageRotation = this.wasm.FPDFPage_GetRotation<Rotation>;

  pageSize = this.wasm.FPDF_GetPageSizeByIndexF;

  pageTransparency = this.wasm.FPDFPage_HasTransparency;

  pageWidth = this.wasm.FPDF_GetPageWidthF;

  pointFromDeviceToPage = this.wasm.FPDF_DeviceToPage;

  pointFromPageToDevice = this.wasm.FPDF_PageToDevice;

  renderPageBitmap = this.wasm.FPDF_RenderPageBitmap;

  version = this.wasm.FPDF_GetFileVersion;

  get HEAPU8() {
    return this.engine.HEAPU8;
  }

  get wasm() {
    return this.engine.wasmExports;
  }

  constructor(public engine: PDFiumModule) {
    this.init(DefaultConfig);
  }

  closeDocument(ptr: number) {
    this.wasm.FPDF_CloseDocument(ptr);
    this.free(ptr);
  }

  /**
   * Copys bytes to WASM.
   */
  copyBytesTo(bytes: Uint8Array) {
    const size = bytes.length;
    const bytesPtr = this.malloc(size);
    this.HEAPU8.set(bytes, bytesPtr);
    return bytesPtr;
  }

  free(ptr: number) {
    this.wasm.free(ptr);
  }

  getValue(ptr: number, type: Emscripten.CType): number {
    return Number(this.engine.getValue(ptr, type));
  }

  malloc(size: number) {
    return this.wasm.malloc(size);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- matches the upstream Emscripten setValue signature (accepts number/string/pointer values)
  setValue(ptr: number, value: any, type: Emscripten.CType, noSafe?: boolean) {
    return this.engine.setValue(ptr, value, type, noSafe);
  }

  stringToNewUTF8(str: string) {
    return this.engine.stringToNewUTF8(str);
  }

  stringToUTF8(str: string, strPtr: number, maxBytesToRead?: number) {
    this.engine.stringToUTF8(str, strPtr, maxBytesToRead);
  }

  UTF8ToString(ptr: number, maxBytesToRead?: number) {
    return this.engine.UTF8ToString(ptr, maxBytesToRead);
  }

  UTF16ToString(ptr: number, maxBytesToRead?: number) {
    return this.engine.UTF16ToString(ptr, maxBytesToRead);
  }
}
