import type {
  AttachmentBlockModel,
  BrushElementModel,
  ConnectorElementModel,
  EdgelessTextBlockModel,
  FrameBlockModel,
  ImageBlockModel,
  MindmapElementModel,
  NoteBlockModel,
  RootBlockModel,
  TextElementModel,
} from '@blockexpanse/affine-model';

import { CommonUtils } from '@blockexpanse/affine-block-surface';
import { ConnectorCWithArrowIcon } from '@blockexpanse/affine-components/icons';
import {
  cloneGroups,
  darkToolbarStyles,
  lightToolbarStyles,
  type MenuItemGroup,
  renderToolbarSeparator,
} from '@blockexpanse/affine-components/toolbar';
import {
  ConnectorMode,
  GroupElementModel,
  ShapeElementModel,
} from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
  ThemeProvider,
} from '@blockexpanse/affine-shared/services';
import { requestConnectedFrame } from '@blockexpanse/affine-shared/utils';
import { WidgetComponent } from '@blockexpanse/block-std';
import {
  atLeastNMatches,
  getCommonBoundWithRotation,
  groupBy,
  pickValues,
} from '@blockexpanse/global/utils';
import { css, html, nothing, type TemplateResult, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import type { EmbedModel } from '../../../_common/components/embed-card/type.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { ElementToolbarMoreMenuContext } from './more-menu/context.js';

import { getMoreMenuConfig } from '../../configs/toolbar.js';
import {
  isAttachmentBlock,
  isBookmarkBlock,
  isEdgelessTextBlock,
  isEmbeddedBlock,
  isFrameBlock,
  isImageBlock,
  isNoteBlock,
} from '../../edgeless/utils/query.js';
import { renderAddFrameButton } from './add-frame-button.js';
import { renderAddGroupButton } from './add-group-button.js';
import { renderAlignButton } from './align-button.js';
import { renderAskAiButton } from './ask-ai-button.js';
import { renderAttachmentButton } from './change-attachment-button.js';
import { renderChangeBrushButton } from './change-brush-button.js';
import { renderConnectorButton } from './change-connector-button.js';
import { renderChangeEdgelessTextButton } from './change-edgeless-text-button.js';
import { renderEmbedButton } from './change-embed-card-button.js';
import { renderFrameButton } from './change-frame-button.js';
import { renderGroupButton } from './change-group-button.js';
import { renderChangeImageButton } from './change-image-button.js';
import { renderMindmapButton } from './change-mindmap-button.js';
import { renderNoteButton } from './change-note-button.js';
import { renderChangeShapeButton } from './change-shape-button.js';
import { renderChangeTextButton } from './change-text-button.js';
import { createBuiltInGroups } from './more-menu/config.js';
import { renderReleaseFromGroupButton } from './release-from-group-button.js';

type CategorizedElements = {
  shape?: ShapeElementModel[];
  brush?: BrushElementModel[];
  text?: TextElementModel[];
  group?: GroupElementModel[];
  connector?: ConnectorElementModel[];
  note?: NoteBlockModel[];
  frame?: FrameBlockModel[];
  image?: ImageBlockModel[];
  attachment?: AttachmentBlockModel[];
  mindmap?: MindmapElementModel[];
  embedCard?: EmbedModel[];
  edgelessText?: EdgelessTextBlockModel[];
};

type CustomEntry = {
  render: (edgeless: EdgelessRootBlockComponent) => TemplateResult | null;
  when: (model: BlockExpanse.EdgelessModel[]) => boolean;
};

export const EDGELESS_ELEMENT_TOOLBAR_WIDGET =
  'edgeless-element-toolbar-widget';

export class EdgelessElementToolbarWidget extends WidgetComponent<
  RootBlockModel,
  EdgelessRootBlockComponent
> {
  static override styles = css`
    :host {
      position: absolute;
      z-index: 3;
      transform: translateZ(0);
      will-change: transform;
      -webkit-user-select: none;
      user-select: none;
    }
    .label {
      padding-left: 4px;
    }
    editor-toolbar[data-app-theme='light'] {
      ${unsafeCSS(lightToolbarStyles.join('\n'))}
    }
    editor-toolbar[data-app-theme='dark'] {
      ${unsafeCSS(darkToolbarStyles.join('\n'))}
    }
  `;

  private _quickConnect = ({ x, y }: MouseEvent) => {
    const element = this.selection.selectedElements[0];
    const point = this.edgeless.service.viewport.toViewCoordFromClientCoord([
      x,
      y,
    ]);
    this.edgeless.doc.captureSync();
    this.edgeless.gfx.tool.setTool('connector', {
      mode: ConnectorMode.Curve,
    });

    const ctc = this.edgeless.gfx.tool.get('connector');
    ctc.quickConnect(point, element);
  };

  private _updateOnSelectedChange = (element: string | { id: string }) => {
    const id = typeof element === 'string' ? element : element.id;

    if (this.isConnected && !this._dragging && this.selection.has(id)) {
      this._recalculatePosition();
      this.requestUpdate();
    }
  };

  /*
   * Caches the more menu items.
   * Currently only supports configuring more menu.
   */
  moreGroups: MenuItemGroup<ElementToolbarMoreMenuContext>[] = cloneGroups(
    createBuiltInGroups()
  );

  get edgeless() {
    return this.block as EdgelessRootBlockComponent;
  }

  get selection() {
    return this.edgeless.service.selection;
  }

  get slots() {
    return this.edgeless.slots;
  }

  get surface() {
    return this.edgeless.surface;
  }

  private _groupSelected(): CategorizedElements {
    const result = groupBy(this.selection.selectedElements, model => {
      if (isNoteBlock(model)) {
        return 'note';
      } else if (isFrameBlock(model)) {
        return 'frame';
      } else if (isImageBlock(model)) {
        return 'image';
      } else if (isAttachmentBlock(model)) {
        return 'attachment';
      } else if (isBookmarkBlock(model) || isEmbeddedBlock(model)) {
        return 'embedCard';
      } else if (isEdgelessTextBlock(model)) {
        return 'edgelessText';
      }

      return (model as BlockExpanse.SurfaceElementModel).type;
    });
    return result as CategorizedElements;
  }

  private _recalculatePosition() {
    const { selection, viewport } = this.edgeless.service;
    const elements = selection.selectedElements;

    if (elements.length === 0) {
      this.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    const bound = getCommonBoundWithRotation(elements);

    const { width, height } = viewport;
    const { x, y, w } = viewport.toViewBound(bound);

    let left = x;
    let top = y;

    const hasLocked = elements.some(e => e.isLocked());

    let offset = 37 + 12;
    // frame, group, shape
    let hasFrame = false;
    let hasGroup = false;
    if (
      (hasFrame = elements.some(ele => isFrameBlock(ele))) ||
      (hasGroup = elements.some(ele => ele instanceof GroupElementModel))
    ) {
      offset += 16 + 4;
      if (hasFrame) {
        offset += 8;
      }
    } else if (
      elements.length === 1 &&
      elements[0] instanceof ShapeElementModel
    ) {
      offset += 22 + 4;
    }

    top = y - offset;
    if (top < 0) {
      top = y + bound.h * viewport.zoom + offset - 37;
      if (hasFrame || hasGroup) {
        top -= 16 + 4;
        if (hasFrame) {
          top -= 8;
        }
      }
    }

    requestConnectedFrame(() => {
      const rect = this.getBoundingClientRect();

      if (hasLocked) {
        left += 0.5 * (w - rect.width);
      }

      left = CommonUtils.clamp(left, 10, width - rect.width - 10);
      top = CommonUtils.clamp(top, 10, height - rect.height - 150);

      this.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    }, this);
  }

  private _renderButtons() {
    if (this.doc.readonly || this._dragging || !this.toolbarVisible) {
      return [];
    }
    const { selectedElements } = this.selection;
    if (selectedElements.some(e => e.isLocked())) {
      return [
        html`<edgeless-lock-button
          .edgeless=${this.edgeless}
        ></edgeless-lock-button>`,
      ];
    }

    const groupedSelected = this._groupSelected();
    const { edgeless, selection } = this;
    const {
      shape,
      brush,
      connector,
      note,
      text,
      frame,
      group,
      embedCard,
      attachment,
      image,
      edgelessText,
      mindmap: mindmaps,
    } = groupedSelected;
    const selectedAtLeastTwoTypes = atLeastNMatches(
      Object.values(groupedSelected),
      e => !!e.length,
      2
    );

    const quickConnectButton =
      selectedElements.length === 1 && !connector?.length
        ? this._renderQuickConnectButton()
        : undefined;

    const generalButtons =
      selectedElements.length !== connector?.length
        ? [
            renderAddFrameButton(edgeless, selectedElements),
            renderAddGroupButton(edgeless, selectedElements),
            renderAlignButton(edgeless, selectedElements),
          ]
        : [];

    const buttons: (symbol | TemplateResult)[] = selectedAtLeastTwoTypes
      ? generalButtons
      : [
          ...generalButtons,
          renderMindmapButton(edgeless, mindmaps),
          renderMindmapButton(edgeless, shape),
          renderChangeShapeButton(edgeless, shape),
          renderChangeBrushButton(edgeless, brush),
          renderConnectorButton(edgeless, connector),
          renderNoteButton(edgeless, note, quickConnectButton),
          renderChangeTextButton(edgeless, text),
          renderChangeEdgelessTextButton(edgeless, edgelessText),
          renderFrameButton(edgeless, frame),
          renderGroupButton(edgeless, group),
          renderEmbedButton(edgeless, embedCard, quickConnectButton),
          renderAttachmentButton(edgeless, attachment),
          renderChangeImageButton(edgeless, image),
        ];

    if (selectedElements.length === 1) {
      if (selection.firstElement.group instanceof GroupElementModel) {
        buttons.unshift(renderReleaseFromGroupButton(this.edgeless));
      }

      if (!connector?.length) {
        buttons.push(quickConnectButton?.pop() ?? nothing);
      }
    }

    buttons.push(
      html`<edgeless-lock-button
        .edgeless=${this.edgeless}
      ></edgeless-lock-button>`
    );

    this._registeredEntries
      .filter(entry => entry.when(selectedElements))
      .map(entry => entry.render(this.edgeless))
      .forEach(entry => entry && buttons.unshift(entry));

    if (this._askAiEnabled) {
      buttons.push(renderAskAiButton(this.edgeless));
    }

    buttons.push(html`
      <edgeless-more-button
        .elements=${selectedElements}
        .edgeless=${edgeless}
        .groups=${this.moreGroups}
        .vertical=${true}
      ></edgeless-more-button>
    `);

    return buttons;
  }

  private _renderQuickConnectButton() {
    const t = this.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const label = t(I18nKeys.editor.edgeless.drawConnector, 'Draw connector');
    return [
      html`
        <editor-icon-button
          aria-label=${label}
          .tooltip=${label}
          .activeMode=${'background'}
          @click=${this._quickConnect}
        >
          ${ConnectorCWithArrowIcon}
        </editor-icon-button>
      `,
    ];
  }

  /**
   * Opt-in Ask AI entry at the end of the edgeless element toolbar (before More).
   * Requires AI panel / edgeless-copilot widgets to be configured by the host.
   */
  addAskAiButton() {
    this._askAiEnabled = true;
    this.requestUpdate();
    return this;
  }

  protected override firstUpdated() {
    const { _disposables, edgeless } = this;

    const t = this.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    this.moreGroups = getMoreMenuConfig(this.std).configure(
      cloneGroups(createBuiltInGroups(t))
    );

    _disposables.add(
      edgeless.service.viewport.viewportUpdated.on(() => {
        this._recalculatePosition();
      })
    );

    _disposables.add(
      this.selection.slots.updated.on(() => {
        if (
          this.selection.selectedIds.length === 0 ||
          this.selection.editing ||
          this.selection.inoperable
        ) {
          this.toolbarVisible = false;
        } else {
          this.selectedIds = this.selection.selectedIds;
          this._recalculatePosition();
          this.toolbarVisible = true;
        }
      })
    );

    pickValues(this.edgeless.service.surface, [
      'elementAdded',
      'elementUpdated',
    ]).forEach(slot => _disposables.add(slot.on(this._updateOnSelectedChange)));

    _disposables.add(
      this.doc.slots.blockUpdated.on(this._updateOnSelectedChange)
    );

    _disposables.add(
      edgeless.dispatcher.add('dragStart', () => {
        this._dragging = true;
      })
    );
    _disposables.add(
      edgeless.dispatcher.add('dragEnd', () => {
        this._dragging = false;
        this._recalculatePosition();
      })
    );

    _disposables.add(
      edgeless.slots.elementResizeStart.on(() => {
        this._dragging = true;
      })
    );
    _disposables.add(
      edgeless.slots.elementResizeEnd.on(() => {
        this._dragging = false;
        this._recalculatePosition();
      })
    );

    _disposables.add(
      edgeless.slots.readonlyUpdated.on(() => this.requestUpdate())
    );

    this.updateComplete
      .then(() => {
        _disposables.add(
          this.std
            .get(ThemeProvider)
            .theme$.subscribe(() => this.requestUpdate())
        );
      })
      .catch(console.error);
  }

  registerEntry(entry: CustomEntry) {
    this._registeredEntries.push(entry);
  }

  override render() {
    const buttons = this._renderButtons();
    if (buttons.length === 0) return nothing;

    const appTheme = this.std.get(ThemeProvider).app$.value;
    return html`
      <editor-toolbar data-app-theme=${appTheme}>
        ${join(
          buttons.filter(b => b !== nothing),
          renderToolbarSeparator
        )}
      </editor-toolbar>
    `;
  }

  @state()
  private accessor _askAiEnabled = false;

  @state()
  private accessor _dragging = false;

  @state()
  private accessor _registeredEntries: {
    render: (edgeless: EdgelessRootBlockComponent) => TemplateResult | null;
    when: (model: BlockExpanse.EdgelessModel[]) => boolean;
  }[] = [];

  @property({ attribute: false })
  accessor enableNoteSlicer!: boolean;

  @state({
    hasChanged: (value: string[], oldValue: string[]) => {
      if (value.length !== oldValue?.length) {
        return true;
      }

      return value.some((id, index) => id !== oldValue[index]);
    },
  })
  accessor selectedIds: string[] = [];

  @state()
  accessor toolbarVisible = false;
}
