import convert from 'color-convert';
import styled from 'styled-components';

export const Input = styled.input`
  width: 30px !important;
  height: 45px;
  text-align: center;
  border: none;
  border-bottom: ${({theme, value}) =>
    `1px solid rgb(${convert.hex.rgb(theme.palette.onSurface)}, ${
      value ? 1 : 0.2
    })`};
  &:not(:last-child) {
    margin-right: ${({theme}) => theme.dim[2]};
  }
  ${({theme}) => theme.typography.bodyMdNormal}
`;
