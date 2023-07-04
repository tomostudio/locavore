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

import hero from '@/public/nxt2/events/hero.png'
import hero_mobile from '@/public/nxt2/events/hero_mobile.png'
import Container from '@/components/modules/container'
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import NxtNavigation from '@/components/utils/nxtNavigation'
import HeroComponent from '@/components/modules/nxt/hero'
import EventCard from '@/components/modules/nxt/eventCard'
import ViewMoreButton from '@/components/utils/viewMoreButton'

const EventsAndPrograms = ({ eventAPI, eventListAPI, seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [event] = eventAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const eventList = ['', '', '', '', '', '', '', '', '']
  const defaultItemToShow = 6
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    Array(10).fill(eventListAPI[0]).length > defaultItemToShow ? true : false,
  )

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
          <HeroComponent
            title="EVENTS & PROGRAMS"
            imageDesktop={event.hero.imageDesktop}
            imageMobile={event.hero.imageMobile}
          />
          <Container className="h-full grid sm:grid-cols-2 lg:grid-cols-3 mt-11 md:mt-20 mb-10 md:mb-16 gap-8">
            {Array(10)
              .fill(eventListAPI[0])
              .slice(0, itemToShow)
              .map((data, id) => (
                <EventCard
                  key={id}
                  slug={data.slug.current}
                  date={data.date}
                  image={data.thumbnail.imageColor}
                  image_bnw={data.thumbnail.imageBnw}
                  title={data.title}
                  description={data.thumbnail.description}
                />
              ))}
          </Container>
          {showMoreButton && (
            <ViewMoreButton
              data={Array(10).fill(eventListAPI[0])}
              itemToShow={itemToShow}
              setItemToShow={setItemToShow}
              defaultItemToShow={defaultItemToShow}
              setShowMore={setShowMore}
            />
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
