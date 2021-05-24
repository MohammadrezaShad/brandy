import convert from 'color-convert';
import styled from 'styled-components';

export const Wrapper = styled.section<{openDrawer: boolean}>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${({openDrawer}) => (openDrawer ? 'visible' : 'hidden')};
  z-index: 1000;
  transition-delay: ${({openDrawer}) => (openDrawer ? '0' : '0.5s')};
`;

export const Layout = styled.div<{openDrawer: boolean}>`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: ${({theme}) => theme.palette.back};
  height: 100%;
  width: 80%;
  box-shadow: 0px 0px 30px 0px
    ${({theme}) => `rgb(${convert.hex.rgb(theme.palette.onSurface)},0.05)`};
  will-change: transform;
  transform: ${({openDrawer}) =>
    openDrawer ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s;
`;

export const Container = styled.div``;

export const Backdrop = styled.div<{openDrawer: boolean}>`
  display: flex;
  position: absolute;
  will-change: opacity;
  height: 100%;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  opacity: ${({openDrawer}) => (openDrawer ? 1 : 0)};
  background-color: ${({theme}) => theme.palette.overlay};
  transition: opacity 0.5s;
`;
