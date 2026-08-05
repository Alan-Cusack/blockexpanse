import type { Element } from 'hast';

import {
  TableBlockSchema,
  TableModelFlavour,
  type TablePropsSerialized,
} from '@blockexpanse/affine-model';
import {
  BlockHtmlAdapterExtension,
  type BlockHtmlAdapterMatcher,
  HastUtils,
  type InlineHtmlAST,
} from '@blockexpanse/affine-shared/adapters';
import { nanoid } from '@blockexpanse/store';

import { DefaultColumnWidth } from '../consts.js';
import { parseTableFromHtml, processTable } from './utils.js';

const TABLE_NODE_TYPES = new Set(['table', 'thead', 'tbody', 'th', 'tr']);

export const tableBlockHtmlAdapterMatcher: BlockHtmlAdapterMatcher = {
  flavour: TableBlockSchema.model.flavour,
  toMatch: o => {
    return HastUtils.isElement(o.node) && TABLE_NODE_TYPES.has(o.node.tagName);
  },
  fromMatch: o => o.node.flavour === TableBlockSchema.model.flavour,
  toBlockSnapshot: {
    enter: (o, context) => {
      if (!HastUtils.isElement(o.node)) {
        return;
      }
      const { walkerContext } = context;
      if (o.node.tagName === 'table') {
        const astToDelta = context.deltaConverter.astToDelta.bind(
          context.deltaConverter
        );
        const tableProps = parseTableFromHtml(o.node, astToDelta);
        walkerContext
          .openNode(
            {
              type: 'block',
              id: nanoid(),
              flavour: TableModelFlavour,
              props: tableProps as unknown as Record<string, unknown>,
              children: [],
            },
            'children'
          )
          .closeNode();
        walkerContext.skipAllChildren();
      }
    },
    leave: () => undefined,
  },
  fromBlockSnapshot: {
    enter: (o, context) => {
      const { walkerContext } = context;
      const { columns, rows, cells, mergedRanges } = o.node
        .props as unknown as TablePropsSerialized;
      const table = processTable(columns, rows, cells, mergedRanges, true);
      const createAstTableCell = (
        children: InlineHtmlAST[],
        rowSpan: number,
        colSpan: number
      ): InlineHtmlAST => ({
        type: 'element',
        tagName: 'td',
        properties: {
          ...(rowSpan > 1 ? { rowSpan } : {}),
          ...(colSpan > 1 ? { colSpan } : {}),
        },
        children: [
          {
            type: 'element',
            tagName: 'div',
            properties: {
              style: `min-height: 22px;min-width:${DefaultColumnWidth}px;padding: 8px 12px;`,
            },
            children,
          },
        ],
      });

      const createAstTableRow = (cells: InlineHtmlAST[]): Element => ({
        type: 'element',
        tagName: 'tr',
        properties: Object.create(null),
        children: cells,
      });

      const { deltaConverter } = context;

      const tableBodyAst: Element = {
        type: 'element',
        tagName: 'tbody',
        properties: Object.create(null),
        children: table.rows.map(v => {
          return createAstTableRow(
            v.cells.map(cell => {
              return createAstTableCell(
                typeof cell.value === 'string'
                  ? [{ type: 'text', value: cell.value }]
                  : deltaConverter.deltaToAST(cell.value.delta),
                cell.rowSpan,
                cell.colSpan
              );
            })
          );
        }),
      };

      walkerContext
        .openNode({
          type: 'element',
          tagName: 'table',
          properties: {
            border: true,
            style:
              'border-collapse: collapse;border-spacing: 0;border-color: rgba(0,0,0,0.1);',
          },
          children: [tableBodyAst],
        })
        .closeNode();

      walkerContext.skipAllChildren();
    },
  },
};

export const TableBlockHtmlAdapterExtension = BlockHtmlAdapterExtension(
  tableBlockHtmlAdapterMatcher
);
