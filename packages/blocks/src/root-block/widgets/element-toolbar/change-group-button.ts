import type { GroupElementModel } from '@blockexpanse/affine-model';

import {
  NoteIcon,
  RenameIcon,
  UngroupButtonIcon,
} from '@blockexpanse/affine-components/icons';
import { toastI18n } from '@blockexpanse/affine-components/toast';
import { renderToolbarSeparator } from '@blockexpanse/affine-components/toolbar';
import {
  DEFAULT_NOTE_HEIGHT,
  NoteDisplayMode,
} from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { matchFlavours } from '@blockexpanse/affine-shared/utils';
import {
  deserializeXYWH,
  serializeXYWH,
  WithDisposable,
} from '@blockexpanse/global/utils';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';

import { mountGroupTitleEditor } from '../../edgeless/utils/text.js';

export class EdgelessChangeGroupButton extends WithDisposable(LitElement) {
  private _insertIntoPage() {
    if (!this.edgeless.doc.root) return;

    const rootModel = this.edgeless.doc.root;
    const notes = rootModel.children.filter(
      model =>
        matchFlavours(model, ['affine:note']) &&
        model.displayMode !== NoteDisplayMode.EdgelessOnly
    );
    const lastNote = notes[notes.length - 1];
    const referenceGroup = this.groups[0];

    let targetParent = lastNote?.id;

    if (!lastNote) {
      const targetXYWH = deserializeXYWH(referenceGroup.xywh);

      targetXYWH[1] = targetXYWH[1] + targetXYWH[3];
      targetXYWH[3] = DEFAULT_NOTE_HEIGHT;

      const newAddedNote = this.edgeless.doc.addBlock(
        'affine:note',
        {
          xywh: serializeXYWH(...targetXYWH),
        },
        rootModel.id
      );

      targetParent = newAddedNote;
    }

    this.edgeless.doc.addBlock(
      'affine:surface-ref',
      {
        reference: this.groups[0].id,
        refFlavour: 'group',
      },
      targetParent
    );

    toastI18n(
      this.edgeless.host,
      I18nKeys.editor.toast.groupInserted,
      'Group has been inserted into page'
    );
  }

  protected override render() {
    const t = this.edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    const insertIntoPageLabel = t(
      I18nKeys.editor.edgeless.insertIntoPage,
      'Insert into Page'
    );
    const renameLabel = t(I18nKeys.editor.action.rename, 'Rename');
    const ungroupLabel = t(I18nKeys.editor.edgeless.ungroup, 'Ungroup');
    const { groups } = this;
    const onlyOne = groups.length === 1;

    return join(
      [
        onlyOne
          ? html`
              <editor-icon-button
                aria-label=${insertIntoPageLabel}
                .tooltip=${insertIntoPageLabel}
                .iconSize=${'20px'}
                .labelHeight=${'20px'}
                @click=${this._insertIntoPage}
              >
                ${NoteIcon}
                <span class="label">${insertIntoPageLabel}</span>
              </editor-icon-button>
            `
          : nothing,

        onlyOne
          ? html`
              <editor-icon-button
                aria-label=${renameLabel}
                .tooltip=${renameLabel}
                .iconSize=${'20px'}
                @click=${() => mountGroupTitleEditor(groups[0], this.edgeless)}
              >
                ${RenameIcon}
              </editor-icon-button>
            `
          : nothing,

        html`
          <editor-icon-button
            aria-label=${ungroupLabel}
            .tooltip=${ungroupLabel}
            .iconSize=${'20px'}
            @click=${() =>
              groups.forEach(group => this.edgeless.service.ungroup(group))}
          >
            ${UngroupButtonIcon}
          </editor-icon-button>
        `,
      ].filter(button => button !== nothing),
      renderToolbarSeparator
    );
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor groups!: GroupElementModel[];
}

export function renderGroupButton(
  edgeless: EdgelessRootBlockComponent,
  groups?: GroupElementModel[]
) {
  if (!groups?.length) return nothing;

  return html`
    <edgeless-change-group-button .edgeless=${edgeless} .groups=${groups}>
    </edgeless-change-group-button>
  `;
}
