import type { TableBlockModel, TableCell } from '@blockexpanse/affine-model';

import { generateKeyBetweenV2 } from '@blockexpanse/block-std/gfx';
import { nanoid, Text } from '@blockexpanse/store';
import { computed, type ReadonlySignal, signal } from '@preact/signals-core';

import type { TableAreaSelection } from './selection-schema.js';

import { compareByOrder } from './utils.js';

export class TableDataManager {
  /** Bumped when doc readonly state changes via awareness. */
  private readonly _readonlyTick$ = signal(0);

  /** Bumped on nested prop changes so computed views refresh. */
  private readonly _version$ = signal(0);

  readonly columns$ = computed(() => {
    this._version$.value;
    return Object.values(this.model.columns).sort(compareByOrder);
  });

  readonly rows$ = computed(() => {
    this._version$.value;
    return Object.values(this.model.rows).sort(compareByOrder);
  });

  readonly virtualColumnCount$ = signal<number>(0);

  readonly virtualRowCount$ = signal<number>(0);

  readonly cellCountTips$ = computed(
    () =>
      `${this.virtualRowCount$.value + this.rows$.value.length} x ${this.virtualColumnCount$.value + this.columns$.value.length}`
  );

  readonly hoverColumnIndex$ = signal<number>();

  readonly hoverDragHandleColumnId$ = signal<string>();

  readonly hoverRowIndex$ = signal<number>();

  readonly readonly$: ReadonlySignal<boolean> = computed(() => {
    this._readonlyTick$.value;
    return this.model.doc.readonly;
  });

  readonly ui = {
    columnIndicatorIndex$: signal<number>(),
    rowIndicatorIndex$: signal<number>(),
  };

  readonly uiColumns$ = computed(() => {
    const virtualColumnCount = this.virtualColumnCount$.value;
    const columns = this.columns$.value;
    if (virtualColumnCount === 0) {
      return columns;
    }
    if (virtualColumnCount > 0) {
      return [
        ...columns,
        ...Array.from({ length: virtualColumnCount }, (_, i) => ({
          columnId: `${i}`,
          backgroundColor: undefined,
          width: undefined,
        })),
      ];
    }
    return columns.slice(0, columns.length + virtualColumnCount);
  });

  readonly uiRows$ = computed(() => {
    const virtualRowCount = this.virtualRowCount$.value;
    const rows = this.rows$.value;
    if (virtualRowCount === 0) {
      return rows;
    }
    if (virtualRowCount > 0) {
      return [
        ...rows,
        ...Array.from({ length: virtualRowCount }, (_, i) => ({
          rowId: `${i}`,
          backgroundColor: undefined,
        })),
      ];
    }
    return rows.slice(0, rows.length + virtualRowCount);
  });

  readonly virtualWidth$ = signal<
    { columnId: string; width: number } | undefined
  >();

  readonly widthAdjustColumnId$ = signal<string>();

  constructor(private readonly model: TableBlockModel) {
    model.propsUpdated.on(() => {
      this._version$.value++;
    });
  }

  private getOrder<T extends { order: string }>(array: T[], after?: number) {
    after = after != null ? (after < 0 ? undefined : after) : undefined;
    const prevOrder = after == null ? null : array[after]?.order;
    const nextOrder = after == null ? array[0]?.order : array[after + 1]?.order;
    const order = generateKeyBetweenV2(prevOrder ?? null, nextOrder ?? null);
    return order;
  }

  addColumn(after?: number) {
    const order = this.getOrder(this.columns$.value, after);
    const columnId = nanoid();
    this.model.doc.transact(() => {
      this.model.columns[columnId] = {
        columnId,
        order,
      };
      this.rows$.value.forEach(row => {
        this.model.cells[`${row.rowId}:${columnId}`] = {
          text: new Text(),
        };
      });
    });
    return columnId;
  }

  addNColumn(count: number) {
    if (count === 0) {
      return;
    }
    if (count > 0) {
      this.model.doc.transact(() => {
        for (let i = 0; i < count; i++) {
          this.addColumn(this.columns$.value.length - 1);
        }
      });
    } else {
      const columns = this.columns$.value;
      const columnCount = columns.length;
      this.model.doc.transact(() => {
        columns.slice(columnCount + count, columnCount).forEach(column => {
          this.deleteColumn(column.columnId);
        });
      });
    }
  }

  addNRow(count: number) {
    if (count === 0) {
      return;
    }
    if (count > 0) {
      this.model.doc.transact(() => {
        for (let i = 0; i < count; i++) {
          this.addRow(this.rows$.value.length - 1);
        }
      });
    } else {
      const rows = this.rows$.value;
      const rowCount = rows.length;
      this.model.doc.transact(() => {
        rows.slice(rowCount + count, rowCount).forEach(row => {
          this.deleteRow(row.rowId);
        });
      });
    }
  }

  addRow(after?: number) {
    const order = this.getOrder(this.rows$.value, after);
    const rowId = nanoid();
    this.model.doc.transact(() => {
      this.model.rows[rowId] = {
        rowId,
        order,
      };

      this.columns$.value.forEach(column => {
        this.model.cells[`${rowId}:${column.columnId}`] = {
          text: new Text(),
        };
      });
    });
    return rowId;
  }

  clearCells(cells: { rowId: string; columnId: string }[]) {
    if (this.readonly$.value) {
      return;
    }
    this.model.doc.transact(() => {
      cells.forEach(({ rowId, columnId }) => {
        const text = this.model.cells[`${rowId}:${columnId}`]?.text;
        if (text) {
          text.replace(0, text.length, '');
        }
      });
    });
  }

  clearCellsBySelection(selection: TableAreaSelection) {
    const columns = this.uiColumns$.value;
    const rows = this.uiRows$.value;
    const deleteCells: { rowId: string; columnId: string }[] = [];
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
        deleteCells.push({ rowId: row.rowId, columnId: column.columnId });
      }
    }
    this.clearCells(deleteCells);
  }

  clearColumn(columnId: string) {
    this.model.doc.transact(() => {
      Object.keys(this.model.cells).forEach(id => {
        if (id.endsWith(`:${columnId}`)) {
          this.model.cells[id]?.text.replace(
            0,
            this.model.cells[id]?.text.length,
            ''
          );
        }
      });
    });
  }

  clearRow(rowId: string) {
    this.model.doc.transact(() => {
      Object.keys(this.model.cells).forEach(id => {
        if (id.startsWith(rowId)) {
          this.model.cells[id]?.text.replace(
            0,
            this.model.cells[id]?.text.length,
            ''
          );
        }
      });
    });
  }

  deleteColumn(columnId: string) {
    this.model.doc.transact(() => {
      Object.keys(this.model.columns).forEach(id => {
        if (id === columnId) {
          delete this.model.columns[id];
        }
      });
      Object.keys(this.model.cells).forEach(id => {
        if (id.endsWith(`:${columnId}`)) {
          delete this.model.cells[id];
        }
      });
    });
  }

  deleteRow(rowId: string) {
    this.model.doc.transact(() => {
      Object.keys(this.model.rows).forEach(id => {
        if (id === rowId) {
          delete this.model.rows[id];
        }
      });
      Object.keys(this.model.cells).forEach(id => {
        if (id.startsWith(rowId)) {
          delete this.model.cells[id];
        }
      });
    });
  }

  duplicateColumn(index: number) {
    const oldColumn = this.columns$.value[index];
    if (!oldColumn) return;
    const order = this.getOrder(this.columns$.value, index);
    const newColumnId = nanoid();
    this.model.doc.transact(() => {
      this.model.columns[newColumnId] = {
        ...oldColumn,
        columnId: newColumnId,
        order,
      };
      this.rows$.value.forEach(row => {
        this.model.cells[`${row.rowId}:${newColumnId}`] = {
          text:
            this.model.cells[
              `${row.rowId}:${oldColumn.columnId}`
            ]?.text.clone() ?? new Text(),
        };
      });
    });
    return newColumnId;
  }

  duplicateRow(index: number) {
    const oldRow = this.rows$.value[index];
    if (!oldRow) return;
    const order = this.getOrder(this.rows$.value, index);
    const newRowId = nanoid();
    this.model.doc.transact(() => {
      this.model.rows[newRowId] = {
        ...oldRow,
        rowId: newRowId,
        order,
      };
      this.columns$.value.forEach(column => {
        this.model.cells[`${newRowId}:${column.columnId}`] = {
          text:
            this.model.cells[
              `${oldRow.rowId}:${column.columnId}`
            ]?.text.clone() ?? new Text(),
        };
      });
    });
    return newRowId;
  }

  getCell(rowId: string, columnId: string): TableCell | undefined {
    this._version$.value;
    return this.model.cells[`${rowId}:${columnId}`];
  }

  insertColumn(after?: number) {
    this.addColumn(after);
  }

  insertRow(after?: number) {
    this.addRow(after);
  }

  moveColumn(from: number, after?: number) {
    const columns = this.columns$.value;
    const column = columns[from];
    if (!column) return;
    const order = this.getOrder(columns, after);
    this.model.doc.transact(() => {
      const realColumn = this.model.columns[column.columnId];
      if (realColumn) {
        realColumn.order = order;
      }
    });
  }

  moveRow(from: number, after?: number) {
    const rows = this.rows$.value;
    const row = rows[from];
    if (!row) return;
    const order = this.getOrder(rows, after);
    this.model.doc.transact(() => {
      const realRow = this.model.rows[row.rowId];
      if (realRow) {
        realRow.order = order;
      }
    });
  }

  notifyReadonlyChange() {
    this._readonlyTick$.value++;
  }

  setColumnBackgroundColor(columnId: string, color?: string) {
    this.model.doc.transact(() => {
      if (this.model.columns[columnId]) {
        this.model.columns[columnId].backgroundColor = color;
      }
    });
  }

  setColumnWidth(columnId: string, width: number) {
    this.model.doc.transact(() => {
      if (this.model.columns[columnId]) {
        this.model.columns[columnId].width = width;
      }
    });
  }

  setRowBackgroundColor(rowId: string, color?: string) {
    this.model.doc.transact(() => {
      if (this.model.rows[rowId]) {
        this.model.rows[rowId].backgroundColor = color;
      }
    });
  }

  updateColumnOrder(columnId: string, newOrder: string) {
    this.model.doc.transact(() => {
      if (this.model.columns[columnId]) {
        this.model.columns[columnId].order = newOrder;
      }
    });
  }

  updateRowOrder(rowId: string, newOrder: string) {
    this.model.doc.transact(() => {
      if (this.model.rows[rowId]) {
        this.model.rows[rowId].order = newOrder;
      }
    });
  }
}
