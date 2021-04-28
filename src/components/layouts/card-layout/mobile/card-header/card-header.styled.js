import styled from 'styled-components';

export const Head = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  background-color: ${({ theme }) => theme.palette.back};
  z-index: 100;
  padding: ${({ theme }) => `${theme.dim[3]} ${theme.dim[3]} 0 ${theme.dim[3]}`};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const TabWrap = styled.div`
  flex: 1;
`;

export const ArrowRight = styled.span`
  transform: scale(1.2);
  margin-left: ${({ theme }) => theme.dim[2]};
  PATH {
    stroke: ${({ theme }) => theme.palette.onSurface};
  }
`;
