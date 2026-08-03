# Collaboration

BlockExpanse is built on a CRDT-native data model (Yjs), so real-time collaboration is a first-class concern. This page covers three collaboration modes, from simplest to most powerful.

## Choose your mode

| Mode                             | Persistence             | Cross-device           | Setup           | Use case                               |
| -------------------------------- | ----------------------- | ---------------------- | --------------- | -------------------------------------- |
| **Local** (IndexedDB)            | ✅ Survives reload      | ❌                     | 1 line          | Single-user offline-first apps         |
| **Broadcast** (BroadcastChannel) | ❌                      | ❌ (same browser only) | 1 line          | Multi-tab editing in one browser       |
| **Real-time** (WebSocket)        | ✅ (IndexedDB + server) | ✅                     | 1 line + server | Multi-user, cross-device collaboration |

All three modes use the same editor - only the doc creation differs.

## 1. Local persistence (IndexedDB)

Data is saved to IndexedDB and survives page reloads. No collaboration.

```ts
import { createLocalDoc } from '@blockexpanse/presets';
import { PageEditor } from '@blockexpanse/presets';
import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import '@blockexpanse/theme/style.css';

blocksEffects();
presetsEffects();

const { doc, init } = createLocalDoc();
init();

const editor = new PageEditor();
editor.doc = doc;
document.body.appendChild(editor);
```

## 2. Cross-tab collaboration (BroadcastChannel)

Open the same room ID in multiple tabs of the same browser to see real-time edits. Data is not persisted (lost when all tabs close).

```ts
import { createBroadcastDoc } from '@blockexpanse/presets';

const { doc, init } = createBroadcastDoc('my-room');
init();
```

## 3. Real-time collaboration (WebSocket)

Connect to a WebSocket sync server for cross-device, multi-user collaboration. Uses IndexedDB as the main source (local-first) and the WebSocket as a shadow source, so data persists offline and syncs when connected.

```ts
import { createCollaborativeDoc } from '@blockexpanse/presets';

const { doc, init } = createCollaborativeDoc('wss://your-server/room/my-room', {
  user: { name: 'Alice' },
  room: 'my-room',
});
init();
```

### Deploying a sync server

A reference Cloudflare Worker server is included at `packages/sync-websocket-server/`:

```sh
cd packages/sync-websocket-server
npx wrangler deploy
# -> wss://blockexpanse-sync-server.<your-subdomain>.workers.dev
```

Then use that URL in `createCollaborativeDoc`. See the [server README](https://github.com/Alan-Cusack/blockexpanse/tree/main/packages/sync-websocket-server) for details.

::: tip
The reference server has no authentication. For production, add auth in the Worker's `fetch` handler.
:::

## How it works

BlockExpanse uses a **main/shadow** source architecture:

- **Main source**: The source of truth. Usually `IndexedDBDocSource` (persists locally) or `NoopDocSource` (in-memory).
- **Shadow sources**: Additional sync channels. `WebSocketDocSource` and `BroadcastChannelDocSource` are shadows - they sync continuously with remote peers.
- **Awareness sources**: Flat array of presence providers (cursor positions, user names, selections).

```
DocCollection
├── docSources
│   ├── main: IndexedDBDocSource      ← persists locally
│   └── shadows: [WebSocketDocSource] ← syncs with server
├── blobSources
│   └── main: IndexedDBBlobSource     ← persists blobs (images, attachments)
└── awarenessSources
    └── [WebSocketAwarenessSource]    ← presence (cursors, user names)
```

The `createLocalDoc`, `createBroadcastDoc`, and `createCollaborativeDoc` helpers pre-configure these sources for you. For custom setups, use `createEmptyDoc` with explicit sources:

```ts
import { createEmptyDoc } from '@blockexpanse/presets';
import {
  IndexedDBDocSource,
  BroadcastChannelDocSource,
} from '@blockexpanse/sync';

const { doc, init } = createEmptyDoc({
  docSources: {
    main: new IndexedDBDocSource(),
    shadows: [new BroadcastChannelDocSource('my-channel')],
  },
});
```

## User presence

When you pass `user: { name: 'Alice' }` to `createCollaborativeDoc`, the user's name is set on the awareness store. Other connected users will see it as a cursor label.

Cursor **colors** are assigned automatically by the editor's `RemoteColorManager` - no configuration needed.

To set the user name after creation:

```ts
collection.awarenessStore.awareness.setLocalStateField('user', { name: 'Bob' });
```
