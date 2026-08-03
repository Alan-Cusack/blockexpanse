import type { I18nFn } from './keys.js';

import { I18nKeys } from './keys.js';

const D = I18nKeys.editor.dataView;
const F = I18nKeys.editor.format;

/**
 * Map data-view English source labels to i18n keys.
 * Covers menus, operators, property types, number formats, and stats.
 */
export const dataViewSourceKeyMap: Record<string, string> = {
  // Shared actions
  Filter: D.filter,
  Sort: D.sort,
  Group: D.group,
  Delete: D.delete,
  'Delete Database': D.deleteDatabase,
  Copy: D.copy,
  Search: D.search,
  'Search...': D.searchPlaceholder,
  'Add filter': D.addFilter,
  'Add sort': D.addSort,
  Duplicate: D.duplicate,
  Untitled: D.untitled,
  'New Record': D.newRecord,
  Calculate: D.calculate,
  None: D.none,
  Create: D.create,
  'Block Type': D.blockType,

  // Column
  'Hide In View': D.column.hideInView,
  'Sort Ascending': D.column.sortAscending,
  'Sort Descending': D.column.sortDescending,
  'Insert Left Column': D.column.insertLeft,
  'Insert Right Column': D.column.insertRight,
  'Move Left': D.column.moveLeft,
  'Move Right': D.column.moveRight,
  'Number Format': D.column.numberFormat,

  // Row / card (Insert Before/After shared)
  'Expand Row': D.row.expand,
  'Insert Before': D.row.insertBefore,
  'Insert After': D.row.insertAfter,
  'Delete Row': D.row.delete,
  'Delete Rows': D.row.deleteRows,
  'Expand Card': D.card.expand,
  'Delete Card': D.card.delete,
  'Move To': D.card.moveTo,

  // Group
  Ungroup: D.groupMenu.ungroup,
  Ungroups: D.groupMenu.ungroups,
  'Delete Cards': D.groupMenu.deleteCards,
  'Group by': D.groupMenu.groupBy,
  'Remove Grouping': D.groupMenu.removeGrouping,
  'Remove grouping': D.groupMenu.removeGrouping,

  // Property
  Properties: D.property.properties,
  'Property type': D.property.propertyType,
  Type: D.property.type,
  'Add property': D.property.addProperty,
  'Add Property': D.property.addProperty,
  'Property settings': D.property.propertySettings,
  'Move Up': D.property.moveUp,
  'Move Down': D.property.moveDown,
  'Hide All': D.property.hideAll,
  'Show All': D.property.showAll,

  // View
  'View settings': D.view.viewSettings,
  Layout: D.view.layout,
  'Edit View': D.view.editView,
  'Table View': D.view.tableView,
  'Kanban View': D.view.kanbanView,

  // Filter / sort UI
  And: D.filterUI.and,
  Or: D.filterUI.or,
  'New filter': D.filterUI.newFilter,
  'New sort': D.filterUI.newSort,
  'Filter group': D.filterUI.filterGroup,
  'Add filter group': D.filterUI.addFilterGroup,
  Filters: D.filterUI.filters,
  Ascending: D.filterUI.ascending,
  Descending: D.filterUI.descending,
  '1 Sort': D.filterUI.oneSort,
  '1 sort': D.filterUI.oneSort,
  '1 filter': D.filterUI.oneFilter,
  '1 rule': D.filterUI.oneRule,
  'Turn into group': D.filterUI.turnIntoGroup,
  'Wrap in group': D.filterUI.wrapInGroup,
  Where: D.filterUI.where,
  Add: D.filterUI.add,
  Groups: D.filterUI.groups,
  New: D.filterUI.new,
  'Type a value...': D.filterUI.typeAValue,
  'Type here...': D.filterUI.typeHere,
  'Invalid filter rule': D.filterUI.invalidRule,
  'This rule is invalid, click to delete': D.filterUI.invalidRuleClickToDelete,

  // Tag colors (reuse format.*)
  Red: F.red,
  Magenta: F.magenta,
  Orange: F.orange,
  Yellow: F.yellow,
  Green: F.green,
  Teal: F.teal,
  Blue: F.blue,
  Purple: F.purple,
  Grey: F.grey,
  White: F.white,

  // Operators (preserve upstream typos as source keys)
  Contains: D.operator.contains,
  'Does no contains': D.operator.doesNotContain,
  'Starts with': D.operator.startsWith,
  'Ends with': D.operator.endsWith,
  Is: D.operator.is,
  'Is not': D.operator.isNot,
  'Is empty': D.operator.isEmpty,
  'Is not empty': D.operator.isNotEmpty,
  'Is checked': D.operator.isChecked,
  'Is unchecked': D.operator.isUnchecked,
  Before: D.operator.before,
  After: D.operator.after,
  'Is one of': D.operator.isOneOf,
  'Is not one of': D.operator.isNotOneOf,
  'Contains one of': D.operator.containsOneOf,
  'Does not contains one of': D.operator.doesNotContainOneOf,
  'Contains all': D.operator.containsAll,
  'Does not contains all': D.operator.doesNotContainAll,

  // Property types
  'Plain-Text': D.propertyType.plainText,
  Number: D.propertyType.number,
  Select: D.propertyType.select,
  'Multi-select': D.propertyType.multiSelect,
  Date: D.propertyType.date,
  Checkbox: D.propertyType.checkbox,
  Progress: D.propertyType.progress,
  image: D.propertyType.image,
  Title: D.propertyType.title,
  Link: D.propertyType.link,
  Text: D.propertyType.text,

  // Default property/column names
  Tag: D.column.tag,
  Status: D.column.status,
  TODO: D.column.todo,
  'In Progress': D.column.inProgress,
  Done: D.column.done,

  // Number formats
  'Number With Commas': D.numberFormat.numberWithCommas,
  Percent: D.numberFormat.percent,
  'Japanese Yen': D.numberFormat.yen,
  'Chinese Yuan': D.numberFormat.cny,
  'Indian Rupee': D.numberFormat.inr,
  'US Dollar': D.numberFormat.usd,
  Euro: D.numberFormat.eur,
  'British Pound': D.numberFormat.gbp,

  // Stats
  'Count All': D.stats.countAll,
  All: D.stats.all,
  'Count Values': D.stats.countValues,
  Values: D.stats.values,
  'Count Unique Values': D.stats.countUniqueValues,
  'Unique Values': D.stats.uniqueValues,
  'Count Empty': D.stats.countEmpty,
  Empty: D.stats.empty,
  'Count Not Empty': D.stats.countNotEmpty,
  'Not Empty': D.stats.notEmpty,
  'Percent Empty': D.stats.percentEmpty,
  'Percent Not Empty': D.stats.percentNotEmpty,
  'Count Unchecked': D.stats.countUnchecked,
  Unchecked: D.stats.unchecked,
  'Count Checked': D.stats.countChecked,
  Checked: D.stats.checked,
  'Percent Unchecked': D.stats.percentUnchecked,
  'Percent Checked': D.stats.percentChecked,
  Sum: D.stats.sum,
  Average: D.stats.average,
  Median: D.stats.median,
  Min: D.stats.min,
  Max: D.stats.max,
  Range: D.stats.range,
  Count: D.stats.count,
  'More options': D.stats.moreOptions,
};

const columnNPattern = /^Column (\d+)$/;
const taskNPattern = /^Task (\d+)$/;
const nFiltersPattern = /^(\d+) filters$/;
const nSortsPattern = /^(\d+) [Ss]orts$/;
const nRulesPattern = /^(\d+) rules$/;

const defaultViewNames = ['Table View', 'Kanban View'] as const;

export function translateDataViewLabel(t: I18nFn, source: string): string {
  const key = dataViewSourceKeyMap[source];
  if (key) {
    return t(key, source);
  }
  const columnNMatch = columnNPattern.exec(source);
  if (columnNMatch) {
    return t(D.column.columnN, 'Column {n}', { n: columnNMatch[1] });
  }
  const taskNMatch = taskNPattern.exec(source);
  if (taskNMatch) {
    return t(D.column.taskN, 'Task {n}', { n: taskNMatch[1] });
  }
  const nFiltersMatch = nFiltersPattern.exec(source);
  if (nFiltersMatch) {
    return t(D.filterUI.nFilters, '{count} filters', {
      count: nFiltersMatch[1],
    });
  }
  const nSortsMatch = nSortsPattern.exec(source);
  if (nSortsMatch) {
    return t(D.filterUI.nSorts, '{count} Sorts', { count: nSortsMatch[1] });
  }
  const nRulesMatch = nRulesPattern.exec(source);
  if (nRulesMatch) {
    return t(D.filterUI.nRules, '{count} rules', { count: nRulesMatch[1] });
  }
  return source;
}

/**
 * Map a user-edited view name back to the persisted English default when the
 * input equals a known default or its translation.
 */
export function persistDataViewName(t: I18nFn, text: string): string {
  for (const source of defaultViewNames) {
    if (text === source || text === translateDataViewLabel(t, source)) {
      return source;
    }
  }
  return text;
}
