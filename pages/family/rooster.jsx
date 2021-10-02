import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Navbar from '@/components/modules/navbar'

// Components
import Arrow from '@/components/utils/arrow'
import FancyLink from '@/components/utils/fancyLink'

// Helpers
import colors from '@/helpers/preset/colors'

// install Swiper modules
SwiperCore.use([Pagination])

const Rooster = () => {
  const onMouseEnter = (id, color, slug) => {
    document.getElementById('family-button').children[
      id
    ].style.background = color
    document.getElementById('family-button').children[id].style.fontWeight = 800
    document.getElementById('family-button').children[id].style.color = 'black'
    document.getElementById('family-button').children[id].style.borderColor =
      'black'
  }

  const onMouseLeave = (id) => {
    document
      .getElementById('family-button')
      .children[id].removeAttribute('style')
  }

  return (
    <Layout>
      <NextSeo title="The Night Rooster" />
      <Navbar className="border-black bg-nightrooster" logo="/locavore-black.png" />

      {/* Header Gap */}
      <HeaderGap />
      <motion.section
        className="w-full setflex-center bg-nightrooster"
        id="rooster"
        // initial="hidden"
        // animate="visible"
        // variants={{
        //   hidden: {
        //     position: 'fixed',
        //     transform: 'translateY(100%)',
        //   },
        //   visible: {
        //     position: 'relative',
        //     transform: 'translateY(0%)',
        //     transition: {
        //       duration: 1.5,
        //     },
        //   },
        // }}
      >
        <div className="w-content px-paddingContent mb-14 pb-14 border-b border-black setflex-center">
          <div className="w-full setflex-center">
            <span className="text-center py-3">THE NIGHT ROOSTER</span>
            <div className="border-b border-black h-px w-full" />
          </div>
          <div className="w-full my-10">
            <p>
              Locavore’s bar Night Rooster is located between the restaurant and
              Locavore To Go/Local Parts and offers charming views of Jalan Dewi
              Sita from its second floor location. The airy yet intimate
              ambiance is enhanced with recycled wood, including a magnificent
              ironwood floor in the friendly 40-seat bar.
            </p>
            <div className="flex flex-col w-full mt-20 mb-10">
              <div className="flex w-full h-52">
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={12}
                  pagination={{
                    clickable: true,
                  }}
                  id="swipe-family"
                >
                  <SwiperSlide>
                    <div className="relative w-52 h-full">
                      <Image
                        src={`/placeholder/NightRooster-Cocktail-2020-45.jpg`}
                        alt={'Locavore'}
                        className="rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative w-52 h-full">
                      <Image
                        src={`/placeholder/NightRooster-Cocktail-2020-45.jpg`}
                        alt={'Locavore'}
                        className="rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative w-52 h-full">
                      <Image
                        src={`/placeholder/NightRooster-Cocktail-2020-45.jpg`}
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
              <div className="w-full flex justify-between mt-5">
                <div className="flex items-center space-x-5">
                  <div className="relative w-16px h-16px">
                    <Image
                      src={`/instagram.png`}
                      alt={'Locavore'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  <span className="font-serif font-bold">
                    @thenightrooster
                  </span>
                </div>
                <div>
                  <Arrow position="right" fill="black" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex flex-col space-y-6 text-xs pr-14">
              <p>10B Jalan Dewi Sita, Ubud, Bali, Indonesia 80571 • Map</p>
              <div className="w-full flex flex-col">
                <span>+621(0) 3619 777 33</span>
                <span>email@gmail.com</span>
              </div>
              <div className="flex items-center space-x-6">
                <span>Share</span>
                <div className="relative w-16px h-16px">
                  <Image
                    src={`/instagram.png`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="relative w-16px h-16px">
                  <Image
                    src={`/facebook.png`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-end">
              <div className="w-44 h-full bg-black" />
            </div>
          </div>
          <div className="w-full setflex-center">
            <FancyLink
              destination="/"
              className="mt-16 py-3 px-4 text-xs tracking-widest border border-black font-bold rounded-xl"
            >
              BOOK NOW
            </FancyLink>
          </div>
        </div>
        <div
          className="relative w-56rem mb-24 flex flex-wrap"
          id="family-button"
        >
          <FancyLink
            destination="/family/locavore"
            onMouseEnter={() => onMouseEnter(0, colors.locavore)}
            onMouseLeave={() => onMouseLeave(0)}
            className="relative left-6 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            locavore
          </FancyLink>
          <FancyLink
            destination="/family/rooster"
            onMouseEnter={() => onMouseEnter(1, colors.nightrooster)}
            onMouseLeave={() => onMouseLeave(1)}
            className="relative z-10 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            THE NIGHT ROOSTER
          </FancyLink>
          <FancyLink
            destination="/family/nusantara"
            onMouseEnter={() => onMouseEnter(2, colors.nusantara)}
            onMouseLeave={() => onMouseLeave(2)}
            className="relative right-6 z-20 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            NUSANTARA
          </FancyLink>
          <FancyLink
            destination="/family/localab"
            onMouseEnter={() => onMouseEnter(3, colors.localab)}
            onMouseLeave={() => onMouseLeave(3)}
            className="relative -top-px left-6 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            LOCAVORE LAB
          </FancyLink>
          <FancyLink
            destination="/family/locaparts"
            onMouseEnter={() => onMouseEnter(4, colors.localparts)}
            onMouseLeave={() => onMouseLeave(4)}
            className="relative -top-px z-10 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            LOCAL PARTS
          </FancyLink>
          <FancyLink
            destination="/family/togo"
            onMouseEnter={() => onMouseEnter(5, colors.togo)}
            onMouseLeave={() => onMouseLeave(5)}
            className="relative -top-px right-6 z-20 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            LOCAVORE TO-GO
          </FancyLink>
        </div>
      </motion.section>
    </Layout>
  )
}

export default Rooster
