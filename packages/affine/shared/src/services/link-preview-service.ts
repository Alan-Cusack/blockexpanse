import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

export interface LinkPreviewConfig {
  /**
   * Link preview API endpoint (POST JSON `{ url }`).
   * Empty string disables remote preview.
   */
  endpoint: string;
}

export const LinkPreviewProvider =
  createIdentifier<LinkPreviewConfig>('AffineLinkPreview');

let linkPreviewEndpoint = '';

/** Current link-preview endpoint (empty = disabled). */
export function getLinkPreviewEndpoint(): string {
  return linkPreviewEndpoint;
}

/**
 * Imperative setter. Prefer {@link LinkPreviewExtension} in host apps.
 * Kept for `BookmarkBlockService.setLinkPreviewEndpoint` compatibility.
 */
export function setLinkPreviewEndpoint(endpoint: string): void {
  linkPreviewEndpoint = endpoint;
}

/**
 * Opt-in link preview backend for bookmark / embed cards.
 *
 * @example
 * ```ts
 * extensions: [
 *   LinkPreviewExtension('https://your.api/link-preview'),
 * ]
 * ```
 */
export function LinkPreviewExtension(endpoint: string): ExtensionType {
  return {
    setup: di => {
      setLinkPreviewEndpoint(endpoint);
      di.addImpl(LinkPreviewProvider, () => ({ endpoint }));
    },
  };
}
