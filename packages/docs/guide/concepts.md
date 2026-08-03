# Concepts Cheat Sheet

BlockExpanse has a rich vocabulary. This page covers what you **must** know to get started, and what you can defer until you need it.

## Must-know (to render your first editor)

### flavour

A string identifier for a block type, in `namespace:name` format. The default blocks use the `affine:` namespace (e.g. `affine:paragraph`, `affine:note`, `affine:page`). You'll see flavours when querying blocks:

```ts
const paragraphs = doc.getBlockByFlavour('affine:paragraph');
```

### effects()

A registration function that calls `customElements.define(...)` for every Web Component in the editor. **You must call both before mounting any editor**, or nothing renders:

```ts
import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';

blocksEffects(); // registers block + widget elements
presetsEffects(); // registers <page-editor>, <edgeless-editor>, fragments
```

### Doc / DocCollection

A `Doc` is a single block tree (one document). A `DocCollection` is a container that holds docs + schema + blob/awareness sources. `createEmptyDoc()` creates a collection with one doc and returns it:

```ts
const doc = createEmptyDoc().init(); // init() scaffolds page > surface > note > paragraph
```

### Theme CSS

The editors consume `--affine-*` CSS variables. You must import the theme stylesheet once in your app, or the editor renders unstyled:

```ts
import '@blockexpanse/theme/style.css';
```

Switch light/dark by setting `data-theme` on `<html>`: `document.documentElement.dataset.theme = 'dark'`.

---

## Should-know (to customize blocks)

### Schema

Defines the shape of a block type: its `flavour`, `props` (typed fields, some backed by Yjs for collaboration), and `metadata` (version + role). Created via `defineBlockSchema`.

### Role

Every block has a role that governs nesting: `root` (top of tree, e.g. `affine:page`), `hub` (can contain children, e.g. `affine:note`), or `content` (leaf, e.g. `affine:paragraph`).

### Spec (BlockSpec)

The full definition of a block type, combining four parts:

| Part      | What it is                                          |
| --------- | --------------------------------------------------- |
| `schema`  | The data shape (flavour, props, role)               |
| `service` | Lifecycle + business logic (extends `BlockService`) |
| `view`    | The Lit Web Component that renders the block        |
| `widgets` | Optional UI overlays (slash menu, format bar)       |

A spec is registered so the editor knows how to render and manage that block type.

### View (BlockComponent)

A Lit `LitElement` subclass that renders the block's UI. The `@customElement` decorator (or `customElements.define`) registers it. The view reads from the block model and emits updates.

---

## Nice-to-know (advanced)

| Concept               | When you need it                                                                     |
| --------------------- | ------------------------------------------------------------------------------------ |
| `service`             | When your block needs custom commands, keyboard handling, or lifecycle hooks         |
| `widgets`             | When you want overlay UI attached to a block (e.g. a custom toolbar)                 |
| `slots`               | Event emission pattern used internally (`Slot` from `@blockexpanse/global`)          |
| `extensions`          | DI-based plugins that modify editor behavior (i18n, theme override, AI panel config) |
| `providers`           | DI tokens for services like DocMode, ParseDocUrl, RefNodeSlots                       |
| `command`             | A transactional API for mutating the block tree (like CodeMirror commands)           |
| `Std` (BlockStdScope) | The per-editor scope holding services, selection, and the command chain              |
| `host`                | The root element of a single editor instance, exposing the std scope                 |

---

## Where to go next

- **Build your first custom block**: [Custom Block Tutorial](./custom-block-tutorial)
- **Understand the block tree**: [Working with Block Tree](./working-with-block-tree)
- **Deep dive into specs**: [Block Spec](./block-spec) (and its sub-pages: Schema, Service, View, Widgets)
