import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
`;

export const Product = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  height: 114px;
  border: ${({ theme, selected }) => (selected ? `1px solid ${theme.palette.onSurface}` : `1px solid transparent`)};
  transition: all 0.7s;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  overflow: hidden;
  box-sizing: content-box;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[1]};
  }
`;
