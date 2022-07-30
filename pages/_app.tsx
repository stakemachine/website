import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Layout/Header'
import MinFooter from '../components/Layout/MinFooter'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="flex flex-col min-h-screen overflow-hidden">

        <Head>
          <link rel="icon" href="/oval-favicon.svg" />
        </Head>
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page sections */}
          <Component {...pageProps} />
        </main>

        {/*  Site footer */}
        <MinFooter />

      </div>
      <div className="container">
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-19PFKBKPMG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-19PFKBKPMG');
        `}
        </Script>
      </div>
    </>
  )
}

export default MyApp
