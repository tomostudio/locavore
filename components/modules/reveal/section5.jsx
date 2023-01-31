import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images

export const Section5ComponentFixedFront = () => {
  return (
    <div id="section5_fixed_front">
      <div
        id="s5_text"
        className="pointer-events-none opacity-0 font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl"
      >
        <div className="max-w-screen-lg w-full text-left ml-72">
          <span className="block -ml-24">SO</span>
          OTHER PEOPLE
          <br />
          CAN DREAM TOO
        </div>
      </div>
    </div>
  )
}
export const Section5ComponentFixedBack = () => {
  return (
    <div id="section5_fixed_back">
      <div
        id="revolution"
        className="fixed w-52 h-52 opacity-0 top-1/2 left-1/2 translate-y-[50%] translate-x-[105%]"
      >
        <Image
          src="/nxt/revolution_sticker.png"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
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
      // setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(5)
        // setBgColor('#B1BA96');
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section5MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(5)
      // setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 5
        setCaption(5)
        // setBgColor('#B1BA96');
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
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
        <div
          id="enter_text_s5"
          className="h-[100vh] w-full bg-green-600 bg-opacity-50 mt-24"
        />
        {/* START A REVOLUTION */}
        <div
          id="enter_revolution"
          className="h-[25vh] w-full bg-blue-600 bg-opacity-50 mt-24"
        />
        <Section5MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div className="h-[200vh] flex justify-center flex-col">SECTION 5</div>
        <Section5MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

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
]
