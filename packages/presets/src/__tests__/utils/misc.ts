import { replaceIdMiddleware } from '@blockexpanse/blocks';
import { type DocCollection, type DocSnapshot, Job } from '@blockexpanse/store';

export async function importFromSnapshot(
  collection: DocCollection,
  snapshot: DocSnapshot
) {
  const job = new Job({
    collection,
    middlewares: [replaceIdMiddleware],
  });

  return job.snapshotToDoc(snapshot);
}
