import React, { useEffect, useRef } from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'
import Lottie from 'lottie-react'

import FancyLink from '@/components/utils/fancyLink'
import LottieLve from '@/public/nxt/lottie/lve-lottie-jpg.json'

// Local Images
import summer from '@/public/nxt/summer.png'
import cloud1 from '@/public/nxt/cloud01.png'
import cloud2 from '@/public/nxt/cloud02.png'
import cloud3 from '@/public/nxt/cloud03.png'
import cloud4 from '@/public/nxt/cloud04.png'
import cloud5 from '@/public/nxt/cloud05.png'
import cloud6 from '@/public/nxt/cloud03.png'
import worm from '@/public/nxt/worm.png'
import bee1 from '@/public/nxt/bee01.png'
import bee2 from '@/public/nxt/bee02.png'
import bee3 from '@/public/nxt/bee03.png'
import bee4 from '@/public/nxt/bee01.png'
import bee5 from '@/public/nxt/bee02.png'
import butterfly1 from '@/public/nxt/butterfly01.png'
import butterfly2 from '@/public/nxt/butterfly02.png'
import sunflower3 from '@/public/nxt/sunflower03.png'
import sunflower4 from '@/public/nxt/sunflower04.png'
import sunflower5 from '@/public/nxt/sunflower05.png'
import NXT_Logo_Bumper from '@/public/nxt/LVLNXT-LOGO.png'
import HeaderGap from '../headerGap'

export const Section8ComponentFixedFront = () => {
  const lottieRef = useRef()
  useEffect(() => {
    const detectScroll = (e) => {
      const videoMarker = document.querySelector('#video-marker')
      if (videoMarker !== null) {
        const { y, top, bottom, height } = videoMarker.getBoundingClientRect()
        const progress =
          Math.round(
            (-(y - window.innerHeight) / (height + window.innerHeight)) * 10000,
          ) / 10000
        if (progress > 0 && progress <= 1) {
          lottieRef.current.goToAndStop(Math.round(358 * progress), true)
        } else if (progress <= 0) {
          lottieRef.current.goToAndStop(0, true)
        } else if (progress > 1) {
          lottieRef.current.goToAndStop(358, true)
        }
      }
    }
    document.addEventListener('scroll', detectScroll, false)
    return () => {
      document.removeEventListener('scroll', detectScroll, false)
    }
  }, [])

  return (
    <div id="section8_fixed_front">
      <div
        id="video-frame"
        className="fixed w-screen flex flex-col h-full z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 md:px-20 md:max-w-screen-md lg:max-w-screen-xl max-h-[100vh]"
      >
        <HeaderGap />
        <div className="w-full h-full flex justify-center items-center">
          <div
            id="lottie-frame"
            className="w-full h-fit aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl opacity-0"
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={LottieLve}
              autoplay={false}
              loop={false}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
              }}
              style={{ objectFit: 'fill', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
      <div
        id="logo-frame"
        className="fixed w-screen flex flex-col z-[49] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 md:px-20 md:max-w-screen-md lg:max-w-screen-xl opacity-0"
      >
        <HeaderGap />
        <div className="w-full h-full flex justify-center items-center">
          {/* ANIMATION CONTENT STICKY */}
          <div
            id="logo-end"
            className="frame w-full aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden rounded-xl"
          >
            <Image
              src={NXT_Logo_Bumper}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export const Section8ComponentFixedBack = () => {
  return (
    <>
      <div id="section8_fixed_back" />
    </>
  )
}

const Section8MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(8)
      setBgColor(8)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(8)
        setBgColor(8)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section8ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 8 */}
      <section
        id="trigger8"
        className="trigger relative w-full text-4xl flex flex-col justify-center items-center "
        data-scroll-section
      >
        <Section8MarkerTop setCaption={setCaption} setBgColor={setBgColor} />

        <div
          id="video-enter"
          className="w-full bg-blue-600 bg-opacity-10 min-h-[100vh]"
        >
          VIDEO ENTER
        </div>
        <div
          id="video-marker"
          className="h-[200vh] w-full bg-blue-600 bg-opacity-10"
        >
          VIDEO PLAY
        </div>
        <div id="video-to-logo" className="w-full min-h-[100vh]">
          LOGO ENTER
        </div>
        <div id="logo-moveup" className="w-full h-screen">
          LOGO EXIT
        </div>
        <div className="w-full ">
          <div className="h-screen bg-slate-400 bg-opacity-20 w-full sticky top-0 flex justify-center items-center">
            {/* ANIMATION CONTENT STICKY */}
            <div className="frame w-full h-full relative overflow-hidden">
              <div
                id="sticky_front"
                className="absolute w-full h-full z-5 top-0 left-0 text-red-400  __b overflow-hidden"
              >
                <div className="relative max-w-screen-lg w-full h-full flex justify-center items-center __b mx-auto">
                  <div className="pointer-events-none font-funkturm tracking-[0.08em] absolute w-full h-full flex flex-col justify-center items-center text-center leading-none text-white text-8xl">
                    <div className="relative flex justify-center items-center w-fit h-fit">
                      {/* <div className='absolute -top-60 w-48 h-48'>
                        <Image
                          src={nxtLogo}
                          fill
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      </div> */}
                    </div>
                    <div id="new_locavore_exit">
                      <div id="new_locavore" className="opacity-0">
                        THE NEW LOCAVORE
                      </div>
                    </div>
                    <div
                      id="locavore_nxt"
                      className="absolute opacity-0 flex flex-col items-center"
                    >
                      LOCAVORE NXT
                      <div className="relative w-full">
                        <div
                          id="opening"
                          className="absolute opacity-0 flex flex-col justify-center items-center text-center"
                        >
                          <div className="flex flex-row justify-center items-center text-center">
                            OPENING
                            <div className="h-0 w-4 relative">
                              <div
                                id="summer"
                                className="absolute top-[calc(50%-20px)] translate-y-[-50%] left-1/2 translate-x-[-50%] w-40 h-16 opacity-0"
                              >
                                <Image
                                  src={summer}
                                  fill
                                  style={{
                                    objectFit: 'contain',
                                  }}
                                />
                              </div>
                            </div>
                            2023
                          </div>
                          <FancyLink
                            destination={`/share`}
                            className={`mt-14 w-fit py-4 px-6 text-xl font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                          >
                            SHARE
                          </FancyLink>
                          <FancyLink
                            onClick={() =>
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                              })
                            }
                            className="mt-24 uppercase font-default font-light text-xs text-center tracking-widest text-white select-none"
                          >
                            <div className="block animate-fade-up">
                              Back to top
                            </div>
                          </FancyLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="sticky_back"
                className="absolute overflow-hidden w-full h-full z-1 top-0 left-0 flex justify-center items-center text-blue-500   __b"
              >
                <div
                  id="cloud1_s8"
                  className="absolute top-1/2 left-1/2 opacity-0 translate-y-[-100%] translate-x-[-100%] w-[27rem] h-40"
                >
                  <Image
                    src={cloud1}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div
                  id="cloud2_s8"
                  className="absolute top-1/2 left-1/2 opacity-0 translate-y-[210%] translate-x-[-205%] scale-[2] w-[27rem] h-40"
                >
                  <Image
                    src={cloud2}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div
                  id="cloud3_s8"
                  className="absolute top-1/2 left-1/2 opacity-0 translate-y-[-50%] translate-x-[-70%] w-[27rem] h-40"
                >
                  <Image
                    src={cloud3}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                    alt=""
                  />
                </div>
                <div
                  id="cloud4_s8"
                  className="absolute top-1/2 left-1/2 opacity-0 translate-y-[-10%] translate-x-[-90%] w-36 h-36"
                >
                  <Image
                    alt=""
                    src={cloud4}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div
                  id="cloud5_s8"
                  className="absolute top-1/2 left-1/2 opacity-0 translate-y-[-255%] translate-x-[-130%] w-[27rem] h-40"
                >
                  <Image
                    alt=""
                    src={cloud5}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div
                  id="cloud6_s8"
                  className="absolute top-1/2 left-1/2 opacity-0 translate-y-[70%] translate-x-[117%] w-[27rem] h-40"
                >
                  <Image
                    alt=""
                    src={cloud6}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div className="group_s8 opacity-0">
                  <div className="absolute top-1/2 left-1/2 translate-y-[113%] translate-x-[-85%] w-28 h-28">
                    <Image
                      alt=""
                      src={worm}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[450%] translate-x-[-700%] w-12 h-12">
                    <Image
                      alt=""
                      src={bee1}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[250%] translate-x-[-900%] w-14 h-14">
                    <Image
                      alt=""
                      src={bee2}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-500%] translate-x-[-240%] w-14 h-14">
                    <Image
                      alt=""
                      src={bee3}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-300%] translate-x-[250%] w-20 h-20">
                    <Image
                      alt=""
                      src={butterfly1}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-200%] translate-x-[-300%] w-20 h-20">
                    <Image
                      alt=""
                      src={butterfly2}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-140%] translate-x-[-430%] w-28 h-28">
                    <Image
                      alt=""
                      src={sunflower3}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-140%] translate-x-[450%] w-24 h-24">
                    <Image
                      alt=""
                      src={sunflower4}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[280%] translate-x-[380%] w-20 h-20">
                    <Image
                      alt=""
                      src={sunflower5}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-330%] translate-x-[200%] w-12 h-12">
                    <Image
                      alt=""
                      src={bee4}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-y-[-90%] translate-x-[50%] w-14 h-14">
                    <Image
                      alt=""
                      src={bee5}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enter_nxt_logo"
            className="h-[100vh] w-full bg-red-600 bg-opacity-50 mt-[-75vh]"
          />
          <div
            id="enter_locavore_nxt"
            className="h-[100vh] w-full bg-red-600 bg-opacity-50"
          />
          <div
            id="enter_opening"
            className="h-[25vh] w-full bg-green-600 bg-opacity-50 "
          />
          <div
            id="enter_summer"
            className="h-[25vh] w-full bg-red-600 bg-opacity-50"
          />
          <div
            id="enter_cloud_bug_flower"
            className="h-[150vh] w-full bg-blue-600 bg-opacity-50"
          />
          <div
            id="gap"
            className="h-[50vh] w-full bg-green-600 bg-opacity-50"
          />
        </div>
      </section>
    </>
  )
}

export const Section8AnimationOBJMobile = []
export const Section8AnimationOBJ = [
  // VIDEO ENTER
  () => {
    const id = 'video-enter' // animation id
    const elem = '#lottie-frame'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#video-enter', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 0%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
            y: '100vh',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            y: '0vh',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // VIDEO TO LOGO
  () => {
    const id = 'video-to-logo' // animation id
    const elem = '#video-frame'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#video-to-logo', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 100%',
        end: 'bottom 0%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  }, // LOGO APPEAR
  () => {
    const id = 'logo-appear' // animation id
    const elem = '#logo-frame'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#video-to-logo', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 50%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // NEW LOCAVORE ENTER (LOGO)
  () => {
    const id = 'new_locavore_enter' // animation id
    const elem = '#new_locavore'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 60%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // LOGO PUSH UP
  () => {
    const id = 'logo-up' // animation id
    const elem = '#logo-end'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#logo-moveup', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 100%',
        end: 'bottom 0%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            y: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-40%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // NEW LOCAVORE ENTER
  () => {
    const id = 'new_locavore_enter' // animation id
    const elem = '#new_locavore'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 60%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // NEW LOCAVORE EXIT
  () => {
    const id = 'new_locavore_exit' // animation id
    const elem = '#new_locavore_exit'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_locavore_nxt', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 50%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // LOCAVORE NXT ENTER
  () => {
    const id = 'locavore_nxt_enter' // animation id
    const elem = '#locavore_nxt'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_locavore_nxt', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 75%',
        end: 'top 25%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // OPENING ENTER
  () => {
    const id = 'opening_enter' // animation id
    const elem = '#opening'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_opening', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // SUMMER ENTER
  () => {
    const id = 'enter_summer' // animation id
    const elem = '#summer'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_summer', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // CLOUD1 ENTER
  () => {
    const id = 'cloud1_s8_enter' // animation id
    const elem = '#cloud1_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 60',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-100%',
            y: '-100%',
            scale: 1,
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '102%',
            y: '-281%',
            scale: 1.5,
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // CLOUD2 ENTER
  () => {
    const id = 'cloud2_s8_enter' // animation id
    const elem = '#cloud2_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 60',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '30%',
            scale: 1,
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-205%',
            y: '210%',
            scale: 2,
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // CLOUD3 ENTER
  () => {
    const id = 'cloud3_s8_enter' // animation id
    const elem = '#cloud3_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 60',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '-50%',
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-213%',
            y: '-50%',
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // CLOUD4 ENTER
  () => {
    const id = 'cloud4_s8_enter' // animation id
    const elem = '#cloud4_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 60',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-90%',
            y: '-10%',
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '260%',
            y: '10%',
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // CLOUD5 ENTER
  () => {
    const id = 'cloud5_s8_enter' // animation id
    const elem = '#cloud5_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 60',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '-80%',
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-130%',
            y: '-255%',
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // CLOUD6 ENTER
  () => {
    const id = 'cloud6_s8_enter' // animation id
    const elem = '#cloud6_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 60',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-45%',
            y: '40%',
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '117%',
            y: '70%',
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // GROUP S8 ENTER
  () => {
    const id = 'group_s8_enter' // animation id
    const elem = '.group_s8'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_bug_flower', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 66%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
]
