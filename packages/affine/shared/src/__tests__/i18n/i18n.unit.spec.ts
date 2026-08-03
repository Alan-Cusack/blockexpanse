import { describe, expect, it } from 'vitest';

import { translateDataViewLabel } from '../../i18n/data-view-source-map.js';
import { translateKeyboardLabel } from '../../i18n/keyboard-source-map.js';
import { I18nKeys } from '../../i18n/keys.js';
import { translatePieLabel } from '../../i18n/pie-source-map.js';
import {
  createBuiltinI18n,
  identityI18nFn,
} from '../../services/i18n-service.js';

describe('createBuiltinI18n', () => {
  it('defaults to zh-CN', () => {
    const i18n = createBuiltinI18n();
    expect(i18n.getLocale()).toBe('zh-CN');
    expect(i18n.t(I18nKeys.editor.slash.heading1, 'Heading 1')).toBe('1级标题');
  });

  it('falls back to en then fallback string', () => {
    const i18n = createBuiltinI18n({ locale: 'zh-CN' });
    expect(i18n.t('editor.unknown.key', 'Fallback Text')).toBe('Fallback Text');
  });

  it('supports setLocale and interpolation', () => {
    const i18n = createBuiltinI18n({ locale: 'en' });
    expect(i18n.t(I18nKeys.editor.slash.heading1, 'Heading 1')).toBe(
      'Heading 1'
    );
    i18n.setLocale('zh-CN');
    expect(
      i18n.t(I18nKeys.editor.toast.downloadFailed, 'Failed {name}', {
        name: 'a.png',
      })
    ).toBe('下载 a.png 失败！');
  });

  it('merges custom messages', () => {
    const i18n = createBuiltinI18n({
      locale: 'zh-CN',
      messages: {
        'zh-CN': {
          [I18nKeys.editor.slash.heading1]: '一级标题',
        },
      },
    });
    expect(i18n.t(I18nKeys.editor.slash.heading1, 'Heading 1')).toBe(
      '一级标题'
    );
  });
});

describe('identityI18nFn', () => {
  it('returns fallback with params', () => {
    expect(identityI18nFn('k', 'Hello {name}', { name: 'World' })).toBe(
      'Hello World'
    );
  });
});

describe('translateKeyboardLabel', () => {
  it('translates keyboard-specific labels', () => {
    const i18n = createBuiltinI18n({ locale: 'zh-CN' });
    expect(translateKeyboardLabel(i18n.t, 'CodeBlock')).toBe('代码块');
    expect(translateKeyboardLabel(i18n.t, 'Turn into')).toBe('转换为');
    expect(translateKeyboardLabel(i18n.t, 'Undo')).toBe('撤销');
    expect(translateKeyboardLabel(i18n.t, 'Frame: Home')).toBe('画板：Home');
  });
});

describe('translatePieLabel', () => {
  it('translates pie menu labels', () => {
    const i18n = createBuiltinI18n({ locale: 'zh-CN' });
    expect(translatePieLabel(i18n.t, 'Tools')).toBe('工具');
    expect(translatePieLabel(i18n.t, 'Pen')).toBe('画笔');
    expect(translatePieLabel(i18n.t, 'Reset Zoom')).toBe('重置缩放');
    expect(translatePieLabel(i18n.t, 'Toggle Style')).toBe('切换样式');
    expect(translatePieLabel(i18n.t, 'Unknown')).toBe('Unknown');
  });
});

describe('translateDataViewLabel', () => {
  it('translates data-view menus and operators', () => {
    const i18n = createBuiltinI18n({ locale: 'zh-CN' });
    expect(translateDataViewLabel(i18n.t, 'Hide In View')).toBe('在视图中隐藏');
    expect(translateDataViewLabel(i18n.t, 'Contains')).toBe('包含');
    expect(translateDataViewLabel(i18n.t, 'Count All')).toBe('计数全部');
    expect(translateDataViewLabel(i18n.t, 'Plain-Text')).toBe('纯文本');
    expect(translateDataViewLabel(i18n.t, 'Table View')).toBe('表格视图');
    expect(translateDataViewLabel(i18n.t, 'TODO')).toBe('待办');
    expect(translateDataViewLabel(i18n.t, 'In Progress')).toBe('进行中');
    expect(translateDataViewLabel(i18n.t, 'Done')).toBe('已完成');
    expect(translateDataViewLabel(i18n.t, 'Task 1')).toBe('任务 1');
    expect(translateDataViewLabel(i18n.t, '2 filters')).toBe('2 个筛选');
    expect(translateDataViewLabel(i18n.t, 'Unknown')).toBe('Unknown');
  });
});
