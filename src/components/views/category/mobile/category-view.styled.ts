import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: ${({theme}) => theme.dim[2]};
`;

export const Wrap = styled.div`
  &:first-child {
    margin-left: ${({theme}) => theme.dim[2]};
  }
  &:last-child {
    flex: 1;
  }
`;
