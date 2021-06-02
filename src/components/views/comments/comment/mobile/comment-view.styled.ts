import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Block = styled.div`
  padding: ${({theme}) => theme.dim[3]};
  &:not(:last-child) {
    border-bottom: 7px solid ${({theme}) => theme.palette.stroke};
  }
`;
