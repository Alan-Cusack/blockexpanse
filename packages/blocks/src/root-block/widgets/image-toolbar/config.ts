import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import {
  BookmarkIcon,
  CaptionIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  DuplicateIcon,
} from '@blockexpanse/affine-components/icons';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import type { ImageToolbarContext } from './context.js';

import { duplicate } from './utils.js';

export function createPrimaryGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<ImageToolbarContext>[] {
  return [
    {
      type: 'primary',
      items: [
        {
          type: 'download',
          label: t(I18nKeys.editor.action.download, 'Download'),
          icon: DownloadIcon,
          generate: ({ blockComponent }) => {
            return {
              action: () => {
                blockComponent.download();
              },
              render: item => html`
                <editor-icon-button
                  class="image-toolbar-button download"
                  aria-label=${ifDefined(item.label)}
                  .tooltip=${item.label}
                  .tooltipOffset=${4}
                  @click=${(e: MouseEvent) => {
                    e.stopPropagation();
                    item.action();
                  }}
                >
                  ${item.icon}
                </editor-icon-button>
              `,
            };
          },
        },
        {
          type: 'caption',
          label: t(I18nKeys.editor.action.caption, 'Caption'),
          icon: CaptionIcon,
          when: ({ doc }) => !doc.readonly,
          generate: ({ blockComponent }) => {
            return {
              action: () => {
                blockComponent.captionEditor?.show();
              },
              render: item => html`
                <editor-icon-button
                  class="image-toolbar-button caption"
                  aria-label=${ifDefined(item.label)}
                  .tooltip=${item.label}
                  .tooltipOffset=${4}
                  @click=${(e: MouseEvent) => {
                    e.stopPropagation();
                    item.action();
                  }}
                >
                  ${item.icon}
                </editor-icon-button>
              `,
            };
          },
        },
      ],
    },
  ];
}

export function createMoreGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<ImageToolbarContext>[] {
  return [
    {
      type: 'clipboard',
      items: [
        {
          type: 'copy',
          label: t(I18nKeys.editor.action.copy, 'Copy'),
          icon: CopyIcon,
          action: ({ blockComponent, close }) => {
            blockComponent.copy();
            close();
          },
        },
        {
          type: 'duplicate',
          label: t(I18nKeys.editor.action.duplicate, 'Duplicate'),
          icon: DuplicateIcon,
          when: ({ doc }) => !doc.readonly,
          action: ({ blockComponent, abortController }) => {
            duplicate(blockComponent, abortController);
          },
        },
      ],
    },
    {
      type: 'conversions',
      items: [
        {
          label: t(
            I18nKeys.editor.action.turnIntoCardView,
            'Turn into card view'
          ),
          type: 'turn-into-card-view',
          icon: BookmarkIcon,
          when: ({ doc, blockComponent }) => {
            const supportAttachment =
              doc.schema.flavourSchemaMap.has('affine:attachment');
            const readonly = doc.readonly;
            return supportAttachment && !readonly && !!blockComponent.blob;
          },
          action: ({ blockComponent, close }) => {
            blockComponent.convertToCardView();
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
          when: ({ doc }) => !doc.readonly,
          action: ({ doc, blockComponent, close }) => {
            doc.deleteBlock(blockComponent.model);
            close();
          },
        },
      ],
    },
  ];
}

export const PRIMARY_GROUPS = createPrimaryGroups();
export const MORE_GROUPS = createMoreGroups();
