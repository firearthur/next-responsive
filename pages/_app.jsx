/* eslint-disable */
import React, { useEffect } from 'react';
import Head from 'next/head';
import NextApp from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/molecules/themes';
import { appWithTranslation } from '../i18n';

class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles && jssStyles.parentElement.removeChild(jssStyles);
      
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

const AppWithTranslations = appWithTranslation(App);

export default AppWithTranslations;
