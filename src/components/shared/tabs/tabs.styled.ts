import styled from 'styled-components';

export const Wrapper = styled.div<{$spaceAround: boolean; $border: boolean}>`
  display: flex;
  justify-content: ${({$spaceAround}) =>
    $spaceAround ? 'space-around' : 'space-between'};
  padding: ${({theme, $spaceAround}) =>
    $spaceAround ? 0 : `0 ${theme.dim[2]}`};
  border-bottom: ${({theme, $border}) =>
    $border ? `1px solid ${theme.palette.stroke}` : null};
`;

export const Item = styled.div<{selected: boolean; darkSelect: boolean}>`
  padding: ${({theme}) =>
    `0 ${theme.dim[2]} ${theme.dim[1]}  ${theme.dim[2]} `};
  position: relative;
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({theme, darkSelect}) =>
      darkSelect ? theme.palette.onSurface : theme.palette.onSuccess};
    transition: 0.5s transform;
    transform: ${({selected}) => (selected ? `scaleX(1)` : `scaleX(0)`)};
  }
`;
