import convert from 'color-convert';
import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    flex: 0 0 40px;
  }
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.dim[1]};
  }
`;

export const Rate = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RateText = styled.span`
  display: inline-block;
  font-size: 35px;
  font-weight: 700;
  line-height: 1;
  color: ${({theme}) => theme.palette.onSurface};
`;

export const RateProgress = styled.div<{progress: string; secondary?: boolean}>`
  height: 5px;
  margin: 0 ${({theme}) => theme.dim[1]};
  flex: 0 0 ${({progress}) => progress || 0};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  background-color: ${({theme, secondary}) =>
    secondary ? theme.palette.secondary : theme.palette.primary};
`;

export const RateProgressTrack = styled.div<{secondary?: boolean}>`
  display: flex;
  flex: 1;
  background-color: ${({theme, secondary}) =>
    secondary
      ? `rgb(${convert.hex.rgb(theme.palette.secondary)},0.12)`
      : `rgb(${convert.hex.rgb(theme.palette.primary)},0.03)`};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
`;
