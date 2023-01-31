import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

export const Section4ComponentFixedFront = () => {
  return (
    <div id="section4_fixed_front">
      <div id="s4_group_exit">
        <div
          id="globe_rotate"
          className="fixed w-full h-full pointer-events-none flex justify-center items-center"
        >
          <div
            id="globe_support"
            className="relative w-[26rem] h-[26rem] opacity-0"
          >
            <div className="opacity-50" id="globe">
              <Image
                src="/nxt/globe.png"
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <Image
              src="/nxt/supportyourlocalplanet.png"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div id="s4_group_enter" className="w-full h-full fixed scale-[2]">
          <div
            id="be_regenerative"
            className="fixed w-96 h-36 top-1/2 left-1/2 translate-x-[-200%] translate-y-[-250%]"
          >
            <Image
              src="/nxt/beregenerative.png"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            id="sharing_is_caring"
            className="fixed w-96 h-36 top-1/2 left-1/2 translate-x-[75%] translate-y-[160%]"
          >
            <Image
              src="/nxt/sharingiscaring.png"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
      <div className="s4_group_exit_all">
        <div
          id="s4_text"
          className="opacity-0 pointer-events-none font-funkturm fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-9xl"
        >
          <div className="max-w-screen-lg w-full text-left">
            SO WE TOOK
            <span className="block ml-56">THAT DREAM</span>
            AND MADE IT REAL
          </div>
        </div>
        <div
          id="pot"
          className="fixed w-56 h-56 opacity-0 top-1/2 left-1/2 translate-y-[-54%] translate-x-[-237%]"
        >
          <Image
            src="/nxt/pot.png"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div
        id="construction2"
        className="fixed w-96 h-96 top-1/2 left-1/2 translate-y-[-200%] translate-x-[250%]"
      >
        <Image
          src="/nxt/construction2.png"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}
export const Section4ComponentFixedBack = () => {
  return (
    <div id="section4_fixed_back">
      <div
        id="construction1"
        className="fixed w-96 h-96 z-10 top-1/2 left-1/2 translate-y-[-225%] translate-x-[250%]"
      >
        <Image
          src="/nxt/construction1.png"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="s4_group_exit_all">
        <div
          id="box"
          className="fixed w-[63rem] h-44 opacity-0 top-1/2 left-1/2 translate-x-[-41%] translate-y-[20%]"
        >
          <Image
            src="/nxt/box.png"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="construction_sticker"
          className="fixed w-[25rem] h-[25rem] opacity-0 top-1/2 left-1/2 translate-x-[-134%] translate-y-[15%]"
        >
          <Image
            src="/nxt/construction_sticker.png"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="blossom"
          className="fixed w-[25rem] h-48 top-1/2 right-1/2 translate-x-[350%] translate-y-[-155%]"
        >
          <Image
            src="/nxt/blossom.png"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="loading"
          className="fixed w-52 h-20 top-1/2 right-1/2 translate-x-[600%] translate-y-[-120%]"
        >
          <Image
            src="/nxt/loading.gif"
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

const Section4MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(4)
      // setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(4)
        // setBgColor('#B1BA96')
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section4MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(4)
      // setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 4
        setCaption(4)
        // setBgColor('#B1BA96')
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section4ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id="trigger4"
        className="trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center"
        data-scroll-section
      >
        {/* GLOBE SUPPORT */}
        <div
          id="enter_globe_support"
          className="h-[100vh] __b bg-red-600 bg-opacity-50"
        />
        <div
          id="enter_globe"
          className="h-[25vh] __b bg-green-600 bg-opacity-50 mt-24"
        />
        <div
          id="enter_globe_rotate"
          className="h-[100vh] __b bg-blue-600 bg-opacity-50"
        />
        <div
          id="enter_s4_text"
          className="h-[100vh] __b bg-red-600 bg-opacity-50 mt-24"
        />
        <Section4MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div
          id="enter_box"
          className="h-[25vh] __b bg-green-600 bg-opacity-50 mt-24"
        />
        <div
          id="enter_construction_sticker"
          className="h-[25vh] __b bg-blue-600 bg-opacity-50 mt-24"
        />
        <div
          id="enter_group_s4"
          className="h-[100vh] __b bg-red-600 bg-opacity-50 mt-24"
        />
        <div
          id="exit_all4"
          className="h-[50vh] __b bg-green-600 bg-opacity-50 mt-24"
        >
          EXIT All 4
        </div>
        <Section4MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section4AnimationOBJ = [
  // GLOBE SUPPORT
  () => {
    const id = 'globe_support_enter' // animation id
    const elem = '#globe_support'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_support', // which section will be tracked as the scroll trigger
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
            scale: 10,
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
  // GLOBE
  () => {
    const id = 'globe_enter' // animation id
    const elem = '#globe'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe', // which section will be tracked as the scroll trigger
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
            opacity: 0.5,
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
  // GLOBE ROTATE
  () => {
    const id = 'globe_rotate_enter' // animation id
    const elem = '#globe_rotate'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
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
            rotate: '0deg',
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            rotate: '360deg',
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // S4 GROUP ENTER
  () => {
    const id = 's4_group_enter' // animation id
    const elem = '#s4_group_enter'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
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
  // BE REGENERATIVE ENTER
  () => {
    const id = 'be_regenerative_enter' // animation id
    const elem = '#be_regenerative'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
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
            y: '-250%',
            x: '-200%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-50%',
            x: '-150%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // SHARING IS CARING ENTER
  () => {
    const id = 'sharing_is_caring_enter' // animation id
    const elem = '#sharing_is_caring'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
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
            x: '75%',
            y: '160%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '65%',
            y: '-50%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // S4 GROUP EXIT
  () => {
    const id = 's4_group_exit' // animation id
    const elem = '#s4_group_exit'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
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
  // TEXT ENTER
  () => {
    const id = 's4_text_enter' // animation id
    const elem = '#s4_text'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_s4_text', // which section will be tracked as the scroll trigger
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
  // BOX
  () => {
    const id = 'enter_box' // animation id
    const elem = '#box'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_box', // which section will be tracked as the scroll trigger
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
  // CONSTRUCTION STICKER
  () => {
    const id = 'enter_construction_sticker' // animation id
    const elem = '#construction_sticker'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_construction_sticker', // which section will be tracked as the scroll trigger
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
  // POT
  () => {
    const id = 'enter_pot' // animation id
    const elem = '#pot'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
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
  // CONSTRUCTION 1
  () => {
    const id = 'enter_construction1' // animation id
    const elem = '#construction1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 85%',
        end: 'bottom 100%',
      },
    }
    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '250%',
            y: '-225%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-125%',
            y: '-82%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-370%',
            y: '-82%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // CONSTRUCTION 2
  () => {
    const id = 'enter_construction2' // animation id
    const elem = '#construction2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 85%',
        end: 'bottom 100%',
      },
    }
    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '250%',
            y: '-200%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '69%',
            y: '15%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '69%',
            y: '120%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // BLOSSOM
  () => {
    const id = 'enter_blossom' // animation id
    const elem = '#blossom'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
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
            x: '350%',
            y: '-155%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '148%',
            y: '-155%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // BLOSSOM
  () => {
    const id = 'enter_loading' // animation id
    const elem = '#loading'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
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
            x: '600%',
            y: '-120%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '300%',
            y: '-120%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // EXIT ALL
  () => {
    const id = 'exit_all4' // animation id
    const elem = '.s4_group_exit_all'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all4', // which section will be tracked as the scroll trigger
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
