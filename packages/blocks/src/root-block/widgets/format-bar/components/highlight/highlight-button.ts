import type { AffineTextAttributes } from '@blockexpanse/affine-shared/types';
import type { EditorHost } from '@blockexpanse/block-std';

import { whenHover } from '@blockexpanse/affine-components/hover';
import {
  ArrowDownIcon,
  HighLightDuotoneIcon,
  TextBackgroundDuotoneIcon,
  TextForegroundDuotoneIcon,
} from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { assertExists } from '@blockexpanse/global/utils';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { html } from 'lit';
import { ref, type RefOrCallback } from 'lit/directives/ref.js';

import type { AffineFormatBarWidget } from '../../format-bar.js';

import { backgroundConfig, foregroundConfig } from './consts.js';

const F = I18nKeys.editor.format;

const backgroundNameKeyMap: Record<string, string> = {
  'Default Background': F.defaultBackground,
  'Red Background': F.redBackground,
  'Orange Background': F.orangeBackground,
  'Yellow Background': F.yellowBackground,
  'Green Background': F.greenBackground,
  'Teal Background': F.tealBackground,
  'Blue Background': F.blueBackground,
  'Purple Background': F.purpleBackground,
  'Grey Background': F.greyBackground,
};

const foregroundNameKeyMap: Record<string, string> = {
  'Default Color': I18nKeys.editor.keyboard.defaultColor,
  Red: F.red,
  Orange: F.orange,
  Yellow: F.yellow,
  Green: F.green,
  Teal: F.teal,
  Blue: F.blue,
  Purple: F.purple,
  Grey: F.grey,
};

enum HighlightType {
  Foreground,
  Background,
}

let lastUsedColor: string | null = null;
let lastUsedHighlightType: HighlightType = HighlightType.Background;

const updateHighlight = (
  host: EditorHost,
  color: string | null,
  highlightType: HighlightType
) => {
  lastUsedColor = color;
  lastUsedHighlightType = highlightType;

  const payload: {
    styles: AffineTextAttributes;
  } = {
    styles: {
      color: highlightType === HighlightType.Foreground ? color : null,
      background: highlightType === HighlightType.Background ? color : null,
    },
  };
  host.std.command
    .chain()
    .try(chain => [
      chain.getTextSelection().formatText(payload),
      chain.getBlockSelections().formatBlock(payload),
      chain.formatNative(payload),
    ])
    .run();
};

const HighlightPanel = (
  formatBar: AffineFormatBarWidget,
  containerRef?: RefOrCallback
) => {
  const t = formatBar.host.std.getOptional(I18nProvider)?.t ?? identityI18nFn;

  return html`
    <editor-menu-content class="highlight-panel" data-show ${ref(containerRef)}>
      <div data-orientation="vertical">
        <!-- Text Color Highlight -->
        <div class="highligh-panel-heading">
          ${t(I18nKeys.editor.keyboard.color, 'Color')}
        </div>
        ${foregroundConfig.map(
          ({ name, color }) => html`
            <editor-menu-action
              data-testid="${color ?? 'unset'}"
              @click="${() => {
                updateHighlight(
                  formatBar.host,
                  color,
                  HighlightType.Foreground
                );
                formatBar.requestUpdate();
              }}"
            >
              <span style="display: flex; color: ${color}">
                ${TextForegroundDuotoneIcon}
              </span>
              ${foregroundNameKeyMap[name]
                ? t(foregroundNameKeyMap[name], name)
                : name}
            </editor-menu-action>
          `
        )}

        <!-- Text Background Highlight -->
        <div class="highligh-panel-heading">
          ${t(I18nKeys.editor.keyboard.background, 'Background')}
        </div>
        ${backgroundConfig.map(
          ({ name, color }) => html`
            <editor-menu-action
              @click="${() => {
                updateHighlight(
                  formatBar.host,
                  color,
                  HighlightType.Background
                );
                formatBar.requestUpdate();
              }}"
            >
              <span style="display: flex; color: ${color ?? 'transparent'}">
                ${TextBackgroundDuotoneIcon}
              </span>
              ${backgroundNameKeyMap[name]
                ? t(backgroundNameKeyMap[name], name)
                : name}
            </editor-menu-action>
          `
        )}
      </div>
    </editor-menu-content>
  `;
};

export const HighlightButton = (formatBar: AffineFormatBarWidget) => {
  const editorHost = formatBar.host;

  const { setFloating, setReference } = whenHover(isHover => {
    if (!isHover) {
      const panel =
        formatBar.shadowRoot?.querySelector<HTMLElement>('.highlight-panel');
      if (!panel) return;
      panel.style.display = 'none';
      return;
    }
    const button =
      formatBar.shadowRoot?.querySelector<HTMLElement>('.highlight-button');
    const panel =
      formatBar.shadowRoot?.querySelector<HTMLElement>('.highlight-panel');
    assertExists(button);
    assertExists(panel);
    panel.style.display = 'flex';
    computePosition(button, panel, {
      placement: 'bottom',
      middleware: [
        flip(),
        offset(6),
        shift({
          padding: 6,
        }),
      ],
    })
      .then(({ x, y }) => {
        panel.style.left = `${x}px`;
        panel.style.top = `${y}px`;
      })
      .catch(console.error);
  });

  const highlightPanel = HighlightPanel(formatBar, setFloating);

  return html`
    <div class="highlight-button" ${ref(setReference)}>
      <editor-icon-button
        class="highlight-icon"
        data-last-used="${lastUsedColor ?? 'unset'}"
        @click="${() =>
          updateHighlight(editorHost, lastUsedColor, lastUsedHighlightType)}"
      >
        <span style="display: flex; color: ${lastUsedColor}">
          ${HighLightDuotoneIcon}
        </span>
        ${ArrowDownIcon}
      </editor-icon-button>
      ${highlightPanel}
    </div>
  `;
};
