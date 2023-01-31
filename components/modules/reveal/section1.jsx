import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import eyes from '@/public/nxt/eyes.png'
import head from '@/public/nxt/head.png'
import whatIf from '@/public/nxt/whatif.png'
import dream from '@/public/nxt/dream.png'
import wish from '@/public/nxt/wish.png'

export const Section1ComponentFixedFront = () => {
  return (
    <div id="section1_fixed_front">
      <div id="s1_exit_group_front">
        <div
          id="s1_title"
          className=" pointer-events-none font-funkturm fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl"
        >
          WE HAD
          <br />A DREAM
        </div>
      </div>
      <div
        id="eyes"
        className="opacity-0 h-[29.5rem] w-[46.5rem] fixed z-50 bottom-1/2 left-1/2 translate-x-[-49%] translate-y-[180%] will-change-auto"
      >
        <Image
          src={eyes}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        id="dream"
        className="w-96 h-72 fixed top-1/2 z-10 translate-y-[-90%] translate-x-[-25vw]"
      >
        <Image
          src={dream}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}

export const Section1ComponentFixedBack = () => {
  return (
    <div id="section1_fixed_back">
      <div id="s1_exit_group_back">
        <div
          id="head"
          className="opacity-0 h-72 w-72 fixed z-5 top-1/2 translate-y-[-60%] right-[50%] translate-x-[190%] will-change-auto"
        >
          <Image
            src={head}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="whatif"
          className="opacity-0 h-64 w-64 fixed z-5 top-1/2 translate-y-[-135%] right-1/2 translate-x-[170%] will-change-auto"
        >
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
  )
}

const Section1MarkerTop = ({ setCurrentSection, setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      // setCurrentSection(1);
      setCaption(1)
      // setBgColor('#BFC29D');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        // setCurrentSection(1);
        setCaption(1)
        // setBgColor('#BFC29D');
      } else if (scrollDirection.vertical === 'down') {
        // PREVIOUS
        // setCurrentSection(0);
        setCaption(0)
        // setBgColor('#BFC29D');
      }
    },
  })

  return <div className="w-full h-2 bg-blue-600" ref={observe} />
}

const Section1MarkerBottom = ({
  setCurrentSection,
  setBgColor,
  setCaption,
}) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      // setCurrentSection(1);
      setCaption(1)
      // setBgColor('#BFC29D');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 1
        // setCurrentSection(1);
        setCaption(1)
        // setBgColor('#BFC29D');
      }
    },
  })

  return <div className="w-full h-2 bg-blue-600" ref={observe} />
}

export const Section1ComponentInner = ({
  setCurrentSection,
  setBgColor,
  setCaption,
}) => {
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
        <Section1MarkerTop
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        {/* EYES */}
        <div
          id="enter-eyes"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        {/* <div
          id='captionmarker_top'
          className='w-full h-2 bg-purple-600'
          data-scroll
          data-scroll-call='section1-top'
          data-scroll-repeat
        /> */}
        {/* // ALTERNATIVE CAPTION TRIGGER */}
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
        <div id="wish" className="w-full mx-auto max-w-screen-lg mb-40">
          <div className="relative w-96 h-30rem">
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
        {/* <div
          id='captionmarker_bottom'
          className='w-full h-2 bg-purple-600'
          data-scroll
          data-scroll-call='section1-bottom'
          data-scroll-repeat
        /> */}
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        <Section1MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        <div id="exit-all" className="h-[50vh] __b bg-red-600 bg-opacity-50" />
      </section>
    </>
  )
}

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
        to: [
          elem,
          {
            opacity: 1,
            y: '92%',
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
        to: [
          elem,
          {
            opacity: 1,
            ease: 'none',
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
        to: [
          elem,
          {
            opacity: 1,
            ease: 'none',
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
            opacity: 1,
            x: '100vw',
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
        set: [
          elem,
          {
            opacity: 1,
            y: '92%',
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            y: '180%',
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT GROUPED
  () => {
    const id = 'title-exit-front' // animation id
    const elem = '#s1_exit_group_front'
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
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT GROUPED
  () => {
    const id = 'title-exit-back' // animation id
    const elem = '#s1_exit_group_back'
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
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
]
