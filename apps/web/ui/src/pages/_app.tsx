import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>ZupDash</title>
      <link rel="shortcut icon" href="/img/star.svg" />
      <link rel="apple-touch-icon" href="/img/star.svg" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project starter to work with Nx Workspaces, TypeScript, React, NextJS and Styled Components, Storybook and StrapiJs"
      />
    </Head>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default CustomApp
