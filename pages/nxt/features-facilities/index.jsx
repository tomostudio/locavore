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
import NxtNavigation from '@/components/utils/nxtNavigation'

const FeaturesAndFacilities = ({ seoAPI, footerAPI }) => {
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
        <HeaderGap />
        <Container className="flex flex-col items-center mt-44">
          <h1 className="text-[#BEC29D] font-funkturm text-[4.688rem] m-0">
            FEATURES & FACILITIES
          </h1>
          <div className="mt-6 text-[#BEC29D] text-[1.25rem]">
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
                  document.getElementById('image-view').classList.add('hidden')
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
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className=" font-medium text-[1.25rem]">LOCALAB</span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                DISTILLERY
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                FOOD FOREST
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">BAR</span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                CANTEEN
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                DINING RESTAURANT
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                MUSHROOM CHAMBER
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                ALGAE CULTURE
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                BASEMENT
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                CONCEPT STORE
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                GALLERY
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                GARDENS
              </span>
            </FancyLink>
            <FancyLink className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black">
              <span className="text-white font-medium text-[1.25rem]">
                AUDITORIUM
              </span>
            </FancyLink>
            <div className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row">
            </div>
            <div className="w-[calc(100%/3)] border-y border-r border-white p-10 setflex-center-row">
            </div>
          </div>
        </div>
        <Swiper
          id="image-view"
          loop={true}
          effect="fade"
          slidesPerView="auto"
          speed={1000}
          className="relative w-full my-20 h-[583px]"
          modules={[FreeMode, Navigation]}
        >
          <SwiperSlide
            key={0}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative mb-32 w-full h-[250px]">
              <Image
                src={feature2}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={1} className="relative z-10 !w-[350px]">
            <div className="relative -left-32 w-full h-[525px]">
              <Image
                src={feature1}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={2}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-48 w-full h-[375px]">
              <Image
                src={feature3}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={3}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-64 mb-16 w-full h-[375px]">
              <Image
                src={feature4}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={0}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-[calc(5rem*4)] mb-32 w-full h-[250px]">
              <Image
                src={feature2}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={1} className="relative z-10 !w-[350px]">
            <div className="relative -left-[calc(5.6rem*5)] w-full h-[525px]">
              <Image
                src={feature1}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={2}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-[calc(5.3rem*6)] w-full h-[375px]">
              <Image
                src={feature3}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={3}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-[calc(5.1rem*7)] mb-16 w-full h-[375px]">
              <Image
                src={feature4}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={0}
            className="relative z-20 !w-[250px] h-full flex items-end bg-red-500"
          >
            <div className="relative -left-[calc(5rem*8)] mb-32 w-full h-[250px]">
              <Image
                src={feature2}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={1} className="relative z-10 !w-[350px]">
            <div className="relative -left-[calc(5.6rem*9)] w-full h-[525px]">
              <Image
                src={feature1}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={2}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-[calc(5.3rem*10)] w-full h-[375px]">
              <Image
                src={feature3}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={3}
            className="relative z-20 !w-[250px] h-full flex items-end"
          >
            <div className="relative -left-[calc(5.1rem*11)] mb-16 w-full h-[375px]">
              <Image
                src={feature4}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.main>
      <NxtNavigation focus="features" />
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
