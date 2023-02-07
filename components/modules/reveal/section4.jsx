import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import box from '@/public/nxt/box.png'
import constructionSticker from '@/public/nxt/construction_sticker.png'
import pot from '@/public/nxt/pot.png'
import construction1 from '@/public/nxt/construction1.png'
import construction2 from '@/public/nxt/construction2.png'
import blossom from '@/public/nxt/blossom.png'
import loading from '@/public/nxt/loading.gif'

export const Section4ComponentFixedFront = () => {
  return (
    <div id="section4_fixed_front">
      <div className="s4_group_exit_all">
        <div
          id="s4_text"
          className="opacity-0 pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl"
        >
          <div className="relative max-w-screen-lg w-full text-left ml-20">
            SO WE TOOK
            <span className="block ml-56">THAT DREAM</span>
            AND MADE IT REAL
            <div
              id="pot"
              className="absolute w-44 h-44 opacity-0 top-1/2 left-24 translate-y-[-55%]"
            >
              <Image
                src={pot}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <div
              id="box"
              className="absolute w-[53.5rem] h-36 opacity-0 top-1/2 left-1/2 translate-x-[-51%] translate-y-[15%]"
            >
              <Image
                src={box}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="construction1"
        className="fixed h-0 w-0 top-0 right-1/2 __b overflow-visible"
      >
        <div className="w-96 h-96 z-10 absolute right-1/2 translate-y-[-100%] translate-x-[145%]">
          <Image
            src={construction1}
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
export const Section4ComponentFixedBack = () => {
  return (
    <div id="section4_fixed_back">
      <div
        id="construction2"
        className="fixed h-0 w-0 top-1/2 right-0 __b overflow-visible"
      >
        <div className="w-96 h-96 absolute top-1/2 left-1/2 translate-y-[-95%] translate-x-[100%]">
          <Image
            src={construction2}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div className="s4_group_exit_all">
        <div
          id="construction_sticker"
          className="fixed w-[28rem] h-[28rem] opacity-0 top-1/2 left-1/2 translate-x-[-123%] translate-y-[2%]"
        >
          <Image
            src={constructionSticker}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="blossom"
          className="fixed h-0 w-0 top-1/2 right-0 __b overflow-visible"
        >
          <div className="w-[25rem] h-48 absolute top-1/2 translate-y-[-135%] translate-x-[37%]">
            <Image
              src={blossom}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div
          id="loading"
          className="fixed h-0 w-0 top-1/2 right-1/2 __b overflow-visible opacity-0"
        >
          <div className="w-52 h-20 absolute top-1/2 translate-y-[-88%] translate-x-[180%]">
            <Image
              src={loading}
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

const Section4MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(4)
      setBgColor(4)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(4)
        setBgColor(4)
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
      setBgColor(4)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 4
        setCaption(4)
        setBgColor(4)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section4ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 4 */}
      <section
        id="trigger4"
        className="trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center"
        data-scroll-section
      >
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
        to: [
          elem,
          {
            y: '100vh',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // CONSTRUCTION 1 INNER
  () => {
    const id = 'enter_construction1_inner' // animation id
    const elem = '#construction1 > div'
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
        to: [
          elem,
          {
            y: '100%',
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
        to: [
          elem,
          {
            x: '-100vw',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // CONSTRUCTION 2 INNER
  () => {
    const id = 'enter_construction2_inner' // animation id
    const elem = '#construction2 > div'
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
        to: [
          elem,
          {
            x: '-100%',
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
        to: [
          elem,
          {
            x: '-50vw',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // LOADING
  () => {
    const id = 'enter_loading' // animation id
    const elem = '#loading'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
        end: 'top 25%',
      },
    }
    // Input Animation
    const animation = [
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
