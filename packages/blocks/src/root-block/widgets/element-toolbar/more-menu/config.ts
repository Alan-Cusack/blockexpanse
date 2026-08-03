import type {
  EmbedFigmaBlockComponent,
  EmbedGithubBlockComponent,
  EmbedLoomBlockComponent,
  EmbedYoutubeBlockComponent,
} from '@blockexpanse/affine-block-embed';
import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import { isPeekable, peek } from '@blockexpanse/affine-components/peek';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
  TelemetryProvider,
} from '@blockexpanse/affine-shared/services';
import { Bound, getCommonBoundWithRotation } from '@blockexpanse/global/utils';
import {
  ArrowDownBigBottomIcon,
  ArrowDownBigIcon,
  ArrowUpBigIcon,
  ArrowUpBigTopIcon,
  CenterPeekIcon,
  CopyIcon,
  DeleteIcon,
  DuplicateIcon,
  FrameIcon,
  GroupIcon,
  LinkedPageIcon,
  OpenInNewIcon,
  ResetIcon,
} from '@blockexpanse/icons/lit';

import type { AttachmentBlockComponent } from '../../../../attachment-block/attachment-block.js';
import type { BookmarkBlockComponent } from '../../../../bookmark-block/bookmark-block.js';
import type { ImageBlockComponent } from '../../../../image-block/image-block.js';
import type { ElementToolbarMoreMenuContext } from './context.js';

import {
  createLinkedDocFromEdgelessElements,
  createLinkedDocFromNote,
  notifyDocCreated,
  promptDocTitle,
} from '../../../../_common/utils/render-linked-doc.js';
import { duplicate } from '../../../edgeless/utils/clipboard-utils.js';
import { getSortedCloneElements } from '../../../edgeless/utils/clone-utils.js';
import { moveConnectors } from '../../../edgeless/utils/connector.js';
import { deleteElements } from '../../../edgeless/utils/crud.js';

type EmbedLinkBlockComponent =
  | EmbedGithubBlockComponent
  | EmbedFigmaBlockComponent
  | EmbedLoomBlockComponent
  | EmbedYoutubeBlockComponent;

type RefreshableBlockComponent =
  | EmbedLinkBlockComponent
  | ImageBlockComponent
  | AttachmentBlockComponent
  | BookmarkBlockComponent;

export function createBuiltInGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<ElementToolbarMoreMenuContext>[] {
  // Section Group: frame & group
  const sectionGroup: MenuItemGroup<ElementToolbarMoreMenuContext> = {
    type: 'section',
    items: [
      {
        icon: FrameIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.frameSection, 'Frame section'),
        type: 'create-frame',
        action: ({ service, edgeless, std }) => {
          const frame = service.frame.createFrameOnSelected();
          if (!frame) return;

          std.getOptional(TelemetryProvider)?.track('CanvasElementAdded', {
            control: 'context-menu',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: 'frame',
          });

          edgeless.surface.fitToViewport(Bound.deserialize(frame.xywh));
        },
      },
      {
        icon: GroupIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.groupSection, 'Group section'),
        type: 'create-group',
        action: ({ service }) => {
          service.createGroupFromSelected();
        },
        when: ctx => !ctx.hasFrame(),
      },
    ],
  };

  // Reorder Group
  const reorderGroup: MenuItemGroup<ElementToolbarMoreMenuContext> = {
    type: 'reorder',
    items: [
      {
        icon: ArrowUpBigTopIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.bringToFront, 'Bring to Front'),
        type: 'front',
        action: ({ service, selectedElements }) => {
          selectedElements.forEach(el => {
            service.reorderElement(el, 'front');
          });
        },
      },
      {
        icon: ArrowUpBigIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.bringForward, 'Bring Forward'),
        type: 'forward',
        action: ({ service, selectedElements }) => {
          selectedElements.forEach(el => {
            service.reorderElement(el, 'forward');
          });
        },
      },
      {
        icon: ArrowDownBigIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.sendBackward, 'Send Backward'),
        type: 'backward',
        action: ({ service, selectedElements }) => {
          selectedElements.forEach(el => {
            service.reorderElement(el, 'backward');
          });
        },
      },
      {
        icon: ArrowDownBigBottomIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.sendToBack, 'Send to Back'),
        type: 'back',
        action: ({ service, selectedElements }) => {
          selectedElements.forEach(el => {
            service.reorderElement(el, 'back');
          });
        },
      },
    ],
  };

  // Open Group
  const openGroup: MenuItemGroup<ElementToolbarMoreMenuContext> = {
    type: 'open',
    items: [
      {
        icon: OpenInNewIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.openThisDoc, 'Open this doc'),
        type: 'open',
        generate: ctx => {
          const linkedDocBlock = ctx.getLinkedDocBlock();

          if (!linkedDocBlock) return;

          const disabled = linkedDocBlock.pageId === ctx.doc.id;

          return {
            action: () => {
              const blockComponent = ctx.firstBlockComponent;

              if (!blockComponent) return;
              if (!('open' in blockComponent)) return;
              if (typeof blockComponent.open !== 'function') return;

              blockComponent.open();
            },

            disabled,
          };
        },
      },
      {
        icon: CenterPeekIcon({ width: '20', height: '20' }),
        label: t(
          I18nKeys.editor.action.openInCenterPeek,
          'Open in center peek'
        ),
        type: 'center-peek',
        generate: ctx => {
          const valid =
            ctx.isSingle() &&
            !!ctx.firstBlockComponent &&
            isPeekable(ctx.firstBlockComponent);

          if (!valid) return;

          return {
            action: () => {
              if (!ctx.firstBlockComponent) return;

              peek(ctx.firstBlockComponent);
            },
          };
        },
      },
    ],
  };

  // Clipboard Group
  const clipboardGroup: MenuItemGroup<ElementToolbarMoreMenuContext> = {
    type: 'clipboard',
    items: [
      {
        icon: CopyIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.copy, 'Copy'),
        type: 'copy',
        action: ({ edgeless }) => edgeless.clipboardController.copy(),
      },
      {
        icon: DuplicateIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.duplicate, 'Duplicate'),
        type: 'duplicate',
        action: ({ edgeless, selectedElements }) =>
          duplicate(edgeless, selectedElements),
      },
      {
        icon: ResetIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.reload, 'Reload'),
        type: 'reload',
        generate: ctx => {
          if (ctx.hasFrame()) {
            return;
          }

          const blocks = ctx.selection.surfaceSelections
            .map(s => ctx.getBlockComponent(s.blockId))
            .filter(block => !!block)
            .filter(block => ctx.refreshable(block.model));

          if (
            !blocks.length ||
            blocks.length !== ctx.selection.surfaceSelections.length
          ) {
            return;
          }

          return {
            action: () =>
              blocks.forEach(block =>
                (block as RefreshableBlockComponent).refreshData()
              ),
          };
        },
      },
    ],
  };

  // Conversions Group
  const conversionsGroup: MenuItemGroup<ElementToolbarMoreMenuContext> = {
    type: 'conversions',
    items: [
      {
        icon: LinkedPageIcon({ width: '20', height: '20' }),
        label: t(
          I18nKeys.editor.action.turnIntoLinkedDoc,
          'Turn into linked doc'
        ),
        type: 'turn-into-linked-doc',
        action: async ctx => {
          const { doc, service, surface, host, std } = ctx;
          const element = ctx.getNoteBlock();
          if (!element) return;

          const title = await promptDocTitle(host);
          if (title === null) return;

          const linkedDoc = createLinkedDocFromNote(doc, element, title);
          // insert linked doc card
          const cardId = service.addBlock(
            'affine:embed-synced-doc',
            {
              xywh: element.xywh,
              style: 'syncedDoc',
              pageId: linkedDoc.id,
              index: element.index,
            },
            surface.model.id
          );
          std.getOptional(TelemetryProvider)?.track('CanvasElementAdded', {
            control: 'context-menu',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: 'embed-synced-doc',
          });
          std.getOptional(TelemetryProvider)?.track('DocCreated', {
            control: 'turn into linked doc',
            page: 'whiteboard editor',
            module: 'format toolbar',
            type: 'embed-linked-doc',
          });
          std.getOptional(TelemetryProvider)?.track('LinkedDocCreated', {
            control: 'turn into linked doc',
            page: 'whiteboard editor',
            module: 'format toolbar',
            type: 'embed-linked-doc',
            other: 'new doc',
          });
          moveConnectors(element.id, cardId, service);
          // delete selected note
          doc.transact(() => {
            doc.deleteBlock(element);
          });
          service.selection.set({
            elements: [cardId],
            editing: false,
          });
        },
        when: ctx => !!ctx.getNoteBlock(),
      },
      {
        icon: LinkedPageIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.createLinkedDoc, 'Create linked doc'),
        type: 'create-linked-doc',
        action: async ({
          doc,
          selection,
          service,
          surface,
          edgeless,
          host,
          std,
        }) => {
          const title = await promptDocTitle(host);
          if (title === null) return;

          const elements = getSortedCloneElements(selection.selectedElements);
          const linkedDoc = createLinkedDocFromEdgelessElements(
            host,
            elements,
            title
          );
          // delete selected elements
          doc.transact(() => {
            deleteElements(edgeless, elements);
          });
          // insert linked doc card
          const width = 364;
          const height = 390;
          const bound = getCommonBoundWithRotation(elements);
          const cardId = service.addBlock(
            'affine:embed-linked-doc',
            {
              xywh: `[${bound.center[0] - width / 2}, ${bound.center[1] - height / 2}, ${width}, ${height}]`,
              style: 'vertical',
              pageId: linkedDoc.id,
            },
            surface.model.id
          );
          selection.set({
            elements: [cardId],
            editing: false,
          });
          std.getOptional(TelemetryProvider)?.track('CanvasElementAdded', {
            control: 'context-menu',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: 'embed-linked-doc',
          });
          std.getOptional(TelemetryProvider)?.track('DocCreated', {
            control: 'create linked doc',
            page: 'whiteboard editor',
            module: 'format toolbar',
            type: 'embed-linked-doc',
          });
          std.getOptional(TelemetryProvider)?.track('LinkedDocCreated', {
            control: 'create linked doc',
            page: 'whiteboard editor',
            module: 'format toolbar',
            type: 'embed-linked-doc',
            other: 'new doc',
          });

          notifyDocCreated(host, doc);
        },
        when: ctx => !(ctx.getLinkedDocBlock() || ctx.getNoteBlock()),
      },
    ],
  };

  // Delete Group
  const deleteGroup: MenuItemGroup<ElementToolbarMoreMenuContext> = {
    type: 'delete',
    items: [
      {
        icon: DeleteIcon({ width: '20', height: '20' }),
        label: t(I18nKeys.editor.action.delete, 'Delete'),
        type: 'delete',
        action: ({ doc, selection, selectedElements, edgeless }) => {
          doc.captureSync();
          deleteElements(edgeless, selectedElements);

          selection.set({
            elements: [],
            editing: false,
          });
        },
      },
    ],
  };

  return [
    sectionGroup,
    reorderGroup,
    openGroup,
    clipboardGroup,
    conversionsGroup,
    deleteGroup,
  ];
}

export const BUILT_IN_GROUPS = createBuiltInGroups();
