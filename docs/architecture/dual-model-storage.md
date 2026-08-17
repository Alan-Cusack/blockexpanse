# BlockExpanse 双模型存储架构

## 结论

BlockExpanse 采用“单一事实源 + 派生读模型”的双模型架构：

- **协同层（Write Model）**：Yjs Snapshot 与增量 Update，唯一权威编辑状态。
- **快照层（Read Model）**：规范化 BlockExpanse Standard Document Data 及派生字段，用于列表、预览、搜索、API 和 AI。
- **搜索层（可选 Read Model）**：纯文本、倒排索引和向量索引，均可从快照层重建。

BlockExpanse Standard Document Data（下文简称“标准文档数据”）是一套标准 JSON 数据协议，不是 PDF、压缩包或二进制文件格式。它不直接作为协同层写入数据库。所有外部 JSON 必须经过校验和导入转换，最终提交为 Yjs 事务/Update。

```text
编辑器 / 标准文档数据 / API
          |
          v
     Y.Doc 事务
          |
          +--> Yjs Update 持久化（权威）
          |
          +--> 异步投影任务
                    |
                    +--> 标准文档数据 JSON 快照
                    +--> 纯文本/搜索索引
                    +--> 统计和 AI 派生数据
```

## 公共数据协议命名

正式名称：**BlockExpanse Standard Document Data**。

命名约定：

- 产品文档和 API 文档优先使用“标准文档数据”，不使用容易被理解为文件格式的缩写。
- npm 包名使用 `@blockexpanse/document-data`。
- JSON 根字段使用稳定机器标识 `blockexpanse-document`。
- HTTP 媒体类型建议为 `application/vnd.blockexpanse.document+json`。
- Schema 地址按主版本固定，例如 `/schemas/document-data/1.0/schema.json`。

基础 envelope：

```json
{
  "format": "blockexpanse-document",
  "specVersion": "1.0",
  "document": {
    "id": "doc_01",
    "title": "产品说明",
    "blocks": []
  },
  "assets": {},
  "extensions": {}
}
```

协议只接受标准 JSON 值，不暴露 `Y.Doc`、`Y.Map`、`Y.Text`、Yjs Client ID、`affine:*` 或内部 schema version。

## 跨语言边界

公共协议不依赖 TypeScript SDK。Python、Java、Go、PHP、Rust 等后端可以通过普通 JSON 库、JSON Schema 和 HTTP API 完成接入。

| 操作                         | 是否需要官方本地 SDK | 任意语言方案                             |
| ---------------------------- | -------------------- | ---------------------------------------- |
| 读取、生成标准文档数据       | 否                   | JSON + JSON Schema                       |
| 获取纯文本或 RAG chunks      | 否                   | HTTP JSON API                            |
| 导入、导出 BlockExpanse 文档 | 否                   | 调用官方 HTTP API                        |
| 本地执行标准数据与 Yjs 转换  | 是                   | 使用官方 TypeScript 转换包或自行实现规范 |
| 实时协作                     | 需要 Yjs 兼容实现    | WebSocket/Yjs 客户端                     |

推荐服务端公开以下能力：

```text
POST /api/document-data/validate
POST /api/document-data/normalize
POST /api/documents/import
GET  /api/documents/{id}/data
GET  /api/documents/{id}/rag
```

官方 SDK 是本地执行转换的便利实现，不是公共协议的唯一入口。JSON Schema、规范文档和语言无关 fixtures 才是跨语言兼容性的依据。

## 一致性模型

每个文档使用单调递增的 `revision`。Yjs Update 写入成功后，投影任务携带目标 revision；投影只允许条件更新更大的 revision。

```text
Yjs revision:          108
JSON sourceRevision:    105  （允许暂时落后）
```

读模型是最终一致的，但必须可重建、可重试、幂等。旧投影任务不能覆盖新投影。

## 存储建议

逻辑上至少需要以下数据：

```text
documents
  id, workspace_id, title, owner_id
  created_at, updated_at
  current_revision, projected_revision, projection_status

document_yjs_snapshots
  document_id, revision, state_vector, snapshot_update, created_at

document_yjs_updates
  id, document_id, revision, update_data, created_at

document_projections
  document_id, source_revision, format_version
  content_json, plain_text, updated_at
```

Yjs 数据使用数据库的 BLOB/BYTEA；标准文档数据快照使用 JSON/JSONB。图片和附件放对象存储，Yjs/JSON 只保存 asset ID、校验和及元数据。

当前仓库的 `DocPeer`、`DocSource` 和 `@blockexpanse/y-indexeddb` 已经具备 Update、StateVector、Snapshot 的基础能力；`sync-websocket-server` 目前仅是内存参考实现，不能作为生产持久化方案。

## 读写规则

### 写入

```text
标准文档数据/API 输入
  -> validate + normalize
  -> StandardDocument -> Internal DocSnapshot
  -> 创建或更新 Y.Doc
  -> 持久化 Yjs Update
  -> 触发异步投影
```

禁止客户端或 API 直接修改 `document_projections`。

### 读取

- 文档列表、标题、摘要、搜索：读取 JSON/索引。
- 预览：优先读取 JSON 投影。
- 进入协作编辑器：读取 Yjs Snapshot + 增量 Update。
- 公共导出：从当前 Y.Doc 生成标准文档数据，不能把可能过期的投影当作权威源。

## 包边界

建议分为两个包，避免公共协议绑定编辑器实现：

```text
@blockexpanse/document-data
  types、JSON Schema、validate、normalize、diagnostics、migrations

@blockexpanse/document-data-affine
  标准文档数据 <-> DocSnapshot/DocCollection 的映射
```

第一版只实现 paragraph、heading、list、quote、code、divider。未知 block 默认 `reject`，后续再增加 placeholder/opaque block。

## 投影任务要求

- 按文档 ID 合并或防抖，避免每次按键完整导出。
- 任务携带目标 revision。
- 使用最近快照加后续 Update 构建 Y.Doc。
- 输出规范化标准文档数据、纯文本和资源引用。
- 写入时使用 `source_revision < target_revision` 条件。
- 失败可重试，连续失败进入 `projection_status=error`。
- 快照缺失或损坏时可以从 Update 重建。

## RAG 数据投影

用户不需要自行解析 Yjs，也不应被迫自行定义文档 JSON 快照。平台在标准文档数据之上提供独立的 RAG Projection；用户负责 Embedding、向量数据库和检索策略。

```text
Yjs 权威状态
  -> 标准文档数据
  -> RAG Projection（chunks + metadata + source）
  -> 用户选择的 Embedding / Vector Store
```

RAG Projection 是另一个公开 JSON 数据协议，不是内部 SDK 对象：

```json
{
  "format": "blockexpanse-rag-projection",
  "specVersion": "1.0",
  "documentId": "doc_01",
  "sourceRevision": 108,
  "chunks": [
    {
      "id": "doc_01:paragraph_01:0",
      "text": "BlockExpanse 是一个协作文档系统。",
      "metadata": {
        "blockId": "paragraph_01",
        "blockType": "paragraph",
        "headingPath": ["产品说明", "概述"]
      },
      "source": {
        "blockId": "paragraph_01"
      }
    }
  ]
}
```

平台负责稳定 chunk ID、block 来源、标题路径、revision、删除事件和默认分块规则。用户可以覆盖 chunk 大小、重叠、过滤规则和业务 metadata。

文档更新后只重建受影响的 chunks，并通过 `documentId + sourceRevision` 防止旧索引继续参与查询。删除文档或 block 时必须发送 tombstone/delete 事件，避免 RAG 检索到已删除内容。

## 第一阶段实施范围

1. 新建纯协议包和 Standard Document Data 1.0 JSON Schema。
2. 增加严格 inline 联合类型、ID/深度/文本长度限制和 diagnostics。
3. 实现核心文档 block 的标准文档数据 -> Snapshot -> Y.Doc 导入。
4. 增加 revision、投影状态和投影接口类型，但先不绑定具体数据库。
5. 用语言无关 fixtures 覆盖合法、非法、规范化和 round-trip 基线。
6. 保持现有 Yjs 数据路径和 `Job` API 不变。

第二阶段再接入标准文档数据导出、图片/附件资源、数据库投影 Worker 和搜索索引。
