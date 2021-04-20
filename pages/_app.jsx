import { appWithTranslation } from 'next-i18next';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from '@/context/theme-context';
import { getCookie, setCookie } from '@/helpers/cookie';
import MainLayout from '@/layouts/main-layout/main-layout';
import GlobalStyle from '@/providers/GlobalStyle';
import darkTheme from '@/providers/theme/theme.dark';
import lightTheme from '@/providers/theme/theme.light';
import { reduxWrap } from '@/redux/store';

function App({ Component, pageProps, previousTheme }) {
  const [theme, setTheme] = React.useState(previousTheme);

  const toggleTheme = async () => {
    if (theme === 'light') {
      setTheme('dark');
      setCookie('theme', 'dark');
    } else {
      setTheme('light');
      setCookie('theme', 'light');
    }
  };

  const getTheme = (name) => {
    switch (name) {
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return getLayout(
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeContext.Consumer>
          {({ theme: themeValue }) => (
            <ThemeProvider theme={getTheme(themeValue)}>
              <GlobalStyle />
              <Component toggleTheme={toggleTheme} {...pageProps} />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>,
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  let previousTheme = null;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  if (ctx.req) {
    previousTheme = await getCookie('theme', ctx.req.headers.cookie);
  }
  return {
    pageProps,
    previousTheme,
  };
};

export default reduxWrap.withRedux(appWithTranslation(App));
