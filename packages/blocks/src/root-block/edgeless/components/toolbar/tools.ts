import type { MenuConfig } from '@blockexpanse/affine-components/context-menu';
import type { GfxToolsMap } from '@blockexpanse/block-std/gfx';

import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { html, type TemplateResult } from 'lit';

import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';

import { buildConnectorDenseMenu } from './connector/connector-dense-menu.js';
import { buildFrameDenseMenu } from './frame/frame-dense-menu.js';
import { buildLinkDenseMenu } from './link/link-dense-menu.js';

export interface QuickTool {
  type?: keyof GfxToolsMap;
  content: TemplateResult;
  /**
   * if not configured, the tool will not be shown in dense mode
   */
  menu?: MenuConfig;
}
export interface SeniorTool {
  /**
   * Used to show in nav-button's tooltip
   */
  name: string;
  content: TemplateResult;
}

/**
 * Get quick-tool list
 */
export const getQuickTools = ({
  edgeless,
}: {
  edgeless: EdgelessRootBlockComponent;
}) => {
  const { doc } = edgeless;
  const quickTools: QuickTool[] = [];

  // 🔧 Hands / Pointer
  quickTools.push({
    type: 'default',
    content: html`<edgeless-default-tool-button
      .edgeless=${edgeless}
    ></edgeless-default-tool-button>`,
    // menu: will never show because the first tool will never hide
  });

  // 🔧 Frame
  if (!doc.readonly) {
    quickTools.push({
      type: 'frame',
      content: html`<edgeless-frame-tool-button
        .edgeless=${edgeless}
      ></edgeless-frame-tool-button>`,
      menu: buildFrameDenseMenu(edgeless),
    });
  }

  // 🔧 Connector
  quickTools.push({
    type: 'connector',
    content: html`<edgeless-connector-tool-button
      .edgeless=${edgeless}
    ></edgeless-connector-tool-button>`,
    menu: buildConnectorDenseMenu(edgeless),
  });

  // Link
  quickTools.push({
    content: html`<edgeless-link-tool-button
      .edgeless=${edgeless}
    ></edgeless-link-tool-button>`,
    menu: buildLinkDenseMenu(edgeless),
  });
  return quickTools;
};

export const getSeniorTools = ({
  edgeless,
  toolbarContainer,
}: {
  edgeless: EdgelessRootBlockComponent;
  toolbarContainer: HTMLElement;
}): SeniorTool[] => {
  const { doc } = edgeless;
  const t = edgeless.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const tools: SeniorTool[] = [];

  if (!doc.readonly) {
    tools.push({
      name: t(I18nKeys.editor.edgeless.note, 'Note'),
      content: html`<edgeless-note-senior-button .edgeless=${edgeless}>
      </edgeless-note-senior-button>`,
    });
  }

  // Brush / Eraser
  tools.push({
    name: t(I18nKeys.editor.edgeless.pen, 'Pen'),
    content: html`<div class="brush-and-eraser">
      <edgeless-brush-tool-button
        .edgeless=${edgeless}
      ></edgeless-brush-tool-button>

      <edgeless-eraser-tool-button
        .edgeless=${edgeless}
      ></edgeless-eraser-tool-button>
    </div> `,
  });

  // Shape
  tools.push({
    name: t(I18nKeys.editor.edgeless.shape, 'Shape'),
    content: html`<edgeless-shape-tool-button
      .edgeless=${edgeless}
      .toolbarContainer=${toolbarContainer}
    ></edgeless-shape-tool-button>`,
  });

  tools.push({
    name: t(I18nKeys.editor.edgeless.mindMap, 'Mind Map'),
    content: html`<edgeless-mindmap-tool-button
      .edgeless=${edgeless}
      .toolbarContainer=${toolbarContainer}
    ></edgeless-mindmap-tool-button>`,
  });

  // Template
  tools.push({
    name: t(I18nKeys.editor.edgeless.template, 'Template'),
    content: html`<edgeless-template-button .edgeless=${edgeless}>
    </edgeless-template-button>`,
  });

  return tools;
};
