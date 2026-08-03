import type { DeltaInsert } from '@blockexpanse/inline';
import type { Text } from '@blockexpanse/store';

import { BlockModel, defineBlockSchema } from '@blockexpanse/store';

import type { TextAlign } from '../../consts/index.js';

export type TableCell = {
  text: Text;
};

export interface TableRow {
  rowId: string;
  order: string;
  backgroundColor?: string;
}

export interface TableColumn {
  columnId: string;
  order: string;
  backgroundColor?: string;
  width?: number;
}

export interface TableProps {
  rows: Record<string, TableRow>;
  columns: Record<string, TableColumn>;
  // key = `${rowId}:${columnId}`
  cells: Record<string, TableCell>;
  comments?: Record<string, boolean>;
  textAlign?: TextAlign;
}

export interface TableCellSerialized {
  text: {
    delta: DeltaInsert[];
  };
}

export interface TablePropsSerialized {
  rows: Record<string, TableRow>;
  columns: Record<string, TableColumn>;
  cells: Record<string, TableCellSerialized>;
}

export class TableBlockModel extends BlockModel<TableProps> {}

export const TableModelFlavour = 'affine:table';

export const TableBlockSchema = defineBlockSchema({
  flavour: TableModelFlavour,
  props: (): TableProps => ({
    rows: {},
    columns: {},
    cells: {},
    comments: undefined,
    textAlign: undefined,
  }),
  metadata: {
    role: 'content',
    version: 1,
    parent: ['affine:note'],
    children: [],
  },
  toModel: () => new TableBlockModel(),
});

declare global {
  namespace BlockExpanse {
    interface BlockModels {
      'affine:table': TableBlockModel;
    }
  }
}
