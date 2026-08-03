import { GroupElementModel } from '@blockexpanse/affine-model';
export function getElementsWithoutGroup(
  elements: BlockExpanse.EdgelessModel[]
) {
  const set = new Set<BlockExpanse.EdgelessModel>();

  elements.forEach(element => {
    if (element instanceof GroupElementModel) {
      element.descendantElements
        .filter(descendant => !(descendant instanceof GroupElementModel))
        .forEach(descendant => set.add(descendant));
    } else {
      set.add(element);
    }
  });
  return Array.from(set);
}
