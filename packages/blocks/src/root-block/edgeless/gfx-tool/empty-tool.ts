import { BaseTool } from '@blockexpanse/block-std/gfx';

/**
 * Empty tool that does nothing.
 */
export class EmptyTool extends BaseTool {
  static override toolName: string = 'empty';
}

declare module '@blockexpanse/block-std/gfx' {
  interface GfxToolsMap {
    empty: EmptyTool;
  }
}
