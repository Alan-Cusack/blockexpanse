# BlockExpanse

<p align="center">
  <img src="./assets/logo.svg" width="120" alt="BlockExpanse logo" />
</p>

<p align="center">
  <strong>BlockExpanse</strong> - A block-based document editor & whiteboard toolkit<br/>
  <strong>BlockExpanse</strong> - 块级文档编辑器与白板工具包
</p>

<p align="center">
  <a href="https://github.com/Alan-Cusack/blockexpanse/actions"><img src="https://img.shields.io/github/actions/workflow/status/Alan-Cusack/blockexpanse/test.yml?branch=main&label=CI" alt="CI" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MPL--2.0-blue" alt="License" /></a>
  <img src="https://img.shields.io/badge/npm%20scope-@blockexpanse-6880ff" alt="npm scope" />
  <img src="https://img.shields.io/badge/version-1.1.0-6880ff" alt="version" />
</p>

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh-CN.md">中文</a>
</p>

---

### Overview

**BlockExpanse** is an independent fork and customization of [BlockSuite](https://github.com/toeverything/blocksuite) **v0.19.5** - the open-source block editor framework originally built for [AFFiNE](https://affine.pro/).

Like [BlockNote](https://www.blocknotejs.org/) focuses on a polished out-of-the-box React editor, BlockExpanse (via BlockSuite) provides **Web Components**–based editors that are **framework-agnostic** (Vue, React, or vanilla JS). You can embed a full document editor and canvas whiteboard in your app, extend them with custom blocks, and wire up collaboration through CRDT (Yjs).

|               | BlockExpanse                                                 |
| ------------- | ------------------------------------------------------------ |
| npm scope     | `@blockexpanse` (fully isolated from upstream `@blocksuite`) |
| Version       | `1.1.0` (independent release from `1.0.0`)                   |
| Upstream base | BlockSuite `v0.19.5`                                         |
| License       | [MPL 2.0](./LICENSE)                                         |

> **Maintenance:** This fork is actively maintained. Features such as i18n, AI integration hooks, and table improvements will evolve based on product needs - contributions and feedback are welcome.

### What You Get

#### Document Editor (`PageEditor`)

A Notion-like **block-based rich text editor**:

- Headings, lists, quotes, code blocks, dividers, toggles
- Slash (`/`) menu, floating format bar, drag-and-drop blocks
- Embeds (YouTube, GitHub, Figma, HTML…), linked documents, bookmarks
- Database views (table / kanban / calendar), attachments, comments
- Markdown / HTML import & export, snapshots, multi-doc state

#### Whiteboard (`EdgelessEditor`)

A **canvas editor** that shares the same document model as the page editor:

- Shapes, connectors, freehand, text, frames, mind-map elements
- Images, grouping, layers, presentation mode
- Seamless switch between **Doc mode** and **Edgeless mode** on the same page
- Toolbar, element inspector, copilot selection on canvas

#### BlockExpanse Enhancements

| Area                     | Description                                                                                                                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **i18n**                 | Built-in **`zh-CN`** (default) and **`en`** via DI `I18nProvider`. Slash menu, placeholders, format bar, Data View, toasts, keyboard toolbar, and more. Host apps can override messages or plug in i18next.                                          |
| **AI hooks**             | Ready-to-wire **AI Panel** (`AffineAIPanelWidget`), **Ask AI** on format bar, and **Edgeless Copilot** selection panel. Playground ships demo actions (improve writing, summarize, translate, tone…); **you provide the LLM backend** in production. |
| **Table block**          | Custom table block with read-only guards and cell editing UX improvements.                                                                                                                                                                           |
| **Image / link preview** | Optional `ImageProxyExtension` & `LinkPreviewExtension` - no third-party Worker bound by default.                                                                                                                                                    |

### Quick Start

**Requirements:** Node.js `>=18.19.0 <21.0.0`, Yarn `4.5.3` (via [Corepack](https://nodejs.org/api/corepack.html)).

```sh
corepack enable
git clone https://github.com/Alan-Cusack/blockexpanse.git
cd blockexpanse
yarn install
yarn dev
```

| URL                                 | Description                             |
| ----------------------------------- | --------------------------------------- |
| http://localhost:5173/starter/?init | Recommended local entry                 |
| http://localhost:5173/starter/      | Starter preset list                     |
| http://localhost:5173               | Full demo (persistence & collaboration) |

**Minimal embed (with i18n):**

```ts
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import {
  createBuiltinI18n,
  I18nExtension,
} from '@blockexpanse/affine-shared/services';

const i18n = createBuiltinI18n({ locale: 'zh-CN' }); // or 'en'

const { doc } = createEmptyDoc();
const editor = new PageEditor();
editor.doc = doc;
// Mount editor and register extensions, e.g. I18nExtension(i18n)
```

**Install from CNB registry** (configure registry in your host project):

```sh
yarn add @blockexpanse/presets@1.1.0 @blockexpanse/blocks@1.1.0 @blockexpanse/store@1.1.0 yjs
```

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│  @blockexpanse/presets   PageEditor / EdgelessEditor    │
├─────────────────────────────────────────────────────────┤
│  @blockexpanse/blocks    Blocks, widgets, AI panel UI   │
│  @blockexpanse/affine    Affine block implementations   │
├─────────────────────────────────────────────────────────┤
│  @blockexpanse/block-std   Block tree, selection, DnD   │
│  @blockexpanse/inline      Inline rich text             │
│  @blockexpanse/store       CRDT doc model (Yjs)         │
└─────────────────────────────────────────────────────────┘
```

All editors and widgets are **native Web Components** - use them from Vue, React, or plain HTML.

### i18n

```ts
import {
  createBuiltinI18n,
  I18nExtension,
  I18nKeys,
} from '@blockexpanse/affine-shared/services';

const i18n = createBuiltinI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      [I18nKeys.editor.slash.heading1]: '一级标题', // override single key
    },
  },
});

// extensions: [I18nExtension(i18n), ...]
// i18n.setLocale('en')
```

Without a provider, English fallback strings are used (same as upstream behavior).

### AI Integration

BlockExpanse preserves BlockSuite's AI UI surface. In your host app, configure the AI panel widget:

```ts
import type { AffineAIPanelWidget } from '@blockexpanse/blocks';

function configureAIPanel(panel: AffineAIPanelWidget) {
  panel.config = {
    // Implement streaming, model calls, error handling…
    // See packages/playground/apps/_common/ai/demo-config.ts for demo actions
  };
}
```

Demo actions in Playground: improve writing, make shorter/longer, summarize, explain, change tone, translate, continue writing, etc. **Replace demo handlers with your API** before production.

### Optional: Image Proxy & Link Preview

The SDK does **not** bind any third-party Worker by default. External image / bookmark previews require host injection:

```ts
import {
  ImageProxyExtension,
  LinkPreviewExtension,
} from '@blockexpanse/affine-shared/services';

// extensions: [
//   ImageProxyExtension('https://your.cdn/api/image-proxy'),
//   LinkPreviewExtension('https://your.api/link-preview'),
// ]
```

### Publish to CNB

Daily dev does **not** require `CNB_TOKEN`. Only when publishing:

```sh
export CNB_TOKEN=your_token
yarn ci:publish:cnb
```

Configure your CNB registry URL in `scripts/publish-cnb.mjs`.

> If your global `~/.yarnrc.yml` contains a literal `${CNB_TOKEN}`, every Yarn command will fail. Remove it and only `export CNB_TOKEN` at publish time.

### Other Commands

```sh
yarn build          # Build all packages and Playground
yarn dev:docs       # Start the docs site
yarn preview        # Preview the production build
```

### Resources

- Repository: [github.com/Alan-Cusack/blockexpanse](https://github.com/Alan-Cusack/blockexpanse)
- Build & test: [BUILDING.md](./BUILDING.md)
- Local docs: `yarn dev:docs`
- Upstream reference: [BlockSuite docs](https://blocksuite.io/guide/overview.html)

---

## License

[MPL 2.0](./LICENSE)
