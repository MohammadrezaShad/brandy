import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme}) => theme.dim[3]};
`;
