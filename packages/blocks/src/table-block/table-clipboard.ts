export const TABLE_CLIPBOARD_MIME = 'application/x-blockexpanse-table+json';

export interface TableClipboardMergedRange {
  rowStartIndex: number;
  rowEndIndex: number;
  columnStartIndex: number;
  columnEndIndex: number;
}

export interface TableClipboardPayload {
  version: 1;
  rows: number;
  columns: number;
  cells: string[][];
  mergedRanges: TableClipboardMergedRange[];
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const parseTableClipboardPayload = (
  value: string
): TableClipboardPayload | undefined => {
  try {
    const payload = JSON.parse(value) as Partial<TableClipboardPayload>;
    if (
      payload.version !== 1 ||
      !Number.isInteger(payload.rows) ||
      !Number.isInteger(payload.columns) ||
      !payload.rows ||
      !payload.columns ||
      payload.rows < 0 ||
      payload.columns < 0 ||
      payload.rows * payload.columns > 10000 ||
      !Array.isArray(payload.cells) ||
      payload.cells.length !== payload.rows ||
      payload.cells.some(
        row =>
          !Array.isArray(row) ||
          row.length !== payload.columns ||
          row.some(cell => typeof cell !== 'string')
      ) ||
      !Array.isArray(payload.mergedRanges) ||
      payload.mergedRanges.some(
        range =>
          !range ||
          !Number.isInteger(range.rowStartIndex) ||
          !Number.isInteger(range.rowEndIndex) ||
          !Number.isInteger(range.columnStartIndex) ||
          !Number.isInteger(range.columnEndIndex) ||
          range.rowStartIndex < 0 ||
          range.columnStartIndex < 0 ||
          range.rowEndIndex < range.rowStartIndex ||
          range.columnEndIndex < range.columnStartIndex ||
          range.rowEndIndex >= payload.rows! ||
          range.columnEndIndex >= payload.columns!
      )
    ) {
      return;
    }
    return payload as TableClipboardPayload;
  } catch {
    return;
  }
};

export const tableClipboardToPlainText = (payload: TableClipboardPayload) => {
  const covered = new Set<string>();
  payload.mergedRanges.forEach(range => {
    for (let row = range.rowStartIndex; row <= range.rowEndIndex; row++) {
      for (
        let column = range.columnStartIndex;
        column <= range.columnEndIndex;
        column++
      ) {
        if (row !== range.rowStartIndex || column !== range.columnStartIndex) {
          covered.add(`${row}:${column}`);
        }
      }
    }
  });
  return payload.cells
    .map((row, rowIndex) =>
      row
        .map((cell, columnIndex) =>
          covered.has(`${rowIndex}:${columnIndex}`) ? '' : cell
        )
        .join('\t')
    )
    .join('\n');
};

export const tableClipboardToHtml = (payload: TableClipboardPayload) => {
  const anchors = new Map<string, TableClipboardMergedRange>();
  const covered = new Set<string>();
  payload.mergedRanges.forEach(range => {
    anchors.set(`${range.rowStartIndex}:${range.columnStartIndex}`, range);
    for (let row = range.rowStartIndex; row <= range.rowEndIndex; row++) {
      for (
        let column = range.columnStartIndex;
        column <= range.columnEndIndex;
        column++
      ) {
        if (row !== range.rowStartIndex || column !== range.columnStartIndex) {
          covered.add(`${row}:${column}`);
        }
      }
    }
  });
  const rows = payload.cells.map((row, rowIndex) => {
    const cells = row.flatMap((cell, columnIndex) => {
      const key = `${rowIndex}:${columnIndex}`;
      if (covered.has(key)) return [];
      const range = anchors.get(key);
      const rowSpan = range ? range.rowEndIndex - range.rowStartIndex + 1 : 1;
      const colSpan = range
        ? range.columnEndIndex - range.columnStartIndex + 1
        : 1;
      return [
        `<td${rowSpan > 1 ? ` rowspan="${rowSpan}"` : ''}${colSpan > 1 ? ` colspan="${colSpan}"` : ''} style="border:1px solid var(--affine-border-color);padding:8px 12px;min-width:120px;min-height:22px;">${escapeHtml(cell)}</td>`,
      ];
    });
    return `<tr>${cells.join('')}</tr>`;
  });
  return `<table style="border-collapse:collapse;"><tbody>${rows.join('')}</tbody></table>`;
};

export const htmlTableToClipboardPayload = (
  html: string
): TableClipboardPayload | undefined => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const table = doc.querySelector('table');
  if (!table) return;
  const rows = Array.from(table.querySelectorAll('tr')).filter(
    row => row.closest('table') === table
  );
  const cells: string[][] = [];
  const mergedRanges: TableClipboardMergedRange[] = [];
  const occupied = new Set<string>();
  rows.forEach((rowElement, rowIndex) => {
    const row = (cells[rowIndex] ??= []);
    let columnIndex = 0;
    Array.from(rowElement.children)
      .filter(element => element.tagName === 'TD' || element.tagName === 'TH')
      .forEach(cellElement => {
        while (occupied.has(`${rowIndex}:${columnIndex}`)) columnIndex++;
        const rowSpan = Math.max(
          1,
          Number.parseInt(cellElement.getAttribute('rowspan') ?? '1', 10) || 1
        );
        const colSpan = Math.max(
          1,
          Number.parseInt(cellElement.getAttribute('colspan') ?? '1', 10) || 1
        );
        row[columnIndex] = cellElement.textContent?.trim() ?? '';
        if (rowSpan > 1 || colSpan > 1) {
          mergedRanges.push({
            rowStartIndex: rowIndex,
            rowEndIndex: rowIndex + rowSpan - 1,
            columnStartIndex: columnIndex,
            columnEndIndex: columnIndex + colSpan - 1,
          });
        }
        for (let r = rowIndex; r < rowIndex + rowSpan; r++) {
          const targetRow = (cells[r] ??= []);
          for (let c = columnIndex; c < columnIndex + colSpan; c++) {
            occupied.add(`${r}:${c}`);
            targetRow[c] ??= '';
          }
        }
        columnIndex += colSpan;
      });
  });
  const columnCount = Math.max(...cells.map(row => row.length), 0);
  if (!cells.length || !columnCount) return;
  return {
    version: 1,
    rows: cells.length,
    columns: columnCount,
    cells: cells.map(row =>
      Array.from({ length: columnCount }, (_, index) => row[index] ?? '')
    ),
    mergedRanges,
  };
};
