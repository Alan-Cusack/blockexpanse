/**
 * @file Vendored from @toeverything/theme v1.1.1 (v2 entrypoint).
 *
 * Builds the v2 CSS-variable maps and exposes the dual-nature `cssVarV2`
 * helper. `cssVarV2` can be called directly (`cssVarV2('text/primary')`) or
 * traversed as a nested object (`cssVarV2.text.primary`) thanks to a Proxy.
 */

import type { AffineThemeKeyV2, NestedTheme } from './variables.js';

import { darkThemeV2, lightThemeV2 } from './variables.js';

export type {
  AffineThemeKeyV2,
  AffineThemeV2,
  NestedTheme,
} from './variables.js';
export {
  darkThemeV2,
  lightThemeV2,
  nestedDarkTheme,
  nestedLightTheme,
} from './variables.js';

/**
 * Turn a `'group/key'` theme id into its v2 CSS custom property name.
 *
 * e.g. `'text/primary'` -> `'--affine-v2-text-primary'`
 */
export function themeToVar(theme: AffineThemeKeyV2): string {
  return `--affine-v2-${theme.split('/').join('-')}`;
}

/** Build a `{ [cssVarName]: value }` map from a flat v2 theme. */
function toCssVariables(theme: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};
  Object.keys(theme).forEach(key => {
    result[themeToVar(key as AffineThemeKeyV2)] = theme[key];
  });
  return result;
}

export const lightCssVariablesV2: Record<string, string> =
  toCssVariables(lightThemeV2);
export const darkCssVariablesV2: Record<string, string> =
  toCssVariables(darkThemeV2);

/** Core (non-proxy) implementation of the v2 css-var accessor. */
function _cssVarV2(key: AffineThemeKeyV2, fallback?: string): string {
  return `var(${themeToVar(key)}${fallback ? `, ${fallback}` : ''})`;
}

/**
 * Build a proxy around `_cssVarV2` that supports nested property access.
 *
 * Reading `proxy.primary` walks the light v2 theme tree; once a leaf key
 * (a known `'group/key'`) is reached, the proxy resolves to the css-var
 * reference. Intermediate nodes return a deeper proxy. Calling the proxy
 * directly (`cssVarV2('text/primary', 'fallback')`) routes to `_cssVarV2`.
 *
 * The static type merges `NestedTheme` onto the function signature so that
 * `cssVarV2.text.primary` type-checks, matching the upstream public surface.
 */
function createCssVarV2Proxy(prefix = ''): typeof _cssVarV2 & NestedTheme {
  const proxy = function (key: AffineThemeKeyV2, fallback?: string): string {
    return _cssVarV2(key, fallback);
  };

  return new Proxy(proxy, {
    get(_target, prop: string) {
      const next = prefix ? `${prefix}/${String(prop)}` : String(prop);
      // A leaf is reached when `next` is a known flat theme key.
      return typeof lightThemeV2[next as AffineThemeKeyV2] === 'string'
        ? _cssVarV2(next as AffineThemeKeyV2)
        : createCssVarV2Proxy(next);
    },
    apply(_target, _thisArg, args: [AffineThemeKeyV2, string?]) {
      const [key, fallback] = args;
      return prefix
        ? _cssVarV2(prefix as AffineThemeKeyV2, key)
        : _cssVarV2(key, fallback);
    },
  }) as typeof _cssVarV2 & NestedTheme;
}

/**
 * Get AFFiNE css variable name type safely (v2)
 * @param key as copied from Figma design. __e.g. `text/primary`__
 *
 * ```ts
 * import { cssVarV2 } from '@blockexpanse/theme/v2';
 *
 * cssVarV2('text/primary');
 * cssVarV2('button/siderbarPrimary/background')
 *
 * // alternative syntax:
 * cssVarV2.text.primary;
 * cssVarV2.button.siderbarPrimary.background;
 * ```
 */
export const cssVarV2: typeof _cssVarV2 & NestedTheme = createCssVarV2Proxy();
