import type {
  TableCellSerialized,
  TableColumn,
  TableMergedRange,
  TablePropsSerialized,
  TableRow,
} from '@blockexpanse/affine-model';
import type {
  HtmlAST,
  MarkdownAST,
} from '@blockexpanse/affine-shared/adapters';
import type { DeltaInsert } from '@blockexpanse/inline';
import type { Element } from 'hast';
import type { Table as MarkdownTable } from 'mdast';

import { HastUtils } from '@blockexpanse/affine-shared/adapters';
import { generateKeyBetweenV2 } from '@blockexpanse/block-std/gfx';
import { nanoid } from '@blockexpanse/store';

import { compareByOrder } from '../utils.js';

type RichTextType = DeltaInsert[];
const createRichText = (text: RichTextType) => {
  return {
    '$blockexpanse:internal:text$': true,
    delta: text,
  };
};
function calculateColumnWidths(rows: string[][]): number[] {
  return (
    rows[0]?.map((_, colIndex) =>
      Math.max(...rows.map(row => (row[colIndex] || '').length))
    ) ?? []
  );
}

function formatRow(
  row: string[],
  columnWidths: number[],
  isHeader: boolean
): string {
  const cells = row.map((cell, colIndex) =>
    cell?.padEnd(columnWidths[colIndex] ?? 0, ' ')
  );
  const rowString = `| ${cells.join(' | ')} |`;
  return isHeader
    ? `${rowString}\n${formatSeparator(columnWidths)}`
    : rowString;
}

function formatSeparator(columnWidths: number[]): string {
  const separator = columnWidths.map(width => '-'.repeat(width)).join(' | ');
  return `| ${separator} |`;
}

export function formatTable(rows: string[][]): string {
  const columnWidths = calculateColumnWidths(rows);
  const formattedRows = rows.map((row, index) =>
    formatRow(row, columnWidths, index === 0)
  );
  return formattedRows.join('\n');
}
type Table = {
  rows: Row[];
};
type Row = {
  cells: Cell[];
};
type Cell = {
  value: { delta: DeltaInsert[] };
  colSpan: number;
  rowSpan: number;
};
export const processTable = (
  columns: Record<string, TableColumn>,
  rows: Record<string, TableRow>,
  cells: Record<string, TableCellSerialized>,
  mergedRanges?: Record<string, TableMergedRange>,
  skipCoveredCells = false
): Table => {
  const sortedColumns = Object.values(columns).sort(compareByOrder);
  const sortedRows = Object.values(rows).sort(compareByOrder);
  const mergedByAnchor = new Map<
    string,
    { colSpan: number; rowSpan: number }
  >();
  const coveredCells = new Set<string>();
  Object.values(mergedRanges ?? {}).forEach(range => {
    const rowStart = sortedRows.findIndex(
      row => row.rowId === range.startRowId
    );
    const rowEnd = sortedRows.findIndex(row => row.rowId === range.endRowId);
    const columnStart = sortedColumns.findIndex(
      column => column.columnId === range.startColumnId
    );
    const columnEnd = sortedColumns.findIndex(
      column => column.columnId === range.endColumnId
    );
    if (
      rowStart < 0 ||
      rowEnd < rowStart ||
      columnStart < 0 ||
      columnEnd < columnStart ||
      range.anchor.rowId !== range.startRowId ||
      range.anchor.columnId !== range.startColumnId
    ) {
      return;
    }
    mergedByAnchor.set(`${range.startRowId}:${range.startColumnId}`, {
      rowSpan: rowEnd - rowStart + 1,
      colSpan: columnEnd - columnStart + 1,
    });
    for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
      for (
        let columnIndex = columnStart;
        columnIndex <= columnEnd;
        columnIndex++
      ) {
        if (rowIndex === rowStart && columnIndex === columnStart) continue;
        const row = sortedRows[rowIndex];
        const column = sortedColumns[columnIndex];
        if (row && column) coveredCells.add(`${row.rowId}:${column.columnId}`);
      }
    }
  });
  const table: Table = {
    rows: [],
  };
  sortedRows.forEach(r => {
    const row: Row = {
      cells: [],
    };
    sortedColumns.forEach(col => {
      const cellId = `${r.rowId}:${col.columnId}`;
      if (coveredCells.has(cellId)) {
        if (!skipCoveredCells) {
          row.cells.push({
            colSpan: 1,
            rowSpan: 1,
            value: { delta: [] },
          });
        }
        return;
      }
      const span = mergedByAnchor.get(cellId) ?? { colSpan: 1, rowSpan: 1 };
      const cell = cells[cellId];
      if (!cell) {
        row.cells.push({
          ...span,
          value: {
            delta: [],
          },
        });
        return;
      }
      row.cells.push({
        ...span,
        value: cell.text,
      });
    });
    table.rows.push(row);
  });
  return table;
};

const getAllTag = (node: Element | undefined, tagName: string): Element[] => {
  if (!node) {
    return [];
  }
  if (HastUtils.isElement(node)) {
    if (node.tagName === tagName) {
      return [node];
    }
    return node.children.flatMap(child => {
      if (HastUtils.isElement(child)) {
        return getAllTag(child, tagName);
      }
      return [];
    });
  }
  return [];
};

type IndexedMergedRange = {
  rowStartIndex: number;
  rowEndIndex: number;
  columnStartIndex: number;
  columnEndIndex: number;
};

const parseCellSpan = (value: unknown) => {
  const span = Number(value ?? 1);
  return Number.isInteger(span) && span > 0 ? span : 1;
};

export const createTableProps = (
  deltasLists: RichTextType[][],
  indexedMergedRanges: IndexedMergedRange[] = []
) => {
  const createIdAndOrder = (count: number) => {
    const result: { id: string; order: string }[] = Array.from({
      length: count,
    });
    for (let i = 0; i < count; i++) {
      const id = nanoid();
      const order = generateKeyBetweenV2(result[i - 1]?.order ?? null, null);
      result[i] = { id, order };
    }
    return result;
  };
  const columnCount = Math.max(...deltasLists.map(row => row.length));
  const rowCount = deltasLists.length;

  const columns: TableColumn[] = createIdAndOrder(columnCount).map(v => ({
    columnId: v.id,
    order: v.order,
  }));
  const rows: TableRow[] = createIdAndOrder(rowCount).map(v => ({
    rowId: v.id,
    order: v.order,
  }));

  const cells: Record<string, TableCellSerialized> = {};
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const row = rows[i];
      const column = columns[j];
      if (!row || !column) {
        continue;
      }
      const cellId = `${row.rowId}:${column.columnId}`;
      const text = deltasLists[i]?.[j];
      cells[cellId] = {
        text: createRichText(text ?? []),
      };
    }
  }
  const mergedRanges: Record<string, TableMergedRange> = {};
  indexedMergedRanges.forEach(indexedRange => {
    const startRow = rows[indexedRange.rowStartIndex];
    const endRow = rows[indexedRange.rowEndIndex];
    const startColumn = columns[indexedRange.columnStartIndex];
    const endColumn = columns[indexedRange.columnEndIndex];
    if (!startRow || !endRow || !startColumn || !endColumn) return;
    const id = nanoid();
    mergedRanges[id] = {
      id,
      anchor: { rowId: startRow.rowId, columnId: startColumn.columnId },
      startRowId: startRow.rowId,
      endRowId: endRow.rowId,
      startColumnId: startColumn.columnId,
      endColumnId: endColumn.columnId,
    };
  });
  return {
    columns: Object.fromEntries(
      columns.map(column => [column.columnId, column])
    ),
    rows: Object.fromEntries(rows.map(row => [row.rowId, row])),
    cells,
    mergedRanges,
  };
};

export const parseTableFromHtml = (
  element: Element,
  astToDelta: (ast: HtmlAST) => RichTextType
): TablePropsSerialized => {
  const allRows = getAllTag(element, 'tr').map(row =>
    row.children.filter(
      (child): child is Element =>
        HastUtils.isElement(child) &&
        (child.tagName === 'td' || child.tagName === 'th')
    )
  );
  const rowTextLists: RichTextType[][] = [];
  const indexedMergedRanges: IndexedMergedRange[] = [];
  const occupied = new Set<string>();
  allRows.forEach((cells, rowIndex) => {
    const row = (rowTextLists[rowIndex] ??= []);
    let columnIndex = 0;
    cells.forEach(cell => {
      while (occupied.has(`${rowIndex}:${columnIndex}`)) columnIndex++;
      const rowSpan = parseCellSpan(cell.properties?.rowSpan);
      const colSpan = parseCellSpan(cell.properties?.colSpan);
      row[columnIndex] = astToDelta(cell);
      if (rowSpan > 1 || colSpan > 1) {
        indexedMergedRanges.push({
          rowStartIndex: rowIndex,
          rowEndIndex: rowIndex + rowSpan - 1,
          columnStartIndex: columnIndex,
          columnEndIndex: columnIndex + colSpan - 1,
        });
      }
      for (let r = rowIndex; r < rowIndex + rowSpan; r++) {
        const targetRow = (rowTextLists[r] ??= []);
        for (let c = columnIndex; c < columnIndex + colSpan; c++) {
          occupied.add(`${r}:${c}`);
          targetRow[c] ??= [];
        }
      }
      columnIndex += colSpan;
    });
  });
  return createTableProps(rowTextLists, indexedMergedRanges);
};

export const parseTableFromMarkdown = (
  node: MarkdownTable,
  astToDelta: (ast: MarkdownAST) => RichTextType
) => {
  const rowTextLists: RichTextType[][] = [];
  node.children.forEach(row => {
    const rowText: RichTextType[] = [];
    row.children.forEach(cell => {
      rowText.push(astToDelta(cell));
    });
    rowTextLists.push(rowText);
  });
  return createTableProps(rowTextLists);
};
