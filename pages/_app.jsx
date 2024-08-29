import { useEffect, useState } from 'react'
import '@/styles/main.scss'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AppWrapper } from '../context/state.jsx'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '@/components/modules/header.jsx'
import Script from 'next/script'
import Head from 'next/head'

import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname.startsWith('/nxt') || router.pathname === '/') {
      document.querySelector('body').classList.add('blackBody')
    } else {
      if (document.querySelector('body').classList.contains('blackBody')) {
        document.querySelector('body').classList.remove('blackBody')
      }
    }

    return () => {
      document.querySelector('body').classList.remove('blackBody')
    }
  }, [router.pathname])

  useEffect(() => {
    history.scrollRestoration = 'manual'
  }, [])
  return (
    <>
      {pageProps.seoAPI && pageProps.seoAPI[0].googleID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${pageProps.seoAPI[0].googleID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${pageProps.seoAPI[0].googleID}');
  `}
          </Script>
        </>
      )}
      {pageProps.seoAPI && pageProps.seoAPI[0].facebookID && (
        <>
          <Script strategy="afterInteractive">
            {`
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pageProps.seoAPI[0].facebookID}');
    fbq('track', 'PageView');
  `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{
                display: 'none',
              }}
              src={`https://www.facebook.com/tr?id=${pageProps.seoAPI[0].facebookID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      <Head>
        {/* FAVICON  */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* FAVICON  */}
      </Head>

      <AppWrapper>
        <AnimatePresence>
          <Header header={pageProps.headerAPI} family={pageProps.familyListAPI} footer={pageProps.footerAPI} />
        </AnimatePresence>
        <ParallaxProvider>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </ParallaxProvider>
      </AppWrapper>
    </>
  )
}
