import type {
  BrushElementModel,
  ConnectorElementModel,
  DocMode,
  GroupElementModel,
} from '@blockexpanse/affine-model';
import type { Slot } from '@blockexpanse/global/utils';
import type { Doc } from '@blockexpanse/store';

/** Common context interface definition for block models. */

type EditorSlots = {
  docUpdated: Slot<{ newDocId: string }>;
};

export type AbstractEditor = {
  doc: Doc;
  mode: DocMode;
  readonly slots: EditorSlots;
} & HTMLElement;

export type Connectable = Exclude<
  BlockExpanse.EdgelessModel,
  ConnectorElementModel | BrushElementModel | GroupElementModel
>;

export type { EmbedCardStyle } from '@blockexpanse/affine-model';
export * from '@blockexpanse/affine-shared/types';
