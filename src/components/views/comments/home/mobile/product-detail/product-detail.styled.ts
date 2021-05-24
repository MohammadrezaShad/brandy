import convert from 'color-convert';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Block = styled.div`
  display: flex;
`;

export const Survey = styled.div`
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  background-color: ${({theme}) =>
    `rgb(${convert.hex.rgb(theme.palette.onBack)},0.7)`};
  padding: ${({theme}) => theme.dim[2]};
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Wrap = styled.div`
  width: 20%;
  flex: 0 0 20%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: ${({theme}) => theme.dim[1]};
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  position: relative;
  padding-top: 150%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.span``;

export const Tag = styled.span``;

export const TagImage = styled.img``;

export const Rate = styled.div`
  display: flex;
`;
