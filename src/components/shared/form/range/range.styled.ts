import styled from 'styled-components';

export const Range = styled.input<{currentValue: number}>`
  background: ${({currentValue, theme}) =>
    `linear-gradient(to right, ${theme.palette.secondary} 0%, ${
      theme.palette.secondary
    } ${(currentValue * 100) / 5}%,${theme.palette.stroke} ${
      (currentValue * 100) / 5
    }%,${theme.palette.stroke} 100%)`};
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
