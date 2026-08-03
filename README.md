# BlockExpanse

**BlockExpanse** 是基于 TOEverything 开源块编辑器框架 **v0.19.5** 的独立 fork 与定制版本，提供块编辑器、协同数据层与预设 UI。

本仓库在官方 `v0.19.5` 标签基础上进行改进。对外 npm scope 为 **`@blockexpanse`**（与上游官方 npm scope 完全隔离），包版本从 **`1.0.0`** 起独立发版，当前为 **`1.1.0`**（含内置 i18n）。

## 命名说明

| 项目      | 值                                                                     |
| --------- | ---------------------------------------------------------------------- |
| 产品名    | BlockExpanse                                                           |
| npm scope | `@blockexpanse`                                                        |
| 示例包    | `@blockexpanse/presets`、`@blockexpanse/blocks`、`@blockexpanse/store` |

TypeScript 内部统一使用 `namespace BlockExpanse`、`BlockExpanseError` 等命名。

## 环境要求

- Node.js `>=18.19.0 <21.0.0`
- 包管理器：Yarn `4.5.3`（见 `package.json` 中的 `packageManager` 字段）

建议使用 [Corepack](https://nodejs.org/api/corepack.html) 启用指定版本的 Yarn：

```sh
corepack enable
```

## 本地启动

```sh
# 1. 安装依赖
yarn install

# 2. 启动 Playground 开发服务
yarn dev
```

启动成功后，可在浏览器中访问：

| 入口                                | 说明                               |
| ----------------------------------- | ---------------------------------- |
| http://localhost:5173/starter/?init | 推荐本地调试入口                   |
| http://localhost:5173/starter/      | Starter 预设列表                   |
| http://localhost:5173               | 完整示例（含本地持久化与协作能力） |

### 其他常用命令

```sh
# 构建全部包与 Playground
yarn build

# 启动文档站点
yarn dev:docs

# 预览构建结果
yarn preview
```

## 发布到 CNB

日常 `yarn install` / `yarn dev` / `git commit` **不需要** `CNB_TOKEN`。

仅在发布到 CNB 时设置令牌：

```sh
export CNB_TOKEN=你的令牌
yarn ci:publish:cnb
```

若本机 `~/.yarnrc.yml` 里写了 `${CNB_TOKEN}`，也会导致所有 Yarn 命令报错；请删掉该行，或改成仅在发布时 `export`。

将发布例如：

- `@blockexpanse/presets`
- `@blockexpanse/blocks`
- `@blockexpanse/store`
- `@blockexpanse/affine`
- `@blockexpanse/icons`
- 以及其他非 private 的 workspace 包

> 发布前请在 `scripts/publish-cnb.mjs` 中配置你的 CNB registry 地址。

## 在其他项目中安装

主项目需配置同一 CNB registry，然后：

```sh
yarn add @blockexpanse/presets@1.1.0 @blockexpanse/blocks@1.1.0 @blockexpanse/store@1.1.0 yjs
```

```ts
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import {
  createBuiltinI18n,
  I18nExtension,
} from '@blockexpanse/affine-shared/services';

const i18n = createBuiltinI18n({ locale: 'zh-CN' }); // 默认中文；可 setLocale('en')
// 挂载编辑器时 extensions 加入：I18nExtension(i18n)
```

## 国际化

本库采用「方案 1」：DI `I18nProvider` + 内置 `en` / `zh-CN` 词条。

- 默认语言：`zh-CN`
- 未注入 Provider 时：代码内英文 fallback，行为与上游一致
- 宿主可用 `createBuiltinI18n`，或自定义 `t` 对接 i18next

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
      [I18nKeys.editor.slash.heading1]: '一级标题', // 覆盖个别文案
    },
  },
});

// extensions: [I18nExtension(i18n), ...]
// i18n.setLocale('en')
```

已覆盖区域（持续扩展）：Slash 菜单、段落 placeholder、Format Bar 部分项、Linked Doc 菜单、通知、常用 toast、橡皮擦 tooltip、键盘工具栏复制、Data View 筛选/排序/分组等。

## 图片代理与链接预览（可选）

SDK **默认不**绑定任何第三方 Worker。本地上传图片/附件走 `blobSync`；外链图导入/导出、书签预览需宿主自行注入：

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

演示用 AFFiNE 公共地址见常量 `AFFINE_IMAGE_PROXY_ENDPOINT` / `AFFINE_LINK_PREVIEW_ENDPOINT`（**勿用于生产**）。

## 上游说明

BlockExpanse 在 v0.19.5 上游代码基础上独立演进，增加了 i18n、表格 block 等定制能力。

- 仓库：[github.com/Alan-Cusack/blockexpanse](https://github.com/Alan-Cusack/blockexpanse)
- [构建与测试说明](./BUILDING.md)
- 本地文档：`yarn dev:docs`

## License

[MPL 2.0](./LICENSE)
