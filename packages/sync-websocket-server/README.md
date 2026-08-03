# BlockExpanse Sync Server

Reference WebSocket sync server for BlockExpanse real-time collaboration.
Built as a Cloudflare Worker with Durable Objects — one DO instance per room.

## Quick deploy

```sh
cd packages/sync-websocket-server
npm install -g wrangler   # or: npx wrangler
npx wrangler deploy
```

You'll get a URL like `https://blockexpanse-sync-server.<your-subdomain>.workers.dev`.

## Usage

On the client side, use `createCollaborativeDoc` with your worker URL:

```ts
import { createCollaborativeDoc } from '@blockexpanse/presets';

const { doc, init } = await createCollaborativeDoc(
  'wss://blockexpanse-sync-server.xxx.workers.dev/room/my-room',
  { user: { name: 'Alice' }, room: 'my-room' }
);
init();
```

Open the same URL in another browser/tab with a different user name to see
real-time collaboration.

## Local development

```sh
npx wrangler dev
# -> http://localhost:8787
# Client URL: ws://localhost:8787/room/my-room
```

## Protocol

JSON-over-WebSocket with two channels:

| Channel     | Message types                                          |
| ----------- | ------------------------------------------------------ |
| `doc`       | `init` (request all docs) · `update` (docId + updates) |
| `awareness` | `connect` (join) · `update` (presence update)          |

Binary updates are sent as JSON number arrays (`Array.from(uint8array)`).

## Limitations

- **In-memory state**: Doc state lives in the Durable Object's memory. It
  persists as long as the DO is alive (even between requests within the same
  isolate), but a cold start of the DO will lose unsynced state. Clients with
  IndexedDB main sources will re-sync on reconnect.
- **Free tier**: Cloudflare Workers free plan includes 100k requests/day and
  10s CPU per request. For production or high-traffic use, consider the paid
  plan.
- **No auth**: This reference server has no authentication. Anyone with the
  room URL can join. Add auth in the Worker `fetch` handler for production.

## License

MPL-2.0
