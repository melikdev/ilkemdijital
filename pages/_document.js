import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link crossOrigin rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link crossOrigin rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link crossOrigin rel="preconnect" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument