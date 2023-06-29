import Document, { Head, Html, Main, NextScript } from 'next/document'

import { AppConfig } from '../utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.
export const metadata = {
  title: 'Rikesh Shrestha | Frontend Developer ',
  description: 'Best frontend developer in japan, based on ureshino, originally from nepal.',
}
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <title>
            {
              metadata.title
            }
          </title>
          <meta
            name="description"
            content={metadata.description}
            key="desc"
          />
          <meta property="og:title" content={metadata.title} />
          <meta
            property="og:description"
            content={metadata.description}
          />
          <meta
            property="og:image"
            content="/profile.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;