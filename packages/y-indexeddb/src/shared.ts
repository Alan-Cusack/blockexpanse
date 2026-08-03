/**
 * @file Vendored from @toeverything/y-indexeddb v0.10.0-canary.9.
 *
 * IndexedDB schema definition, database version/name constants, the upgrade
 * hook, and the shared types used across the persistence adapter.
 */
import type { DBSchema, IDBPDatabase } from 'idb';
import type { DataSourceAdapter } from 'y-provider';

export const dbVersion = 1;

export const DEFAULT_DB_NAME = 'affine-local';

export function upgradeDB(db: IDBPDatabase<BlockSuiteBinaryDB>): void {
  db.createObjectStore('workspace', { keyPath: 'id' });
  db.createObjectStore('milestone', { keyPath: 'id' });
}

export interface IndexedDBProvider extends DataSourceAdapter {
  connect: () => void;
  disconnect: () => void;
  cleanup: () => Promise<void>;
  readonly connected: boolean;
}

export type UpdateMessage = {
  timestamp: number;
  update: Uint8Array;
};

export type WorkspacePersist = {
  id: string;
  updates: UpdateMessage[];
};

export type WorkspaceMilestone = {
  id: string;
  milestone: Record<string, Uint8Array>;
};

export interface BlockSuiteBinaryDB extends DBSchema {
  workspace: {
    key: string;
    value: WorkspacePersist;
  };
  milestone: {
    key: string;
    value: WorkspaceMilestone;
  };
}

export interface OldYjsDB extends DBSchema {
  updates: {
    key: number;
    value: Uint8Array;
  };
}
