import convert from 'color-convert';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({theme}) => `${theme.dim[2]} ${theme.dim[7]}`};
  background-color: ${({theme}) =>
    `rgb(${convert.hex.rgb(theme.palette.strokeVariant)},0.4)`};
  margin: ${({theme}) => `0 -${theme.dim[2]}`};
`;

export const TagWrap = styled.div`
  flex: 0 0 86px;
  text-align: center;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.stroke};
`;
