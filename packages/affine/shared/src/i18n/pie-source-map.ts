import type { I18nFn } from './keys.js';

import { I18nKeys } from './keys.js';

/**
 * Map pie-menu English source labels to i18n keys.
 * Reuses edgeless / connector / color keys where possible.
 */
export const pieMenuSourceKeyMap: Record<string, string> = {
  Tools: I18nKeys.editor.edgeless.pie.tools,
  Pen: I18nKeys.editor.edgeless.pen,
  'Pen Color': I18nKeys.editor.edgeless.pie.penColor,
  Eraser: I18nKeys.editor.edgeless.eraser,
  Frame: I18nKeys.editor.edgeless.frame,
  Select: I18nKeys.editor.edgeless.select,
  Note: I18nKeys.editor.edgeless.note,
  'Reset Zoom': I18nKeys.editor.edgeless.pie.resetZoom,
  Present: I18nKeys.editor.edgeless.present,
  Stop: I18nKeys.editor.edgeless.pie.stop,
  Connector: I18nKeys.editor.edgeless.connector,
  Curved: I18nKeys.editor.edgeless.pie.curved,
  Elbowed: I18nKeys.editor.edgeless.connectorTools.elbowed,
  Straight: I18nKeys.editor.edgeless.connectorTools.straight,
  'Line Color': I18nKeys.editor.edgeless.pie.lineColor,
  Shapes: I18nKeys.editor.edgeless.pie.shapes,
  Rect: I18nKeys.editor.edgeless.pie.rect,
  Ellipse: I18nKeys.editor.edgeless.pie.ellipse,
  Triangle: I18nKeys.editor.edgeless.pie.triangle,
  Diamond: I18nKeys.editor.edgeless.pie.diamond,
  'Toggle Style': I18nKeys.editor.edgeless.pie.toggleStyle,
  Fill: I18nKeys.editor.edgeless.pie.fill,
  Stroke: I18nKeys.editor.edgeless.pie.stroke,
  Color: I18nKeys.editor.edgeless.color,
};

export function translatePieLabel(t: I18nFn, source: string): string {
  const key = pieMenuSourceKeyMap[source];
  if (key) {
    return t(key, source);
  }
  return source;
}
