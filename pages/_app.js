import React from 'react'
import App, { Container } from 'next/app'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import workers from '../workers'

injectGlobal`
  * { box-sizing: border-box;}
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: stretch;
    color: #382F32;
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
  }

  body > div {
    flex: 1;
    display: flex;
    align-items: stretch;
  }
`

const Layout = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a363b;
`

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, workers }
  }

  render() {
    const { Component, pageProps, workers } = this.props

    return (
      <Layout>
        <Container>
          <Component {...pageProps} data={workers} />
        </Container>
      </Layout>
    )
  }
}
