# BlockExpanse

<p align="center">
  <img src="./assets/logo.svg" width="120" alt="BlockExpanse logo" />
</p>

<p align="center">
  <strong>BlockExpanse</strong> - A framework-agnostic block editor with docs + whiteboard<br/>
  <strong>BlockExpanse</strong> - 框架无关的块编辑器,文档与白板一体
</p>

<p align="center">
  <a href="https://github.com/Alan-Cusack/blockexpanse/actions"><img src="https://img.shields.io/github/actions/workflow/status/Alan-Cusack/blockexpanse/test.yml?branch=main&label=CI" alt="CI" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MPL--2.0-blue" alt="License" /></a>
  <img src="https://img.shields.io/badge/npm%20scope-@blockexpanse-6880ff" alt="npm scope" />
  <img src="https://img.shields.io/badge/version-0.0.1-6880ff" alt="version" />
</p>

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh-CN.md">中文</a>
</p>

---

### Overview

**BlockExpanse** is an open-source block editor toolkit that bundles a **Notion-style document editor** and an **infinite-canvas whiteboard** into a single framework-agnostic package. Build rich editing experiences in Vue, React, or vanilla JS - no React lock-in.

Every editor is a native **Web Component**. Mount it with a few lines of code, extend it with custom blocks, and wire up real-time collaboration through CRDT (Yjs). An AI panel and edgeless copilot surface are built in - just plug in your LLM.

|           | BlockExpanse                       |
| --------- | ---------------------------------- |
| npm scope | `@blockexpanse` (published to npm) |
| Version   | `0.0.1`                            |
| License   | [MPL 2.0](./LICENSE)               |

### Why BlockExpanse?

BlockExpanse is built on [BlockSuite](https://github.com/toeverything/blocksuite) `v0.19.5` (the engine behind [AFFiNE](https://affine.pro/)), maintained as an independent fork focused on framework-agnostic DX.

|                       | BlockNote            | BlockExpanse                           |
| --------------------- | -------------------- | -------------------------------------- |
| Whiteboard (Edgeless) | ❌                   | ✅ Canvas + Doc, seamless mode switch  |
| Framework             | React only           | Web Components (Vue / React / vanilla) |
| Collaboration         | Yjs (bolt-on)        | CRDT-native data flow                  |
| AI surface            | Add-on (XL tier)     | Built-in AI Panel + Edgeless Copilot   |
| Custom blocks         | React component spec | Lit/Web Component spec                 |
| License               | MPL-2.0 / GPL (XL)   | MPL-2.0                                |

> **Actively maintained.** Issues and pull requests are welcome at [github.com/Alan-Cusack/blockexpanse](https://github.com/Alan-Cusack/blockexpanse).

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
| **Image / link preview** | `CloudBlobSource` for images/attachments; optional `LinkPreviewExtension` for bookmarks. See [blob storage guide](packages/docs/guide/blob-storage.md).                                                                                              |

### Quick Start

**Requirements:** Node.js `>=18.19.0 <21.0.0`, Yarn `4.5.3` (via [Corepack](https://nodejs.org/api/corepack.html)).

```sh
corepack enable
git clone https://github.com/Alan-Cusack/blockexpanse.git
cd blockexpanse
yarn install
yarn dev
```

| URL                                                 | Description                                                                              |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| http://localhost:5173/starter/?init                 | Recommended local entry                                                                  |
| http://localhost:5173/starter/?blobSource=cloud,idb | Cloud blob persistence demo (see [blob-storage.md](packages/docs/guide/blob-storage.md)) |
| http://localhost:5173/starter/                      | Starter preset list                                                                      |
| http://localhost:5173                               | Full demo (persistence & collaboration)                                                  |

**Minimal embed:**

```ts
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';
import '@blockexpanse/theme/style.css';

// Register all Web Components (required)
blocksEffects();
presetsEffects();

const doc = createEmptyDoc().init();
const editor = new PageEditor();
editor.doc = doc;
document.body.appendChild(editor);

const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
doc.updateBlock(paragraph, { text: new Text('Hello BlockExpanse!') });
```

**Install:**

```sh
npm install @blockexpanse/presets yjs
```

> `presets` pulls in `blocks`, `store`, `theme`, and all internal packages as transitive dependencies - one install is all you need.

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

### Framework Integration

Every editor is a custom element (`<page-editor>`, `<edgeless-editor>`). Mount it from any framework:

| Framework      | How                                                             | Playground example                          |
| -------------- | --------------------------------------------------------------- | ------------------------------------------- |
| **Vanilla JS** | `new PageEditor(); document.body.appendChild(editor)`           | [/minimal/](http://localhost:5173/minimal/) |
| **React**      | `<page-editor ref={ref} />` + set `.doc` in `useEffect`         | [/react/](http://localhost:5173/react/)     |
| **Vue**        | `<page-editor :doc="doc" />` (Vue passes object props natively) | [/vue/](http://localhost:5173/vue/)         |

> **React note:** React doesn't pass non-string attributes to custom elements, so set `editor.doc = doc` via a ref in `useEffect`, not as a JSX prop. Vue handles this automatically with `:doc="doc"`.

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

### Optional: Blob Storage & Link Preview

Images are stored as blob references (`sourceId`), not URLs. Persist blobs via **`CloudBlobSource`** (see [blob-storage guide](packages/docs/guide/blob-storage.md)). Bookmark/embed previews still use opt-in **`LinkPreviewExtension`**:

```ts
import { LinkPreviewExtension } from '@blockexpanse/affine-shared/services';

// extensions: [
//   LinkPreviewExtension('https://your.api/link-preview'),
// ]
```

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
