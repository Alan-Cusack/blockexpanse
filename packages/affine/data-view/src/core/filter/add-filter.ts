import type { Middleware } from '@floating-ui/dom';
import type { ReadonlySignal } from '@preact/signals-core';

import {
  menu,
  popMenu,
  type PopupTarget,
} from '@blockexpanse/affine-components/context-menu';
import { AddCursorIcon } from '@blockexpanse/icons/lit';

import type { Variable } from '../expression/index.js';
import type { Filter } from './types.js';

import { tr } from '../utils/i18n.js';
import { renderUniLit } from '../utils/index.js';
import { firstFilterByRef, firstFilterInGroup } from './utils.js';

export const popCreateFilter = (
  target: PopupTarget,
  props: {
    vars: ReadonlySignal<Variable[]>;
    onSelect: (filter: Filter) => void;
    onClose?: () => void;
    onBack?: () => void;
  },
  ops?: {
    middleware?: Middleware[];
  }
) => {
  popMenu(target, {
    middleware: ops?.middleware,
    options: {
      onClose: props.onClose,
      title: {
        onBack: props.onBack,
        text: tr('New filter'),
      },
      items: [
        menu.group({
          items: props.vars.value.map(v =>
            menu.action({
              name: tr(v.name),
              prefix: renderUniLit(v.icon, {}),
              select: () => {
                props.onSelect(
                  firstFilterByRef(props.vars.value, {
                    type: 'ref',
                    name: v.id,
                  })
                );
              },
            })
          ),
        }),
        menu.group({
          name: '',
          items: [
            menu.action({
              name: tr('Add filter group'),
              prefix: AddCursorIcon(),
              select: () => {
                props.onSelect(firstFilterInGroup(props.vars.value));
              },
            }),
          ],
        }),
      ],
    },
  });
};
