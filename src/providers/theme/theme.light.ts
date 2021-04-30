import { DefaultTheme } from 'styled-components';

export const palette = {
  back: '#FFFFFF',
  onBack: '#F7F7F7',
  primary: '#999999',
  onPrimary: '#666666',
  secondary: '#FFC052',
  onSecondary: '#FFFFFF',
  surface: '#F7F7F7',
  onSurface: '#000000',
  error: '#EC008C',
  onError: '#E03636',
  success: '#40B247',
  onSuccess: '#667FC3',
  disabled: '#BBBAC0',
  stroke: '#EEEEEE',
  strokeVariant: '#EBEBEB',
  overlay: 'rgba(0,0,0,.5)',
};

export const dim = {
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
};

export const typography = {
  headline1: `font-size: 17px;
                font-weight: bold;
                line-height: 1.5;`,

  bodyMdMedium: `font-size: 14px;
                font-weight: bold;
                line-height: 1.5;`,

  bodyMdNormal: `font-size: 14px;
                font-weight: normal;
                line-height: 1.5;`,

  bodySmMedium: `font-size: 13px;
                font-weight: bold;
                line-height: 1.5;`,

  subtitleXsNormal: `
                font-size: 12px;
                font-weight: normal;
                line-height: 1.5;`,
  subtitleMdNormal: `
                font-size: 13px;
                font-weight: normal;
                line-height: 1.5;`,
  infoXsMedium: `
                font-size: 10px;
                font-weight: normal;
                line-height: 1.5;`,
};

const defaults = {
  fontName: 'Dana',
  direction: 'rtl',
  borderRadius: '8px',
  borderRadiusVariant: '4px',
};
const mediaQueries = (breakPoint: string): string => `@media only screen and (max-width: ${breakPoint})`;

const breakPoints = {
  mobileSm: mediaQueries('425px'),
  mobileMd: mediaQueries('460px'),
  mobile: mediaQueries('480px'),
  tablet: mediaQueries('768px'),
  laptop: mediaQueries('1024px'),
  laptopL: mediaQueries('1440px'),
  desktop: mediaQueries('1280px'),
  desktopL: mediaQueries('2560px'),
};

const theme: DefaultTheme = {
  palette,
  dim,
  typography,
  defaults,
  breakPoints,
};

export default theme;
