import { popupTargetFromElement } from '@blockexpanse/affine-components/context-menu';
import { I18nKeys } from '@blockexpanse/affine-shared/services';
import { SortIcon } from '@blockexpanse/icons/lit';
import { html } from 'lit';

import type { DataViewWidgetProps } from '../../../core/widget/types.js';

import { sortTraitKey } from '../../../core/sort/manager.js';
import { createSortUtils } from '../../../core/sort/utils.js';
import { t } from '../../../core/utils/i18n.js';
import { popSortRoot } from './root-panel.js';

export const renderSortBar = (props: DataViewWidgetProps) => {
  const sortTrait = props.dataViewInstance.view.traitGet(sortTraitKey);
  if (!sortTrait) {
    return;
  }
  const count = sortTrait.sortList$.value.length;
  if (count === 0) {
    return;
  }
  const text =
    count === 1
      ? html`${t()(I18nKeys.editor.dataView.filterUI.oneSort, '1 Sort')}`
      : html`${t()(I18nKeys.editor.dataView.filterUI.nSorts, '{count} Sorts', {
          count,
        })}`;
  const click = (event: MouseEvent) => {
    popSortRoot(popupTargetFromElement(event.currentTarget as HTMLElement), {
      sortUtils: createSortUtils(sortTrait, props.dataViewInstance.eventTrace),
    });
  };
  return html` <data-view-component-button
    class="data-view-sort-button"
    .onClick="${click}"
    hoverType="border"
    .icon="${SortIcon()}"
    .text="${text}"
  ></data-view-component-button>`;
};
