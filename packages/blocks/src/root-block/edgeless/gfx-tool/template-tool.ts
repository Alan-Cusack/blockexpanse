import { BaseTool } from '@blockexpanse/block-std/gfx';

export class TemplateTool extends BaseTool {
  static override toolName: string = 'template';
}

declare module '@blockexpanse/block-std/gfx' {
  interface GfxToolsMap {
    template: TemplateTool;
  }
}
