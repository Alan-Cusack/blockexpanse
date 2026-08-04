import { css } from 'lit';

export const codeBlockStyles = css`
  affine-code {
    position: relative;
  }

  .affine-code-block-container {
    font-size: var(--affine-font-xs);
    line-height: var(--affine-line-height);
    position: relative;
    padding: 12px;
    background: var(--affine-background-code-block);
    border-radius: 10px;
    box-sizing: border-box;
  }

  .affine-code-block-container .inline-editor {
    font-family: var(--affine-font-code-family);
    font-variant-ligatures: none;
  }

  .affine-code-block-container v-line {
    position: relative;
    display: inline-grid !important;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .affine-code-block-container div:has(> v-line) {
    display: grid;
  }

  .affine-code-block-container .line-number {
    position: sticky;
    text-align: left;
    padding-right: 4px;
    width: 24px;
    word-break: break-word;
    white-space: nowrap;
    left: -0.5px;
    z-index: 1;
    background: var(--affine-background-code-block);
    font-size: var(--affine-font-xs);
    line-height: var(--affine-line-height);
    color: var(--affine-text-secondary);
    box-sizing: border-box;
    user-select: none;
  }

  /* Mermaid: tab bar + fixed-height content */
  .affine-code-block-container.mermaid-active .mermaid-code-area {
    max-height: 320px;
    overflow-y: auto;
  }

  .mermaid-tab-bar {
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--affine-border-color);
    padding-bottom: 0;
  }

  .mermaid-tab-btn {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    font-size: var(--affine-font-xs);
    font-weight: 600;
    color: var(--affine-text-secondary);
    padding: 6px 14px;
    user-select: none;
    margin-bottom: -1px;
  }

  .mermaid-tab-btn.active {
    color: var(--affine-primary-color);
    border-bottom-color: var(--affine-primary-color);
  }

  .mermaid-tab-btn:hover:not(.active) {
    color: var(--affine-text-primary);
  }

  .mermaid-tab-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 2px;
    padding-right: 4px;
  }

  .mermaid-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: var(--affine-text-secondary);
    user-select: none;
  }

  .mermaid-action-btn:hover {
    background: var(--affine-hover-color);
    color: var(--affine-text-primary);
  }

  .mermaid-zoom-label {
    font-size: 11px;
    color: var(--affine-text-secondary);
    min-width: 36px;
    text-align: center;
    user-select: none;
  }

  .mermaid-preview-container {
    min-height: 200px;
    max-height: 400px;
    overflow: auto;
    padding: 16px;
    background: var(--affine-white);
    border: 1px solid var(--affine-border-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mermaid-svg-wrapper {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  .mermaid-svg-wrapper svg {
    max-width: 100%;
    height: auto;
  }

  .mermaid-loading {
    color: var(--affine-text-secondary);
    font-size: var(--affine-font-sm);
    padding: 12px;
  }

  .mermaid-error {
    color: var(--affine-error-color, #ef4444);
    font-size: var(--affine-font-sm);
    padding: 12px;
    font-family: var(--affine-font-code-family);
    white-space: pre-wrap;
    word-break: break-all;
  }

  .mermaid-empty {
    color: var(--affine-placeholder-color);
    font-size: var(--affine-font-sm);
    padding: 12px;
  }
`;
