import type { TemplateResult } from 'lit';

import {
  BulletedListIcon,
  CheckBoxIcon,
  CodeBlockIcon,
  DividerIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  NumberedListIcon,
  QuoteIcon,
  TextIcon,
} from '@blockexpanse/affine-components/icons';
import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

/**
 * Text primitive entries used in slash menu and format bar,
 * which are also used for registering hotkeys for converting block flavours.
 */
export interface TextConversionConfig {
  flavour: BlockExpanse.Flavour;
  type?: string;
  name: string;
  description?: string;
  hotkey: string[] | null;
  icon: TemplateResult<1>;
}

const textConversionConfigDefs: Omit<
  TextConversionConfig,
  'name' | 'description'
>[] = [
  {
    flavour: 'affine:paragraph',
    type: 'text',
    hotkey: [`Mod-Alt-0`, `Mod-Shift-0`],
    icon: TextIcon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h1',
    hotkey: [`Mod-Alt-1`, `Mod-Shift-1`],
    icon: Heading1Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h2',
    hotkey: [`Mod-Alt-2`, `Mod-Shift-2`],
    icon: Heading2Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h3',
    hotkey: [`Mod-Alt-3`, `Mod-Shift-3`],
    icon: Heading3Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h4',
    hotkey: [`Mod-Alt-4`, `Mod-Shift-4`],
    icon: Heading4Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h5',
    hotkey: [`Mod-Alt-5`, `Mod-Shift-5`],
    icon: Heading5Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h6',
    hotkey: [`Mod-Alt-6`, `Mod-Shift-6`],
    icon: Heading6Icon,
  },
  {
    flavour: 'affine:list',
    type: 'bulleted',
    hotkey: [`Mod-Alt-8`, `Mod-Shift-8`],
    icon: BulletedListIcon,
  },
  {
    flavour: 'affine:list',
    type: 'numbered',
    hotkey: [`Mod-Alt-9`, `Mod-Shift-9`],
    icon: NumberedListIcon,
  },
  {
    flavour: 'affine:list',
    type: 'todo',
    hotkey: null,
    icon: CheckBoxIcon,
  },
  {
    flavour: 'affine:code',
    type: undefined,
    hotkey: [`Mod-Alt-c`],
    icon: CodeBlockIcon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'quote',
    hotkey: null,
    icon: QuoteIcon,
  },
  {
    flavour: 'affine:divider',
    type: 'divider',
    hotkey: [`Mod-Alt-d`, `Mod-Shift-d`],
    icon: DividerIcon,
  },
];

type ConversionMessage = {
  nameKey: string;
  nameFallback: string;
  descKey: string;
  descFallback: string;
};

const conversionMessages: ConversionMessage[] = [
  {
    nameKey: I18nKeys.editor.slash.text,
    nameFallback: 'Text',
    descKey: I18nKeys.editor.slash.textDesc,
    descFallback: 'Start typing with plain text.',
  },
  {
    nameKey: I18nKeys.editor.slash.heading1,
    nameFallback: 'Heading 1',
    descKey: I18nKeys.editor.slash.heading1Desc,
    descFallback: 'Headings in the largest font.',
  },
  {
    nameKey: I18nKeys.editor.slash.heading2,
    nameFallback: 'Heading 2',
    descKey: I18nKeys.editor.slash.heading2Desc,
    descFallback: 'Headings in the 2nd font size.',
  },
  {
    nameKey: I18nKeys.editor.slash.heading3,
    nameFallback: 'Heading 3',
    descKey: I18nKeys.editor.slash.heading3Desc,
    descFallback: 'Headings in the 3rd font size.',
  },
  {
    nameKey: I18nKeys.editor.slash.heading4,
    nameFallback: 'Heading 4',
    descKey: I18nKeys.editor.slash.heading4Desc,
    descFallback: 'Headings in the 4th font size.',
  },
  {
    nameKey: I18nKeys.editor.slash.heading5,
    nameFallback: 'Heading 5',
    descKey: I18nKeys.editor.slash.heading5Desc,
    descFallback: 'Headings in the 5th font size.',
  },
  {
    nameKey: I18nKeys.editor.slash.heading6,
    nameFallback: 'Heading 6',
    descKey: I18nKeys.editor.slash.heading6Desc,
    descFallback: 'Headings in the 6th font size.',
  },
  {
    nameKey: I18nKeys.editor.slash.bulletedList,
    nameFallback: 'Bulleted List',
    descKey: I18nKeys.editor.slash.bulletedListDesc,
    descFallback: 'Create a bulleted list.',
  },
  {
    nameKey: I18nKeys.editor.slash.numberedList,
    nameFallback: 'Numbered List',
    descKey: I18nKeys.editor.slash.numberedListDesc,
    descFallback: 'Create a numbered list.',
  },
  {
    nameKey: I18nKeys.editor.slash.todoList,
    nameFallback: 'To-do List',
    descKey: I18nKeys.editor.slash.todoListDesc,
    descFallback: 'Add tasks to a to-do list.',
  },
  {
    nameKey: I18nKeys.editor.slash.codeBlock,
    nameFallback: 'Code Block',
    descKey: I18nKeys.editor.slash.codeBlockDesc,
    descFallback: 'Code snippet with formatting.',
  },
  {
    nameKey: I18nKeys.editor.slash.quote,
    nameFallback: 'Quote',
    descKey: I18nKeys.editor.slash.quoteDesc,
    descFallback: 'Add a blockquote for emphasis.',
  },
  {
    nameKey: I18nKeys.editor.slash.divider,
    nameFallback: 'Divider',
    descKey: I18nKeys.editor.slash.dividerDesc,
    descFallback: 'Visually separate content.',
  },
];

export function createTextConversionConfigs(
  t: I18nFn = identityI18nFn
): TextConversionConfig[] {
  return textConversionConfigDefs.map((def, index) => {
    const msg = conversionMessages[index];
    return {
      ...def,
      name: t(msg.nameKey, msg.nameFallback),
      description: t(msg.descKey, msg.descFallback),
    };
  });
}

/** English defaults for hotkeys / static consumers. */
export const textConversionConfigs = createTextConversionConfigs();
