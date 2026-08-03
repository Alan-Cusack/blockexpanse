import type { EditorHost } from '@blockexpanse/block-std';

import type { AffineAIPanelWidget } from './ai-panel.js';

import { AFFINE_AI_PANEL_WIDGET } from './ai-panel.js';

/** Resolve the AI panel widget on the current page root, if mounted. */
export function getAIPanelWidget(host: EditorHost): AffineAIPanelWidget | null {
  const rootId = host.doc.root?.id;
  if (!rootId) return null;
  const widget = host.view.getWidget(AFFINE_AI_PANEL_WIDGET, rootId);
  return (widget as AffineAIPanelWidget | null) ?? null;
}

/** Get plain text from the current text selection. */
export function getSelectedText(host: EditorHost): string {
  const textSelection = host.selection.find('text');
  if (!textSelection) return '';
  const range = host.std.range.textSelectionToRange(textSelection);
  return range?.toString() ?? '';
}
