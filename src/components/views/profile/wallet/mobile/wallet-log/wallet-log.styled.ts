import styled from 'styled-components';

export const Wrap = styled.div``;

export const Item = styled.div`
  padding-bottom: ${({theme}) => theme.dim[2]};
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
    margin-bottom: ${({theme}) => theme.dim[2]};
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.dim[1]};
`;

export const Block = styled.div``;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
