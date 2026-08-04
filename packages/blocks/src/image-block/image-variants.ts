/**
 * @file Multi-size image variant generator.
 *
 * Generates a thumbnail, medium, and original variant from a single image.
 * Hosts use this in a custom `imageUpload` handler to store multiple sizes
 * (e.g. thumbnail for editor rendering, original for "view original" / AI).
 *
 * @example
 * ```ts
 * import { generateImageVariants, setImageUploadHandler } from '@blockexpanse/blocks';
 *
 * setImageUploadHandler(async (blob) => {
 *   const { original, thumbnail } = await generateImageVariants(blob);
 *   // Store original separately in your BlobSource:
 *   const originalId = await doc.blobSync.set(original);
 *   // Return thumbnail — editor renders this as the main image
 *   return thumbnail;
 * });
 * ```
 */

import { compressImage } from './compress.js';

export interface ImageVariantOptions {
  /** Thumbnail max dimension in pixels. Default: 400. */
  thumbnailMaxDimension?: number;
  /** Medium max dimension in pixels. Default: 1200. */
  mediumMaxDimension?: number;
  /** JPEG quality for re-encoded variants. Default: 0.85. */
  quality?: number;
  /** Output MIME type. Default: 'image/jpeg'. */
  mimeType?: string;
}

export interface ImageVariants {
  /** The original file, unchanged. Store this if you need "view original" or AI re-generation. */
  original: Blob;
  /** Small variant (~400px). Suitable for slash-menu previews, outline thumbnails. */
  thumbnail: Blob;
  /** Medium variant (~1200px). Suitable for editor rendering — good quality, reasonable size. */
  medium: Blob;
}

/**
 * Generate multiple sizes from a single image.
 *
 * - GIFs/SVGs/WebP: `thumbnail` and `medium` are the same as `original` (no re-encode).
 * - Small images (< thumbnail size): all three variants are the same as original.
 * - Large images: `thumbnail` and `medium` are compressed/resized; `original` is untouched.
 *
 * @returns Always returns `{ original, thumbnail, medium }`. The `original` is
 *          always the input blob unchanged.
 */
export async function generateImageVariants(
  blob: Blob,
  options: ImageVariantOptions = {}
): Promise<ImageVariants> {
  const {
    thumbnailMaxDimension = 400,
    mediumMaxDimension = 1200,
    quality = 0.85,
    mimeType = 'image/jpeg',
  } = options;

  const [thumbnail, medium] = await Promise.all([
    compressImage(blob, {
      maxDimension: thumbnailMaxDimension,
      quality,
      mimeType,
      // Always attempt thumbnail even if small — caller may want consistent sizes
      minSize: 0,
    }),
    compressImage(blob, {
      maxDimension: mediumMaxDimension,
      quality,
      mimeType,
      minSize: 0,
    }),
  ]);

  return {
    original: blob,
    thumbnail,
    medium,
  };
}
