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

import feature1 from '@/public/nxt2/features/feature1.png'
import feature4 from '@/public/nxt2/features/feature4.png'
import feature5 from '@/public/nxt2/features/feature5.png'
import feature6 from '@/public/nxt2/features/feature6.png'
import feature1_color from '@/public/nxt2/features/feature1_color.png'
import feature4_color from '@/public/nxt2/features/feature4_color.png'
import feature5_color from '@/public/nxt2/features/feature5_color.png'
import feature6_color from '@/public/nxt2/features/feature6_color.png'
import NxtNavigation from '@/components/utils/nxtNavigation'
import ButtonViewFacilities from '@/components/modules/nxt/facilities/buttonViewFacilities'
import ViewComponent from '@/components/modules/nxt/facilities/viewComponent'

const FeaturesAndFacilities = ({
  facilitiesAPI,
  seoAPI,
  footerAPI,
  facilitiesListScroll,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [showComponent, setShowComponent] = useState('image-view')

  // Menghitung sisa pembagian dengan 3
  const remainder = facilitiesAPI.length % 3

  const numberToAdd = remainder === 0 ? 0 : 3 - remainder

  const facilitiesListFill = facilitiesAPI.concat(Array(numberToAdd).fill({}))

  const facilitiesListGrid = facilitiesListFill.map((e, index) => {
    // Menghitung sisa pembagian dengan 2
    const remainderMob = facilitiesAPI.length % 2

    const numberToAddMob = remainderMob === 0 ? 0 : 2 - remainderMob
    const facilitiesListGridMobile = facilitiesAPI.concat(
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
        title={'Our Facilities'}
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
              OUR FACILITIES
            </h1>
            <ButtonViewFacilities setShowComponent={setShowComponent} />
          </Container>
          <ViewComponent
            showComponent={showComponent}
            facilitiesList={facilitiesAPI}
            facilitiesListGrid={facilitiesListGrid}
            facilitiesListScroll={facilitiesListScroll}
          />
        </motion.div>
        <NxtNavigation />
        <Footer footer={footer} mailchimp={seo.mailchimpID} />
      </motion.main>
    </Layout>
  )
}

export async function getStaticProps() {
  const facilitiesAPI = await client.fetch(`
  *[_type == "facilitiesList"]
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

  const facilitiesListScroll = facilitiesAPI.map((e) => ({
    ...e,
    zIndex: Math.floor(Math.random() * facilitiesAPI.length) + 1,
  }))
  return {
    props: {
      facilitiesAPI,
      seoAPI,
      footerAPI,
      headerAPI,
      facilitiesListScroll,
    },
  }
}

export default FeaturesAndFacilities
