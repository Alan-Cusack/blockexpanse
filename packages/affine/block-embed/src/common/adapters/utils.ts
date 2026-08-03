import type { ReferenceParams } from '@blockexpanse/affine-model';

import { TextUtils } from '@blockexpanse/affine-shared/adapters';

export function generateDocUrl(
  docBaseUrl: string,
  pageId: string,
  params: ReferenceParams
) {
  const search = TextUtils.toURLSearchParams(params);
  const query = search?.size ? `?${search.toString()}` : '';
  const url = docBaseUrl ? `${docBaseUrl}/${pageId}${query}` : '';
  return url;
}
