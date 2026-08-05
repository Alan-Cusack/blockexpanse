import type { UIEventStateContext } from '@blockexpanse/block-std';
import type { ReactiveController } from 'lit';

import { IS_MOBILE } from '@blockexpanse/global/env';
import { computed } from '@preact/signals-core';

import type { TableBlockComponent } from './table-block.js';

import { ColumnMinWidth, DefaultColumnWidth } from './consts.js';
import {
  getAreaByOffsets,
  getTargetIndexByDraggingOffset,
  tableToOffsets,
} from './drag-helper.js';
import { type DragSession, startDragSession } from './drag-session.js';
import {
  type TableAreaSelection,
  TableSelection,
  TableSelectionData,
} from './selection-schema.js';
import {
  createColumnDragPreview,
  createRowDragPreview,
  type TableCell,
  TableCellComponentName,
} from './table-cell.js';
import {
  htmlTableToClipboardPayload,
  parseTableClipboardPayload,
  TABLE_CLIPBOARD_MIME,
  type TableClipboardPayload,
  tableClipboardToHtml,
  tableClipboardToPlainText,
} from './table-clipboard.js';
import { cleanSelection } from './utils.js';
type Cells = string[][];
const TEXT = 'text/plain';
export class SelectionController implements ReactiveController {
  private _activeDragSessions = new Set<DragSession>();

  readonly doCopyOrCut = (selection: TableAreaSelection, isCut: boolean) => {
    if (isCut && this.isReadonly) {
      return;
    }
    const columns = this.dataManager.uiColumns$.value;
    const rows = this.dataManager.uiRows$.value;
    const cells: Cells = [];
    const deleteCells: { rowId: string; columnId: string }[] = [];
    for (let i = selection.rowStartIndex; i <= selection.rowEndIndex; i++) {
      const row = rows[i];
      if (!row) {
        continue;
      }
      const rowCells: string[] = [];
      for (
        let j = selection.columnStartIndex;
        j <= selection.columnEndIndex;
        j++
      ) {
        const column = columns[j];
        if (!column) {
          continue;
        }
        const cell = this.dataManager.getCell(row.rowId, column.columnId);
        rowCells.push(cell?.text.toString() ?? '');
        if (isCut) {
          deleteCells.push({ rowId: row.rowId, columnId: column.columnId });
        }
      }
      cells.push(rowCells);
    }
    if (isCut) {
      this.dataManager.clearCells(deleteCells);
    }
    const payload: TableClipboardPayload = {
      version: 1,
      rows: cells.length,
      columns: cells[0]?.length ?? 0,
      cells,
      mergedRanges: this.dataManager.mergedRanges$.value.flatMap(range => {
        if (
          range.rowStartIndex < selection.rowStartIndex ||
          range.rowEndIndex > selection.rowEndIndex ||
          range.columnStartIndex < selection.columnStartIndex ||
          range.columnEndIndex > selection.columnEndIndex
        ) {
          return [];
        }
        return [
          {
            rowStartIndex: range.rowStartIndex - selection.rowStartIndex,
            rowEndIndex: range.rowEndIndex - selection.rowStartIndex,
            columnStartIndex:
              range.columnStartIndex - selection.columnStartIndex,
            columnEndIndex: range.columnEndIndex - selection.columnStartIndex,
          },
        ];
      }),
    };
    const text = tableClipboardToPlainText(payload);
    const htmlTable = tableClipboardToHtml(payload);

    this.clipboard
      .writeToClipboard(items => ({
        ...items,
        [TEXT]: text,
        'text/html': htmlTable,
        [TABLE_CLIPBOARD_MIME]: JSON.stringify(payload),
      }))
      .catch(console.error);
  };

  doPaste = (plainText: string, selection: TableAreaSelection) => {
    if (this.isReadonly) {
      return;
    }
    try {
      const rowTextLists = plainText
        .split(/\r?\n/)
        .map(line => line.split('\t').map(cell => cell.trim()))
        .filter(row => row.some(cell => cell !== '')); // Filter out empty rows
      const height = rowTextLists.length;
      const width = rowTextLists[0]?.length ?? 0;
      if (height > 0 && width > 0) {
        const columns = this.dataManager.uiColumns$.value;
        const rows = this.dataManager.uiRows$.value;
        for (let i = selection.rowStartIndex; i <= selection.rowEndIndex; i++) {
          const row = rows[i];
          if (!row) {
            continue;
          }
          for (
            let j = selection.columnStartIndex;
            j <= selection.columnEndIndex;
            j++
          ) {
            const column = columns[j];
            if (!column) {
              continue;
            }
            const text = this.dataManager.getCell(
              row.rowId,
              column.columnId
            )?.text;
            if (text) {
              const rowIndex = (i - selection.rowStartIndex) % height;
              const columnIndex = (j - selection.columnStartIndex) % width;
              text.replace(
                0,
                text.length,
                rowTextLists[rowIndex]?.[columnIndex] ?? ''
              );
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  doPasteTablePayload = (
    payload: TableClipboardPayload,
    selection: TableAreaSelection
  ) => {
    if (this.isReadonly) return;
    const rows = this.dataManager.uiRows$.value;
    const columns = this.dataManager.uiColumns$.value;
    const rowEndIndex = Math.min(
      rows.length - 1,
      selection.rowStartIndex + payload.rows - 1
    );
    const columnEndIndex = Math.min(
      columns.length - 1,
      selection.columnStartIndex + payload.columns - 1
    );
    if (
      rowEndIndex < selection.rowStartIndex ||
      columnEndIndex < selection.columnStartIndex
    ) {
      return;
    }
    this.dataManager.splitMergedRangesIntersecting({
      type: 'area',
      rowStartIndex: selection.rowStartIndex,
      rowEndIndex,
      columnStartIndex: selection.columnStartIndex,
      columnEndIndex,
    });
    for (let rowOffset = 0; rowOffset < payload.rows; rowOffset++) {
      const row = rows[selection.rowStartIndex + rowOffset];
      if (!row) break;
      for (
        let columnOffset = 0;
        columnOffset < payload.columns;
        columnOffset++
      ) {
        const column = columns[selection.columnStartIndex + columnOffset];
        if (!column) break;
        const text = this.dataManager.getCell(row.rowId, column.columnId)?.text;
        if (text) {
          text.replace(
            0,
            text.length,
            payload.cells[rowOffset]?.[columnOffset] ?? ''
          );
        }
      }
    }
    payload.mergedRanges.forEach(range => {
      const target = {
        type: 'area' as const,
        rowStartIndex: selection.rowStartIndex + range.rowStartIndex,
        rowEndIndex: selection.rowStartIndex + range.rowEndIndex,
        columnStartIndex: selection.columnStartIndex + range.columnStartIndex,
        columnEndIndex: selection.columnStartIndex + range.columnEndIndex,
      };
      if (
        target.rowEndIndex <= rowEndIndex &&
        target.columnEndIndex <= columnEndIndex
      ) {
        this.dataManager.mergeCells(target);
      }
    });
  };

  onCopy = () => {
    const selection = this.getSelected();
    if (!selection || selection.type !== 'area') {
      return false;
    }
    this.doCopyOrCut(selection, false);
    return true;
  };

  onCut = () => {
    if (this.isReadonly) {
      return false;
    }
    const selection = this.getSelected();
    if (!selection || selection.type !== 'area') {
      return false;
    }
    this.doCopyOrCut(selection, true);
    return true;
  };

  onPaste = (_context: UIEventStateContext) => {
    if (this.isReadonly) {
      return false;
    }
    const event = _context.get('clipboardState').raw;
    event.stopPropagation();
    const clipboardData = event.clipboardData;
    if (!clipboardData) return false;

    const selection = this.getSelected();
    if (!selection || selection.type !== 'area') {
      return false;
    }

    return this.pasteData(clipboardData, selection);
  };

  pasteData = (
    clipboardData: Pick<DataTransfer, 'getData'>,
    selection: TableAreaSelection
  ) => {
    try {
      let internalData = clipboardData.getData(TABLE_CLIPBOARD_MIME);
      if (!internalData) {
        try {
          const snapshot = this.clipboard.readFromClipboard(
            clipboardData as DataTransfer
          );
          const snapshotData = snapshot[TABLE_CLIPBOARD_MIME];
          if (typeof snapshotData === 'string') internalData = snapshotData;
        } catch {
          // External clipboard HTML has no BlockExpanse snapshot wrapper.
        }
      }
      const internalPayload = parseTableClipboardPayload(internalData);
      if (internalPayload) {
        this.doPasteTablePayload(internalPayload, selection);
        return true;
      }
      const html = clipboardData.getData('text/html');
      if (html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        if (table) {
          const tablePayload = htmlTableToClipboardPayload(html);
          if (tablePayload) {
            this.doPasteTablePayload(tablePayload, selection);
            return true;
          }
        }
      }

      // If no HTML format or parsing failed, try to read plain text
      const plainText = clipboardData.getData('text/plain');
      if (plainText) {
        this.doPaste(plainText, selection);
        return true;
      }
    } catch (error) {
      console.error('Failed to paste:', error);
    }

    return false;
  };

  pasteFromNavigator = async (selection: TableAreaSelection) => {
    if (this.isReadonly) return false;
    if (!navigator.clipboard.read) {
      const text = await navigator.clipboard.readText();
      this.doPaste(text, selection);
      return true;
    }
    const data = new Map<string, string>();
    const items = await navigator.clipboard.read();
    for (const item of items) {
      for (const type of item.types) {
        if (type === 'text/html' || type === 'text/plain') {
          data.set(type, await (await item.getType(type)).text());
        }
      }
    }
    return this.pasteData({ getData: type => data.get(type) ?? '' }, selection);
  };

  selected$ = computed(() => this.getSelected());

  private get clipboard() {
    return this.host.std.clipboard;
  }

  private get dataManager() {
    return this.host.dataManager;
  }

  private get isReadonly() {
    return this.dataManager.readonly$.value;
  }

  private get scale() {
    return this.host.getScale();
  }

  constructor(readonly host: TableBlockComponent) {
    this.host.addController(this);
  }

  /**
   * Wraps `startDragSession` and registers the session with the controller
   * so `hostDisconnected` reliably cleans up window listeners even if the
   * user never releases the mouse.
   */
  private _beginDrag(options: Parameters<typeof startDragSession>[0]) {
    // Two-phase so the onCleanup closure can refer to the session itself.
    const holder: { session?: DragSession } = {};
    const session = startDragSession({
      ...options,
      onCleanup: () => {
        if (holder.session) {
          this._activeDragSessions.delete(holder.session);
        }
        options.onCleanup?.();
      },
    });
    holder.session = session;
    this._activeDragSessions.add(session);
    return session;
  }

  private hasExternalNativeSelection() {
    const selection = getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
      return false;
    }

    const range = selection.getRangeAt(0);
    if (!range.intersectsNode(this.host)) {
      return false;
    }

    const anchorNode = selection.anchorNode;
    const focusNode = selection.focusNode;
    return (
      !!anchorNode &&
      !!focusNode &&
      (!this.host.contains(anchorNode) || !this.host.contains(focusNode))
    );
  }

  columnDrag(columnDragHandle: HTMLElement, event: MouseEvent) {
    let drag:
      | { onMove: (x: number) => void; onEnd: (commit?: boolean) => void }
      | undefined = undefined;
    const initialX = event.clientX;
    this._beginDrag({
      onMove: event => {
        const diffX = event.clientX - initialX;
        if (!drag && Math.abs(diffX) > 10) {
          event.preventDefault();
          event.stopPropagation();
          cleanSelection();
          this.setSelected(undefined);
          drag = this.startColumnDrag(initialX, columnDragHandle);
        }
        drag?.onMove(event.clientX);
      },
      onUp: () => {
        drag?.onEnd();
      },
      onCancel: () => {
        drag?.onEnd(false);
      },
    });
  }

  dragListener() {
    if (IS_MOBILE || this.dataManager.readonly$.value) {
      return;
    }
    this.host.disposables.addFromEvent(this.host, 'pointerdown', event => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (
        target.closest(
          '[data-width-adjust-column-id], [data-drag-column-id], [data-drag-row-id]'
        )
      ) {
        event.stopPropagation();
      }
    });
    this.host.disposables.addFromEvent(this.host, 'mousedown', event => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const widthAdjustColumn = target.closest('[data-width-adjust-column-id]');
      if (widthAdjustColumn instanceof HTMLElement) {
        this.widthAdjust(widthAdjustColumn, event);
        return;
      }
      const columnDragHandle = target.closest('[data-drag-column-id]');
      if (columnDragHandle instanceof HTMLElement) {
        this.columnDrag(columnDragHandle, event);
        return;
      }
      const rowDragHandle = target.closest('[data-drag-row-id]');
      if (rowDragHandle instanceof HTMLElement) {
        this.rowDrag(rowDragHandle, event);
        return;
      }
      this.onDragStart(event);
    });
  }

  getSelected(): TableSelectionData | undefined {
    const selection = this.host.selection.value.find(
      selection => selection.blockId === this.host.model.id
    );
    return selection?.is('table') ? selection.data : undefined;
  }

  hostConnected() {
    this.dragListener();
    this.host.handleEvent('copy', this.onCopy);
    this.host.handleEvent('cut', this.onCut);
    this.host.handleEvent('paste', this.onPaste);
    if (this.isReadonly) {
      this.setSelected(undefined);
    }
    this.host.handleEvent('dragStart', context => {
      if (IS_MOBILE || this.dataManager.readonly$.value) return false;
      const event = context.get('pointerState').raw;
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest(
          '[data-width-adjust-column-id], [data-drag-column-id], [data-drag-row-id]'
        )
      ) {
        event.preventDefault();
        event.stopPropagation();
        return true;
      }
      return false;
    });
  }

  hostDisconnected() {
    for (const session of this._activeDragSessions) {
      session.stop();
    }
    this._activeDragSessions.clear();
  }

  onDragStart(event: MouseEvent) {
    if (this.isReadonly) {
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const offsets = tableToOffsets(this.host);
    if (!offsets) return;
    const startX = event.clientX;
    const startY = event.clientY;
    let selected = false;
    const initCell = target.closest('affine-table-cell');
    if (!initCell) {
      selected = true;
    }
    const onMove = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement) {
        const cell = target.closest('affine-table-cell');
        if (!selected && initCell === cell) {
          return;
        }
        selected = true;
        const endX = event.clientX;
        const endY = event.clientY;
        const [left, right] = startX > endX ? [endX, startX] : [startX, endX];
        const [top, bottom] = startY > endY ? [endY, startY] : [startY, endY];
        const area = getAreaByOffsets(offsets, top, bottom, left, right);
        this.setSelected({
          type: 'area',
          rowStartIndex: area.top,
          rowEndIndex: area.bottom,
          columnStartIndex: area.left,
          columnEndIndex: area.right,
        });
      }
    };
    this._beginDrag({ onMove });
  }

  rowDrag(rowDragHandle: HTMLElement, event: MouseEvent) {
    let drag:
      | { onMove: (x: number) => void; onEnd: (commit?: boolean) => void }
      | undefined = undefined;
    const initialY = event.clientY;
    this._beginDrag({
      onMove: event => {
        const diffY = event.clientY - initialY;
        if (!drag && Math.abs(diffY) > 10) {
          event.preventDefault();
          event.stopPropagation();
          cleanSelection();
          this.setSelected(undefined);
          drag = this.startRowDrag(initialY, rowDragHandle);
        }
        drag?.onMove(event.clientY);
      },
      onUp: () => {
        drag?.onEnd();
      },
      onCancel: () => {
        drag?.onEnd(false);
      },
    });
  }

  setSelected(
    selection: TableSelectionData | undefined,
    removeNativeSelection = true
  ) {
    if (selection) {
      if (this.isReadonly) {
        return;
      }
      if (this.hasExternalNativeSelection()) {
        return;
      }
      if (selection.type === 'area') {
        selection = this.dataManager.expandSelectionToMergedRanges(selection);
      }
      const previous = this.getSelected();
      if (TableSelectionData.equals(previous, selection)) {
        return;
      }
      if (removeNativeSelection) {
        getSelection()?.removeAllRanges();
      }
      this.host.selection.set([
        new TableSelection({
          blockId: this.host.model.id,
          data: selection,
        }),
      ]);
    } else {
      this.host.selection.clear();
    }
  }

  startColumnDrag(x: number, columnDragHandle: HTMLElement) {
    const columnId = columnDragHandle.dataset['dragColumnId'];
    if (!columnId) {
      return;
    }
    const cellRect = columnDragHandle.closest('td')?.getBoundingClientRect();
    const containerRect = this.host.getBoundingClientRect();
    if (!cellRect) {
      return;
    }
    const initialDiffX = x - cellRect.left;
    const cells = Array.from(
      this.host.querySelectorAll(`td[data-column-id="${columnId}"]`)
    ).map(td => td.closest(TableCellComponentName) as TableCell);
    const firstCell = cells[0];
    if (!firstCell) {
      return;
    }
    const draggingIndex = firstCell.columnIndex;
    const columns = Array.from(
      this.host.querySelectorAll(`td[data-row-id="${firstCell?.row?.rowId}"]`)
    ).map(td => td.getBoundingClientRect());
    const columnOffsets = columns.flatMap((column, index) =>
      index === columns.length - 1 ? [column.left, column.right] : [column.left]
    );
    const columnDragPreview = createColumnDragPreview(cells);
    columnDragPreview.style.top = `${cellRect.top - containerRect.top - 0.5}px`;
    columnDragPreview.style.left = `${cellRect.left - containerRect.left}px`;
    columnDragPreview.style.width = `${cellRect.width}px`;
    this.host.append(columnDragPreview);
    document.body.style.pointerEvents = 'none';
    const onMove = (x: number) => {
      const { targetIndex, isForward } = getTargetIndexByDraggingOffset(
        columnOffsets,
        draggingIndex,
        x - initialDiffX
      );
      if (targetIndex != null) {
        this.dataManager.ui.columnIndicatorIndex$.value = isForward
          ? targetIndex + 1
          : targetIndex;
      } else {
        this.dataManager.ui.columnIndicatorIndex$.value = undefined;
      }
      columnDragPreview.style.left = `${x - initialDiffX - containerRect.left}px`;
    };
    const onEnd = (commit = true) => {
      const targetIndex = this.dataManager.ui.columnIndicatorIndex$.value;
      this.dataManager.ui.columnIndicatorIndex$.value = undefined;
      document.body.style.pointerEvents = 'auto';
      columnDragPreview.remove();
      if (commit && targetIndex != null) {
        this.dataManager.moveColumn(
          draggingIndex,
          targetIndex === 0 ? undefined : targetIndex - 1
        );
      }
    };
    return {
      onMove,
      onEnd,
    };
  }

  startRowDrag(y: number, rowDragHandle: HTMLElement) {
    const rowId = rowDragHandle.dataset['dragRowId'];
    if (!rowId) {
      return;
    }
    const cellRect = rowDragHandle.closest('td')?.getBoundingClientRect();
    const containerRect = this.host.getBoundingClientRect();
    if (!cellRect) {
      return;
    }
    const initialDiffY = y - cellRect.top;
    const cells = Array.from(
      this.host.querySelectorAll(`td[data-row-id="${rowId}"]`)
    ).map(td => td.closest(TableCellComponentName) as TableCell);
    const firstCell = cells[0];
    if (!firstCell) {
      return;
    }
    const draggingIndex = firstCell.rowIndex;
    const rows = Array.from(
      this.host.querySelectorAll(
        `td[data-column-id="${firstCell?.column?.columnId}"]`
      )
    ).map(td => td.getBoundingClientRect());
    const rowOffsets = rows.flatMap((row, index) =>
      index === rows.length - 1 ? [row.top, row.bottom] : [row.top]
    );
    const rowDragPreview = createRowDragPreview(cells);
    rowDragPreview.style.left = `${cellRect.left - containerRect.left}px`;
    rowDragPreview.style.top = `${cellRect.top - containerRect.top - 0.5}px`;
    rowDragPreview.style.height = `${cellRect.height}px`;
    this.host.append(rowDragPreview);
    document.body.style.pointerEvents = 'none';
    const onMove = (y: number) => {
      const { targetIndex, isForward } = getTargetIndexByDraggingOffset(
        rowOffsets,
        draggingIndex,
        y - initialDiffY
      );
      if (targetIndex != null) {
        this.dataManager.ui.rowIndicatorIndex$.value = isForward
          ? targetIndex + 1
          : targetIndex;
      } else {
        this.dataManager.ui.rowIndicatorIndex$.value = undefined;
      }
      rowDragPreview.style.top = `${y - initialDiffY - containerRect.top}px`;
    };
    const onEnd = (commit = true) => {
      const targetIndex = this.dataManager.ui.rowIndicatorIndex$.value;
      this.dataManager.ui.rowIndicatorIndex$.value = undefined;
      document.body.style.pointerEvents = 'auto';
      rowDragPreview.remove();
      if (commit && targetIndex != null) {
        this.dataManager.moveRow(
          draggingIndex,
          targetIndex === 0 ? undefined : targetIndex - 1
        );
      }
    };
    return {
      onMove,
      onEnd,
    };
  }

  widthAdjust(dragHandle: HTMLElement, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const initialX = event.clientX;
    const currentWidth =
      dragHandle.closest('td')?.getBoundingClientRect().width ??
      DefaultColumnWidth;
    const adjustedWidth = currentWidth / this.scale;
    const columnId = dragHandle.dataset['widthAdjustColumnId'];
    if (!columnId) {
      return;
    }
    this._beginDrag({
      onMove: event => {
        this.dataManager.widthAdjustColumnId$.value = columnId;
        this.dataManager.virtualWidth$.value = {
          columnId,
          width: Math.max(
            ColumnMinWidth,
            (event.clientX - initialX) / this.scale + adjustedWidth
          ),
        };
      },
      onUp: () => {
        const width = this.dataManager.virtualWidth$.value?.width;
        this.dataManager.widthAdjustColumnId$.value = undefined;
        this.dataManager.virtualWidth$.value = undefined;
        if (width) {
          this.dataManager.setColumnWidth(columnId, width);
        }
      },
      onCancel: () => {
        this.dataManager.widthAdjustColumnId$.value = undefined;
        this.dataManager.virtualWidth$.value = undefined;
      },
    });
  }
}
