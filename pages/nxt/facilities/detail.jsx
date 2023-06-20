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
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import ScrollContainer from 'react-indiana-drag-scroll'

const FeaturesAndFacilitiesDetail = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

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
        className="relative bg-black"
      >
        <div className="relative w-full h-full grow flex flex-col md:flex-row mb-10 md:mb-0">
          {useMediaQuery('(min-width: 850px)') ? (
            <div className="w-1/2 h-full flex flex-col">
              <div className="relative aspect-[18/29]">
                <Image
                  src={feature1_big}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative aspect-[18/29]">
                <Image
                  src={feature2_big}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ) : (
            <ScrollContainer
              className={`relative w-full h-[500px] sm:h-[720px] scroll-smooth hide-scrollbar`}
              horizontal={true}
              vertical={false}
              hideScrollbars={false}
              nativeMobileScroll={true}
            >
              <div className="w-fit h-full flex items-center relative min-w-full">
                <div className="relative w-[80vw] h-full">
                  <Image
                    src={feature1_big}
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative w-[80vw] h-full">
                  <Image
                    src={feature2_big}
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </ScrollContainer>
          )}
        </div>
        <Container className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 mb-10 md:mb-0 w-full h-full flex justify-end">
          <div className="w-full md:w-1/2 md:h-screen md:sticky top-0 setflex-center md:pt-16">
            <h1 className="text-m-additionalHeader sm:text-[2rem] md:text-d-additionalHeader m-0 text-[#BEC29D] font-funkturm">
              DISTILLERY
            </h1>
            <div className="relative w-[87px] sm:w-[100px] md:w-[165px] h-[87px] sm:h-[100px] md:h-[165px] my-10 md:my-16">
              <Image src={leaf} alt="" fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="w-full  text-white editor-styling sm:max-w-md md:max-w-sm text-center mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor sit amet consectetur adipiscing elit. Proin nec
                massa dolor viverra, aliquet dui ac, amett gravida magna.
              </p>
            </div>
          </div>
          {/* <div className="relative w-full md:w-1/2 h-full pt-2 md:pt-16"></div> */}
        </Container>
        {/* Button Sticky */}
        {useMediaQuery('(min-width: 850px)') ? (
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end pointer-events-none">
            <StickyButton destination="/nxt/facilities" arrow="left">
              OUR FACILITIES
            </StickyButton>
          </div>
        ) : (
          <StickyButton destination="/nxt/facilities" arrow="left">
            OUR FACILITIES
          </StickyButton>
        )}
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
