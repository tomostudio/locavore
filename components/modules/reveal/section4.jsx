import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/legacy/image'

export const Section4ComponentFixedFront = () => {
  return (
    <>
      <div id="section4_fixed_front">
        <div id="globe" className="fixed w-full h-full flex justify-center items-center opacity-0">
          <div className="relative w-[26rem] h-[26rem]">
            <Image src="/nxt/globe.png" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </>
  )
}
export const Section4ComponentFixedBack = () => {
  return (
    <>
      <div id="section4_fixed_back"></div>
    </>
  )
}

const Section4MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(4)
      setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(4)
        setBgColor('#B1BA96')
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
      setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 4
        setCaption(4)
        setBgColor('#B1BA96')
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
      <Section4MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* GLOBE */}
        <div
          id="enter-globe"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        <div className="h-[200vh] flex justify-center flex-col">SECTION 4</div>
        <Section4MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section4AnimationOBJ = [
  // GLOBE
  () => {
    const id = 'globe-enter' // animation id
    const elem = '#globe'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-globe', // which section will be tracked as the scroll trigger
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
]
