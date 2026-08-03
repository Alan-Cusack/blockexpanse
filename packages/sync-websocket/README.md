# @blockexpanse/sync-websocket

WebSocket sync provider for BlockExpanse real-time collaboration.

Provides `WebSocketDocSource` and `WebSocketAwarenessSource` (implementing the
`DocSource` / `AwarenessSource` interfaces from `@blockexpanse/sync`), plus a
high-level `createWebsocketProvider()` helper.

## Usage

```ts
import { createWebsocketProvider } from '@blockexpanse/sync-websocket';

const { docSource, awarenessSource } = createWebsocketProvider(
  'wss://your-server/room/my-room',
  { user: { name: 'Alice' } }
);
```

See `packages/sync-websocket-server/` for a reference Cloudflare Worker server.

## License

MPL-2.0
