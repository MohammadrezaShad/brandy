import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => `${theme.dim[1]} ${theme.dim[2]} 0 ${theme.dim[2]}`};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({theme}) => theme.dim[3]};
  padding-top: ${({theme}) => theme.dim[2]};
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowLeft = styled.span`
  margin-right: ${({theme}) => theme.dim[1]};
  transform: scale(0.8);
  PATH {
    stroke: ${({theme}) => theme.palette.primary};
  }
`;
