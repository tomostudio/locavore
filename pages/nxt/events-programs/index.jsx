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

import Container from '@/components/modules/container'
import NxtNavigation from '@/components/utils/nxtNavigation'
import HeroComponent from '@/components/modules/nxt/hero'
import EventCard from '@/components/modules/nxt/eventCard'

const EventsAndPrograms = ({ eventAPI, eventListAPI, seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [event] = eventAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const defaultItemToShow = 6
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    eventListAPI.length > defaultItemToShow ? true : false,
  )

  useEffect(() => {
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
        title={event.heading}
        pagelink={router.pathname}
        inputSEO={
          typeof event !== 'undefined' &&
          typeof event.seo !== 'undefined' &&
          event.seo
        }
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
            title={event.heading}
            imageDesktop={event.hero.imageDesktop}
            imageMobile={event.hero.imageMobile}
          />
          <Container className="w-full mx-auto max-w-screen-xl h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-11 md:mt-20 mb-10 md:mb-16 gap-4 lg:gap-8 justify-items-center">
            {eventListAPI.slice(0, itemToShow).map((data, id) => (
              <EventCard
                key={id}
                slug={data.slug.current}
                date={data.sidebar.date}
                image={data.thumbnail.imageColor}
                image_bnw={data.thumbnail.imageBnw}
                title={data.title}
                description={data.thumbnail.shortDescription}
              />
            ))}
          </Container>
          {showMoreButton && (
            <FancyLink
              className={`w-fit p-4 text-m-small md:text-sm mb-10 md:mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              onClick={() => {
                setItemToShow(itemToShow + defaultItemToShow)
                setShowMore(
                  eventListAPI.length > itemToShow + defaultItemToShow,
                )
              }}
            >
              VIEW MORE
            </FancyLink>
          )}
        </div>
        <NxtNavigation />
      </motion.main>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticProps() {
  const eventAPI = await client.fetch(`
    *[_type == "event"]
    `)
  const eventListAPI = await client.fetch(`
    *[_type == "eventList"]
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
      eventAPI,
      eventListAPI,
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default EventsAndPrograms
