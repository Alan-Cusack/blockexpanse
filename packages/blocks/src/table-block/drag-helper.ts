export type OffsetList = number[];

type CellOffsets = {
  rows: OffsetList;
  columns: OffsetList;
};

export const domToOffsets = (
  element: HTMLElement,
  rowSelector: string,
  cellSelector: string
): CellOffsets | undefined => {
  const rowDoms = Array.from(element.querySelectorAll(rowSelector));
  const firstRowDom = rowDoms[0];
  if (!firstRowDom) return;
  const columnDoms = Array.from(firstRowDom.querySelectorAll(cellSelector));
  const rows: OffsetList = [];
  const columns: OffsetList = [];
  for (let i = 0; i < rowDoms.length; i++) {
    const rect = rowDoms[i].getBoundingClientRect();
    if (i === 0) {
      rows.push(rect.top);
    }
    rows.push(rect.bottom);
  }
  for (let i = 0; i < columnDoms.length; i++) {
    const rect = columnDoms[i].getBoundingClientRect();
    if (i === 0) {
      columns.push(rect.left);
    }
    columns.push(rect.right);
  }

  return {
    rows,
    columns,
  };
};

export const tableToOffsets = (
  element: HTMLElement
): CellOffsets | undefined => {
  const rowDoms = Array.from(element.querySelectorAll('tbody tr'));
  const columnDoms = Array.from(element.querySelectorAll('colgroup col'));
  if (!rowDoms.length || !columnDoms.length) return;
  const rows = rowDoms.flatMap((row, index) => {
    const rect = row.getBoundingClientRect();
    return index === 0 ? [rect.top, rect.bottom] : [rect.bottom];
  });
  const columns = columnDoms.flatMap((column, index) => {
    const rect = column.getBoundingClientRect();
    return index === 0 ? [rect.left, rect.right] : [rect.right];
  });
  return { rows, columns };
};

export const getIndexByPosition = (
  positions: OffsetList,
  offset: number,
  reverse = false
) => {
  if (reverse) {
    return positions.slice(1).findIndex(p => offset <= p);
  }
  for (let i = positions.length - 2; i >= 0; i--) {
    if (offset >= positions[i]) {
      return i;
    }
  }
  return -1;
};

export const getAreaByOffsets = (
  offsets: CellOffsets,
  top: number,
  bottom: number,
  left: number,
  right: number
) => {
  const { rows, columns } = offsets;
  const startRow = getIndexByPosition(rows, top, true);
  const endRow = getIndexByPosition(rows, bottom);
  const startColumn = getIndexByPosition(columns, left, true);
  const endColumn = getIndexByPosition(columns, right);
  return {
    top: startRow,
    bottom: endRow,
    left: startColumn,
    right: endColumn,
  };
};

export const getTargetIndexByDraggingOffset = (
  offsets: OffsetList,
  draggingIndex: number,
  indicatorLeft: number
) => {
  const originalStart = offsets[draggingIndex];
  const originalWidth = offsets[draggingIndex + 1] - originalStart;
  const indicatorRight = indicatorLeft + originalWidth;
  const isForward = indicatorLeft > originalStart;
  const startIndex = isForward ? draggingIndex + 1 : 0;
  const endIndex = isForward ? offsets.length - 1 : draggingIndex - 1;
  if (isForward) {
    for (let i = endIndex; i >= startIndex; i--) {
      const blockCenter = (offsets[i] + offsets[i + 1]) / 2;
      if (indicatorRight > blockCenter) {
        return {
          targetIndex: i,
          isForward,
        };
      }
    }
  } else {
    for (let i = startIndex; i <= endIndex; i++) {
      const blockCenter = (offsets[i] + offsets[i + 1]) / 2;
      if (indicatorLeft < blockCenter) {
        return {
          targetIndex: i,
          isForward,
        };
      }
    }
  }
  return {
    targetIndex: undefined,
    isForward,
  };
};
