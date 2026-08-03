import type { ViewMeta } from '@blockexpanse/data-view';

import {
  viewConverts,
  viewPresets,
} from '@blockexpanse/data-view/view-presets';

export const databaseBlockViews: ViewMeta[] = [
  viewPresets.tableViewMeta,
  viewPresets.kanbanViewMeta,
];

export const databaseBlockViewMap = Object.fromEntries(
  databaseBlockViews.map(view => [view.type, view])
);
export const databaseBlockViewConverts = [...viewConverts];
