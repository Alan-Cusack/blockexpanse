# BlockExpanse Document JSON 实现设计

后续协议扩展、Document Slice、revision/hash、Table 和 Asset Transport 的设计见
[`document-data-optimization.md`](./document-data-optimization.md)。

## 1. 目标

BlockExpanse 对外提供两种正式数据表示：

- **BlockExpanse Yjs Document**：协同编辑、增量同步、离线恢复和历史重建的权威状态。
- **BlockExpanse Document JSON**：面向 API、数据库 JSONB、导入导出、搜索、AI 和跨语言处理的稳定可读数据。

BlockExpanse Document JSON 的协议正式名称沿用 **BlockExpanse Standard Document Data**。它是 BlockExpanse 自己的编辑器原生 JSON，定位类似 ProseMirror JSON、BlockNote Block JSON 和 Lexical EditorState JSON，不尝试成为跨编辑器通用格式。

核心数据路径：

```text
BlockExpanse Document JSON
          <-> @blockexpanse/store/document-data codecs
DocSnapshot / BlockSnapshot
          <-> existing store transformers
Y.Doc / Yjs Update
```

现有 `DocSnapshot` 是内部桥接模型，不属于公共协议兼容性承诺。

## 2. 设计原则

1. Yjs 是唯一权威编辑状态，Document JSON 是可重建的读模型和交换格式。
2. 外部 JSON 写入必须经过校验、迁移、规范化和导入转换，最终提交为 Yjs Transaction。
3. 公共协议只包含标准 JSON 值，不暴露 `Y.Doc`、`Y.Map`、`Y.Text`、client ID、内部 flavour 或内部 schema version。
4. 公共 Block 使用严格联合类型，不使用无约束的 `props: Record<string, unknown>` 表达标准语义。
5. 协议兼容性由 JSON Schema、版本规则、语言无关 fixtures 和语义 round-trip 测试共同保证。
6. 转换失败或降级必须产生结构化 diagnostics，不允许静默丢失内容。

## 3. 包边界

### 3.1 `@blockexpanse/document-data`

纯协议包，不依赖 Yjs、DOM、Lit、Store 或具体 Block 实现。

```text
packages/document-data/
  package.json
  tsconfig.json
  src/
    index.ts
    types/
      json.ts
      document.ts
      block.ts
      inline.ts
      asset.ts
      diagnostics.ts
    schema/
      document-data-1.0.schema.json
    validate.ts
    normalize.ts
    canonicalize.ts
    migrate.ts
    limits.ts
  fixtures/
    valid/
    invalid/
    normalized/
    migrations/
```

职责：

- 公共 TypeScript 类型。
- Standard Document Data 1.0 JSON Schema。
- `validateDocumentData()`。
- `normalizeDocumentData()`。
- `canonicalizeDocumentData()`。
- `migrateDocumentData()`。
- 默认输入限制和结构化 diagnostics。

### 3.2 `@blockexpanse/store/document-data`

作为 `@blockexpanse/store` 的可选子路径入口，依赖 `@blockexpanse/document-data`，负责公共协议与内部 Snapshot 的映射。它不从 Store 根入口自动导出，避免普通 Store 用户加载转换层。

```text
packages/framework/store/src/document-data/
    index.ts
    registry.ts
    document.ts
    snapshot.ts
    inline.ts
    codecs.ts
    default-registry.ts
```

纯协议包不依赖 Store，从而保证服务端和非 JavaScript 生态可以只使用 JSON Schema 接入。转换能力与 Store 同版本发布，避免独立 adapter 与 Store 版本不兼容。

## 4. Document JSON 1.0

### 4.1 Envelope

```ts
export interface BlockExpanseDocumentDataV1 {
  format: 'blockexpanse-document';
  specVersion: '1.0';
  document: {
    id: string;
    title: string;
    blocks: BlockNodeV1[];
    metadata?: Record<string, JsonValue>;
  };
  assets: Record<string, AssetDescriptorV1>;
  extensions: Record<string, JsonValue>;
}
```

`assets` 和 `extensions` 在规范化输出中始终存在，即使为空对象，减少消费者分支逻辑。

### 4.2 公共 Block 字段

```ts
export interface BlockBaseV1 {
  id: string;
  type: string;
  children: BlockNodeV1[];
  metadata?: Record<string, JsonValue>;
}
```

第一阶段联合类型：

```ts
export type BlockNodeV1 =
  | ParagraphBlockV1
  | HeadingBlockV1
  | ListItemBlockV1
  | QuoteBlockV1
  | CodeBlockV1
  | DividerBlockV1;
```

### 4.3 核心 Block

```ts
export interface ParagraphBlockV1 extends BlockBaseV1 {
  type: 'paragraph';
  content: InlineContentV1[];
}

export interface HeadingBlockV1 extends BlockBaseV1 {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: InlineContentV1[];
}

export interface ListItemBlockV1 extends BlockBaseV1 {
  type: 'list-item';
  style: 'bulleted' | 'numbered' | 'todo';
  checked?: boolean;
  content: InlineContentV1[];
}

export interface QuoteBlockV1 extends BlockBaseV1 {
  type: 'quote';
  content: InlineContentV1[];
}

export interface CodeBlockV1 extends BlockBaseV1 {
  type: 'code';
  language?: string;
  text: string;
}

export interface DividerBlockV1 extends BlockBaseV1 {
  type: 'divider';
}
```

列表项保持为独立 Block，不引入额外 list container，以贴合当前 Block Tree、拖拽和嵌套模型。

### 4.4 Inline 模型

第一阶段采用线性 runs，避免嵌套 mark 节点导致组合爆炸，并便于与 `Y.Text.toDelta()` 转换。

```ts
export type InlineContentV1 = TextInlineV1 | LinkInlineV1 | MentionInlineV1;

export interface TextInlineV1 {
  type: 'text';
  text: string;
  marks: TextMarkV1[];
}

export interface LinkInlineV1 {
  type: 'link';
  href: string;
  text: string;
  marks: TextMarkV1[];
}

export interface MentionInlineV1 {
  type: 'mention';
  targetType: 'user' | 'document' | 'block';
  targetId: string;
  label?: string;
}

export type TextMarkV1 =
  | { type: 'bold' }
  | { type: 'italic' }
  | { type: 'underline' }
  | { type: 'strike' }
  | { type: 'code' }
  | { type: 'color'; color: string }
  | { type: 'background'; color: string };
```

规范化规则：

- 合并相邻且 marks 完全相同的 text runs。
- 删除空 text runs，但保留具有业务语义的 mention。
- marks 按固定顺序排列并去重。
- URL 保留原始语义，但校验允许的协议。
- 普通文本和 link 不使用任意 attributes。

## 5. 转换 Codec

每种公共 Block 类型通过显式 Codec 映射到一个或多个内部 flavour：

```ts
export interface DocumentBlockCodec<TBlock extends BlockNodeV1 = BlockNodeV1> {
  readonly type: TBlock['type'];
  readonly flavours: readonly string[];

  fromSnapshot(
    snapshot: BlockSnapshot,
    context: DocumentExportContext
  ): ConversionResult<TBlock>;

  toSnapshot(
    block: TBlock,
    context: DocumentImportContext
  ): ConversionResult<BlockSnapshot>;
}
```

Registry 负责：

- 按公共 `type` 查找导入 Codec。
- 按内部 `flavour` 查找导出 Codec。
- 拒绝重复注册。
- 为后续自定义 Block Codec 留出扩展点。

第一阶段未知 Block 默认采用 `reject`：

```ts
export type UnknownBlockPolicy = 'reject' | 'placeholder';
```

`preserve` 延后实现，因为安全 preserve 需要先定义稳定的 extension envelope，不能直接保存内部 flavour 和 props。

## 6. 公共 API

### 6.1 协议 API

```ts
export function validateDocumentData(
  input: unknown,
  options?: ValidationOptions
): ValidationResult;

export function normalizeDocumentData(
  input: BlockExpanseDocumentDataV1
): NormalizeResult<BlockExpanseDocumentDataV1>;

export function canonicalizeDocumentData(
  input: BlockExpanseDocumentDataV1
): BlockExpanseDocumentDataV1;

export function migrateDocumentData(
  input: unknown,
  targetVersion?: string
): MigrationResult;
```

### 6.2 Store API

```ts
export async function exportDocumentData(
  doc: Doc,
  options?: ExportDocumentOptions
): Promise<ExportDocumentResult>;

export async function documentDataToSnapshot(
  data: BlockExpanseDocumentDataV1,
  options?: ConversionOptions
): Promise<ConversionResult<DocSnapshot>>;

export async function snapshotToDocumentData(
  snapshot: DocSnapshot,
  options?: ConversionOptions
): Promise<ConversionResult<BlockExpanseDocumentDataV1>>;

export async function importDocumentData(
  collection: DocCollection,
  data: unknown,
  options: ImportDocumentOptions
): Promise<ImportDocumentResult>;
```

导入模式：

```ts
export type ImportMode = 'create' | 'replace' | 'insert';
export type IdPolicy = 'preserve' | 'regenerate';
```

第一阶段实现 `create`，然后实现 `replace`；`insert` 依赖明确的父 Block 和位置语义，放到后续迭代。

不要把公共 API 命名为泛化的 `toJSON()` 或 `fromJSON()`，避免与 Yjs JSON、Snapshot JSON、Selection JSON 混淆。

## 7. Diagnostics

所有验证、迁移和转换入口使用统一结构：

```ts
export interface Diagnostic {
  severity: 'error' | 'warning' | 'info';
  code: string;
  path: Array<string | number>;
  message: string;
  details?: Record<string, JsonValue>;
}

export interface ConversionResult<T> {
  value?: T;
  diagnostics: Diagnostic[];
  lossy: boolean;
}
```

首批稳定错误码：

```text
document.invalid_format
document.unsupported_version
document.limit_exceeded
block.duplicate_id
block.unknown_type
block.unsupported_flavour
block.invalid_property
inline.unsupported_attribute
inline.invalid_url
conversion.lossy
```

规则：只要存在 `error`，结果不得提交到 Y.Doc；warning 可以由调用方根据策略决定是否接受。

## 8. ID、导入和事务语义

导入返回完整映射：

```ts
export interface ImportDocumentResult {
  documentId?: string;
  blockIdMap: Record<string, string>;
  assetIdMap: Record<string, string>;
  diagnostics: Diagnostic[];
  lossy: boolean;
}
```

- `preserve`：ID 不冲突时保留；冲突产生错误，不静默覆盖。
- `regenerate`：为文档和所有 Block 生成新 ID，并返回映射。
- 导入验证和 Snapshot 转换完成后，才允许创建或修改文档。
- 对已有文档的修改必须在单个明确 origin 的 transaction 中执行。
- 推荐 transaction origin：`blockexpanse:document-data-import`。

## 9. 版本与兼容性

必须区分：

```text
specVersion       公共 Document JSON 版本
block version     公共 Block 类型版本（未来需要时增加）
internal version  内部 flavour schema version
```

兼容规则：

- minor 版本只允许新增可选能力或放宽限制。
- major 版本可以改变结构或删除字段，必须提供 migration。
- 导出默认生成当前最新 minor。
- 导入至少支持当前 major；发布 2.0 后建议继续支持 1.x 迁移。
- migration 只在纯协议包中运行，不依赖编辑器 runtime。

## 10. 安全限制

默认限制由协议包导出，并允许服务端覆盖得更严格：

```ts
export interface DocumentDataLimits {
  maxDocumentBytes: number;
  maxBlocks: number;
  maxDepth: number;
  maxTextLength: number;
  maxInlineRuns: number;
  maxAssets: number;
  maxExtensionBytes: number;
}
```

第一版建议默认值：

```text
maxDocumentBytes   10 MiB
maxBlocks          50,000
maxDepth           128
maxTextLength      5,000,000 UTF-16 code units
maxInlineRuns      200,000
maxAssets          10,000
maxExtensionBytes  1 MiB
```

URL 第一版只接受 `https:`、`http:`、`mailto:` 和产品明确支持的内部引用协议。

## 11. Round-trip 契约

公开承诺语义 round-trip：

```text
canonicalize(input JSON)
  ==
canonicalize(
  snapshotToDocumentData(
    documentDataToSnapshot(input JSON)
  )
)
```

不承诺：

- Yjs Update 二进制相同。
- Yjs client ID 相同。
- 内部 Y.Map/Y.Array 结构相同。
- JSON 对象字段原始顺序相同。
- 内部 flavour schema version 相同。

## 12. 测试矩阵

### 12.1 协议测试

- 每种核心 Block 的最小合法数据。
- 所有可选字段组合。
- 非法 envelope 和未知版本。
- 重复 Block ID。
- 超深树和超限文本。
- marks 去重、排序和相邻 run 合并。
- URL 安全校验。
- normalize 和 canonicalize 幂等性。

### 12.2 Codec 测试

- 每种核心 Block 的 JSON -> Snapshot。
- 每种核心 Block 的 Snapshot -> JSON。
- Y.Text Delta 与 InlineContent 的双向映射。
- 未知 flavour 和未知公共 type。
- 有损转换 diagnostics。

### 12.3 集成测试

- JSON -> DocSnapshot -> Y.Doc -> DocSnapshot -> JSON。
- 文档创建导入。
- ID preserve/regenerate。
- 导入失败时不产生半成品文档。
- 相同规范化 JSON 重复导入得到语义一致结果。

所有 JSON fixtures 应为普通文件，不依赖 TypeScript 执行，以便未来供 Python、Java、Go 等实现复用。

## 13. 实施里程碑

### M1：冻结协议骨架

- 创建 `@blockexpanse/document-data`。
- 定义 JSON、envelope、diagnostics、核心 Block 和 Inline 类型。
- 增加 JSON Schema 1.0。
- 实现 validate、normalize、canonicalize。
- 添加合法和非法 fixtures。

验收：协议包不依赖 Yjs/Store，并通过类型检查和协议单元测试。

### M2：核心 Snapshot Codec

- 创建 `@blockexpanse/store/document-data` 子路径转换模块。
- 实现 Registry 和转换 Context。
- 实现 paragraph、heading、list-item、quote、code、divider Codec。
- 实现 Y.Text Delta 与 InlineContent 转换。

验收：核心 Block 的 JSON/Snapshot 双向 fixtures 全部通过。

### M3：文档导入导出

- 实现 `snapshotToDocumentData()` 和 `documentDataToSnapshot()`。
- 实现 `exportDocumentData()`。
- 实现 `importDocumentData(..., mode: 'create')`。
- 实现 ID preserve/regenerate 和 diagnostics。

验收：完整文档语义 round-trip 通过，失败导入不修改 Store。

### M4：替换导入和投影接口

- 实现 `replace` 导入事务。
- 定义 revision、projection status 和 projection result 接口。
- 保持具体数据库和 Worker 实现为可插拔边界。

验收：旧投影无法覆盖新 revision，替换导入只有一次可观察事务提交。

### M5：资源和扩展

- 图片和附件 Asset Descriptor。
- Extension Block envelope 和 fallback。
- `placeholder`/`preserve` 策略。
- Table、database 和 surface 分别评估，不强行塞入 1.0 核心范围。

## 14. 首个实现变更建议

第一个代码变更应只完成 M1，不同时修改 Store 和 Yjs 数据路径。建议 PR 内容：

1. 新增 `packages/document-data` workspace package。
2. 提交 Standard Document Data 1.0 TypeScript 类型。
3. 提交 JSON Schema 1.0。
4. 实现统一 diagnostics 和输入 limits。
5. 实现 validate、normalize、canonicalize。
6. 添加语言无关 fixtures 和单元测试。
7. 在根 `tsconfig.json` 添加 project reference。

M1 合并并冻结协议骨架后，再开始 M2 Codec，避免在 Store 映射过程中反复改变公共数据协议。
