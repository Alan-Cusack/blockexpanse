import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import {
  CopyIcon,
  DeleteIcon,
  DuplicateIcon,
  RefreshIcon,
} from '@blockexpanse/affine-components/icons';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { getBlockProps } from '@blockexpanse/affine-shared/utils';
import { Slice } from '@blockexpanse/store';

import type { EmbedCardToolbarContext } from './context.js';

import {
  isAttachmentBlock,
  isBookmarkBlock,
  isEmbeddedLinkBlock,
  isImageBlock,
} from '../../edgeless/utils/query.js';

export function createBuiltInGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<EmbedCardToolbarContext>[] {
  return [
    {
      type: 'clipboard',
      items: [
        {
          type: 'copy',
          label: t(I18nKeys.editor.action.copy, 'Copy'),
          icon: CopyIcon,
          disabled: ({ doc }) => doc.readonly,
          action: async ({ host, doc, std, blockComponent, close }) => {
            const slice = Slice.fromModels(doc, [blockComponent.model]);
            await std.clipboard.copySlice(slice);
            toastI18n(
              host,
              I18nKeys.editor.toast.copiedLink,
              'Copied link to clipboard'
            );
            close();
          },
        },
        {
          type: 'duplicate',
          label: t(I18nKeys.editor.action.duplicate, 'Duplicate'),
          icon: DuplicateIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ({ doc, blockComponent, close }) => {
            const model = blockComponent.model;
            const blockProps = getBlockProps(model);
            const { width, height, xywh, rotate, zIndex, ...duplicateProps } =
              blockProps;

            const parent = doc.getParent(model);
            const index = parent?.children.indexOf(model);
            doc.addBlock(
              model.flavour as BlockExpanse.Flavour,
              duplicateProps,
              parent,
              index
            );
            close();
          },
        },
        {
          type: 'reload',
          label: t(I18nKeys.editor.action.reload, 'Reload'),
          icon: RefreshIcon,
          disabled: ({ doc }) => doc.readonly,
          action: ({ blockComponent, close }) => {
            blockComponent?.refreshData();
            close();
          },
          when: ({ blockComponent }) => {
            const model = blockComponent.model;

            return (
              !!model &&
              (isImageBlock(model) ||
                isBookmarkBlock(model) ||
                isAttachmentBlock(model) ||
                isEmbeddedLinkBlock(model))
            );
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
