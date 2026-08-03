import {
  ConnectorUtils,
  normalizeShapeBound,
  TextUtils,
} from '@blockexpanse/affine-block-surface';
import {
  SmallArrowDownIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@blockexpanse/affine-components/icons';
import { renderToolbarSeparator } from '@blockexpanse/affine-components/toolbar';
import {
  type ColorScheme,
  FontFamily,
  FontStyle,
  FontWeight,
  TextAlign,
  type TextStyleProps,
} from '@blockexpanse/affine-model';
import {
  ConnectorElementModel,
  EdgelessTextBlockModel,
  LINE_COLORS,
  ShapeElementModel,
  TextElementModel,
} from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import {
  Bound,
  countBy,
  maxBy,
  WithDisposable,
} from '@blockexpanse/global/utils';
import { css, html, LitElement, nothing, type TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { join } from 'lit/directives/join.js';
import { when } from 'lit/directives/when.js';

import type {
  EdgelessColorPickerButton,
  PickColorEvent,
} from '../../edgeless/components/color-picker/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';

import {
  packColor,
  packColorsWithColorScheme,
} from '../../edgeless/components/color-picker/utils.js';
import {
  type ColorEvent,
  GET_DEFAULT_LINE_COLOR,
} from '../../edgeless/components/panel/color-panel.js';

const FONT_SIZE_LIST = [
  { value: 16 },
  { value: 24 },
  { value: 32 },
  { value: 40 },
  { value: 64 },
  { value: 128 },
] as const;

function getFontWeightLabel(
  weight: FontWeight,
  t: (key: string, fallback: string) => string
): string {
  switch (weight) {
    case FontWeight.Light:
      return t(I18nKeys.editor.edgeless.textTools.light, 'Light');
    case FontWeight.Regular:
      return t(I18nKeys.editor.edgeless.textTools.regular, 'Regular');
    case FontWeight.SemiBold:
      return t(I18nKeys.editor.edgeless.textTools.semibold, 'Semibold');
    default:
      return '';
  }
}

function getFontStyleLabel(
  style: FontStyle,
  t: (key: string, fallback: string) => string
): string | typeof nothing {
  switch (style) {
    case FontStyle.Italic:
      return t(I18nKeys.editor.edgeless.textTools.italic, 'Italic');
    case FontStyle.Normal:
    default:
      return nothing;
  }
}

const TEXT_ALIGN_CHOOSE: [TextAlign, () => TemplateResult<1>][] = [
  [TextAlign.Left, () => TextAlignLeftIcon],
  [TextAlign.Center, () => TextAlignCenterIcon],
  [TextAlign.Right, () => TextAlignRightIcon],
] as const;

function countByField<K extends keyof Omit<TextStyleProps, 'color'>>(
  elements: BlockExpanse.EdgelessTextModelType[],
  field: K
) {
  return countBy(elements, element => extractField(element, field));
}

function extractField<K extends keyof Omit<TextStyleProps, 'color'>>(
  element: BlockExpanse.EdgelessTextModelType,
  field: K
) {
  //TODO: It's not a very good handling method.
  //      The edgeless-change-text-menu should be refactored into a widget to allow external registration of its own logic.
  if (element instanceof EdgelessTextBlockModel) {
    return field === 'fontSize'
      ? null
      : (element[field as keyof EdgelessTextBlockModel] as TextStyleProps[K]);
  }
  return (
    element instanceof ConnectorElementModel
      ? element.labelStyle[field]
      : element[field]
  ) as TextStyleProps[K];
}

function getMostCommonValue<K extends keyof Omit<TextStyleProps, 'color'>>(
  elements: BlockExpanse.EdgelessTextModelType[],
  field: K
) {
  const values = countByField(elements, field);
  return maxBy(Object.entries(values), ([_k, count]) => count);
}

function getMostCommonAlign(elements: BlockExpanse.EdgelessTextModelType[]) {
  const max = getMostCommonValue(elements, 'textAlign');
  return max ? (max[0] as TextAlign) : TextAlign.Left;
}

function getMostCommonColor(
  elements: BlockExpanse.EdgelessTextModelType[],
  colorScheme: ColorScheme
): string {
  const colors = countBy(
    elements,
    (ele: BlockExpanse.EdgelessTextModelType) => {
      const color =
        ele instanceof ConnectorElementModel ? ele.labelStyle.color : ele.color;
      return typeof color === 'object'
        ? (color[colorScheme] ?? color.normal ?? null)
        : color;
    }
  );
  const max = maxBy(Object.entries(colors), ([_k, count]) => count);
  return max ? (max[0] as string) : GET_DEFAULT_LINE_COLOR(colorScheme);
}

function getMostCommonFontFamily(
  elements: BlockExpanse.EdgelessTextModelType[]
) {
  const max = getMostCommonValue(elements, 'fontFamily');
  return max ? (max[0] as FontFamily) : FontFamily.Inter;
}

function getMostCommonFontSize(elements: BlockExpanse.EdgelessTextModelType[]) {
  const max = getMostCommonValue(elements, 'fontSize');
  return max ? Number(max[0]) : FONT_SIZE_LIST[0].value;
}

function getMostCommonFontStyle(
  elements: BlockExpanse.EdgelessTextModelType[]
) {
  const max = getMostCommonValue(elements, 'fontStyle');
  return max ? (max[0] as FontStyle) : FontStyle.Normal;
}

function getMostCommonFontWeight(
  elements: BlockExpanse.EdgelessTextModelType[]
) {
  const max = getMostCommonValue(elements, 'fontWeight');
  return max ? (max[0] as FontWeight) : FontWeight.Regular;
}

function buildProps(
  element: BlockExpanse.EdgelessTextModelType,
  props: { [K in keyof TextStyleProps]?: TextStyleProps[K] }
) {
  if (element instanceof ConnectorElementModel) {
    return {
      labelStyle: {
        ...element.labelStyle,
        ...props,
      },
    };
  }

  return { ...props };
}

export class EdgelessChangeTextMenu extends WithDisposable(LitElement) {
  static override styles = css`
    :host {
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
      gap: inherit;
      height: 100%;
    }
  `;

  private _setFontFamily = (fontFamily: FontFamily) => {
    const currentFontWeight = getMostCommonFontWeight(this.elements);
    const fontWeight = TextUtils.isFontWeightSupported(
      fontFamily,
      currentFontWeight
    )
      ? currentFontWeight
      : FontWeight.Regular;
    const currentFontStyle = getMostCommonFontStyle(this.elements);
    const fontStyle = TextUtils.isFontStyleSupported(
      fontFamily,
      currentFontStyle
    )
      ? currentFontStyle
      : FontStyle.Normal;

    const props = { fontFamily, fontWeight, fontStyle };
    this.elements.forEach(element => {
      this.service.updateElement(element.id, buildProps(element, props));
      this._updateElementBound(element);
    });
  };

  private _setFontSize = (fontSize: number) => {
    const props = { fontSize };
    this.elements.forEach(element => {
      this.service.updateElement(element.id, buildProps(element, props));
      this._updateElementBound(element);
    });
  };

  private _setFontWeightAndStyle = (
    fontWeight: FontWeight,
    fontStyle: FontStyle
  ) => {
    const props = { fontWeight, fontStyle };
    this.elements.forEach(element => {
      this.service.updateElement(element.id, buildProps(element, props));
      this._updateElementBound(element);
    });
  };

  private _setTextAlign = (textAlign: TextAlign) => {
    const props = { textAlign };
    this.elements.forEach(element => {
      this.service.updateElement(element.id, buildProps(element, props));
    });
  };

  private _setTextColor = ({ detail: color }: ColorEvent) => {
    const props = { color };
    this.elements.forEach(element => {
      this.service.updateElement(element.id, buildProps(element, props));
    });
  };

  private _updateElementBound = (
    element: BlockExpanse.EdgelessTextModelType
  ) => {
    const elementType = this.elementType;
    if (elementType === 'text' && element instanceof TextElementModel) {
      // the change of font family will change the bound of the text
      const {
        text: yText,
        fontFamily,
        fontStyle,
        fontSize,
        fontWeight,
        hasMaxWidth,
      } = element;
      const newBound = TextUtils.normalizeTextBound(
        {
          yText,
          fontFamily,
          fontStyle,
          fontSize,
          fontWeight,
          hasMaxWidth,
        },
        Bound.fromXYWH(element.deserializedXYWH)
      );
      this.service.updateElement(element.id, {
        xywh: newBound.serialize(),
      });
    } else if (
      elementType === 'connector' &&
      ConnectorUtils.isConnectorWithLabel(element)
    ) {
      const {
        text,
        labelXYWH,
        labelStyle: { fontFamily, fontStyle, fontSize, fontWeight },
        labelConstraints: { hasMaxWidth, maxWidth },
      } = element as ConnectorElementModel;
      const prevBounds = Bound.fromXYWH(labelXYWH || [0, 0, 16, 16]);
      const center = prevBounds.center;
      const bounds = TextUtils.normalizeTextBound(
        {
          yText: text!,
          fontFamily,
          fontStyle,
          fontSize,
          fontWeight,
          hasMaxWidth,
          maxWidth,
        },
        prevBounds
      );
      bounds.center = center;
      this.service.updateElement(element.id, {
        labelXYWH: bounds.toXYWH(),
      });
    } else if (
      elementType === 'shape' &&
      element instanceof ShapeElementModel
    ) {
      const newBound = normalizeShapeBound(
        element,
        Bound.fromXYWH(element.deserializedXYWH)
      );
      this.service.updateElement(element.id, {
        xywh: newBound.serialize(),
      });
    }
    // no need to update the bound of edgeless text block, which updates itself using ResizeObserver
  };

  pickColor = (event: PickColorEvent) => {
    if (event.type === 'pick') {
      this.elements.forEach(element => {
        const props = packColor('color', { ...event.detail });
        this.service.updateElement(element.id, buildProps(element, props));
        this._updateElementBound(element);
      });
      return;
    }

    const key = this.elementType === 'connector' ? 'labelStyle' : 'color';
    this.elements.forEach(ele => {
      // @ts-expect-error: FIXME
      ele[event.type === 'start' ? 'stash' : 'pop'](key);
    });
  };

  get service() {
    return this.edgeless.service;
  }

  override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const fontLabel = t(I18nKeys.editor.edgeless.textTools.font, 'Font');
    const textColorLabel = t(
      I18nKeys.editor.edgeless.textTools.textColor,
      'Text color'
    );
    const fontStyleLabel = t(
      I18nKeys.editor.edgeless.textTools.fontStyle,
      'Font style'
    );
    const fontSizeLabel = t(
      I18nKeys.editor.edgeless.textTools.fontSize,
      'Font size'
    );
    const alignmentLabel = t(
      I18nKeys.editor.edgeless.textTools.alignment,
      'Alignment'
    );
    const colorScheme = this.edgeless.surface.renderer.getColorScheme();
    const elements = this.elements;
    const selectedAlign = getMostCommonAlign(elements);
    const selectedColor = getMostCommonColor(elements, colorScheme);
    const selectedFontFamily = getMostCommonFontFamily(elements);
    const selectedFontSize = Math.trunc(getMostCommonFontSize(elements));
    const selectedFontStyle = getMostCommonFontStyle(elements);
    const selectedFontWeight = getMostCommonFontWeight(elements);
    const matchFontFaces =
      TextUtils.getFontFacesByFontFamily(selectedFontFamily);
    const fontStyleBtnDisabled =
      matchFontFaces.length === 1 &&
      matchFontFaces[0].style === selectedFontStyle &&
      matchFontFaces[0].weight === selectedFontWeight;

    return join(
      [
        html`
          <editor-menu-button
            .contentPadding=${'8px'}
            .button=${html`
              <editor-icon-button
                aria-label=${fontLabel}
                .tooltip=${fontLabel}
                .justify=${'space-between'}
                .labelHeight=${'20px'}
                .iconContainerWidth=${'40px'}
              >
                <span
                  class="label padding0"
                  style=${`font-family: ${TextUtils.wrapFontFamily(selectedFontFamily)}`}
                  >Aa</span
                >${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <edgeless-font-family-panel
              .value=${selectedFontFamily}
              .onSelect=${this._setFontFamily}
            ></edgeless-font-family-panel>
          </editor-menu-button>
        `,

        when(
          this.edgeless.doc.awarenessStore.getFlag('enable_color_picker'),
          () => {
            const { type, colors } = packColorsWithColorScheme(
              colorScheme,
              selectedColor,
              elements[0] instanceof ConnectorElementModel
                ? elements[0].labelStyle.color
                : elements[0].color
            );

            return html`
              <edgeless-color-picker-button
                class="text-color"
                .label=${textColorLabel}
                .pick=${this.pickColor}
                .isText=${true}
                .color=${selectedColor}
                .colors=${colors}
                .colorType=${type}
                .palettes=${LINE_COLORS}
              >
              </edgeless-color-picker-button>
            `;
          },
          () => html`
            <editor-menu-button
              .contentPadding=${'8px'}
              .button=${html`
                <editor-icon-button
                  aria-label=${textColorLabel}
                  .tooltip=${textColorLabel}
                >
                  <edgeless-text-color-icon
                    .color=${selectedColor}
                  ></edgeless-text-color-icon>
                </editor-icon-button>
              `}
            >
              <edgeless-color-panel
                .value=${selectedColor}
                @select=${this._setTextColor}
              ></edgeless-color-panel>
            </editor-menu-button>
          `
        ),

        html`
          <editor-menu-button
            .contentPadding=${'8px'}
            .button=${html`
              <editor-icon-button
                aria-label=${fontStyleLabel}
                .tooltip=${fontStyleLabel}
                .justify=${'space-between'}
                .labelHeight=${'20px'}
                .iconContainerWidth=${'90px'}
                .disabled=${fontStyleBtnDisabled}
              >
                <span class="label ellipsis">
                  ${getFontWeightLabel(selectedFontWeight, t)}
                  ${getFontStyleLabel(selectedFontStyle, t)}
                </span>
                ${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <edgeless-font-weight-and-style-panel
              .fontFamily=${selectedFontFamily}
              .fontWeight=${selectedFontWeight}
              .fontStyle=${selectedFontStyle}
              .onSelect=${this._setFontWeightAndStyle}
            ></edgeless-font-weight-and-style-panel>
          </editor-menu-button>
        `,

        this.elementType === 'edgeless-text'
          ? nothing
          : html`
              <editor-menu-button
                .contentPadding=${'8px'}
                .button=${html`
                  <editor-icon-button
                    aria-label=${fontSizeLabel}
                    .tooltip=${fontSizeLabel}
                    .justify=${'space-between'}
                    .labelHeight=${'20px'}
                    .iconContainerWidth=${'60px'}
                  >
                    <span class="label">${selectedFontSize}</span>
                    ${SmallArrowDownIcon}
                  </editor-icon-button>
                `}
              >
                <edgeless-size-panel
                  data-type="check"
                  .size=${selectedFontSize}
                  .sizeList=${FONT_SIZE_LIST}
                  .onSelect=${this._setFontSize}
                ></edgeless-size-panel>
              </editor-menu-button>
            `,

        html`
          <editor-menu-button
            .button=${html`
              <editor-icon-button
                aria-label=${alignmentLabel}
                .tooltip=${alignmentLabel}
              >
                ${choose(selectedAlign, TEXT_ALIGN_CHOOSE)}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <edgeless-align-panel
              .value=${selectedAlign}
              .onSelect=${this._setTextAlign}
            ></edgeless-align-panel>
          </editor-menu-button>
        `,
      ].filter(b => b !== nothing),
      renderToolbarSeparator
    );
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor elements!: BlockExpanse.EdgelessTextModelType[];

  @property({ attribute: false })
  accessor elementType!: BlockExpanse.EdgelessTextModelKeyType;

  @query('edgeless-color-picker-button.text-color')
  accessor textColorButton!: EdgelessColorPickerButton;
}
