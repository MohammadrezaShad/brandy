import convert from 'color-convert';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: ${({ theme }) => `0 -${theme.dim[1]}`};
`;

export const Wrap = styled.div`
  display: inline-block;
  width: 33.33%;
  padding: ${({ theme }) => `0 ${theme.dim[1]}`};
`;

export const Block = styled.div<{ selected: boolean }>`
  padding-top: 100%;
  position: relative;
  transition: 0.5s all;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? `${theme.palette.onSuccess}` : `rgb(${convert.hex.rgb(theme.palette.onSuccess)},0.2)`};
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
