import { useEffect } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }  

  render() {

    const { pageData } = this.props?.__NEXT_DATA__?.props.pageProps;
    
    return (
      <Html lang="en" className={pageData != null && pageData.Dark != null && pageData.Dark == true ? 'theme-dark' : '' }> 
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SiteDocument