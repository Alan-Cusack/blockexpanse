/**
 * @file Vendored from @toeverything/y-indexeddb v0.10.0-canary.9.
 *
 * IndexedDB-backed data source and the lazy document provider built on top of
 * `createLazyProvider` from `y-provider`.
 */
import { type IDBPDatabase, openDB } from 'idb';
import { createLazyProvider, writeOperation } from 'y-provider';
import { diffUpdate, type Doc, encodeStateVectorFromUpdate } from 'yjs';

import type {
  BlockSuiteBinaryDB,
  IndexedDBProvider,
  UpdateMessage,
} from './shared.js';

import { dbVersion, DEFAULT_DB_NAME, upgradeDB } from './shared.js';
import { mergeUpdates } from './utils.js';

function assertExists<T>(
  val: T,
  message: string | Error = 'val does not exist'
): asserts val {
  if (val == null) {
    throw message instanceof Error ? message : new Error(message);
  }
}

// Default number of buffered updates before they get squashed into one.
let mergeCount = 500;

export function setMergeCount(count: number): void {
  mergeCount = count;
}

export const createIndexedDBDatasource = ({
  dbName = DEFAULT_DB_NAME,
  mergeCount,
}: {
  dbName?: string | undefined;
  mergeCount?: number | undefined;
}) => {
  let dbPromise: Promise<IDBPDatabase<BlockSuiteBinaryDB>> | null = null;
  const getDB = async (): Promise<IDBPDatabase<BlockSuiteBinaryDB>> => {
    if (dbPromise === null) {
      dbPromise = openDB<BlockSuiteBinaryDB>(dbName, dbVersion, {
        upgrade: upgradeDB,
      });
    }
    return dbPromise;
  };

  return {
    queryDocState: async (
      guid: string,
      options?: { stateVector?: Uint8Array; targetClientId?: number }
    ) => {
      try {
        const persisted = await (await getDB())
          .transaction('workspace', 'readonly')
          .objectStore('workspace')
          .get(guid);
        if (!persisted) {
          return false;
        }
        const { updates } = persisted;
        const merged = mergeUpdates(updates.map(({ update }) => update));
        return {
          missing: options?.stateVector
            ? diffUpdate(merged, options?.stateVector)
            : merged,
          state: encodeStateVectorFromUpdate(merged),
        };
      } catch (error) {
        if (
          !(error as Error)?.message?.includes(
            'The database connection is closing.'
          )
        ) {
          throw error;
        }
        return false;
      }
    },
    sendDocUpdate: async (guid: string, update: Uint8Array) => {
      try {
        const store = (await getDB())
          .transaction('workspace', 'readwrite')
          .objectStore('workspace');
        const { updates } = (await store.get(guid)) ?? { updates: [] };
        let nextUpdates: UpdateMessage[] = [
          ...updates,
          { timestamp: Date.now(), update },
        ];
        if (mergeCount && nextUpdates.length >= mergeCount) {
          const merged = mergeUpdates(nextUpdates.map(({ update }) => update));
          nextUpdates = [{ timestamp: Date.now(), update: merged }];
        }
        await writeOperation(
          store.put({
            id: guid,
            updates: nextUpdates,
          })
        );
      } catch (error) {
        if (
          !(error as Error)?.message?.includes(
            'The database connection is closing.'
          )
        ) {
          throw error;
        }
      }
    },
    disconnect: () => {
      getDB()
        .then(db => db.close())
        .then(() => {
          dbPromise = null;
        })
        .catch(console.error);
    },
    cleanup: async () => {
      await (await getDB()).clear('workspace');
    },
  };
};

/**
 * We use `doc.guid` as the unique key, please make sure it not changes.
 */
export const createIndexedDBProvider = (
  doc: Doc,
  dbName: string = DEFAULT_DB_NAME
): IndexedDBProvider => {
  const datasource = createIndexedDBDatasource({ dbName, mergeCount });
  let lazyProvider: ReturnType<typeof createLazyProvider> | null = null;
  const provider: IndexedDBProvider = {
    get status() {
      assertExists(lazyProvider);
      return lazyProvider.status;
    },
    subscribeStatusChange(onStatusChange: () => void) {
      assertExists(lazyProvider);
      return lazyProvider.subscribeStatusChange(onStatusChange);
    },
    connect: () => {
      if (provider.connected) {
        provider.disconnect();
      }
      lazyProvider = createLazyProvider(doc, datasource, { origin: 'idb' });
      lazyProvider.connect();
    },
    disconnect: () => {
      datasource.disconnect();
      lazyProvider?.disconnect();
      lazyProvider = null;
    },
    cleanup: async () => {
      await datasource?.cleanup();
    },
    get connected() {
      return lazyProvider?.connected || false;
    },
    datasource,
  };
  return provider;
};
