import styled from 'styled-components';

export const Wrap = styled.div``;

export const Head = styled.div<{$hasBorder?: boolean}>`
  display: flex;
  align-items: center;
  padding: ${({theme}) => `${theme.dim[2]} ${theme.dim[3]}`};
  border-bottom: ${({theme, $hasBorder}) =>
    $hasBorder ? `1px solid ${theme.palette.stroke}` : null};
`;

export const ArrowRight = styled.span`
  transform: scale(1.2);
  margin-left: ${({theme}) => theme.dim[3]};
  cursor: pointer;
  PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;
