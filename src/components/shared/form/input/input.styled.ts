import convert from 'color-convert';
import styled from 'styled-components';

export const Input = styled.input<{
  $paddingLeft: number;
  $paddingRight: number;
}>`
  width: 100%;
  border: none;
  color: ${({theme}) => theme.palette.onPrimary};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  background-color: ${({theme}) =>
    `rgb(${convert.hex.rgb(theme.palette.onBack)},0.7)`};
  ${({theme}) => theme.typography.subtitleXsNormal};
  padding-right: ${({theme, $paddingRight}) => theme.dim[$paddingRight]};
  padding-left: ${({theme, $paddingLeft}) => theme.dim[$paddingLeft]};
  height: 38px;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({theme}) => theme.palette.onPrimary};
    opacity: 1; /* Firefox */
  }
`;
