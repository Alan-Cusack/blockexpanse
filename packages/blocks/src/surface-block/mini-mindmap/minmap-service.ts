import { RootBlockSchema } from '@blockexpanse/affine-model';
import { BlockService } from '@blockexpanse/block-std';
import { Slot } from '@blockexpanse/store';

export class MindmapService extends BlockService {
  static override readonly flavour = RootBlockSchema.model.flavour;

  requestCenter = new Slot();

  center() {
    this.requestCenter.emit();
  }

  override mounted(): void {}
}
