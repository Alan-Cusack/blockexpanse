import type { EditorHost } from '@blockexpanse/block-std';
import type { TemplateResult } from 'lit';

import {
  type I18nFn,
  I18nKeys,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';

import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  LinkIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from '../../icons/index.js';

export interface TextFormatConfig {
  id: string;
  name: string;
  icon: TemplateResult<1>;
  hotkey?: string;
  activeWhen: (host: EditorHost) => boolean;
  action: (host: EditorHost) => void;
}

const textFormatConfigDefs: Omit<TextFormatConfig, 'name'>[] = [
  {
    id: 'bold',
    icon: BoldIcon,
    hotkey: 'Mod-b',
    activeWhen: host => {
      const [result] = host.std.command
        .chain()
        .isTextStyleActive({ key: 'bold' })
        .run();
      return result;
    },
    action: host => {
      host.std.command.chain().toggleBold().run();
    },
  },
  {
    id: 'italic',
    icon: ItalicIcon,
    hotkey: 'Mod-i',
    activeWhen: host => {
      const [result] = host.std.command
        .chain()
        .isTextStyleActive({ key: 'italic' })
        .run();
      return result;
    },
    action: host => {
      host.std.command.chain().toggleItalic().run();
    },
  },
  {
    id: 'underline',
    icon: UnderlineIcon,
    hotkey: 'Mod-u',
    activeWhen: host => {
      const [result] = host.std.command
        .chain()
        .isTextStyleActive({ key: 'underline' })
        .run();
      return result;
    },
    action: host => {
      host.std.command.chain().toggleUnderline().run();
    },
  },
  {
    id: 'strike',
    icon: StrikethroughIcon,
    hotkey: 'Mod-shift-s',
    activeWhen: host => {
      const [result] = host.std.command
        .chain()
        .isTextStyleActive({ key: 'strike' })
        .run();
      return result;
    },
    action: host => {
      host.std.command.chain().toggleStrike().run();
    },
  },
  {
    id: 'code',
    icon: CodeIcon,
    hotkey: 'Mod-e',
    activeWhen: host => {
      const [result] = host.std.command
        .chain()
        .isTextStyleActive({ key: 'code' })
        .run();
      return result;
    },
    action: host => {
      host.std.command.chain().toggleCode().run();
    },
  },
  {
    id: 'link',
    icon: LinkIcon,
    hotkey: 'Mod-k',
    activeWhen: host => {
      const [result] = host.std.command
        .chain()
        .isTextStyleActive({ key: 'link' })
        .run();
      return result;
    },
    action: host => {
      host.std.command.chain().toggleLink().run();
    },
  },
];

const formatNameMessages: Record<string, { key: string; fallback: string }> = {
  bold: { key: I18nKeys.editor.format.bold, fallback: 'Bold' },
  italic: { key: I18nKeys.editor.format.italic, fallback: 'Italic' },
  underline: { key: I18nKeys.editor.format.underline, fallback: 'Underline' },
  strike: { key: I18nKeys.editor.format.strike, fallback: 'Strikethrough' },
  code: { key: I18nKeys.editor.format.code, fallback: 'Code' },
  link: { key: I18nKeys.editor.format.link, fallback: 'Link' },
};

export function createTextFormatConfigs(
  t: I18nFn = identityI18nFn
): TextFormatConfig[] {
  return textFormatConfigDefs.map(def => {
    const msg = formatNameMessages[def.id];
    return {
      ...def,
      name: t(msg.key, msg.fallback),
    };
  });
}

/** English defaults for hotkeys / static consumers. */
export const textFormatConfigs = createTextFormatConfigs();
