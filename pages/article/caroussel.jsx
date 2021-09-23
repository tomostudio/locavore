import { NextSeo } from 'next-seo'
import Marquee from 'react-fast-marquee'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade } from 'swiper'
import Image from 'next/image'
import { useRef } from 'react'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import PillButton from '@/components/utils/pillButton'
import Arrow from '@/components/utils/arrow'
import CardPortrait from '@/components/utils/cardPortrait'
import StickyButton from '@/components/utils/stickyButton'

// Helpers
import Link from '@/components/utils/link'
import FancyLink from '@/components/utils/fancyLink'

// install Swiper modules
SwiperCore.use([EffectFade])

export default function Caroussel() {
  const refSlide = useRef(null)
  const refList = useRef(null)

  const goNext = () => {
    if (refSlide.current !== null && refSlide.current.swiper !== null) {
      refSlide.current.swiper.slideNext()
      refList.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (refSlide.current !== null && refSlide.current.swiper !== null) {
      refSlide.current.swiper.slidePrev()
      refList.current.swiper.slidePrev()
    }
  }

  const onListChange = () => {
    refSlide.current.swiper.slideTo(refList.current.swiper.realIndex + 1)
  }

  return (
    <Layout>
      <NextSeo title="Caroussel" />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className="pt-10 pb-20 w-full h-full flex flex-col">
        <Container className="mb-14 space-y-10">
          {/* Title */}
          <h1 className="m-0 font-title font-normal">
            In Search of Regional Specialties Articles
          </h1>
          <div className="w-full flex items-center justify-between">
            {/* Category */}
            <div className="w-full space-x-4">
              <PillButton
                destination="/"
                className="text-xs opacity-100 border-black"
              >
                Food
              </PillButton>
              <PillButton
                destination="/"
                className="text-xs opacity-100 border-black"
              >
                Culture
              </PillButton>
              <span className="ml-2 font-subtitle italic font-bold">
                March 2021
              </span>
            </div>
            {/* Social Media */}
            <div className="w-full space-x-4 flex justify-end">
              <div className="relative w-16px h-16px">
                <Image
                  src={`/facebook.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-16px h-16px">
                <Image
                  src={`/twitter.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-16px h-16px">
                <Image
                  src={`/mail.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
          {/* Description */}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </Container>
        <Container className="mb-14 space-y-3">
          {/* Gallery */}
          <div className="relative w-full h-30rem">
            <Swiper
              loop={true}
              ref={refSlide}
              speed={0}
              slidesPerView={1}
              loopedSlides={1}
              allowTouchMove={false}
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={`/placeholder/locavore-rintik-crop-18.jpg`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={`/placeholder/locavore-rintik-crop-16.jpg`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={`/placeholder/locavore-rintik-crop-11.jpg`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={`/placeholder/NightRoosterArtwork-5.jpg`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={`/placeholder/NightRoosterArtwork-deggeha-2.jpg`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={`/placeholder/NightRooster-Cocktail-2020-12.jpg`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolute pointer-events-none z-10 top-0 left-0 h-full w-full flex items-center justify-between px-6">
              <FancyLink className="pointer-events-auto" onClick={goPrev}>
                <Arrow position="left" fill="white" className="w-24px h-24px" />
              </FancyLink>
              <FancyLink className="pointer-events-auto" onClick={goNext}>
                <Arrow
                  position="right"
                  fill="white"
                  className="w-24px h-24px"
                />
              </FancyLink>
            </div>
          </div>
          {/* List Gallery */}
          <div className="relative w-full h-36">
            <div className="absolute left-0 w-full h-full flex space-x-3">
              <Swiper
                slidesPerView="auto"
                loop={true}
                spaceBetween={20}
                allowTouchMove={false}
                ref={refList}
                loop={true}
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
        {/* Card Next Article */}
        <div className="w-full setflex-center space-y-14">
          <div className="h-40 setflex-center w-full">
            <hr className="bg-black border border-black h-full w-px" />
          </div>
          <div className="relative w-full h-96 setflex-center">
            <CardPortrait
              className="rotate-6 bg-food w-64 mx-4"
              title="5. Ulekan"
              category="Culture"
              timeRead="20 min read"
              src="/placeholder/locavore-rintik-crop-11.jpg"
              alt="Locavore"
            />
            <div className="absolute top-0 left-0 h-full w-full setflex-center z-min1">
              <Marquee gradient={false}>
                <h1 className="font-title font-normal h-28">
                  Next Article • Next Article • Next Article
                </h1>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
      <Link />
    </Layout>
  )
}
