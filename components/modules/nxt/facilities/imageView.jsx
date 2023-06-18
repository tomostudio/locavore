import ArrowFacilities from '@/components/utils/arrowFacilites'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel, Navigation } from 'swiper'
import Image from 'next/image'

import feature1 from '@/public/nxt2/features/feature1.png'
import feature4 from '@/public/nxt2/features/feature4.png'
import feature5 from '@/public/nxt2/features/feature5.png'
import feature6 from '@/public/nxt2/features/feature6.png'
import feature1_color from '@/public/nxt2/features/feature1_color.png'
import feature4_color from '@/public/nxt2/features/feature4_color.png'
import feature5_color from '@/public/nxt2/features/feature5_color.png'
import feature6_color from '@/public/nxt2/features/feature6_color.png'
import FancyLink from '@/components/utils/fancyLink'

const ImageView = ({
  facilitiesList,
  facilitiesListScroll,
  scrollContainer,
}) => {
  const [positionScroll, setPositionScroll] = useState(0)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      id="image-view"
      className="relative w-full"
    >
      <div className="relative w-full h-[calc(15vw*3.7)] mt-8">
        <ScrollContainer
          className={`relative h-[calc(15vw*3.7)] scroll-smooth hide-scrollbar`}
          horizontal={true}
          vertical={false}
          hideScrollbars={false}
          nativeMobileScroll={true}
          innerRef={scrollContainer}
        >
          <div className="w-fit h-full flex items-center relative min-w-full">
            <div className="w-[25vw]" />
            {facilitiesListScroll.map((data, id) => (
              <div key={id}>
                <FancyLink
                  className={`block relative w-[15vw] h-[15vw] cursor-pointer transtion-all duration-300 hover:!z-40 group`}
                  destination="/nxt/facilities/detail"
                  style={{
                    zIndex: data.zIndex,
                  }}
                >
                  <div
                    className={`relative ${
                      data.position === 'bottom'
                        ? data.size === 150
                          ? 'top-1/2 -translate-y-[78%]'
                          : data.size === 120
                          ? 'top-1/2 -translate-y-[72%]'
                          : ''
                        : data.position === 'center'
                        ? 'top-1/2 -translate-y-1/2'
                        : ''
                    } ${
                      data.size === 150
                        ? 'w-[calc(15vw*1.5)] h-[calc(15vw*2.25)]'
                        : data.size === 120
                        ? 'w-[calc(15vw*1.2)] h-[calc(15vw*1.8)]'
                        : 'w-full h-full'
                    }`}
                  >
                    <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                      <Image
                        src={data.image1}
                        alt=""
                        fill
                        className="absolute top-0 left-0 z-10 object-contain duration-300 transition-all group-hover:opacity-0"
                      />
                      <Image
                        src={data.image2}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </FancyLink>
              </div>
            ))}
            <div className="w-[25vw]" />
          </div>
        </ScrollContainer>
        <div className="absolute pointer-events-none z-50 top-0 left-0 h-full w-full flex items-center justify-between ">
          <button
            className="group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full ml-8 transition-all duration-300 hover:bg-white"
            onClick={() => {
              const scrollContainerWidth =
                scrollContainer.current.scrollWidth -
                scrollContainer.current.clientWidth

              const scrollPerElement =
                scrollContainerWidth / (facilitiesList.length / 2)

              const scrollToLeft =
                positionScroll === scrollContainer.current.scrollLeft
                  ? positionScroll !== 0
                    ? positionScroll - scrollPerElement < 0
                      ? 0
                      : positionScroll - scrollPerElement
                    : 0
                  : scrollContainer.current.scrollLeft - scrollPerElement < 0
                  ? 0
                  : scrollContainer.current.scrollLeft - scrollPerElement

              scrollContainer.current.scrollLeft = scrollToLeft

              setPositionScroll(scrollToLeft)
            }}
          >
            <ArrowFacilities position="left" />
          </button>
          <button
            className={`group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full mr-8 transition-all duration-300 hover:bg-white`}
            onClick={() => {
              const scrollContainerWidth =
                scrollContainer.current.scrollWidth -
                scrollContainer.current.clientWidth

              const scrollPerElement =
                scrollContainerWidth / (facilitiesList.length / 2)

              const scrollToRight =
                positionScroll === scrollContainer.current.scrollLeft
                  ? positionScroll
                    ? positionScroll === scrollContainerWidth
                      ? scrollContainerWidth
                      : positionScroll + scrollPerElement > scrollContainerWidth
                      ? scrollContainerWidth
                      : positionScroll + scrollPerElement
                    : scrollPerElement
                  : scrollContainer.current.scrollLeft + scrollPerElement >
                    scrollContainerWidth
                  ? scrollContainerWidth
                  : scrollContainer.current.scrollLeft + scrollPerElement

              scrollContainer.current.scrollLeft = scrollToRight

              setPositionScroll(scrollToRight)
            }}
          >
            <ArrowFacilities position="right" />
          </button>
        </div>
      </div>
      <div className="relative w-full h-full my-[22vw]">
        <Swiper
          mousewheel={{
            forceToAxis: true,
          }}
          slidesPerView="auto"
          keyboard={{ enabled: true }}
          navigation={{
            nextEl: '.nextFacilities',
            prevEl: '.prevFacilities',
          }}
          speed={1000}
          className="relative w-full !overflow-visible"
          modules={[FreeMode, Navigation, Keyboard, Mousewheel]}
        >
          <SwiperSlide
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
          <SwiperSlide
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
            className="relative !w-[15vw] !h-[15vw] z-20 cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 z-10 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
            }}
          >
            <div className="relative w-[120%] -top-[80%] left-1/2 -translate-x-1/2">
              <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                <Image
                  src={feature6}
                  alt=""
                  className="absolute top-0 left-0 w-full h-auto transtion-all duration-300 group-hover:opacity-0"
                />
                <Image src={feature6_color} className="w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
          <SwiperSlide
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
            className="relative !w-[15vw] !h-[15vw] z-20 cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 z-10 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
            }}
          >
            <div className="relative w-[120%] -top-[80%] left-1/2 -translate-x-1/2">
              <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                <Image
                  src={feature6}
                  alt=""
                  className="absolute top-0 left-0 w-full h-auto transtion-all duration-300 group-hover:opacity-0"
                />
                <Image src={feature6_color} className="w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
          <SwiperSlide
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
            className="relative !w-[15vw] !h-[15vw] z-20 cursor-pointer transtion-all duration-300 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
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
            className="relative !w-[15vw] !h-[15vw] cursor-pointer transtion-all duration-300 z-10 hover:z-50 group"
            onClick={() => {
              window.location.href = '/nxt/facilities/detail'
            }}
          >
            <div className="relative w-[120%] -top-[80%] left-1/2 -translate-x-1/2">
              <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                <Image
                  src={feature6}
                  alt=""
                  className="absolute top-0 left-0 w-full h-auto transtion-all duration-300 group-hover:opacity-0"
                />
                <Image src={feature6_color} className="w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute pointer-events-none z-50 top-0 left-0 h-full w-full flex items-center justify-between ">
          <button className="prevFacilities group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full ml-8 transition-all duration-300 hover:bg-white">
            <ArrowFacilities position="left" />
          </button>
          <button className="nextFacilities group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full mr-8 transition-all duration-300 hover:bg-white">
            <ArrowFacilities position="right" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ImageView
