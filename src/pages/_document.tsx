import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import flaticonAmazonia from '../assets/favicon.ico'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Luxury Hair Protein Products"/>
          <meta name="keywords" content="
          professional cosmetics,
          color-treated hair,
          shampoo & conditioner,
          natural ingredients for hair,
          straightener,
          blonde hair,
          blonde,
          Organic oil, 
          ZERO Formol,
          amazonian therapy, 
          protein treatment, 
          Brazilian blowout, 
          Brazilian keratin, 
          coffee extracts, 
          coconut extracts, 
          100% natural, 
          Home kit, 
          private label,     
          
          "/>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
           <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
           <link href="https://fonts.googleapis.com/css2?family=Archivo&display=swap" rel="stylesheet"/>

          <link rel="icon" href={flaticonAmazonia} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
