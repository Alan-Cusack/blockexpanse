import type { ExtensionType } from '@blockexpanse/block-std';

import { createIdentifier } from '@blockexpanse/global/di';

import type {
  I18nFn,
  I18nMessagePacks,
  I18nMessages,
  I18nService,
  LocaleId,
} from '../i18n/keys.js';

import { enMessages } from '../i18n/locales/en.js';
import { zhCNMessages } from '../i18n/locales/zh-CN.js';

export {
  persistDataViewName,
  translateDataViewLabel,
} from '../i18n/data-view-source-map.js';
export { translateKeyboardLabel } from '../i18n/keyboard-source-map.js';
export type {
  I18nFn,
  I18nMessagePacks,
  I18nMessages,
  I18nService,
  LocaleId,
} from '../i18n/keys.js';
export { I18nKeys } from '../i18n/keys.js';
export { translatePieLabel } from '../i18n/pie-source-map.js';
export { translateSlashLabel } from '../i18n/slash-source-map.js';

export const I18nProvider = createIdentifier<I18nService>('AffineI18nService');

export function I18nExtension(service: I18nService): ExtensionType {
  return {
    setup: di => {
      di.addImpl(I18nProvider, service);
    },
  };
}

const builtinPacks: I18nMessagePacks = {
  en: enMessages,
  'zh-CN': zhCNMessages,
};

function interpolate(
  template: string,
  params?: Record<string, string | number>
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = params[key];
    return value === undefined || value === null ? `{${key}}` : String(value);
  });
}

function deepMergeMessages(
  base: I18nMessages,
  override?: I18nMessages
): I18nMessages {
  if (!override) return { ...base };
  return { ...base, ...override };
}

export type CreateBuiltinI18nOptions = {
  /** Defaults to `zh-CN`. */
  locale?: LocaleId;
  /** Merge/override builtin message packs. */
  messages?: Partial<Record<LocaleId, I18nMessages>>;
};

export function createBuiltinI18n(
  options: CreateBuiltinI18nOptions = {}
): I18nService {
  let locale: LocaleId = options.locale ?? 'zh-CN';
  const packs: I18nMessagePacks = {
    en: deepMergeMessages(builtinPacks.en, options.messages?.en),
    'zh-CN': deepMergeMessages(
      builtinPacks['zh-CN'],
      options.messages?.['zh-CN']
    ),
  };

  const t: I18nFn = (key, fallback, params) => {
    const fromLocale = packs[locale]?.[key];
    if (fromLocale !== undefined) {
      return interpolate(fromLocale, params);
    }
    const fromEn = packs.en?.[key];
    if (fromEn !== undefined) {
      return interpolate(fromEn, params);
    }
    return interpolate(fallback, params);
  };

  const service: I18nService = {
    t,
    getLocale: () => locale,
    setLocale: next => {
      locale = next;
    },
    get locale() {
      return locale;
    },
  };

  return service;
}

/** Identity translator used when no I18nProvider is registered. */
export const identityI18nFn: I18nFn = (_key, fallback, params) =>
  interpolate(fallback, params);
