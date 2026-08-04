import type { CodeBlockModel } from '@blockexpanse/affine-model';
import type { BlockComponent } from '@blockexpanse/block-std';
import type { ThemedToken } from 'shiki';

import { CaptionedBlockComponent } from '@blockexpanse/affine-components/caption';
import {
  focusTextModel,
  type RichText,
} from '@blockexpanse/affine-components/rich-text';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import {
  BRACKET_PAIRS,
  NOTE_SELECTOR,
} from '@blockexpanse/affine-shared/consts';
import {
  I18nKeys,
  I18nProvider,
  NotificationProvider,
} from '@blockexpanse/affine-shared/services';
import { getViewportElement } from '@blockexpanse/affine-shared/utils';
import { getInlineRangeProvider } from '@blockexpanse/block-std';
import { IS_MAC } from '@blockexpanse/global/env';
import { noop } from '@blockexpanse/global/utils';
import {
  INLINE_ROOT_ATTR,
  type InlineRangeProvider,
  type InlineRootElement,
  type VLine,
} from '@blockexpanse/inline';
import { Slice } from '@blockexpanse/store';
import { computed, effect, type Signal, signal } from '@preact/signals-core';
import { html, nothing, type TemplateResult } from 'lit';
import { query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

import type { CodeBlockService } from './code-block-service.js';

import { EdgelessRootBlockComponent } from '../root-block/edgeless/edgeless-root-block.js';
import { CodeClipboardController } from './clipboard/index.js';
import { CodeBlockInlineManagerExtension } from './code-block-inline.js';
import { codeBlockStyles } from './styles.js';

export class CodeBlockComponent extends CaptionedBlockComponent<
  CodeBlockModel,
  CodeBlockService
> {
  static override styles = codeBlockStyles;

  private _inlineRangeProvider: InlineRangeProvider | null = null;

  private _mermaidRenderTimer: ReturnType<typeof setTimeout> | null = null;

  clipboardController = new CodeClipboardController(this);

  highlightTokens$: Signal<ThemedToken[][]> = signal([]);

  languageName$: Signal<string> = computed(() => {
    const lang = this.model.language$.value;
    if (lang === null) {
      return 'Plain Text';
    }

    const matchedInfo = this.service.langs.find(info => info.id === lang);
    return matchedInfo ? matchedInfo.name : 'Plain Text';
  });

  private get _isMermaid(): boolean {
    return this.model.language$.value === 'mermaid';
  }

  get inlineEditor() {
    const inlineRoot = this.querySelector<InlineRootElement>(
      `[${INLINE_ROOT_ATTR}]`
    );
    return inlineRoot?.inlineEditor;
  }

  get inlineManager() {
    return this.std.get(CodeBlockInlineManagerExtension.identifier);
  }

  get notificationService() {
    return this.std.getOptional(NotificationProvider);
  }

  get readonly() {
    return this.doc.readonly;
  }

  override get topContenteditableElement() {
    if (this.rootComponent instanceof EdgelessRootBlockComponent) {
      const el = this.closest<BlockComponent>(NOTE_SELECTOR);
      return el;
    }
    return this.rootComponent;
  }

  private _isDarkTheme(): boolean {
    const el = this.closest('[data-theme]') as HTMLElement | null;
    return el?.dataset.theme === 'dark';
  }

  private async _renderMermaid(): Promise<void> {
    if (!this._isMermaid) {
      this._mermaidSvg = null;
      this._mermaidError = null;
      return;
    }

    const code = this.model.text.toString().trim();
    if (!code) {
      this._mermaidSvg = null;
      this._mermaidError = null;
      return;
    }

    this._mermaidLoading = true;
    try {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: this._isDarkTheme() ? 'dark' : 'default',
        securityLevel: 'loose',
      });
      const id = `mermaid-${this.model.id}-${Date.now()}`;
      // Create a temporary off-screen container for mermaid to render into.
      // mermaid.render needs a visible DOM element to measure SVG dimensions.
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '600px';
      document.body.append(tempContainer);
      try {
        const { svg } = await mermaid.render(id, code, tempContainer);
        this._mermaidSvg = svg;
        this._mermaidError = null;
      } finally {
        tempContainer.remove();
      }
    } catch (err) {
      this._mermaidSvg = null;
      this._mermaidError =
        err instanceof Error ? err.message : 'Failed to render diagram';
    } finally {
      this._mermaidLoading = false;
    }
  }

  private _scheduleMermaidRender(): void {
    if (!this._isMermaid) return;
    if (this._mermaidRenderTimer) clearTimeout(this._mermaidRenderTimer);
    this._mermaidRenderTimer = setTimeout(() => {
      this._renderMermaid().catch(console.error);
    }, 300);
  }

  private _t(key: string, fallback: string): string {
    const i18n = this.std.getOptional(I18nProvider);
    return i18n ? i18n.t(key, fallback) : fallback;
  }

  private _updateHighlightTokens() {
    const modelLang = this.model.language$.value;
    if (modelLang === null) {
      this.highlightTokens$.value = [];
      return;
    }

    const matchedInfo = this.service.langs.find(
      info =>
        info.id === modelLang ||
        info.name === modelLang ||
        info.aliases?.includes(modelLang)
    );

    if (matchedInfo) {
      this.model.language$.value = matchedInfo.id;
      const langImport = matchedInfo.import;
      const lang = matchedInfo.id;

      const highlighter = this.service.highlighter$.value;
      const theme = this.service.themeKey;
      if (!theme || !highlighter) {
        this.highlightTokens$.value = [];
        return;
      }

      noop(this.model.text.deltas$.value);
      const code = this.model.text.toString();

      const loadedLanguages = highlighter.getLoadedLanguages();
      if (!loadedLanguages.includes(lang)) {
        highlighter
          .loadLanguage(langImport)
          .then(() => {
            this.highlightTokens$.value = highlighter.codeToTokensBase(code, {
              lang,
              theme,
            });
          })
          .catch(console.error);
      } else {
        this.highlightTokens$.value = highlighter.codeToTokensBase(code, {
          lang,
          theme,
        });
      }
    } else {
      this.highlightTokens$.value = [];
      // clear language if not found
      this.model.language$.value = null;
    }
  }

  override connectedCallback() {
    super.connectedCallback();

    // set highlight options getter used by "exportToHtml"
    this.clipboardController.hostConnected();

    this.disposables.add(
      effect(() => {
        this._updateHighlightTokens();
      })
    );
    this.disposables.add(
      effect(() => {
        noop(this.highlightTokens$.value);
        this._richTextElement?.inlineEditor?.render();
      })
    );

    // Re-render mermaid preview when code or language changes.
    this.disposables.add(
      effect(() => {
        noop(this.model.language$.value);
        noop(this.model.text.deltas$.value);
        this._scheduleMermaidRender();
      })
    );

    const selectionManager = this.host.selection;
    const INDENT_SYMBOL = '  ';
    const LINE_BREAK_SYMBOL = '\n';
    const allIndexOf = (
      text: string,
      symbol: string,
      start = 0,
      end = text.length
    ) => {
      const indexArr: number[] = [];
      let i = start;

      while (i < end) {
        const index = text.indexOf(symbol, i);
        if (index === -1 || index > end) {
          break;
        }
        indexArr.push(index);
        i = index + 1;
      }
      return indexArr;
    };

    // TODO: move to service for better performance
    this.bindHotKey({
      Backspace: ctx => {
        const state = ctx.get('keyboardState');
        const textSelection = selectionManager.find('text');
        if (!textSelection) {
          state.raw.preventDefault();
          return;
        }

        const from = textSelection.from;

        if (from.index === 0 && from.length === 0) {
          state.raw.preventDefault();
          selectionManager.setGroup('note', [
            selectionManager.create('block', { blockId: this.blockId }),
          ]);
          return true;
        }

        const inlineEditor = this.inlineEditor;
        const inlineRange = inlineEditor?.getInlineRange();
        if (!inlineRange || !inlineEditor) return;
        const left = inlineEditor.yText.toString()[inlineRange.index - 1];
        const right = inlineEditor.yText.toString()[inlineRange.index];
        const leftBrackets = BRACKET_PAIRS.map(pair => pair.left);
        if (BRACKET_PAIRS[leftBrackets.indexOf(left)]?.right === right) {
          const index = inlineRange.index - 1;
          inlineEditor.deleteText({
            index: index,
            length: 2,
          });
          inlineEditor.setInlineRange({
            index: index,
            length: 0,
          });
          state.raw.preventDefault();
          return true;
        }

        return;
      },
      Tab: ctx => {
        if (this.doc.readonly) return;
        const state = ctx.get('keyboardState');
        const event = state.raw;
        const inlineEditor = this.inlineEditor;
        if (!inlineEditor) return;
        const inlineRange = inlineEditor.getInlineRange();
        if (inlineRange) {
          event.stopPropagation();
          event.preventDefault();

          const text = this.inlineEditor.yText.toString();
          const index = text.lastIndexOf(
            LINE_BREAK_SYMBOL,
            inlineRange.index - 1
          );
          const indexArr = allIndexOf(
            text,
            LINE_BREAK_SYMBOL,
            inlineRange.index,
            inlineRange.index + inlineRange.length
          )
            .map(i => i + 1)
            .reverse();
          if (index !== -1) {
            indexArr.push(index + 1);
          } else {
            indexArr.push(0);
          }
          indexArr.forEach(i => {
            if (!this.inlineEditor) return;
            this.inlineEditor.insertText(
              {
                index: i,
                length: 0,
              },
              INDENT_SYMBOL
            );
          });
          this.inlineEditor.setInlineRange({
            index: inlineRange.index + 2,
            length:
              inlineRange.length + (indexArr.length - 1) * INDENT_SYMBOL.length,
          });

          return true;
        }

        return;
      },
      'Shift-Tab': ctx => {
        const state = ctx.get('keyboardState');
        const event = state.raw;
        const inlineEditor = this.inlineEditor;
        if (!inlineEditor) return;
        const inlineRange = inlineEditor.getInlineRange();
        if (inlineRange) {
          event.stopPropagation();
          event.preventDefault();

          const text = this.inlineEditor.yText.toString();
          const index = text.lastIndexOf(
            LINE_BREAK_SYMBOL,
            inlineRange.index - 1
          );
          let indexArr = allIndexOf(
            text,
            LINE_BREAK_SYMBOL,
            inlineRange.index,
            inlineRange.index + inlineRange.length
          )
            .map(i => i + 1)
            .reverse();
          if (index !== -1) {
            indexArr.push(index + 1);
          } else {
            indexArr.push(0);
          }
          indexArr = indexArr.filter(
            i => text.slice(i, i + 2) === INDENT_SYMBOL
          );
          indexArr.forEach(i => {
            if (!this.inlineEditor) return;
            this.inlineEditor.deleteText({
              index: i,
              length: 2,
            });
          });
          if (indexArr.length > 0) {
            this.inlineEditor.setInlineRange({
              index:
                inlineRange.index -
                (indexArr[indexArr.length - 1] < inlineRange.index ? 2 : 0),
              length:
                inlineRange.length -
                (indexArr.length - 1) * INDENT_SYMBOL.length,
            });
          }

          return true;
        }

        return;
      },
      'Control-d': () => {
        if (!IS_MAC) return;
        return true;
      },
      Delete: () => {
        return true;
      },
      Enter: () => {
        this.doc.captureSync();
        return true;
      },
      'Mod-Enter': () => {
        const { model, std } = this;
        if (!model || !std) return;
        const inlineEditor = this.inlineEditor;
        const inlineRange = inlineEditor?.getInlineRange();
        if (!inlineRange || !inlineEditor) return;
        const isEnd = model.text.length === inlineRange.index;
        if (!isEnd) return;
        const parent = this.doc.getParent(model);
        if (!parent) return;
        const index = parent.children.indexOf(model);
        if (index === -1) return;
        const id = this.doc.addBlock('affine:paragraph', {}, parent, index + 1);
        focusTextModel(std, id);
        return true;
      },
    });

    this._inlineRangeProvider = getInlineRangeProvider(this);
  }

  copyCode() {
    const model = this.model;
    const slice = Slice.fromModels(model.doc, [model]);
    this.std.clipboard
      .copySlice(slice)
      .then(() => {
        toastI18n(
          this.host,
          I18nKeys.editor.toast.copied,
          'Copied to clipboard'
        );
      })
      .catch(e => {
        toastI18n(
          this.host,
          I18nKeys.editor.toast.copyFailedDetail,
          'Copied failed, something went wrong'
        );
        console.error(e);
      });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.clipboardController.hostDisconnected();
  }

  override async getUpdateComplete() {
    const result = await super.getUpdateComplete();
    await this._richTextElement?.updateComplete;
    return result;
  }

  override renderBlock(): TemplateResult<1> {
    const showLineNumbers =
      this.std.getConfig('affine:code')?.showLineNumbers ?? true;

    return html`
      <div
        class=${classMap({
          'affine-code-block-container': true,
          wrap: this.model.wrap,
          'mermaid-active': this._isMermaid,
        })}
      >
        ${when(
          this._isMermaid,
          () => html`
            <div class="mermaid-tab-bar">
              <span class="mermaid-lang-label">mermaid</span>
              <div class="mermaid-tabs">
                <button
                  class=${classMap({
                    'mermaid-tab-btn': true,
                    active: this._mermaidTab === 'code',
                  })}
                  @click=${() => {
                    this._mermaidTab = 'code';
                  }}
                >
                  ${this._t(I18nKeys.editor.mermaid.code, 'Code')}
                </button>
                <button
                  class=${classMap({
                    'mermaid-tab-btn': true,
                    active: this._mermaidTab === 'preview',
                  })}
                  @click=${() => {
                    this._mermaidTab = 'preview';
                  }}
                >
                  ${this._t(I18nKeys.editor.mermaid.diagram, 'Diagram')}
                </button>
                <div
                  class="mermaid-tab-indicator"
                  style=${`transform: translateX(${this._mermaidTab === 'code' ? '0%' : '100%'});`}
                ></div>
              </div>
              <div class="mermaid-tab-actions">
                <button
                  class="mermaid-action-btn"
                  title=${this._t(I18nKeys.editor.mermaid.refresh, 'Refresh')}
                  @click=${() => {
                    this._renderMermaid().catch(console.error);
                  }}
                >
                  ↻
                </button>
              </div>
            </div>
          `
        )}

        <div
          class="mermaid-code-area"
          style=${this._isMermaid
            ? this._mermaidTab === 'code'
              ? ''
              : 'display:none'
            : ''}
        >
          <rich-text
            .yText=${this.model.text.yText}
            .inlineEventSource=${this.topContenteditableElement ?? nothing}
            .undoManager=${this.doc.history}
            .attributesSchema=${this.inlineManager.getSchema()}
            .attributeRenderer=${this.inlineManager.getRenderer()}
            .readonly=${this.doc.readonly}
            .inlineRangeProvider=${this._inlineRangeProvider}
            .enableClipboard=${false}
            .enableUndoRedo=${false}
            .wrapText=${this.model.wrap}
            .verticalScrollContainerGetter=${() =>
              getViewportElement(this.host)}
            .vLineRenderer=${showLineNumbers
              ? (vLine: VLine) => {
                  return html`
                    <span contenteditable="false" class="line-number"
                      >${vLine.index + 1}</span
                    >
                    ${vLine.renderVElements()}
                  `;
                }
              : undefined}
          >
          </rich-text>
        </div>

        ${when(
          this._isMermaid && this._mermaidTab === 'preview',
          () => html`
            <div class="mermaid-preview-container">
              <div class="mermaid-zoom-control">
                <button
                  class="mermaid-action-btn"
                  title=${this._t(I18nKeys.editor.mermaid.zoomOut, 'Zoom out')}
                  @click=${() => {
                    this._mermaidZoom = Math.max(0.25, this._mermaidZoom - 0.1);
                  }}
                >
                  −
                </button>
                <span class="mermaid-zoom-label"
                  >${Math.round(this._mermaidZoom * 100)}%</span
                >
                <button
                  class="mermaid-action-btn"
                  title=${this._t(I18nKeys.editor.mermaid.zoomIn, 'Zoom in')}
                  @click=${() => {
                    this._mermaidZoom = Math.min(3, this._mermaidZoom + 0.1);
                  }}
                >
                  +
                </button>
                <button
                  class="mermaid-action-btn"
                  title=${this._t(
                    I18nKeys.editor.mermaid.resetZoom,
                    'Reset zoom'
                  )}
                  @click=${() => {
                    this._mermaidZoom = 1;
                  }}
                >
                  ⟲
                </button>
              </div>
              ${when(
                this._mermaidLoading,
                () =>
                  html`<div class="mermaid-loading">
                    ${this._t(I18nKeys.editor.mermaid.rendering, 'Rendering…')}
                  </div>`,
                () =>
                  when(
                    this._mermaidError,
                    () => html`
                      <div class="mermaid-error">⚠ ${this._mermaidError}</div>
                    `,
                    () =>
                      when(
                        this._mermaidSvg,
                        () =>
                          html`<div
                            class="mermaid-svg-wrapper"
                            style="zoom: ${this._mermaidZoom};"
                            .innerHTML=${this._mermaidSvg}
                          ></div>`,
                        () =>
                          html`<div class="mermaid-empty">
                            ${this._t(
                              I18nKeys.editor.mermaid.empty,
                              'Type a diagram to see preview'
                            )}
                          </div>`
                      )
                  )
              )}
            </div>
          `
        )}
        ${this.renderChildren(this.model)} ${Object.values(this.widgets)}
      </div>
    `;
  }

  setWrap(wrap: boolean) {
    this.doc.updateBlock(this.model, { wrap });
  }

  @state() private accessor _mermaidError: string | null = null;

  @state() private accessor _mermaidLoading = false;

  // --- Mermaid preview state ---
  @state() private accessor _mermaidSvg: string | null = null;

  @state() private accessor _mermaidTab: 'code' | 'preview' = 'preview';

  @state() private accessor _mermaidZoom = 1;

  @query('rich-text')
  private accessor _richTextElement: RichText | null = null;

  override accessor blockContainerStyles = {
    margin: '18px 0',
  };

  override accessor useCaptionEditor = true;

  override accessor useZeroWidth = true;
}

declare global {
  interface HTMLElementTagNameMap {
    'affine-code': CodeBlockComponent;
  }
}
