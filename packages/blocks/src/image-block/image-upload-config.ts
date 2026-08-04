/**
 * @file Image upload configuration registry.
 *
 * Separated from image-service.ts to avoid circular dependencies
 * (utils.ts → image-service.ts → utils.ts).
 *
 * Hosts can customize image processing before upload:
 *
 * ```ts
 * import { ImageBlockService } from '@blockexpanse/blocks';
 *
 * // Disable compression (store originals):
 * ImageBlockService.imageUpload = null;
 *
 * // Custom multi-size handling:
 * ImageBlockService.imageUpload = async (blob) => {
 *   const variants = await generateImageVariants(blob);
 *   // Store variants in your BlobSource...
 *   return variants.thumbnail;  // editor renders this
 * };
 * ```
 */

import { compressImage } from './compress.js';

/**
 * Custom image upload handler.
 *
 * The returned blob is passed to `doc.blobSync.set()` — its SHA-256 hash
 * becomes the `sourceId` stored on the image block.
 */
export type ImageUploadHandler = (blob: Blob) => Promise<Blob>;

/**
 * Process an image blob before it's stored.
 *
 * Default: `compressImage` (resize to 1920px max + JPEG quality 0.85).
 * Set to `null` to disable compression (store original).
 * Set to a custom function for multi-size variants, AI-generated images, etc.
 */
export let imageUpload: ImageUploadHandler | null = compressImage;

export function setImageUploadHandler(
  handler: ImageUploadHandler | null
): void {
  imageUpload = handler;
}
