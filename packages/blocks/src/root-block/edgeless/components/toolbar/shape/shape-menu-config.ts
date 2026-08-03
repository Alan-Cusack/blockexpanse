import type { TemplateResult } from 'lit';

import {
  DiamondIcon,
  EllipseIcon,
  RoundedRectangleIcon,
  ScribbledDiamondIcon,
  ScribbledEllipseIcon,
  ScribbledRoundedRectangleIcon,
  ScribbledSquareIcon,
  ScribbledTriangleIcon,
  SquareIcon,
  TriangleIcon,
} from '@blockexpanse/affine-components/icons';
import { ShapeType } from '@blockexpanse/affine-model';
import { type I18nFn, I18nKeys } from '@blockexpanse/affine-shared/services';

import type { ShapeToolOption } from '../../../gfx-tool/shape-tool.js';

type Config = {
  name: ShapeToolOption['shapeName'];
  generalIcon: TemplateResult<1>;
  scribbledIcon: TemplateResult<1>;
  tooltip: string;
  disabled: boolean;
};

export const ShapeComponentConfig: Config[] = [
  {
    name: ShapeType.Rect,
    generalIcon: SquareIcon,
    scribbledIcon: ScribbledSquareIcon,
    tooltip: 'Square',
    disabled: false,
  },
  {
    name: ShapeType.Ellipse,
    generalIcon: EllipseIcon,
    scribbledIcon: ScribbledEllipseIcon,
    tooltip: 'Ellipse',
    disabled: false,
  },
  {
    name: ShapeType.Diamond,
    generalIcon: DiamondIcon,
    scribbledIcon: ScribbledDiamondIcon,
    tooltip: 'Diamond',
    disabled: false,
  },
  {
    name: ShapeType.Triangle,
    generalIcon: TriangleIcon,
    scribbledIcon: ScribbledTriangleIcon,
    tooltip: 'Triangle',
    disabled: false,
  },
  {
    name: 'roundedRect',
    generalIcon: RoundedRectangleIcon,
    scribbledIcon: ScribbledRoundedRectangleIcon,
    tooltip: 'Rounded rectangle',
    disabled: false,
  },
];

export const ShapeComponentConfigMap = ShapeComponentConfig.reduce(
  (acc, config) => {
    acc[config.name] = config;
    return acc;
  },
  {} as Record<Config['name'], Config>
);

export const SHAPE_COLOR_PREFIX = '--affine-palette-shape-';
export const LINE_COLOR_PREFIX = '--affine-palette-line-';

/** Map English source tooltips (as authored above) to i18n keys. */
const shapeTooltipI18nKeyMap: Record<string, string> = {
  Square: I18nKeys.editor.edgeless.shapeTools.square,
  Ellipse: I18nKeys.editor.edgeless.pie.ellipse,
  Diamond: I18nKeys.editor.edgeless.pie.diamond,
  Triangle: I18nKeys.editor.edgeless.pie.triangle,
  'Rounded rectangle': I18nKeys.editor.edgeless.shapeTools.roundedRectangle,
};

export function translateShapeTooltip(t: I18nFn, tooltip: string): string {
  const key = shapeTooltipI18nKeyMap[tooltip];
  return key ? t(key, tooltip) : tooltip;
}
