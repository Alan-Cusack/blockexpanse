import { BitmapFormat } from '@blockexpanse/pdf-viewer-types';

import type { Runtime } from './runtime.js';

export class Bitmap {
  static format = BitmapFormat.BGRA;

  get pointer() {
    return this.ptr;
  }

  constructor(
    public runtime: Runtime,
    private ptr: number,
    public format = Bitmap.format
  ) {}

  close() {
    if (!this.ptr) return;
    this.runtime.closeBitmap(this.ptr);
    this.runtime.free(this.ptr);
    this.ptr = 0;
  }

  fill(
    left: number,
    top: number,
    width: number,
    height: number,
    color = 0xffffffff // 32 bit
  ) {
    return this.runtime.fillBitmap(this.ptr, left, top, width, height, color);
  }

  [Symbol.dispose]() {
    this.close();
  }

  toUint8Array() {
    const stride = this.runtime.bitmapStride(this.ptr);
    const height = this.runtime.bitmapHeight(this.ptr);
    const bufferPtr = this.runtime.bitmapBuffer(this.ptr);
    const buffer = this.runtime.HEAPU8.subarray(
      bufferPtr,
      bufferPtr + stride * height
    );
    this.runtime.free(bufferPtr);
    return buffer;
  }
}
