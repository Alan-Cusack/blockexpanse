import { menu } from '@blockexpanse/affine-components/context-menu';
import {
  LassoFreeHandIcon,
  LassoPolygonalIcon,
} from '@blockexpanse/affine-components/icons';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

import type { DenseMenuBuilder } from '../common/type.js';

import { LassoMode } from '../../../../../_common/types.js';

export const buildLassoDenseMenu: DenseMenuBuilder = edgeless => {
  // TODO: active state
  // const prevMode =
  //   edgeless.service.editPropsStore.getLastProps('lasso').mode ??
  //   LassoMode.FreeHand;

  const t = edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const isActive = edgeless.gfx.tool.currentToolName$.peek() === 'lasso';

  const createSelect = (mode: LassoMode) => () => {
    edgeless.gfx.tool.setTool('lasso', { mode });
  };

  return menu.subMenu({
    name: t(I18nKeys.editor.edgeless.lasso, 'Lasso'),
    prefix: LassoFreeHandIcon,
    select: createSelect(LassoMode.FreeHand),
    isSelected: isActive,
    options: {
      items: [
        menu.action({
          prefix: LassoFreeHandIcon,
          name: t(I18nKeys.editor.edgeless.lassoFree, 'Free'),
          select: createSelect(LassoMode.FreeHand),
          // isSelected: isActive && prevMode === LassoMode.FreeHand,
        }),
        menu.action({
          prefix: LassoPolygonalIcon,
          name: t(I18nKeys.editor.edgeless.lassoPolygonal, 'Polygonal'),
          select: createSelect(LassoMode.Polygonal),
          // isSelected: isActive && prevMode === LassoMode.Polygonal,
        }),
      ],
    },
  });
};
