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
import feature1_color from '@/public/nxt2/features/feature1_color.png'
import feature4_color from '@/public/nxt2/features/feature4_color.png'
import feature5_color from '@/public/nxt2/features/feature5_color.png'
import feature6_color from '@/public/nxt2/features/feature6_color.png'

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
        className="no-select-all bg-black"
      >
        <HeaderGap />
        <div className="w-full min-h-screen flex flex-col overflow-hidden">
          <Container className="flex flex-col items-center mt-44">
            <h1 className="text-[#BEC29D] font-funkturm text-d-header m-0">
              FEATURES & FACILITIES
            </h1>
            <div className="mt-6 text-[#BEC29D]">
              <button
                id="image-view-btn"
                onClick={(e) => {
                  if (
                    document
                      .getElementById('image-view')
                      .classList.contains('hidden')
                  ) {
                    e.target.classList.add('opacity-40')
                    document
                      .getElementById('grid-view-btn')
                      .classList.remove('opacity-40')
                    document
                      .getElementById('image-view')
                      .classList.remove('hidden')
                    document.getElementById('grid-view').classList.add('hidden')
                  }
                }}
                className="mr-4 text-[1.375rem] opacity-40 font-serif italic font-medium transtion-all duration-300 hover:opacity-30"
              >
                Image View
              </button>
              •
              <button
                id="grid-view-btn"
                onClick={(e) => {
                  if (
                    document
                      .getElementById('grid-view')
                      .classList.contains('hidden')
                  ) {
                    e.target.classList.add('opacity-40')
                    document
                      .getElementById('image-view-btn')
                      .classList.remove('opacity-40')
                    document
                      .getElementById('grid-view')
                      .classList.remove('hidden')
                    document
                      .getElementById('image-view')
                      .classList.add('hidden')
                  }
                }}
                className="ml-4 text-d-body font-serif font-medium transtion-all duration-300 hover:opacity-30"
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
            className="relative w-full my-80 !overflow-visible"
            modules={[FreeMode, Navigation]}
          >
            <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative top-1/2 left-1/2 -translate-y-[65%] -translate-x-1/2 w-[150%]">
                <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                  <Image
                    src={feature1}
                    alt=""
                    className="absolute top-0 left-0 w-full h-auto duration-300 transition-all group-hover:opacity-0"
                  />
                  <Image src={feature1_color} className="w-full h-auto" />
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative left-1/2 -translate-x-1/2 w-[120%]">
                <Image
                  src={feature3}
                  alt=""
                  className="w-full h-auto transtion-all duration-300 group-hover:-rotate-12"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%]">
                <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                  <Image
                    src={feature4}
                    alt=""
                    className="absolute top-0 left-0 w-full h-auto transtion-all duration-300 group-hover:opacity-0"
                  />
                  <Image src={feature4_color} className="w-full h-auto" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="relative !w-[250px] !h-[250px] z-20 cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative w-full h-full">
                <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                  <Image
                    src={feature5}
                    alt=""
                    fill
                    className="absolute top-0 left-0 w-full h-full object-contain transtion-all duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={feature5_color}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 z-10 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative w-[120%] -top-[80%] left-1/2 -translate-x-1/2">
                <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                  <Image
                    src={feature6}
                    alt=""
                    className="absolute top-0 left-0 w-full h-auto transtion-all duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={feature6_color}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120%]">
                <Image
                  src={feature7}
                  alt=""
                  className="w-full h-auto transtion-all duration-300 group-hover:-rotate-12"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative left-1/2 -translate-x-1/2 w-[120%]">
                <Image
                  src={feature1}
                  alt=""
                  className="w-full h-auto transtion-all duration-300 group-hover:-rotate-12"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide
              className="relative !w-[250px] !h-[250px] cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120%]">
                <Image
                  src={feature3}
                  alt=""
                  className="w-full h-auto transtion-all duration-300 group-hover:-rotate-12"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide
              className="relative !w-[250px] !h-[250px] z-10 cursor-pointer transtion-all duration-300 hover:z-50 group"
              onClick={() => {
                window.location.href = '/nxt/features-facilities/detail'
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={feature2}
                  alt=""
                  fill
                  className="w-full h-full object-cover transtion-all duration-300 group-hover:-rotate-12"
                />
              </div>
            </SwiperSlide> */}
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
