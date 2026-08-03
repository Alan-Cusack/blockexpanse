import { SurfaceBlockSchema } from '@blockexpanse/affine-block-surface';
import { BlockService } from '@blockexpanse/block-std';

export class MindmapSurfaceBlockService extends BlockService {
  static override readonly flavour = SurfaceBlockSchema.model.flavour;
}
