import type { I18nFn } from './keys.js';

import { I18nKeys } from './keys.js';

/** Map English source strings (as authored in configs) to i18n keys. */
export const slashMenuSourceKeyMap: Record<string, string> = {
  Basic: I18nKeys.editor.slash.groupBasic,
  List: I18nKeys.editor.slash.groupList,
  Style: I18nKeys.editor.slash.groupStyle,
  Page: I18nKeys.editor.slash.groupPage,
  'Content & Media': I18nKeys.editor.slash.groupContent,
  Date: I18nKeys.editor.slash.groupDate,
  Database: I18nKeys.editor.slash.groupDatabase,
  Actions: I18nKeys.editor.slash.groupActions,
  'Document Group & Frame': I18nKeys.editor.slash.groupDocumentGroupFrame,
  Headings: I18nKeys.editor.slash.groupHeadings,
  'Other Headings': I18nKeys.editor.slash.otherHeadings,
  Text: I18nKeys.editor.slash.text,
  'Start typing with plain text.': I18nKeys.editor.slash.textDesc,
  'Heading 1': I18nKeys.editor.slash.heading1,
  'Headings in the largest font.': I18nKeys.editor.slash.heading1Desc,
  'Heading 2': I18nKeys.editor.slash.heading2,
  'Headings in the 2nd font size.': I18nKeys.editor.slash.heading2Desc,
  'Heading 3': I18nKeys.editor.slash.heading3,
  'Headings in the 3rd font size.': I18nKeys.editor.slash.heading3Desc,
  'Heading 4': I18nKeys.editor.slash.heading4,
  'Headings in the 4th font size.': I18nKeys.editor.slash.heading4Desc,
  'Heading 5': I18nKeys.editor.slash.heading5,
  'Headings in the 5th font size.': I18nKeys.editor.slash.heading5Desc,
  'Heading 6': I18nKeys.editor.slash.heading6,
  'Headings in the 6th font size.': I18nKeys.editor.slash.heading6Desc,
  'Code Block': I18nKeys.editor.slash.codeBlock,
  'Code snippet with formatting.': I18nKeys.editor.slash.codeBlockDesc,
  Quote: I18nKeys.editor.slash.quote,
  'Add a blockquote for emphasis.': I18nKeys.editor.slash.quoteDesc,
  Divider: I18nKeys.editor.slash.divider,
  'Visually separate content.': I18nKeys.editor.slash.dividerDesc,
  'Bulleted List': I18nKeys.editor.slash.bulletedList,
  'Create a bulleted list.': I18nKeys.editor.slash.bulletedListDesc,
  'Numbered List': I18nKeys.editor.slash.numberedList,
  'Create a numbered list.': I18nKeys.editor.slash.numberedListDesc,
  'To-do List': I18nKeys.editor.slash.todoList,
  'Add tasks to a to-do list.': I18nKeys.editor.slash.todoListDesc,
  Bold: I18nKeys.editor.slash.bold,
  Italic: I18nKeys.editor.slash.italic,
  Underline: I18nKeys.editor.slash.underline,
  Strikethrough: I18nKeys.editor.slash.strike,
  'Inline equation': I18nKeys.editor.slash.inlineEquation,
  'Create an inline equation.': I18nKeys.editor.slash.inlineEquationDesc,
  'New Doc': I18nKeys.editor.slash.newDoc,
  'Start a new document.': I18nKeys.editor.slash.newDocDesc,
  'Linked Doc': I18nKeys.editor.slash.linkedDoc,
  'Link to another document.': I18nKeys.editor.slash.linkedDocDesc,
  Image: I18nKeys.editor.slash.image,
  'Insert an image.': I18nKeys.editor.slash.imageDesc,
  Link: I18nKeys.editor.slash.link,
  'Add a bookmark for reference.': I18nKeys.editor.slash.linkDesc,
  Attachment: I18nKeys.editor.slash.attachment,
  'Attach a file to document.': I18nKeys.editor.slash.attachmentDesc,
  YouTube: I18nKeys.editor.slash.youtube,
  'Embed a YouTube video.': I18nKeys.editor.slash.youtubeDesc,
  GitHub: I18nKeys.editor.slash.github,
  'Link to a GitHub repository.': I18nKeys.editor.slash.githubDesc,
  Figma: I18nKeys.editor.slash.figma,
  'Embed a Figma document.': I18nKeys.editor.slash.figmaDesc,
  Loom: I18nKeys.editor.slash.loom,
  Equation: I18nKeys.editor.slash.equation,
  'Create a equation block.': I18nKeys.editor.slash.equationDesc,
  Table: I18nKeys.editor.slash.table,
  'Create a simple table.': I18nKeys.editor.slash.tableDesc,
  Today: I18nKeys.editor.slash.today,
  Tomorrow: I18nKeys.editor.slash.tomorrow,
  Yesterday: I18nKeys.editor.slash.yesterday,
  Now: I18nKeys.editor.slash.now,
  'Table View': I18nKeys.editor.slash.tableView,
  'Display items in a table format.': I18nKeys.editor.slash.tableViewDesc,
  Todo: I18nKeys.editor.slash.todo,
  'Kanban View': I18nKeys.editor.slash.kanbanView,
  'Visualize data in a dashboard.': I18nKeys.editor.slash.kanbanViewDesc,
  'Move Up': I18nKeys.editor.slash.moveUp,
  'Shift this line up.': I18nKeys.editor.slash.moveUpDesc,
  'Move Down': I18nKeys.editor.slash.moveDown,
  'Shift this line down.': I18nKeys.editor.slash.moveDownDesc,
  Copy: I18nKeys.editor.slash.copy,
  'Copy this line to clipboard.': I18nKeys.editor.slash.copyDesc,
  Duplicate: I18nKeys.editor.format.duplicate,
  'Create a duplicate of this line.': I18nKeys.editor.format.duplicate,
  Delete: I18nKeys.editor.slash.delete,
  'Remove this line permanently.': I18nKeys.editor.slash.deleteDesc,

  // Tooltip captions (slash-menu tooltips/index.ts) that differ from item names
  'Heading #1': I18nKeys.editor.slash.heading1,
  'Heading #2': I18nKeys.editor.slash.heading2,
  'Heading #3': I18nKeys.editor.slash.heading3,
  'Heading #4': I18nKeys.editor.slash.heading4,
  'Heading #5': I18nKeys.editor.slash.heading5,
  'Heading #6': I18nKeys.editor.slash.heading6,
  'Bold Text': I18nKeys.editor.slash.bold,
  'Link Doc': I18nKeys.editor.slash.linkedDoc,
  'GitHub Repo': I18nKeys.editor.slash.github,
  'YouTube Video': I18nKeys.editor.slash.youtube,
  Photo: I18nKeys.editor.slash.image,
  Tweet: I18nKeys.editor.slash.tweet,
  Linear: I18nKeys.editor.slash.linear,
  'Copy / Duplicate': I18nKeys.editor.slash.copyDuplicate,
  Edgeless: I18nKeys.editor.slash.edgeless,
  'Ask AI': I18nKeys.editor.ai.askAi,
};

function translateSource(t: I18nFn, source: string): string {
  const key = slashMenuSourceKeyMap[source];
  if (!key) {
    if (source.startsWith('Frame: ')) {
      return (
        t(I18nKeys.editor.slash.framePrefix, 'Frame: ') +
        source.slice('Frame: '.length)
      );
    }
    if (source.startsWith('Group: ')) {
      return (
        t(I18nKeys.editor.slash.groupPrefix, 'Group: ') +
        source.slice('Group: '.length)
      );
    }
    return source;
  }
  return t(key, source);
}

export function translateSlashLabel(t: I18nFn, source: string): string {
  return translateSource(t, source);
}
