import type { DataViewBlockModel } from './data-view-model.js';

export * from './data-view-block.js';
export * from './data-view-model.js';

declare global {
  namespace BlockExpanse {
    interface BlockModels {
      'affine:data-view': DataViewBlockModel;
    }
  }
}
