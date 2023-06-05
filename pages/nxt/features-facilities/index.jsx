import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Container from '@/components/modules/container'
import { useAppContext } from 'context/state'
import { useEffect } from 'react'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'
import FancyLink from '@/components/utils/fancyLink'

import feature1 from '@/public/nxt2/features/feature1.png'
import feature2 from '@/public/nxt2/features/feature2.png'
import feature3 from '@/public/nxt2/features/feature3.png'
import feature4 from '@/public/nxt2/features/feature4.png'
import feature5 from '@/public/nxt2/features/feature5.png'
import feature6 from '@/public/nxt2/features/feature6.png'
import feature7 from '@/public/nxt2/features/feature7.png'
import NxtNavigationDesktop from '@/components/utils/nxtNavigation/desktop'

const FeaturesAndFacilities = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

  useEffect(() => {
    window.scrollTo(0, 0)
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
        className="no-select-all bg-black overflow-hidden"
      >
        <HeaderGap />
        <div className="w-full min-h-screen flex flex-col">
          <Container className="flex flex-col items-center mt-44">
            <h1 className="text-[#BEC29D] font-funkturm text-d-header m-0">
              FEATURES & FACILITIES
            </h1>
            <div className="mt-6 text-[#BEC29D] text-d-body">
              <button
                onClick={() => {
                  if (
                    document
                      .getElementById('image-view')
                      .classList.contains('hidden')
                  ) {
                    document
                      .getElementById('image-view')
                      .classList.remove('hidden')
                    document.getElementById('grid-view').classList.add('hidden')
                  }
                }}
                className="mr-4 font-serif italic font-medium transtion-all duration-300 hover:opacity-30"
              >
                Image View
              </button>
              •
              <button
                onClick={() => {
                  if (
                    document
                      .getElementById('grid-view')
                      .classList.contains('hidden')
                  ) {
                    document
                      .getElementById('grid-view')
                      .classList.remove('hidden')
                    document
                      .getElementById('image-view')
                      .classList.add('hidden')
                  }
                }}
                className="ml-4 font-serif font-medium transtion-all duration-300 hover:opacity-30"
              >
                Grid View
              </button>
            </div>
          </Container>
          <div id="grid-view" className="hidden w-full my-20">
            <div className="w-full flex flex-wrap">
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className=" font-medium text-d-body">LOCALAB</span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  DISTILLERY
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  FOOD FOREST
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">BAR</span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  CANTEEN
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  DINING RESTAURANT
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  MUSHROOM CHAMBER
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  ALGAE CULTURE
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  BASEMENT
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  CONCEPT STORE
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  GALLERY
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  GARDENS
                </span>
              </FancyLink>
              <FancyLink
                destination="/nxt/features-facilities/detail"
                className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black"
              >
                <span className="text-white font-medium text-d-body">
                  AUDITORIUM
                </span>
              </FancyLink>
              <div className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row"></div>
              <div className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row"></div>
            </div>
          </div>
          <Swiper
            id="image-view"
            loop={true}
            effect="fade"
            slidesPerView="auto"
            speed={1000}
            className="relative w-full my-96 !overflow-visible"
            modules={[FreeMode, Navigation]}
          >
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative top-1/2 left-1/2 -translate-y-[70%] -translate-x-1/2 w-[250%] h-[250%] -z-1 ">
                <Image
                  src={feature1}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative left-1/2 -translate-x-1/2 w-[220%] h-[220%] -z-1">
                <Image
                  src={feature3}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[220%] h-[220%] -z-1">
                <Image
                  src={feature4}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative w-full h-full -z-1">
                <Image
                  src={feature5}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative top-1/2 -translate-y-[77%] left-1/2 -translate-x-1/2 w-[220%] h-[220%] -z-1">
                <Image
                  src={feature6}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[220%] h-[220%] -z-1">
                <Image
                  src={feature7}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative left-1/2 -translate-x-1/2 w-[220%] h-[220%] -z-1">
                <Image
                  src={feature1}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[220%] h-[220%] -z-1">
                <Image
                  src={feature3}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative !w-[250px] !h-[250px]">
              <div className="relative w-full h-full -z-1">
                <Image
                  src={feature2}
                  alt=""
                  fill
                  className="w-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <NxtNavigationDesktop focus="features" />
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

export default FeaturesAndFacilities
