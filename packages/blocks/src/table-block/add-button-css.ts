import { cssVar } from '@blockexpanse/theme';
import { css } from '@emotion/css';

import { tableTheme } from './theme.js';

export const addColumnButtonStyle = css({
  cursor: 'col-resize',
  backgroundColor: tableTheme.indicatorHover,
  fontSize: '16px',
  color: tableTheme.iconSecondary,
  display: 'flex',
  width: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  left: 'calc(100% + 2px)',
  height: '100%',
  transition:
    'opacity 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  borderRadius: '2px',
  opacity: 0,
  ':hover': {
    backgroundColor: tableTheme.indicatorActivated,
    color: tableTheme.indicatorPointerActive,
    opacity: 1,
  },
  '&.active': {
    backgroundColor: tableTheme.indicatorActivated,
    color: tableTheme.indicatorPointerActive,
    opacity: 1,
  },
});

export const addRowButtonStyle = css({
  cursor: 'row-resize',
  backgroundColor: tableTheme.indicatorHover,
  fontSize: '16px',
  color: tableTheme.iconSecondary,
  display: 'flex',
  height: '16px',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 'calc(100% + 2px)',
  left: '0',
  width: '100%',
  transition:
    'opacity 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  borderRadius: '2px',
  opacity: 0,
  ':hover': {
    backgroundColor: tableTheme.indicatorActivated,
    color: tableTheme.indicatorPointerActive,
    opacity: 1,
  },
  '&.active': {
    backgroundColor: tableTheme.indicatorActivated,
    color: tableTheme.indicatorPointerActive,
    opacity: 1,
  },
});

export const addRowColumnButtonStyle = css({
  cursor: 'nwse-resize',
  backgroundColor: tableTheme.indicatorHover,
  fontSize: '16px',
  color: tableTheme.iconSecondary,
  display: 'flex',
  width: '16px',
  height: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 'calc(100% + 2px)',
  left: 'calc(100% + 2px)',
  borderRadius: '2px',
  opacity: 0,
  transition:
    'opacity 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: tableTheme.indicatorActivated,
    color: tableTheme.indicatorPointerActive,
    opacity: 1,
  },
  '&.active': {
    backgroundColor: tableTheme.indicatorActivated,
    color: tableTheme.indicatorPointerActive,
    opacity: 1,
  },
});

export const cellCountTipsStyle = css({
  position: 'absolute',
  backgroundColor: 'var(--affine-tooltip)',
  borderRadius: '4px',
  padding: '4px',
  boxShadow: cssVar('buttonShadow'),
  color: 'var(--affine-white)',
  whiteSpace: 'nowrap',
});
