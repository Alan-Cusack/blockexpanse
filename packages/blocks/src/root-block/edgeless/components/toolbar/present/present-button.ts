import type { GfxToolsFullOptionValue } from '@blockexpanse/block-std/gfx';

import { FrameNavigatorIcon } from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { css, html, LitElement } from 'lit';

import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';

export class EdgelessPresentButton extends QuickToolMixin(
  EdgelessToolbarToolMixin(LitElement)
) {
  static override styles = css`
    :host {
      display: flex;
    }
    .edgeless-note-button {
      display: flex;
      position: relative;
    }
    .arrow-up-icon {
      position: absolute;
      top: 4px;
      right: 2px;
      font-size: 0;
    }
  `;

  override type: GfxToolsFullOptionValue['type'] = 'frameNavigator';

  override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    return html`<edgeless-tool-icon-button
    class="edgeless-frame-navigator-button"
    .tooltip=${t(I18nKeys.editor.edgeless.present, 'Present')}
    .tooltipOffset=${17}
    .iconContainerPadding=${6}
    @click=${() => {
      this.setEdgelessTool({
        type: 'frameNavigator',
      });
    }}
  >
    ${FrameNavigatorIcon}
    </edgeless-tool-icon-button>
  </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-present-button': EdgelessPresentButton;
  }
}
