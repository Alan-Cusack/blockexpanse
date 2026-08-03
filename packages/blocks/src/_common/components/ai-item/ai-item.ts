import {
  ArrowRightIcon,
  EnterIcon,
} from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import {
  EditorHost,
  PropTypes,
  requiredProperties,
} from '@blockexpanse/block-std';
import { WithDisposable } from '@blockexpanse/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';

import type { AIItemConfig } from './types.js';

import { menuItemStyles } from './styles.js';

@requiredProperties({
  host: PropTypes.instanceOf(EditorHost),
  item: PropTypes.object,
})
export class AIItem extends WithDisposable(LitElement) {
  static override styles = css`
    ${menuItemStyles}
  `;

  override render() {
    const { item } = this;
    const t = this.host.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const name =
      item.name === 'Ask AI'
        ? t(I18nKeys.editor.ai.askAi, 'Ask AI')
        : item.name === 'Discard'
          ? t(I18nKeys.editor.ai.discard, 'Discard')
          : item.name;
    const className = item.name.split(' ').join('-').toLocaleLowerCase();
    const betaLabel = t(I18nKeys.editor.ai.beta, 'Beta');

    return html`<div
      class="menu-item ${className}"
      @pointerdown=${(e: MouseEvent) => e.stopPropagation()}
      @click=${() => {
        this.onClick?.();
        if (typeof item.handler === 'function') {
          item.handler(this.host);
        }
      }}
    >
      <span class="item-icon">${item.icon}</span>
      <div class="item-name">
        ${name}${item.beta
          ? html`<div class="item-beta">(${betaLabel})</div>`
          : nothing}
      </div>
      ${item.subItem
        ? html`<span class="arrow-right-icon">${ArrowRightIcon}</span>`
        : html`<span class="enter-icon">${EnterIcon}</span>`}
    </div>`;
  }

  @property({ attribute: false })
  accessor host!: EditorHost;

  @property({ attribute: false })
  accessor item!: AIItemConfig;

  @query('.menu-item')
  accessor menuItem: HTMLDivElement | null = null;

  @property({ attribute: false })
  accessor onClick: (() => void) | undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'ai-item': AIItem;
  }
}
