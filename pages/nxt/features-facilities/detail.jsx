import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/modules/container'

import leaf from '@/public/nxt2/leaf.png'
import feature1_big from '@/public/nxt2/features/feature1_big.png'
import feature2_big from '@/public/nxt2/features/feature2_big.png'
import StickyButton from '@/components/modules/stickyButton'
import PillButton from '@/components/modules/pillButton'

const FeaturesAndFacilitiesDetail = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

  useEffect(() => {
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
        title={'Features & Facilities'}
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
        <div className="relative w-full h-full flex mb-10">
          <div className="absolute top-0 left-0 w-1/2 h-full">
            <div className="w-full h-full flex flex-col">
              <div className="relative w-full h-screen">
                <Image
                  src={feature1_big}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative w-full h-screen">
                <Image
                  src={feature2_big}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <Container className="relative w-full flex">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-screen" />
              <div className="w-full h-screen" />
            </div>
            <div className="w-full h-screen sticky top-0 left-0 setflex-center">
              <h1 className="text-[2.813rem] m-0 text-[#BEC29D] font-funkturm">
                DISTILLERY
              </h1>
              <div className="relative w-[165px] h-[165px] my-16">
                <Image
                  src={leaf}
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="text-center text-[1.25rem] text-white max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </p>
            </div>
          </Container>
        </div>
        <div
          className={`sticky bottom-10 mb-10 left-0 w-full z-40 setflex-center`}
        >
          <PillButton
            destination="/nxt/features-facilities"
            arrow="left"
            className="uppercase bg-white"
          >
            FEATURES & FACILITIES
          </PillButton>
        </div>
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

export default FeaturesAndFacilitiesDetail
