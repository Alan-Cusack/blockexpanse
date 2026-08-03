import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

export interface ImageProxyConfig {
  /**
   * Image CORS proxy endpoint.
   * Empty string disables the proxy (direct fetch; cross-origin may fail).
   */
  endpoint: string;
}

export const ImageProxyProvider =
  createIdentifier<ImageProxyConfig>('AffineImageProxy');

let imageProxyEndpoint = '';

/** Current image proxy endpoint (empty = disabled). */
export function getImageProxyEndpoint(): string {
  return imageProxyEndpoint;
}

/**
 * Imperative setter. Prefer {@link ImageProxyExtension} in host apps.
 * Kept for `ImageBlockService.setImageProxyURL` compatibility.
 */
export function setImageProxyEndpoint(endpoint: string): void {
  imageProxyEndpoint = endpoint;
}

/**
 * Opt-in image proxy for import / export / clipboard of external images.
 *
 * @example
 * ```ts
 * extensions: [
 *   ImageProxyExtension('https://your.cdn/api/image-proxy'),
 * ]
 * ```
 */
export function ImageProxyExtension(endpoint: string): ExtensionType {
  return {
    setup: di => {
      setImageProxyEndpoint(endpoint);
      di.addImpl(ImageProxyProvider, () => ({ endpoint }));
    },
  };
}
