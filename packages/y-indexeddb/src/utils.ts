/**
 * @file Vendored from @toeverything/y-indexeddb v0.10.0-canary.9.
 *
 * Binary helpers: update merging, legacy database migration, and the raw
 * download / overwrite / push helpers for workspace persist records.
 */
import { type IDBPDatabase, openDB } from 'idb';
import { applyUpdate, Doc, encodeStateAsUpdate } from 'yjs';

import type { BlockSuiteBinaryDB, OldYjsDB, UpdateMessage } from './shared.js';

import { dbVersion, DEFAULT_DB_NAME, upgradeDB } from './shared.js';

export function mergeUpdates(updates: Uint8Array[]): Uint8Array {
  const doc = new Doc();
  updates.forEach(update => {
    applyUpdate(doc, update);
  });
  return encodeStateAsUpdate(doc);
}

// Cached result of `indexedDB.databases()`, shared across `tryMigrate` calls.
let cachedDatabases: IDBDatabaseInfo[] | undefined;

/**
 * Probes whether a database with the given name already exists.
 *
 * Returns `true` when the database existed (no upgrade was required to open
 * it). When the database had to be created in order to be opened, the freshly
 * created (empty) database is deleted again and `false` is returned.
 */
async function databaseExists(name: string): Promise<boolean> {
  return new Promise(resolve => {
    const request = indexedDB.open(name);
    let existed = true;
    request.onsuccess = function () {
      request.result.close();
      if (!existed) {
        indexedDB.deleteDatabase(name);
      }
      resolve(existed);
    };
    request.onupgradeneeded = function () {
      existed = false;
    };
  });
}

/**
 * Try to migrate the old database schema to the new one.
 *
 * This function will be removed in the future since we don't need to support
 * the old database forever. It reads any legacy `updates` object store (an
 * array of `Uint8Array` updates) and folds it into the new `workspace` store
 * as a single squashed `WorkspacePersist` record.
 */
export async function tryMigrate(
  db: IDBPDatabase<BlockSuiteBinaryDB>,
  id: string,
  dbName: string = DEFAULT_DB_NAME
): Promise<void> {
  do {
    if (
      !cachedDatabases ||
      localStorage.getItem(`${dbName}-migration`) !== 'true'
    ) {
      try {
        cachedDatabases = await indexedDB.databases();
      } catch {
        if (await databaseExists(id)) {
          await openDB<OldYjsDB>(id, 1).then(async database => {
            if (!database.objectStoreNames.contains('updates')) {
              return;
            }
            const updates = await database
              .transaction('updates', 'readonly')
              .objectStore('updates')
              .getAll();
            if (
              !Array.isArray(updates) ||
              !updates.every(update => update instanceof Uint8Array)
            ) {
              return;
            }
            const merged = mergeUpdates(updates);
            const store = db
              .transaction('workspace', 'readwrite')
              .objectStore('workspace');
            if (!(await store.get(id))) {
              console.log('upgrading the database');
              await store.put({
                id,
                updates: [
                  {
                    timestamp: Date.now(),
                    update: merged,
                  },
                ],
              });
            }
          });
          break;
        }
      }
      await Promise.all(
        (cachedDatabases ?? []).map(databaseInfo => {
          if (databaseInfo.name && databaseInfo.version === 1) {
            const name = databaseInfo.name;
            const version = databaseInfo.version;
            return openDB<OldYjsDB>(name, version).then(async database => {
              if (!database.objectStoreNames.contains('updates')) {
                return;
              }
              const updates = await database
                .transaction('updates', 'readonly')
                .objectStore('updates')
                .getAll();
              if (
                !Array.isArray(updates) ||
                !updates.every(update => update instanceof Uint8Array)
              ) {
                return;
              }
              const merged = mergeUpdates(updates);
              const store = db
                .transaction('workspace', 'readwrite')
                .objectStore('workspace');
              if (!(await store.get(name))) {
                console.log('upgrading the database');
                await store.put({
                  id: name,
                  updates: [
                    {
                      timestamp: Date.now(),
                      update: merged,
                    },
                  ],
                });
              }
            });
          }
          return undefined;
        })
      );
      localStorage.setItem(`${dbName}-migration`, 'true');
      break;
    }
    // eslint-disable-next-line no-constant-condition -- do/while(false) is a labeled-block substitute used by the upstream source; the body breaks out explicitly
  } while (false);
}

export async function downloadBinary(
  guid: string,
  dbName: string = DEFAULT_DB_NAME
): Promise<UpdateMessage['update'] | false> {
  const persisted = await (
    await openDB<BlockSuiteBinaryDB>(dbName, dbVersion, { upgrade: upgradeDB })
  )
    .transaction('workspace', 'readonly')
    .objectStore('workspace')
    .get(guid);
  return persisted
    ? mergeUpdates(persisted.updates.map(({ update }) => update))
    : false;
}

export async function overwriteBinary(
  guid: string,
  update: UpdateMessage['update'],
  dbName: string = DEFAULT_DB_NAME
): Promise<void> {
  await (
    await openDB<BlockSuiteBinaryDB>(dbName, dbVersion, { upgrade: upgradeDB })
  )
    .transaction('workspace', 'readwrite')
    .objectStore('workspace')
    .put({
      id: guid,
      updates: [
        {
          timestamp: Date.now(),
          update,
        },
      ],
    });
}

export async function pushBinary(
  guid: string,
  update: UpdateMessage['update'],
  dbName: string = DEFAULT_DB_NAME
): Promise<void> {
  const store = (
    await openDB<BlockSuiteBinaryDB>(dbName, dbVersion, { upgrade: upgradeDB })
  )
    .transaction('workspace', 'readwrite')
    .objectStore('workspace');
  const persisted = await store.get(guid);
  if (persisted) {
    persisted.updates.push({
      timestamp: Date.now(),
      update,
    });
    await store.put(persisted);
  } else {
    await store.put({
      id: guid,
      updates: [
        {
          timestamp: Date.now(),
          update,
        },
      ],
    });
  }
}
