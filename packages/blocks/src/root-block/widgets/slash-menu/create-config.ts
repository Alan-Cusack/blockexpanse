import type { I18nFn } from '@blockexpanse/affine-shared/services';

import {
  identityI18nFn,
  translateSlashLabel,
} from '@blockexpanse/affine-shared/services';

import type {
  SlashMenuConfig,
  SlashMenuItem,
  SlashMenuStaticItem,
} from './config.js';

import { defaultSlashMenuConfig } from './config.js';
import { isGroupDivider, isMenuItemGenerator, isSubMenuItem } from './utils.js';

function localizeStaticItem(
  item: SlashMenuStaticItem,
  t: I18nFn
): SlashMenuStaticItem {
  if (isGroupDivider(item)) {
    return {
      ...item,
      groupName: translateSlashLabel(t, item.groupName),
    };
  }

  if (isSubMenuItem(item)) {
    return {
      ...item,
      name: translateSlashLabel(t, item.name),
      description: item.description
        ? translateSlashLabel(t, item.description)
        : item.description,
      subMenu: item.subMenu.map(sub => localizeStaticItem(sub, t)),
    };
  }

  return {
    ...item,
    name: translateSlashLabel(t, item.name),
    description: item.description
      ? translateSlashLabel(t, item.description)
      : item.description,
  };
}

function localizeSlashMenuItem(item: SlashMenuItem, t: I18nFn): SlashMenuItem {
  if (isMenuItemGenerator(item)) {
    return ctx => {
      const generated = item(ctx);
      return generated.map(sub => localizeStaticItem(sub, t));
    };
  }
  return localizeStaticItem(item, t);
}

/**
 * Create a slash menu config with localized labels.
 * Pass {@link identityI18nFn} to keep English source strings.
 */
export function createSlashMenuConfig(
  t: I18nFn = identityI18nFn,
  base: SlashMenuConfig = defaultSlashMenuConfig
): SlashMenuConfig {
  return {
    ...base,
    items: base.items.map(item => localizeSlashMenuItem(item, t)),
  };
}

export function localizeSlashMenuConfig(
  config: SlashMenuConfig,
  t: I18nFn
): SlashMenuConfig {
  return createSlashMenuConfig(t, config);
}
