/**
 * @file Client-side image compression for uploads.
 *
 * Resizes large images to a max dimension and re-encodes as JPEG (quality 0.85)
 * before they reach BlobSource.set. This reduces upload time, storage cost, and
 * render memory — regardless of where blobs are persisted (Cloud / OSS / S3 / IndexedDB).
 *
 * GIFs, SVGs, WebP, and small files are passed through unchanged.
 */

export interface CompressImageOptions {
  /** Maximum width or height in pixels. Images larger than this are scaled down. Default: 1920. */
  maxDimension?: number;
  /** JPEG quality 0–1. Default: 0.85. */
  quality?: number;
  /** Files smaller than this (bytes) are not compressed. Default: 500 * 1024 (500KB). */
  minSize?: number;
  /**
   * Output MIME type. Default: `'image/jpeg'` (best compression).
   * Set to `'image/png'` to preserve alpha transparency for PNGs with
   * transparency (note: PNG output is lossless and may be larger).
   */
  mimeType?: string;
}

const DEFAULT_MAX_DIMENSION = 1920;
const DEFAULT_QUALITY = 0.85;
const DEFAULT_MIN_SIZE = 500 * 1024; // 500KB

// Formats that should never be re-encoded.
const SKIP_TYPES = new Set([
  'image/gif',
  'image/svg+xml',
  'image/webp', // already well-compressed
]);

/**
 * Compress an image blob if it would benefit from it.
 *
 * Returns the original blob unchanged when:
 * - The format is GIF / SVG / WebP (re-encoding would harm quality or break animation)
 * - The file is smaller than `minSize`
 * - The compressed result is larger than the original (rare edge case)
 *
 * @returns A blob that is always safe to upload — either the compressed version
 *          or the original.
 */
export async function compressImage(
  blob: Blob,
  options: CompressImageOptions = {}
): Promise<Blob> {
  const {
    maxDimension = DEFAULT_MAX_DIMENSION,
    quality = DEFAULT_QUALITY,
    minSize = DEFAULT_MIN_SIZE,
    mimeType = 'image/jpeg',
  } = options;

  // Skip formats that shouldn't be re-encoded.
  if (blob.type && SKIP_TYPES.has(blob.type)) {
    return blob;
  }

  // Skip small files — not worth the CPU cost.
  if (blob.size < minSize) {
    return blob;
  }

  try {
    // createImageBitmap is more efficient than <img> + canvas for decoding.
    const bitmap = await createImageBitmap(blob);

    // Check if the image actually needs resizing.
    const needsResize =
      bitmap.width > maxDimension || bitmap.height > maxDimension;

    // If the image is already small enough AND matches the output format, skip.
    if (!needsResize && blob.type === mimeType) {
      bitmap.close();
      return blob;
    }

    const scale = needsResize
      ? Math.min(maxDimension / bitmap.width, maxDimension / bitmap.height, 1)
      : 1;

    const targetWidth = Math.round(bitmap.width * scale);
    const targetHeight = Math.round(bitmap.height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      bitmap.close();
      return blob;
    }

    // For JPEG output, fill white background first (JPEG has no alpha channel).
    // PNG output preserves transparency.
    if (mimeType === 'image/jpeg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, targetWidth, targetHeight);
    }

    ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
    bitmap.close();

    const compressedBlob = await new Promise<Blob | null>(resolve => {
      canvas.toBlob(resolve, mimeType, quality);
    });

    // Safety: if compression made it bigger, return the original.
    if (!compressedBlob || compressedBlob.size >= blob.size) {
      return blob;
    }

    return compressedBlob;
  } catch {
    // If anything fails (decode error, canvas unavailable, etc.), return original.
    return blob;
  }
}
