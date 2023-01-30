import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/legacy/image'

export const Section2ComponentFixedFront = () => {
  return (
    <div id="section2_fixed_front">
      <div
        id="inspired"
        className="pointer-events-none font-funkturm fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl"
      >
        <div className="max-w-screen-lg w-full text-left">
          <span className="block ml-32">
            INSPIRED
            <br />
            BY
          </span>
          NICE
          <span className="block ml-32">THINGS</span>
        </div>
      </div>
      <div className='s2_exit_group'>
        <div
          id="bee_mug"
          className="fixed w-full h-full z-50 opacity-0"
        >
          <div className="w-56 h-56 fixed left-1/2 top-1/2 translate-y-[65%] translate-x-[-70%]">
            <Image
              src="/nxt/bee_sticker.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-72 h-72 fixed left-1/2 top-1/2 translate-y-[-5%] translate-x-[-3%]">
            <Image
              src="/nxt/mug_sticker.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Section2ComponentFixedBack = () => {
  return (
    <div id="section2_fixed_back">
      <div id="worm" className="fixed w-full h-full z-50 opacity-0">
        <div className="w-28 h-28 fixed left-1/2 top-1/2 translate-x-[-195%] translate-y-[-276%]">
          <Image src="/nxt/worm.png" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="s2_exit_group">
        <div
          id="flower_bee_butterfly"
          className="fixed w-full max-w-screen-lg h-full z-50 opacity-0"
        >
          <div className="w-28 h-28 fixed left-1/2 translate-x-[-540%] translate-y-[150px]">
            <Image
              src="/nxt/sunflower02.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-20 h-20 fixed left-1/2 translate-x-[100%] translate-y-[45px]">
            <Image
              src="/nxt/butterfly02.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-12 h-12 fixed right-1/2 translate-x-[600px] translate-y-[140px]">
            <Image src="/nxt/bee01.png" layout="fill" objectFit="contain" />
          </div>
          <div className="w-20 h-20 fixed right-1/2 translate-x-[554px] translate-y-[215px]">
            <Image
              src="/nxt/butterfly01.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-40 h-40 fixed left-1/2 translate-x-[-460%] bottom-0">
            <Image
              src="/nxt/sunflower01.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-14 h-14 fixed left-1/2 translate-x-[-1030%] bottom-0 translate-y-[-180%]">
            <Image src="/nxt/bee03.png" layout="fill" objectFit="contain" />
          </div>
          <div className="w-14 h-14 fixed left-1/2 translate-x-[-1220%] bottom-0 translate-y-[-400%]">
            <Image src="/nxt/bee02.png" layout="fill" objectFit="contain" />
          </div>
          <div className="w-28 h-28 fixed right-0 translate-x-[-250%] bottom-0 translate-y-[-100%]">
            <Image
              src="/nxt/sunflower03.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div
        id="forest1"
        className="fixed w-[32rem] h-[38rem] right-1/2 translate-x-[105%] top-1/2 translate-y-[-200%]"
      >
        <Image src="/nxt/forest1.png" layout="fill" objectFit="contain" />
      </div>
      <div
        id="forest2"
        className="w-[29rem] h-[23rem] fixed top-1/2 z-10 translate-y-[-50%] right-0 translate-x-[25vw]"
      >
        <Image src="/nxt/forest2.png" layout="fill" objectFit="contain" />
      </div>
      <div
        id="forest3"
        className="fixed w-[36rem] h-[30rem] right-1/2 translate-x-[131%] top-1/2 translate-y-[50vh]"
      >
        <Image src="/nxt/forest3.png" layout="fill" objectFit="contain" />
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
      setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(2)
        setBgColor('#B1BA96')
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
      setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 2
        setCaption(2)
        setBgColor('#B1BA96')
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section2ComponentInner = ({
  setCurrentSection,
  setBgColor,
  setCaption,
}) => {
  return (
    <>
      <section
        id="trigger2"
        className="trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center __b "
      >
        {/* INSPIRED BY NICE THINGS */}
        <div
          id="enter-inspired"
          className="h-[100vh] __b bg-green-600 bg-opacity-50 mt-24"
        >
          INSPIRED ENTER
        </div>
        <Section2MarkerTop
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        {/* BUG FLOWER */}
        <div
          id="enter-bug-flower"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        >
          ENTER BUG FLOWER
        </div>
        {/* FOREST 1 */}
        <div
          id="enter-forest1"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        >
          ENTER FOREST 1
        </div>
        {/* BEE MUG */}
        <div
          id="enter-bee-mug"
          className="h-[100vh] __b bg-blue-600 bg-opacity-50"
        >
          ENTER BEE MUG
        </div>
        {/* FOREST 2 */}
        <div
          id="enter-forest2"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        >
          ENTER FOREST 2
        </div>
        <div
          id="exit-group2"
          className="h-[50vh] __b bg-blue-600 bg-opacity-50 mt-24"
        />
        <div
          id="exit-forest1"
          className="h-[50vh] __b bg-green-600 bg-opacity-50 mt-24"
        />
        <div
          id="exit-worm"
          className="h-[50vh] __b bg-blue-600 bg-opacity-50"
        />
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        <Section2MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        <div
          id="exit-inspired"
          className="h-[50vh] __b bg-red-600 bg-opacity-50 mt-24"
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
        set: [
          elem,
          {
            opacity: 1,
            y: '-200%',
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            y: '-45%',
            ease: 'none',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // BEE MUG ENTER
  () => {
    const id = 'bee-mug-enter' // animation id
    const elem = '#bee_mug'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-bee-mug', // which section will be tracked as the scroll trigger
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
            opacity: 1,
            x: '-100vw',
            ease: 'none',
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
            opacity: 1,
            y: '-100vh',
            ease: 'none',
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
            y: '100%',
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
