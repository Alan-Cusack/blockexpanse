/**
 * @file Wire protocol for the WebSocket sync channel.
 *
 * Messages are JSON-encoded with a `channel` discriminator. Binary updates
 * (Yjs doc updates, awareness updates) are sent as plain number arrays
 * (`Array.from(uint8array)`) and reconstructed with `new Uint8Array(arr)`.
 */

export type AwarenessMessage = {
  channel: 'awareness';
  payload: { type: 'connect' } | { type: 'update'; update: number[] };
};

export type DocMessage = {
  channel: 'doc';
  payload:
    | {
        type: 'init';
      }
    | {
        type: 'update';
        docId: string;
        updates: number[];
      };
};

export type WebSocketMessage = AwarenessMessage | DocMessage;
