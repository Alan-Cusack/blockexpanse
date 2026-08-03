import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@blockexpanse/affine-components/icons';
import { TextAlign } from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

const TEXT_ALIGN_LIST = [
  {
    name: 'Left',
    i18nKey: I18nKeys.editor.edgeless.textTools.alignLeft,
    value: TextAlign.Left,
    icon: TextAlignLeftIcon,
  },
  {
    name: 'Center',
    i18nKey: I18nKeys.editor.edgeless.textTools.alignCenter,
    value: TextAlign.Center,
    icon: TextAlignCenterIcon,
  },
  {
    name: 'Right',
    i18nKey: I18nKeys.editor.edgeless.textTools.alignRight,
    value: TextAlign.Right,
    icon: TextAlignRightIcon,
  },
];

export class EdgelessAlignPanel extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `;

  private _onSelect(value: TextAlign) {
    this.value = value;
    if (this.onSelect) {
      this.onSelect(value);
    }
  }

  override render() {
    const host = this.closest('editor-host') as {
      std?: {
        getOptional: (
          id: typeof I18nProvider
        ) => { t: typeof identityI18nFn } | null;
      };
    } | null;
    const t = host?.std?.getOptional(I18nProvider)?.t ?? identityI18nFn;

    return repeat(
      TEXT_ALIGN_LIST,
      item => item.name,
      ({ name, i18nKey, value, icon }) => {
        const label = t(i18nKey, name);
        return html`
          <edgeless-tool-icon-button
            .activeMode=${'background'}
            aria-label=${label}
            .tooltip=${label}
            .active=${this.value === value}
            @click=${() => this._onSelect(value)}
          >
            ${icon}
          </edgeless-tool-icon-button>
        `;
      }
    );
  }

  @property({ attribute: false })
  accessor onSelect: undefined | ((value: TextAlign) => void) = undefined;

  @property({ attribute: false })
  accessor value: TextAlign = TextAlign.Left;
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-align-panel': EdgelessAlignPanel;
  }
}
