import styled from 'styled-components';

export const Footer = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  padding: ${({theme}) => `${theme.dim[2]} ${theme.dim[4]}`};
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
  position: sticky;
  bottom: 0;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.dim[6]};
`;

export const Item = styled.div<{selected?: boolean}>`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: ${({theme}) => `-${theme.dim[2]}`};
    right: 50%;
    height: 2px;
    width: 23px;
    background-color: ${({theme}) => theme.palette.error};
    transform: ${({selected}) =>
      selected ? `translateX(50%) scaleX(1)` : `translateX(50%) scaleX(0)`};
    transition: 0.5s transform;
  }
`;

export const Icon = styled.span<{selected?: boolean}>`
  PATH {
    fill: ${({theme, selected}) =>
      selected ? theme.palette.error : theme.palette.onSurface};
    transition: 0.5s transform;
  }
`;
