# Quick Start

For a swift start with **BlockExpanse** (`@blockexpanse/*`), you can run the playground in this repo or install packages into your project.

::: info
BlockExpanse packages are published under `@blockexpanse/*`. Run `yarn dev` in this repo to try the playground.
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

To use BlockExpanse in your existing project, simply install these core packages:

```sh
yarn install \
  @blockexpanse/presets@canary \
  @blockexpanse/blocks@canary \
  @blockexpanse/store@canary
```

Key takeaways in the snippet above:

- The `@blockexpanse/presets` package contains the prebuilt editors and opt-in additional UI components.
- To work with the BlockExpanse document model and first-party blocks, the `@blockexpanse/store` and `@blockexpanse/blocks` packages are required.
- The BlockExpanse `canary` versions are released daily based on the master branch, which is also used in production in [AFFiNE](https://github.com/toeverything/AFFiNE).

Then you can use the prebuilt `PageEditor` out of the box, with an initialized `doc` instance attached as its document model:

::: code-sandbox {coderHeight=420 previewHeight=300}

```ts /index.ts [active]
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { Text } from '@blockexpanse/store';

(async () => {
  // Init editor with default block tree
  const doc = createEmptyDoc().init();
  const editor = new PageEditor();
  editor.doc = doc;
  document.body.appendChild(editor);

  // Update block node with some initial text content
  const paragraphs = doc.getBlockByFlavour('affine:paragraph');
  const paragraph = paragraphs[0];
  doc.updateBlock(paragraph, { text: new Text('Hello World!') });
})();
```

:::

The `PageEditor` here is a standard web component that can also be reused with `<page-editor>` HTML tag. Another `EdgelessEditor` also works similarly - simply attach the `editor` with a `doc` and you are all set.

For the `doc.getBlockByFlavour` and `doc.updateBlock` APIs used here, please see the [introduction](./working-with-block-tree#block-tree-basics) about block tree basics for further details.

As the next step, you can choose to:

- Explore how BlockExpanse break down editors into different [component types](./component-types). Taking a look at the list of [BlockExpanse components](../components/overview) may also be helpful.
- Try collaborative editing [following the steps](https://github.com/Alan-Cusack/blockexpanse/blob/master/BUILDING.md#test-collaboration).
- Learn about [basic concepts](./working-with-block-tree) in BlockExpanse framework that are used throughout the development of editors.

Note that BlockExpanse is still under rapid development. For any questions or feedback, feel free to let us know!
