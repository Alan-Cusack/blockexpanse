import type { AssetsManager } from '@blockexpanse/store';

import { sha } from '@blockexpanse/global/utils';

import { getFetchExternalAsset } from '../../services/fetch-external-asset-service.js';
import { FetchUtils } from './fetch.js';

function resolveRelativeAssetBlobId(
  imageURL: string,
  assets: AssetsManager
): string {
  const imageURLSplit = imageURL.split('/');
  while (imageURLSplit.length > 0) {
    const key = assets
      .getPathBlobIdMap()
      .get(decodeURIComponent(imageURLSplit.join('/')));
    if (key) {
      return key;
    }
    imageURLSplit.shift();
  }
  return '';
}

async function writeBlobToAssets(
  blob: Blob,
  imageURL: string,
  assets: AssetsManager
): Promise<string> {
  const blobId = await sha(await blob.arrayBuffer());
  const name =
    (imageURL.split('/').at(-1)?.split('?')[0] ?? 'image') +
    (blob.type ? `.${blob.type.split('/').at(-1)}` : '');
  const file =
    blob instanceof File
      ? blob
      : new File([blob], name, { type: blob.type || 'image/png' });
  assets.getAssets().set(blobId, file);
  await assets.writeToBlob(blobId);
  return blobId;
}

/**
 * Ingest an external http(s) image into blob storage during import.
 * Requires {@link FetchExternalAssetExtension} or server-side URL pre-localization.
 * `data:` URLs are fetched locally without the extension.
 */
export async function ingestExternalImageUrl(
  imageURL: string,
  assets: AssetsManager
): Promise<string | null> {
  if (!FetchUtils.fetchable(imageURL)) {
    const blobId = resolveRelativeAssetBlobId(imageURL, assets);
    return blobId || null;
  }

  try {
    let blob: Blob | null = null;

    if (imageURL.startsWith('data:')) {
      const response = await FetchUtils.fetchLocalImage(imageURL);
      blob = response ? await response.blob() : null;
    } else {
      const fetchExternal = getFetchExternalAsset();
      if (!fetchExternal) {
        console.warn(
          `[BlockExpanse] Skipping external image "${imageURL}". ` +
            'Configure FetchExternalAssetExtension or pre-localize URLs on your import server.'
        );
        return null;
      }
      blob = await fetchExternal(imageURL);
    }

    if (!blob) {
      return null;
    }
    return await writeBlobToAssets(blob, imageURL, assets);
  } catch {
    return null;
  }
}
