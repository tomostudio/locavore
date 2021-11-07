import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useRef } from 'react'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'
import Navbar from '@/components/modules/header'

// Components
import PillButton from '@/components/modules/pillButton'
import Arrow from '@/components/utils/arrow'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import StickyButton from '@/components/modules/stickyButton'

// Helpers
import NextArticle from '@/components/modules/editorial/nextArticle'
import FancyLink from '@/components/utils/fancyLink'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation])

export default function Caroussel() {
  const refSlide = useRef(null)
  const refList = useRef(null)

  const dataCaroussel = [
    {
      image: `/placeholder/locavore-rintik-crop-18.jpg`,
      alt: 'Locavore',
    },
    {
      image: `/placeholder/locavore-rintik-crop-16.jpg`,
      alt: 'Locavore',
    },
    {
      image: `/placeholder/locavore-rintik-crop-11.jpg`,
      alt: 'Locavore',
    },
    {
      image: `/placeholder/NightRoosterArtwork-5.jpg`,
      alt: 'Locavore',
    },
    {
      image: `/placeholder/NightRoosterArtwork-deggeha-2.jpg`,
      alt: 'Locavore',
    },
    {
      image: `/placeholder/NightRooster-Cocktail-2020-12.jpg`,
      alt: 'Locavore',
    },
  ]

  const onListChange = () => {
    if (refSlide.current.swiper.activeIndex > dataCaroussel.length) {
      refSlide.current.swiper.slideTo(refSlide.current.swiper.activeIndex)
    } else {
      refSlide.current.swiper.slideTo(refList.current.swiper.realIndex + 1)
    }
  }
  useEffect(() => {
    window.scroll(0, 0)
    return () => {}
  }, [])

  return (
    <Layout>
      <NextSeo title="Caroussel" />
      <Navbar
        className="border-black"
        defaultStyle
        logo="/locavore-black.png"
      />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <OpeningArticle />
      <section className="w-full h-full flex flex-col">
        <Container className="max-md:mb-5 space-y-3 max-md:space-y-5 max-md:px-0">
          {/* Gallery */}
          <div className="relative w-full h-full">
            <Swiper
              loop={true}
              effect="fade"
              ref={refSlide}
              // navigation={true}
              // speed={0}
              slidesPerView={1}
              // loopedSlides={1}
              allowTouchMove={false}
              className="w-full h-full"
              navigation={{
                nextEl: '.nextCaroussel',
                prevEl: '.prevCaroussel',
              }}
            >
              {dataCaroussel.map((data, id) => (
                <SwiperSlide key={id}>
                  <div className="relative w-full aspect-w-16 max-md:aspect-w-1 aspect-h-9 max-md:aspect-h-1">
                    <Image
                      src={data.image}
                      alt={data.alt}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="gallery-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute pointer-events-none z-10 top-0 left-0 h-full w-full flex items-center justify-between px-6">
              <FancyLink
                className="pointer-events-auto"
                onClick={() => {
                  refList.current.swiper.slidePrev()
                }}
              >
                <Arrow
                  position="left"
                  fill="white"
                  className="w-24px h-24px prevCaroussel"
                />
              </FancyLink>
              <FancyLink
                className="pointer-events-auto"
                onClick={() => {
                  refList.current.swiper.slideNext()
                }}
              >
                <Arrow
                  position="right"
                  fill="white"
                  className="w-24px h-24px nextCaroussel"
                />
              </FancyLink>
            </div>
          </div>
          {/* List Gallery */}
          <div className="relative w-full h-36 max-md:h-24 max-md:pl-6">
            <div className="absolute left-0 w-full h-full flex space-x-3">
              <Swiper
                slidesPerView="auto"
                loop={true}
                spaceBetween={20}
                allowTouchMove={false}
                ref={refList}
                slideToClickedSlide={true}
                // loopedSlides={2}
                centeredSlides={true}
                onSlideChange={onListChange}
                id="swipe-caroussel"
              >
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={`/placeholder/locavore-rintik-crop-18.jpg`}
                      alt={'Locavore'}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={`/placeholder/locavore-rintik-crop-16.jpg`}
                      alt={'Locavore'}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={`/placeholder/locavore-rintik-crop-11.jpg`}
                      alt={'Locavore'}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={`/placeholder/NightRoosterArtwork-5.jpg`}
                      alt={'Locavore'}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={`/placeholder/NightRoosterArtwork-deggeha-2.jpg`}
                      alt={'Locavore'}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={`/placeholder/NightRooster-Cocktail-2020-12.jpg`}
                      alt={'Locavore'}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
        <hr className="hidden max-md:block border-gray mt-3 mb-14 mx-6" />
      </section>
      <NextArticle
        bgColor={'#C9C8BF'}
        title="5. Ulekan"
        category="Culture"
        timeRead="20 min read"
        thumbnail="/placeholder/locavore-rintik-crop-11.jpg"
        alt="Locavore"
        destination={'/article/video'}
      />
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  )
}
