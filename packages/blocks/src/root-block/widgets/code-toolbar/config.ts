import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import {
  CancelWrapIcon,
  CaptionIcon,
  CopyIcon,
  DeleteIcon,
  DuplicateIcon,
  WrapIcon,
} from '@blockexpanse/affine-components/icons';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { isInsidePageEditor } from '@blockexpanse/affine-shared/utils';
import { noop, sleep } from '@blockexpanse/global/utils';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import type { CodeBlockToolbarContext } from './context.js';

import { duplicateCodeBlock } from './utils.js';

export function createPrimaryGroups(
  t: I18nFn = identityI18nFn
): MenuItemGroup<CodeBlockToolbarContext>[] {
  return [
    {
      type: 'primary',
      items: [
        {
          type: 'change-lang',
          generate: ({ blockComponent, setActive }) => {
            const state = { active: false };
            return {
              action: noop,
              render: () =>
                html`<language-list-button
                  .blockComponent=${blockComponent}
                  .onActiveStatusChange=${async (active: boolean) => {
                    state.active = active;
                    if (!active) {
                      await sleep(1000);
                      if (state.active) return;
                    }
                    setActive(active);
                  }}
                >
                </language-list-button>`,
            };
          },
        },
        {
          type: 'copy-code',
          label: t(I18nKeys.editor.action.copyCode, 'Copy code'),
          icon: CopyIcon,
          generate: ({ blockComponent }) => {
            return {
              action: () => {
                blockComponent.copyCode();
              },
              render: item => html`
                <editor-icon-button
                  class="code-toolbar-button copy-code"
                  aria-label=${ifDefined(item.label)}
                  .tooltip=${item.label}
                  .tooltipOffset=${4}
                  .iconSize=${'16px'}
                  .iconContainerPadding=${4}
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
                  class="code-toolbar-button caption"
                  aria-label=${ifDefined(item.label)}
                  .tooltip=${item.label}
                  .tooltipOffset=${4}
                  .iconSize=${'16px'}
                  .iconContainerPadding=${4}
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
): MenuItemGroup<CodeBlockToolbarContext>[] {
  return [
    {
      type: 'clipboard',
      items: [
        {
          type: 'wrap',
          generate: ({ blockComponent, close }) => {
            const wrapped = blockComponent.model.wrap;
            const label = wrapped
              ? t(I18nKeys.editor.action.cancelWrap, 'Cancel wrap')
              : t(I18nKeys.editor.action.wrap, 'Wrap');
            const icon = wrapped ? CancelWrapIcon : WrapIcon;

            return {
              label,
              icon,
              action: () => {
                blockComponent.setWrap(!wrapped);
                close();
              },
            };
          },
        },
        {
          type: 'duplicate',
          label: t(I18nKeys.editor.action.duplicate, 'Duplicate'),
          icon: DuplicateIcon,
          when: ({ doc }) => !doc.readonly,
          action: ({ host, blockComponent, close }) => {
            const codeId = duplicateCodeBlock(blockComponent.model);

            host.updateComplete
              .then(() => {
                host.selection.setGroup('note', [
                  host.selection.create('block', {
                    blockId: codeId,
                  }),
                ]);

                if (isInsidePageEditor(host)) {
                  const duplicateElement = host.view.getBlock(codeId);
                  if (duplicateElement) {
                    duplicateElement.scrollIntoView({ block: 'nearest' });
                  }
                }
              })
              .catch(console.error);

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
