import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({theme}) => `0 ${theme.dim[2]}`};
  text-align: center;
  position: relative;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({theme}) => `-${theme.dim[1]}`};
`;

export const ProductWrap = styled.div`
  flex: 0 0 33.33%;
  min-width: 0;
  padding: ${({theme}) => theme.dim[1]};
  text-align: left;
`;

export const Product = styled.div`
  position: relative;
  height: 172px;
  background-color: ${({theme}) => theme.palette.onBack};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
`;

export const Icon = styled.span`
  position: absolute;
  top: ${({theme}) => theme.dim[2]};
  right: ${({theme}) => theme.dim[2]};
  color: ${({theme}) => theme.palette.primary};
  z-index: 1;
`;

export const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(247, 247, 247, 1) 0%,
    rgba(247, 247, 247, 0.9) 50%,
    rgba(247, 247, 247, 0) 100%
  );
  height: 112px;
`;

export const Tabs = styled.div`
  margin-bottom: ${({theme}) => theme.dim[3]};
`;
