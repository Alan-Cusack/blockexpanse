import type { SurfaceBlockModel } from '@blockexpanse/affine-block-surface';
import type { BlockStdScope } from '@blockexpanse/block-std';
import type { BlockModel } from '@blockexpanse/store';

import { EditPropsStore } from '@blockexpanse/affine-shared/services';
import {
  type GfxController,
  GfxControllerIdentifier,
} from '@blockexpanse/block-std/gfx';

import type { Connectable } from '../../../_common/utils/index.js';
import type { EdgelessRootBlockComponent } from '../index.js';

import { getLastPropsKey } from './get-last-props-key.js';
import { isConnectable, isNoteBlock } from './query.js';

/**
 * Use deleteElementsV2 instead.
 * @deprecated
 */
export function deleteElements(
  edgeless: EdgelessRootBlockComponent,
  elements: BlockExpanse.EdgelessModel[]
) {
  const set = new Set(elements);
  const { service } = edgeless;

  elements.forEach(element => {
    if (isConnectable(element)) {
      const connectors = service.getConnectors(element as Connectable);
      connectors.forEach(connector => set.add(connector));
    }
  });

  set.forEach(element => {
    if (isNoteBlock(element)) {
      const children = edgeless.doc.root?.children ?? [];
      // FIXME: should always keep at least 1 note
      if (children.length > 1) {
        edgeless.doc.deleteBlock(element);
      }
    } else {
      service.removeElement(element.id);
    }
  });
}

export function deleteElementsV2(
  gfx: GfxController,
  elements: BlockExpanse.EdgelessModel[]
) {
  const set = new Set(elements);

  elements.forEach(element => {
    if (isConnectable(element)) {
      const connectors = (gfx.surface as SurfaceBlockModel).getConnectors(
        element.id
      );
      connectors.forEach(connector => set.add(connector));
    }
  });

  set.forEach(element => {
    if (isNoteBlock(element)) {
      const children = gfx.doc.root?.children ?? [];
      if (children.length > 1) {
        gfx.doc.deleteBlock(element);
      }
    } else {
      gfx.deleteElement(element.id);
    }
  });
}

export function addBlock(
  std: BlockStdScope,
  flavour: BlockExpanse.EdgelessModelKeys,
  props: Record<string, unknown>,
  parentId?: string | BlockModel,
  parentIndex?: number
) {
  const gfx = std.get(GfxControllerIdentifier);
  const key = getLastPropsKey(flavour as BlockExpanse.EdgelessModelKeys, props);
  if (key) {
    props = std.get(EditPropsStore).applyLastProps(key, props);
  }

  const nProps = {
    ...props,
    index: gfx.layer.generateIndex(),
  };

  return std.doc.addBlock(flavour as never, nProps, parentId, parentIndex);
}
