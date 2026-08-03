import type { BaseAdapter, Job } from '@blockexpanse/store';

import { createIdentifier } from '@blockexpanse/global/di';

export type AdapterFactory = {
  // TODO(@chen): Make it return the specific adapter type
  get: (job: Job) => BaseAdapter;
};

export const AdapterFactoryIdentifier =
  createIdentifier<AdapterFactory>('AdapterFactory');
