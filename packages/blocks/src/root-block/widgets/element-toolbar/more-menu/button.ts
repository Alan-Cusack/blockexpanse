import type { MenuItemGroup } from '@blockexpanse/affine-components/toolbar';

import { renderGroups } from '@blockexpanse/affine-components/toolbar';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { WithDisposable } from '@blockexpanse/global/utils';
import { MoreHorizontalIcon, MoreVerticalIcon } from '@blockexpanse/icons/lit';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { EdgelessRootBlockComponent } from '../../../edgeless/edgeless-root-block.js';

import { ElementToolbarMoreMenuContext } from './context.js';

export class EdgelessMoreButton extends WithDisposable(LitElement) {
  override render() {
    const context = new ElementToolbarMoreMenuContext(this.edgeless);
    const actions = renderGroups(this.groups, context);
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const moreLabel = t(I18nKeys.editor.format.more, 'More');

    return html`
      <editor-menu-button
        .contentPadding=${'8px'}
        .button=${html`
          <editor-icon-button aria-label=${moreLabel} .tooltip=${moreLabel}>
            ${this.vertical
              ? MoreVerticalIcon({ width: '20', height: '20' })
              : MoreHorizontalIcon({ width: '20', height: '20' })}
          </editor-icon-button>
        `}
      >
        <div
          class="more-actions-container"
          data-size="large"
          data-orientation="vertical"
        >
          ${actions}
        </div>
      </editor-menu-button>
    `;
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor elements: BlockExpanse.EdgelessModel[] = [];

  @property({ attribute: false })
  accessor groups!: MenuItemGroup<ElementToolbarMoreMenuContext>[];

  @property({ attribute: false })
  accessor vertical = false;
}
