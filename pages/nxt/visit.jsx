import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect, useState } from 'react'
import FancyLink from '@/components/utils/fancyLink'

import hero from '@/public/nxt2/visit/hero.png'
import map from '@/public/nxt2/visit/map.png'
import hero_mobile from '@/public/nxt2/visit/hero_mobile.png'
import Container from '@/components/modules/container'
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import NxtNavigation from '@/components/utils/nxtNavigation'
import HeroComponent from '@/components/modules/nxt/hero'
import EventCard from '@/components/modules/nxt/eventCard'
import Image from 'next/image'

const Visit = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

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
        title={'Visit'}
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
        <div className="relative w-full h-full setflex-center">
          <HeroComponent
            title="VISIT"
            imageDesktop={hero}
            imageMobile={hero_mobile}
          />
          <Container className="h-full flex flex-col mt-11 md:mt-20 mb-10 md:mb-16 gap-8 text-white">
            {/* {eventList.slice(0, itemToShow).map((_, id) => (
              <EventCard
                key={id}
                date="10 OCTOBER 2023"
                image={card}
                image_bnw={card_bnw}
                title="Event Title"
                description="Lorem ispum dolor sit amet, consecteur des adispacing dolor sit amet."
              />
            ))} */}
            <span className="font-serif text-[2.5rem] text-center">
              Plan to visit us? <br /> Check out our information below!
            </span>

            <div className="setflex-center mx-auto text-center w-full max-w-3xl editor-styling">
              {/* <EditorComponent /> */}
            </div>
            <FancyLink
              className={`w-fit p-4 mx-auto text-d-small mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
            >
              BOOK HERE
            </FancyLink>
            {/* <div className="relative w-full grid grid-cols-2">
              <div className="w-full"></div>
              <div className="w-full"></div>
            </div> */}
            <span className="font-serif text-[2.5rem] text-center">
              What are you waiting for?
              <br />
              Come and visit us now!
            </span>
            <FancyLink
              className={`w-fit p-4 mx-auto text-d-small mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
            >
              BOOK HERE
            </FancyLink>
          </Container>
        </div>
        <NxtNavigation focus="events" />
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

export default Visit
