import type { SurfaceRefBlockModel } from '@blockexpanse/affine-model';

import { BlockComponent } from '@blockexpanse/block-std';
import { nothing } from 'lit';

export class EdgelessSurfaceRefBlockComponent extends BlockComponent<SurfaceRefBlockModel> {
  override render() {
    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'affine-edgeless-surface-ref': EdgelessSurfaceRefBlockComponent;
  }
}
