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
import ViewMoreButton from '@/components/utils/viewMoreButton'

const OurCollaborators = ({
  collaboratorAPI,
  collaboratorListAPI,
  seoAPI,
  footerAPI,
  headerAPI,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [collaborator] = collaboratorAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const defaultItemToShow = 12
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    Array(15).fill(collaboratorListAPI[0]).length > defaultItemToShow
      ? true
      : false,
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
            imageDesktop={collaborator.hero.imageDesktop}
            imageMobile={collaborator.hero.imageMobile}
          />
          <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-11 md:mt-20 mb-16 border-b sm:border-y border-white collaborators-border">
            <CollaboratorCard
              collaboratorListAPI={Array(4).fill(collaboratorListAPI[0])}
              itemToShow={itemToShow}
            />
          </div>
          {showMoreButton && (
            <ViewMoreButton
              data={Array(4).fill(collaboratorListAPI[0])}
              itemToShow={itemToShow}
              setItemToShow={setItemToShow}
              defaultItemToShow={defaultItemToShow}
              setShowMore={setShowMore}
            />
          )}
        </div>
        <NxtNavigation />
        <Footer footer={footer} mailchimp={seo.mailchimpID} />
      </motion.main>
    </Layout>
  )
}

export async function getStaticProps() {
  const collaboratorAPI = await client.fetch(`
    *[_type == "collaborator"]
    `)
  const collaboratorListAPI = await client.fetch(`
    *[_type == "collaboratorList"]
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
      collaboratorAPI,
      collaboratorListAPI,
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default OurCollaborators
