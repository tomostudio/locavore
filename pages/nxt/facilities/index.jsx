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
  seoAPI,
  footerAPI,
  facilitiesList,
  facilitiesListScroll,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [showComponent, setShowComponent] = useState('image-view')

  // Menghitung sisa pembagian dengan 3
  const remainder = facilitiesList.length % 3

  const numberToAdd = remainder === 0 ? 0 : 3 - remainder

  const facilitiesListFill = facilitiesList.concat(Array(numberToAdd).fill({}))

  const facilitiesListGrid = facilitiesListFill.map((e, index) => {
    // Menghitung sisa pembagian dengan 2
    const remainderMob = facilitiesList.length % 2

    const numberToAddMob = remainderMob === 0 ? 0 : 2 - remainderMob
    const facilitiesListGridMobile = facilitiesList.concat(
      Array(numberToAddMob).fill({}),
    )
    if (facilitiesListFill.length > facilitiesListGridMobile.length) {
      if (index+1 > facilitiesListGridMobile.length) {
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
          className="w-full min-h-screen flex flex-col overflow-hidden"
        >
          <Container className="flex flex-col items-center mt-20 md:mt-44">
            <h1 className="text-[#BEC29D] text-center font-funkturm text-m-header sm:text-t-header md:text-d-header max-w-[180px] sm:max-w-none m-0">
              OUR FACILITIES
            </h1>
            <ButtonViewFacilities setShowComponent={setShowComponent} />
          </Container>
          <ViewComponent
            showComponent={showComponent}
            facilitiesList={facilitiesList}
            facilitiesListGrid={facilitiesListGrid}
            facilitiesListScroll={facilitiesListScroll}
          />
        </motion.div>
        <NxtNavigation focus="facilities" />
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

  const facilitiesList = [
    {
      title: 'LOCALAB',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'bottom',
    },
    {
      title: 'DISTILLERY',
      image1: feature4,
      image2: feature4_color,
      size: 120,
      position: 'top',
    },
    {
      title: 'FOOD FOREST',
      image1: feature6,
      image2: feature6_color,
      size: 120,
      position: 'center',
    },
    {
      title: 'BAR',
      image1: feature5,
      image2: feature5_color,
      size: 'normal',
      position: 'center',
    },
    {
      title: 'CANTEEN',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'top',
    },
    {
      title: 'DINING RESTAURANT',
      image1: feature4,
      image2: feature4_color,
      size: 120,
      position: 'bottom',
    },
    {
      title: 'MUSHROOM CHAMBER',
      image1: feature6,
      image2: feature6_color,
      size: 120,
      position: 'center',
    },
    {
      title: 'ALGAE CULTURE',
      image1: feature5,
      image2: feature5_color,
      size: 'normal',
      position: 'center',
    },
    {
      title: 'BASEMENT',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'bottom',
    },
    {
      title: 'CONCEPT STORE',
      image1: feature4,
      image2: feature4_color,
      size: 120,
      position: 'top',
    },
    {
      title: 'GALLERY',
      image1: feature6,
      image2: feature6_color,
      size: 120,
      position: 'center',
    },
    {
      title: 'GARDENS',
      image1: feature5,
      image2: feature5_color,
      size: 'normal',
      position: 'center',
    },
    {
      title: 'AUDITORIUM',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'bottom',
    },
  ]

  const facilitiesListScroll = facilitiesList.map((e) => ({
    ...e,
    zIndex: Math.floor(Math.random() * facilitiesList.length) + 1,
  }))
  return {
    props: {
      seoAPI,
      footerAPI,
      headerAPI,
      facilitiesList,
      facilitiesListScroll,
    },
  }
}

export default FeaturesAndFacilities
