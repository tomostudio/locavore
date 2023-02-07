import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

//IMAGE SERIES
import beeSticker from '@/public/nxt/bee_sticker.png'
import mugSticker from '@/public/nxt/mug_sticker.png'
import worm from '@/public/nxt/worm.png'
import sunflower02 from '@/public/nxt/sunflower02.png'
import butterfly02 from '@/public/nxt/butterfly02.png'
import bee01 from '@/public/nxt/bee01.png'
import butterfly01 from '@/public/nxt/butterfly01.png'
import sunflower01 from '@/public/nxt/sunflower01.png'
import bee03 from '@/public/nxt/bee03.png'
import bee02 from '@/public/nxt/bee02.png'
import sunflower03 from '@/public/nxt/sunflower03.png'
import forest1 from '@/public/nxt/forest1.png'
import forest2 from '@/public/nxt/forest2.png'
import forest3 from '@/public/nxt/forest3.png'

export const Section2ComponentFixedFront = () => {
  return (
    <div id="section2_fixed_front">
      <div
        id="inspired"
        className="pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-8xl"
      >
        <div className="relative max-w-screen-lg w-full text-left pl-44">
          INSPIRED
          <br />
          BY <br />
          <span className="block -ml-28">NICE</span>
          THINGS
          <div id="worm" className="opacity-0">
            <div className="w-28 h-28 absolute z-50 left-1/2 top-1/2 translate-x-[-190%] translate-y-[-225%]">
              <Image
                src={worm}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
          <div className="s2_exit_group">
            <div
              id="bee"
              className="absolute w-56 h-56 left-1/2 top-1/2 translate-y-[38%] translate-x-[-80%] opacity-0"
            >
              <Image
                src={beeSticker}
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
  )
}

export const Section2ComponentFixedBack = () => {
  return (
    <div id="section2_fixed_back">
      <div className="s2_exit_group">
        <div
          id="flower_bee_butterfly"
          className="fixed w-full max-w-screen-lg h-full z-1 opacity-0"
        >
          <div className="w-28 h-28 fixed left-1/2 translate-x-[-490%] translate-y-[190px]">
            <Image
              src={sunflower02}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-20 h-20 fixed left-1/2 translate-x-[45%] translate-y-[45px]">
            <Image
              src={butterfly02}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-12 h-12 fixed right-1/2 translate-x-[600px] translate-y-[140px]">
            <Image
              src={bee01}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-20 h-20 fixed z-1 right-1/2 translate-x-[554px] translate-y-[215px]">
            <Image
              src={butterfly01}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-40 h-40 fixed left-1/2 translate-x-[-460%] bottom-0">
            <Image
              src={sunflower01}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-14 h-14 fixed left-1/2 translate-x-[-1030%] bottom-0 translate-y-[-180%]">
            <Image
              src={bee03}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-14 h-14 fixed left-1/2 translate-x-[-1220%] bottom-0 translate-y-[-400%]">
            <Image
              src={bee02}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="w-28 h-28 fixed right-0 translate-x-[-290%] bottom-0 translate-y-[-100%]">
            <Image
              src={sunflower03}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
      <div
        id="forest1"
        className="fixed z-2 h-0 w-0 right-1/2 top-1/2 translate-y-[85vh] __b overflow-visible"
      >
        <div className="absolute w-[30rem] h-[35rem] top-1/2 left-6 translate-y-[-45%]">
          <Image
            src={forest1}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
          <div className="s2_exit_group">
            <div
              id="mug"
              className="w-72 h-72 fixed -left-9 bottom-24 opacity-0"
            >
              <Image
                src={mugSticker}
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
        id="forest2"
        className="fixed z-2 h-0 w-0 top-1/2 right-0 __b overflow-visible"
      >
        <div className="w-[29rem] h-[23rem] absolute top-1/2 translate-y-[-50%] translate-x-[100%]">
          <Image
            src={forest2}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div
        id="forest3"
        className="fixed z-3 h-0 w-0 bottom-0 right-1/2 __b overflow-visible"
      >
        <div className="w-[36rem] h-[30rem] absolute right-1/2 translate-x-[115%] translate-y-[100%]">
          <Image
            src={forest3}
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

const Section2MarkerTop = ({ setCaption, setBgColor }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(2)
      setBgColor(2)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(2)
        setBgColor(2)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section2MarkerBottom = ({ setCaption, setBgColor }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(2)
      setBgColor(2)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 2
        setCaption(2)
        setBgColor(2)
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section2ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      <section
        id="trigger2"
        className="trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center __b "
      >
        {/* INSPIRED BY NICE THINGS */}
        <div
          id="enter-inspired"
          className="h-[100vh] __b bg-green-600 bg-opacity-10 mt-24"
        >
          INSPIRED ENTER
        </div>
        <Section2MarkerTop setBgColor={setBgColor} setCaption={setCaption} />
        {/* BUG FLOWER */}
        <div
          id="enter-bug-flower"
          className="h-[100vh] __b bg-green-600 bg-opacity-10"
        >
          ENTER BUG FLOWER
        </div>
        {/* FOREST 1 */}
        <div
          id="enter-forest1"
          className="h-[100vh] __b bg-green-600 bg-opacity-10"
        >
          ENTER FOREST 1
        </div>
        {/* MUG */}
        <div id="enter_mug" className="h-[50vh] __b bg-blue-600 bg-opacity-10">
          ENTER MUG
        </div>
        {/* BEE */}
        <div id="enter_bee" className="h-[50vh] __b bg-red-600 bg-opacity-10">
          ENTER BEE
        </div>
        {/* FOREST 2 */}
        <div
          id="enter-forest2"
          className="h-[100vh] __b bg-green-600 bg-opacity-10"
        >
          ENTER FOREST 2
        </div>
        <div className="h-[50vh] __b bg-yellow-600 bg-opacity-10" />
        <div
          id="exit-group2"
          className="h-[50vh] __b bg-blue-600 bg-opacity-10 mt-24"
        />
        <div
          id="exit-forest1"
          className="h-[50vh] __b bg-green-600 bg-opacity-10 mt-24"
        />
        <div
          id="exit-worm"
          className="h-[50vh] __b bg-blue-600 bg-opacity-10"
        />
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        <Section2MarkerBottom setBgColor={setBgColor} setCaption={setCaption} />
        <div
          id="exit-inspired"
          className="h-[50vh] __b bg-red-600 bg-opacity-10 mt-24"
        />
      </section>
    </>
  )
}

export const Section2AnimationOBJ = [
  // SECTION 2
  // TITLE ENTER
  () => {
    // INSPIRED BY NICE THINGS IN
    const id = 'inspired-enter' // animation id
    const elem = '#inspired'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-inspired', // which section will be tracked as the scroll trigger
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
  // BUG FLOWER ENTER
  () => {
    const id = 'bug-flower-enter' // animation id
    const elem = '#flower_bee_butterfly'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-bug-flower', // which section will be tracked as the scroll trigger
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
  // WORM ENTER
  () => {
    const id = 'worm-enter' // animation id
    const elem = '#worm'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-bug-flower', // which section will be tracked as the scroll trigger
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
  // FOREST 1
  () => {
    const id = 'forest1-vertical' // animation id
    const elem = '#forest1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-forest1', // which section will be tracked as the scroll trigger
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
            y: '0vh',
            x: 0,
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // MUG
  () => {
    const id = 'mug_enter' // animation id
    const elem = '#mug'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_mug', // which section will be tracked as the scroll trigger
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
  // BEE
  () => {
    const id = 'bee_enter' // animation id
    const elem = '#bee'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bee', // which section will be tracked as the scroll trigger
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
  // FOREST 2
  () => {
    const id = 'forest2-horizontal' // animation id
    const elem = '#forest2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-forest2', // which section will be tracked as the scroll trigger
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
            x: '-100vw',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // FOREST 2 INNER
  () => {
    const id = 'forest2-horizontal-inner' // animation id
    const elem = '#forest2 > div'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-forest2', // which section will be tracked as the scroll trigger
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
            x: '-100%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // FOREST 3
  () => {
    const id = 'forest3-horizontal' // animation id
    const elem = '#forest3'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-forest2', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 80%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '-100vh',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // FOREST 3 INNER
  () => {
    const id = 'forest3-horizontal-inner' // animation id
    const elem = '#forest3 > div'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-forest2', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 80%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '-100%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT GROUP
  () => {
    const id = 'exit-group2' // animation id
    const elem = '.s2_exit_group'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-group2', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT FOREST 1
  () => {
    const id = 'exit-forest1' // animation id
    const elem = '#forest1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-forest1', // which section will be tracked as the scroll trigger
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
            y: '100vh',
            x: 0,
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT WORM
  () => {
    const id = 'exit-worm' // animation id
    const elem = '#worm'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-worm', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // EXIT INSPIRED
  () => {
    const id = 'exit-inspired' // animation id
    const elem = '#inspired'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-inspired', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
]
