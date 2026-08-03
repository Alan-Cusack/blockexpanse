export type TableColorId =
  | 'blue'
  | 'green'
  | 'grey'
  | 'orange'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export type TableColorOption = {
  /** Stable id; display name is resolved via i18n at render time. */
  id: TableColorId;
  color: string;
};

function headerBg(id: TableColorId, fallback: string): string {
  return `var(--affine-v2-table-headerBackground-${id}, ${fallback})`;
}

/** Soft pastel fills used for row/column background (AFFiNE table tokens). */
export const colorList: TableColorOption[] = [
  { id: 'blue', color: headerBg('blue', '#f0f9ff') },
  { id: 'green', color: headerBg('green', '#efffec') },
  { id: 'grey', color: headerBg('grey', '#f5f5f5') },
  { id: 'orange', color: headerBg('orange', '#fff7ee') },
  { id: 'purple', color: headerBg('purple', '#f7f5ff') },
  { id: 'red', color: headerBg('red', '#fff4f5') },
  { id: 'teal', color: headerBg('teal', '#eefffd') },
  { id: 'yellow', color: headerBg('yellow', '#fffded') },
];

const colorMap = Object.fromEntries(colorList.map(item => [item.color, item]));

export const getColorByColor = (
  color: string
): TableColorOption | undefined => {
  return colorMap[color] ?? undefined;
};
