import styled from 'styled-components';

export const Head = styled.div`
  padding: ${({ theme }) => theme.dim[2]};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.dim[1]};
`;

export const HeadIcon = styled.span`
  &:not(:last-child) {
    margin-right: auto;
  }
  &:last-child {
    margin-right: ${({ theme }) => theme.dim[4]};
  }
`;

export const ProductsWrap = styled.div`
  padding: ${({ theme }) => `${theme.dim[2]}`};
`;

export const ProudctsHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.dim[2]};
`;

export const Footer = styled.div`
  padding: ${({ theme }) => `0 ${theme.dim[2]} `};
`;
