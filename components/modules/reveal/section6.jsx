import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import circle from '@/public/nxt/circle.png'
import home from '@/public/nxt/home.png'
import inspire1 from '@/public/nxt/inspire1.jpg'
import inspire2 from '@/public/nxt/inspire2.jpg'
import inspire3 from '@/public/nxt/inspire3.jpg'
import inspire4 from '@/public/nxt/inspire4.jpg'
import inspire5 from '@/public/nxt/inspire5.jpg'
import inspire6 from '@/public/nxt/inspire6.jpg'
import inspire7 from '@/public/nxt/inspire7.jpg'
import inspire8 from '@/public/nxt/inspire8.jpg'
import inspire9 from '@/public/nxt/inspire9.jpg'
import inspire10 from '@/public/nxt/inspire10.jpg'

export const Section6ComponentFixedFront = () => {
  return <div id="section6_fixed_front"></div>
}
export const Section6ComponentFixedBack = () => {
  return (
    <>
      <div id="section6_fixed_back">
        <div id="exit_group_s6">
          <div
            id="s6_text"
            className="opacity-0 pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl "
          >
            <div className="max-w-screen-lg w-full text-center">
              INSPIRED BY
              <br />
              OUR NICE THING
            </div>
          </div>
          <div
            id="home"
            className="fixed w-[26rem] h-[26rem] opacity-0 top-1/2 left-1/2 translate-x-[34%] translate-y-[-15%]"
          >
            <Image
              src={home}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="circle"
            className="fixed w-[19rem] h-36 opacity-0 top-1/2 left-1/2 translate-x-[-153%] translate-y-[-15%]"
          >
            <Image
              src={circle}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const Section6MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(6)
      setBgColor(6)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(6)
        setBgColor(6)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section6MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(6)
      setBgColor(6)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 6
        setCaption(6)
        setBgColor(6)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section6ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id="trigger4"
        className="trigger relative w-full text-4xl flex flex-col justify-center items-center "
        data-scroll-section
      >
        {/* INSPIRED BY OUR NICE THING */}
        <div
          id="enter_text_s6"
          className="h-[100vh] w-full bg-green-600 bg-opacity-50 mt-24"
        />
        <Section6MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* CIRCLE */}
        <div
          id="enter_circle"
          className="h-[25vh] w-full bg-blue-600 bg-opacity-50"
        />
        {/* HOME */}
        <div
          id="enter_home"
          className="h-[25vh] w-full bg-red-600 bg-opacity-50"
        />
        {/* INSPIRE1 */}
        <div
          id="enter_inspire1"
          className="relative h-[100vh] w-full bg-green-600 bg-opacity-50 flex justify-start items-center"
        >
          <div className="relative max-w-screen-xl border w-[80vw] min-w-[400px] aspect-[16/9]">
            <div
              id="inspire1d"
              className="absolute w-full bottom-0 left-0"
            >
              <Image src={inspire9} />
            </div>
            <div
              id="inspire1n"
              className="absolute w-full bottom-0 left-0 opacity-0"
            >
              <Image src={inspire10} />
            </div>
          </div>
        </div>
        {/* INSPIRE2 */}
        <div
          id="enter_inspire2"
          className="relative h-[30rem] w-full bg-blue-600 bg-opacity-50 flex justify-center items-center"
        >
          <div className="relative max-w-screen-xl border w-full h-full">
            <div
              id="inspire2d"
              className="absolute w-[45rem] h-[45rem] top-0 right-0"
            >
              <Image src={inspire7} />
            </div>
            <div
              id="inspire2n"
              className="absolute w-[45rem] h-[45rem] top-0 right-0 opacity-0"
            >
              <Image src={inspire8} />
            </div>
          </div>
        </div>
        {/* INSPIRE3 */}
        <div
          id="enter_inspire3"
          className="relative h-[30rem] w-full bg-blue-600 bg-opacity-50 flex justify-center items-center"
        >
          <div className="relative max-w-screen-xl border w-full h-full">
            <div
              id="inspire3d"
              className="absolute w-[45rem] h-fit top-0 left-1/2 translate-x-[-50%]"
            >
              <Image src={inspire5} />
            </div>
            <div
              id="inspire3n"
              className="absolute w-[45rem] h-fit top-0 left-1/2 translate-x-[-50%] opacity-0"
            >
              <Image src={inspire6} />
            </div>
          </div>
        </div>
        {/* INSPIRE4 */}
        <div
          id="enter_inspire4"
          className="relative h-[50rem] w-full bg-blue-600 bg-opacity-50 flex justify-center items-center"
        >
          <div className="relative max-w-screen-xl border w-full h-full">
            <div
              id="inspire4d"
              className="absolute w-full h-full top-0"
            >
              <Image src={inspire3} />
            </div>
            <div
              id="inspire4n"
              className="absolute w-full h-full top-0 opacity-0"
            >
              <Image src={inspire4} />
            </div>
          </div>
        </div>
        {/* INSPIRE5 */}
        <div
          id="enter_inspire5"
          className="relative h-[43rem] w-full bg-blue-600 bg-opacity-50 flex justify-center items-center"
        >
          <div className="relative max-w-screen-xl border w-full h-full">
            <div
              id="inspire5d"
              className="absolute w-full h-full px-24 top-0"
            >
              <Image src={inspire1} />
            </div>
            <div
              id="inspire5n"
              className="absolute w-full h-full px-24 top-0 opacity-0"
            >
              <Image src={inspire2} />
            </div>
          </div>
        </div>
        {/* EXIT ALL S6 */}
        <div
          id="exit_all_s6"
          className="h-[50vh] w-full bg-red-600 bg-opacity-50"
        />
        <Section6MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section6AnimationOBJMobile = [];
export const Section6AnimationOBJ = [
  // TITLE ENTER
  () => {
    const id = 's6_text_enter' // animation id
    const elem = '#s6_text'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_s6', // which section will be tracked as the scroll trigger
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
  // CIRCLE ENTER
  () => {
    const id = 'circle_enter' // animation id
    const elem = '#circle'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_circle', // which section will be tracked as the scroll trigger
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
  // HOME ENTER
  () => {
    const id = 'home_enter' // animation id
    const elem = '#home'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_home', // which section will be tracked as the scroll trigger
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
  // INSPIRE1 SWITCH
  () => {
    const id = 'inspire1_switch' // animation id
    const elem = '#inspire1n'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 20%',
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
  // INSPIRE2 SWITCH
  () => {
    const id = 'inspire2_switch' // animation id
    const elem = '#inspire2n'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire2', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 40%',
        end: 'top 20%',
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
  // INSPIRE3 SWITCH
  () => {
    const id = 'inspire3_switch' // animation id
    const elem = '#inspire3n'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire3', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 40%',
        end: 'top 20%',
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
  // INSPIRE4 SWITCH
  () => {
    const id = 'inspire4_switch' // animation id
    const elem = '#inspire4n'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire4', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 30%',
        end: 'top 10%',
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
  // INSPIRE5 SWITCH
  () => {
    const id = 'inspire5_switch' // animation id
    const elem = '#inspire5n'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire5', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 30%',
        end: 'top 10%',
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
  // EXIT ALL
  () => {
    const id = 'exit_group_s6' // animation id
    const elem = '#exit_group_s6'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s6', // which section will be tracked as the scroll trigger
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
