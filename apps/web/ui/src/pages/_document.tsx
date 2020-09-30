import React, { ReactElement } from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class CustomDocument extends Document<{
  styleTags: ReactElement[]
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()

    const initialProps = await Document.getInitialProps(ctx)

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags, initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
