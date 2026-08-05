import type {
  TableColumn,
  TableMergedRange,
  TableRow,
} from '@blockexpanse/affine-model';

import type { TableAreaSelection } from './selection-schema.js';

import { compareByOrder } from './utils.js';

export interface NormalizedTableRange {
  rowStartIndex: number;
  rowEndIndex: number;
  columnStartIndex: number;
  columnEndIndex: number;
}

export interface ResolvedMergedRange extends NormalizedTableRange {
  range: TableMergedRange;
}

const containsPoint = (
  range: NormalizedTableRange,
  rowIndex: number,
  columnIndex: number
) =>
  rowIndex >= range.rowStartIndex &&
  rowIndex <= range.rowEndIndex &&
  columnIndex >= range.columnStartIndex &&
  columnIndex <= range.columnEndIndex;

export const rangesOverlap = (
  a: NormalizedTableRange,
  b: NormalizedTableRange
) =>
  a.rowStartIndex <= b.rowEndIndex &&
  a.rowEndIndex >= b.rowStartIndex &&
  a.columnStartIndex <= b.columnEndIndex &&
  a.columnEndIndex >= b.columnStartIndex;

export const normalizeTableSelection = (
  selection: TableAreaSelection
): NormalizedTableRange => ({
  rowStartIndex: Math.min(selection.rowStartIndex, selection.rowEndIndex),
  rowEndIndex: Math.max(selection.rowStartIndex, selection.rowEndIndex),
  columnStartIndex: Math.min(
    selection.columnStartIndex,
    selection.columnEndIndex
  ),
  columnEndIndex: Math.max(
    selection.columnStartIndex,
    selection.columnEndIndex
  ),
});

export const resolveMergedRange = (
  range: TableMergedRange,
  rows: TableRow[],
  columns: TableColumn[]
): ResolvedMergedRange | undefined => {
  const rowStartIndex = rows.findIndex(row => row.rowId === range.startRowId);
  const rowEndIndex = rows.findIndex(row => row.rowId === range.endRowId);
  const columnStartIndex = columns.findIndex(
    column => column.columnId === range.startColumnId
  );
  const columnEndIndex = columns.findIndex(
    column => column.columnId === range.endColumnId
  );
  if (
    rowStartIndex < 0 ||
    rowEndIndex < rowStartIndex ||
    columnStartIndex < 0 ||
    columnEndIndex < columnStartIndex
  ) {
    return;
  }
  const anchorRowIndex = rows.findIndex(
    row => row.rowId === range.anchor.rowId
  );
  const anchorColumnIndex = columns.findIndex(
    column => column.columnId === range.anchor.columnId
  );
  if (
    anchorRowIndex !== rowStartIndex ||
    anchorColumnIndex !== columnStartIndex
  ) {
    return;
  }
  return {
    range,
    rowStartIndex,
    rowEndIndex,
    columnStartIndex,
    columnEndIndex,
  };
};

export const resolveMergedRanges = (
  ranges: Record<string, TableMergedRange> | undefined,
  rows: TableRow[],
  columns: TableColumn[]
) =>
  Object.values(ranges ?? {}).flatMap(range => {
    const resolved = resolveMergedRange(range, rows, columns);
    return resolved ? [resolved] : [];
  });

export const expandSelectionToMergedRanges = (
  selection: TableAreaSelection,
  ranges: ResolvedMergedRange[]
): TableAreaSelection => {
  const expanded = normalizeTableSelection(selection);
  let changed = true;
  while (changed) {
    changed = false;
    for (const range of ranges) {
      if (!rangesOverlap(expanded, range)) continue;
      const next = {
        rowStartIndex: Math.min(expanded.rowStartIndex, range.rowStartIndex),
        rowEndIndex: Math.max(expanded.rowEndIndex, range.rowEndIndex),
        columnStartIndex: Math.min(
          expanded.columnStartIndex,
          range.columnStartIndex
        ),
        columnEndIndex: Math.max(expanded.columnEndIndex, range.columnEndIndex),
      };
      changed =
        changed ||
        next.rowStartIndex !== expanded.rowStartIndex ||
        next.rowEndIndex !== expanded.rowEndIndex ||
        next.columnStartIndex !== expanded.columnStartIndex ||
        next.columnEndIndex !== expanded.columnEndIndex;
      Object.assign(expanded, next);
    }
  }
  return { type: 'area', ...expanded };
};

export const findMergedRangeAt = (
  rowId: string,
  columnId: string,
  ranges: ResolvedMergedRange[],
  rows: TableRow[],
  columns: TableColumn[]
) => {
  const rowIndex = rows.findIndex(row => row.rowId === rowId);
  const columnIndex = columns.findIndex(column => column.columnId === columnId);
  if (rowIndex < 0 || columnIndex < 0) return;
  return ranges.find(range => containsPoint(range, rowIndex, columnIndex));
};

export const removeColumnFromMergedRange = (
  resolved: ResolvedMergedRange,
  columnId: string,
  rows: TableRow[],
  columns: TableColumn[]
): TableMergedRange | undefined => {
  const rangeColumns = columns.slice(
    resolved.columnStartIndex,
    resolved.columnEndIndex + 1
  );
  if (!rangeColumns.some(column => column.columnId === columnId)) {
    return resolved.range;
  }
  const remainingColumns = rangeColumns.filter(
    column => column.columnId !== columnId
  );
  const rowSpan = resolved.rowEndIndex - resolved.rowStartIndex + 1;
  if (remainingColumns.length * rowSpan < 2) return;
  const firstColumn = remainingColumns[0];
  const lastColumn = remainingColumns.at(-1);
  const startRow = rows[resolved.rowStartIndex];
  if (!firstColumn || !lastColumn || !startRow) return;
  return {
    ...resolved.range,
    anchor: { rowId: startRow.rowId, columnId: firstColumn.columnId },
    startColumnId: firstColumn.columnId,
    endColumnId: lastColumn.columnId,
  };
};

export const removeRowFromMergedRange = (
  resolved: ResolvedMergedRange,
  rowId: string,
  rows: TableRow[],
  columns: TableColumn[]
): TableMergedRange | undefined => {
  const rangeRows = rows.slice(
    resolved.rowStartIndex,
    resolved.rowEndIndex + 1
  );
  if (!rangeRows.some(row => row.rowId === rowId)) return resolved.range;
  const remainingRows = rangeRows.filter(row => row.rowId !== rowId);
  const columnSpan = resolved.columnEndIndex - resolved.columnStartIndex + 1;
  if (remainingRows.length * columnSpan < 2) return;
  const firstRow = remainingRows[0];
  const lastRow = remainingRows.at(-1);
  const startColumn = columns[resolved.columnStartIndex];
  if (!firstRow || !lastRow || !startColumn) return;
  return {
    ...resolved.range,
    anchor: { rowId: firstRow.rowId, columnId: startColumn.columnId },
    startRowId: firstRow.rowId,
    endRowId: lastRow.rowId,
  };
};

export const sortTableAxes = (
  rows: Record<string, TableRow>,
  columns: Record<string, TableColumn>
) => ({
  rows: Object.values(rows).sort(compareByOrder),
  columns: Object.values(columns).sort(compareByOrder),
});
