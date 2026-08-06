import type { TableBlockModel } from '@blockexpanse/affine-model';

import { CaptionedBlockComponent } from '@blockexpanse/affine-components/caption';
import { DocModeProvider } from '@blockexpanse/affine-shared/services';
import {
  type BlockComponent,
  RANGE_QUERY_EXCLUDE_ATTR,
  RANGE_SYNC_EXCLUDE_ATTR,
} from '@blockexpanse/block-std';
import { IS_MOBILE } from '@blockexpanse/global/env';
import { signal } from '@preact/signals-core';
import { html, nothing } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';

import { SelectionController } from './selection-controller.js';
import {
  rowStyle,
  table,
  tableContainer,
  tableWrapper,
} from './table-block-css.js';
import { TableDataManager } from './table-data-manager.js';

const EDGELESS_TOP_CONTENTEDITABLE_SELECTOR =
  'affine-edgeless-note .edgeless-note-page-content, affine-edgeless-text';

export const TableBlockComponentName = 'affine-table';
export class TableBlockComponent extends CaptionedBlockComponent<TableBlockModel> {
  private _dataManager: TableDataManager | null = null;

  private readonly getAreaRect = (
    rowStartIndex: number,
    rowEndIndex: number,
    columnStartIndex: number,
    columnEndIndex: number
  ) => {
    const rootRect = this.getRootRect();
    const rows = this.querySelectorAll('tbody tr');
    const columns = this.querySelectorAll('colgroup col');
    const startRow = rows.item(rowStartIndex);
    const endRow = rows.item(rowEndIndex);
    if (!startRow || !endRow || !rootRect) return;
    const startColumn = columns.item(columnStartIndex);
    const endColumn = columns.item(columnEndIndex);
    if (!startColumn || !endColumn) return;

    const startRowRect = startRow.getBoundingClientRect();
    const endRowRect = endRow.getBoundingClientRect();
    const startColumnRect = startColumn.getBoundingClientRect();
    const endColumnRect = endColumn.getBoundingClientRect();
    const scale = this.getScale();

    return {
      top: (startRowRect.top - rootRect.top) / scale,
      left: (startColumnRect.left - rootRect.left) / scale,
      width: (endColumnRect.right - startColumnRect.left) / scale,
      height: (endRowRect.bottom - startRowRect.top) / scale,
    };
  };

  private readonly getColumnRect = (columnId: string) => {
    const column = this.querySelector(`col[data-column-id="${columnId}"]`);
    const rows = this.querySelectorAll('tbody tr');
    const rootRect = this.getRootRect();
    if (!rootRect) return;
    const columnRect = column?.getBoundingClientRect();
    const firstRowRect = rows.item(0)?.getBoundingClientRect();
    const lastRowRect = rows.item(rows.length - 1)?.getBoundingClientRect();
    if (!columnRect || !firstRowRect || !lastRowRect) return;
    const scale = this.getScale();
    return {
      top: (firstRowRect.top - rootRect.top) / scale,
      left: (columnRect.left - rootRect.left) / scale,
      width: columnRect.width / scale,
      height: (lastRowRect.bottom - firstRowRect.top) / scale,
    };
  };

  private readonly getRootRect = () => {
    const table = this.table$.value;
    if (!table) return;
    return table.getBoundingClientRect();
  };

  private readonly getRowRect = (rowId: string) => {
    const row = this.querySelector(`tr[data-row-id="${rowId}"]`);
    const rootRect = this.getRootRect();
    if (!row || !rootRect) return;
    const rect = row.getBoundingClientRect();
    const scale = this.getScale();
    return {
      top: (rect.top - rootRect.top) / scale,
      left: (rect.left - rootRect.left) / scale,
      width: rect.width / scale,
      height: rect.height / scale,
    };
  };

  selectionController = new SelectionController(this);

  table$ = signal<HTMLTableElement>();

  get dataManager(): TableDataManager {
    if (!this._dataManager) {
      this._dataManager = new TableDataManager(this.model);
      this.disposables.add(
        this.doc.awarenessStore.slots.update.on(() => {
          this._dataManager!.notifyReadonlyChange();
          if (this.doc.readonly) {
            this.selectionController.setSelected(undefined);
          }
          this.requestUpdate();
        })
      );
    }
    return this._dataManager;
  }

  override get topContenteditableElement() {
    if (this.std.get(DocModeProvider).getEditorMode() === 'edgeless') {
      return this.closest<BlockComponent>(
        EDGELESS_TOP_CONTENTEDITABLE_SELECTOR
      );
    }
    return this.rootComponent;
  }

  private hasExternalNativeSelection() {
    const selection = this.ownerDocument.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
      return false;
    }

    const range = selection.getRangeAt(0);
    if (!range.intersectsNode(this)) {
      return false;
    }

    const anchorNode = selection.anchorNode;
    const focusNode = selection.focusNode;
    return (
      !!anchorNode &&
      !!focusNode &&
      (!this.contains(anchorNode) || !this.contains(focusNode))
    );
  }

  private setInternalEditablesEnabled(enabled: boolean) {
    if (this.doc.readonly) {
      enabled = false;
    }
    this.querySelectorAll<HTMLElement>('.inline-editor').forEach(editor => {
      if (enabled) {
        if (editor.dataset.tableExternalSelectionDisabled === 'true') {
          editor.contentEditable = 'true';
          delete editor.dataset.tableExternalSelectionDisabled;
        }
        return;
      }

      if (editor.contentEditable === 'true') {
        editor.contentEditable = 'false';
        editor.dataset.tableExternalSelectionDisabled = 'true';
      }
    });
  }

  override connectedCallback() {
    super.connectedCallback();
    this.setAttribute(RANGE_SYNC_EXCLUDE_ATTR, 'true');
    this.setAttribute(RANGE_QUERY_EXCLUDE_ATTR, 'true');
    this.style.position = 'relative';
    const doc = this.ownerDocument;
    this.disposables.addFromEvent(doc, 'selectionchange', () => {
      const hasExternalNativeSelection = this.hasExternalNativeSelection();
      this.toggleAttribute(
        'data-external-range-selection',
        hasExternalNativeSelection
      );
      if (hasExternalNativeSelection) {
        delete this.dataset.internalRangeSelection;
      }
      this.setInternalEditablesEnabled(!hasExternalNativeSelection);
    });
    this.disposables.addFromEvent(
      doc,
      'pointerdown',
      event => {
        const target = event.target;
        const NodeConstructor = this.ownerDocument.defaultView?.Node;
        if (
          NodeConstructor &&
          target instanceof NodeConstructor &&
          this.contains(target)
        ) {
          if (!this.doc.readonly) {
            this.setInternalEditablesEnabled(true);
          }
          if (this.hasExternalNativeSelection()) {
            this.ownerDocument.getSelection()?.removeAllRanges();
          }
          delete this.dataset.externalRangeSelection;
          this.dataset.internalRangeSelection = 'true';
        } else {
          delete this.dataset.internalRangeSelection;
        }
      },
      { capture: true }
    );
  }

  getScale(): number {
    const table = this.table$.value;
    if (!table) return 1;
    return table.getBoundingClientRect().width / table.offsetWidth;
  }

  override renderBlock() {
    const rows = this.dataManager.uiRows$.value;
    const columns = this.dataManager.uiColumns$.value;
    return html`
      <div
        contenteditable="false"
        class=${tableContainer}
        style=${styleMap({
          marginLeft: `-10px`,
          position: 'relative',
        })}
      >
        <div
          style=${styleMap({
            marginLeft:
              !this.model.textAlign$.value ||
              this.model.textAlign$?.value === 'left'
                ? undefined
                : 'auto',
            marginRight:
              !this.model.textAlign$.value ||
              this.model.textAlign$?.value === 'right'
                ? undefined
                : 'auto',
            width: 'max-content',
          })}
        >
          <table class=${tableWrapper} ${ref(this.table$)}>
            <!-- @ts-ignore: lit-analyzer misparses dynamic colgroup children. -->
            <colgroup>
              ${columns.map(
                column => html`
                  <col
                    data-column-id=${column.columnId}
                    style=${styleMap({
                      width: `${column.width ?? 120}px`,
                    })}
                  />
                `
              )}
            </colgroup>
            <tbody class=${table}>
              ${repeat(
                rows,
                row => row.rowId,
                (row, rowIndex) => {
                  return html`
                    <tr class=${rowStyle} data-row-id=${row.rowId}>
                      ${repeat(
                        columns,
                        column => column.columnId,
                        (column, columnIndex) => {
                          if (
                            this.dataManager.isCoveredCell(
                              row.rowId,
                              column.columnId
                            )
                          ) {
                            return nothing;
                          }
                          const cell = this.dataManager.getCell(
                            row.rowId,
                            column.columnId
                          );
                          const { rowSpan, colSpan } =
                            this.dataManager.getCellSpan(
                              row.rowId,
                              column.columnId
                            );
                          return html`
                            <affine-table-cell
                              style="display: contents;"
                              .rowIndex=${rowIndex}
                              .columnIndex=${columnIndex}
                              .row=${row}
                              .column=${column}
                              .colSpan=${colSpan}
                              .rowSpan=${rowSpan}
                              .text=${cell?.text}
                              .dataManager=${this.dataManager}
                              .selectionController=${this.selectionController}
                            ></affine-table-cell>
                          `;
                        }
                      )}
                    </tr>
                  `;
                }
              )}
            </tbody>
            ${IS_MOBILE || this.dataManager.readonly$.value
              ? nothing
              : html`<affine-table-add-button
                  style="display: contents;"
                  .dataManager=${this.dataManager}
                ></affine-table-add-button>`}
            ${IS_MOBILE || this.dataManager.readonly$.value
              ? nothing
              : html`<affine-table-selection-layer
                  style="display: contents;"
                  .selectionController=${this.selectionController}
                  .getRowRect=${this.getRowRect}
                  .getColumnRect=${this.getColumnRect}
                  .getAreaRect=${this.getAreaRect}
                ></affine-table-selection-layer>`}
          </table>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TableBlockComponentName]: TableBlockComponent;
  }
}
