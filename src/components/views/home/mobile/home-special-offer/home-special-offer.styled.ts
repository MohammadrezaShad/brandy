/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({theme}) => theme.dim[3]};
  padding: ${({theme}) => `0 ${theme.dim[2]}`};
`;

export const Products = styled.div``;

export const Product = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  flex: 0 0 50px;
  width: 50px;
  height: 73px;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[1]};
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin-top: ${({theme}) => theme.dim[3]};
`;

export const Block = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  height: 183px;
  flex: 1;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};

  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[1]};
  }
`;

export const Bottom = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  height: 59px;
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Container = styled.div`
  display: flex;
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const ProductItem = styled.div`
  position: relative;
  background-color: ${({theme}) => theme.palette.onBack};
  flex: 0 0 20%;
  min-width: 0;
  height: 185px;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: ${({theme}) => theme.dim[2]};
`;

export const ProductDetailBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Colors = styled.div`
  display: flex;
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Icon = styled.span`
  position: absolute;
  top: ${({theme}) => theme.dim[2]};
  right: ${({theme}) => theme.dim[2]};
  color: ${({theme}) => theme.palette.primary};
  z-index: 1;
`;

export const Color = styled.span<{itemId: number}>`
  display: flex;
  flex: 0 0 20px;
  height: 20px;
  border: 1px solid ${({theme}) => theme.palette.back};
  border-radius: 50%;
  background-color: ${({theme, itemId}) =>
    itemId === 1
      ? theme.palette.primary
      : itemId === 2
      ? theme.palette.secondary
      : theme.palette.error};
  &:not(:first-child) {
    margin-right: ${({theme}) => `-${theme.dim[1]}`};
  }
`;

export const BagIcon = styled.span`
  fill: ${({theme}) => theme.palette.primary};
`;
