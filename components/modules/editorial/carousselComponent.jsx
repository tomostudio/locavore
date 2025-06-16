import { useState } from 'react'
import Container from '../container'
import Image from 'next/legacy/image'
import urlFor from '@/helpers/sanity/urlFor'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import Arrow from '@/components/utils/arrow'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CarousselComponent = ({ caroussel }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <Container className="max-md:mb-5 max-md:px-0">
        {/* Main Gallery */}
        <div className="main-swipe relative w-full h-full">
          <Swiper
            loop={true}
            effect="fade"
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            allowTouchMove={true}
            className="w-full h-full"
            navigation={{
              nextEl: '.nextCaroussel',
              prevEl: '.prevCaroussel',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          >
            {caroussel.map((data, id) => (
              <SwiperSlide key={id}>
                <div
                  className="relative w-full aspect-w-16 max-md:aspect-w-1 aspect-h-9 max-md:aspect-h-1"
                  style={{
                    backgroundColor: `rgba(208,208,208, 1)`,
                  }}
                >
                  <Image
                    src={urlFor(data).width(1500).url()}
                    alt={data.name}
                    layout="fill"
                    objectFit={data.objectFit}
                    objectPosition="center"
                    className="gallery-image"
                    placeholder="blur"
                    blurDataURL={urlFor(data)
                      .blur(2)
                      .format('webp')
                      .width(500)
                      .url()}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute pointer-events-none z-10 top-0 left-0 h-full w-full flex items-center justify-between ">
            <div className="pointer-events-auto cursor-pointer group h-full flex center prevCaroussel relative p-6 pr-16 justify-center items-center">
              <Arrow
                position="left"
                fill="white"
                className="w-24px h-24px block z-2"
              />
              <div className="w-full h-full bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-30 absolute left-0 top-0 transition-opacity duration-300" />
            </div>
            <div className="pointer-events-auto cursor-pointer group h-full flex center nextCaroussel relative p-6 pl-16 justify-center items-center">
              <Arrow
                position="right"
                fill="white"
                className="w-24px h-24px block z-2"
              />
              <div className="w-full h-full bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-30 absolute left-0 top-0 transition-opacity duration-300" />
            </div>
          </div>
        </div>
        {/* Thumbnail Carousel */}
        <div className="thumbnail-swipe relative w-full h-36 max-md:h-24 max-md:pl-6 mt-5">
          <div className="absolute left-0 w-full h-full flex space-x-3">
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView="auto"
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              spaceBetween={20}
              slideToClickedSlide={true}
              centeredSlides={true}
              allowTouchMove={true}
              // modules={[Controller]}
              // onSwiper={setSecondSwiper}
              // controller={{ control: firstSwiper }}
              // loopedSlides={caroussel.length}
              id="swipe-caroussel"
            >
              {caroussel.map((data, id) => (
                <SwiperSlide key={id}>
                  <div
                    className="cursor-pointer relative w-full h-full rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: `rgba(208,208,208, 1)`,
                    }}
                  >
                    <Image
                      src={urlFor(data).width(1500).url()}
                      alt={data.name}
                      layout="fill"
                      objectFit={data.objectFit}
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={urlFor(data)
                        .blur(2)
                        .format('webp')
                        .width(200)
                        .url()}
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
