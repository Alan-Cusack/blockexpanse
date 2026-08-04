export { defineBlock } from './define-block.js';
export type { DefineBlockOptions, DefinedBlock } from './define-block.js';

export { addSlashMenuItem, defaultSlashMenuConfig } from './slash-menu.js';
export type {
  AffineSlashMenuContext,
  SlashMenuConfig,
  SlashMenuItemOptions,
} from './slash-menu.js';

export { FetchExternalAssetExtension } from '@blockexpanse/affine-shared/services';
// Re-export blob/asset utilities so users can import everything from @blockexpanse/presets
export {
  CloudBlobSource,
  IndexedDBBlobSource,
  MemoryBlobSource,
} from '@blockexpanse/sync';

import type {
  AwarenessSource,
  BlobSource,
  DocSource,
} from '@blockexpanse/sync';

import { AffineSchemas } from '@blockexpanse/blocks/schemas';
import { DocCollection, Schema } from '@blockexpanse/store';
import {
  BroadcastChannelAwarenessSource,
  BroadcastChannelDocSource,
  CloudBlobSource,
  IndexedDBBlobSource,
  IndexedDBDocSource,
  MemoryBlobSource,
} from '@blockexpanse/sync';
import { createWebsocketProvider } from '@blockexpanse/sync-websocket';

export interface CreateDocOptions {
  docSources?: { main: DocSource; shadows?: DocSource[] };
  blobSources?: { main: BlobSource; shadows?: BlobSource[] };
  awarenessSources?: AwarenessSource[];
  id?: string;
}

/**
 * Create an empty doc with an optional set of sync sources.
 *
 * Without options, the doc lives entirely in memory (no persistence, no
 * collaboration). Pass sources to enable persistence and/or real-time
 * collaboration - or use the convenience helpers `createLocalDoc`,
 * `createBroadcastDoc`, `createCollaborativeDoc`.
 */
export function createEmptyDoc(options: CreateDocOptions = {}) {
  const schema = new Schema().register(AffineSchemas);
  const collection = new DocCollection({
    schema,
    id: options.id,
    docSources: options.docSources,
    blobSources: options.blobSources,
    awarenessSources: options.awarenessSources,
  });
  collection.meta.initialize();
  const doc = collection.createDoc();

  return {
    doc,
    collection,
    init() {
      doc.load();
      const rootId = doc.addBlock('affine:page', {});
      doc.addBlock('affine:surface', {}, rootId);
      const noteId = doc.addBlock('affine:note', {}, rootId);
      doc.addBlock('affine:paragraph', {}, noteId);
      return doc;
    },
  };
}

/**
 * Create a doc persisted to IndexedDB (single-user, offline-first).
 *
 * Data survives page reloads. No real-time collaboration.
 */
export function createLocalDoc() {
  return createEmptyDoc({
    id: 'local',
    docSources: { main: new IndexedDBDocSource() },
    blobSources: { main: new IndexedDBBlobSource('local') },
  });
}

/**
 * Create a doc synced across browser tabs via BroadcastChannel.
 *
 * Open the same `roomId` in multiple tabs of the same browser to see
 * real-time edits. No persistence (data is lost on full close) and no
 * cross-device sync.
 */
export function createBroadcastDoc(roomId: string) {
  const channel = `blockexpanse:${roomId}`;
  return createEmptyDoc({
    id: roomId,
    docSources: { main: new BroadcastChannelDocSource(channel) },
    blobSources: { main: new MemoryBlobSource() },
    awarenessSources: [new BroadcastChannelAwarenessSource(channel)],
  });
}

/**
 * Create a doc synced in real-time over WebSocket.
 *
 * Connects to a WebSocket sync server (see `@blockexpanse/sync-websocket-server`
 * for a reference Cloudflare Worker). Uses IndexedDB as the main doc source
 * (local-first) and the WebSocket as a shadow source, so data persists
 * offline and syncs when connected.
 *
 * **Blob storage**: by default uses IndexedDB (images are local-only and
 * NOT shared between collaborators). Pass `blobUrl` to use `CloudBlobSource`
 * so images upload to your server and all collaborators can see them:
 *
 * ```ts
 * createCollaborativeDoc('wss://server/room/my-room', {
 *   blobUrl: '/api/collection',        // your blob REST API
 *   getHeaders: () => ({ Authorization: `Bearer ${token}` }),
 * })
 * ```
 *
 * @param url - WebSocket server URL, e.g. `wss://server/room/my-room`
 * @param options.user - Display name for presence (cursor labels)
 * @param options.room - Room ID (appended to URL if URL has no path)
 * @param options.blobUrl - Blob API base URL for shared image storage (CloudBlobSource)
 * @param options.getHeaders - Auth headers for blob API requests
 */
export function createCollaborativeDoc(
  url: string | URL,
  options: {
    user?: { name: string };
    room?: string;
    /** Blob API base URL. When set, images are shared via CloudBlobSource. */
    blobUrl?: string;
    /** Auth headers for blob API. */
    getHeaders?: () => Record<string, string> | Promise<Record<string, string>>;
  } = {}
) {
  const provider = createWebsocketProvider(url, options);
  const roomId = options.room ?? 'collab';

  // Blob storage: CloudBlobSource (shared) when blobUrl is provided,
  // otherwise IndexedDB (local-only, images NOT shared between collaborators).
  const blobSources = options.blobUrl
    ? {
        main: new CloudBlobSource({
          baseUrl: options.blobUrl,
          collectionId: roomId,
          getHeaders: options.getHeaders,
        }),
        shadows: [new IndexedDBBlobSource(roomId)],
      }
    : { main: new IndexedDBBlobSource(roomId) };

  const result = createEmptyDoc({
    id: roomId,
    docSources: {
      main: new IndexedDBDocSource(),
      shadows: [provider.docSource],
    },
    blobSources,
    awarenessSources: [provider.awarenessSource],
  });

  // Set user name for presence once the collection is created.
  if (options.user?.name) {
    result.collection.awarenessStore.awareness.setLocalStateField('user', {
      name: options.user.name,
    });
  }

  return result;
}
