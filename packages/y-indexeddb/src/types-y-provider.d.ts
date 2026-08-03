/**
 * @file Local type shim for `y-provider`.
 *
 * `y-provider@0.10.0-canary.9` ships `.d.ts` files that use *extensionless*
 * relative imports (`./data-source`, `./types`, ...). Under
 * `moduleResolution: NodeNext` (required by this workspace) those sub-module
 * references fail to resolve, so TypeScript treats the package as empty and
 * drops every named export (`createLazyProvider`, `writeOperation`,
 * `DataSourceAdapter`, ...). The original `@toeverything/y-indexeddb` was
 * bundled with Vite (bundler resolution) and therefore never hit this.
 *
 * Rather than patch the upstream package, we declare the public surface of
 * `y-provider` here and map the bare specifier to this file via `paths` in
 * `tsconfig.json`. The signatures below mirror the upstream `.d.ts` files
 * exactly so that the vendored source type-checks against the same contract
 * the runtime bundle was built from.
 */
import type { Doc } from 'yjs';

/** @see node_modules/y-provider/dist/types.d.ts */
export type Status =
  | { type: 'idle' }
  | { type: 'syncing' }
  | { type: 'synced' }
  | { type: 'error'; error: unknown };

export interface DataSourceAdapter {
  datasource: DocDataSource;
  readonly status: Status;
  subscribeStatusChange(onStatusChange: () => void): () => void;
}

export interface DocState {
  /** The missing structs of client queries with self state. */
  missing: Uint8Array;
  /** The full state of remote, used to prepare for diff sync. */
  state?: Uint8Array;
}

/** @see node_modules/y-provider/dist/data-source.d.ts */
export interface DocDataSource {
  /** request diff update from other clients */
  queryDocState(
    guid: string,
    options?: { stateVector?: Uint8Array; targetClientId?: number }
  ): Promise<DocState | false>;
  /** send update to the datasource */
  sendDocUpdate(guid: string, update: Uint8Array): Promise<void>;
  /**
   * listen to update from the datasource. Returns a function to unsubscribe.
   * this is optional because some datasource might not support it
   */
  onDocUpdate?(
    callback: (guid: string, update: Uint8Array) => void
  ): () => void;
}

/** @see node_modules/y-provider/dist/lazy-provider.d.ts */
export type DocProvider = {
  passive: true;
  sync(onlyRootDoc?: boolean): Promise<void>;
  get connected(): boolean;
  connect(): void;
  disconnect(): void;
};

interface LazyProviderOptions {
  origin?: string;
}

/**
 * Creates a lazy provider that connects to a datasource and synchronizes a
 * root document.
 */
export declare const createLazyProvider: (
  rootDoc: Doc,
  datasource: DocDataSource,
  options?: LazyProviderOptions
) => DocProvider & DataSourceAdapter;

/** @see node_modules/y-provider/dist/utils.d.ts */
export declare function getDoc(doc: Doc, guid: string): Doc | undefined;
export declare const writeOperation: (op: Promise<unknown>) => Promise<void>;
