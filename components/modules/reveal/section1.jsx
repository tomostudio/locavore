import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// IMPORT LOCAL IMAGE
import eyes from '@/public/nxt/eyes.png'
import head from '@/public/nxt/head.png'
import whatIf from '@/public/nxt/whatif.png'
import dream from '@/public/nxt/dream.png'
import wish from '@/public/nxt/wish.png'

export const Section1ComponentFixedFront = () => {
  return (
    <div id="section1_fixed_front">
      <div className="s1_exit_group">
        <div
          id="s1_title"
          className=" pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex opacity-0 scale- justify-center items-center text-center leading-none text-white text-5xl md:text-8xl sm:text-6xl"
        >
          WE HAD
          <br />A DREAM
        </div>
      </div>
      <div
        id="eyes"
        className="fixed top-1/2 right-1/2 translate-y-[45vh] __b h-0 w-0 overflow-visible z-10 opacity-0"
      >
        <div className="h-[13.5rem] w-[20rem] md:h-[27rem] md:w-[38.5rem] sm:h-[16.5rem] sm:w-[23.5rem] absolute top-1/2 right-1/2 translate-x-[50%] translate-y-[-14%]">
          <Image
            src={eyes}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div
        id="dream"
        className="fixed top-1/2 left-0 z-[11] __b h-0 w-0 overflow-visible"
      >
        <div className="w-48 h-32 md:w-96 md:h-72 sm:w-72 sm:h-44 absolute top-1/2 md:translate-y-[-90%] sm:translate-y-[-95%] translate-y-[-180%] translate-x-[-100%]">
          <Image
            src={dream}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const Section1ComponentFixedBack = () => {
  return (
    <div id="section1_fixed_back">
      <div className="s1_exit_group">
        <div
          id="head"
          className="fixed top-1/2 right-1/2 __b h-0 w-0 overflow-visible opacity-0"
        >
          <div className="h-24 w-24 md:h-56 md:w-56 sm:h-[8.5rem] sm:w-[8.5rem] absolute top-1/2 right-1/2 translate-x-[170%] translate-y-[-130%] sm:translate-x-[210%] sm:translate-y-[-60%] will-change-auto">
            <Image
              src={head}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div
          id="whatif"
          className="fixed top-1/2 right-1/2 __b h-0 w-0 overflow-visible opacity-0"
        >
          <div className="w-[5rem] h-[5rem] md:w-52 md:h-52 sm:w-[8rem] sm:h-[8rem] absolute top-1/2 right-1/2 translate-y-[-220%] translate-x-[155%] sm:translate-y-[-135%] sm:translate-x-[180%] will-change-auto">
            <Image
              src={whatIf}
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

const Section1MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(1)
      setBgColor(1)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(1)
        setBgColor(1)
      } else if (scrollDirection.vertical === 'down') {
        // PREVIOUS
        setCaption(0)
        setBgColor(0)
      }
    },
  })

  return <div className="w-full h-2 bg-blue-600" ref={observe} />
}

const Section1MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(1)
      setBgColor('#BFC29D')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 1
        setCaption(1)
        setBgColor('#BFC29D')
      }
    },
  })

  return <div className="w-full h-2 bg-blue-600" ref={observe} />
}

export const Section1ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      <section
        id="trigger1"
        className="trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center __b "
      >
        {/* WE HAD A DREAM */}
        <div
          id="enter-dream"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        <Section1MarkerTop setBgColor={setBgColor} setCaption={setCaption} />
        {/* EYES */}
        <div
          id="enter-eyes"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        {/* HEAD APPEAR */}
        <div
          id="head-trigger"
          className="h-[50vh] __b bg-green-600 bg-opacity-50 mt-24"
        />
        {/* WHATIF APPEAR */}
        <div
          id="whatif-trigger"
          className="h-[50vh] __b bg-green-600 bg-opacity-50 mt-24"
        />
        {/* DREAM LEFT TO RIGHT */}
        <div
          id="dream-trigger"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        {/* WISH NORMAL*/}
        <div
          id="wish"
          className="h-screen w-full mx-auto max-w-screen-lg md:pl-24 sm:pl-20 pl-12 mb-40"
        >
          <div className="relative w-40 h-52 md:w-72 md:h-[22rem] sm:w-44 sm:h-60">
            <Image
              src={wish}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        {/* EYES EXIT*/}
        <div id="exit-eyes" className="h-[50vh] __b bg-red-600 bg-opacity-50" />
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        <Section1MarkerBottom setBgColor={setBgColor} setCaption={setCaption} />
        <div id="exit-all" className="h-[50vh] __b bg-red-600 bg-opacity-50" />
      </section>
    </>
  )
}

export const Section1AnimationOBJMobile = [];
export const Section1AnimationOBJ = [
  // SECTION 1
  // TITLE ENTER
  () => {
    // WE HAVE A DREAM COMING IN
    const id = 'wehaveadream-enter' // animation id
    const elem = '#s1_title'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-dream', // which section will be tracked as the scroll trigger
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
  // EYES ENTER
  () => {
    const id = 'eyes-enter' // animation id
    const elem = '#eyes'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-eyes', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 125%',
        end: 'bottom 125%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
            y: '45vh',
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
  // HEAD
  () => {
    const id = 'head' // animation id
    const elem = '#head'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#head-trigger', // which section will be tracked as the scroll trigger
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
  // WHATIF
  () => {
    const id = 'whatif' // animation id
    const elem = '#whatif'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#whatif-trigger', // which section will be tracked as the scroll trigger
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
  // DREAM
  () => {
    const id = 'dream-horizontal' // animation id
    const elem = '#dream'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#dream-trigger', // which section will be tracked as the scroll trigger
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
            x: '100vw',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // DREAM INNER
  () => {
    const id = 'dream-horizontal-inner' // animation id
    const elem = '#dream > div'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#dream-trigger', // which section will be tracked as the scroll trigger
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
            x: '100%',
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EYES EXIT
  () => {
    // WE HAVE A DREAM COMING IN
    const id = 'eyes-exit' // animation id
    const elem = '#eyes'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-eyes', // which section will be tracked as the scroll trigger
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
            opacity: 0,
            y: '45vh',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT ALL
  () => {
    const id = 's1_exit_group' // animation id
    const elem = '.s1_exit_group'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-all', // which section will be tracked as the scroll trigger
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
