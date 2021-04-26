/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
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

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.dim[1]};
`;

export const Colors = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.dim[1]};
`;

export const Icon = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.dim[2]};
  right: ${({ theme }) => theme.dim[2]};
  color: ${({ theme }) => theme.palette.primary};
  z-index: 1;
`;

export const Color = styled.span`
  display: flex;
  flex: 0 0 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.palette.back};
  border-radius: 50%;
  background-color: ${({ theme, id }) =>
    id === 1 ? theme.palette.primary : id === 2 ? theme.palette.secondary : theme.palette.error};
  &:not(:first-child) {
    margin-right: ${({ theme }) => `-${theme.dim[1]}`};
  }
`;

export const BagIcon = styled.span`
  fill: ${({ theme }) => theme.palette.primary};
`;
