import type { EditorHost } from '@blockexpanse/block-std';

import {
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

import { toast } from './toast.js';

/**
 * Resolve i18n message via host DI and show a toast.
 */
export const toastI18n = (
  editorHost: EditorHost,
  key: string,
  fallback: string,
  params?: Record<string, string | number>,
  duration = 2500
) => {
  const t = editorHost.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  return toast(editorHost, t(key, fallback, params), duration);
};
