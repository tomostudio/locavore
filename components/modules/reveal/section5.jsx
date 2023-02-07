import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import revolutionSticker from '@/public/nxt/revolution_sticker.png'
import daisy from '@/public/nxt/daisy.png'
import yourSelf from '@/public/nxt/yourself.png'
import bulb from '@/public/nxt/bulb.png'
import collage from '@/public/nxt/collage.png'
import cloud1 from '@/public/nxt/cloud01.png'
import cloud2 from '@/public/nxt/cloud02.png'
import cloud3 from '@/public/nxt/cloud03.png'
import cloud4 from '@/public/nxt/cloud04.png'
import cloud6 from '@/public/nxt/cloud06.png'
import lower_ground from '@/public/nxt/lower_ground.png'
import ground from '@/public/nxt/ground.png'
import firstFloor from '@/public/nxt/1st_floor.png'
import secondFloor from '@/public/nxt/2nd_floor.png'
import tunnel from '@/public/nxt/tunnel.png'
import awesome from '@/public/nxt/awesome.png'
import landscape from '@/public/nxt/landscape.png'
import show1 from '@/public/nxt/show01.png'
import show2 from '@/public/nxt/show02.png'
import feed from '@/public/nxt/feed.png'
import mushroom from '@/public/nxt/mushroom.png'
import opensource from '@/public/nxt/opensource.png'

export const Section5ComponentFixedFront = () => {
  return (
    <div id="section5_fixed_front">
      <div className="s5_group_exit_1">
        <div
          id="s5_text"
          className="pointer-events-none opacity-0 font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl"
        >
          <div className="relative max-w-screen-lg w-full text-left ml-72">
            <span className="block -ml-24">SO</span>
            OTHER PEOPLE
            <br />
            CAN DREAM TOO
            <div
              id="revolution"
              className="w-52 h-28 opacity-0 absolute -bottom-[8rem] right-[19rem]"
            >
              <Image
                src={revolutionSticker}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <div
              id="bulb"
              className="z-10 w-32 h-32 opacity-0 absolute -top-20 left-5"
            >
              <Image
                src={bulb}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s5_group_exit_2 opacity-1 w-full h-full">
        <div className="group_s5_1 opacity-0">
          <div
            id="tunnel"
            className="fixed w-[59.7rem] h-[59.7rem] z-40 top-1/2 left-1/2 translate-x-[-50.2%] translate-y-[-110%]"
          >
            <Image
              src={tunnel}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="second_floor"
            className="fixed w-[59.7rem] h-[59.7rem] z-30 top-1/2 left-1/2 translate-x-[-50.2%] translate-y-[-90%]"
          >
            <Image
              src={secondFloor}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="first_floor"
            className="fixed w-[60rem] h-[60rem] z-20 top-1/2 left-1/2 translate-x-[-50.1%]"
          >
            <Image
              src={firstFloor}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="ground"
            className="fixed w-[60rem] h-[60rem] z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-25%] scale-[1.4]"
          >
            <Image
              src={ground}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="lower_ground"
            className="fixed w-[57rem] h-[57rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-5%]"
          >
            <Image
              src={lower_ground}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export const Section5ComponentFixedBack = () => {
  return (
    <div id="section5_fixed_back">
      <div className="s5_group_exit_1">
        <div
          id="daisy"
          className="fixed h-0 w-0 z-10 top-1/2 right-1/2 translate-y-[-50vh] __b overflow-visible"
        >
          <div className="w-52 h-32 absolute top-1/2 left-1/2 translate-x-[-20%] translate-y-[-165%]">
            <Image
              src={daisy}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div
          id="yourself"
          className="fixed h-0 w-0 top-1/2 right-1/2 translate-y-[85vh] __b overflow-visible"
        >
          <div className="w-96 h-52 absolute top-1/2 left-1/2 translate-x-[-97%] translate-y-[-113%]">
            <Image
              src={yourSelf}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
      <div className="s5_group_exit_2 opacity-1">
        <div className="group_s5_1 opacity-0">
          <div
            id="cloud1"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[-260%] translate-x-[275%] scale-[2]"
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
            id="cloud2"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[150%] translate-x-[-160%] scale-[3] opacity-100"
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
            id="cloud3"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[130%] translate-x-[295%] opacity-100"
          >
            <Image
              src={cloud3}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="cloud4"
            className="fixed w-44 h-44 top-1/2 right-1/2 translate-y-[90%] translate-x-[220%] opacity-100"
          >
            <Image
              src={cloud4}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="cloud5"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[-100%] translate-x-[-200%] opacity-100"
          >
            <Image
              src={cloud3}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="cloud6"
            className="fixed w-[30rem] h-44 top-1/2 right-1/2 translate-y-[-170%] translate-x-[20%] opacity-100"
          >
            <Image
              src={cloud6}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div
          id="awesome"
          className="fixed w-72 h-72 top-1/2 left-1/2 translate-x-[0%] translate-y-[-110%] opacity-0"
        >
          <Image
            src={awesome}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="landscape"
          className="fixed w-48 h-64 top-1/2 left-1/2 translate-x-[190%] translate-y-[-85%] opacity-0"
        >
          <Image
            src={landscape}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="show1"
          className="fixed w-48 h-64 top-1/2 left-1/2 translate-x-[-280%] translate-y-[30%] opacity-0"
        >
          <Image
            src={show1}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="show2"
          className="fixed w-48 h-64 top-1/2 left-1/2 translate-x-[-280%] translate-y-[30%] opacity-0"
        >
          <Image
            src={show2}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="feed"
          className="fixed w-48 h-64 top-1/2 left-1/2 translate-x-[-280%] translate-y-[30%] opacity-0"
        >
          <Image
            src={feed}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div id="group_s5_3" className="opacity-0">
          <div
            id="mushroom"
            className="fixed w-56 h-64 top-1/2 left-1/2 translate-x-[-50%] translate-y-[30%]"
          >
            <Image
              src={mushroom}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="opensource"
            className="fixed w-52 h-64 top-1/2 left-1/2 translate-x-[-150%] translate-y-[-165%]"
          >
            <Image
              src={opensource}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div id="group_s5_3" className="opacity-0">
          <div
            id="mushroom"
            className="fixed w-56 h-64 top-1/2 left-1/2 translate-x-[-50%] translate-y-[30%]"
          >
            <Image
              src={mushroom}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="opensource"
            className="fixed w-52 h-64 top-1/2 left-1/2 translate-x-[-150%] translate-y-[-165%]"
          >
            <Image
              src={opensource}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Section5MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(5)
      setBgColor(5)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(5)
        setBgColor(5)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section5MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(5)
      setBgColor(5)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 5
        setCaption(5)
        setBgColor(5)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section5ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id="trigger3"
        className="trigger relative w-full text-4xl flex flex-col justify-center items-center "
        data-scroll-section
      >
        {/* SO OTHER PEOPLE CAN DREAM TOO */}
        <div
          id="enter_text_s5"
          className="h-[100vh] w-full bg-green-600 bg-opacity-50 mt-24"
        />
        <Section5MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* START A REVOLUTION */}
        <div
          id="enter_revolution"
          className="h-[25vh] w-full bg-blue-600 bg-opacity-50 mt-24"
        />
        {/* COLLAGE NORMAL*/}
        <div
          id="wish"
          className="w-full mx-auto flex justify-end max-w-screen-lg mt-24"
        >
          <div className="relative w-[28rem] h-[38rem] mr-56">
            <Image
              src={collage}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        {/* DAISY YOURSELF */}
        <div
          id="enter_daisy_yourself"
          className="h-[100vh] w-full bg-red-600 bg-opacity-50 mt-24"
        />
        {/* BULB */}
        <div
          id="enter_bulb"
          className="h-[25vh] w-full bg-green-600 bg-opacity-50"
        />
        <Section5MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* EXIT GROUP 1 */}
        <div
          id="exit_group_s5_1"
          className="h-[50vh] w-full bg-blue-600 bg-opacity-50 mt-24"
        />
        {/* ENTER GROUP 1 */}
        <div
          id="enter_group_s5_1"
          className="h-[100vh] w-full bg-red-600 bg-opacity-50 mt-24"
        />
        {/* ENTER GROUP 2 */}
        <div
          id="enter_group_s5_2"
          className="h-[100vh] w-full bg-green-600 bg-opacity-50"
        />
        {/* ENTER FEED */}
        <div
          id="enter_feed"
          className="h-[25vh] w-full bg-blue-600 bg-opacity-50 -mt-24"
        />
        {/* ENTER FEED */}
        <div
          id="enter_group_s5_3"
          className="h-[25vh] w-full bg-red-600 bg-opacity-50 mt-24"
        />
        {/* EXITA ALL FEED */}
        <div
          id="exit_group_end_s5"
          className="h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24"
        />
        <Section5MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section5AnimationOBJ = [
  // TITLE ENTER
  () => {
    const id = 's5_text_enter' // animation id
    const elem = '#s5_text'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_s5', // which section will be tracked as the scroll trigger
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
  // REVOLUTION ENTER
  () => {
    const id = 'revolution_enter' // animation id
    const elem = '#revolution'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_revolution', // which section will be tracked as the scroll trigger
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
  // DAISY ENTER
  () => {
    const id = 'daisy_enter' // animation id
    const elem = '#daisy'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_daisy_yourself', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '0vh'
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // YOURSELF ENTER
  () => {
    const id = 'yourself_enter' // animation id
    const elem = '#yourself'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_daisy_yourself', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '0vh',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // BULB ENTER
  () => {
    const id = 'bulb_enter' // animation id
    const elem = '#bulb'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bulb', // which section will be tracked as the scroll trigger
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
  // EXIT GROUP 1
  () => {
    const id = 'exit_group_s5_1' // animation id
    const elem = '.s5_group_exit_1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_group_s5_1', // which section will be tracked as the scroll trigger
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
  // ENTER GROUP 1
  () => {
    const id = 'enter_group_s5_1' // animation id
    const elem = '.group_s5_1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
  // ENTER CLOUD1
  () => {
    const id = 'enter_cloud1' // animation id
    const elem = '#cloud1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
            scale: 2,
            opacity: 1,
            x: '275%',
            y: '-260%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            scale: 1,
            opacity: 0,
            x: '100%',
            y: '-160%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD2
  () => {
    const id = 'enter_cloud2' // animation id
    const elem = '#cloud2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 25%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            scale: 3,
            opacity: 1,
            x: '-160%',
            y: '150%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            scale: 1,
            opacity: 0,
            x: '0%',
            y: '0%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD3
  () => {
    const id = 'enter_cloud3' // animation id
    const elem = '#cloud3'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 25%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
            x: '295%',
            y: '130%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            x: '140%',
            y: '130%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD4
  () => {
    const id = 'enter_cloud4' // animation id
    const elem = '#cloud4'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 25%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
            x: '220%',
            y: '60%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            x: '340%',
            y: '60%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD5
  () => {
    const id = 'enter_cloud5' // animation id
    const elem = '#cloud5'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 25%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
            x: '-200%',
            y: '-100%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            x: '-100%',
            y: '-100%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD6
  () => {
    const id = 'enter_cloud6' // animation id
    const elem = '#cloud6'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 25%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
            x: '20%',
            y: '-170%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            x: '-40%',
            y: '-170%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER GROUND
  () => {
    const id = 'enter_ground' // animation id
    const elem = '#ground'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
            x: '0%',
            y: '-25%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '0%',
            y: '-50%',
            scale: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER LOWER GROUND
  () => {
    const id = 'enter_lower_round' // animation id
    const elem = '#lower_ground'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
            x: '0%',
            y: '-5%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '0%',
            y: '-50%',
            scale: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER FIRST FLOOR
  () => {
    const id = 'enter_first_floor' // animation id
    const elem = '#first_floor'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
            x: '-50.1%',
            y: '-50%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-50.1%',
            y: '-48.6%',
            scale: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER SECOND FLOOR
  () => {
    const id = 'enter_second_floor' // animation id
    const elem = '#second_floor'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
            x: '-50.2%',
            y: '-90%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-50.2%',
            y: '-48.2%',
            scale: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER TUNNEL
  () => {
    const id = 'enter_tunnel' // animation id
    const elem = '#tunnel'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
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
            x: '-50.2%',
            y: '-110%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-50.2%',
            y: '-48.1%',
            scale: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER AWESOME
  () => {
    const id = 'enter_awesome' // animation id
    const elem = '#awesome'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 25%',
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
  // ENTER LANDSCAPE
  () => {
    const id = 'enter_landscape' // animation id
    const elem = '#landscape'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_2', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'top 75%',
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
  // ENTER SHOW1
  () => {
    const id = 'enter_show1' // animation id
    const elem = '#show1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_2', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 75%',
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
  // ENTER SHOW2
  () => {
    const id = 'enter_show2' // animation id
    const elem = '#show2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_2', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
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
  // ENTER FEED
  () => {
    const id = 'enter_feed' // animation id
    const elem = '#feed'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_feed', // which section will be tracked as the scroll trigger
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
  // ENTER GROUP 3
  () => {
    const id = 'enter_group_s5_3' // animation id
    const elem = '#group_s5_3'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_3', // which section will be tracked as the scroll trigger
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
  // EXIT GROUP 3
  () => {
    const id = 'exit_group_end_s5' // animation id
    const elem = '.s5_group_exit_2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_group_end_s5', // which section will be tracked as the scroll trigger
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
]
