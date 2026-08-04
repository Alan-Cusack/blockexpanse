# BlockExpanse

<p align="center">
  <img src="./assets/logo.svg" width="120" alt="BlockExpanse logo" />
</p>

<p align="center">
  <strong>BlockExpanse</strong> - 框架无关的块编辑器,文档与白板一体<br/>
  <strong>BlockExpanse</strong> - A framework-agnostic block editor with docs + whiteboard
</p>

<p align="center">
  <a href="https://github.com/Alan-Cusack/blockexpanse/actions"><img src="https://img.shields.io/github/actions/workflow/status/Alan-Cusack/blockexpanse/test.yml?branch=main&label=CI" alt="CI" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MPL--2.0-blue" alt="License" /></a>
  <img src="https://img.shields.io/badge/npm%20scope-@blockexpanse-6880ff" alt="npm scope" />
  <img src="https://img.shields.io/badge/version-1.0.1-6880ff" alt="version" />
</p>

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh-CN.md">中文</a>
</p>

---

### 概述

**BlockExpanse** 是一个开源块编辑器工具包,把**类 Notion 文档编辑器**和**无限画布白板**打包成一个框架无关的组件。用 Vue、React 或原生 JS 都能集成,不绑定 React。

每个编辑器都是原生 **Web Component**。几行代码挂载,自定义 Block 扩展,通过 CRDT(Yjs)接入实时协同。AI 面板与白板 Copilot 内置预留,接入你的 LLM 即可。

|           | BlockExpanse                |
| --------- | --------------------------- |
| npm scope | `@blockexpanse`(发布到 npm) |
| 当前版本  | `1.0.1`                     |
| 协议      | [MPL 2.0](./LICENSE)        |

### 为什么选 BlockExpanse?

BlockExpanse 基于 [BlockSuite](https://github.com/toeverything/blocksuite) `v0.19.5`([AFFiNE](https://affine.pro/) 背后的引擎),作为独立 fork 维护,聚焦框架无关的开发体验。

|                | BlockNote         | BlockExpanse                       |
| -------------- | ----------------- | ---------------------------------- |
| 白板(Edgeless) | ❌                | ✅ 画布 + 文档,无缝切换            |
| 框架           | 仅 React          | Web Components(Vue / React / 原生) |
| 协同           | Yjs(外挂)         | CRDT 原生数据流                    |
| AI 能力        | 附加(XL 付费层)   | 内置 AI 面板 + 白板 Copilot        |
| 自定义 Block   | React 组件 spec   | Lit / Web Component spec           |
| 协议           | MPL-2.0 / GPL(XL) | MPL-2.0                            |

> **积极维护中。** 欢迎在 [github.com/Alan-Cusack/blockexpanse](https://github.com/Alan-Cusack/blockexpanse) 提 issue 与 PR。

### 核心能力

#### 文档编辑器（`PageEditor`）

类 Notion 的**块级富文本编辑器**：

- 标题、列表、引用、代码块、分割线、折叠块
- Slash（`/`）菜单、浮动格式栏、拖拽排序
- 嵌入（YouTube、GitHub、Figma、HTML…）、链接文档、书签
- 数据库视图（表格 / 看板 / 日历）、附件、评论
- Markdown / HTML 导入导出、快照、多文档状态管理
- 统一的代码块 **代码 / 预览** 工作流：
  - Mermaid 图表实时渲染，支持刷新、缩放与平移查看
  - 使用 KaTeX 渲染 LaTeX / TeX 公式
  - JSON 格式化结构与 CSV 表格预览
  - SVG 安全清理渲染与 HTML 沙箱预览

#### 白板（`EdgelessEditor`）

与文档共用同一数据模型的**画布编辑器**：

- 图形、连线、自由画笔、文本、框架、思维导图元素
- 图片、编组、图层、演示模式
- 同一页面可在 **文档模式** 与 **白板模式** 间无缝切换
- 元素工具栏、属性面板、画布 Copilot 框选

#### BlockExpanse 增强

| 能力                | 说明                                                                                                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **国际化**          | 内置 **`zh-CN`**（默认）与 **`en`**，通过 DI `I18nProvider` 注入。已覆盖 Slash 菜单、placeholder、格式栏、Data View、通知、键盘工具栏等；宿主可覆盖词条或对接 i18next。                            |
| **AI 能力**         | 预留 **AI 面板**（`AffineAIPanelWidget`）、格式栏 **Ask AI**、白板 **Edgeless Copilot** 框选面板。Playground 内置演示动作（润色、摘要、翻译、语气调整等）；**生产环境由宿主接入自己的 LLM 服务**。 |
| **表格 Block**      | 定制表格块，含只读 guard 与单元格编辑体验优化。                                                                                                                                                    |
| **代码块预览**      | 可扩展的 Mermaid、LaTeX / TeX、JSON、CSV、SVG 与 HTML 预览。SVG 使用 DOMPurify 安全清理；HTML 在受限沙箱中渲染，不开放脚本、表单、弹窗或顶层跳转权限。                                             |
| **图片 / 链接预览** | 图片/附件用 `CloudBlobSource` 持久化；书签预览可选 `LinkPreviewExtension`。见 [blob 存储指南](packages/docs/guide/blob-storage.md)。                                                               |

#### 代码块预览安全性

代码块预览用于文档展示和视觉检查，不用于执行任意代码。JavaScript 等可执行语言仍然只提供语法高亮。SVG 内容在插入前会经过安全清理；HTML 使用沙箱 iframe 渲染，并禁用脚本、表单、弹窗、嵌套页面和顶层页面跳转。

### 快速入门

**环境：** Node.js `>=18.19.0 <21.0.0`，Yarn `4.5.3`（推荐 [Corepack](https://nodejs.org/api/corepack.html)）。

```sh
corepack enable
git clone https://github.com/Alan-Cusack/blockexpanse.git
cd blockexpanse
yarn install
yarn dev
```

| 地址                                                | 说明                                                                              |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| http://localhost:5173/starter/?init                 | 推荐本地调试入口                                                                  |
| http://localhost:5173/starter/?blobSource=cloud,idb | CloudBlob 持久化示例（见 [blob-storage.md](packages/docs/guide/blob-storage.md)） |
| http://localhost:5173/starter/                      | Starter 预设列表                                                                  |
| http://localhost:5173                               | 完整示例（含持久化与协作）                                                        |

**最小集成示例：**

```ts
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';
import '@blockexpanse/theme/style.css';

// 注册所有 Web Components（必须）
blocksEffects();
presetsEffects();

const doc = createEmptyDoc().init();
const editor = new PageEditor();
editor.doc = doc;
document.body.appendChild(editor);

const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
doc.updateBlock(paragraph, { text: new Text('Hello BlockExpanse!') });
```

**安装：**

```sh
npm install @blockexpanse/presets yjs
```

> `presets` 会通过传递依赖自动带入 `blocks`、`store`、`theme` 及所有内部包 —— 装一个就够了。

### 架构

```
┌─────────────────────────────────────────────────────────┐
│  @blockexpanse/presets   PageEditor / EdgelessEditor    │
├─────────────────────────────────────────────────────────┤
│  @blockexpanse/blocks    Blocks、Widgets、AI 面板 UI    │
│  @blockexpanse/affine    Affine 块实现                  │
├─────────────────────────────────────────────────────────┤
│  @blockexpanse/block-std   块树、选区、拖拽             │
│  @blockexpanse/inline      行内富文本                 │
│  @blockexpanse/store       CRDT 文档模型 (Yjs)          │
└─────────────────────────────────────────────────────────┘
```

所有编辑器与组件均为 **原生 Web Components**，可在 Vue、React 或纯 HTML 中使用。

### 框架集成

每个编辑器都是自定义元素（`<page-editor>`、`<edgeless-editor>`），从任何框架挂载：

| 框架        | 用法                                                       | Playground 示例                             |
| ----------- | ---------------------------------------------------------- | ------------------------------------------- |
| **原生 JS** | `new PageEditor(); document.body.appendChild(editor)`      | [/minimal/](http://localhost:5173/minimal/) |
| **React**   | `<page-editor ref={ref} />` + 在 `useEffect` 中设置 `.doc` | [/react/](http://localhost:5173/react/)     |
| **Vue**     | `<page-editor :doc="doc" />`（Vue 原生传递对象属性）       | [/vue/](http://localhost:5173/vue/)         |

> **React 注意：** React 不会向自定义元素传递非字符串属性，因此需通过 ref + `useEffect` 设置 `editor.doc = doc`，不能用 JSX 属性。Vue 用 `:doc="doc"` 可自动处理。

### 国际化

```ts
import {
  createBuiltinI18n,
  I18nExtension,
  I18nKeys,
} from '@blockexpanse/affine-shared/services';

const i18n = createBuiltinI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      [I18nKeys.editor.slash.heading1]: '一级标题', // 覆盖单个词条
    },
  },
});

// extensions: [I18nExtension(i18n), ...]
// i18n.setLocale('en')
```

未注入 Provider 时使用英文 fallback（与上游行为一致）。

### AI 接入

BlockExpanse 保留 BlockSuite 的 AI UI 能力。在宿主应用中配置 AI 面板：

```ts
import type { AffineAIPanelWidget } from '@blockexpanse/blocks';

function configureAIPanel(panel: AffineAIPanelWidget) {
  panel.config = {
    // 实现流式输出、模型调用、错误处理…
    // 参考 packages/playground/apps/_common/ai/demo-config.ts 中的演示动作
  };
}
```

Playground 演示：润色、缩短/扩写、摘要、解释、语气、翻译、续写等。**上线前请将 demo handler 替换为你的 API**。

### 可选：Blob 存储与链接预览

图片块存的是 blob 引用（`sourceId`），不是 URL。通过 **`CloudBlobSource`** 对接后端，详见 [blob 存储指南](packages/docs/guide/blob-storage.md)。书签/嵌入预览仍可选 **`LinkPreviewExtension`**：

```ts
import { LinkPreviewExtension } from '@blockexpanse/affine-shared/services';

// extensions: [
//   LinkPreviewExtension('https://your.api/link-preview'),
// ]
```

### 其他命令

```sh
yarn build          # 构建全部包与 Playground
yarn dev:docs       # 启动文档站点
yarn preview        # 预览构建结果
```

### 相关链接

- 仓库：[github.com/Alan-Cusack/blockexpanse](https://github.com/Alan-Cusack/blockexpanse)
- 构建与测试：[BUILDING.md](./BUILDING.md)
- 本地文档：`yarn dev:docs`
- 上游参考：[BlockSuite 文档](https://blocksuite.io/guide/overview.html)

---

## License

[MPL 2.0](./LICENSE)
