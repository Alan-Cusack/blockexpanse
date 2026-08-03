import type { EditorHost } from '@blockexpanse/block-std';
import type { TemplateResult } from 'lit';

import {
  CopyIcon,
  DatabaseTableViewIcon20,
  LinkedDocIcon,
} from '@blockexpanse/affine-components/icons';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { matchFlavours } from '@blockexpanse/affine-shared/utils';
import { tableViewMeta } from '@blockexpanse/data-view/view-presets';
import { assertExists } from '@blockexpanse/global/utils';

import { convertToDatabase } from '../../../database-block/data-source.js';
import { DATABASE_CONVERT_WHITE_LIST } from '../../../database-block/utils/block-utils.js';
import {
  convertSelectedBlocksToLinkedDoc,
  getTitleFromSelectedModels,
  notifyDocCreated,
  promptDocTitle,
} from '../../utils/render-linked-doc.js';

export interface QuickActionConfig {
  id: string;
  name: string;
  disabledToolTip?: string;
  icon: TemplateResult<1>;
  hotkey?: string;
  showWhen: (host: EditorHost) => boolean;
  enabledWhen: (host: EditorHost) => boolean;
  action: (host: EditorHost) => void;
}

export function createQuickActionConfig(
  t: I18nFn = identityI18nFn
): QuickActionConfig[] {
  return [
    {
      id: 'copy',
      name: t(I18nKeys.editor.format.copy, 'Copy'),
      disabledToolTip: undefined,
      icon: CopyIcon,
      hotkey: undefined,
      showWhen: () => true,
      enabledWhen: () => true,
      action: host => {
        host.std.command
          .chain()
          .getSelectedModels()
          .with({
            onCopy: () => {
              toastI18n(
                host,
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
      id: 'convert-to-database',
      name: t(I18nKeys.editor.format.toTable, 'Create Table'),
      disabledToolTip: t(
        I18nKeys.editor.format.toTable,
        'Contains Block types that cannot be converted to Database'
      ),
      // Keep English fallback for disabled tip via dedicated key later; for now reuse toTable name only for name.
      icon: DatabaseTableViewIcon20,
      showWhen: host => {
        const [_, ctx] = host.std.command
          .chain()
          .getSelectedModels({
            types: ['block', 'text'],
          })
          .run();
        const { selectedModels } = ctx;
        if (!selectedModels || selectedModels.length === 0) return false;

        const firstBlock = selectedModels[0];
        assertExists(firstBlock);
        if (matchFlavours(firstBlock, ['affine:database'])) {
          return false;
        }

        return true;
      },
      enabledWhen: host => {
        const [_, ctx] = host.std.command
          .chain()
          .getSelectedModels({
            types: ['block', 'text'],
          })
          .run();
        const { selectedModels } = ctx;
        if (!selectedModels || selectedModels.length === 0) return false;

        return selectedModels.every(block =>
          DATABASE_CONVERT_WHITE_LIST.includes(block.flavour)
        );
      },
      action: host => {
        convertToDatabase(host, tableViewMeta.type);
      },
    },
    {
      id: 'convert-to-linked-doc',
      name: t(I18nKeys.editor.format.turnIntoLinkedDoc, 'Create Linked Doc'),
      icon: LinkedDocIcon,
      hotkey: `Mod-Shift-l`,
      showWhen: host => {
        const [_, ctx] = host.std.command
          .chain()
          .getSelectedModels({
            types: ['block'],
          })
          .run();
        const { selectedModels } = ctx;
        return !!selectedModels && selectedModels.length > 0;
      },
      enabledWhen: host => {
        const [_, ctx] = host.std.command
          .chain()
          .getSelectedModels({
            types: ['block'],
          })
          .run();
        const { selectedModels } = ctx;
        return !!selectedModels && selectedModels.length > 0;
      },
      action: host => {
        const [_, ctx] = host.std.command
          .chain()
          .getSelectedModels({
            types: ['block'],
            mode: 'highest',
          })
          .draftSelectedModels()
          .run();
        const { selectedModels, draftedModels } = ctx;
        assertExists(selectedModels);
        if (!selectedModels.length || !draftedModels) return;

        host.selection.clear();

        const doc = host.doc;
        const autofill = getTitleFromSelectedModels(selectedModels);
        void promptDocTitle(host, autofill).then(title => {
          if (title === null) return;
          convertSelectedBlocksToLinkedDoc(
            host.std,
            doc,
            draftedModels,
            title
          ).catch(console.error);
          notifyDocCreated(host, doc);
        });
      },
    },
  ];
}

/** English defaults for hotkey registration. */
export const quickActionConfig = createQuickActionConfig();
