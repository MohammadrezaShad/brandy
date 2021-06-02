import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RateWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const RangeWrap = styled.div`
  direction: ltr;
  width: 100%;
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Range = styled.input<{rate: number}>`
  background: ${({rate, theme}) =>
    `linear-gradient(to right, ${theme.palette.secondary} 0%, ${
      theme.palette.secondary
    } ${(rate * 100) / 5}%,${theme.palette.stroke} ${(rate * 100) / 5}%,${
      theme.palette.stroke
    } 100%)`};
  appearance: none;
  position: relative;
  height: 8px;
  /* background: ${({theme}) => theme.palette.stroke}; */
  outline: none;
  width: 100%;
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  &::-moz-range-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.palette.back};
    border: 1px solid ${({theme}) => theme.palette.primary};
    margin-top: -8px;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.palette.back};
    border: 1px solid ${({theme}) => theme.palette.primary};
    margin-top: -5px;
  }
  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 2px;
  }
  &::-moz-range-track {
    height: 8px;
    border-radius: 2px;
  }
`;

export const TextWrap = styled.div`
  width: 30px;
  text-align: left;
`;

export const PointsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  position: relative;
  height: 6px;
`;

export const Point = styled.span<{index: number}>`
  display: inline-flex;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.stroke};
`;
