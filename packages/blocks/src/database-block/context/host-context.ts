import type { EditorHost } from '@blockexpanse/block-std';

import { createContextKey } from '@blockexpanse/data-view';

export const HostContextKey = createContextKey<EditorHost | undefined>(
  'editor-host',
  undefined
);
