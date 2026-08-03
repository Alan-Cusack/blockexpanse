import {
  type I18nFn,
  I18nProvider,
  identityI18nFn,
  persistDataViewName,
  translateDataViewLabel,
} from '@blockexpanse/affine-shared/services';

export function resolveI18nFn(): I18nFn {
  const host = document.querySelector('editor-host') as {
    std?: { getOptional: (id: typeof I18nProvider) => { t: I18nFn } | null };
  } | null;
  return host?.std?.getOptional(I18nProvider)?.t ?? identityI18nFn;
}

export function tr(source: string): string {
  return translateDataViewLabel(resolveI18nFn(), source);
}

export function t(): I18nFn {
  return resolveI18nFn();
}

/** Prefer English defaults when the edited label matches a known translation. */
export function persistViewName(text: string): string {
  return persistDataViewName(resolveI18nFn(), text);
}
