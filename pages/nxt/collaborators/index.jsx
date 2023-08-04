import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect, useState } from 'react'
import NxtNavigation from '@/components/utils/nxtNavigation'

import HeroComponent from '@/components/modules/nxt/hero'
import CollaboratorCard from '@/components/modules/nxt/collaboratorCard'
import ViewMoreButton from '@/components/utils/viewMoreButton'

const OurCollaborators = ({
  homeAPI,
  collaboratorAPI,
  collaboratorListAPI,
  settingAPI,
  footerAPI,
  headerAPI,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [collaborator] = collaboratorAPI
  const [setting] = settingAPI
  const [footer] = footerAPI
  const defaultItemToShow = 12
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    collaboratorListAPI.length > defaultItemToShow ? true : false,
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
        title={collaborator.heading}
        pagelink={router.pathname}
        inputSEO={
          typeof collaborator !== 'undefined' &&
          typeof collaborator.seo !== 'undefined' &&
          collaborator.seo
        }
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
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
            title={collaborator.heading}
            imageDesktop={collaborator.hero.imageDesktop}
            imageMobile={collaborator.hero.imageMobile}
          />
          <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-11 md:mt-20 mb-16 border-b sm:border-y border-white collaborators-border">
            <CollaboratorCard
              collaboratorListAPI={collaboratorListAPI}
              itemToShow={itemToShow}
            />
          </div>
          {showMoreButton && (
            <ViewMoreButton
              data={collaboratorListAPI}
              itemToShow={itemToShow}
              setItemToShow={setItemToShow}
              defaultItemToShow={defaultItemToShow}
              setShowMore={setShowMore}
            />
          )}
        </div>
        <NxtNavigation />
        <Footer footer={footer} mailchimp={setting.mailchimpID} />
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
  const homeAPI = await client.fetch(`
        *[_type == "homeNxt"]
        `)
  const settingAPI = await client.fetch(`
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
      homeAPI,
      collaboratorAPI,
      collaboratorListAPI,
      settingAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default OurCollaborators
