import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

// Layout
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import Arrow from '@/components/utils/arrow'
import FancyLink from '@/components/utils/fancyLink'

// Helpers
import preference from '@/helpers/preset/scrollPreference'
import PushScrollGlobal from '@/helpers/globalscroll'
import Link from '@/components/utils/link'
import colors from '@/helpers/preset/colors'
import { useAppContext } from 'context/state'

// install Swiper modules
SwiperCore.use([Pagination])

export default function Family() {
  const appContext = useAppContext()

  const onMouseEnter = (id, color, slug) => {
    document.getElementById('family-button').children[
      id
    ].style.background = color
    document.getElementById('family-button').children[id].style.fontWeight = 800
    document.getElementById('family-button').children[id].style.color = 'black'
    document.getElementById('family-button').children[id].style.borderColor =
      'black'
    const image = document.getElementById('family-image')
    for (let i = 0; i < image.children.length; i++) {
      if (image.children[i].getAttribute('data-slug') === slug) {
        console.log('hello')
      }
    }
  }

  const onMouseLeave = (id) =>
    document
      .getElementById('family-button')
      .children[id].removeAttribute('style')

  const handleClick = (data) =>
    appContext.scrollState.scrollTo(
      document.querySelectorAll(`[data-slug*="${data}"]`)[0],
    )

  return (
    <Layout>
      <NextSeo title="Family" />

      <LocomotiveScrollProvider options={preference} watch={[]}>
        <PushScrollGlobal />
        <div data-scroll-container id="scroll-container">
          <div data-scroll-section>
            <ScrollTriggerWrapper>
              <LazyMotion features={domAnimation}>
                <m.main className="p-0 m-0">
                  {/* Header Gap */}
                  <HeaderGap />
                  {/* Untuk Content */}
                  <section className="pt-10 w-full h-full flex flex-col">
                    <div className="w-full h-full setflex-center">
                      {/* Title */}
                      <h1 className="m-0 flex justify-center items-center font-title font-normal">
                        Family
                        <h2 className="my-0 mx-4 h-full font-subtitle italic font-normal">
                          of
                        </h2>
                        Locavore
                      </h1>
                      <p className="mt-14 w-content px-paddingContent">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                      {/* Family Button */}
                      <div
                        className="relative w-56rem flex flex-wrap mt-14"
                        id="family-button"
                      >
                        <button
                          onMouseEnter={() =>
                            onMouseEnter(
                              0,
                              colors.locavore,
                              'the-night-rooster',
                            )
                          }
                          onMouseLeave={() => onMouseLeave(0)}
                          className="relative left-6 uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
                        >
                          locavore
                        </button>
                        <button
                          onClick={() => handleClick('the-night-rooster')}
                          onMouseEnter={() =>
                            onMouseEnter(
                              1,
                              colors.nightrooster,
                              'the-night-rooster',
                            )
                          }
                          onMouseLeave={() => onMouseLeave(1)}
                          className="relative z-10 uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
                        >
                          {/* <div className="absolute w-full h-full top-0 left-0 bg-locavore">
                            </div> */}
                          THE NIGHT ROOSTER
                        </button>
                        <button
                          onMouseEnter={() =>
                            onMouseEnter(
                              2,
                              colors.nusantara,
                              'the-night-rooster',
                            )
                          }
                          onMouseLeave={() => onMouseLeave(2)}
                          className="relative right-6 z-20 uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
                        >
                          NUSANTARA
                        </button>
                        <button
                          onMouseEnter={() =>
                            onMouseEnter(3, colors.localab, 'the-night-rooster')
                          }
                          onMouseLeave={() => onMouseLeave(3)}
                          className="relative -top-px left-6 uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
                        >
                          LOCAVORE LAB
                        </button>
                        <button
                          onMouseEnter={() =>
                            onMouseEnter(
                              4,
                              colors.localparts,
                              'the-night-rooster',
                            )
                          }
                          onMouseLeave={() => onMouseLeave(4)}
                          className="relative -top-px z-10 uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
                        >
                          LOCAL PARTS
                        </button>
                        <button
                          onMouseEnter={() =>
                            onMouseEnter(5, colors.togo, 'the-night-rooster')
                          }
                          onMouseLeave={() => onMouseLeave(5)}
                          className="relative -top-px right-6 z-20 uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
                        >
                          LOCAVORE TO-GO
                        </button>
                      </div>
                    </div>
                    <div
                      className="relative w-full h-auto flex flex-wrap mt-14 mb-10"
                      id="family-image"
                    >
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-2.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-3.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-4.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-5.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-6.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-7.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-8.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-9.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-10.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-11.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-12.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Additional-Locavore-13.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Locavore-Headshot.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div>
                        <Image
                          src={`/placeholder/Locavore-Headshot-2.jpg`}
                          alt={'Locavore'}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                    </div>
                    <div
                      data-slug="the-night-rooster"
                      className="w-full rounded-t-2xl setflex-center bg-nightrooster"
                      id="rooster"
                    >
                      <div className="w-content px-paddingContent mb-14 pb-14 border-b border-black setflex-center">
                        <div className="w-full setflex-center">
                          <span className="text-center py-3">
                            THE NIGHT ROOSTER
                          </span>
                          <div className="border-b border-black h-px w-full" />
                        </div>
                        <div className="w-full my-10">
                          <p>
                            Locavore’s bar Night Rooster is located between the
                            restaurant and Locavore To Go/Local Parts and offers
                            charming views of Jalan Dewi Sita from its second
                            floor location. The airy yet intimate ambiance is
                            enhanced with recycled wood, including a magnificent
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
                              <div className="flex space-x-5">
                                <div className="w-24px h-24px bg-black" />
                                <span className="font-subtitle font-bold">
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
                            <p>
                              10B Jalan Dewi Sita, Ubud, Bali, Indonesia 80571 •
                              Map
                            </p>
                            <div className="w-full flex flex-col">
                              <span>+621(0) 3619 777 33</span>
                              <span>email@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-6">
                              <span>Share</span>
                              <div className="w-24px h-24px bg-black" />
                              <div className="w-24px h-24px bg-black" />
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
                        <button className="relative left-6 bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full">
                          locavore
                        </button>
                        <button className="relative z-10 bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full">
                          THE NIGHT ROOSTER
                        </button>
                        <button className="relative right-6 z-20 bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full">
                          NUSANTARA
                        </button>
                        <button className="relative -top-px left-6 bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full">
                          LOCAVORE LAB
                        </button>
                        <button className="relative -top-px z-10 bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full">
                          LOCAL PARTS
                        </button>
                        <button className="relative -top-px right-6 z-20 bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full">
                          LOCAVORE TO-GO
                        </button>
                      </div>
                    </div>
                  </section>
                  <Footer />
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
        <Link />
      </LocomotiveScrollProvider>
    </Layout>
  )
}
