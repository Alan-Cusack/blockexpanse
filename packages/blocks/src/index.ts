// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./effects.ts" />
import { deserializeXYWH, Point } from '@blockexpanse/global/utils';

import { matchFlavours } from './_common/utils/index.js';
import { splitElements } from './root-block/edgeless/utils/clipboard-utils.js';
import { isCanvasElement } from './root-block/edgeless/utils/query.js';

export * from './_common/adapters/index.js';

export * from './_common/components/ai-item/index.js';
export { scrollbarStyle } from './_common/components/index.js';
export { type NavigatorMode } from './_common/edgeless/frame/consts.js';
export {
  ExportManager,
  ExportManagerExtension,
} from './_common/export-manager/export-manager.js';
export * from './_common/test-utils/test-utils.js';
export * from './_common/transformers/index.js';
export { type AbstractEditor } from './_common/types.js';
export * from './_specs/index.js';
export * from './attachment-block/index.js';
export * from './bookmark-block/index.js';
export * from './code-block/index.js';
export * from './data-view-block/index.js';
export * from './database-block/index.js';
export * from './divider-block/index.js';
export * from './edgeless-text-block/index.js';
export * from './frame-block/index.js';
export * from './image-block/index.js';
export * from './latex-block/index.js';
export * from './note-block/index.js';
export { EdgelessTemplatePanel } from './root-block/edgeless/components/toolbar/template/template-panel.js';
export type {
  Template,
  TemplateCategory,
  TemplateManager,
} from './root-block/edgeless/components/toolbar/template/template-type.js';
export {
  EdgelessFrameManager,
  FrameOverlay,
} from './root-block/edgeless/frame-manager.js';
export { CopilotTool } from './root-block/edgeless/gfx-tool/copilot-tool.js';
export * from './root-block/edgeless/gfx-tool/index.js';

export { EditPropsMiddlewareBuilder } from './root-block/edgeless/middlewares/base.js';
export * from './root-block/edgeless/utils/common.js';
export { EdgelessSnapManager } from './root-block/edgeless/utils/snap-manager.js';
export * from './root-block/index.js';
export * from './schemas.js';
export {
  markdownToMindmap,
  MindmapSurfaceBlock,
  MiniMindmapPreview,
} from './surface-block/mini-mindmap/index.js';
export * from './surface-ref-block/index.js';
export * from './table-block/index.js';
export * from '@blockexpanse/affine-block-embed';
export * from '@blockexpanse/affine-block-list';
export * from '@blockexpanse/affine-block-paragraph';
export * from '@blockexpanse/affine-block-surface';
export { type MenuOptions } from '@blockexpanse/affine-components/context-menu';
export {
  HoverController,
  whenHover,
} from '@blockexpanse/affine-components/hover';
export {
  ArrowDownSmallIcon,
  CloseIcon,
  DocIcon,
  DualLinkIcon16,
  LinkedDocIcon,
  PlusIcon,
  TagsIcon,
} from '@blockexpanse/affine-components/icons';
export * from '@blockexpanse/affine-components/icons';
export * from '@blockexpanse/affine-components/peek';
export {
  createLitPortal,
  createSimplePortal,
} from '@blockexpanse/affine-components/portal';
export * from '@blockexpanse/affine-components/rich-text';
export { toast } from '@blockexpanse/affine-components/toast';
export {
  type AdvancedMenuItem,
  type FatMenuItems,
  groupsToActions,
  type MenuItem,
  type MenuItemGroup,
  renderActions,
  renderGroups,
  renderToolbarSeparator,
  Tooltip,
} from '@blockexpanse/affine-components/toolbar';
export * from '@blockexpanse/affine-model';
export * from '@blockexpanse/affine-shared/services';

export {
  ColorVariables,
  FontFamilyVariables,
  SizeVariables,
  StyleVariables,
} from '@blockexpanse/affine-shared/theme';
export {
  createButtonPopper,
  createDefaultDoc,
  findNoteBlockModel,
  isInsideEdgelessEditor,
  isInsidePageEditor,
  matchFlavours,
  on,
  once,
  openFileOrFiles,
  printToPdf,
} from '@blockexpanse/affine-shared/utils';

export const BlocksUtils = {
  splitElements,
  matchFlavours,
  deserializeXYWH,
  isCanvasElement,
  Point,
};

const env: Record<string, unknown> =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
      ? window
      : // @ts-ignore
        typeof global !== 'undefined'
        ? // @ts-ignore
          global
        : {};
const importIdentifier = '__ $BLOCKEXPANSE_BLOCKS$ __';

if (env[importIdentifier] === true) {
  // https://github.com/yjs/yjs/issues/438
  console.error(
    '@blockexpanse/blocks was already imported. This breaks constructor checks and will lead to issues!'
  );
}

env[importIdentifier] = true;
