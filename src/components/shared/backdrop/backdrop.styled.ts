import convert from 'color-convert';
import styled from 'styled-components';

import {BackdropTransition} from './backdrop';

export const Backdrop = styled.div<{
  $open?: boolean;
  $zIndex?: number;
  $transition?: BackdropTransition;
  $overlayColor?: string;
  $overlayAlpha?: number;
}>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  z-index: ${({$zIndex}) => $zIndex};
  justify-content: center;
  background-color: ${({$overlayColor, $overlayAlpha, theme}) =>
    `rgb(${convert.hex.rgb($overlayColor || theme.palette.onSurface)},${
      $overlayAlpha || 0.4
    })`};
  -webkit-tap-highlight-color: transparent;
  opacity: ${({$open}) => ($open ? 1 : 0)};
  visibility: ${({$open}) => ($open ? null : 'hidden')};
  transition: ${({$open, $transition}) =>
    $open
      ? `${$transition?.enter ? `${$transition?.enter}ms` : '0.5s'} opacity 0ms`
      : `${
          $transition?.exit ? `${$transition?.exit}ms` : '0.5s'
        } opacity  0ms,0ms visibility  ${
          $transition?.exit ? `${$transition?.exit}ms` : '0.5s'
        }`};
`;
