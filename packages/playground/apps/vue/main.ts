import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { createEmptyDoc } from '@blockexpanse/presets';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';
/**
 * Vue integration example.
 *
 * BlockExpanse editors are native Web Components. In Vue, use them directly
 * in templates. Vue passes object props to custom elements correctly via
 * `:doc="doc"`, so no ref workaround is needed (unlike React).
 *
 * URL: /vue/
 */
import { createApp, defineComponent, h } from 'vue';

import '../../style.css';

// Register all Web Components (required)
blocksEffects();
presetsEffects();

const App = defineComponent({
  setup() {
    const doc = createEmptyDoc().init();

    // Write welcome content
    const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
    if (paragraph) {
      doc.updateBlock(paragraph, {
        text: new Text('Hello from Vue! Edit me, try "/" for the slash menu.'),
      });
    }

    return { doc };
  },
  render() {
    return [
      h(
        'h1',
        {
          style: 'padding: 16px 24px; margin: 0; font-size: 18px; color: #666;',
        },
        'BlockExpanse + Vue'
      ),
      // page-editor is a registered custom element; Vue renders it natively
      h('page-editor' as never, {
        doc: this.doc,
        style: 'display: block;',
      }),
    ];
  },
});

// Tell Vue to treat page-editor as a custom element (not a Vue component)
const app = createApp(App);
(
  app.config as {
    compilerOptions: { isCustomElement: (tag: string) => boolean };
  }
).compilerOptions.isCustomElement = (tag: string) => tag === 'page-editor';
app.mount(document.body);
