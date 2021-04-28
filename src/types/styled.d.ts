import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      back: string;
      onBack: string;
      primary: string;
      onPrimary: string;
      secondary: string;
      onSecondary: string;
      surface: string;
      onSurface: string;
      error: string;
      onError: string;
      success: string;
      onSuccess: string;
      disabled: string;
      stroke: string;
      strokeVariant: string;
      overlay: string;
    };
    dim: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
    };
    defaults: {
      fontName: string;
      direction: string;
      borderRadius: string;
      borderRadiusVariant: string;
    };
    typography: {
      headline1: string;
      bodyMdMedium: string;
      bodyMdNormal: string;
      bodySmMedium: string;
      subtitleXsNormal: string;
      subtitleMdNormal: string;
      infoXsMedium: string;
    };
    breakPoints: {
      mobileSm: string;
      mobileMd: string;
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
    };
  }
}
