import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import underline from '@/public/nxt/underline.png'
import heart1 from '@/public/nxt/heart01.png'
import heart2 from '@/public/nxt/heart02.png'

export const Section7ComponentFixedFront = () => {
  return (
    <div id="section7_fixed_front">
      <div id="exit_group_s7">
        <div
          id="feed_change"
          className="pointer-events-none font-funkturm tracking-[0.08em] scale-[5] fixed w-full h-full opacity-0 flex flex-col justify-center items-center text-center leading-none text-white text-8xl"
        >
          <div className="relative flex justify-center items-center w-fit h-fit">
            FEED CHANGE.
            <div
              id="heart1"
              className="absolute -right-12 -top-5 w-16 h-16 opacity-0"
            >
              <Image
                src={heart1}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <div
              id="heart2"
              className="absolute -right-7 -top-20 w-16 h-16 opacity-0"
            >
              <Image
                src={heart2}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
          <div
            id="underline"
            className="relative w-[43rem] h-4 mr-16 mt-2 clip-path-inset-[0%_100%_0%_0]"
          >
            <Image
              src={underline}
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
export const Section7ComponentFixedBack = () => {
  return <div id="section7_fixed_back"></div>
}

const Section7MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(7)
      setBgColor(7)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(7)
        setBgColor(7)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section7MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(7)
      setBgColor(7)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 7
        setCaption(7)
        setBgColor(7)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section7ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id="trigger4"
        className="trigger relative w-full text-4xl flex flex-col justify-center items-center "
        data-scroll-section
      >
        {/* FEED CHANGE */}
        <div
          id="enter_feed_change"
          className="h-[100vh] w-full bg-red-600 bg-opacity-50"
        />
        {/* UNDERLINE */}
        <div
          id="enter_underline"
          className="h-[25vh] w-full bg-green-600 bg-opacity-50 mt-24"
        />
        {/* HEART1 */}
        <div
          id="enter_heart1"
          className="h-[25vh] w-full bg-blue-600 bg-opacity-50 mt-24"
        />
        {/* HEART1 */}
        <div
          id="enter_heart2"
          className="h-[25vh] w-full bg-blue-600 bg-opacity-50 mt-24"
        />
        <Section7MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div
          id="exit_all_s7"
          className="h-[100vh] flex justify-center flex-col mt-24"
        >
          SECTION 7
        </div>
        <Section7MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section7AnimationOBJ = [
  // TITLE ENTER
  () => {
    const id = 'feed_change_enter' // animation id
    const elem = '#feed_change'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_feed_change', // which section will be tracked as the scroll trigger
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
            scale: 5,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            scale: 1,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // UNDERLINE ENTER
  () => {
    const id = 'underline_enter' // animation id
    const elem = '#underline'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_underline', // which section will be tracked as the scroll trigger
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
            clipPath: 'inset(0% 100% 0% 0%)',
          },
        ],
      },
      {
        to: [
          elem,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // HEART1 ENTER
  () => {
    const id = 'heart1_enter' // animation id
    const elem = '#heart1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_heart1', // which section will be tracked as the scroll trigger
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
  // HEART2 ENTER
  () => {
    const id = 'heart2_enter' // animation id
    const elem = '#heart2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_heart2', // which section will be tracked as the scroll trigger
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
  // EXIT ALL
  () => {
    const id = 'exit_group_s7' // animation id
    const elem = '#exit_group_s7'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s7', // which section will be tracked as the scroll trigger
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
