import { NextComponentType, NextPageContext } from 'next';
import type { AppContext, AppProps } from 'next/app';
import React, { ReactChild } from 'react';
import { DeviceType, GetLayout, ThemeType } from 'src/types/main';
import { ThemeProvider } from 'styled-components';

import CookiesName from '@/constants/cookies-name';
import { ThemeTypes } from '@/constants/theme-types';
import DeviceTypeContext from '@/context/device-type-context';
import ThemeContext from '@/context/theme-context';
import { getCookie, setCookie } from '@/helpers/cookie';
import MainLayout from '@/layouts/main-layout/main-layout';
import GlobalStyle from '@/providers/theme/GlobalStyle';
import darkTheme from '@/providers/theme/theme.dark';
import lightTheme from '@/providers/theme/theme.light';
import { reduxWrap } from '@/redux/store';
import CheckUserAgent from '@/utils/check-user-agent';

type AppExtendedProps = {
  previousTheme: ThemeType;
  deviceType: DeviceType;
  Component: NextComponentType<NextPageContext, unknown, Record<string, unknown>> & { getLayout: GetLayout };
} & AppProps;

function App({ Component, pageProps, previousTheme, deviceType }: AppExtendedProps) {
  const [theme, setTheme] = React.useState(previousTheme);

  const toggleTheme = async () => {
    if (theme === ThemeTypes.LIGHT) {
      setTheme(ThemeTypes.DARK);
      setCookie(CookiesName.Theme, ThemeTypes.DARK);
    } else {
      setTheme(ThemeTypes.LIGHT);
      setCookie(CookiesName.Theme, ThemeTypes.LIGHT);
    }
  };

  const getTheme = (themeName: ThemeType) => {
    switch (themeName) {
      case ThemeTypes.DARK:
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  const getLayout =
    Component.getLayout || ((page: ReactChild) => <MainLayout deviceType={deviceType}>{page}</MainLayout>);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />

        {getLayout(
          <>
            <DeviceTypeContext.Provider value={{ deviceType }}>
              <Component deviceType={deviceType} {...pageProps} />
            </DeviceTypeContext.Provider>
          </>,
          deviceType,
        )}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  let previousTheme = null;
  const userAgent = ctx.req.headers['user-agent'];

  const deviceType = CheckUserAgent(userAgent);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  if (ctx.req) {
    previousTheme = await getCookie(CookiesName.Theme, ctx.req.headers.cookie);
  }
  return {
    pageProps,
    previousTheme,
    deviceType,
  };
};

export default reduxWrap.withRedux(App);
