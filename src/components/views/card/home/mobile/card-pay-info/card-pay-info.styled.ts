import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.dim[2]};
  }
`;
