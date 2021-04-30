import convert from 'color-convert';
import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dim[2]};
  width: 100%;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.dim[2]};
`;

export const Icon = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  flex: 0 0 50px;
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.palette.onSuccess : `rgb(${convert.hex.rgb(theme.palette.onSuccess)},0.2)`};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.onSuccess : `rgb(${convert.hex.rgb(theme.palette.onSuccess)},0.05)`};
  transition: all 0.5s;
  position: relative;
  svg {
    transition: all 0.5s;
    PATH {
      transition: all 0.5s;
      fill: ${({ theme, selected }) => (selected ? theme.palette.onSecondary : theme.palette.onSuccess)};
    }
  }
`;

export const Line = styled.div<{ selected: boolean }>`
  height: 1px;
  flex: 1;
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.onSuccess : `rgb(${convert.hex.rgb(theme.palette.onSuccess)},0.2)`};
  transition: all 0.5s;
`;

export const Text = styled.span`
  position: absolute;
  bottom: ${({ theme }) => `-${theme.dim[4]}`};
  display: block;
  width: max-content;
  transform: translateX(50%);
  right: 50%;
`;
