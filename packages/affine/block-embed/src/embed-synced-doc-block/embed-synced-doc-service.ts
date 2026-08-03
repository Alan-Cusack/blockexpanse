import { EmbedSyncedDocBlockSchema } from '@blockexpanse/affine-model';
import { BlockService } from '@blockexpanse/block-std';

export class EmbedSyncedDocBlockService extends BlockService {
  static override readonly flavour = EmbedSyncedDocBlockSchema.model.flavour;
}
