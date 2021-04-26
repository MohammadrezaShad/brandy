import { appWithTranslation } from 'next-i18next';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import CookiesName from '@/constants/cookies-name';
import { ThemeTypes } from '@/constants/theme-types';
import ThemeContext from '@/context/theme-context';
import { getCookie, setCookie } from '@/helpers/cookie';
import MainLayout from '@/layouts/main-layout/main-layout';
import GlobalStyle from '@/providers/theme/GlobalStyle';
import darkTheme from '@/providers/theme/theme.dark';
import lightTheme from '@/providers/theme/theme.light';
import { reduxWrap } from '@/redux/store';
import CheckUserAgent from '@/utils/check-user-agent';

function App({ Component, pageProps, previousTheme, deviceType }) {
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

  const getTheme = (name) => {
    switch (name) {
      case ThemeTypes.DARK:
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  const getLayout = Component.getLayout || ((page) => <MainLayout deviceType={deviceType}>{page}</MainLayout>);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />
        {getLayout(
          <>
            <Component deviceType={deviceType} {...pageProps} />
          </>,
          deviceType,
        )}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
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

export default reduxWrap.withRedux(appWithTranslation(App));
