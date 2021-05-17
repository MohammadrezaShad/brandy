import convert from 'color-convert';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const RangeValueWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RangeValue = styled.div`
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[1]};
  }
`;

export const Wrap = styled.div`
  position: relative;
  padding: ${({theme}) => `${theme.dim[1]} 0`};
`;

export const Track = styled.div`
  position: relative;
  margin: 0 10px;
  height: 2px;
  background-color: ${({theme}) => theme.palette.strokeVariant};
`;

export const Progress = styled.div.attrs(
  ({$right, $left}: {$right: number; $left: number}) => ({
    style: {
      right: `${$right}px`,
      left: `${$left}px`,
    },
  }),
)<{$right: number; $left: number}>`
  background-color: ${({theme}) => theme.palette.onSurface};
  position: absolute;
  top: 0;
  will-change: right left;
  height: 2px;
`;

export const ThumbLeft = styled.span.attrs(({$left}: {$left: number}) => ({
  style: {
    left: `${$left}px`,
  },
}))<{$left: number}>`
  display: block;
  position: absolute;
  will-change: left;
  width: 20px;
  height: 20px;
  border: 0.5px solid
    ${({theme}) => `rgb(${convert.hex.rgb(theme.palette.primary)},0.3)`};
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.onSecondary};
  z-index: 1;
  user-select: none;
  box-shadow: 0px 1px 4px 0px
    ${({theme}) => `rgb(${convert.hex.rgb(theme.palette.onSurface)},0.16)`};
`;

export const ThumbRight = styled.span.attrs(({$right}: {$right: number}) => ({
  style: {
    right: `${$right}px`,
  },
}))<{$right: number}>`
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  will-change: right;
  border: 0.5px solid
    ${({theme}) => `rgb(${convert.hex.rgb(theme.palette.primary)},0.3)`};
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.onSecondary};
  z-index: 1;
  user-select: none;
  box-shadow: 0px 1px 4px 0px
    ${({theme}) => `rgb(${convert.hex.rgb(theme.palette.onSurface)},0.16)`};
`;
