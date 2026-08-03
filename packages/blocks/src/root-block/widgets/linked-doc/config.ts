import type { BlockStdScope, EditorHost } from '@blockexpanse/block-std';
import type { InlineRange } from '@blockexpanse/inline';
import type { TemplateResult } from 'lit';

import {
  ImportIcon,
  LinkedDocIcon,
  LinkedEdgelessIcon,
  NewDocIcon,
} from '@blockexpanse/affine-components/icons';
import {
  type AffineInlineEditor,
  insertLinkedNode,
} from '@blockexpanse/affine-components/rich-text';
import { toast } from '@blockexpanse/affine-components/toast';
import {
  DocModeProvider,
  I18nKeys,
  I18nProvider,
  identityI18nFn,
  TelemetryProvider,
} from '@blockexpanse/affine-shared/services';
import {
  createDefaultDoc,
  isFuzzyMatch,
  type Signal,
} from '@blockexpanse/affine-shared/utils';

import { showImportModal } from './import-doc/index.js';

export interface LinkedWidgetConfig {
  /**
   * The first item of the trigger keys will be the primary key
   * e.g. @, [[
   */
  triggerKeys: [string, ...string[]];
  /**
   * Convert trigger key to primary key (the first item of the trigger keys)
   * [[ -> @
   */
  convertTriggerKey: boolean;
  ignoreBlockTypes: (keyof BlockExpanse.BlockModels)[];
  getMenus: (
    query: string,
    abort: () => void,
    editorHost: EditorHost,
    inlineEditor: AffineInlineEditor,
    abortSignal: AbortSignal
  ) => Promise<LinkedMenuGroup[]> | LinkedMenuGroup[];

  mobile: {
    useScreenHeight?: boolean;
    /**
     * The linked doc menu widget will scroll the container to make sure the input cursor is visible in viewport.
     * It accepts a selector string, HTMLElement or Window
     *
     * @default getViewportElement(editorHost) this is the scrollable container in playground
     */
    scrollContainer?: string | HTMLElement | Window;
    /**
     * The offset between the top of viewport and the input cursor
     *
     * @default 46 The height of header in playground
     */
    scrollTopOffset?: number | (() => number);
  };
}

export type LinkedMenuItem = {
  key: string;
  name: string | TemplateResult<1>;
  icon: TemplateResult<1>;
  suffix?: string | TemplateResult<1>;
  // disabled?: boolean;
  action: () => Promise<void> | void;
};

export type LinkedMenuGroup = {
  name: string;
  items: LinkedMenuItem[] | Signal<LinkedMenuItem[]>;
  styles?: string;
  // maximum quantity displayed by default
  maxDisplay?: number;
  // copywriting when display quantity exceeds
  overflowText?: string;
};

export type LinkedDocContext = {
  std: BlockStdScope;
  inlineEditor: AffineInlineEditor;
  startRange: InlineRange;
  triggerKey: string;
  config: LinkedWidgetConfig;
  close: () => void;
};

const DEFAULT_DOC_NAME = 'Untitled';
const DISPLAY_NAME_LENGTH = 8;

export function createLinkedDocMenuGroup(
  query: string,
  abort: () => void,
  editorHost: EditorHost,
  inlineEditor: AffineInlineEditor
) {
  const t = editorHost.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const untitled = t(I18nKeys.editor.linkedDoc.untitled, DEFAULT_DOC_NAME);
  const doc = editorHost.doc;
  const { docMetas } = doc.collection.meta;
  const filteredDocList = docMetas
    .filter(({ id }) => id !== doc.id)
    .filter(({ title }) => isFuzzyMatch(title, query));
  const MAX_DOCS = 6;

  return {
    name: t(I18nKeys.editor.linkedDoc.linkToDoc, 'Link to Doc'),
    items: filteredDocList.map(doc => ({
      key: doc.id,
      name: doc.title || untitled,
      icon:
        editorHost.std.get(DocModeProvider).getPrimaryMode(doc.id) ===
        'edgeless'
          ? LinkedEdgelessIcon
          : LinkedDocIcon,
      action: () => {
        abort();
        insertLinkedNode({
          inlineEditor,
          docId: doc.id,
        });
        editorHost.std
          .getOptional(TelemetryProvider)
          ?.track('LinkedDocCreated', {
            control: 'linked doc',
            module: 'inline @',
            type: 'doc',
            other: 'existing doc',
          });
      },
    })),
    maxDisplay: MAX_DOCS,
    overflowText: t(I18nKeys.editor.linkedDoc.moreDocs, '{count} more docs', {
      count: filteredDocList.length - MAX_DOCS,
    }),
  };
}

export function createNewDocMenuGroup(
  query: string,
  abort: () => void,
  editorHost: EditorHost,
  inlineEditor: AffineInlineEditor
): LinkedMenuGroup {
  const t = editorHost.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const untitled = t(I18nKeys.editor.linkedDoc.untitled, DEFAULT_DOC_NAME);
  const doc = editorHost.doc;
  const docName = query || untitled;
  const displayDocName =
    docName.slice(0, DISPLAY_NAME_LENGTH) +
    (docName.length > DISPLAY_NAME_LENGTH ? '..' : '');

  return {
    name: t(I18nKeys.editor.linkedDoc.newDoc, 'New Doc'),
    items: [
      {
        key: 'create',
        name: t(
          I18nKeys.editor.linkedDoc.createNamedDoc,
          'Create "{name}" doc',
          {
            name: displayDocName,
          }
        ),
        icon: NewDocIcon,
        action: () => {
          abort();
          const docName = query;
          const newDoc = createDefaultDoc(doc.collection, {
            title: docName,
          });
          insertLinkedNode({
            inlineEditor,
            docId: newDoc.id,
          });
          const telemetryService =
            editorHost.std.getOptional(TelemetryProvider);
          telemetryService?.track('LinkedDocCreated', {
            control: 'new doc',
            module: 'inline @',
            type: 'doc',
            other: 'new doc',
          });
          telemetryService?.track('DocCreated', {
            control: 'new doc',
            module: 'inline @',
            type: 'doc',
          });
        },
      },
      {
        key: 'import',
        name: t(I18nKeys.editor.linkedDoc.import, 'Import'),
        icon: ImportIcon,
        action: () => {
          abort();
          const onSuccess = (
            docIds: string[],
            options: {
              importedCount: number;
            }
          ) => {
            toast(
              editorHost,
              t(
                I18nKeys.editor.linkedDoc.importSuccess,
                'Successfully imported {count} Doc(s).',
                { count: options.importedCount }
              )
            );
            for (const docId of docIds) {
              insertLinkedNode({
                inlineEditor,
                docId,
              });
            }
          };
          const onFail = (message: string) => {
            toast(editorHost, message);
          };
          showImportModal({
            collection: doc.collection,
            onSuccess,
            onFail,
          });
        },
      },
    ],
  };
}

export function getMenus(
  query: string,
  abort: () => void,
  editorHost: EditorHost,
  inlineEditor: AffineInlineEditor
): Promise<LinkedMenuGroup[]> {
  return Promise.resolve([
    createLinkedDocMenuGroup(query, abort, editorHost, inlineEditor),
    createNewDocMenuGroup(query, abort, editorHost, inlineEditor),
  ]);
}

export const LinkedWidgetUtils = {
  createLinkedDocMenuGroup,
  createNewDocMenuGroup,
  insertLinkedNode,
};
