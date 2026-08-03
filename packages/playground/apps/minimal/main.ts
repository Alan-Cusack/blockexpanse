import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
/**
 * Minimal BlockExpanse starter.
 *
 * This is the simplest possible editor setup - no i18n, no AI, no collaboration,
 * no side panels. Just: register components, create a doc, mount the editor.
 *
 * For the full-featured integration example, see apps/starter/.
 */
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';

import '../../style.css';

// 1. Register all Web Components (required before rendering any editor)
blocksEffects();
presetsEffects();

function main() {
  // 2. Create an empty doc and initialize the default block tree
  const doc = createEmptyDoc().init();

  // 3. Mount the editor
  const editor = new PageEditor();
  editor.doc = doc;
  document.body.append(editor);

  // 4. Write some content into the first paragraph
  const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
  doc.updateBlock(paragraph, {
    text: new Text('Hello BlockExpanse! Edit me, try "/" for the slash menu.'),
  });
}

main();
