import type { SurfaceRefBlockModel } from '@blockexpanse/affine-model';

import { HoverController } from '@blockexpanse/affine-components/hover';
import {
  CaptionIcon,
  CenterPeekIcon,
  EdgelessModeIcon,
  MoreVerticalIcon,
  OpenIcon,
  SmallArrowDownIcon,
} from '@blockexpanse/affine-components/icons';
import { isPeekable, peek } from '@blockexpanse/affine-components/peek';
import {
  cloneGroups,
  type MenuItem,
  type MenuItemGroup,
  renderGroups,
  renderToolbarSeparator,
} from '@blockexpanse/affine-components/toolbar';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { WidgetComponent } from '@blockexpanse/block-std';
import { offset, shift } from '@floating-ui/dom';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';

import type { SurfaceRefBlockComponent } from '../../../surface-ref-block/index.js';

import { PAGE_HEADER_HEIGHT } from '../../../_common/consts.js';
import { getMoreMenuConfig } from '../../configs/toolbar.js';
import { createBuiltInGroups } from './config.js';
import { SurfaceRefToolbarContext } from './context.js';

export const AFFINE_SURFACE_REF_TOOLBAR = 'affine-surface-ref-toolbar';

export class AffineSurfaceRefToolbar extends WidgetComponent<
  SurfaceRefBlockModel,
  SurfaceRefBlockComponent
> {
  /*
   * Caches the more menu items.
   * Currently only supports configuring more menu.
   */
  moreGroups: MenuItemGroup<SurfaceRefToolbarContext>[] = cloneGroups(
    createBuiltInGroups()
  );

  private _hoverController = new HoverController(
    this,
    ({ abortController }) => {
      const surfaceRefBlock = this.block;
      const selection = this.host.selection;

      const textSelection = selection.find('text');
      if (
        !!textSelection &&
        (!!textSelection.to || !!textSelection.from.length)
      ) {
        return null;
      }

      const blockSelections = selection.filter('block');
      if (
        blockSelections.length > 1 ||
        (blockSelections.length === 1 &&
          blockSelections[0].blockId !== surfaceRefBlock.blockId)
      ) {
        return null;
      }

      return {
        template: SurfaceRefToolbarOptions({
          context: new SurfaceRefToolbarContext(this.block, abortController),
          groups: this.moreGroups,
        }),
        computePosition: {
          referenceElement: this.block,
          placement: 'top-start',
          middleware: [
            offset({
              mainAxis: 12,
              crossAxis: 10,
            }),
            shift({
              crossAxis: true,
              padding: {
                top: PAGE_HEADER_HEIGHT + 12,
                bottom: 12,
                right: 12,
              },
            }),
          ],
          autoUpdate: true,
        },
      };
    }
  );

  override connectedCallback() {
    super.connectedCallback();

    const t = this.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
    this.moreGroups = getMoreMenuConfig(this.std).configure(
      cloneGroups(createBuiltInGroups(t))
    );
    this._hoverController.setReference(this.block);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [AFFINE_SURFACE_REF_TOOLBAR]: AffineSurfaceRefToolbar;
  }
}

function SurfaceRefToolbarOptions({
  context,
  groups,
}: {
  context: SurfaceRefToolbarContext;
  groups: MenuItemGroup<SurfaceRefToolbarContext>[];
}) {
  const { blockComponent, abortController } = context;
  const t = blockComponent.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const readonly = blockComponent.model.doc.readonly;
  const hasValidReference = !!blockComponent.referenceModel;

  const openMenuActions: MenuItem[] = [];
  if (hasValidReference) {
    openMenuActions.push({
      type: 'open-in-edgeless',
      label: t(I18nKeys.editor.action.openInEdgeless, 'Open in edgeless'),
      icon: EdgelessModeIcon,
      action: () => blockComponent.viewInEdgeless(),
      disabled: readonly,
    });

    if (isPeekable(blockComponent)) {
      openMenuActions.push({
        type: 'open-in-center-peek',
        label: t(
          I18nKeys.editor.action.openInCenterPeek,
          'Open in center peek'
        ),
        icon: CenterPeekIcon,
        action: () => peek(blockComponent),
      });
    }
  }

  const moreMenuActions = renderGroups(groups, context);
  const addCaptionLabel = t(I18nKeys.editor.action.addCaption, 'Add Caption');
  const captionLabel = t(I18nKeys.editor.action.caption, 'Caption');
  const moreLabel = t(I18nKeys.editor.format.more, 'More');

  const buttons = [
    openMenuActions.length
      ? html`
          <editor-menu-button
            .contentPadding=${'8px'}
            .button=${html`
              <editor-icon-button
                aria-label="Open doc"
                .justify=${'space-between'}
                .labelHeight=${'20px'}
              >
                ${OpenIcon}${SmallArrowDownIcon}
              </editor-icon-button>
            `}
          >
            <div data-size="large" data-orientation="vertical">
              ${repeat(
                openMenuActions,
                button => button.label,
                ({ label, icon, action, disabled }) => html`
                  <editor-menu-action
                    aria-label=${ifDefined(label)}
                    ?disabled=${disabled}
                    @click=${action}
                  >
                    ${icon}<span class="label">${label}</span>
                  </editor-menu-action>
                `
              )}
            </div>
          </editor-menu-button>
        `
      : nothing,

    readonly
      ? nothing
      : html`
          <editor-icon-button
            aria-label=${captionLabel}
            .tooltip=${addCaptionLabel}
            @click=${() => {
              abortController.abort();
              blockComponent.captionElement.show();
            }}
          >
            ${CaptionIcon}
          </editor-icon-button>
        `,

    html`
      <editor-menu-button
        .contentPadding=${'8px'}
        .button=${html`
          <editor-icon-button aria-label=${moreLabel} .tooltip=${moreLabel}>
            ${MoreVerticalIcon}
          </editor-icon-button>
        `}
      >
        <div data-size="large" data-orientation="vertical">
          ${moreMenuActions}
        </div>
      </editor-menu-button>
    `,
  ];

  return html`
    <editor-toolbar class="surface-ref-toolbar-container">
      ${join(
        buttons.filter(button => button !== nothing),
        renderToolbarSeparator
      )}
    </editor-toolbar>
  `;
}
