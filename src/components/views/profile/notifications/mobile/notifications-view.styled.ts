import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: ${({theme}) => theme.dim[3]};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const ArrowRight = styled.span`
  transform: scale(1.2);
  margin-left: ${({theme}) => theme.dim[3]};
  PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;

export const List = styled.div`
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
`;
