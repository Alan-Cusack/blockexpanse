import type { EditorHost } from '@blockexpanse/block-std';

import { AIStarIcon } from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { stopPropagation } from '@blockexpanse/affine-shared/utils';
import { WithDisposable } from '@blockexpanse/global/utils';
import { SendIcon } from '@blockexpanse/icons/lit';
import { css, html, LitElement, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';

export class AIPanelInput extends WithDisposable(LitElement) {
  static override styles = css`
    :host {
      width: 100%;
      padding: 0 8px;
      box-sizing: border-box;
    }

    .root {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid var(--affine-border-color);
      background: var(--affine-background-overlay-panel-color);
      box-sizing: border-box;
    }

    .icon {
      display: flex;
      align-items: center;
    }

    .textarea-container {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      flex: 1 0 0;

      textarea {
        flex: 1 0 0;
        border: none;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        background-color: transparent;
        resize: none;
        overflow: hidden;
        padding: 0px;

        color: var(--affine-text-primary-color);

        /* light/sm */
        font-family: var(--affine-font-family);
        font-size: var(--affine-font-sm);
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
      }

      textarea::placeholder {
        color: var(--affine-placeholder-color);
      }

      textarea::-moz-placeholder {
        color: var(--affine-placeholder-color);
      }
    }

    .arrow {
      display: flex;
      align-items: center;
      padding: 2px;
      gap: 10px;
      border-radius: 4px;
      background: var(--affine-black-10, rgba(0, 0, 0, 0.1));

      svg {
        width: 16px;
        height: 16px;
        color: var(--affine-pure-white, #fff);
      }
    }
    .arrow[data-active] {
      background: var(--affine-brand-color, #1e96eb);
    }
    .arrow[data-active]:hover {
      cursor: pointer;
    }
  `;

  private _onInput = () => {
    this.textarea.style.height = 'auto';
    this.textarea.style.height = this.textarea.scrollHeight + 'px';

    this.onInput?.(this.textarea.value);
    const value = this.textarea.value.trim();
    if (value.length > 0) {
      this._arrow.dataset.active = '';
      this._hasContent = true;
    } else {
      delete this._arrow.dataset.active;
      this._hasContent = false;
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      this._sendToAI();
    }
  };

  private _sendToAI = () => {
    const value = this.textarea.value.trim();
    if (value.length === 0) return;

    this.onFinish?.(value);
    this.remove();
  };

  override render() {
    const host = this.closest('editor-host') as EditorHost | null;
    const t = host?.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const placeholder = t(
      I18nKeys.editor.ai.thoughtsPlaceholder,
      'What are your thoughts?'
    );
    const sendLabel = t(I18nKeys.editor.ai.send, 'Send to AI');
    return html`<div class="root">
      <div class="icon">${AIStarIcon}</div>
      <div class="textarea-container">
        <textarea
          placeholder=${placeholder}
          rows="1"
          @keydown=${this._onKeyDown}
          @input=${this._onInput}
          @pointerdown=${stopPropagation}
          @click=${stopPropagation}
          @dblclick=${stopPropagation}
          @cut=${stopPropagation}
          @copy=${stopPropagation}
          @paste=${stopPropagation}
          @keyup=${stopPropagation}
        ></textarea>
        <div
          class="arrow"
          @click=${this._sendToAI}
          @pointerdown=${stopPropagation}
        >
          ${SendIcon()}
          ${this._hasContent
            ? html`<affine-tooltip .offset=${12}>${sendLabel}</affine-tooltip>`
            : nothing}
        </div>
      </div>
    </div>`;
  }

  override updated(_changedProperties: Map<PropertyKey, unknown>): void {
    const result = super.updated(_changedProperties);
    this.textarea.style.height = this.textarea.scrollHeight + 'px';
    return result;
  }

  @query('.arrow')
  private accessor _arrow!: HTMLDivElement;

  @state()
  private accessor _hasContent = false;

  @property({ attribute: false })
  accessor onFinish: ((input: string) => void) | undefined = undefined;

  @property({ attribute: false })
  accessor onInput: ((input: string) => void) | undefined = undefined;

  @query('textarea')
  accessor textarea!: HTMLTextAreaElement;
}

declare global {
  interface HTMLElementTagNameMap {
    'ai-panel-input': AIPanelInput;
  }
}
