# BlockExpanse

<p align="center">
  <img src="./assets/logo.svg" width="120" alt="BlockExpanse logo" />
</p>

<p align="center">
  <strong>BlockExpanse</strong> — 块级文档编辑器与白板工具包<br/>
  <strong>BlockExpanse</strong> — A block-based document editor & whiteboard toolkit
</p>

<p align="center">
  <a href="https://github.com/Alan-Cusack/blockexpanse/actions"><img src="https://img.shields.io/github/actions/workflow/status/Alan-Cusack/blockexpanse/test.yml?branch=main&label=CI" alt="CI" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MPL--2.0-blue" alt="License" /></a>
  <img src="https://img.shields.io/badge/npm%20scope-@blockexpanse-6880ff" alt="npm scope" />
  <img src="https://img.shields.io/badge/version-0.0.1-6880ff" alt="version" />
</p>

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh-CN.md">中文</a>
</p>

---

### 概述

**BlockExpanse** 是基于 [BlockSuite](https://github.com/toeverything/blocksuite) **v0.19.5** 的独立 fork 与定制版本。BlockSuite 是 [AFFiNE](https://affine.pro/) 知识库背后的开源块编辑器框架。

若 [BlockNote](https://www.blocknotejs.org/) 侧重「开箱即用的 React 块编辑器」，BlockExpanse（继承 BlockSuite）则提供基于 **Web Components** 的编辑器，**与框架无关**（Vue、React 或原生 JS 均可集成）。你可以嵌入完整的文档编辑器与画布白板，扩展自定义 Block，并通过 CRDT（Yjs）实现协同。

|           | BlockExpanse                                     |
| --------- | ------------------------------------------------ |
| npm scope | `@blockexpanse`（与上游 `@blocksuite` 完全隔离） |
| 当前版本  | `0.0.1`（独立发版）                              |
| 上游基线  | BlockSuite `v0.19.5`                             |
| 协议      | [MPL 2.0](./LICENSE)                             |

> **维护说明：** 本 fork 会根据业务需求持续更新与维护，包括国际化、AI 接入能力、表格等定制功能。欢迎 issue 与 PR。

### 核心能力

#### 文档编辑器（`PageEditor`）

类 Notion 的**块级富文本编辑器**：

- 标题、列表、引用、代码块、分割线、折叠块
- Slash（`/`）菜单、浮动格式栏、拖拽排序
- 嵌入（YouTube、GitHub、Figma、HTML…）、链接文档、书签
- 数据库视图（表格 / 看板 / 日历）、附件、评论
- Markdown / HTML 导入导出、快照、多文档状态管理

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
| **图片 / 链接预览** | 可选 `ImageProxyExtension`、`LinkPreviewExtension`；SDK 默认不绑定任何第三方 Worker。                                                                                                              |

### 快速入门

**环境：** Node.js `>=18.19.0 <21.0.0`，Yarn `4.5.3`（推荐 [Corepack](https://nodejs.org/api/corepack.html)）。

```sh
corepack enable
git clone https://github.com/Alan-Cusack/blockexpanse.git
cd blockexpanse
yarn install
yarn dev
```

| 地址                                | 说明                       |
| ----------------------------------- | -------------------------- |
| http://localhost:5173/starter/?init | 推荐本地调试入口           |
| http://localhost:5173/starter/      | Starter 预设列表           |
| http://localhost:5173               | 完整示例（含持久化与协作） |

**最小集成示例（含 i18n）：**

```ts
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import {
  createBuiltinI18n,
  I18nExtension,
} from '@blockexpanse/affine-shared/services';

const i18n = createBuiltinI18n({ locale: 'zh-CN' }); // 或 'en'

const { doc } = createEmptyDoc();
const editor = new PageEditor();
editor.doc = doc;
// 挂载编辑器并注册扩展，例如 I18nExtension(i18n)
```

**从 CNB 安装**（主项目需配置同一 registry）：

```sh
yarn add @blockexpanse/presets@0.0.1 @blockexpanse/blocks@0.0.1 @blockexpanse/store@0.0.1 yjs
```

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

### 可选：图片代理与链接预览

SDK **默认不**绑定第三方 Worker。外链图片/书签预览需宿主注入：

```ts
import {
  ImageProxyExtension,
  LinkPreviewExtension,
} from '@blockexpanse/affine-shared/services';

// extensions: [
//   ImageProxyExtension('https://your.cdn/api/image-proxy'),
//   LinkPreviewExtension('https://your.api/link-preview'),
// ]
```

### 发布到 CNB

日常 `yarn install` / `yarn dev` / `git commit` **不需要** `CNB_TOKEN`：

```sh
export CNB_TOKEN=你的令牌
yarn ci:publish:cnb
```

发布前请在 `scripts/publish-cnb.mjs` 中配置 CNB registry 地址。

若本机 `~/.yarnrc.yml` 含 `${CNB_TOKEN}` 会导致所有 Yarn 命令报错，请删除或仅在发布时 `export`。

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
