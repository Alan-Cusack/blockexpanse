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

  /* Mermaid preview */
  .mermaid-preview-section {
    margin-top: 12px;
    border-top: 1px solid var(--affine-border-color);
    padding-top: 8px;
  }

  .mermaid-preview-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .mermaid-toggle-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--affine-font-xs);
    font-weight: 600;
    color: var(--affine-text-secondary);
    padding: 4px 8px;
    border-radius: 4px;
    user-select: none;
  }

  .mermaid-toggle-btn:hover {
    background: var(--affine-hover-color);
  }

  .mermaid-preview-container {
    min-height: 40px;
    padding: 16px;
    background: var(--affine-white);
    border: 1px solid var(--affine-border-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
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
