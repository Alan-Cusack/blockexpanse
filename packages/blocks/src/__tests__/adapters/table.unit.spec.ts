import type { BlockSnapshot } from '@blockexpanse/store';
import type { Element } from 'hast';
import type { Table as MarkdownTable } from 'mdast';

import {
  DEFAULT_NOTE_BACKGROUND_COLOR,
  NoteDisplayMode,
  type TablePropsSerialized,
} from '@blockexpanse/affine-model';
import { describe, expect, test, vi } from 'vitest';

import { HtmlAdapter } from '../../_common/adapters/html-adapter/index.js';
import { MarkdownAdapter } from '../../_common/adapters/markdown/index.js';
import { tableBlockHtmlAdapterMatcher } from '../../table-block/adapters/html.js';
import { tableBlockMarkdownAdapterMatcher } from '../../table-block/adapters/markdown.js';
import {
  createTableProps,
  formatTable,
  parseTableFromHtml,
  parseTableFromMarkdown,
  processTable,
} from '../../table-block/adapters/utils.js';
import { startDragSession } from '../../table-block/drag-session.js';
import { createJob } from '../utils/create-job.js';

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

const textToDelta = (text: string) => [{ insert: text }];

const deltaToPlainText = (delta: unknown): string => {
  if (!Array.isArray(delta)) return '';
  return delta
    .map(insert => (typeof insert?.insert === 'string' ? insert.insert : ''))
    .join('');
};

/** Convert TablePropsSerialized -> plain 2D text grid, ordered by `order`. */
const propsToGrid = (props: TablePropsSerialized): string[][] => {
  const table = processTable(props.columns, props.rows, props.cells);
  return table.rows.map(r => r.cells.map(c => deltaToPlainText(c.value.delta)));
};

const tableGridFromSnapshot = (snapshot: BlockSnapshot): string[][] => {
  const table = snapshot.children.find(
    child => child.flavour === 'affine:table'
  );
  expect(table).toBeDefined();
  return propsToGrid(table!.props as unknown as TablePropsSerialized);
};

const makeMarkdownTable = (rows: string[][]): MarkdownTable => {
  return {
    type: 'table',
    align: null,
    children: rows.map(cells => ({
      type: 'tableRow',
      children: cells.map(text => ({
        type: 'tableCell',
        children: [{ type: 'text', value: text }],
      })),
    })),
  } as unknown as MarkdownTable;
};

const astToDelta = (node: unknown): { insert: string }[] => {
  // Grabs plain text out of mdast/hast cell nodes (deep walk).
  const collect = (n: unknown): string => {
    if (!n || typeof n !== 'object') return '';
    const node = n as { type?: string; value?: string; children?: unknown[] };
    if (node.type === 'text' && typeof node.value === 'string') {
      return node.value;
    }
    if (Array.isArray(node.children)) {
      return node.children.map(collect).join('');
    }
    return '';
  };
  const text = collect(node);
  return text === '' ? [] : [{ insert: text }];
};

// ---------------------------------------------------------------------------
// pure-function round-trip
// ---------------------------------------------------------------------------

describe('table adapters utils (pure round-trip)', () => {
  test('createTableProps -> processTable round trip preserves grid', () => {
    const input = [
      [textToDelta('a'), textToDelta('b')],
      [textToDelta('c'), textToDelta('d')],
    ];
    const props = createTableProps(input);
    expect(propsToGrid(props)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  test('createTableProps fills missing cells with empty delta', () => {
    const input = [
      [textToDelta('a'), textToDelta('b')],
      [textToDelta('c')], // short second row
    ];
    const props = createTableProps(input);
    expect(propsToGrid(props)).toEqual([
      ['a', 'b'],
      ['c', ''],
    ]);
  });

  test('formatTable outputs aligned gfm table', () => {
    const out = formatTable([
      ['name', 'age'],
      ['alice', '3'],
      ['bob', '42'],
    ]);
    const lines = out.split('\n');
    expect(lines[0]).toBe('| name  | age |');
    expect(lines[1]).toMatch(/^\| -+ \| -+ \|$/);
    expect(lines[2]).toBe('| alice | 3   |');
    expect(lines[3]).toBe('| bob   | 42  |');
  });

  test('parseTableFromMarkdown -> processTable round trip', () => {
    const mdast = makeMarkdownTable([
      ['h1', 'h2'],
      ['1', '2'],
    ]);
    const props = parseTableFromMarkdown(mdast, astToDelta);
    expect(propsToGrid(props)).toEqual([
      ['h1', 'h2'],
      ['1', '2'],
    ]);
  });

  test('parseTableFromHtml extracts thead/tbody rows', () => {
    const td = (text: string): Element => ({
      type: 'element',
      tagName: 'td',
      properties: {},
      children: [{ type: 'text', value: text }],
    });
    const th = (text: string): Element => ({
      type: 'element',
      tagName: 'th',
      properties: {},
      children: [{ type: 'text', value: text }],
    });
    const tr = (cells: Element[]): Element => ({
      type: 'element',
      tagName: 'tr',
      properties: {},
      children: cells,
    });
    const table: Element = {
      type: 'element',
      tagName: 'table',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'thead',
          properties: {},
          children: [tr([th('x'), th('y')])],
        },
        {
          type: 'element',
          tagName: 'tbody',
          properties: {},
          children: [tr([td('1'), td('2')])],
        },
      ],
    };
    const props = parseTableFromHtml(table, astToDelta);
    expect(propsToGrid(props)).toEqual([
      ['x', 'y'],
      ['1', '2'],
    ]);
  });

  test('processTable uses `order` to sort rows/columns, not insertion order', () => {
    const input = [[textToDelta('a')], [textToDelta('b')]];
    const props = createTableProps(input);
    // Reverse rows map insertion order
    const rowEntries = Object.entries(props.rows).reverse();
    const reversed: TablePropsSerialized = {
      columns: { ...props.columns },
      rows: Object.fromEntries(rowEntries),
      cells: { ...props.cells },
    };
    expect(propsToGrid(reversed)).toEqual([['a'], ['b']]);
  });

  test('HTML rowspan/colspan restores merged ranges and logical cells', () => {
    const cell = (text: string): Element => ({
      type: 'element',
      tagName: 'td',
      properties: {},
      children: [{ type: 'text', value: text }],
    });
    const row = (cells: Element[]): Element => ({
      type: 'element',
      tagName: 'tr',
      properties: {},
      children: cells,
    });
    const spanCell = (
      text: string,
      rowSpan: number,
      colSpan: number
    ): Element => ({
      type: 'element',
      tagName: 'td',
      properties: { rowSpan, colSpan },
      children: [{ type: 'text', value: text }],
    });
    const table: Element = {
      type: 'element',
      tagName: 'table',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'tbody',
          properties: {},
          children: [
            row([spanCell('merged', 2, 2), cell('right')]),
            row([cell('bottom-right')]),
          ],
        },
      ],
    };

    const props = parseTableFromHtml(table, astToDelta);
    expect(propsToGrid(props)).toEqual([
      ['merged', '', 'right'],
      ['', '', 'bottom-right'],
    ]);
    expect(Object.values(props.mergedRanges ?? {})).toHaveLength(1);
    const processed = processTable(
      props.columns,
      props.rows,
      props.cells,
      props.mergedRanges,
      true
    );
    expect(processed.rows.map(row => row.cells.length)).toEqual([2, 1]);
    expect(processed.rows[0]?.cells[0]).toMatchObject({
      rowSpan: 2,
      colSpan: 2,
    });
    const flattened = processTable(
      props.columns,
      props.rows,
      props.cells,
      props.mergedRanges
    );
    expect(flattened.rows.map(row => row.cells.length)).toEqual([3, 3]);
    expect(flattened.rows[1]?.cells[0]?.value.delta).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// matcher smoke tests (regression for the 16c262304 fix: enter must pair with
// closeNode + skipAllChildren so walker state stays balanced)
// ---------------------------------------------------------------------------

describe('table adapter matchers', () => {
  test('markdown matcher matches table and tableRow only', () => {
    expect(
      tableBlockMarkdownAdapterMatcher.toMatch({
        node: { type: 'table' },
      } as never)
    ).toBe(true);
    expect(
      tableBlockMarkdownAdapterMatcher.toMatch({
        node: { type: 'tableRow' },
      } as never)
    ).toBe(true);
    expect(
      tableBlockMarkdownAdapterMatcher.toMatch({
        node: { type: 'tableCell' },
      } as never)
    ).toBe(false);
  });

  test('html matcher matches table elements only', () => {
    const el = (tagName: string): Element => ({
      type: 'element',
      tagName,
      properties: {},
      children: [],
    });
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({ node: el('table') } as never)
    ).toBe(true);
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({ node: el('thead') } as never)
    ).toBe(true);
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({ node: el('tr') } as never)
    ).toBe(true);
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({ node: el('th') } as never)
    ).toBe(true);
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({ node: el('td') } as never)
    ).toBe(false);
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({ node: el('div') } as never)
    ).toBe(false);
    // Non-element nodes must not match.
    expect(
      tableBlockHtmlAdapterMatcher.toMatch({
        node: { type: 'text', value: 'x' },
      } as never)
    ).toBe(false);
  });
});

describe('table drag session cleanup', () => {
  test('stop is idempotent and invokes cancellation cleanup once', () => {
    const onMove = vi.fn();
    const onCancel = vi.fn();
    const onCleanup = vi.fn();
    const session = startDragSession({ onMove, onCancel, onCleanup });

    window.dispatchEvent(new MouseEvent('mousemove'));
    expect(onMove).toHaveBeenCalledOnce();

    session.stop();
    session.stop();
    window.dispatchEvent(new MouseEvent('mousemove'));

    expect(onMove).toHaveBeenCalledOnce();
    expect(onCancel).toHaveBeenCalledOnce();
    expect(onCleanup).toHaveBeenCalledOnce();
  });

  test('mouseup completes without invoking cancellation', () => {
    const onUp = vi.fn();
    const onCancel = vi.fn();
    const onCleanup = vi.fn();
    startDragSession({ onMove: vi.fn(), onUp, onCancel, onCleanup });

    window.dispatchEvent(new MouseEvent('mouseup'));

    expect(onUp).toHaveBeenCalledOnce();
    expect(onCancel).not.toHaveBeenCalled();
    expect(onCleanup).toHaveBeenCalledOnce();
  });
});

// ---------------------------------------------------------------------------
// end-to-end round-trip through MarkdownAdapter / HtmlAdapter
// ---------------------------------------------------------------------------

describe('table block <-> markdown adapter round-trip', () => {
  test('table markdown -> toBlockSnapshot -> fromBlockSnapshot preserves text', async () => {
    const markdown = '| h1 | h2 |\n| --- | --- |\n| a | b |\n';
    const adapter = new MarkdownAdapter(createJob());
    const noteSnapshot = (await adapter.toBlockSnapshot({
      file: markdown,
    })) as unknown as {
      children: BlockSnapshot[];
    };

    const tableBlock = noteSnapshot.children.find(
      b => b.flavour === 'affine:table'
    );
    expect(tableBlock).toBeDefined();

    const props = tableBlock!.props as unknown as TablePropsSerialized;
    expect(propsToGrid(props)).toEqual([
      ['h1', 'h2'],
      ['a', 'b'],
    ]);

    // Round-trip back to markdown.
    const wrappedRoot: BlockSnapshot = {
      type: 'block',
      id: 'block:root',
      flavour: 'affine:page',
      props: {
        title: {
          '$blockexpanse:internal:text$': true,
          delta: [],
        },
      },
      children: [
        {
          type: 'block',
          id: 'block:surface',
          flavour: 'affine:surface',
          props: { elements: {} },
          children: [],
        },
        {
          type: 'block',
          id: 'block:note',
          flavour: 'affine:note',
          props: {
            xywh: '[0,0,800,95]',
            background: DEFAULT_NOTE_BACKGROUND_COLOR,
            index: 'a0',
            hidden: false,
            displayMode: NoteDisplayMode.DocAndEdgeless,
          },
          children: [tableBlock!],
        },
      ],
    };

    const roundTripped = await adapter.fromBlockSnapshot({
      snapshot: wrappedRoot,
    });
    const reparsed = await adapter.toBlockSnapshot({
      file: roundTripped.file,
    });
    expect(tableGridFromSnapshot(reparsed)).toEqual([
      ['h1', 'h2'],
      ['a', 'b'],
    ]);
  });

  test('table html -> toBlockSnapshot -> fromBlockSnapshot preserves text', async () => {
    const html =
      '<table><thead><tr><th>h1</th><th>h2</th></tr></thead>' +
      '<tbody><tr><td>a</td><td>b</td></tr></tbody></table>';
    const adapter = new HtmlAdapter(createJob());
    const noteSnapshot = (await adapter.toBlockSnapshot({
      file: html,
    })) as unknown as { children: BlockSnapshot[] };

    const tableBlock = noteSnapshot.children.find(
      b => b.flavour === 'affine:table'
    );
    expect(tableBlock).toBeDefined();
    const props = tableBlock!.props as unknown as TablePropsSerialized;
    expect(propsToGrid(props)).toEqual([
      ['h1', 'h2'],
      ['a', 'b'],
    ]);

    const wrappedRoot: BlockSnapshot = {
      type: 'block',
      id: 'block:root',
      flavour: 'affine:page',
      props: {
        title: {
          '$blockexpanse:internal:text$': true,
          delta: [],
        },
      },
      children: [
        {
          type: 'block',
          id: 'block:surface',
          flavour: 'affine:surface',
          props: { elements: {} },
          children: [],
        },
        {
          type: 'block',
          id: 'block:note',
          flavour: 'affine:note',
          props: {
            xywh: '[0,0,800,95]',
            background: DEFAULT_NOTE_BACKGROUND_COLOR,
            index: 'a0',
            hidden: false,
            displayMode: NoteDisplayMode.DocAndEdgeless,
          },
          children: [tableBlock!],
        },
      ],
    };
    const roundTripped = await adapter.fromBlockSnapshot({
      snapshot: wrappedRoot,
    });
    const reparsed = await adapter.toBlockSnapshot({
      file: roundTripped.file,
    });
    expect(tableGridFromSnapshot(reparsed)).toEqual([
      ['h1', 'h2'],
      ['a', 'b'],
    ]);
  });

  test('markdown round-trip preserves empty and escaped cells', async () => {
    const adapter = new MarkdownAdapter(createJob());
    const first = await adapter.toBlockSnapshot({
      file: '| name | note | empty |\n| --- | --- | --- |\n| Alice | a\\|b | |\n',
    });
    expect(tableGridFromSnapshot(first)).toEqual([
      ['name', 'note', 'empty'],
      ['Alice', 'a|b', ''],
    ]);

    const exported = await adapter.fromBlockSnapshot({
      snapshot: first,
    });
    const reparsed = await adapter.toBlockSnapshot({ file: exported.file });
    expect(tableGridFromSnapshot(reparsed)).toEqual([
      ['name', 'note', 'empty'],
      ['Alice', 'a|b', ''],
    ]);
  });
});
