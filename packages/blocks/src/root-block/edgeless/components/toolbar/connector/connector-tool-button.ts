import {
  ArrowUpIcon,
  ConnectorCWithArrowIcon,
  ConnectorLWithArrowIcon,
  ConnectorXWithArrowIcon,
} from '@blockexpanse/affine-components/icons';
import {
  ConnectorMode,
  getConnectorModeName,
} from '@blockexpanse/affine-model';
import {
  EditPropsStore,
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { SignalWatcher } from '@blockexpanse/global/utils';
import { computed } from '@preact/signals-core';
import { css, html, LitElement } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { getTooltipWithShortcut } from '../../utils.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';

const IcomMap = {
  [ConnectorMode.Straight]: ConnectorLWithArrowIcon,
  [ConnectorMode.Orthogonal]: ConnectorXWithArrowIcon,
  [ConnectorMode.Curve]: ConnectorCWithArrowIcon,
};

const ConnectorModeI18nKeyMap = {
  [ConnectorMode.Straight]: I18nKeys.editor.edgeless.connectorTools.straight,
  [ConnectorMode.Orthogonal]: I18nKeys.editor.edgeless.connectorTools.elbowed,
  [ConnectorMode.Curve]: I18nKeys.editor.edgeless.connectorTools.curve,
};

export class EdgelessConnectorToolButton extends QuickToolMixin(
  SignalWatcher(LitElement)
) {
  static override styles = css`
    :host {
      display: flex;
    }
    .edgeless-connector-button {
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

  private _mode$ = computed(() => {
    return this.edgeless.std.get(EditPropsStore).lastProps$.value.connector
      .mode;
  });

  override type = 'connector' as const;

  private _toggleMenu() {
    if (this.tryDisposePopper()) return;

    const menu = this.createPopper('edgeless-connector-menu', this);
    menu.element.edgeless = this.edgeless;
    menu.element.onChange = (props: Record<string, unknown>) => {
      this.edgeless.std.get(EditPropsStore).recordLastProps('connector', props);
      this.setEdgelessTool(this.type, {
        mode: this._mode$.value,
      });
    };
  }

  override render() {
    const { active } = this;
    const mode = this._mode$.value;
    const arrowColor = active ? 'currentColor' : 'var(--affine-icon-secondary)';
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const modeLabel = t(
      ConnectorModeI18nKeyMap[mode],
      getConnectorModeName(mode)
    );
    return html`
      <edgeless-tool-icon-button
        .tooltip=${this.popper ? '' : getTooltipWithShortcut(modeLabel, 'C')}
        .tooltipOffset=${17}
        .active=${active}
        .iconContainerPadding=${6}
        class="edgeless-connector-button"
        @click=${() => {
          // don't update tool before toggling menu
          this._toggleMenu();
          this.edgeless.gfx.tool.setTool('connector', {
            mode,
          });
        }}
      >
        ${IcomMap[mode]}
        <span class="arrow-up-icon" style=${styleMap({ color: arrowColor })}>
          ${ArrowUpIcon}
        </span>
      </edgeless-tool-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-connector-tool-button': EdgelessConnectorToolButton;
  }
}
