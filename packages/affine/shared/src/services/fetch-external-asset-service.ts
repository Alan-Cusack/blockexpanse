import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

/**
 * Host-provided fetch for external image URLs (paste / import).
 * Implement via your backend API — not a browser-side CORS proxy.
 *
 * @example
 * ```ts
 * FetchExternalAssetExtension(async (url) => {
 *   const res = await fetch('/api/fetch-image', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ url }),
 *   });
 *   if (!res.ok) return null;
 *   return res.blob();
 * });
 * ```
 */
export type FetchExternalAssetFn = (url: string) => Promise<Blob | null>;

export const FetchExternalAssetProvider =
  createIdentifier<FetchExternalAssetFn>('AffineFetchExternalAsset');

let fetchExternalAssetHandler: FetchExternalAssetFn | null = null;

/** Current handler (null = skip external URLs). */
export function getFetchExternalAsset(): FetchExternalAssetFn | null {
  return fetchExternalAssetHandler;
}

export function setFetchExternalAssetHandler(
  handler: FetchExternalAssetFn | null
): void {
  fetchExternalAssetHandler = handler;
}

export function FetchExternalAssetExtension(
  handler: FetchExternalAssetFn
): ExtensionType {
  return {
    setup: di => {
      setFetchExternalAssetHandler(handler);
      di.addImpl(FetchExternalAssetProvider, () => handler);
    },
  };
}
