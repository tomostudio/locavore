import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'

import menu_hero from '@/public/nxt2/menu_hero.png'
import menu_group from '@/public/nxt2/menu_group.png'
import leaf from '@/public/nxt2/leaf.png'

import { useContext, useEffect } from 'react'
import client from '@/helpers/sanity/client'
import Image from 'next/image'
import { useAppContext } from 'context/state'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import NxtNavigation from '@/components/utils/nxtNavigation'

const Menu = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

  useEffect(() => {
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
        <div className="relative w-full h-[500px] flex items-end">
          <Image src={menu_hero} alt="" fill style={{ objectFit: 'cover' }} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
          <div className="relative z-10 mb-16 w-full setflex-center max-w-5xl px-10 max-md:px-5 mx-auto text-white">
            <h1 className="m-0 font-funkturm text-[7.5rem]">ARTEFACTS</h1>
            <span className="mt-2 text-[1.875rem]">LOCAVORE NXT Q1 2023</span>
          </div>
        </div>
        <div className="w-full h-full bg-black">
          <Container className="bg-black flex flex-col">
            <div className="max-w-4xl px-10 max-md:px-5 mx-auto my-24 flex flex-col items-center space-y-20 text-white">
              <span className="block text-[4.688rem] text-center leading-[120%]">
                A History of Locavore in 50 Edible Ideas
              </span>
              <div className="relative w-[165px] h-[165px]">
                <Image
                  src={leaf}
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec massa viverra, aliquet dui ac, gravida magna. Lorem ipsum
                dolor sit amet, dolor consectetur adipiscing elit. Proin nec
                massa viverra, aliquet dui ac, amett gravida magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor consectetur adipiscing elit. <br /> <br /> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
                massa viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor
                sit amet, dolor consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, amett gravida magna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Proin nec massa viverra,
                aliquet dui ac, gravida magna.
              </p>
            </div>
            <div className="image w-full fh-full mb-24 space-y-3">
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <Image src={menu_group} />
              </div>
              <div className="w-full flex space-x-3 max-md:space-x-2">
                <div className="relative w-full aspect-w-16 aspect-h-9">
                  <Image
                    src={menu_group}
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative w-full aspect-w-16 aspect-h-9">
                  <Image
                    src={menu_group}
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
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
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default Menu
