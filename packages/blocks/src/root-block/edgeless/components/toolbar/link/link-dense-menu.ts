import { menu } from '@blockexpanse/affine-components/context-menu';
import { LinkIcon } from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
  TelemetryProvider,
} from '@blockexpanse/affine-shared/services';

import type { DenseMenuBuilder } from '../common/type.js';

export const buildLinkDenseMenu: DenseMenuBuilder = edgeless => {
  const t = edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;

  return menu.action({
    name: t(I18nKeys.editor.edgeless.link, 'Link'),
    prefix: LinkIcon,
    select: () => {
      const { insertedLinkType } = edgeless.std.command.exec(
        'insertLinkByQuickSearch'
      );

      insertedLinkType
        ?.then(type => {
          const flavour = type?.flavour;
          if (!flavour) return;

          edgeless.std
            .getOptional(TelemetryProvider)
            ?.track('CanvasElementAdded', {
              control: 'toolbar:general',
              page: 'whiteboard editor',
              module: 'toolbar',
              type: flavour.split(':')[1],
            });
        })
        .catch(console.error);
    },
  });
};
