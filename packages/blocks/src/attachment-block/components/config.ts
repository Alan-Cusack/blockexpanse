import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import {
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  DuplicateIcon,
  RefreshIcon,
} from '@blockexpanse/affine-components/icons';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

import type { AttachmentToolbarMoreMenuContext } from './context.js';

import { cloneAttachmentProperties } from '../utils.js';

export function createBuiltInGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<AttachmentToolbarMoreMenuContext>[] {
  return [
    {
      type: 'clipboard',
      items: [
        {
          type: 'copy',
          label: t(I18nKeys.editor.action.copy, 'Copy'),
          icon: CopyIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ctx => ctx.blockComponent.copy(),
        },
        {
          type: 'duplicate',
          label: t(I18nKeys.editor.action.duplicate, 'Duplicate'),
          icon: DuplicateIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ({ doc, blockComponent, close }) => {
            const model = blockComponent.model;
            const prop: { flavour: 'affine:attachment' } = {
              flavour: 'affine:attachment',
              ...cloneAttachmentProperties(model),
            };
            doc.addSiblingBlocks(model, [prop]);
            close();
          },
        },
        {
          type: 'reload',
          label: t(I18nKeys.editor.action.reload, 'Reload'),
          icon: RefreshIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ({ blockComponent, close }) => {
            blockComponent.refreshData();
            close();
          },
        },
        {
          type: 'download',
          label: t(I18nKeys.editor.action.download, 'Download'),
          icon: DownloadIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ({ blockComponent, close }) => {
            blockComponent.download();
            close();
          },
        },
      ],
    },
    {
      type: 'delete',
      items: [
        {
          type: 'delete',
          label: t(I18nKeys.editor.action.delete, 'Delete'),
          icon: DeleteIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ({ doc, blockComponent, close }) => {
            doc.deleteBlock(blockComponent.model);
            close();
          },
        },
      ],
    },
  ];
}

export const BUILT_IN_GROUPS = createBuiltInGroups();
