import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import circle from '@/public/nxt/circle.png'
import home from '@/public/nxt/home.png'
import inspire1 from '@/public/nxt/inspire1.png'
import inspire2 from '@/public/nxt/inspire2.png'
import inspire3 from '@/public/nxt/inspire3.png'
import inspire4 from '@/public/nxt/inspire4.png'
import inspire5 from '@/public/nxt/inspire5.png'

export const Section6ComponentFixedFront = () => {
  return (
    <div id="section6_fixed_front">
      <div id="exit_group_s6">
        <div
          id="s6_text"
          className="opacity-0 pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl"
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
      <div
        id="inspire1"
        className="fixed w-[45rem] h-[45rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]"
      >
        <Image
          src={inspire1}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        id="inspire2"
        className="fixed w-[45rem] h-[45rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]"
      >
        <Image
          src={inspire2}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        id="inspire3"
        className="fixed w-[45rem] h-[45rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]"
      >
        <Image
          src={inspire3}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        id="inspire4"
        className="fixed w-[45rem] h-[45rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]"
      >
        <Image
          src={inspire4}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        id="inspire5"
        className="fixed w-[45rem] h-[45rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]"
      >
        <Image
          src={inspire5}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}
export const Section6ComponentFixedBack = () => {
  return (
    <>
      <div id="section6_fixed_back"></div>
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
          className="h-[75vh] w-full bg-green-600 bg-opacity-50 mt-24"
        />
        {/* INSPIRE2 */}
        <div
          id="enter_inspire2"
          className="h-[100vh] w-full bg-blue-600 bg-opacity-50"
        />
        {/* INSPIRE3 */}
        <div
          id="enter_inspire3"
          className="h-[100vh] w-full bg-red-600 bg-opacity-50"
        />
        {/* INSPIRE4 */}
        <div
          id="enter_inspire4"
          className="h-[100vh] w-full bg-green-600 bg-opacity-50"
        />
        {/* INSPIRE5 */}
        <div
          id="enter_inspire5"
          className="h-[100vh] w-full bg-blue-600 bg-opacity-50"
        />
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
  // INSPIRE1 ENTER
  () => {
    const id = 'inspire1_enter' // animation id
    const elem = '#inspire1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire1', // which section will be tracked as the scroll trigger
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
            y: '50%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-50%',
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
  // INSPIRE2 ENTER
  () => {
    const id = 'inspire2_enter' // animation id
    const elem = '#inspire2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire2', // which section will be tracked as the scroll trigger
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
            y: '-50%',
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
            y: '-150%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // INSPIRE3 ENTER
  () => {
    const id = 'inspire3_enter' // animation id
    const elem = '#inspire3'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire3', // which section will be tracked as the scroll trigger
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
            y: '50%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-50%',
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
  // INSPIRE4 ENTER
  () => {
    const id = 'inspire4_enter' // animation id
    const elem = '#inspire4'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire4', // which section will be tracked as the scroll trigger
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
            y: '-50%',
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
            y: '-150%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // INSPIRE5 ENTER
  () => {
    const id = 'inspire5_enter' // animation id
    const elem = '#inspire5'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_inspire5', // which section will be tracked as the scroll trigger
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
            y: '50%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-150%',
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
