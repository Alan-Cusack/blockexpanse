import type { ExtensionType } from '@blockexpanse/block-std';

import { EmbedExtensions } from '@blockexpanse/affine-block-embed';
import { ListBlockSpec } from '@blockexpanse/affine-block-list';
import { ParagraphBlockSpec } from '@blockexpanse/affine-block-paragraph';
import { RichTextExtensions } from '@blockexpanse/affine-components/rich-text';
import { EditPropsStore } from '@blockexpanse/affine-shared/services';

import {
  AdapterFactoryExtensions,
  BlockAdapterMatcherExtensions,
} from '../_common/adapters/extension.js';
import { AttachmentBlockSpec } from '../attachment-block/attachment-spec.js';
import { BookmarkBlockSpec } from '../bookmark-block/bookmark-spec.js';
import { CodeBlockSpec } from '../code-block/code-block-spec.js';
import { DataViewBlockSpec } from '../data-view-block/data-view-spec.js';
import { DatabaseBlockSpec } from '../database-block/database-spec.js';
import { DividerBlockSpec } from '../divider-block/divider-spec.js';
import { ImageBlockSpec } from '../image-block/image-spec.js';
import {
  EdgelessNoteBlockSpec,
  NoteBlockSpec,
} from '../note-block/note-spec.js';
import { TableBlockSpec } from '../table-block/table-spec.js';

export const CommonFirstPartyBlockSpecs: ExtensionType[] = [
  RichTextExtensions,
  EditPropsStore,
  ListBlockSpec,
  NoteBlockSpec,
  DatabaseBlockSpec,
  DataViewBlockSpec,
  DividerBlockSpec,
  CodeBlockSpec,
  ImageBlockSpec,
  ParagraphBlockSpec,
  BookmarkBlockSpec,
  AttachmentBlockSpec,
  TableBlockSpec,
  EmbedExtensions,
  BlockAdapterMatcherExtensions,
  AdapterFactoryExtensions,
].flat();

export const EdgelessFirstPartyBlockSpecs: ExtensionType[] = [
  RichTextExtensions,
  EditPropsStore,
  ListBlockSpec,
  EdgelessNoteBlockSpec,
  DatabaseBlockSpec,
  DataViewBlockSpec,
  DividerBlockSpec,
  CodeBlockSpec,
  ImageBlockSpec,
  ParagraphBlockSpec,
  BookmarkBlockSpec,
  AttachmentBlockSpec,
  TableBlockSpec,
  EmbedExtensions,
  BlockAdapterMatcherExtensions,
  AdapterFactoryExtensions,
].flat();
