import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'

import hero from '@/public/nxt2/events/hero.png'
import Container from '@/components/modules/container'
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import NxtNavigationDesktop from '@/components/utils/nxtNavigation/desktop'

const EventsAndPrograms = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const eventList = ['', '', '', '', '', '', '', '', '']
  const defaultItemToShow = 6
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    eventList.length > defaultItemToShow ? true : false,
  )

  useEffect(() => {
    window.scrollTo(0, 0)
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
        title={'Events & Programs'}
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
          <div className="relative w-full h-[350px] flex items-center md:items-end justify-center">
            <Image src={hero} alt="" fill style={{ objectFit: 'cover' }} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
            <h1 className="relative text-m-header md:text-d-header text-[#BEC29D] font-funkturm md:mb-14 max-w-xs md:max-w-none text-center">
              EVENTS & PROGRAMS
            </h1>
          </div>
          <Container className="w-full h-full flex flex-col md:flex-row md:flex-wrap mt-20 mb-10 md:mb-16 gap-8">
            {eventList.slice(0, itemToShow).map((_, id) => (
              <FancyLink
                key={id}
                destination="/nxt/events-programs/detail"
                className="group hover:border-[#BEC29D] hover:text-black hover:bg-[#BEC29D] w-full md:w-[calc((100%/3)-2rem)] pointer-events-auto cursor-pointer transition-all duration-300 border-2 border-white rounded-xl flex flex-col p-8 text-white"
              >
                <span className="text-m-body md:text-d-body">
                  10 OCTOBER 2023
                </span>
                <div className="event-image relative w-full aspect-w-1 aspect-h-1 my-5 border-2 group-hover:border-[#BEC29D] border-white">
                  <Image src={card_bnw} className="group-hover:hidden" />
                  <Image src={card} className="hidden group-hover:block" />
                </div>
                <span className="font-bold text-[1.25rem] md:text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-m-small md:text-sm mt-1 text-left">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </FancyLink>
            ))}
          </Container>
          {showMoreButton && (
            <FancyLink
              className={`w-fit p-4 text-m-small md:text-sm mb-10 md:mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              onClick={() => {
                setItemToShow(itemToShow + defaultItemToShow)
                setShowMore(eventList.length > itemToShow + defaultItemToShow)
              }}
            >
              VIEW MORE
            </FancyLink>
          )}
        </div>
        <NxtNavigationDesktop focus="events" />
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

export default EventsAndPrograms
