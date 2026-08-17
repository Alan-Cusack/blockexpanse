# BlockExpanse Document Data 优化方案

## 1. 目标

本方案在现有 Standard Document Data 1.0 与 `@blockexpanse/store/document-data`
之上补齐插件兼容、局部内容操作、投影幂等和主流 Block 能力，同时保持以下边界：

- Yjs Update 仍是唯一协作权威状态。
- Document Data 是可重建的业务投影和交换协议，不成为第二个独立写入源。
- 核心协议保持严格类型；扩展内容只能进入显式 extension envelope。
- Store 内部 flavour、Y.Text attributes 和画布运行时状态不泄露到公共协议。
- 每项新能力必须同时定义类型、JSON Schema、规范化、迁移和 round-trip 测试。

## 2. 优先级

| 阶段 | 能力                      | 目标                                      |
| ---- | ------------------------- | ----------------------------------------- |
| P0   | Extension Block/Inline    | 未安装插件时仍能保真转发内容              |
| P0   | Document Slice + insert   | 支持粘贴、模板、AI 局部生成和跨文档移动   |
| P0   | Revision + canonical hash | 支持可靠投影、缓存、索引和幂等导入        |
| P1   | 通用 Block 外观属性       | 对齐、颜色等稳定语义进入公共协议          |
| P1   | Table                     | 达到 BlockNote 类产品的基础结构化内容能力 |
| P1   | Asset Transport           | 完成跨 Workspace 的资源复制和导出         |
| P2   | Markdown/HTML             | 建立外部格式互操作能力                    |
| P2   | Capabilities              | 支持多客户端和插件版本协商                |

## 3. 版本策略

### 3.1 兼容性定义

以下变化视为兼容：

- 新增可选字段，旧消费者忽略后不影响已有语义。
- 扩展已存在枚举，但旧值语义保持不变。
- 修复规范化结果，使其更接近既有书面规则。

以下变化视为不兼容：

- 新增必填字段。
- 删除或重命名字段。
- 改变字段含义。
- 新增核心 Block、Inline 或 Mark 类型，因为严格联合消费者无法识别新类型。

### 3.2 下一协议版本

建议新增 Document Data `1.1`，而不是静默扩展 `1.0`：

```ts
type SupportedDocumentDataVersion = '1.0' | '1.1';
```

`1.1` 第一批只引入：

- extension block。
- extension inline。
- common block props。

Document Slice 使用独立 envelope 和 `1.0` 版本，不复用完整文档 envelope。

迁移规则：

```text
Document 1.0 -> Document 1.1
  保留全部既有字段
  为缺失的公共可选字段采用默认语义

Document 1.1 -> Document 1.0
  仅在没有 1.1 专属内容时允许无损降级
  否则返回 document.downgrade_not_supported
```

## 4. Extension Envelope

### 4.1 Extension Block

```ts
interface ExtensionBlockV1_1 extends BlockBaseV1_1 {
  type: 'extension';
  extension: string;
  version: number;
  data: JsonObject;
  fallback?: {
    kind: 'text' | 'image' | 'none';
    text?: string;
    assetId?: string;
  };
}
```

约束：

- `extension` 使用反向域名或稳定 npm scope，例如 `com.blockexpanse.mermaid`。
- `version` 是 extension 自己的数据版本，不等同于 Document Data 版本。
- `data` 只能包含标准 JSON 值。
- `fallback` 用于搜索、AI、Markdown 和未安装插件客户端展示。
- 未安装插件不得修改 `data`，只能移动、复制或删除整个 Block。

禁止直接使用：

```ts
{
  type: string;
  props: Record<string, unknown>;
}
```

否则核心 Block 的兼容性与安全校验会失去边界。

### 4.2 Extension Inline

```ts
interface ExtensionInlineV1_1 {
  type: 'extension';
  extension: string;
  version: number;
  data: JsonObject;
  fallbackText?: string;
}
```

Extension Mark 暂不开放。Mark 会与文本切分、合并、粘贴和 Y.Text attributes
产生组合复杂度，应在出现真实插件需求后单独设计。

### 4.3 未知内容策略

```ts
type UnknownContentPolicy = 'error' | 'preserve' | 'omit';

interface ConversionOptions {
  unknownContentPolicy?: UnknownContentPolicy;
}
```

默认值：

- 公共导出：`preserve`。
- 严格审计：`error`。
- 纯文本或搜索投影：允许显式使用 `omit`。

`omit` 必须产生 warning diagnostic，并将 `lossy` 设为 `true`。

## 5. 通用 Block 属性

```ts
interface CommonBlockPropsV1_1 {
  alignment?: 'left' | 'center' | 'right' | 'justify';
  backgroundColor?: string;
  textColor?: string;
}

interface BlockBaseV1_1 {
  id: string;
  type: string;
  children: BlockNodeV1_1[];
  props?: CommonBlockPropsV1_1;
  metadata?: JsonObject;
}
```

规则：

- `props` 表达可移植的文档表现语义。
- `metadata` 表达业务附加数据，不参与编辑器默认渲染。
- selection、hover、远端光标等临时状态禁止进入协议。
- `collapsed` 暂不加入公共 props，直到明确它是共享状态还是用户本地偏好。
- 颜色先接受非空字符串，由渲染层决定支持 CSS color、token 还是主题变量；后续可收紧格式。

## 6. Document Slice

### 6.1 Envelope

```ts
interface DocumentSliceV1 {
  format: 'blockexpanse-document-slice';
  specVersion: '1.0';
  source?: {
    documentId?: string;
    workspaceId?: string;
  };
  blocks: BlockNodeV1_1[];
  assets: Record<string, AssetDescriptorV1>;
  extensions: JsonObject;
}
```

Slice 不包含：

- 文档 title。
- 文档级 metadata。
- Yjs state vector。
- selection anchor/focus。

selection 属于编辑器操作参数，不属于可持久化内容。

### 6.2 API

协议包：

```ts
validateDocumentSlice(input): ValidationResult<DocumentSliceV1>;
normalizeDocumentSlice(slice): OperationResult<DocumentSliceV1>;
canonicalizeDocumentSlice(slice): DocumentSliceV1;
```

Store adapter：

```ts
exportDocumentSlice(doc, blockIds, options): ConversionResult<DocumentSliceV1>;

importDocumentSlice(doc, slice, options): Promise<ImportDocumentSliceResult>;
```

导入选项：

```ts
interface ImportDocumentSliceOptions {
  parentId: string;
  index?: number;
  idPolicy?: 'preserve' | 'regenerate' | 'on-conflict';
  assetPolicy?: 'reference' | 'copy' | 'skip';
  unknownContentPolicy?: UnknownContentPolicy;
}
```

默认策略：

- `idPolicy`: `on-conflict`。
- `assetPolicy`: `reference`。
- 整个 Slice 在一次 Yjs transaction 中插入。
- 任一 Block 准备失败时不修改目标文档。

`on-conflict` 仅重生成冲突 ID，并返回完整映射：

```ts
interface ImportDocumentSliceResult {
  insertedBlockIds: string[];
  blockIdMap: Record<string, string>;
  assetIdMap: Record<string, string>;
  diagnostics: Diagnostic[];
  lossy: boolean;
}
```

## 7. Revision 与内容哈希

### 7.1 Revision

整数 revision 改为不透明字符串：

```ts
type DocumentRevision = string;

interface DocumentProjectionV2 {
  documentId: string;
  sourceRevision: DocumentRevision;
  contentHash: string;
  content: DocumentDataV1_1;
  plainText?: string;
}
```

revision 可以来自：

- 服务端 update sequence，例如 `seq:1842`。
- Yjs state vector hash，例如 `yjs-sv:sha256:...`。
- 数据库 revision，例如 `db:01J...`。

协议包不负责生成 Yjs revision；Store 或持久化层注入 revision provider：

```ts
interface DocumentRevisionProvider {
  getRevision(doc: Doc): string | Promise<string>;
}
```

revision 只用于判断来源状态，不写入 Document Data 内容，避免相同内容因同步元数据不同而产生不同 canonical JSON。

### 7.2 Canonical Hash

```ts
canonicalStringifyDocumentData(data): string;
hashDocumentData(data, algorithm?: 'sha256'): Promise<string>;
```

哈希输入规则：

1. 先迁移到指定目标版本。
2. 执行 normalize。
3. 对所有对象键递归排序。
4. 保留 Block 和 Inline 数组顺序。
5. 使用 UTF-8 编码。
6. 默认输出 `sha256:<lowercase hex>`。

`document.id` 默认参与哈希。为 RAG 去重提供单独选项：

```ts
hashDocumentContent(data, { excludeDocumentIdentity: true });
```

禁止用普通 `JSON.stringify()` 作为跨运行时稳定哈希输入。

## 8. Table 设计边界

Table 放入第二阶段，但第一阶段冻结基本结构，避免 Extension Table 成为永久格式：

```ts
interface TableBlockVNext extends BlockBaseV1_1 {
  type: 'table';
  columns: Array<{
    id: string;
    width?: number;
  }>;
  rows: Array<{
    id: string;
    cells: Array<{
      id: string;
      blocks: BlockNodeV1_1[];
      colspan?: number;
      rowspan?: number;
    }>;
  }>;
  headerRows?: number;
  headerColumns?: number;
  children: [];
}
```

不使用 `string[][]`，因为它无法表达 Cell 内富文本、嵌套 Block、合并单元格和稳定 Cell ID。

## 9. Asset Transport 边界

Document Data 继续只保存 descriptor，不内嵌 Blob：

```ts
interface AssetReader {
  read(assetId: string): Promise<Uint8Array | undefined>;
}

interface AssetWriter {
  write(
    descriptor: AssetDescriptorV1,
    content: Uint8Array
  ): Promise<{ assetId: string; descriptor: AssetDescriptorV1 }>;
}
```

导入事务分为两个阶段：

```text
prepare
  校验文档
  解析资源
  写入或复用 Blob
  准备 Block tree

commit
  一次 Yjs transaction 写入 Block tree
```

Blob 写入通常不能与 Yjs transaction 原子提交，因此失败处理必须定义补偿清理；不能宣称跨存储绝对原子。

## 10. Codec Registry 优化

Registry 增加能力描述：

```ts
interface DocumentBlockCodecDescriptor {
  type: string;
  flavours: readonly string[];
  protocolVersions: readonly string[];
  extension?: string;
}
```

公开能力 API：

```ts
interface DocumentDataCapabilities {
  documentVersions: string[];
  sliceVersions: string[];
  blockTypes: string[];
  inlineTypes: string[];
  markTypes: string[];
  extensions: Record<string, number[]>;
}

getDocumentDataCapabilities(registry?): DocumentDataCapabilities;
```

Registry 注册时必须拒绝：

- 重复核心 type。
- 重复 flavour 且没有明确优先级。
- extension codec 使用核心 type 名称。
- codec 声明不支持当前协议版本。

## 11. Diagnostics

新增稳定 diagnostic codes：

```text
block.extension_preserved
block.extension_unsupported
inline.extension_preserved
inline.extension_unsupported
document.downgrade_not_supported
slice.parent_not_found
slice.id_conflict
slice.import_failed
asset.read_failed
asset.write_failed
projection.stale_revision
projection.hash_mismatch
```

要求：

- `error` 时不得返回部分成功值，除非 API 明确使用 partial result 类型。
- `warning` 可以返回值，但必须准确设置 `lossy`。
- `preserve` 不算有损；只有内容被省略或 fallback 替代时才是有损。

## 12. 实施步骤

### M1：协议基础

- 增加 `1.1` 类型和 JSON Schema。
- 实现 `1.0 -> 1.1` migration。
- 实现 Extension Block/Inline 与 common props。
- 增加跨版本 fixtures。

验收：未知扩展内容经过 validate、normalize、canonicalize 后保持语义不变。

### M2：Store Extension Codec

- Registry 支持 extension descriptor。
- 实现 preserve/error/omit 策略。
- 对未知内部 flavour 生成 extension envelope。
- 对无法恢复的内部字段给出明确 diagnostics。

验收：未安装插件的客户端可导出、导入并再次导出同一 extension data。

### M3：Slice

- 增加 Slice 类型、Schema、校验和规范化。
- 实现 Store export/import Slice。
- 实现 `on-conflict` ID 策略。
- 在一次 Yjs transaction 中提交插入。

验收：粘贴、模板和 AI 生成场景能够复用同一 API，失败不修改目标文档。

### M4：Revision 与 Hash

- 将 projection revision 改为不透明字符串。
- 实现 canonical stringify 和 SHA-256 hash。
- 增加 stale projection 判断。
- 增加 Node 与浏览器运行时测试。

验收：相同规范内容在 Node 和浏览器产生相同 hash；旧 revision 不覆盖新投影。

### M5：Table 与 Asset Transport

- 实现 Table 核心协议和 Store codec。
- 实现 AssetReader/AssetWriter。
- 定义 Blob 写入失败的补偿策略。

验收：带图片和表格的文档可跨 Collection 导入，Block 与 Asset 引用保持一致。

## 13. 非目标

本轮优化不包含：

- 将 Document Data 变成第二个可独立编辑的主数据源。
- 保存 Yjs 删除集、client ID 或协同历史到公共 JSON。
- 在核心协议中接受任意内部 flavour 和 props。
- 第一阶段同时实现 Markdown、HTML、DOCX、PDF 全格式转换。
- 在没有真实需求前重新拆分新的 adapter npm 包。

## 14. 推荐第一批实现范围

第一批代码改动控制为：

1. canonical stable stringify 与 content hash。
2. revision 字符串类型和 stale projection 判断。
3. Document Slice 1.0 类型、Schema、校验和规范化。
4. Slice Store 导入导出与 `on-conflict` ID 策略。

Extension Block 涉及协议版本升级和未知内部 flavour 的可逆封装，应紧接第一批实现，但不要与 Slice 的事务逻辑混在同一个变更中。
