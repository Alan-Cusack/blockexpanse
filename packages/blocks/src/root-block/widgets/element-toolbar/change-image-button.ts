import type { ImageBlockModel } from '@blockexpanse/affine-model';

import {
  CaptionIcon,
  DownloadIcon,
} from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { WithDisposable } from '@blockexpanse/global/utils';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import type { ImageBlockComponent } from '../../../image-block/image-block.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';

import { downloadImageBlob } from '../../../image-block/utils.js';

export class EdgelessChangeImageButton extends WithDisposable(LitElement) {
  private _download = () => {
    if (!this._blockComponent) return;
    downloadImageBlob(this._blockComponent).catch(console.error);
  };

  private _showCaption = () => {
    this._blockComponent?.captionEditor?.show();
  };

  private get _blockComponent() {
    const blockSelection =
      this.edgeless.service.selection.surfaceSelections.filter(sel =>
        sel.elements.includes(this.model.id)
      );
    if (blockSelection.length !== 1) {
      return;
    }

    const block = this.edgeless.std.view.getBlock(
      blockSelection[0].blockId
    ) as ImageBlockComponent | null;

    return block;
  }

  private get _doc() {
    return this.model.doc;
  }

  override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const downloadLabel = t(I18nKeys.editor.action.download, 'Download');
    const addCaptionLabel = t(I18nKeys.editor.action.addCaption, 'Add caption');

    return html`
      <editor-icon-button
        aria-label=${downloadLabel}
        .tooltip=${downloadLabel}
        ?disabled=${this._doc.readonly}
        @click=${this._download}
      >
        ${DownloadIcon}
      </editor-icon-button>

      <editor-toolbar-separator></editor-toolbar-separator>

      <editor-icon-button
        aria-label=${addCaptionLabel}
        .tooltip=${addCaptionLabel}
        class="change-image-button caption"
        ?disabled=${this._doc.readonly}
        @click=${this._showCaption}
      >
        ${CaptionIcon}
      </editor-icon-button>
    `;
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor model!: ImageBlockModel;
}

export function renderChangeImageButton(
  edgeless: EdgelessRootBlockComponent,
  images?: ImageBlockModel[]
) {
  if (images?.length !== 1) return nothing;

  return html`
    <edgeless-change-image-button
      .model=${images[0]}
      .edgeless=${edgeless}
    ></edgeless-change-image-button>
  `;
}
