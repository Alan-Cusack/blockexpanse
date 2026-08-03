import type { BlockModel } from '@blockexpanse/store';
import type { StaticValue } from 'lit/static-html.js';

export type BlockCommands = Partial<BlockExpanse.Commands>;
export type BlockViewType = StaticValue | ((model: BlockModel) => StaticValue);
export type WidgetViewMapType = Record<string, StaticValue>;
