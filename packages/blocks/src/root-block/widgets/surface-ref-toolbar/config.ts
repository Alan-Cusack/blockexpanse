import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import {
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
} from '@blockexpanse/affine-components/icons';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { downloadBlob } from '@blockexpanse/affine-shared/utils';

import type { EdgelessRootPreviewBlockComponent } from '../../edgeless/edgeless-root-preview-block.js';
import type { SurfaceRefToolbarContext } from './context.js';

import { edgelessToBlob, writeImageBlobToClipboard } from './utils.js';

export function createBuiltInGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<SurfaceRefToolbarContext>[] {
  return [
    {
      type: 'clipboard',
      when: ctx => !!(ctx.blockComponent.referenceModel && ctx.doc.root),
      items: [
        {
          type: 'copy',
          label: t(I18nKeys.editor.action.copy, 'Copy'),
          icon: CopyIcon,
          action: ctx => {
            if (!(ctx.blockComponent.referenceModel && ctx.doc.root?.id)) {
              ctx.close();
              return;
            }

            const referencedModel = ctx.blockComponent.referenceModel;
            const editor = ctx.blockComponent.previewEditor;
            const edgelessRootElement = editor?.view.getBlock(ctx.doc.root.id);
            const surfaceRenderer = (
              edgelessRootElement as EdgelessRootPreviewBlockComponent
            )?.surface?.renderer;

            if (!surfaceRenderer) {
              ctx.close();
              return;
            }

            edgelessToBlob(ctx.host, {
              surfaceRefBlock: ctx.blockComponent,
              surfaceRenderer,
              edgelessElement: referencedModel,
            })
              .then(blob => writeImageBlobToClipboard(blob))
              .then(() =>
                toastI18n(
                  ctx.host,
                  I18nKeys.editor.toast.copiedImage,
                  'Copied image to clipboard'
                )
              )
              .catch(console.error);

            ctx.close();
          },
        },
        {
          type: 'download',
          label: t(I18nKeys.editor.action.download, 'Download'),
          icon: DownloadIcon,
          action: ctx => {
            if (!(ctx.blockComponent.referenceModel && ctx.doc.root?.id)) {
              ctx.close();
              return;
            }

            const referencedModel = ctx.blockComponent.referenceModel;
            const editor = ctx.blockComponent.previewEditor;
            const edgelessRootElement = editor?.view.getBlock(ctx.doc.root.id);
            const surfaceRenderer = (
              edgelessRootElement as EdgelessRootPreviewBlockComponent
            )?.surface?.renderer;

            if (!surfaceRenderer) {
              ctx.close();
              return;
            }

            edgelessToBlob(ctx.host, {
              surfaceRefBlock: ctx.blockComponent,
              surfaceRenderer,
              edgelessElement: referencedModel,
            })
              .then(blob => {
                const fileName =
                  'title' in referencedModel
                    ? (referencedModel.title?.toString() ?? 'Edgeless Content')
                    : 'Edgeless Content';

                downloadBlob(blob, fileName);
              })
              .catch(console.error);

            ctx.close();
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
          action: ({ blockComponent, doc, close }) => {
            doc.deleteBlock(blockComponent.model);
            close();
          },
        },
      ],
    },
  ];
}

export const BUILT_IN_GROUPS = createBuiltInGroups();
