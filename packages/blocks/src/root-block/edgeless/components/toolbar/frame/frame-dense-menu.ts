import { menu } from '@blockexpanse/affine-components/context-menu';
import { FrameIcon } from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

import type { DenseMenuBuilder } from '../common/type.js';

import { FrameConfig } from './config.js';

export const buildFrameDenseMenu: DenseMenuBuilder = edgeless => {
  const t = edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;

  return menu.subMenu({
    name: t(I18nKeys.editor.edgeless.frame, 'Frame'),
    prefix: FrameIcon,
    select: () => edgeless.gfx.tool.setTool({ type: 'frame' }),
    isSelected: edgeless.gfx.tool.currentToolName$.peek() === 'frame',
    options: {
      items: [
        menu.action({
          name: t(I18nKeys.editor.edgeless.custom, 'Custom'),
          select: () => edgeless.gfx.tool.setTool({ type: 'frame' }),
        }),
        ...FrameConfig.map(config =>
          menu.action({
            name: `Slide ${config.name}`,
            select: () => {
              edgeless.gfx.tool.setTool('default');
              edgeless.service.frame.createFrameOnViewportCenter(config.wh);
            },
          })
        ),
      ],
    },
  });
};
