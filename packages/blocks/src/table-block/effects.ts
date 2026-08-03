import { AddButton, AddButtonComponentName } from './add-button.js';
import {
  SelectionLayer,
  SelectionLayerComponentName,
} from './selection-layer.js';
import { TableBlockComponent, TableBlockComponentName } from './table-block.js';
import { TableCell, TableCellComponentName } from './table-cell.js';

export function effects() {
  customElements.define(TableBlockComponentName, TableBlockComponent);
  customElements.define(TableCellComponentName, TableCell);
  customElements.define(AddButtonComponentName, AddButton);
  customElements.define(SelectionLayerComponentName, SelectionLayer);
}
