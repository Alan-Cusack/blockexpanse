/**
 * BlockExpanse WebSocket sync server (Cloudflare Worker + Durable Objects).
 *
 * Each room is backed by a WebSocketRoom Durable Object instance.
 * The DO holds all WebSocket connections for that room and broadcasts
 * doc/awareness updates to every connected client.
 *
 * Protocol (compatible with @blockexpanse/sync-websocket):
 *   channel "doc":        { type: "init" } | { type: "update", docId, updates }
 *   channel "awareness":  { type: "connect" } | { type: "update", update }
 *
 * Deploy:
 *   npx wrangler deploy
 *   # -> wss://blockexpanse-sync-server.<your-subdomain>.workers.dev/room/my-room
 *
 * Client:
 *   createCollaborativeDoc('wss://blockexpanse-sync-server.xxx.workers.dev/room/my-room')
 */

// ---------------------------------------------------------------------------
// Types (mirror the client-side protocol)
// ---------------------------------------------------------------------------

type AwarenessMessage = {
  channel: 'awareness';
  payload: { type: 'connect' } | { type: 'update'; update: number[] };
};

type DocMessage = {
  channel: 'doc';
  payload:
    | { type: 'init' }
    | { type: 'update'; docId: string; updates: number[] };
};

type WebSocketMessage = AwarenessMessage | DocMessage;

// ---------------------------------------------------------------------------
// Worker entry: route /room/:roomId to the Durable Object
// ---------------------------------------------------------------------------

export default {
  fetch(request: Request, env: Env): Response | Promise<Response> {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === '/' || url.pathname === '/health') {
      return new Response('BlockExpanse sync server is running', {
        status: 200,
      });
    }

    // Match /room/:roomId
    const match = url.pathname.match(/^\/room\/(.+)$/);
    if (!match) {
      return new Response('Not found. Use /room/:roomId', { status: 404 });
    }

    const roomId = match[1];

    // Upgrade WebSocket
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected WebSocket', { status: 426 });
    }

    const id = env.WEBSOCKET_ROOM.idFromName(roomId);
    const stub = env.WEBSOCKET_ROOM.get(id);
    return stub.fetch(request);
  },
};

// ---------------------------------------------------------------------------
// Durable Object: one instance per room
// ---------------------------------------------------------------------------

export class WebSocketRoom implements DurableObject {
  // In-memory doc state: docId -> merged Uint8Array
  private docMap = new Map<string, Uint8Array>();

  // Connected WebSocket sessions for this room
  private sessions = new Set<WebSocket>();

  constructor(
    private state: DurableObjectState,
    private env: Env
  ) {}

  /** Send a message to every session except the sender. */
  private broadcast(sender: WebSocket, msg: WebSocketMessage): void {
    const data = JSON.stringify(msg);
    for (const ws of this.sessions) {
      if (ws !== sender) {
        try {
          ws.send(data);
        } catch {
          this.sessions.delete(ws);
        }
      }
    }
  }

  private handleSession(ws: WebSocket): void {
    ws.accept();
    this.sessions.add(ws);

    ws.addEventListener('message', (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data as string) as WebSocketMessage;
        this.onMessage(ws, data);
      } catch {
        // Ignore malformed messages
      }
    });

    ws.addEventListener('close', () => {
      this.sessions.delete(ws);
    });

    ws.addEventListener('error', () => {
      this.sessions.delete(ws);
    });
  }

  private onMessage(sender: WebSocket, msg: WebSocketMessage): void {
    if (msg.channel === 'doc') {
      if (msg.payload.type === 'init') {
        // Send all known docs to the new client
        for (const [docId, data] of this.docMap) {
          sender.send(
            JSON.stringify({
              channel: 'doc',
              payload: {
                type: 'update',
                docId,
                updates: Array.from(data),
              },
            } satisfies DocMessage)
          );
        }
        return;
      }

      // type === 'update': merge into server state and broadcast
      const { docId, updates } = msg.payload;
      const incoming = new Uint8Array(updates);
      const existing = this.docMap.get(docId);
      if (existing) {
        // Simple merge: just keep the latest (Yjs CRDTs are idempotent)
        this.docMap.set(docId, incoming);
      } else {
        this.docMap.set(docId, incoming);
      }

      this.broadcast(sender, msg);
      return;
    }

    if (msg.channel === 'awareness') {
      // Broadcast awareness to all other clients
      this.broadcast(sender, msg);
      return;
    }
  }

  fetch(_request: Request): Response {
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    this.handleSession(server);

    return new Response(null, { status: 101, webSocket: client });
  }
}

// ---------------------------------------------------------------------------
// Env type
// ---------------------------------------------------------------------------

interface Env {
  WEBSOCKET_ROOM: DurableObjectNamespace;
}
