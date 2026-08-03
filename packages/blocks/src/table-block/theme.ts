/**
 * Table UI tokens aligned with AFFiNE `cssVarV2.table.*`.
 * Theme package may not ship these keys yet — keep hex fallbacks.
 */
function tableVar(path: string, fallback: string): string {
  return `var(--affine-v2-table-${path.replace(/\//g, '-')}, ${fallback})`;
}

export const tableTheme = {
  /** Soft grid line (~10% black), matches AFFiNE simple table. */
  border: tableVar('border', '#0000001a'),
  headerBackgroundDefault: tableVar('headerBackground/default', '#ffffff'),
  headerBackgroundHeader: tableVar('headerBackground/headerColor', '#f3f3f3'),
  focusBackground: tableVar('focusBackground', '#1e96eb0a'),
  focusBorder: tableVar('focusBorder', '#1e96eb'),
  indicatorActivated: tableVar('indicator/activated', '#1e96eb'),
  indicatorDrag: tableVar('indicator/drag', '#0000002b'),
  indicatorHover: tableVar('indicator/hover', '#0000000d'),
  indicatorBorder: tableVar('indicator/border', '#e6e6e6'),
  indicatorPointerActive: tableVar('indicator/pointerActive', '#ffffff'),
  indicatorPointerDefault: tableVar('indicator/pointerDefault', '#b3b3b3'),
  iconSecondary: 'var(--affine-v2-icon-secondary, #b3b3b3)',
  iconPrimary: 'var(--affine-v2-icon-primary, #7a7a7a)',
  layerHoverOverlay:
    'var(--affine-v2-layer-background-hoverOverlay, #0000000d)',
  layerPrimary: 'var(--affine-v2-layer-background-primary, #ffffff)',
  layerInsideBorder: 'var(--affine-v2-layer-insideBorder-border, #e6e6e6)',
  tooltipBg: 'var(--affine-tooltip)',
  tooltipFg: 'var(--affine-white)',
};
