# Quick Start

For a swift start with **BlockExpanse** (`@blockexpanse/*`), you can run the playground in this repo or install packages into your project.

::: info
BlockExpanse packages are published under `@blockexpanse/*` on npm. Run `yarn dev` in this repo to try the playground.
:::

## Bootstrap Project

BlockExpanse works with all common frameworks. Start from this repository's Playground:

```sh
git clone https://github.com/Alan-Cusack/blockexpanse.git
cd blockexpanse
yarn install
yarn dev
```

Open [http://localhost:5173/starter/?init](http://localhost:5173/starter/?init) in your browser.

## Init From Scratch

To use BlockExpanse in your existing project, install the presets package and its peer dependency:

```sh
npm install @blockexpanse/presets yjs
```

That single command pulls in everything you need - `@blockexpanse/blocks`, `@blockexpanse/store`, `@blockexpanse/theme`, and all internal packages come in as transitive dependencies of `presets`.

What you get:

- `@blockexpanse/presets` - the prebuilt editors (`PageEditor`, `EdgelessEditor`) and opt-in UI fragments.
- `@blockexpanse/blocks` + `@blockexpanse/store` (transitive) - first-party blocks and the CRDT document model.
- `@blockexpanse/theme` (transitive) - the `--affine-*` CSS variables the editors consume.
- `yjs` (peer) - the CRDT runtime powering the document model.

Then you can use the prebuilt `PageEditor` out of the box, with an initialized `doc` instance attached as its document model:

::: code-sandbox {coderHeight=460 previewHeight=300}

```ts /index.ts [active]
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';
import '@blockexpanse/theme/style.css';

// 1. Register all Web Components (required before rendering)
blocksEffects();
presetsEffects();

// 2. Create an empty doc and initialize the default block tree
const doc = createEmptyDoc().init();

// 3. Mount the editor
const editor = new PageEditor();
editor.doc = doc;
document.body.appendChild(editor);

// 4. Write some content into the first paragraph
const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
doc.updateBlock(paragraph, { text: new Text('Hello BlockExpanse!') });
```

:::

### What each step does

| Step                                      | Why it's needed                                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blocksEffects()` + `presetsEffects()`    | BlockExpanse editors are Web Components. These calls register every block, widget, and editor element (`<page-editor>`, `<affine-page-root>`, …) with the browser. Skip this and nothing renders. |
| `createEmptyDoc().init()`                 | Creates a `Doc` with the default block tree (`affine:page` → `affine:surface` → `affine:note` → `affine:paragraph`). `init()` scaffolds that tree so the editor has something to render.          |
| `@import '@blockexpanse/theme/style.css'` | Injects all `--affine-*` CSS variables (colors, fonts, shadows). Without it the editor renders unstyled.                                                                                          |
| `editor.doc = doc`                        | Attaches the document model to the editor component.                                                                                                                                              |

### Using the editor as an HTML tag

`PageEditor` is a standard Web Component, so you can also use it declaratively:

```html
<page-editor></page-editor>
```

```ts
const editor = document.querySelector('page-editor');
editor.doc = createEmptyDoc().init();
```

`EdgelessEditor` (the whiteboard mode) works the same way — swap `PageEditor` for `EdgelessEditor` (or `<edgeless-editor>`). To switch between Doc and Edgeless modes on the same page, use `AffineEditorContainer`.

For the `doc.getBlockByFlavour` and `doc.updateBlock` APIs used here, see [Block Tree Basics](./working-with-block-tree#block-tree-basics).

### Next steps

- Read the [Concepts Cheat Sheet](./concepts) for a 5-minute tour of the vocabulary (flavour, schema, effects, …).
- Follow the [Custom Block Tutorial](./custom-block-tutorial) to build your first block in 10 minutes.
- Set up [collaboration](./collaboration) - local persistence, cross-tab, or real-time WebSocket in one line.
- Browse the [component types](./component-types) and [BlockExpanse components](../components/overview).

### Mermaid diagrams

Code blocks with `mermaid` as the language render a live diagram preview:

````
Type ```mermaid in a code block, then write diagram syntax:
graph TD; A-->B; B-->C;
````

The preview updates as you type (300ms debounce). Toggle it with the "Diagram Preview" button. Mermaid is loaded on demand (dynamic import) - no bundle cost until first use.
