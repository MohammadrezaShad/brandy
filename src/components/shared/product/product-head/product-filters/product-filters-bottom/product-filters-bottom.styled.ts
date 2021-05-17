import styled from 'styled-components';

export const BottomIcon = styled.span`
  margin-right: ${({ theme }) => theme.dim[2]};
  margin-left: ${({ theme }) => theme.dim[2]};
`;

export const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-items: flex-end;
`;
