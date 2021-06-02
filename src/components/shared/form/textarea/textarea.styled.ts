import convert from 'color-convert';
import styled from 'styled-components';

export const Textarea = styled.textarea`
  padding: ${({theme}) => theme.dim[2]};
  resize: none;
  outline: none;
  border: 1px solid ${({theme}) => theme.palette.stroke};
  width: 100%;
  height: 120px;
  color: ${({theme}) => theme.palette.onPrimary};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  background-color: ${({theme}) =>
    `rgb(${convert.hex.rgb(theme.palette.onBack)},0.7)`};
  ${({theme}) => theme.typography.subtitleXsNormal};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({theme}) => theme.palette.onPrimary};
    opacity: 1; /* Firefox */
  }
`;
