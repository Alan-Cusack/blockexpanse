import type {
  LastProps,
  LastPropsKey,
} from '@blockexpanse/affine-shared/services';

import { getShapeName, type ShapeProps } from '@blockexpanse/affine-model';
import { NodePropsSchema } from '@blockexpanse/affine-shared/utils';

const LastPropsSchema = NodePropsSchema;

export function getLastPropsKey(
  modelType: BlockExpanse.EdgelessModelKeys,
  modelProps: Partial<LastProps[LastPropsKey]>
): LastPropsKey | null {
  if (modelType === 'shape') {
    const { shapeType, radius } = modelProps as ShapeProps;
    const shapeName = getShapeName(shapeType, radius);
    return `${modelType}:${shapeName}`;
  }

  if (isLastPropsKey(modelType)) {
    return modelType;
  }

  return null;
}

function isLastPropsKey(key: string): key is LastPropsKey {
  return Object.keys(LastPropsSchema.shape).includes(key);
}
