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

  /* Mermaid: tab bar + fixed-height content (only for mermaid blocks) */
  .affine-code-block-container.code-preview-active .mermaid-code-area {
    max-height: 360px;
    overflow-y: auto;
  }

  .mermaid-tab-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--affine-border-color);
    padding-bottom: 0;
  }

  .mermaid-lang-label {
    font-size: var(--affine-font-xs);
    font-weight: 600;
    color: var(--affine-text-secondary);
    padding: 6px 0;
    user-select: none;
  }

  .mermaid-tabs {
    position: relative;
    display: flex;
    gap: 0;
  }

  .mermaid-tab-btn {
    background: none;
    border: none;
    border-bottom: none;
    cursor: pointer;
    font-size: var(--affine-font-xs);
    font-weight: 600;
    color: var(--affine-text-secondary);
    padding: 6px 14px;
    user-select: none;
    z-index: 1;
    transition: color 0.15s;
  }

  .mermaid-tab-btn.active {
    color: var(--affine-primary-color);
  }

  .mermaid-tab-btn:hover:not(.active) {
    color: var(--affine-text-primary);
  }

  .mermaid-tab-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 2px;
    background: var(--affine-primary-color);
    transition: transform 0.2s ease;
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
    width: 26px;
    height: 26px;
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: var(--affine-text-secondary);
    user-select: none;
    transition: background 0.15s;
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
    line-height: 26px;
  }

  .mermaid-preview-container {
    position: relative;
    height: 360px;
    overflow: hidden;
    background: var(--affine-white);
    border: 1px solid var(--affine-border-color);
    border-radius: 8px;
  }

  .mermaid-preview-viewport {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mermaid-zoom-control {
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 4px 6px;
    border-radius: 6px;
    background: var(--affine-white-90, rgba(255, 255, 255, 0.9));
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
    z-index: 1;
  }

  .mermaid-svg-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }

  .mermaid-svg-scaler {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(var(--mermaid-zoom) * 100%);
    min-width: calc(var(--mermaid-zoom) * 100%);
    min-height: calc(var(--mermaid-zoom) * 100%);
  }

  .mermaid-svg-scaler svg {
    display: block;
    width: 100% !important;
    max-width: none !important;
    height: auto;
    shape-rendering: geometricPrecision;
    text-rendering: geometricPrecision;
  }

  .static-code-preview {
    padding: 16px;
    box-sizing: border-box;
    overflow: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .static-code-preview .mermaid-svg-scaler {
    width: 100%;
    min-width: 100%;
    min-height: 0;
  }

  .static-code-preview .katex-display {
    margin: 0;
  }

  .code-html-preview {
    width: 100%;
    height: 100%;
    min-height: 280px;
    border: 0;
    background: #fff;
  }

  .code-json-tree {
    margin: 0;
    white-space: pre-wrap;
    font-family: var(--affine-font-code-family);
    font-size: var(--affine-font-sm);
    color: var(--affine-text-primary);
  }

  .code-csv-table {
    border-collapse: collapse;
    font-size: var(--affine-font-sm);
    width: max-content;
    min-width: 100%;
  }

  .code-csv-table th,
  .code-csv-table td {
    border: 1px solid var(--affine-border-color);
    padding: 6px 10px;
    text-align: left;
    white-space: nowrap;
  }

  .code-csv-table th {
    background: var(--affine-background-code-block);
    font-weight: 600;
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
