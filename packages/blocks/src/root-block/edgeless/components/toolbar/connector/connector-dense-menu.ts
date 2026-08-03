import { menu } from '@blockexpanse/affine-components/context-menu';
import {
  ConnectorCWithArrowIcon,
  ConnectorIcon,
  ConnectorLWithArrowIcon,
  ConnectorXWithArrowIcon,
} from '@blockexpanse/affine-components/icons';
import { ConnectorMode } from '@blockexpanse/affine-model';
import {
  EditPropsStore,
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

import type { DenseMenuBuilder } from '../common/type.js';

export const buildConnectorDenseMenu: DenseMenuBuilder = edgeless => {
  const t = edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const prevMode =
    edgeless.std.get(EditPropsStore).lastProps$.value.connector.mode;

  const isSelected = edgeless.gfx.tool.currentToolName$.peek() === 'connector';

  const createSelect =
    (mode: ConnectorMode, record = true) =>
    () => {
      edgeless.gfx.tool.setTool('connector', {
        mode,
      });
      record &&
        edgeless.std.get(EditPropsStore).recordLastProps('connector', { mode });
    };

  return menu.subMenu({
    name: t(I18nKeys.editor.edgeless.connector, 'Connector'),
    prefix: ConnectorIcon,
    select: createSelect(prevMode, false),
    isSelected,
    options: {
      items: [
        menu.action({
          name: t(I18nKeys.editor.edgeless.connectorTools.curve, 'Curve'),
          prefix: ConnectorCWithArrowIcon,
          select: createSelect(ConnectorMode.Curve),
          isSelected: isSelected && prevMode === ConnectorMode.Curve,
        }),
        menu.action({
          name: t(I18nKeys.editor.edgeless.connectorTools.elbowed, 'Elbowed'),
          prefix: ConnectorXWithArrowIcon,
          select: createSelect(ConnectorMode.Orthogonal),
          isSelected: isSelected && prevMode === ConnectorMode.Orthogonal,
        }),
        menu.action({
          name: t(I18nKeys.editor.edgeless.connectorTools.straight, 'Straight'),
          prefix: ConnectorLWithArrowIcon,
          select: createSelect(ConnectorMode.Straight),
          isSelected: isSelected && prevMode === ConnectorMode.Straight,
        }),
      ],
    },
  });
};
