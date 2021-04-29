import convert from 'color-convert';
import styled from 'styled-components';

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme }) => `rgb(${convert.hex.rgb(theme.palette.onBack)},0.7)`};
  margin-top: ${({ theme }) => theme.dim[2]};
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${({ theme }) => theme.dim[1]};
`;
