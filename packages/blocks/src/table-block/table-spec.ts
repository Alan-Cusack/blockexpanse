import {
  BlockViewExtension,
  CommandExtension,
  type ExtensionType,
  FlavourExtension,
} from '@blockexpanse/block-std';
import { literal } from 'lit/static-html.js';

import { commands } from './commands.js';
import { TableSelectionExtension } from './selection-schema.js';
import { TableKeymapExtension } from './table-keymap.js';

export const TableBlockSpec: ExtensionType[] = [
  FlavourExtension('affine:table'),
  CommandExtension(commands),
  BlockViewExtension('affine:table', literal`affine-table`),
  TableSelectionExtension,
  TableKeymapExtension,
];
