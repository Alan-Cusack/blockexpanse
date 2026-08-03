# Custom Block Tutorial

This tutorial walks you through creating a custom block: defining it, writing its view, registering it with the editor, and adding it to the slash menu. By the end you'll have a working "callout" block you can type `/callout` to insert.

::: tip Prerequisites
Read the [Concepts Cheat Sheet](./concepts) first - especially the definitions of **flavour**, **schema**, **spec**, and **view**.
:::

## The short version

With the `defineBlock()` helper, a custom block is **one function call + one Lit component**:

```ts
import { defineBlock } from '@blockexpanse/presets';
import { BlockComponent } from '@blockexpanse/block-std';
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// 1. Write the view (a Lit component extending BlockComponent)
@customElement('my-callout')
class CalloutView extends BlockComponent {
  static styles = css`
    :host {
      display: block;
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--affine-background-processing-color);
      border-left: 3px solid var(--affine-processing-color);
    }
  `;
  override renderBlock() {
    return html`<rich-text
      .host=${this.host}
      .model=${this.model}
    ></rich-text>`;
  }
}

// 2. Define the block (schema + spec in one call)
export const CalloutBlock = defineBlock({
  flavour: 'my:callout',
  props: internal => ({ text: internal.Text(), type: 'info' }),
  view: CalloutView, // import side-effect registers the custom element
});
```

Then register in your app:

```ts
import { Schema } from '@blockexpanse/store';
import { AffineSchemas } from '@blockexpanse/blocks/schemas';
import { SpecProvider } from '@blockexpanse/block-std';
import './callout-block.js'; // import the view (runs @customElement)

const schema = new Schema();
schema.register(AffineSchemas);
schema.register([CalloutBlock.schema]);

SpecProvider.getInstance().getSpec('page').extend(CalloutBlock.spec);
```

That's it - the block now renders when you insert it. Let's break down each piece.

## Step 1: Write the view

The view is a Lit element that extends `BlockComponent`. The framework injects `model` (your block's data), `host` (editor scope), `doc` (the document), and `std` (standard commands) via Lit contexts.

```ts
import { BlockComponent } from '@blockexpanse/block-std';
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-callout')
class CalloutView extends BlockComponent {
  static styles = css`
    :host {
      display: block;
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--affine-background-processing-color);
      border-left: 3px solid var(--affine-processing-color);
      margin: 8px 0;
    }
  `;

  override renderBlock() {
    const icons: Record<string, string> = {
      info: '💡',
      success: '✅',
      warning: '⚠️',
      error: '❌',
    };
    const type = (this.model as { type?: string }).type ?? 'info';
    return html`
      <span>${icons[type]}</span>
      <rich-text .host=${this.host} .model=${this.model}></rich-text>
    `;
  }
}
```

Key points:

- **`@customElement('my-callout')`** registers the Web Component. The tag name must match what `defineBlock` uses.
- **`renderBlock()`** is the required method that returns Lit `html`. (Don't override `render()` - the framework calls `renderBlock` through a rendering chain that handles selection, widgets, etc.)
- **`<rich-text>`** is the inline rich-text editor. Binding it to `model` makes the block editable.
- **`model` / `host`** are injected by the framework - you don't set them manually.

## Step 2: Define the block

`defineBlock()` wraps `defineBlockSchema` + `BlockViewExtension` into one call:

```ts
import { defineBlock } from '@blockexpanse/presets';

export const CalloutBlock = defineBlock({
  flavour: 'my:callout', // namespace:name format
  props: internal => ({
    text: internal.Text(), // collaborative rich text (Yjs-backed)
    type: 'info' as 'info' | 'success' | 'warning' | 'error',
  }),
  view: CalloutView, // ensures @customElement side-effect runs
});
```

What `defineBlock` does for you:

- Creates the **schema** (data shape: flavour + props + role)
- Creates the **spec** (maps flavour -> view tag via `BlockViewExtension`)
- Derives the tag name from the flavour (`my:callout` -> `my-callout`)

You can also customize:

- `role: 'content' | 'hub' | 'root'` (default `'content'` = leaf block)
- `version: number` (default `1`)
- `parent: string[]` / `children: string[]` (restrict nesting)
- `tag: string` (override the derived tag name)

## Step 3: Register in your app

Three things must happen before the editor renders:

```ts
import { Schema } from '@blockexpanse/store';
import { AffineSchemas } from '@blockexpanse/blocks/schemas';
import { SpecProvider } from '@blockexpanse/block-std';

import './callout-block.js'; // (a) import the view file so @customElement runs

// (b) Register the schema
const schema = new Schema();
schema.register(AffineSchemas);
schema.register([CalloutBlock.schema]);

// (c) Extend the page editor's specs with your block
SpecProvider.getInstance().getSpec('page').extend(CalloutBlock.spec);
```

## Step 4: Add to the slash menu (optional)

By default, your block won't appear in the `/` slash menu. Use `addSlashMenuItem()`:

```ts
import {
  addSlashMenuItem,
  defaultSlashMenuConfig,
} from '@blockexpanse/presets';

const slashConfig = addSlashMenuItem(defaultSlashMenuConfig, {
  name: 'Callout',
  flavour: 'my:callout',
  icon: '💡',
  alias: ['callout', 'box', 'info'],
});
```

Then set it on the slash menu widget after the editor mounts (via `specSlots.widgetConnected` or by accessing the widget instance).

## Step 5: Insert the block programmatically

```ts
const note = doc.getBlockByFlavour('affine:note')[0];
doc.addBlock('my:callout', {}, note.id);
```

## Recap

| Step          | What                                         | Code                                     |
| ------------- | -------------------------------------------- | ---------------------------------------- |
| 1. View       | Lit component extending `BlockComponent`     | `@customElement('my-callout') class ...` |
| 2. Define     | `defineBlock()` wraps schema + spec          | `defineBlock({ flavour, props, view })`  |
| 3. Register   | Import view + register schema + extend specs | 3 lines                                  |
| 4. Slash menu | `addSlashMenuItem()` (optional)              | 1 call                                   |
| 5. Insert     | `doc.addBlock()`                             | 1 line                                   |

## Next steps

- **Explore the built-in blocks**: `packages/blocks/src/*/` are full-featured references. `divider-block` is the simplest, `bookmark-block` shows embeds with fetch logic.
- **Read the handbook**: [Block Spec](./block-spec) covers the full spec surface (schema, service, view, widgets) for advanced use cases.
- **Add adapters**: make your block import/export as Markdown/HTML. See [Adapter](./adapter).
