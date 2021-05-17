import convert from 'color-convert';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.dim[2]}`};
  max-height: 76px;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 63px;
  background-color: ${({ theme }) => theme.palette.onBack};
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({ theme }) => `rgb(${convert.hex.rgb(theme.palette.stroke)},0.7)`};
  transition: all 0.5s;
  padding: 0 ${({ theme }) => theme.dim[2]};
`;

export const Filter = styled.label``;

export const Icon = styled.span`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  top: 4px;
  left: 4px;
  transition: all 0.5s;
  PATH {
    stroke: ${({ theme }) => theme.palette.back};
  }
`;

export const FilterInput = styled.input`
  display: none;
  &:checked {
    & ~ ${Block} {
      background-color: ${({ theme }) => theme.palette.error};
      border-color: ${({ theme }) => theme.palette.error};
      & ${Icon} {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const Input = styled.input`
  display: none;
  &:checked {
    & ~ ${Wrapper} {
      max-height: 9999px;
      transition: max-height 0.5s cubic-bezier(1, 0, 1, 0);
    }
  }
`;

export const Continue = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const DotWrap = styled.label`
  display: inline-flex;
  justify-content: center;
`;

export const Dot = styled.span`
  display: inline-block;
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.onSurface};
  &:not(:last-child) {
    margin-left: 4px;
  }
`;

export const Color = styled.span`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({ theme }) => theme.palette.back};
  background-color: ${({ theme }) => theme.palette.onSuccess};
  margin-left: ${({ theme }) => theme.dim[1]};
`;
