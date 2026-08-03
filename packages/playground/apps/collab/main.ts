import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
/**
 * Collaboration example: real-time multi-user editing over WebSocket.
 *
 * Uses createCollaborativeDoc for a one-line setup. Pair with the
 * sync-websocket-server (packages/sync-websocket-server/) or any
 * compatible WebSocket server.
 *
 * URL: /collab/?room=my-room&server=ws://localhost:8787
 *
 * Without ?server=, falls back to BroadcastChannel (cross-tab only).
 */
import {
  createBroadcastDoc,
  createCollaborativeDoc,
  PageEditor,
} from '@blockexpanse/presets';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';

import '../../style.css';

blocksEffects();
presetsEffects();

function main() {
  const params = new URLSearchParams(location.search);
  const room = params.get('room') ?? 'demo';
  const server = params.get('server');
  const user = params.get('user') ?? `User-${Math.floor(Math.random() * 1000)}`;

  let doc;
  let init;

  if (server) {
    const result = createCollaborativeDoc(server, {
      user: { name: user },
      room,
    });
    doc = result.doc;
    init = result.init;
  } else {
    // Fallback: cross-tab via BroadcastChannel (no server needed)
    const result = createBroadcastDoc(room);
    doc = result.doc;
    init = result.init;
  }

  init();

  const editor = new PageEditor();
  editor.doc = doc;
  document.body.append(editor);

  // Write a welcome message if the doc is empty
  const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
  if (paragraph) {
    const text = paragraph.model.text?.toString();
    if (!text) {
      doc.updateBlock(paragraph, {
        text: new Text(
          `Collaborative room: ${room}\nYou are: ${user}\nOpen this URL in another tab/browser to collaborate!`
        ),
      });
    }
  }
}

main();
