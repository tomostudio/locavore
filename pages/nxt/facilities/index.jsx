import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Container from '@/components/modules/container'
import { useAppContext } from 'context/state'
import { useEffect, useRef, useState } from 'react'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel, Navigation } from 'swiper'
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
import ScrollContainer from 'react-indiana-drag-scroll'
import ArrowFacilities from '@/components/utils/arrowFacilites'
import NxtNavigation from '@/components/utils/nxtNavigation'

const FeaturesAndFacilities = ({ seoAPI, footerAPI, facilitiesList, facilitiesListScroll }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const scrollContainer = useRef()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [positionScroll, setPositionScroll] = useState(0)
  const [showComponent, setShowComponent] = useState('image-view')

  // Menghitung sisa pembagian dengan 3
  const remainder = facilitiesList.length % 3

  const numberToAdd = remainder === 0 ? 0 : 3 - remainder

  const facilitiesListGrid = facilitiesList.concat(Array(numberToAdd).fill({}))

  const removeBorderLastRow = (data, index) => {
    // desktop column
    let rowCountDesktop = 3
    let columnCountDesktop = Math.ceil(data.length / rowCountDesktop)

    // mobile column
    let rowCountMobile = 2
    let columnCountMobile = Math.ceil(data.length / rowCountMobile)

    // check row desktop
    const lastRowDivsDesktop = []
    for (
      var i = rowCountDesktop * (columnCountDesktop - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsDesktop.push(i)
    }

    // check row mobile
    const lastRowDivsMobile = []
    for (
      var i = rowCountMobile * (columnCountMobile - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsMobile.push(i)
    }

    if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b'
    } else if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'md:border-b'
    } else if (
      lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b md:border-b-0'
    } else {
      return ''
    }
  }

  useEffect(() => {
    if (scrollContainer.current) {
      const scrollContainerWidth =
        scrollContainer.current.scrollWidth -
        scrollContainer.current.clientWidth
      scrollContainer.current.scrollLeft = scrollContainerWidth / 2
    }
  }, [])

  useEffect(() => {
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
        className="no-select-all bg-black"
      >
        <HeaderGap />
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.6,
              },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
            },
          }}
          className="w-full min-h-screen flex flex-col overflow-hidden"
        >
          <Container className="flex flex-col items-center mt-44">
            <h1 className="text-[#BEC29D] font-funkturm text-m-header sm:text-t-header md:text-d-header m-0">
              OUR FACILITIES
            </h1>
            <div className="mt-6 text-[#BEC29D] text-d-body">
              <button
                id="image-view-btn"
                onClick={(e) => {
                  setShowComponent('image-view')
                  // if (
                  //   document
                  //     .getElementById('image-view')
                  //     .classList.contains('hidden')
                  // ) {
                  document
                    .getElementById('image-view-btn')
                    .classList.add('opacity-40')
                  document
                    .getElementById('image-view-btn')
                    .classList.add('pointer-events-none')
                  document
                    .getElementById('image-view-btn')
                    .children[0].classList.add('italic')
                  document
                    .getElementById('image-view-btn')
                    .children[0].classList.add('text-[1.375rem]')

                  document
                    .getElementById('grid-view-btn')
                    .classList.remove('opacity-40')
                  document
                    .getElementById('grid-view-btn')
                    .classList.remove('pointer-events-none')
                  document
                    .getElementById('grid-view-btn')
                    .children[0].classList.remove('italic')
                  document
                    .getElementById('grid-view-btn')
                    .children[0].classList.remove('text-[1.375rem]')
                  // }
                }}
                className="mr-4 opacity-40 leading-6 transition-all duration-300 hover:opacity-30 pointer-events-none"
              >
                <span className="text-[1.375rem] font-serif italic font-medium">
                  Image View
                </span>
              </button>
              •
              <button
                id="grid-view-btn"
                onClick={(e) => {
                  setShowComponent('grid-view')
                  // if (
                  //   document
                  //     .getElementById('grid-view')
                  //     .classList.contains('hidden')
                  // ) {
                  document
                    .getElementById('grid-view-btn')
                    .classList.add('opacity-40')
                  document
                    .getElementById('grid-view-btn')
                    .classList.add('pointer-events-none')
                  document
                    .getElementById('grid-view-btn')
                    .children[0].classList.add('italic')
                  document
                    .getElementById('grid-view-btn')
                    .children[0].classList.add('text-[1.375rem]')

                  document
                    .getElementById('image-view-btn')
                    .classList.remove('opacity-40')
                  document
                    .getElementById('image-view-btn')
                    .classList.remove('pointer-events-none')
                  document
                    .getElementById('image-view-btn')
                    .children[0].classList.remove('italic')
                  document
                    .getElementById('image-view-btn')
                    .children[0].classList.remove('text-[1.375rem]')
                  // }
                }}
                className="ml-4 leading-6 transition-all duration-300 hover:opacity-30"
              >
                <span className="font-serif font-medium">Grid View</span>
              </button>
            </div>
          </Container>
          <div className="relative w-full">
            {showComponent === 'grid-view' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                id="grid-view"
                className="w-full my-20"
                key={showComponent}
              >
                <div className="w-full flex flex-wrap border-y border-white facilities-border">
                  {facilitiesListGrid.map((data, id) =>
                    data.title ? (
                      <FancyLink
                        key={id}
                        destination="/nxt/facilities/detail"
                        className={`w-[calc(100%/2)] md:w-[calc(100%/3)] ${removeBorderLastRow(
                          facilitiesListGrid,
                          id,
                        )} border-white p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black`}
                      >
                        <span className=" font-medium text-d-body uppercase">
                          {data.title}
                        </span>
                      </FancyLink>
                    ) : (
                      <div
                        className={`w-[calc(100%/2)] md:w-[calc(100%/3)] ${removeBorderLastRow(
                          facilitiesListGrid,
                          id,
                        )} border-white`}
                      />
                    ),
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                id="image-view"
                className="relative w-full"
                key={showComponent}
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
                      <div className="w-[50vw]" />
                      {facilitiesListScroll.map((data, id) => (
                        <div key={id}>
                          <div
                            className={`relative w-[15vw] h-[15vw] cursor-pointer transtion-all duration-300 hover:!z-40 group`}
                            onClick={() => {
                              window.location.href = '/nxt/facilities/detail'
                            }}
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
                          </div>
                        </div>
                      ))}
                      <div className="w-[50vw]" />
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
                          scrollContainerWidth / (facilitiesList.length / 2 + 1)

                        const scrollToLeft =
                          positionScroll === scrollContainer.current.scrollLeft
                            ? positionScroll !== 0
                              ? positionScroll - scrollPerElement < 0
                                ? 0
                                : positionScroll - scrollPerElement
                              : 0
                            : scrollContainer.current.scrollLeft -
                                scrollPerElement <
                              0
                            ? 0
                            : scrollContainer.current.scrollLeft -
                              scrollPerElement

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
                          scrollContainerWidth / (facilitiesList.length / 2 + 1)

                        const scrollToRight =
                          positionScroll === scrollContainer.current.scrollLeft
                            ? positionScroll
                              ? positionScroll === scrollContainerWidth
                                ? scrollContainerWidth
                                : positionScroll + scrollPerElement >
                                  scrollContainerWidth
                                ? scrollContainerWidth
                                : positionScroll + scrollPerElement
                              : scrollPerElement
                            : scrollContainer.current.scrollLeft +
                                scrollPerElement >
                              scrollContainerWidth
                            ? scrollContainerWidth
                            : scrollContainer.current.scrollLeft +
                              scrollPerElement

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
                    mousewheel={true}
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
                          <Image
                            src={feature1_color}
                            className="w-full h-auto"
                          />
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
                          <Image
                            src={feature4_color}
                            className="w-full h-auto"
                          />
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
                          <Image
                            src={feature6_color}
                            className="w-full h-full"
                          />
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
                          <Image
                            src={feature1_color}
                            className="w-full h-auto"
                          />
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
                          <Image
                            src={feature4_color}
                            className="w-full h-auto"
                          />
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
                          <Image
                            src={feature6_color}
                            className="w-full h-full"
                          />
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
                          <Image
                            src={feature1_color}
                            className="w-full h-auto"
                          />
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
                          <Image
                            src={feature4_color}
                            className="w-full h-auto"
                          />
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
                          <Image
                            src={feature6_color}
                            className="w-full h-full"
                          />
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
            )}
          </div>
        </motion.div>
        <NxtNavigation focus="facilities" />
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

  const facilitiesList = [
    {
      title: 'LOCALAB',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'bottom',
    },
    {
      title: 'DISTILLERY',
      image1: feature4,
      image2: feature4_color,
      size: 120,
      position: 'top',
    },
    {
      title: 'FOOD FOREST',
      image1: feature6,
      image2: feature6_color,
      size: 120,
      position: 'center',
    },
    {
      title: 'BAR',
      image1: feature5,
      image2: feature5_color,
      size: 'normal',
      position: 'center',
    },
    {
      title: 'CANTEEN',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'top',
    },
    {
      title: 'DINING RESTAURANT',
      image1: feature4,
      image2: feature4_color,
      size: 120,
      position: 'bottom',
    },
    {
      title: 'MUSHROOM CHAMBER',
      image1: feature6,
      image2: feature6_color,
      size: 120,
      position: 'center',
    },
    {
      title: 'ALGAE CULTURE',
      image1: feature5,
      image2: feature5_color,
      size: 'normal',
      position: 'center',
    },
    {
      title: 'BASEMENT',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'bottom',
    },
    {
      title: 'CONCEPT STORE',
      image1: feature4,
      image2: feature4_color,
      size: 120,
      position: 'top',
    },
    {
      title: 'GALLERY',
      image1: feature6,
      image2: feature6_color,
      size: 120,
      position: 'center',
    },
    {
      title: 'GARDENS',
      image1: feature5,
      image2: feature5_color,
      size: 'normal',
      position: 'center',
    },
    {
      title: 'AUDITORIUM',
      image1: feature1,
      image2: feature1_color,
      size: 150,
      position: 'bottom',
    },
  ]

  const facilitiesListScroll = facilitiesList.map((e) => ({
    ...e,
    zIndex: Math.floor(Math.random() * facilitiesList.length) + 1,
  }))
  return {
    props: {
      seoAPI,
      footerAPI,
      headerAPI,
      facilitiesList,
      facilitiesListScroll
    },
  }
}

export default FeaturesAndFacilities
