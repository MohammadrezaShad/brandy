import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  direction: ${({ theme }) => theme.defaults.direction};
`;

export const Container = styled.main`
  flex: 1;
`;

export const CardProgress = styled.div`
  padding: ${({ theme }) => `${theme.dim[4]} ${theme.dim[8]}`};
`;
