import { AIStarIcon } from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { isGfxGroupCompatibleModel } from '@blockexpanse/block-std/gfx';
import { WithDisposable } from '@blockexpanse/global/utils';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { CopilotTool } from '../../edgeless/gfx-tool/copilot-tool.js';

import { sortEdgelessElements } from '../../edgeless/utils/clone-utils.js';

export class EdgelessAskAiButton extends WithDisposable(LitElement) {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
    }
    .label {
      padding-left: 4px;
      color: var(--affine-brand-color);
    }
  `;

  private _onClick = () => {
    const selectedElements = sortEdgelessElements(
      this.edgeless.service.selection.selectedElements
    );
    const toBeSelected = new Set(selectedElements);
    selectedElements.forEach(element => {
      if (toBeSelected.has(element)) return;
      toBeSelected.add(element);
      if (isGfxGroupCompatibleModel(element)) {
        element.descendantElements.forEach(descendant => {
          toBeSelected.add(descendant);
        });
      }
    });
    this.edgeless.gfx.tool.setTool('copilot');
    (
      this.edgeless.gfx.tool.currentTool$.peek() as CopilotTool
    ).updateSelectionWith(Array.from(toBeSelected), 10);
  };

  protected override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const label = t(I18nKeys.editor.ai.askAi, 'Ask AI');

    return html`
      <editor-icon-button
        aria-label=${label}
        .tooltip=${label}
        .labelHeight=${'20px'}
        @click=${this._onClick}
      >
        ${AIStarIcon}<span class="label medium">${label}</span>
      </editor-icon-button>
    `;
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;
}

export function renderAskAiButton(edgeless: EdgelessRootBlockComponent) {
  return html`
    <edgeless-ask-ai-button .edgeless=${edgeless}></edgeless-ask-ai-button>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-ask-ai-button': EdgelessAskAiButton;
  }
}
