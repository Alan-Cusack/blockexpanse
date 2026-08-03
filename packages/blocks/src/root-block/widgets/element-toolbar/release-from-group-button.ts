import { ReleaseFromGroupButtonIcon } from '@blockexpanse/affine-components/icons';
import { GroupElementModel } from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { WithDisposable } from '@blockexpanse/global/utils';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';

export class EdgelessReleaseFromGroupButton extends WithDisposable(LitElement) {
  private _releaseFromGroup() {
    const service = this.edgeless.service;
    const element = service.selection.firstElement;

    if (!(element.group instanceof GroupElementModel)) return;

    const group = element.group;
    // eslint-disable-next-line unicorn/prefer-dom-node-remove
    group.removeChild(element);

    element.index = service.layer.generateIndex();

    const parent = group.group;
    if (parent instanceof GroupElementModel) {
      parent.addChild(element);
    }
  }

  protected override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const label = t(
      I18nKeys.editor.edgeless.releaseFromGroup,
      'Release from group'
    );

    return html`
      <editor-icon-button
        aria-label=${label}
        .tooltip=${label}
        .iconSize=${'20px'}
        @click=${() => this._releaseFromGroup()}
      >
        ${ReleaseFromGroupButtonIcon}
      </editor-icon-button>
    `;
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;
}

export function renderReleaseFromGroupButton(
  edgeless: EdgelessRootBlockComponent
) {
  return html`
    <edgeless-release-from-group-button
      .edgeless=${edgeless}
    ></edgeless-release-from-group-button>
  `;
}
