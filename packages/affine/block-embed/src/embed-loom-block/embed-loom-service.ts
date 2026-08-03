import {
  EmbedLoomBlockSchema,
  type EmbedLoomModel,
} from '@blockexpanse/affine-model';
import { EmbedLoomStyles } from '@blockexpanse/affine-model';
import { EmbedOptionProvider } from '@blockexpanse/affine-shared/services';
import { BlockService } from '@blockexpanse/block-std';

import { LinkPreviewer } from '../common/link-previewer.js';
import { loomUrlRegex } from './embed-loom-model.js';
import { queryEmbedLoomData } from './utils.js';

export class EmbedLoomBlockService extends BlockService {
  static override readonly flavour = EmbedLoomBlockSchema.model.flavour;

  private static readonly linkPreviewer = new LinkPreviewer();

  static setLinkPreviewEndpoint =
    EmbedLoomBlockService.linkPreviewer.setEndpoint;

  queryUrlData = (embedLoomModel: EmbedLoomModel, signal?: AbortSignal) => {
    return queryEmbedLoomData(embedLoomModel, signal);
  };

  override mounted() {
    super.mounted();

    this.std.get(EmbedOptionProvider).registerEmbedBlockOptions({
      flavour: this.flavour,
      urlRegex: loomUrlRegex,
      styles: EmbedLoomStyles,
      viewType: 'embed',
    });
  }
}
