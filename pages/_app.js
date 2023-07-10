import '../styles/scss/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => { 
    document.documentElement.className = pageProps.pageData.Dark != null && pageProps.pageData.Dark == true ? 'theme-dark' : '';
  });

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp

