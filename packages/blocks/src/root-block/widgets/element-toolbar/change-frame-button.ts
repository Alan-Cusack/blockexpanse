import {
  NoteIcon,
  RenameIcon,
  UngroupButtonIcon,
} from '@blockexpanse/affine-components/icons';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import { renderToolbarSeparator } from '@blockexpanse/affine-components/toolbar';
import {
  type ColorScheme,
  DEFAULT_NOTE_HEIGHT,
  FRAME_BACKGROUND_COLORS,
  type FrameBlockModel,
  NoteDisplayMode,
} from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { matchFlavours } from '@blockexpanse/affine-shared/utils';
import { GfxExtensionIdentifier } from '@blockexpanse/block-std/gfx';
import {
  countBy,
  deserializeXYWH,
  maxBy,
  serializeXYWH,
  WithDisposable,
} from '@blockexpanse/global/utils';
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { when } from 'lit/directives/when.js';

import type { EdgelessColorPickerButton } from '../../edgeless/components/color-picker/button.js';
import type { PickColorEvent } from '../../edgeless/components/color-picker/types.js';
import type { ColorEvent } from '../../edgeless/components/panel/color-panel.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { EdgelessFrameManager } from '../../edgeless/frame-manager.js';

import {
  packColor,
  packColorsWithColorScheme,
} from '../../edgeless/components/color-picker/utils.js';
import { mountFrameTitleEditor } from '../../edgeless/utils/text.js';

function getMostCommonColor(
  elements: FrameBlockModel[],
  colorScheme: ColorScheme
): string | null {
  const colors = countBy(elements, (ele: FrameBlockModel) => {
    return typeof ele.background === 'object'
      ? (ele.background[colorScheme] ?? ele.background.normal ?? null)
      : ele.background;
  });
  const max = maxBy(Object.entries(colors), ([_k, count]) => count);
  return max ? (max[0] as string) : null;
}

export class EdgelessChangeFrameButton extends WithDisposable(LitElement) {
  pickColor = (event: PickColorEvent) => {
    if (event.type === 'pick') {
      this.frames.forEach(ele =>
        this.service.updateElement(
          ele.id,
          packColor('background', { ...event.detail })
        )
      );
      return;
    }

    this.frames.forEach(ele =>
      ele[event.type === 'start' ? 'stash' : 'pop']('background')
    );
  };

  get service() {
    return this.edgeless.service;
  }

  private _insertIntoPage() {
    if (!this.edgeless.doc.root) return;

    const rootModel = this.edgeless.doc.root;
    const notes = rootModel.children.filter(
      model =>
        matchFlavours(model, ['affine:note']) &&
        model.displayMode !== NoteDisplayMode.EdgelessOnly
    );
    const lastNote = notes[notes.length - 1];
    const referenceFrame = this.frames[0];

    let targetParent = lastNote?.id;

    if (!lastNote) {
      const targetXYWH = deserializeXYWH(referenceFrame.xywh);

      targetXYWH[1] = targetXYWH[1] + targetXYWH[3];
      targetXYWH[3] = DEFAULT_NOTE_HEIGHT;

      const newAddedNote = this.edgeless.doc.addBlock(
        'affine:note',
        {
          xywh: serializeXYWH(...targetXYWH),
        },
        rootModel.id
      );

      targetParent = newAddedNote;
    }

    this.edgeless.doc.addBlock(
      'affine:surface-ref',
      {
        reference: this.frames[0].id,
        refFlavour: 'affine:frame',
      },
      targetParent
    );

    toastI18n(
      this.edgeless.host,
      I18nKeys.editor.toast.frameInserted,
      'Frame has been inserted into doc'
    );
  }

  private _setFrameBackground(color: string) {
    this.frames.forEach(frame => {
      this.service.updateElement(frame.id, { background: color });
    });
  }

  protected override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const insertIntoPageLabel = t(
      I18nKeys.editor.edgeless.insertIntoPage,
      'Insert into Page'
    );
    const renameLabel = t(I18nKeys.editor.action.rename, 'Rename');
    const ungroupLabel = t(I18nKeys.editor.edgeless.ungroup, 'Ungroup');
    const backgroundLabel = t(
      I18nKeys.editor.edgeless.background,
      'Background'
    );
    const { frames } = this;
    const len = frames.length;
    const onlyOne = len === 1;
    const colorScheme = this.edgeless.surface.renderer.getColorScheme();
    const background =
      getMostCommonColor(frames, colorScheme) ?? '--affine-palette-transparent';

    return join(
      [
        onlyOne
          ? html`
              <editor-icon-button
                aria-label=${insertIntoPageLabel}
                .tooltip=${insertIntoPageLabel}
                .iconSize=${'20px'}
                .labelHeight=${'20px'}
                @click=${this._insertIntoPage}
              >
                ${NoteIcon}
                <span class="label">${insertIntoPageLabel}</span>
              </editor-icon-button>
            `
          : nothing,

        onlyOne
          ? html`
              <editor-icon-button
                aria-label=${renameLabel}
                .tooltip=${renameLabel}
                .iconSize=${'20px'}
                @click=${() =>
                  mountFrameTitleEditor(this.frames[0], this.edgeless)}
              >
                ${RenameIcon}
              </editor-icon-button>
            `
          : nothing,

        html`
          <editor-icon-button
            aria-label=${ungroupLabel}
            .tooltip=${ungroupLabel}
            .iconSize=${'20px'}
            @click=${() => {
              this.edgeless.doc.captureSync();
              const frameMgr = this.edgeless.std.get(
                GfxExtensionIdentifier('frame-manager')
              ) as EdgelessFrameManager;
              frames.forEach(frame =>
                frameMgr.removeAllChildrenFromFrame(frame)
              );
              frames.forEach(frame => {
                this.edgeless.service.removeElement(frame);
              });
              this.edgeless.service.selection.clear();
            }}
          >
            ${UngroupButtonIcon}
          </editor-icon-button>
        `,

        when(
          this.edgeless.doc.awarenessStore.getFlag('enable_color_picker'),
          () => {
            const { type, colors } = packColorsWithColorScheme(
              colorScheme,
              background,
              this.frames[0].background
            );

            return html`
              <edgeless-color-picker-button
                class="background"
                .label=${backgroundLabel}
                .pick=${this.pickColor}
                .color=${background}
                .colors=${colors}
                .colorType=${type}
                .palettes=${FRAME_BACKGROUND_COLORS}
              >
              </edgeless-color-picker-button>
            `;
          },
          () => html`
            <editor-menu-button
              .contentPadding=${'8px'}
              .button=${html`
                <editor-icon-button
                  aria-label=${backgroundLabel}
                  .tooltip=${backgroundLabel}
                >
                  <edgeless-color-button
                    .color=${background}
                  ></edgeless-color-button>
                </editor-icon-button>
              `}
            >
              <edgeless-color-panel
                .value=${background}
                .options=${FRAME_BACKGROUND_COLORS}
                @select=${(e: ColorEvent) => this._setFrameBackground(e.detail)}
              >
              </edgeless-color-panel>
            </editor-menu-button>
          `
        ),
      ].filter(button => button !== nothing),
      renderToolbarSeparator
    );
  }

  @query('edgeless-color-picker-button.background')
  accessor backgroundButton!: EdgelessColorPickerButton;

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor frames: FrameBlockModel[] = [];
}

export function renderFrameButton(
  edgeless: EdgelessRootBlockComponent,
  frames?: FrameBlockModel[]
) {
  if (!frames?.length) return nothing;

  return html`
    <edgeless-change-frame-button
      .edgeless=${edgeless}
      .frames=${frames}
    ></edgeless-change-frame-button>
  `;
}
