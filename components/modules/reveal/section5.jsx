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
          className="pointer-events-none opacity-0 font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-5xl md:text-8xl sm:text-6xl"
        >
          <div className="relative w-auto text-left lg:left-[50px] ">
            <div className="desktop hidden lg:flex flex-col w-auto">
              <span className="block -ml-24">SO</span>
              <span className="shrink-0 whitespace-nowrap">OTHER PEOPLE</span>
              <span className="shrink-0 whitespace-nowrap">CAN DREAM TOO</span>
            </div>
            <div className="mobile flex flex-col lg:hidden gap-4 md:gap-0">
              <span className="block shrink-0">SO OTHER</span>
              <span className=" ml-44">PEOPLE</span>
              <span>CAN</span>
              <span className="ml-44">
                DREAM
                <br />
                TOO
              </span>
            </div>
            <div
              id="revolution"
              className="w-44 lg:w-52 opacity-0 absolute -bottom-[8rem] right-0"
            >
              <Image src={revolutionSticker} alt=" " />
            </div>
          </div>
        </div>
      </div>
      <div className="s5_group_exit_2 opacity-1 w-full h-full">
        <div className="group_s5_1 opacity-0 w-full h-full fixed md:w-[60rem] left-1/2 translate-x-[-50%]">
          <div
            id="tunnel"
            className="absolute w-[100%] z-40 top-1/2  translate-y-[-110%]"
          >
            <Image src={tunnel} alt="" />
          </div>
          <div
            id="second_floor"
            className="absolute w-[100%] z-30 top-1/2  translate-y-[-90%]"
          >
            <Image src={secondFloor} alt="" />
          </div>
          <div
            id="first_floor"
            className="absolute w-[100%] z-20 top-1/2  translate-y-[-50%]"
          >
            <Image src={firstFloor} alt="" />
          </div>
          <div
            id="ground"
            className="absolute w-[100%]  z-10 top-1/2  translate-y-[-25%] scale-[1.4]"
          >
            <Image src={ground} alt="" />
          </div>
          <div
            id="lower_ground"
            className="absolute w-[100%]  top-1/2 translate-y-[25%]"
          >
            <Image src={lower_ground} alt="" />
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
          className="fixed h-0 w-0 z-10 top-1/2 right-1/2 translate-y-0 translate-x-[100vw] lg:translate-x-0 lg:translate-y-[-100vh]  overflow-visible"
        >
          <div className="w-52 absolute top-1/2 right-1/2 lg:right-0 lg:left-1/2 translate-x-[0%] translate-y-[250%] lg:translate-x-[-5%] lg:translate-y-[-175%]">
            <Image src={daisy} placeholder="blur" alt=" " />
          </div>
        </div>
        <div
          id="yourself"
          className="fixed h-0 w-0 top-1/2 right-1/2 translate-y-0 translate-x-[-100vw] lg:translate-x-0 lg:translate-y-[100vh]  overflow-visible"
        >
          <div className=" w-80 lg:w-96 absolute top-1/2 left-1/2 translate-y-[-200%] lg:translate-x-[-85%] lg:translate-y-[-140%]">
            <Image src={yourSelf} placeholder="blur" alt="" />
            <div
              id="bulb"
              className="z-10 w-32 h-32 opacity-0 absolute top-2 left-0 translate-x-[-50%]"
            >
              <Image src={bulb} placeholder="blur" alt=" " />
            </div>
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
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          <div
            id="cloud2"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[150%] translate-x-[-160%] scale-[3] opacity-100"
          >
            <Image
              src={cloud2}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          <div
            id="cloud3"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[130%] translate-x-[295%] opacity-100"
          >
            <Image
              src={cloud3}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          <div
            id="cloud4"
            className="fixed w-44 h-44 top-1/2 right-1/2 translate-y-[90%] translate-x-[220%] opacity-100"
          >
            <Image
              src={cloud4}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          <div
            id="cloud5"
            className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[-100%] translate-x-[-200%] opacity-100"
          >
            <Image
              src={cloud3}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          <div
            id="cloud6"
            className="fixed w-[30rem] h-44 top-1/2 right-1/2 translate-y-[-170%] translate-x-[20%] opacity-100"
          >
            <Image
              src={cloud6}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
        </div>
        <div
          id="awesome"
          className="fixed w-60 md:w-72  top-1/2 left-1/2 translate-x-[0%] translate-y-[-180%] md:translate-y-[-170%] opacity-0"
        >
          <Image src={awesome} placeholder="blur" alt=" " />
        </div>
        <div
          id="landscape"
          className="fixed w-32 md:w-48 top-12 md:top-1/2 md:left-1/2 translate-x-[20%] translate-y-[20%] md:translate-x-[190%] md:translate-y-[-85%] opacity-0"
        >
          <Image src={landscape} placeholder="blur" alt=" " />
        </div>
        <div
          id="show1"
          className="fixed w-48 translate-y-[-50%] bottom-4 md:top-1/2 left-1/2 md:translate-x-[-280%] md:translate-y-[30%] opacity-0"
        >
          <Image src={show1} placeholder="blur" alt=" " />
        </div>
        <div
          id="show2"
          className="fixed w-48 translate-y-[-50%] bottom-4 md:top-1/2 left-1/2 md:translate-x-[-280%] md:translate-y-[30%] opacity-0"
        >
          <Image src={show2} placeholder="blur" alt="" />
        </div>
        <div
          id="feed"
          className="fixed w-48 translate-y-[-50%] bottom-4 md:bottom-4 md:top-1/2 left-1/2 md:translate-x-[-280%] md:translate-y-[30%] opacity-0"
        >
          <Image src={feed} placeholder="blur" alt="" />
        </div>
        <div id="group_s5_3" className="opacity-0">
          <div
            id="mushroom"
            className="fixed w-44 md:w-56  top-1/2 left-1/2 translate-x-[-50%] translate-y-[30%] md:translate-y-[30%]"
          >
            <Image src={mushroom} placeholder="blur" alt="" />
          </div>
          <div
            id="opensource"
            className="fixed w-52 top-1/2 right-1/2 md:right-auto md:left-1/2 translate-y-[200%] md:translate-x-[-150%] md:translate-y-[-350%]"
          >
            <Image src={opensource} placeholder="blur" alt="" />
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

  return <div className="w-full h-0" ref={observe} />
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

  return <div className="w-full h-0" ref={observe} />
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
        <div id="enter_text_s5" className="h-[100vh] w-full" />
        <Section5MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* START A REVOLUTION */}
        <div id="enter_revolution" className="h-[25vh] w-full " />
        {/* COLLAGE NORMAL*/}
        <div
          id="wish"
          className="w-full mx-auto flex justify-end max-w-screen-lg"
        >
          <div className="relative w-[28rem] lg:mr-56 lg:ml-0 ml-auto mr-auto">
            <Image src={collage} placeholder="blur" alt=" " />
          </div>
        </div>
        {/* DAISY YOURSELF */}
        <div id="enter_daisy_yourself" className="h-[100vh] w-full " />
        {/* BULB */}
        <div id="enter_bulb" className="h-[25vh] w-full -mt-24" />
        <Section5MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div className="h-screen w-full" />
        {/* EXIT GROUP 1 */}
        <div id="exit_group_s5_1" className="h-[100vh] w-full" />
        {/* ENTER GROUP 1 */}
        <div id="enter_group_s5_1" className="h-[100vh] w-full" />
        {/* ENTER GROUP 2 */}
        <div id="enter_group_s5_2" className="h-[100vh] w-full" />
        {/* ENTER FEED */}
        <div id="enter_feed" className="h-[25vh] w-full -mt-24" />
        {/* ENTER FEED */}
        <div id="enter_group_s5_3" className="h-[25vh] w-full mt-24" />
        <div className="h-screen w-full" />
        {/* EXIT ALL FEED */}
        <div id="exit_group_end_s5" className="h-[50vh] w-full mt-24" />
        <Section5MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section5AnimationOBJMobile = [
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
        set: [
          elem,
          {
            x: '100vw',
            y: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '0vw',
            y: 0,
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
        set: [
          elem,
          {
            x: '-100vw',
            y: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '0vw',
            y: 0,
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
            y: '-25%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            y: '25%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            y: '-90%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            y: '-110%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
        set: [
          elem,
          {
            y: '-100vh',
            x: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
            x: 0,
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
            y: '100vh',
            x: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
            x: 0,
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
            y: '-25%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            y: '25%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            y: '-90%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
            y: '-110%',
            scale: 2,
          },
        ],
      },
      {
        to: [
          elem,
          {
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
