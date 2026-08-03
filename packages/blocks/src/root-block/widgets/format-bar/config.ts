import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';
import type {
  Chain,
  CommandKeyToData,
  InitCommandCtx,
} from '@blockexpanse/block-std';

import {
  BoldIcon,
  CodeIcon,
  CopyIcon,
  DatabaseTableViewIcon20,
  DeleteIcon,
  DuplicateIcon,
  ItalicIcon,
  LinkedDocIcon,
  LinkIcon,
  MoreVerticalIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from '@blockexpanse/affine-components/icons';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import { renderGroups } from '@blockexpanse/affine-components/toolbar';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
  TelemetryProvider,
} from '@blockexpanse/affine-shared/services';
import { tableViewMeta } from '@blockexpanse/data-view/view-presets';
import { assertExists } from '@blockexpanse/global/utils';
import { Slice } from '@blockexpanse/store';
import { html, type TemplateResult } from 'lit';

import type { AffineFormatBarWidget } from './format-bar.js';

import { createTextConversionConfigs } from '../../../_common/configs/text-conversion.js';
import {
  convertSelectedBlocksToLinkedDoc,
  getTitleFromSelectedModels,
  notifyDocCreated,
  promptDocTitle,
} from '../../../_common/utils/render-linked-doc.js';
import { convertToDatabase } from '../../../database-block/data-source.js';
import { DATABASE_CONVERT_WHITE_LIST } from '../../../database-block/utils/block-utils.js';
import { FormatBarContext } from './context.js';

export type DividerConfigItem = {
  type: 'divider';
};
export type HighlighterDropdownConfigItem = {
  type: 'highlighter-dropdown';
};
export type ParagraphDropdownConfigItem = {
  type: 'paragraph-dropdown';
};
export type InlineActionConfigItem = {
  id: string;
  name: string;
  type: 'inline-action';
  action: (
    chain: Chain<InitCommandCtx>,
    formatBar: AffineFormatBarWidget
  ) => void;
  icon: TemplateResult | (() => HTMLElement);
  isActive: (
    chain: Chain<InitCommandCtx>,
    formatBar: AffineFormatBarWidget
  ) => boolean;
  showWhen: (
    chain: Chain<InitCommandCtx>,
    formatBar: AffineFormatBarWidget
  ) => boolean;
};
export type ParagraphActionConfigItem = {
  id: string;
  type: 'paragraph-action';
  name: string;
  action: (
    chain: Chain<InitCommandCtx>,
    formatBar: AffineFormatBarWidget
  ) => void;
  icon: TemplateResult | (() => HTMLElement);
  flavour: string;
};

export type CustomConfigItem = {
  type: 'custom';
  render: (formatBar: AffineFormatBarWidget) => TemplateResult | null;
};

export type FormatBarConfigItem =
  | DividerConfigItem
  | HighlighterDropdownConfigItem
  | ParagraphDropdownConfigItem
  | ParagraphActionConfigItem
  | InlineActionConfigItem
  | CustomConfigItem;

export function toolbarDefaultConfig(toolbar: AffineFormatBarWidget) {
  const t = toolbar.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  toolbar
    .clearConfig()
    .addParagraphDropdown()
    .addDivider()
    .addTextStyleToggle({
      key: 'bold',
      action: chain => chain.toggleBold().run(),
      icon: BoldIcon,
    })
    .addTextStyleToggle({
      key: 'italic',
      action: chain => chain.toggleItalic().run(),
      icon: ItalicIcon,
    })
    .addTextStyleToggle({
      key: 'underline',
      action: chain => chain.toggleUnderline().run(),
      icon: UnderlineIcon,
    })
    .addTextStyleToggle({
      key: 'strike',
      action: chain => chain.toggleStrike().run(),
      icon: StrikethroughIcon,
    })
    .addTextStyleToggle({
      key: 'code',
      action: chain => chain.toggleCode().run(),
      icon: CodeIcon,
    })
    .addTextStyleToggle({
      key: 'link',
      action: chain => chain.toggleLink().run(),
      icon: LinkIcon,
    })
    .addDivider()
    .addHighlighterDropdown()
    .addDivider()
    .addInlineAction({
      id: 'convert-to-database',
      name: t(I18nKeys.editor.format.toTable, 'Create Table'),
      icon: DatabaseTableViewIcon20,
      isActive: () => false,
      action: () => {
        convertToDatabase(toolbar.host, tableViewMeta.type);
      },
      showWhen: chain => {
        const middleware = (count = 0) => {
          return (
            ctx: CommandKeyToData<'selectedBlocks'>,
            next: () => void
          ) => {
            const { selectedBlocks } = ctx;
            if (!selectedBlocks || selectedBlocks.length === count) return;

            const allowed = selectedBlocks.every(block =>
              DATABASE_CONVERT_WHITE_LIST.includes(block.flavour)
            );
            if (!allowed) return;

            next();
          };
        };
        let [result] = chain
          .getTextSelection()
          .getSelectedBlocks({
            types: ['text'],
          })
          .inline(middleware(1))
          .run();

        if (result) return true;

        [result] = chain
          .tryAll(chain => [
            chain.getBlockSelections(),
            chain.getImageSelections(),
          ])
          .getSelectedBlocks({
            types: ['block', 'image'],
          })
          .inline(middleware(0))
          .run();

        return result;
      },
    })
    .addDivider()
    .addInlineAction({
      id: 'convert-to-linked-doc',
      name: t(I18nKeys.editor.format.turnIntoLinkedDoc, 'Create Linked Doc'),
      icon: LinkedDocIcon,
      isActive: () => false,
      action: (chain, formatBar) => {
        const [_, ctx] = chain
          .getSelectedModels({
            types: ['block', 'text'],
            mode: 'highest',
          })
          .draftSelectedModels()
          .run();
        const { draftedModels, selectedModels } = ctx;
        if (!selectedModels?.length || !draftedModels) return;

        const host = formatBar.host;
        host.selection.clear();

        const doc = host.doc;
        const autofill = getTitleFromSelectedModels(selectedModels);
        void promptDocTitle(host, autofill).then(async title => {
          if (title === null) return;
          await convertSelectedBlocksToLinkedDoc(
            host.std,
            doc,
            draftedModels,
            title
          );
          notifyDocCreated(host, doc);
          host.std.getOptional(TelemetryProvider)?.track('DocCreated', {
            control: 'create linked doc',
            page: 'doc editor',
            module: 'format toolbar',
            type: 'embed-linked-doc',
          });
          host.std.getOptional(TelemetryProvider)?.track('LinkedDocCreated', {
            control: 'create linked doc',
            page: 'doc editor',
            module: 'format toolbar',
            type: 'embed-linked-doc',
          });
        });
      },
      showWhen: chain => {
        const [_, ctx] = chain
          .getSelectedModels({
            types: ['block', 'text'],
            mode: 'highest',
          })
          .run();
        const { selectedModels } = ctx;
        return !!selectedModels && selectedModels.length > 0;
      },
    });

  createTextConversionConfigs(t)
    .filter(config => config.type !== 'divider')
    .forEach(config => {
      toolbar.addBlockTypeSwitch({
        flavour: config.flavour,
        type: config.type,
        name: config.name,
        icon: config.icon,
      });
    });

  return toolbar;
}

export const BUILT_IN_GROUPS: MenuItemGroup<FormatBarContext>[] = [
  {
    type: 'clipboard',
    items: [
      {
        type: 'copy',
        label: 'Copy',
        icon: CopyIcon,
        disabled: c => c.doc.readonly,
        action: c => {
          c.std.command
            .chain()
            .getSelectedModels()
            .with({
              onCopy: () => {
                toastI18n(
                  c.host,
                  I18nKeys.editor.toast.copied,
                  'Copied to clipboard'
                );
              },
            })
            .draftSelectedModels()
            .copySelectedModels()
            .run();
        },
      },
      {
        type: 'duplicate',
        label: 'Duplicate',
        icon: DuplicateIcon,
        disabled: c => c.doc.readonly,
        action: c => {
          c.doc.captureSync();
          c.std.command
            .chain()
            .try(cmd => [
              cmd
                .getTextSelection()
                .inline<'currentSelectionPath'>((ctx, next) => {
                  const textSelection = ctx.currentTextSelection;
                  assertExists(textSelection);
                  const end = textSelection.to ?? textSelection.from;
                  next({ currentSelectionPath: end.blockId });
                }),
              cmd
                .getBlockSelections()
                .inline<'currentSelectionPath'>((ctx, next) => {
                  const currentBlockSelections = ctx.currentBlockSelections;
                  assertExists(currentBlockSelections);
                  const blockSelection = currentBlockSelections.at(-1);
                  if (!blockSelection) {
                    return;
                  }
                  next({ currentSelectionPath: blockSelection.blockId });
                }),
            ])
            .getBlockIndex()
            .getSelectedModels()
            .draftSelectedModels()
            .inline((ctx, next) => {
              if (!ctx.draftedModels) {
                return next();
              }

              ctx.draftedModels
                .then(models => {
                  const slice = Slice.fromModels(ctx.std.doc, models);
                  return ctx.std.clipboard.duplicateSlice(
                    slice,
                    ctx.std.doc,
                    ctx.parentBlock?.model.id,
                    ctx.blockIndex ? ctx.blockIndex + 1 : 1
                  );
                })
                .catch(console.error);

              return next();
            })
            .run();
        },
      },
    ],
  },
  {
    type: 'delete',
    items: [
      {
        type: 'delete',
        label: 'Delete',
        icon: DeleteIcon,
        disabled: c => c.doc.readonly,
        action: c => {
          // remove text
          const [result] = c.std.command
            .chain()
            .getTextSelection()
            .deleteText()
            .run();

          if (result) {
            return;
          }

          // remove blocks
          c.std.command
            .chain()
            .tryAll(chain => [
              chain.getBlockSelections(),
              chain.getImageSelections(),
            ])
            .getSelectedModels()
            .deleteSelectedModels()
            .run();

          c.toolbar.reset();
        },
      },
    ],
  },
];

export function toolbarMoreButton(toolbar: AffineFormatBarWidget) {
  const context = new FormatBarContext(toolbar);
  const t = toolbar.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const labelMap: Record<string, string> = {
    Copy: t(I18nKeys.editor.format.copy, 'Copy'),
    Duplicate: t(I18nKeys.editor.format.duplicate, 'Duplicate'),
    Delete: t(I18nKeys.editor.format.delete, 'Delete'),
  };
  const groups = toolbar.moreGroups.map(group => ({
    ...group,
    items: group.items.map(item => ({
      ...item,
      label: item.label ? (labelMap[item.label] ?? item.label) : item.label,
    })),
  }));
  const actions = renderGroups(groups, context);

  const moreLabel = t(I18nKeys.editor.format.more, 'More');

  return html`
    <editor-menu-button
      .contentPadding="${'8px'}"
      .button="${html`
        <editor-icon-button aria-label=${moreLabel} .tooltip=${moreLabel}>
          ${MoreVerticalIcon}
        </editor-icon-button>
      `}"
    >
      <div data-size="large" data-orientation="vertical">${actions}</div>
    </editor-menu-button>
  `;
}
