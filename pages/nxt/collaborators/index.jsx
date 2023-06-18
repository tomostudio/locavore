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
import NxtNavigation from '@/components/utils/nxtNavigation'

import hero from '@/public/nxt2/collab/hero.png'
import hero_mobile from '@/public/nxt2/collab/hero_mobile.png'
import card1 from '@/public/nxt2/collab/card1.png'
import card_bnw1 from '@/public/nxt2/collab/card_bnw1.png'
import HeroComponent from '@/components/modules/nxt/hero'
import CollaboratorCard from '@/components/modules/nxt/collaboratorCard'

const OurCollaborators = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const repeatArr = ['', '', '', '', '', '', '', '', '']
  const defaultItemToShow = 6
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    repeatArr.length > defaultItemToShow ? true : false,
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
        title={'Our Collaborators'}
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
            title="OUR COLLABORATORS"
            imageDesktop={hero}
            imageMobile={hero_mobile}
          />
          <div className="w-full h-full flex flex-wrap mt-11 md:mt-20 mb-16 border-b sm:border-y border-white collaborators-border">
            <CollaboratorCard
              data={repeatArr}
              role="Work Role"
              location="Jakarta, Indonesia"
              title="Lorem Ipsum Dolor Sit Amet"
              image={card1}
              image_bnw={card_bnw1}
              itemToShow={itemToShow}
            />
          </div>
          {showMoreButton && (
            <FancyLink
              className={`w-fit p-4 text-d-small mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              onClick={() => {
                setItemToShow(itemToShow + defaultItemToShow)
                setShowMore(repeatArr.length > itemToShow + defaultItemToShow)
              }}
            >
              VIEW MORE
            </FancyLink>
          )}
        </div>
        <NxtNavigation focus="collab" />
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

export default OurCollaborators
