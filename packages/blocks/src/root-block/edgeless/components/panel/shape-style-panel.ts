import {
  GeneralStyleIcon,
  ScribbledStyleIcon,
} from '@blockexpanse/affine-components/icons';
import { ShapeStyle } from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

const SHAPE_STYLE_LIST = [
  {
    value: ShapeStyle.General,
    i18nKey: I18nKeys.editor.edgeless.shapeTools.general,
    icon: GeneralStyleIcon,
  },
  {
    value: ShapeStyle.Scribbled,
    i18nKey: I18nKeys.editor.edgeless.shapeTools.scribbled,
    icon: ScribbledStyleIcon,
  },
];

export class EdgelessShapeStylePanel extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `;

  private _onSelect(value: ShapeStyle) {
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
      SHAPE_STYLE_LIST,
      item => item.value,
      ({ value, i18nKey, icon }) => {
        const label = t(i18nKey, value);
        return html`<edgeless-tool-icon-button
          .tipPosition=${'top'}
          .activeMode=${'background'}
          aria-label=${label}
          .tooltip=${label}
          .active=${this.value === value}
          @click=${() => this._onSelect(value)}
        >
          ${icon}
        </edgeless-tool-icon-button>`;
      }
    );
  }

  @property({ attribute: false })
  accessor onSelect: undefined | ((value: ShapeStyle) => void) = undefined;

  @property({ attribute: false })
  accessor value!: ShapeStyle;
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-shape-style-panel': EdgelessShapeStylePanel;
  }
}
