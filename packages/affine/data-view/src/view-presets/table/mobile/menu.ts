import {
  menu,
  popFilterableSimpleMenu,
  type PopupTarget,
} from '@blockexpanse/affine-components/context-menu';
import { DeleteIcon, ExpandFullIcon } from '@blockexpanse/icons/lit';

import type { DataViewRenderer } from '../../../core/data-view.js';
import type { SingleView } from '../../../core/index.js';

import { tr } from '../../../core/utils/i18n.js';

export const popMobileRowMenu = (
  target: PopupTarget,
  rowId: string,
  dataViewEle: DataViewRenderer,
  view: SingleView
) => {
  popFilterableSimpleMenu(target, [
    menu.group({
      items: [
        menu.action({
          name: tr('Expand Row'),
          prefix: ExpandFullIcon(),
          select: () => {
            dataViewEle.openDetailPanel({
              view: view,
              rowId: rowId,
            });
          },
        }),
      ],
    }),
    menu.group({
      name: '',
      items: [
        menu.action({
          name: tr('Delete Row'),
          class: { 'delete-item': true },
          prefix: DeleteIcon(),
          select: () => {
            view.rowDelete([rowId]);
          },
        }),
      ],
    }),
  ]);
};
