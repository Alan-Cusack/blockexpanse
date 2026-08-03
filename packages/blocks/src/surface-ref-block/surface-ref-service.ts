import { SurfaceRefBlockSchema } from '@blockexpanse/affine-model';
import { BlockService } from '@blockexpanse/block-std';

export class SurfaceRefBlockService extends BlockService {
  static override readonly flavour = SurfaceRefBlockSchema.model.flavour;
}
