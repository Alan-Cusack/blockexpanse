/**
 * @file Slash menu extension helper.
 *
 * BlockExpanse's slash menu has no incremental "add one item" API — you must
 * build a new `SlashMenuConfig`. This helper wraps that into a simple
 * `addSlashMenuItem()` call.
 */

import type { AffineSlashMenuContext } from '@blockexpanse/blocks/widgets/slash-menu';
import type {
  defaultSlashMenuConfig,
  type SlashMenuConfig,
  SlashMenuItem,
} from '@blockexpanse/blocks/widgets/slash-menu/config';

export interface SlashMenuItemOptions {
  /** Display name shown in the menu. */
  name: string;
  /** Block flavour to insert when the item is selected. */
  flavour: string;
  /** Emoji or short text shown as the icon. */
  icon?: string;
  /** Description shown below the name. */
  description?: string;
  /** Aliases for fuzzy search (e.g. `['callout', 'box']`). */
  alias?: string[];
  /**
   * Called when the user selects this item. Receives the slash menu context
   * (root component + model). Default action if not provided: insert a new
   * block of the given `flavour` after the current block.
   */
  action?: (ctx: AffineSlashMenuContext) => void | Promise<void>;
}

/**
 * Add a custom item to the slash menu.
 *
 * Returns a new `SlashMenuConfig` — the original is not modified.
 * Pass the result to the slash menu widget after editor mount:
 *
 * ```ts
 * import { addSlashMenuItem } from '@blockexpanse/presets';
 *
 * const config = addSlashMenuItem(defaultSlashMenuConfig, {
 *   name: 'Callout',
 *   flavour: 'my:callout',
 *   icon: '💡',
 *   alias: ['callout', 'box', 'info'],
 * });
 *
 * // Set on widget: slashMenuWidget.config = config;
 * ```
 *
 * @param baseConfig - The starting config (usually `defaultSlashMenuConfig`)
 * @param item - The item to add
 * @param group - Optional group name to insert before. Defaults to appending at the end.
 */
export function addSlashMenuItem(
  baseConfig: SlashMenuConfig,
  item: SlashMenuItemOptions,
  group?: string
): SlashMenuConfig {
  const actionItem: SlashMenuItem = {
    name: item.name,
    icon: item.icon as never, // SlashMenuActionItem.icon is TemplateResult; string renders fine in practice
    description: item.description,
    alias: item.alias,
    action:
      item.action ??
      ((ctx: AffineSlashMenuContext) => {
        const { rootComponent, model } = ctx;
        const doc = model.doc;
        const parent = doc.getParent(model);
        if (parent) {
          doc.addBlock(
            item.flavour as never,
            {},
            parent.id,
            parent.children.indexOf(model) + 1
          );
        }
        rootComponent.std.selection.clear();
      }),
  } as SlashMenuItem;

  const newItems = [...baseConfig.items];

  if (group) {
    // Insert before the named group divider, or at the end if not found
    const groupIndex = newItems.findIndex(
      i =>
        typeof i === 'object' &&
        'groupName' in i &&
        (i as { groupName?: string }).groupName === group
    );
    if (groupIndex >= 0) {
      newItems.splice(groupIndex, 0, actionItem);
    } else {
      newItems.push(actionItem);
    }
  } else {
    newItems.push(actionItem);
  }

  return {
    ...baseConfig,
    items: newItems,
  };
}

export { defaultSlashMenuConfig };
export type { AffineSlashMenuContext, SlashMenuConfig };
