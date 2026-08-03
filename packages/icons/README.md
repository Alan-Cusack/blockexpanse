# `@blockexpanse/icons`

Vendored icon set from [toeverything/icons](https://github.com/toeverything/icons), MIT licensed.

## Usage

```ts
import { PlusIcon } from '@blockexpanse/icons/lit';
```

React entry:

```ts
import { PlusIcon } from '@blockexpanse/icons/rc';
```

## Sync upstream

1. Copy the published `dist/` from the matching upstream icons package into `bundled/` (exclude `*.map`).
2. Re-apply the NodeNext type fix: move `icons/auto/24/{lit,rc}.d.ts` into `{lit,rc}/index.d.ts` (imports use `./Name.js`), and point root `lit.d.ts` / `rc.d.ts` at `./icons/auto/24/{lit,rc}/index.js`.
3. Bump this package version with the rest of the monorepo.
