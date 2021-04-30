import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Wrap = styled.div`
  padding: ${({ theme }) => `${theme.dim[3]} ${theme.dim[2]}`};
  border-top: 8px solid ${({ theme }) => theme.palette.stroke};
`;
