import React from 'react'
import NextApp, { Container } from 'next/app'

import Layout, { GlobalStyle } from '../components/Layout'

export default class App extends NextApp {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}