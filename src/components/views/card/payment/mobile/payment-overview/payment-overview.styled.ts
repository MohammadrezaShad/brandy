import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.palette.onBack};
  padding: ${({ theme }) => `${theme.dim[3]} ${theme.dim[2]}`};
  margin: 0 -16px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
`;

export const Separator = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.stroke};
  margin-bottom: ${({ theme }) => theme.dim[2]};
`;

export const Terms = styled.div`
  margin-top: ${({ theme }) => theme.dim[2]};
  margin-bottom: ${({ theme }) => `-${theme.dim[1]}`};
`;
