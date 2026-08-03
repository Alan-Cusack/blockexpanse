import type {
  BookmarkBlockModel,
  ColorScheme,
  EmbedGithubModel,
  EmbedLinkedDocModel,
} from '@blockexpanse/affine-model';
import type { I18nFn } from '@blockexpanse/affine-shared/services';

import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { WithDisposable } from '@blockexpanse/global/utils';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import type { EmbedCardStyle } from '../../types.js';

import { getEmbedCardIcons } from '../../utils/url.js';

function resolveI18nFn(): I18nFn {
  const host = document.querySelector('editor-host') as {
    std?: { getOptional: (id: typeof I18nProvider) => { t: I18nFn } | null };
  } | null;
  return host?.std?.getOptional(I18nProvider)?.t ?? identityI18nFn;
}

export class EmbedCardStyleMenu extends WithDisposable(LitElement) {
  static override styles = css`
    .embed-card-style-menu {
      box-sizing: border-box;
      padding-bottom: 8px;
    }

    .embed-card-style-menu-container {
      border-radius: 8px;
      padding: 8px;
      gap: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-2);
    }

    .embed-card-style-menu-container > icon-button {
      padding: var(--1, 0px);
    }

    .embed-card-style-menu-container > icon-button.selected {
      border: 1px solid var(--affine-brand-color);
    }
  `;

  private _setEmbedCardStyle(style: EmbedCardStyle) {
    this.model.doc.updateBlock(this.model, { style });
    this.requestUpdate();
    this.abortController.abort();
  }

  override render() {
    const { EmbedCardHorizontalIcon, EmbedCardListIcon } = getEmbedCardIcons(
      this.theme
    );
    const t = resolveI18nFn();
    return html`
      <div class="embed-card-style-menu">
        <div
          class="embed-card-style-menu-container"
          @pointerdown=${(e: MouseEvent) => e.stopPropagation()}
        >
          <icon-button
            width="76px"
            height="76px"
            class=${classMap({
              selected: this.model.style === 'horizontal',
              'card-style-button-horizontal': true,
            })}
            @click=${() => this._setEmbedCardStyle('horizontal')}
          >
            ${EmbedCardHorizontalIcon}
            <affine-tooltip .offset=${4}
              >${t(
                I18nKeys.editor.edgeless.largeHorizontalStyle,
                'Large horizontal style'
              )}</affine-tooltip
            >
          </icon-button>

          <icon-button
            width="76px"
            height="76px"
            class=${classMap({
              selected: this.model.style === 'list',
              'card-style-button-list': true,
            })}
            @click=${() => this._setEmbedCardStyle('list')}
          >
            ${EmbedCardListIcon}
            <affine-tooltip .offset=${4}
              >${t(
                I18nKeys.editor.edgeless.smallHorizontalStyle,
                'Small horizontal style'
              )}</affine-tooltip
            >
          </icon-button>
        </div>
      </div>
    `;
  }

  @property({ attribute: false })
  accessor abortController!: AbortController;

  @property({ attribute: false })
  accessor model!: BookmarkBlockModel | EmbedGithubModel | EmbedLinkedDocModel;

  @property({ attribute: false })
  accessor theme!: ColorScheme;
}

declare global {
  interface HTMLElementTagNameMap {
    'embed-card-style-menu': EmbedCardStyleMenu;
  }
}
