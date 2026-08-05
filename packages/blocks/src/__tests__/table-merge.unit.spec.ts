import type {
  TableColumn,
  TableMergedRange,
  TableRow,
} from '@blockexpanse/affine-model';

import { describe, expect, test } from 'vitest';

import { tableToOffsets } from '../table-block/drag-helper.js';
import {
  htmlTableToClipboardPayload,
  parseTableClipboardPayload,
  type TableClipboardPayload,
  tableClipboardToHtml,
  tableClipboardToPlainText,
} from '../table-block/table-clipboard.js';
import {
  expandSelectionToMergedRanges,
  findMergedRangeAt,
  normalizeTableSelection,
  rangesOverlap,
  removeColumnFromMergedRange,
  removeRowFromMergedRange,
  resolveMergedRange,
  resolveMergedRanges,
} from '../table-block/table-merge.js';

const rows: TableRow[] = ['r1', 'r2', 'r3', 'r4'].map((rowId, index) => ({
  rowId,
  order: `${index}`,
}));
const columns: TableColumn[] = ['c1', 'c2', 'c3', 'c4'].map(
  (columnId, index) => ({ columnId, order: `${index}` })
);

const mergedRange = (
  id: string,
  startRowId: string,
  endRowId: string,
  startColumnId: string,
  endColumnId: string
): TableMergedRange => ({
  id,
  anchor: { rowId: startRowId, columnId: startColumnId },
  startRowId,
  endRowId,
  startColumnId,
  endColumnId,
});

describe('table merged ranges', () => {
  test('normalizes a reverse area selection', () => {
    expect(
      normalizeTableSelection({
        type: 'area',
        rowStartIndex: 3,
        rowEndIndex: 1,
        columnStartIndex: 2,
        columnEndIndex: 0,
      })
    ).toEqual({
      rowStartIndex: 1,
      rowEndIndex: 3,
      columnStartIndex: 0,
      columnEndIndex: 2,
    });
  });

  test('resolves a valid range and rejects an invalid anchor', () => {
    const range = mergedRange('m1', 'r1', 'r2', 'c2', 'c3');
    expect(resolveMergedRange(range, rows, columns)).toMatchObject({
      rowStartIndex: 0,
      rowEndIndex: 1,
      columnStartIndex: 1,
      columnEndIndex: 2,
    });

    expect(
      resolveMergedRange(
        { ...range, anchor: { rowId: 'r2', columnId: 'c2' } },
        rows,
        columns
      )
    ).toBeUndefined();
  });

  test('expands repeatedly when merged ranges are connected', () => {
    const ranges = resolveMergedRanges(
      {
        m1: mergedRange('m1', 'r1', 'r2', 'c1', 'c2'),
        m2: mergedRange('m2', 'r2', 'r3', 'c2', 'c3'),
      },
      rows,
      columns
    );
    expect(
      expandSelectionToMergedRanges(
        {
          type: 'area',
          rowStartIndex: 0,
          rowEndIndex: 0,
          columnStartIndex: 0,
          columnEndIndex: 0,
        },
        ranges
      )
    ).toEqual({
      type: 'area',
      rowStartIndex: 0,
      rowEndIndex: 2,
      columnStartIndex: 0,
      columnEndIndex: 2,
    });
  });

  test('finds covered coordinates and detects overlaps', () => {
    const ranges = resolveMergedRanges(
      { m1: mergedRange('m1', 'r2', 'r3', 'c2', 'c4') },
      rows,
      columns
    );
    expect(findMergedRangeAt('r3', 'c3', ranges, rows, columns)?.range.id).toBe(
      'm1'
    );
    expect(
      findMergedRangeAt('r1', 'c1', ranges, rows, columns)
    ).toBeUndefined();
    expect(
      rangesOverlap(ranges[0]!, {
        rowStartIndex: 2,
        rowEndIndex: 3,
        columnStartIndex: 0,
        columnEndIndex: 1,
      })
    ).toBe(true);
  });

  test('shrinks a range and moves its anchor when an edge axis is deleted', () => {
    const range = resolveMergedRange(
      mergedRange('m1', 'r1', 'r2', 'c1', 'c3'),
      rows,
      columns
    )!;
    expect(removeRowFromMergedRange(range, 'r1', rows, columns)).toMatchObject({
      anchor: { rowId: 'r2', columnId: 'c1' },
      startRowId: 'r2',
      endRowId: 'r2',
    });
    expect(
      removeColumnFromMergedRange(range, 'c1', rows, columns)
    ).toMatchObject({
      anchor: { rowId: 'r1', columnId: 'c2' },
      startColumnId: 'c2',
      endColumnId: 'c3',
    });
  });

  test('removes a merged range when fewer than two cells remain', () => {
    const range = resolveMergedRange(
      mergedRange('m1', 'r1', 'r1', 'c1', 'c2'),
      rows,
      columns
    )!;
    expect(
      removeColumnFromMergedRange(range, 'c1', rows, columns)
    ).toBeUndefined();
  });
});

describe('merged table DOM geometry', () => {
  test('uses logical colgroup geometry instead of rendered td count', () => {
    const table = document.createElement('table');
    table.innerHTML = `
      <colgroup><col><col><col></colgroup>
      <tbody><tr><td colspan="2"></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody>
    `;
    const rect = (top: number, right: number, bottom: number, left: number) =>
      ({
        top,
        right,
        bottom,
        left,
        width: right - left,
        height: bottom - top,
        x: left,
        y: top,
        toJSON: () => ({}),
      }) as DOMRect;
    Array.from(table.querySelectorAll('col')).forEach((column, index) => {
      column.getBoundingClientRect = () =>
        rect(0, (index + 1) * 100, 60, index * 100);
    });
    Array.from(table.querySelectorAll('tr')).forEach((row, index) => {
      row.getBoundingClientRect = () =>
        rect(index * 30, 300, (index + 1) * 30, 0);
    });

    expect(tableToOffsets(table)).toEqual({
      rows: [0, 30, 60],
      columns: [0, 100, 200, 300],
    });
  });
});

describe('table clipboard payload', () => {
  const payload: TableClipboardPayload = {
    version: 1,
    rows: 2,
    columns: 3,
    cells: [
      ['<merged>', 'hidden-a', 'right'],
      ['hidden-b', 'hidden-c', 'bottom-right'],
    ],
    mergedRanges: [
      {
        rowStartIndex: 0,
        rowEndIndex: 1,
        columnStartIndex: 0,
        columnEndIndex: 1,
      },
    ],
  };

  test('keeps hidden content internally but flattens external text', () => {
    expect(parseTableClipboardPayload(JSON.stringify(payload))).toEqual(
      payload
    );
    expect(tableClipboardToPlainText(payload)).toBe(
      '<merged>\t\tright\n\t\tbottom-right'
    );
  });

  test('exports escaped HTML with rowspan and colspan', () => {
    const html = tableClipboardToHtml(payload);
    expect(html).toContain('rowspan="2"');
    expect(html).toContain('colspan="2"');
    expect(html).toContain('&lt;merged&gt;');
    expect(html).not.toContain('hidden-a');
  });

  test('rejects malformed or oversized clipboard data', () => {
    expect(parseTableClipboardPayload('{')).toBeUndefined();
    expect(
      parseTableClipboardPayload(
        JSON.stringify({ ...payload, rows: 10001, columns: 1 })
      )
    ).toBeUndefined();
  });

  test('restores merged ranges from external HTML tables', () => {
    expect(
      htmlTableToClipboardPayload(`
        <table><tbody>
          <tr><td rowspan="2" colspan="2">merged</td><td>right</td></tr>
          <tr><td>bottom-right</td></tr>
        </tbody></table>
      `)
    ).toEqual({
      version: 1,
      rows: 2,
      columns: 3,
      cells: [
        ['merged', '', 'right'],
        ['', '', 'bottom-right'],
      ],
      mergedRanges: [
        {
          rowStartIndex: 0,
          rowEndIndex: 1,
          columnStartIndex: 0,
          columnEndIndex: 1,
        },
      ],
    });
  });
});
