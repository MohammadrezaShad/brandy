import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.dim[2]};
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  min-width: 75px;
  flex: 0 0 75px;
  background-color: ${({ theme }) => theme.palette.onBack};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
`;
