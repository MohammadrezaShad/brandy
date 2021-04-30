import styled from 'styled-components';

export const Content = styled.div`
  padding: ${({ theme }) => `${theme.dim[2]}`};
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => `-${theme.dim[1]}`};
`;

export const Item = styled.div`
  flex: 0 0 50%;
  padding: ${({ theme }) => theme.dim[1]};
`;
