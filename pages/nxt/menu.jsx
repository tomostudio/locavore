import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'

import leaf from '@/public/nxt2/leaf.png'

import { useContext, useEffect } from 'react'
import client from '@/helpers/sanity/client'
import Image from 'next/legacy/image'
import { useAppContext } from 'context/state'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import NxtNavigationDesktop from '@/components/utils/nxtNavigation/desktop'
import NxtNavigation from '@/components/utils/nxtNavigation'
import urlFor from '@/helpers/sanity/urlFor'
import EditorComponent from '@/components/modules/editorial/editorComponent'

const Menu = ({ menuAPI, seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [menu] = menuAPI

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = 'black'
    window.scroll(0, 0)
    appContext.setHeader({
      headerStyle: 'blur-white',
    })

    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  return (
    <Layout>
      <SEO
        title={'Menu'}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="no-select-all bg-black"
      >
        <div className="relative w-full aspect-[3/4] sm:aspect-[95/33] flex items-center sm:items-end">
          <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
            <Image
              src={urlFor(menu.hero.image.imageDesktop).width(1140).url()}
              alt={menu.hero.image.imageDesktop.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={urlFor(menu.hero.image.imageDesktop)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full sm:hidden">
            <Image
              src={urlFor(menu.hero.image.imageMobile).width(375).url()}
              alt={menu.hero.image.imageMobile.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={urlFor(menu.hero.image.imageMobile)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
          <div className="relative z-10 sm:mb-10 md:mb-20 w-full setflex-center max-w-5xl px-10 max-md:px-5 mx-auto text-white">
            <h1 className="m-0 font-funkturm text-m-additionalTitle md:text-d-additionalTitle">
              {menu.hero.title}
            </h1>
            <span className="mt-2 text-[1.125rem] md:text-[1.875rem]">
              {menu.hero.description}
            </span>
          </div>
        </div>
        <div className="w-full h-full bg-black">
          <Container className="bg-black flex flex-col">
            <div className="max-w-4xl px-10 max-md:px-5 mx-auto my-24 flex flex-col items-center space-y-20 text-white">
              <span className="block text-[2.125rem] sm:text-t-header md:text-d-header text-center leading-[120%]">
                {menu.title}
              </span>
              <div className="relative mx-auto my-10">
                <Image src={leaf} alt="Leaf" objectFit='contain' />
              </div>
              <EditorComponent data={menu.article[0].content} color={'#fff'} />
            </div>
          </Container>
        </div>
        <NxtNavigation focus="menu" />
      </motion.main>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticProps() {
  const menuAPI = await client.fetch(`
  *[_type == "menu"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
                    *[_type == "footer"]
                    `)
  const headerAPI = await client.fetch(`
                    *[_type == "header"]
                    `)
  return {
    props: {
      menuAPI,
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default Menu
