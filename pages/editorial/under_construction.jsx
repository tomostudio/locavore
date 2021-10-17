import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import ScrollContainer from 'react-indiana-drag-scroll'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import ArticleCard from '@/components/utils/articleCard'

// Helpers
import FancyLink from '@/components/utils/fancyLink'
import StickyButton from '@/components/utils/stickyButton'
import Container from '@/components/modules/container'

// install Swiper modules
SwiperCore.use([Pagination])

export default function UnderConstruction() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Layout>
      <NextSeo title="Under Construction" />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className="py-10 w-full h-full flex flex-col space-y-10">
        {/* Title */}
        <Container className="max-md:px-6">
          <div className="w-full h-full setflex-center">
            <span className="font-serif italic text-xl">
              Issue 0 — March 2021
            </span>
            <h1 className=" font-sans font-normal max-md:break-all max-md:text-center">
              Under Construction
            </h1>
          </div>
        </Container>
        {/* Card
         */}
        <div className="w-full flex" id="editorial-slider">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            preloadImages={true}
            centeredSlides={true}
            centerInsufficientSlides={true}
            autoHeight={true}
            setWrapperSize={true}
            id="swipe-editorial"
            onSwiper={(swiper) => {
              console.log(swiper.activeIndex)
              swiper.slides.forEach((slide, id) => {
                // print slides accoridng to position
                const articleCard = slide.querySelector('.article_wrapper')
                const curNumber = id - swiper.activeIndex
                const id_name =
                  curNumber !== 0
                    ? `${
                        curNumber > 0 ? 'next' : curNumber < 0 ? 'prev' : ''
                      }-${Math.abs(curNumber)} `
                    : 'center'
                articleCard.setAttribute('class', `article_wrapper ${id_name}`)
                console.log(articleCard, curNumber)
              })
            }}
            onSlideChange={(swiper) => {
              console.log(swiper.activeIndex)
              swiper.slides.forEach((slide, id) => {
                // print slides accoridng to position
                const articleCard = slide.querySelector('.article_wrapper')
                const curNumber = id - swiper.activeIndex
                const id_name =
                  curNumber !== 0
                    ? `${
                        curNumber > 0 ? 'next' : curNumber < 0 ? 'prev' : ''
                      }-${Math.abs(curNumber)} `
                    : 'center'
                articleCard.setAttribute('class', `article_wrapper ${id_name}`)
                console.log(articleCard, curNumber)
              })
            }}
          >
            <SwiperSlide>
              <div className="article_wrapper">
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    className="border border-black w-full h-96"
                    title="5. Ulekan"
                    category="Culture"
                    timeRead="20 min read"
                    src="/placeholder/content 16(5).png"
                    alt="Locavore"
                  />
                </FancyLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="article_wrapper">
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    className="border border-black w-full h-96"
                    title="5. Ulekan"
                    category="Culture"
                    timeRead="20 min read"
                    src="/placeholder/content 16(5).png"
                    alt="Locavore"
                  />
                </FancyLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="article_wrapper">
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    className="border border-black w-full h-96"
                    title="5. Ulekan"
                    category="Culture"
                    timeRead="20 min read"
                    src="/placeholder/content 16(5).png"
                    alt="Locavore"
                  />
                </FancyLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="article_wrapper">
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    className="border border-black w-full h-96"
                    title="5. Ulekan"
                    category="Culture"
                    timeRead="20 min read"
                    src="/placeholder/content 16(5).png"
                    alt="Locavore"
                  />
                </FancyLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="article_wrapper">
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    className="border border-black w-full h-96"
                    title="5. Ulekan"
                    category="Culture"
                    timeRead="20 min read"
                    src="/placeholder/content 16(5).png"
                    alt="Locavore"
                  />
                </FancyLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* CHANGE */}
        <Container className="max-md:px-6">
          <div className="w-full setflex-center">
            <div className="mb-5 text-xs">
              <span className="font-bold">1</span>-<span>15</span>
            </div>
            <div className="relative w-full setflex-center">
              <div className="relative border-b w-48 max-md:w-full h-px border-black">
                <div className="absolute left-4 w-8 h-1 -top-px border border-black bg-black" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Button Sticky */}
      <StickyButton destination="/editorial" arrow="left">
        EDITORIAL INDEX
      </StickyButton>
      <Footer />
    </Layout>
  )
}
