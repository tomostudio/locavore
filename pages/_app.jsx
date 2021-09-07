import '@/styles/main.scss'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AppWrapper } from '../context/state.jsx'
import Navbar from '@/components/modules/navbar'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        noindex={true}
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        titleTemplate="%s | Locavore"
        defaultTitle="Locavore"
        description="Description"
        openGraph={{
          type: 'website',
          locale: 'en_ID',
          url: 'website.site',
          site_name: 'Swwim',
          images: [
            {
              url: '/images/social-share.jpg',
              width: 800,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: '@twitter',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <AppWrapper>
        <Navbar
          className={router.asPath === '/' ? `text-white` : `border-black`}
          logo={
            router.asPath === '/'
              ? `/locavore-white.png`
              : `/locavore-black.png`
          }
        />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </AppWrapper>
    </>
  )
}
