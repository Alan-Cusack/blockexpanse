import {
  BanIcon,
  DashLineIcon,
  StraightLineIcon,
} from '@blockexpanse/affine-components/icons';
import { type LineWidth, StrokeStyle } from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';

import type { LineWidthEvent } from './line-width-panel.js';

export type LineStyleEvent =
  | {
      type: 'size';
      value: LineWidth;
    }
  | {
      type: 'lineStyle';
      value: StrokeStyle;
    };

interface LineStylesPanelProps {
  onClick?: (e: LineStyleEvent) => void;
  selectedLineSize?: LineWidth;
  selectedLineStyle?: StrokeStyle;
  lineStyles?: StrokeStyle[];
}

const LINE_STYLE_LIST = [
  {
    name: 'Solid',
    i18nKey: I18nKeys.editor.edgeless.lineStyle.solid,
    value: StrokeStyle.Solid,
    icon: StraightLineIcon,
  },
  {
    name: 'Dash',
    i18nKey: I18nKeys.editor.edgeless.lineStyle.dash,
    value: StrokeStyle.Dash,
    icon: DashLineIcon,
  },
  {
    name: 'None',
    i18nKey: I18nKeys.editor.edgeless.size.none,
    value: StrokeStyle.None,
    icon: BanIcon,
  },
];

export function LineStylesPanel({
  onClick,
  selectedLineSize,
  selectedLineStyle,
  lineStyles = [StrokeStyle.Solid, StrokeStyle.Dash, StrokeStyle.None],
}: LineStylesPanelProps = {}) {
  const host = document.querySelector('editor-host') as {
    std?: {
      getOptional: (
        id: typeof I18nProvider
      ) => { t: typeof identityI18nFn } | null;
    };
  } | null;
  const t = host?.std?.getOptional(I18nProvider)?.t ?? identityI18nFn;

  const lineSizePanel = html`
    <edgeless-line-width-panel
      .selectedSize=${selectedLineSize as LineWidth}
      .disable=${selectedLineStyle === StrokeStyle.None}
      @select=${(e: LineWidthEvent) => {
        onClick?.({
          type: 'size',
          value: e.detail,
        });
      }}
    ></edgeless-line-width-panel>
  `;

  const lineStyleButtons = repeat(
    LINE_STYLE_LIST.filter(item => lineStyles.includes(item.value)),
    item => item.value,
    ({ name, i18nKey, icon, value }) => {
      const active = selectedLineStyle === value;
      const classes: Record<string, boolean> = {
        'line-style-button': true,
        [`mode-${value}`]: true,
      };
      if (active) classes['active'] = true;

      return html`
        <edgeless-tool-icon-button
          class=${classMap(classes)}
          .active=${active}
          .activeMode=${'background'}
          .tooltip=${t(i18nKey, name)}
          @click=${() =>
            onClick?.({
              type: 'lineStyle',
              value,
            })}
        >
          ${icon}
        </edgeless-tool-icon-button>
      `;
    }
  );

  return html`
    ${lineSizePanel}
    <editor-toolbar-separator></editor-toolbar-separator>
    ${lineStyleButtons}
  `;
}
