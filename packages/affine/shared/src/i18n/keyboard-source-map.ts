import type { I18nFn } from './keys.js';

import { I18nKeys } from './keys.js';
import { translateSlashLabel } from './slash-source-map.js';

/**
 * Map keyboard-toolbar English source labels to i18n keys.
 * Many labels reuse slash/format keys via translateSlashLabel fallback.
 */
export const keyboardToolbarSourceKeyMap: Record<string, string> = {
  // Groups
  Basic: I18nKeys.editor.slash.groupBasic,
  List: I18nKeys.editor.slash.groupList,
  Page: I18nKeys.editor.keyboard.page,
  'Content & Media': I18nKeys.editor.slash.groupContent,
  Date: I18nKeys.editor.slash.groupDate,
  Database: I18nKeys.editor.slash.groupDatabase,
  'Document Group&Frame': I18nKeys.editor.keyboard.documentGroupFrame,
  'Turn into': I18nKeys.editor.keyboard.turnInto,

  // Text / list
  Text: I18nKeys.editor.slash.text,
  'Heading 1': I18nKeys.editor.slash.heading1,
  'Heading 2': I18nKeys.editor.slash.heading2,
  'Heading 3': I18nKeys.editor.slash.heading3,
  'Heading 4': I18nKeys.editor.slash.heading4,
  'Heading 5': I18nKeys.editor.slash.heading5,
  'Heading 6': I18nKeys.editor.slash.heading6,
  CodeBlock: I18nKeys.editor.keyboard.codeBlock,
  Quote: I18nKeys.editor.slash.quote,
  Divider: I18nKeys.editor.slash.divider,
  'Inline equation': I18nKeys.editor.slash.inlineEquation,
  BulletedList: I18nKeys.editor.slash.bulletedList,
  NumberedList: I18nKeys.editor.slash.numberedList,
  CheckBox: I18nKeys.editor.keyboard.checkBox,

  // Page / media
  NewPage: I18nKeys.editor.keyboard.newPage,
  LinkedPage: I18nKeys.editor.keyboard.linkedPage,
  Image: I18nKeys.editor.slash.image,
  Link: I18nKeys.editor.slash.link,
  Attachment: I18nKeys.editor.slash.attachment,
  Youtube: I18nKeys.editor.slash.youtube,
  Github: I18nKeys.editor.slash.github,
  Figma: I18nKeys.editor.slash.figma,
  Loom: I18nKeys.editor.slash.loom,
  Equation: I18nKeys.editor.slash.equation,
  Table: I18nKeys.editor.slash.table,

  // Date / database
  Today: I18nKeys.editor.slash.today,
  Tomorrow: I18nKeys.editor.slash.tomorrow,
  Yesterday: I18nKeys.editor.slash.yesterday,
  Now: I18nKeys.editor.slash.now,
  'Table view': I18nKeys.editor.keyboard.tableView,
  'Kanban view': I18nKeys.editor.keyboard.kanbanView,

  // Text style
  Bold: I18nKeys.editor.format.bold,
  Italic: I18nKeys.editor.format.italic,
  UnderLine: I18nKeys.editor.keyboard.underline,
  StrikeThrough: I18nKeys.editor.keyboard.strikeThrough,
  Code: I18nKeys.editor.format.code,
  Color: I18nKeys.editor.keyboard.color,
  Background: I18nKeys.editor.keyboard.background,
  'Default Color': I18nKeys.editor.keyboard.defaultColor,
  inlineTex: I18nKeys.editor.keyboard.inlineTex,

  // Actions
  Undo: I18nKeys.editor.keyboard.undo,
  Redo: I18nKeys.editor.keyboard.redo,
  RightTab: I18nKeys.editor.keyboard.rightTab,
  CollapseTab: I18nKeys.editor.keyboard.collapseTab,
  Copy: I18nKeys.editor.format.copy,
  Duplicate: I18nKeys.editor.format.duplicate,
  Delete: I18nKeys.editor.format.delete,
};

export function translateKeyboardLabel(t: I18nFn, source: string): string {
  const key = keyboardToolbarSourceKeyMap[source];
  if (key) {
    return t(key, source);
  }
  // Frame:/Group: prefixes share slash logic
  return translateSlashLabel(t, source);
}
