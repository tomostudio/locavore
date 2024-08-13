import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Image from 'next/legacy/image'

import FancyLink from '@/components/utils/fancyLink'
import urlFor from '@/helpers/sanity/urlFor'
import {
  ArrowFacilitiesDesktop,
  ArrowFacilitiesMobile,
} from '@/components/utils/arrowFacilites'

const ImageView = ({ facilitiesListScroll, scrollContainer }) => {
  const [positionScroll, setPositionScroll] = useState(0)
  const [navVisibility, setNavVisbility] = useState(false)

  useEffect(() => {
    if (scrollContainer.current.scrollWidth < window.screen.width) {
      setNavVisbility(false)
    } else {
      setNavVisbility(true)
    }
  }, [])
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
      <div className="relative w-full h-[calc(40vw*3.7)] sm:h-[calc(30vw*3.7)] md:h-[calc(15vw*3.7)] mt-8">
        <ScrollContainer
          className={`relative h-full scroll-smooth hide-scrollbar`}
          horizontal={true}
          vertical={false}
          hideScrollbars={false}
          nativeMobileScroll={true}
          innerRef={scrollContainer}
          onScroll={() => {
            setPositionScroll(scrollContainer.current.scrollLeft)
          }}
        >
          <div className="w-fit h-full flex items-center relative min-w-full">
            <div className="w-fit h-full flex items-center mx-auto">
              {navVisibility && (
                <div className="w-[25vw] flex-shrink-0 flex-grow" />
              )}
              {facilitiesListScroll.map((data, id) => (
                <div key={id}>
                  <FancyLink
                    className={`block relative w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[15vw] md:h-[15vw] cursor-pointer transtion-all duration-300 hover:!z-40 group`}
                    destination={`/nxt/features/${data.slug.current}`}
                    style={{
                      zIndex: data.zIndex,
                    }}
                  >
                    <div
                      className={`relative
                      ${
                        data.thumbnail.size === '150'
                          ? data.thumbnail.imageLarge.position === 'top'
                            ? 'top-1/2 -translate-y-[78%]'
                            : data.thumbnail.imageLarge.position === 'center'
                            ? 'top-1/2 -translate-y-1/2'
                            : ''
                          : data.thumbnail.size === '120'
                          ? data.thumbnail.imageMedium.position === 'top'
                            ? 'top-1/2 -translate-y-[72%]'
                            : data.thumbnail.imageMedium.position === 'center'
                            ? 'top-1/2 -translate-y-1/2'
                            : ''
                          : ''
                      }
                      ${
                        data.thumbnail.size === '150'
                          ? 'w-[calc(40vw*1.5)] h-[calc(40vw*2.25)] sm:w-[calc(30vw*1.5)] sm:h-[calc(30vw*2.25)] md:w-[calc(15vw*1.5)] md:h-[calc(15vw*2.25)]'
                          : data.thumbnail.size === '120'
                          ? 'w-[calc(40vw*1.2)] h-[calc(40vw*1.8)] sm:w-[calc(30vw*1.2)] sm:h-[calc(30vw*1.8)] md:w-[calc(15vw*1.2)] md:h-[calc(15vw*1.8)]'
                          : 'w-full h-full'
                      }`}
                    >
                      <div className="relative w-full h-full duration-300 transition-all group-hover:-rotate-6">
                        <div className="absolute w-full h-full top-0 left-0 z-10 duration-300 transition-all group-hover:opacity-0">
                          <Image
                            src={urlFor(
                              data.thumbnail.size === '150'
                                ? data.thumbnail.imageLarge.imageBnw
                                : data.thumbnail.size === '120'
                                ? data.thumbnail.imageMedium.imageBnw
                                : data.thumbnail.imageSmall.imageBnw,
                            )
                              .width(350)
                              .url()}
                            alt={
                              data.thumbnail.size === '150'
                                ? data.thumbnail.imageLarge.imageBnw.alt
                                : data.thumbnail.size === '120'
                                ? data.thumbnail.imageMedium.imageBnw.alt
                                : data.thumbnail.imageSmall.imageBnw.alt
                            }
                            layout="fill"
                            objectFit={
                              data.thumbnail.size === 'normal'
                                ? data.thumbnail.imageSmall.imageFit
                                : 'contain'
                            }
                            placeholder="blur"
                            blurDataURL={urlFor(
                              data.thumbnail.size === '150'
                                ? data.thumbnail.imageLarge.imageBnw
                                : data.thumbnail.size === '120'
                                ? data.thumbnail.imageMedium.imageBnw
                                : data.thumbnail.imageSmall.imageBnw,
                            )
                              .blur(2)
                              .format('webp')
                              .width(100)
                              .url()}
                          />
                        </div>
                        <Image
                          src={urlFor(
                            data.thumbnail.size === '150'
                              ? data.thumbnail.imageLarge.imageColor
                              : data.thumbnail.size === '120'
                              ? data.thumbnail.imageMedium.imageColor
                              : data.thumbnail.imageSmall.imageColor,
                          )
                            .width(350)
                            .url()}
                          alt={
                            data.thumbnail.size === '150'
                              ? data.thumbnail.imageLarge.imageColor.alt
                              : data.thumbnail.size === '120'
                              ? data.thumbnail.imageMedium.imageColor.alt
                              : data.thumbnail.imageSmall.imageColor.alt
                          }
                          layout="fill"
                          objectFit={
                            data.thumbnail.size === 'normal'
                              ? data.thumbnail.imageSmall.imageFit
                              : 'contain'
                          }
                          placeholder="blur"
                          blurDataURL={urlFor(
                            data.thumbnail.size === '150'
                              ? data.thumbnail.imageLarge.imageColor
                              : data.thumbnail.size === '120'
                              ? data.thumbnail.imageMedium.imageColor
                              : data.thumbnail.imageSmall.imageColor,
                          )
                            .blur(2)
                            .format('webp')
                            .width(100)
                            .url()}
                        />
                      </div>
                    </div>
                  </FancyLink>
                </div>
              ))}
              {navVisibility && (
                <div className="w-[25vw] flex-shrink-0 flex-grow" />
              )}
            </div>
          </div>
        </ScrollContainer>
        {navVisibility && (
          <div className="absolute pointer-events-none z-50 top-0 left-0 h-full w-full flex items-center justify-between ">
            <button
              className="group pointer-events-auto w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] flex justify-center items-center border sm:border-2 border-white rounded-full ml-8 transition-all duration-300 hover:bg-white"
              onClick={() => {
                const scrollContainerWidth =
                  scrollContainer.current.scrollWidth -
                  scrollContainer.current.clientWidth // Max Scroll Position

                // base 40vw
                // sm 30vw
                // md 15vw

                let scrollProgressDis = (window.screen.width / 10) * 4 // base

                if (window.screen.width >= 640 && window.screen.width < 768) {
                  //sm
                  scrollProgressDis = (window.screen.width / 10) * 3
                } else if (
                  window.screen.width >= 768 &&
                  window.screen.width < 1024
                ) {
                  // md
                  scrollProgressDis = (window.screen.width / 10) * 1.5
                } else if (window.screen.width >= 1024) {
                  //lg
                  scrollProgressDis = (window.screen.width / 10) * 1.5 * 2
                }

                let scrollToLeft = positionScroll - scrollProgressDis

                if (scrollToLeft < 0) scrollToLeft = 0

                scrollContainer.current.scrollLeft = scrollToLeft

                setPositionScroll(scrollToLeft)
              }}
            >
              <ArrowFacilitiesDesktop
                position="left"
                className="hidden md:block"
              />
              <ArrowFacilitiesMobile position="left" className="md:hidden" />
            </button>
            <button
              className={`group pointer-events-auto w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] flex justify-center items-center border sm:border-2 border-white rounded-full mr-8 transition-all duration-300 hover:bg-white`}
              onClick={() => {
                const scrollContainerWidth =
                  scrollContainer.current.scrollWidth -
                  scrollContainer.current.clientWidth // Max Scroll Position

                // base 40vw
                // sm 30vw
                // md 15vw

                let scrollProgressDis = (window.screen.width / 10) * 4 // base

                if (window.screen.width >= 640 && window.screen.width < 768) {
                  //sm
                  scrollProgressDis = (window.screen.width / 10) * 3
                } else if (
                  window.screen.width >= 768 &&
                  window.screen.width < 1024
                ) {
                  // md
                  scrollProgressDis = (window.screen.width / 10) * 1.5
                } else if (window.screen.width >= 1024) {
                  //lg
                  scrollProgressDis = (window.screen.width / 10) * 1.5 * 2
                }
                let scrollToRight = positionScroll + scrollProgressDis

                if (scrollToRight > scrollContainerWidth)
                  scrollToRight = scrollContainerWidth

                scrollContainer.current.scrollLeft = scrollToRight

                setPositionScroll(scrollToRight)
              }}
            >
              <ArrowFacilitiesDesktop
                position="right"
                className="hidden md:block"
              />
              <ArrowFacilitiesMobile position="right" className="md:hidden" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ImageView
