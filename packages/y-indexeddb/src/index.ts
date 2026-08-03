/**
 * @file Vendored from @toeverything/y-indexeddb v0.10.0-canary.9.
 *
 * Package entry point: milestone snapshots, update reverting, the
 * `writeOperation` beforeunload guard, and re-exports of the provider / shared
 * / utils modules.
 */
import { openDB } from 'idb';
import {
  applyUpdate,
  Doc,
  encodeStateAsUpdate,
  encodeStateVector,
  UndoManager,
} from 'yjs';

import type { WorkspaceMilestone } from './shared.js';

import { dbVersion, DEFAULT_DB_NAME, upgradeDB } from './shared.js';

export const writeOperation = async (op: Promise<unknown>): Promise<void> => {
  window.addEventListener('beforeunload', beforeUnloadHandler, {
    capture: true,
  });
  await op;
  window.removeEventListener('beforeunload', beforeUnloadHandler, {
    capture: true,
  });
};

const SNAPSHOT_ORIGIN = 'snapshot-origin';

const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
  event.preventDefault();
  event.returnValue = 'Data is not saved. Are you sure you want to leave?';
};

export function revertUpdate(
  doc: Doc,
  snapshotUpdate: Uint8Array,
  getMetadata: (key: string) => 'Text' | 'Map' | 'Array'
): void {
  const snapshotDoc = new Doc();
  applyUpdate(snapshotDoc, snapshotUpdate, SNAPSHOT_ORIGIN);
  const docStateVector = encodeStateVector(doc);
  const snapshotStateVector = encodeStateVector(snapshotDoc);
  const diff = encodeStateAsUpdate(doc, snapshotStateVector);
  const undoManager = new UndoManager(
    [...snapshotDoc.share.keys()].map(key => {
      const type = getMetadata(key);
      if (type === 'Text') {
        return snapshotDoc.getText(key);
      }
      if (type === 'Map') {
        return snapshotDoc.getMap(key);
      }
      if (type === 'Array') {
        return snapshotDoc.getArray(key);
      }
      throw new Error('Unknown type');
    }),
    {
      trackedOrigins: new Set([SNAPSHOT_ORIGIN]),
    }
  );
  applyUpdate(snapshotDoc, diff, SNAPSHOT_ORIGIN);
  undoManager.undo();
  const revertDiff = encodeStateAsUpdate(snapshotDoc, docStateVector);
  applyUpdate(doc, revertDiff, SNAPSHOT_ORIGIN);
}

export class EarlyDisconnectError extends Error {
  constructor() {
    super('Early disconnect');
  }
}

export class CleanupWhenConnectingError extends Error {
  constructor() {
    super('Cleanup when connecting');
  }
}

export const markMilestone = async (
  id: string,
  doc: Doc,
  name: string,
  dbName: string = DEFAULT_DB_NAME
): Promise<void> => {
  const store = (await openDB(dbName, dbVersion, { upgrade: upgradeDB }))
    .transaction('milestone', 'readwrite')
    .objectStore('milestone');
  const stored = await store.get('id');
  const update = encodeStateAsUpdate(doc);
  if (stored) {
    stored.milestone[name] = update;
    await store.put(stored);
  } else {
    await store.put({
      id,
      milestone: {
        [name]: update,
      },
    });
  }
};

export const getMilestones = async (
  id: string,
  dbName: string = DEFAULT_DB_NAME
): Promise<null | WorkspaceMilestone['milestone']> => {
  const stored = await (await openDB(dbName, dbVersion, { upgrade: upgradeDB }))
    .transaction('milestone', 'readonly')
    .objectStore('milestone')
    .get(id);
  return stored ? stored.milestone : null;
};

export * from './provider.js';
export * from './shared.js';
export * from './utils.js';
