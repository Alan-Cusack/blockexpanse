# Custom Block Tutorial

This tutorial walks you through creating a custom block from scratch: defining its schema, writing its view, registering it with the editor, and inserting it into a document. By the end you'll have a working "callout" block you can type `/callout` to insert.

::: tip Prerequisites
Read the [Concepts Cheat Sheet](./concepts) first - especially the definitions of **flavour**, **schema**, **role**, **spec**, and **view**.
:::

## How blocks are structured

Every block in BlockExpanse is defined by three pieces:

1. **Schema** (`defineBlockSchema`) - the data shape: flavour, props, role.
2. **View** (a Lit `LitElement`) - the UI component that renders the block.
3. **Spec** (`BlockViewExtension`) - wires the schema to the view and registers it with the editor.

The built-in `affine:divider` block is the simplest example. Its spec is just:

```ts
import { BlockViewExtension } from '@blockexpanse/block-std';
import { literal } from 'lit/static-html.js';

export const DividerBlockSpec = [
  BlockViewExtension('affine:divider', literal`affine-divider`),
];
```

That says: "the `affine:divider` flavour is rendered by the `<affine-divider>` custom element." The schema and view component live in separate files.

## Step 1: Define the schema

The schema declares the block's flavour, its typed props, and its role in the block tree.

```ts
// callout-model.ts
import { defineBlockSchema, type SchemaToModel } from '@blockexpanse/block-std';

export const CalloutBlockSchema = defineBlockSchema({
  flavour: 'my:callout',
  props: () => ({
    text: { '$blockexpanse:internal:text$': true } as unknown as {
      '$blockexpanse:internal:text$': true;
    },
    type: 'info' as 'info' | 'success' | 'warning' | 'error',
  }),
  metadata: {
    version: 1,
    role: 'content', // a leaf block - cannot have children
  },
});

export type CalloutBlockModel = SchemaToModel<typeof CalloutBlockSchema>;
```

Key points:

- **`flavour: 'my:callout'`** - use your own namespace (not `affine:`) for custom blocks.
- **`props.text`** - the `$blockexpanse:internal:text$` marker declares a collaborative rich-text field backed by Yjs. This lets your block hold editable inline text.
- **`role: 'content'`** - a leaf block. Use `'hub'` if your block can contain children, `'root'` for a top-level page block.

## Step 2: Write the view component

The view is a Lit element that renders the block and reacts to model changes.

```ts
// callout-block.ts
import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { RichText } from '@blockexpanse/inline/lit';
import type { CalloutBlockModel } from './callout-model.js';

@customElement('my-callout')
export class CalloutBlockComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--affine-background-processing-color);
      border-left: 3px solid var(--affine-processing-color);
      margin: 8px 0;
    }
    .icon {
      margin-right: 8px;
    }
  `;

  // The editor injects the block model + host std onto the element
  declare model: CalloutBlockModel;
  declare host: { std: unknown };

  override render() {
    const icons = { info: '💡', success: '✅', warning: '⚠️', error: '❌' };
    return html`
      <span class="icon">${icons[this.model.type]}</span>
      <rich-text
        .host=${this.host}
        .model=${this.model}
        .attributeRenderer=${() => html``}
      ></rich-text>
    `;
  }
}
```

Key points:

- **`@customElement('my-callout')`** - registers the Web Component. The tag name must match what the spec declares (Step 3).
- **`model` / `host`** - the editor injects these properties at runtime. `model` is your `CalloutBlockModel`; `host` gives access to the editor scope (`std`, selection, commands).
- **`<rich-text>`** - the inline rich-text editor from `@blockexpanse/inline`. Binding it to `model.text` makes the block editable.

## Step 3: Create the spec

The spec ties the flavour to the view tag.

```ts
// callout-spec.ts
import {
  BlockViewExtension,
  type ExtensionType,
} from '@blockexpanse/block-std';
import { literal } from 'lit/static-html.js';

export const CalloutBlockSpec: ExtensionType[] = [
  BlockViewExtension('my:callout', literal`my-callout`),
];
```

## Step 4: Register and use the block

Now wire everything into your editor. You need to: import the view (so the `@customElement` decorator runs), add the schema to the doc collection's schema, and extend the editor's spec with your block spec.

```ts
// main.ts
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Schema, Text } from '@blockexpanse/store';
import { AffineSchemas } from '@blockexpanse/blocks/schemas';
import { SpecProvider } from '@blockexpanse/block-std';
import { PageEditorBlockSpecs } from '@blockexpanse/blocks';
import '@blockexpanse/theme/style.css';

// Import the view so @customElement runs
import './callout-block.js';
import { CalloutBlockSchema } from './callout-model.js';
import { CalloutBlockSpec } from './callout-spec.js';

blocksEffects();
presetsEffects();

// Register schema (combine default + custom)
const schema = new Schema();
schema.register(AffineSchemas);
schema.register([CalloutBlockSchema]);

// Extend the page editor's specs with your custom block
const specProvider = SpecProvider.getInstance();
specProvider.getSpec('page').extend(CalloutBlockSpec);

const doc = createEmptyDoc().init();
const editor = new PageEditor();
editor.doc = doc;
document.body.appendChild(editor);

// Insert a callout block
const note = doc.getBlockByFlavour('affine:note')[0];
doc.addBlock('my:callout', { text: new Text('This is a callout!') }, note.id);
```

Run this and you'll see a callout block with an editable rich-text field and a colored left border.

## Recap

| Step        | File               | What it does                                                         |
| ----------- | ------------------ | -------------------------------------------------------------------- |
| 1. Schema   | `callout-model.ts` | Defines flavour `my:callout`, props (`text`, `type`), role `content` |
| 2. View     | `callout-block.ts` | Lit component `<my-callout>` that renders the block UI               |
| 3. Spec     | `callout-spec.ts`  | Maps `my:callout` flavour -> `<my-callout>` element                  |
| 4. Register | `main.ts`          | Imports view, registers schema, extends spec, inserts block          |

## Next steps

- **Add slash-menu integration**: register your block in the slash menu so users can type `/callout` to insert it. See the [Block Spec](./block-spec) handbook for the `view` + `service` slots.
- **Add props UI**: let users change the callout `type` (info/success/warning/error) via a format-bar button. See [Block Service](./block-service).
- **Add markdown adapter**: make your block import/export as Markdown. See [Adapter](./adapter).
- **Look at real blocks**: the built-in blocks in `packages/blocks/src/*/` are full-featured references (e.g. `divider-block` is the simplest, `bookmark-block` shows embeds).
