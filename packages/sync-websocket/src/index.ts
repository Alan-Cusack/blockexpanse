/**
 * @file WebSocket sync provider for BlockExpanse collaboration.
 *
 * Exports the low-level `WebSocketDocSource` / `WebSocketAwarenessSource`
 * (for users who want to wire sources manually) and a high-level
 * `createWebsocketProvider()` helper that handles WebSocket connection
 * lifecycle in one call.
 */

export { WebSocketAwarenessSource } from './awareness-source.js';
export { WebSocketDocSource } from './doc-source.js';
export type {
  AwarenessMessage,
  DocMessage,
  WebSocketMessage,
} from './types.js';

import { WebSocketAwarenessSource } from './awareness-source.js';
import { WebSocketDocSource } from './doc-source.js';

export interface WebsocketProviderOptions {
  /** User display name for presence (cursor labels). */
  user?: { name: string };
  /** Room identifier (appended to the URL if the URL doesn't already contain a path). */
  room?: string;
  /** Called when the WebSocket connection status changes. */
  onStatusChange?: (
    status: 'connecting' | 'connected' | 'disconnected'
  ) => void;
}

export interface WebsocketProvider {
  /** DocSource to pass as a shadow in DocCollectionOptions.docSources.shadows */
  docSource: WebSocketDocSource;
  /** AwarenessSource to pass in DocCollectionOptions.awarenessSources */
  awarenessSource: WebSocketAwarenessSource;
  /** Close the WebSocket and clean up. */
  disconnect(): void;
}

/**
 * Create a WebSocket sync provider in one call.
 *
 * Opens a WebSocket connection, instantiates the doc + awareness sources,
 * and returns them ready to plug into a `DocCollection`.
 *
 * @example
 * ```ts
 * const provider = createWebsocketProvider('wss://server/room/my-room', {
 *   user: { name: 'Alice' },
 * });
 *
 * const doc = createEmptyDoc({
 *   docSources: { main: new IndexedDBDocSource(), shadows: [provider.docSource] },
 *   awarenessSources: [provider.awarenessSource],
 * }).init();
 * ```
 *
 * The `user.name` is set on the awareness store once the collection connects.
 * Cursor color is handled automatically by the editor's `RemoteColorManager`.
 */
export function createWebsocketProvider(
  url: string | URL,
  options: WebsocketProviderOptions = {}
): WebsocketProvider {
  let wsUrl: URL;
  if (typeof url === 'string') {
    wsUrl = new URL(url);
  } else {
    wsUrl = new URL(url.href);
  }

  // If a room is specified and the URL has no path beyond "/", append it.
  if (options.room && wsUrl.pathname === '/') {
    wsUrl.pathname = `/room/${options.room}`;
  }

  const onStatusChange = options.onStatusChange;
  onStatusChange?.('connecting');

  const ws = new WebSocket(wsUrl);

  ws.addEventListener('open', () => {
    onStatusChange?.('connected');
  });

  ws.addEventListener('close', () => {
    onStatusChange?.('disconnected');
  });

  ws.addEventListener('error', () => {
    onStatusChange?.('disconnected');
  });

  const docSource = new WebSocketDocSource(ws);
  const awarenessSource = new WebSocketAwarenessSource(ws);

  return {
    docSource,
    awarenessSource,
    disconnect() {
      awarenessSource.disconnect();
    },
  };
}
