import {
  AddTextIcon,
  ConnectorCWithArrowIcon,
  ConnectorEndpointNoneIcon,
  ConnectorLWithArrowIcon,
  ConnectorXWithArrowIcon,
  FlipDirectionIcon,
  FrontEndpointArrowIcon,
  FrontEndpointCircleIcon,
  FrontEndpointDiamondIcon,
  FrontEndpointTriangleIcon,
  GeneralStyleIcon,
  RearEndpointArrowIcon,
  RearEndpointCircleIcon,
  RearEndpointDiamondIcon,
  RearEndpointTriangleIcon,
  ScribbledStyleIcon,
  SmallArrowDownIcon,
} from '@blockexpanse/affine-components/icons';
import { renderToolbarSeparator } from '@blockexpanse/affine-components/toolbar';
import {
  type ColorScheme,
  type ConnectorElementModel,
  type ConnectorElementProps,
  ConnectorEndpoint,
  type ConnectorLabelProps,
  ConnectorMode,
  DEFAULT_FRONT_END_POINT_STYLE,
  DEFAULT_REAR_END_POINT_STYLE,
  PointStyle,
} from '@blockexpanse/affine-model';
import {
  LINE_COLORS,
  LineWidth,
  StrokeStyle,
} from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { countBy, maxBy, WithDisposable } from '@blockexpanse/global/utils';
import { html, LitElement, nothing, type TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';

import type { EdgelessColorPickerButton } from '../../edgeless/components/color-picker/button.js';
import type { PickColorEvent } from '../../edgeless/components/color-picker/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';

import {
  packColor,
  packColorsWithColorScheme,
} from '../../edgeless/components/color-picker/utils.js';
import {
  type ColorEvent,
  GET_DEFAULT_LINE_COLOR,
} from '../../edgeless/components/panel/color-panel.js';
import {
  type LineStyleEvent,
  LineStylesPanel,
} from '../../edgeless/components/panel/line-styles-panel.js';
import { mountConnectorLabelEditor } from '../../edgeless/utils/text.js';

function getMostCommonColor(
  elements: ConnectorElementModel[],
  colorScheme: ColorScheme
): string | null {
  const colors = countBy(elements, (ele: ConnectorElementModel) => {
    return typeof ele.stroke === 'object'
      ? (ele.stroke[colorScheme] ?? ele.stroke.normal ?? null)
      : ele.stroke;
  });
  const max = maxBy(Object.entries(colors), ([_k, count]) => count);
  return max ? (max[0] as string) : null;
}

function getMostCommonMode(
  elements: ConnectorElementModel[]
): ConnectorMode | null {
  const modes = countBy(elements, ele => ele.mode);
  const max = maxBy(Object.entries(modes), ([_k, count]) => count);
  return max ? (Number(max[0]) as ConnectorMode) : null;
}

function getMostCommonLineWidth(elements: ConnectorElementModel[]): LineWidth {
  const sizes = countBy(elements, ele => ele.strokeWidth);
  const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
  return max ? (Number(max[0]) as LineWidth) : LineWidth.Four;
}

export function getMostCommonLineStyle(
  elements: ConnectorElementModel[]
): StrokeStyle | null {
  const sizes = countBy(elements, ele => ele.strokeStyle);
  const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
  return max ? (max[0] as StrokeStyle) : null;
}

function getMostCommonRough(elements: ConnectorElementModel[]): boolean {
  const { trueCount, falseCount } = elements.reduce(
    (counts, ele) => {
      if (ele.rough) {
        counts.trueCount++;
      } else {
        counts.falseCount++;
      }
      return counts;
    },
    { trueCount: 0, falseCount: 0 }
  );

  return trueCount > falseCount;
}

function getMostCommonEndpointStyle(
  elements: ConnectorElementModel[],
  endpoint: ConnectorEndpoint
): PointStyle | null {
  const field =
    endpoint === ConnectorEndpoint.Front
      ? 'frontEndpointStyle'
      : 'rearEndpointStyle';
  const modes = countBy(elements, ele => ele[field]);
  const max = maxBy(Object.entries(modes), ([_k, count]) => count);
  return max ? (max[0] as PointStyle) : null;
}

function notEqual<
  K extends keyof Omit<ConnectorElementProps, keyof ConnectorLabelProps>,
>(key: K, value: ConnectorElementProps[K]) {
  return (element: ConnectorElementModel) => element[key] !== value;
}

interface EndpointStyle {
  value: PointStyle;
  icon: TemplateResult<1>;
}

const STYLE_LIST = [
  {
    name: 'General',
    value: false,
    icon: GeneralStyleIcon,
  },
  {
    name: 'Scribbled',
    value: true,
    icon: ScribbledStyleIcon,
  },
] as const;

const STYLE_CHOOSE: [boolean, () => TemplateResult<1>][] = [
  [false, () => GeneralStyleIcon],
  [true, () => ScribbledStyleIcon],
] as const;

const FRONT_ENDPOINT_STYLE_LIST: EndpointStyle[] = [
  {
    value: PointStyle.None,
    icon: ConnectorEndpointNoneIcon,
  },
  {
    value: PointStyle.Arrow,
    icon: FrontEndpointArrowIcon,
  },
  {
    value: PointStyle.Triangle,
    icon: FrontEndpointTriangleIcon,
  },
  {
    value: PointStyle.Circle,
    icon: FrontEndpointCircleIcon,
  },
  {
    value: PointStyle.Diamond,
    icon: FrontEndpointDiamondIcon,
  },
] as const;

const REAR_ENDPOINT_STYLE_LIST: EndpointStyle[] = [
  {
    value: PointStyle.Diamond,
    icon: RearEndpointDiamondIcon,
  },
  {
    value: PointStyle.Circle,
    icon: RearEndpointCircleIcon,
  },
  {
    value: PointStyle.Triangle,
    icon: RearEndpointTriangleIcon,
  },
  {
    value: PointStyle.Arrow,
    icon: RearEndpointArrowIcon,
  },
  {
    value: PointStyle.None,
    icon: ConnectorEndpointNoneIcon,
  },
] as const;

const MODE_LIST = [
  {
    name: 'Curve',
    icon: ConnectorCWithArrowIcon,
    value: ConnectorMode.Curve,
  },
  {
    name: 'Elbowed',
    icon: ConnectorXWithArrowIcon,
    value: ConnectorMode.Orthogonal,
  },
  {
    name: 'Straight',
    icon: ConnectorLWithArrowIcon,
    value: ConnectorMode.Straight,
  },
] as const;

const MODE_CHOOSE: [ConnectorMode, () => TemplateResult<1>][] = [
  [ConnectorMode.Curve, () => ConnectorCWithArrowIcon],
  [ConnectorMode.Orthogonal, () => ConnectorXWithArrowIcon],
  [ConnectorMode.Straight, () => ConnectorLWithArrowIcon],
] as const;

function getStyleListLabel(
  name: (typeof STYLE_LIST)[number]['name'],
  t: (key: string, fallback: string) => string
): string {
  switch (name) {
    case 'General':
      return t(I18nKeys.editor.edgeless.shapeTools.general, name);
    case 'Scribbled':
      return t(I18nKeys.editor.edgeless.shapeTools.scribbled, name);
    default:
      return name;
  }
}

function getModeListLabel(
  name: (typeof MODE_LIST)[number]['name'],
  t: (key: string, fallback: string) => string
): string {
  switch (name) {
    case 'Curve':
      return t(I18nKeys.editor.edgeless.connectorTools.curve, name);
    case 'Elbowed':
      return t(I18nKeys.editor.edgeless.connectorTools.elbowed, name);
    case 'Straight':
      return t(I18nKeys.editor.edgeless.connectorTools.straight, name);
    default:
      return name;
  }
}

function getPointStyleLabel(
  style: PointStyle,
  t: (key: string, fallback: string) => string
): string {
  switch (style) {
    case PointStyle.None:
      return t(I18nKeys.editor.edgeless.pointStyle.none, style);
    case PointStyle.Arrow:
      return t(I18nKeys.editor.edgeless.pointStyle.arrow, style);
    case PointStyle.Triangle:
      return t(I18nKeys.editor.edgeless.pointStyle.triangle, style);
    case PointStyle.Circle:
      return t(I18nKeys.editor.edgeless.pointStyle.circle, style);
    case PointStyle.Diamond:
      return t(I18nKeys.editor.edgeless.pointStyle.diamond, style);
    default:
      return style;
  }
}

export class EdgelessChangeConnectorButton extends WithDisposable(LitElement) {
  pickColor = (event: PickColorEvent) => {
    if (event.type === 'pick') {
      this.elements.forEach(ele =>
        this.service.updateElement(
          ele.id,
          packColor('stroke', { ...event.detail })
        )
      );
      return;
    }

    this.elements.forEach(ele =>
      ele[event.type === 'start' ? 'stash' : 'pop']('stroke')
    );
  };

  get doc() {
    return this.edgeless.doc;
  }

  get service() {
    return this.edgeless.service;
  }

  private _addLabel() {
    mountConnectorLabelEditor(this.elements[0], this.edgeless);
  }

  private _flipEndpointStyle(
    frontEndpointStyle: PointStyle,
    rearEndpointStyle: PointStyle
  ) {
    if (frontEndpointStyle === rearEndpointStyle) return;

    this.elements.forEach(element =>
      this.service.updateElement(element.id, {
        frontEndpointStyle: rearEndpointStyle,
        rearEndpointStyle: frontEndpointStyle,
      })
    );
  }

  private _getEndpointIcon(list: EndpointStyle[], style: PointStyle) {
    return (
      list.find(({ value }) => value === style)?.icon ||
      ConnectorEndpointNoneIcon
    );
  }

  private _setConnectorColor(stroke: string) {
    this._setConnectorProp('stroke', stroke);
  }

  private _setConnectorMode(mode: ConnectorMode) {
    this._setConnectorProp('mode', mode);
  }

  private _setConnectorPointStyle(end: ConnectorEndpoint, style: PointStyle) {
    const props = {
      [end === ConnectorEndpoint.Front
        ? 'frontEndpointStyle'
        : 'rearEndpointStyle']: style,
    };
    this.elements.forEach(element =>
      this.service.updateElement(element.id, { ...props })
    );
  }

  private _setConnectorProp<
    K extends keyof Omit<ConnectorElementProps, keyof ConnectorLabelProps>,
  >(key: K, value: ConnectorElementProps[K]) {
    this.doc.captureSync();
    this.elements
      .filter(notEqual(key, value))
      .forEach(element =>
        this.service.updateElement(element.id, { [key]: value })
      );
  }

  private _setConnectorRough(rough: boolean) {
    this._setConnectorProp('rough', rough);
  }

  private _setConnectorStroke({ type, value }: LineStyleEvent) {
    if (type === 'size') {
      this._setConnectorStrokeWidth(value);
      return;
    }
    this._setConnectorStrokeStyle(value);
  }

  private _setConnectorStrokeStyle(strokeStyle: StrokeStyle) {
    this._setConnectorProp('strokeStyle', strokeStyle);
  }

  private _setConnectorStrokeWidth(strokeWidth: number) {
    this._setConnectorProp('strokeWidth', strokeWidth);
  }

  private _showAddButtonOrTextMenu() {
    if (this.elements.length === 1 && !this.elements[0].text) {
      return 'button';
    }
    if (!this.elements.some(e => !e.text)) {
      return 'menu';
    }
    return 'nothing';
  }

  override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const strokeStyleLabel = t(
      I18nKeys.editor.edgeless.connectorTools.strokeStyle,
      'Stroke style'
    );
    const styleLabel = t(I18nKeys.editor.edgeless.style, 'Style');
    const startPointStyleLabel = t(
      I18nKeys.editor.edgeless.connectorTools.startPointStyle,
      'Start point style'
    );
    const endPointStyleLabel = t(
      I18nKeys.editor.edgeless.connectorTools.endPointStyle,
      'End point style'
    );
    const flipDirectionLabel = t(
      I18nKeys.editor.edgeless.connectorTools.flipDirection,
      'Flip direction'
    );
    const connectorShapeLabel = t(
      I18nKeys.editor.edgeless.connectorTools.shape,
      'Connector shape'
    );
    const addTextLabel = t(
      I18nKeys.editor.edgeless.shapeTools.addText,
      'Add text'
    );
    const colorScheme = this.edgeless.surface.renderer.getColorScheme();
    const elements = this.elements;
    const selectedColor =
      getMostCommonColor(elements, colorScheme) ??
      GET_DEFAULT_LINE_COLOR(colorScheme);
    const selectedMode = getMostCommonMode(elements);
    const selectedLineSize = getMostCommonLineWidth(elements) ?? LineWidth.Four;
    const selectedRough = getMostCommonRough(elements);
    const selectedLineStyle =
      getMostCommonLineStyle(elements) ?? StrokeStyle.Solid;
    const selectedStartPointStyle =
      getMostCommonEndpointStyle(elements, ConnectorEndpoint.Front) ??
      DEFAULT_FRONT_END_POINT_STYLE;
    const selectedEndPointStyle =
      getMostCommonEndpointStyle(elements, ConnectorEndpoint.Rear) ??
      DEFAULT_REAR_END_POINT_STYLE;

    return join(
      [
        when(
          this.edgeless.doc.awarenessStore.getFlag('enable_color_picker'),
          () => {
            const { type, colors } = packColorsWithColorScheme(
              colorScheme,
              selectedColor,
              elements[0].stroke
            );

            return html`
              <edgeless-color-picker-button
                class="stroke-color"
                .label=${strokeStyleLabel}
                .pick=${this.pickColor}
                .color=${selectedColor}
                .colors=${colors}
                .colorType=${type}
                .palettes=${LINE_COLORS}
                .hollowCircle=${true}
              >
                <div
                  slot="other"
                  class="line-styles"
                  style=${styleMap({
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    alignItems: 'center',
                  })}
                >
                  ${LineStylesPanel({
                    selectedLineSize: selectedLineSize,
                    selectedLineStyle: selectedLineStyle,
                    onClick: (e: LineStyleEvent) => this._setConnectorStroke(e),
                    lineStyles: [StrokeStyle.Solid, StrokeStyle.Dash],
                  })}
                </div>
                <editor-toolbar-separator
                  slot="separator"
                  data-orientation="horizontal"
                ></editor-toolbar-separator>
              </edgeless-color-picker-button>
            `;
          },
          () => html`
            <editor-menu-button
              .contentPadding=${'8px'}
              .button=${html`
                <editor-icon-button
                  aria-label=${strokeStyleLabel}
                  .tooltip=${strokeStyleLabel}
                >
                  <edgeless-color-button
                    .color=${selectedColor}
                  ></edgeless-color-button>
                </editor-icon-button>
              `}
            >
              <stroke-style-panel
                .strokeWidth=${selectedLineSize}
                .strokeStyle=${selectedLineStyle}
                .strokeColor=${selectedColor}
                .setStrokeStyle=${(e: LineStyleEvent) =>
                  this._setConnectorStroke(e)}
                .setStrokeColor=${(e: ColorEvent) =>
                  this._setConnectorColor(e.detail)}
              >
              </stroke-style-panel>
            </editor-menu-button>
          `
        ),

        html`
          <editor-menu-button
            .button=${html`
              <editor-icon-button
                aria-label=${styleLabel}
                .tooltip=${styleLabel}
              >
                ${choose(selectedRough, STYLE_CHOOSE)}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <div>
              ${repeat(
                STYLE_LIST,
                item => item.name,
                ({ name, value, icon }) => {
                  const label = getStyleListLabel(name, t);
                  return html`
                    <editor-icon-button
                      aria-label=${label}
                      .tooltip=${label}
                      .active=${selectedRough === value}
                      .activeMode=${'background'}
                      @click=${() => this._setConnectorRough(value)}
                    >
                      ${icon}
                    </editor-icon-button>
                  `;
                }
              )}
            </div>
          </editor-menu-button>
        `,

        html`
          <editor-menu-button
            .button=${html`
              <editor-icon-button
                aria-label=${startPointStyleLabel}
                .tooltip=${startPointStyleLabel}
              >
                ${this._getEndpointIcon(
                  FRONT_ENDPOINT_STYLE_LIST,
                  selectedStartPointStyle
                )}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <div>
              ${repeat(
                FRONT_ENDPOINT_STYLE_LIST,
                item => item.value,
                ({ value, icon }) => {
                  const label = getPointStyleLabel(value, t);
                  return html`
                    <editor-icon-button
                      aria-label=${label}
                      .tooltip=${label}
                      .active=${selectedStartPointStyle === value}
                      .activeMode=${'background'}
                      @click=${() =>
                        this._setConnectorPointStyle(
                          ConnectorEndpoint.Front,
                          value
                        )}
                    >
                      ${icon}
                    </editor-icon-button>
                  `;
                }
              )}
            </div>
          </editor-menu-button>

          <editor-icon-button
            aria-label=${flipDirectionLabel}
            .tooltip=${flipDirectionLabel}
            .disabled=${false}
            @click=${() =>
              this._flipEndpointStyle(
                selectedStartPointStyle,
                selectedEndPointStyle
              )}
          >
            ${FlipDirectionIcon}
          </editor-icon-button>

          <editor-menu-button
            .button=${html`
              <editor-icon-button
                aria-label=${endPointStyleLabel}
                .tooltip=${endPointStyleLabel}
              >
                ${this._getEndpointIcon(
                  REAR_ENDPOINT_STYLE_LIST,
                  selectedEndPointStyle
                )}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <div>
              ${repeat(
                REAR_ENDPOINT_STYLE_LIST,
                item => item.value,
                ({ value, icon }) => {
                  const label = getPointStyleLabel(value, t);
                  return html`
                    <editor-icon-button
                      aria-label=${label}
                      .tooltip=${label}
                      .active=${selectedEndPointStyle === value}
                      .activeMode=${'background'}
                      @click=${() =>
                        this._setConnectorPointStyle(
                          ConnectorEndpoint.Rear,
                          value
                        )}
                    >
                      ${icon}
                    </editor-icon-button>
                  `;
                }
              )}
            </div>
          </editor-menu-button>

          <editor-menu-button
            .button=${html`
              <editor-icon-button
                aria-label=${connectorShapeLabel}
                .tooltip=${connectorShapeLabel}
              >
                ${choose(selectedMode, MODE_CHOOSE)}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <div>
              ${repeat(
                MODE_LIST,
                item => item.name,
                ({ name, value, icon }) => {
                  const label = getModeListLabel(name, t);
                  return html`
                    <editor-icon-button
                      aria-label=${label}
                      .tooltip=${label}
                      .active=${selectedMode === value}
                      .activeMode=${'background'}
                      @click=${() => this._setConnectorMode(value)}
                    >
                      ${icon}
                    </editor-icon-button>
                  `;
                }
              )}
            </div>
          </editor-menu-button>
        `,

        choose<string, TemplateResult<1> | typeof nothing>(
          this._showAddButtonOrTextMenu(),
          [
            [
              'button',
              () => html`
                <editor-icon-button
                  aria-label=${addTextLabel}
                  .tooltip=${addTextLabel}
                  @click=${this._addLabel}
                >
                  ${AddTextIcon}
                </editor-icon-button>
              `,
            ],
            [
              'menu',
              () => html`
                <edgeless-change-text-menu
                  .elementType=${'connector'}
                  .elements=${this.elements}
                  .edgeless=${this.edgeless}
                ></edgeless-change-text-menu>
              `,
            ],
            ['nothing', () => nothing],
          ]
        ),
      ].filter(button => button !== nothing),
      renderToolbarSeparator
    );
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor elements: ConnectorElementModel[] = [];

  @query('edgeless-color-picker-button.stroke-color')
  accessor strokeColorButton!: EdgelessColorPickerButton;
}

export function renderConnectorButton(
  edgeless: EdgelessRootBlockComponent,
  elements?: ConnectorElementModel[]
) {
  if (!elements?.length) return nothing;

  return html`
    <edgeless-change-connector-button
      .elements=${elements}
      .edgeless=${edgeless}
    >
    </edgeless-change-connector-button>
  `;
}
