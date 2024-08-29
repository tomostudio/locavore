import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Container from '@/components/modules/container'
import { useAppContext } from 'context/state'
import { useEffect, useState } from 'react'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import NxtNavigation from '@/components/utils/nxtNavigation'
import ButtonViewFacilities from '@/components/modules/nxt/facilities/buttonViewFacilities'
import ViewComponent from '@/components/modules/nxt/facilities/viewComponent'

const FeaturesAndFacilities = ({
  homeAPI,
  facilitiesAPI,
  facilitiesListAPI,
  settingAPI,
  footerAPI,
  facilitiesListScroll,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [setting] = settingAPI
  const [footer] = footerAPI
  const [facilities] = facilitiesAPI
  const [showComponent, setShowComponent] = useState('grid-view')

  // Menghitung sisa pembagian dengan 3
  const remainder = facilitiesListAPI.length % 3

  const numberToAdd = remainder === 0 ? 0 : 3 - remainder

  const facilitiesListFill = facilitiesListAPI.concat(
    Array(numberToAdd).fill({}),
  )

  const facilitiesListGrid = facilitiesListFill.map((e, index) => {
    // Menghitung sisa pembagian dengan 2
    const remainderMob = facilitiesListAPI.length % 2

    const numberToAddMob = remainderMob === 0 ? 0 : 2 - remainderMob
    const facilitiesListGridMobile = facilitiesListAPI.concat(
      Array(numberToAddMob).fill({}),
    )
    if (facilitiesListFill.length > facilitiesListGridMobile.length) {
      if (index + 1 > facilitiesListGridMobile.length) {
        return {
          mobile: 'hidden',
        }
      } else {
        return { ...e }
      }
    } else {
      return { ...e }
    }
  })

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
        title={facilities.heading}
        pagelink={router.pathname}
        inputSEO={
          typeof facilities !== 'undefined' &&
          typeof facilities.seo !== 'undefined' &&
          facilities.seo
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
        <HeaderGap />
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.6,
              },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
            },
          }}
          className="w-full flex flex-col overflow-hidden"
        >
          <Container className="flex flex-col items-center mt-20 md:mt-44">
            <h1 className="text-[#BEC29D] text-center font-funkturm text-[2.5rem] sm:text-t-header md:text-d-header m-0">
              FEATURES
            </h1>
            <ButtonViewFacilities setShowComponent={setShowComponent} />
          </Container>
          <ViewComponent
            showComponent={showComponent}
            facilitiesListGrid={facilitiesListGrid}
            facilitiesListScroll={facilitiesListScroll}
          />
        </motion.div>
        <NxtNavigation />
        <Footer footer={footer} mailchimp={setting.mailchimpID} />
      </motion.main>
    </Layout>
  )
}

export async function getStaticProps() {
  const facilitiesAPI = await client.fetch(`
  *[_type == "facilities"]
  `)
  const facilitiesListAPI = await client.fetch(`
  *[_type == "facilitiesList"] | order(order asc)
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
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"] | order(order asc)
  `)

  const facilitiesListScroll = facilitiesListAPI.map((e) => ({
    ...e,
    zIndex: Math.floor(Math.random() * facilitiesListAPI.length) + 1,
  }))
  return {
    props: {
      homeAPI,
      facilitiesAPI,
      facilitiesListAPI,
      settingAPI,
      footerAPI,
      headerAPI,
      facilitiesListScroll,
      familyListAPI,
    },
  }
}

export default FeaturesAndFacilities
