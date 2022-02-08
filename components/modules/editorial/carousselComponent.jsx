import { forwardRef, useState } from 'react'
import Container from '../container'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation, Controller } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import FancyLink from '@/components/utils/fancyLink'
import Arrow from '@/components/utils/arrow'

const CarousselComponent = ({ caroussel }) => {
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)
  return (
    <>
      <Container className="max-md:mb-5 space-y-3 max-md:space-y-5 max-md:px-0">
        {/* Gallery */}
        <div className="relative w-full h-full">
          <Swiper
            loop={true}
            effect="fade"
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
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            loopedSlides={caroussel.length}
          >
            {caroussel.map((data, id) => (
              <SwiperSlide key={id}>
                <div className="relative w-full aspect-w-16 max-md:aspect-w-1 aspect-h-9 max-md:aspect-h-1">
                  <Image
                    src={urlFor(data).width(1500).url()}
                    alt={data.name}
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
            <FancyLink className="pointer-events-auto">
              <Arrow
                position="left"
                fill="white"
                className="w-24px h-24px prevCaroussel"
              />
            </FancyLink>
            <FancyLink className="pointer-events-auto">
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
              slideToClickedSlide={true}
              // loopedSlides={2}
              centeredSlides={true}
              modules={[Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              loopedSlides={caroussel.length}
              id="swipe-caroussel"
            >
              {caroussel.map((data, id) => (
                <SwiperSlide key={id}>
                  <div className="cursor-pointer relative w-full h-full">
                    <Image
                      src={urlFor(data).width(1500).url()}
                      alt={data.name}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
      <hr className="hidden max-md:block border-gray mt-3 mb-14 mx-6" />
    </>
  )
}

export default CarousselComponent
