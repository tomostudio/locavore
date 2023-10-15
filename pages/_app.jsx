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
      if(document.querySelector('body').classList.contains("blackBody")) {
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
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,viewport-fit=cover"
        />
        {/* FAVICON  */}
      </Head>

      <AppWrapper>
        <AnimatePresence>
          <Header header={pageProps.headerAPI} footer={pageProps.footerAPI} />
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
