/**
 * @file High-level block definition helper.
 *
 * Combines the three pieces of a custom block (schema, view spec, element
 * registration) into a single `defineBlock()` call. The view component must
 * still be written as a Lit element extending `BlockComponent`, but
 * `defineBlock` handles the schema + spec boilerplate.
 */

import type { ExtensionType } from '@blockexpanse/block-std';
import type { InternalPrimitives } from '@blockexpanse/store';

import { BlockViewExtension } from '@blockexpanse/block-std';
import { defineBlockSchema } from '@blockexpanse/store';
import { literal } from 'lit/static-html.js';

export interface DefineBlockOptions<
  Flavour extends string,
  Props extends object,
> {
  /** Block flavour in `namespace:name` format, e.g. `my:callout`. */
  flavour: Flavour;
  /** Block role in the tree. Defaults to `'content'` (leaf block). */
  role?: 'root' | 'hub' | 'content';
  /** Typed props factory. Use `internal.Text()` for collaborative rich text. */
  props?: (internal: InternalPrimitives) => Props;
  /** Schema version. Defaults to `1`. */
  version?: number;
  /** Allowed parent flavours. Defaults to all. */
  parent?: string[];
  /** Allowed child flavours. Defaults to all (or `[]` for content role). */
  children?: string[];
  /**
   * The custom element tag name. Defaults to the flavour with `:` replaced
   * by `-` (e.g. `my:callout` -> `my-callout`).
   *
   * The view component must be registered with this tag (via `@customElement`
   * decorator or `customElements.define`).
   */
  tag?: string;
}

export interface DefinedBlock<Flavour extends string, Props extends object> {
  /** The block schema. Pass to `schema.register([...])` or `AffineSchemas`. */
  schema: ReturnType<typeof defineBlockSchema>;
  /** The block view spec. Pass to `SpecProvider.getSpec('page').extend(spec)`. */
  spec: ExtensionType[];
  /** The flavour string. */
  flavour: Flavour;
  /** The custom element tag name. */
  tag: string;
  /** The props type (for use in `SchemaToModel`). */
  readonly _props: Props;
}

/**
 * Define a custom block in one call.
 *
 * This wraps `defineBlockSchema` + `BlockViewExtension` and returns the
 * schema + spec ready to register. The view component (a Lit element
 * extending `BlockComponent`) must be written separately and registered
 * with `@customElement(tag)` or `customElements.define(tag, View)`.
 *
 * @example
 * ```ts
 * import { defineBlock } from '@blockexpanse/presets';
 * import { BlockComponent } from '@blockexpanse/block-std';
 * import { html, css } from 'lit';
 * import { customElement } from 'lit/decorators.js';
 *
 * @customElement('my-callout')
 * class CalloutView extends BlockComponent {
 *   static styles = css`:host { display: block; padding: 12px; }`;
 *   override renderBlock() {
 *     return html`<div>Callout: ${this.model.text}</div>`;
 *   }
 * }
 *
 * export const CalloutBlock = defineBlock({
 *   flavour: 'my:callout',
 *   props: internal => ({ text: internal.Text(), type: 'info' }),
 *   view: CalloutView,  // ensures the @customElement side-effect runs
 * });
 * ```
 *
 * Then register in your app:
 * ```ts
 * schema.register([CalloutBlock.schema]);
 * SpecProvider.getInstance().getSpec('page').extend(CalloutBlock.spec);
 * ```
 *
 * **Important**: The view file must be imported (so `@customElement` runs)
 * before the editor renders. `defineBlock` does NOT call `customElements.define`
 * — that's done by the `@customElement` decorator on the view class.
 */
export function defineBlock<
  Flavour extends string = string,
  Props extends object = object,
>(options: DefineBlockOptions<Flavour, Props>): DefinedBlock<Flavour, Props> {
  const {
    flavour,
    role = 'content',
    props,
    version = 1,
    parent,
    children,
    tag: customTag,
  } = options;

  const tag = customTag ?? flavour.replace(/:/g, '-');

  const schema = defineBlockSchema({
    flavour,
    props,
    metadata: {
      version,
      role,
      ...(parent ? { parent } : {}),
      ...(children ? { children } : {}),
    },
  });

  const spec: ExtensionType[] = [
    BlockViewExtension(flavour as BlockExpanse.Flavour, literal`${tag}`),
  ];

  return {
    schema,
    spec,
    flavour,
    tag,
    _props: undefined as unknown as Props,
  };
}
