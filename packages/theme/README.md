# @blockexpanse/theme

Design tokens and CSS variables for BlockExpanse.

This package is vendored from [`@toeverything/theme`](https://github.com/toeverything/design) `v1.1.1`
(MPL-2.0), the design token library originally built for [AFFiNE](https://affine.pro/).
It is shipped as a local workspace package so BlockExpanse is fully isolated from the
upstream `@toeverything/*` npm scope while keeping the same design language.

## Usage

```ts
import { baseTheme, cssVar } from '@blockexpanse/theme';
import { cssVarV2 } from '@blockexpanse/theme/v2';
```

```css
@import '@blockexpanse/theme/style.css';
```

## License

MPL-2.0. See [LICENSE](./LICENSE).
