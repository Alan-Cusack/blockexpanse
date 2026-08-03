import { setFetchExternalAssetHandler } from '@blockexpanse/affine-shared/services';
import {
  DocCollection,
  Job,
  type JobMiddleware,
  Schema,
} from '@blockexpanse/store';

import { AffineSchemas } from '../../schemas.js';

declare global {
  interface Window {
    happyDOM: {
      settings: {
        fetch: {
          disableSameOriginPolicy: boolean;
        };
      };
    };
  }
}

const TEST_IMAGE_STUB = new Blob(
  ['<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>'],
  { type: 'image/svg+xml' }
);

export function createJob(middlewares?: JobMiddleware[]) {
  window.happyDOM.settings.fetch.disableSameOriginPolicy = true;
  setFetchExternalAssetHandler(async url => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.blob();
      }
    } catch {
      // External URLs may be offline or 404 in unit tests.
    }
    return TEST_IMAGE_STUB;
  });
  const testMiddlewares = middlewares ?? [];
  const schema = new Schema().register(AffineSchemas);
  const docCollection = new DocCollection({ schema });
  docCollection.meta.initialize();
  return new Job({ collection: docCollection, middlewares: testMiddlewares });
}
