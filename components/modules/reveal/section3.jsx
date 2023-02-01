import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import tree from '@/public/nxt/tree.png'
import hugger from '@/public/nxt/hugger.png'
import animal from '@/public/nxt/animal.png'
import nature from '@/public/nxt/nature.png'
import hasthe from '@/public/nxt/hasthe.png'
import answer from '@/public/nxt/answer.png'
import arrow from '@/public/nxt/arrow.png'

export const Section3ComponentFixedFront = () => {
  return (
    <div id="section3_fixed_front">
      <div className="exit_group3">
        <div
          id="better_world"
          className="pointer-events-none font-funkturm fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl"
        >
          <div className="max-w-screen-lg w-full text-right">
            <span className="block mr-[11.5rem]">AND</span>A BETTER
            <span className="block mr-6">WORLD</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Section3ComponentFixedBack = () => {
  return (
    <div id="section3_fixed_back">
      <div className="exit_group3">
        <div
          id="tree"
          className="fixed w-[32rem] h-[38rem] left-1/2 translate-x-[-120%] top-1/2 translate-y-[-200%]"
        >
          <Image
            src={tree}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
          <div className="fixed w-36 h-36 -right-4 top-32">
            <Image
              src={hugger}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div
          id="animal"
          className="w-96 h-96 fixed top-1/2 z-10 translate-y-[-26%] left-1/2 translate-x-[-500%]"
        >
          <Image
            src={animal}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="nature"
          className="opacity-0 w-64 h-48 fixed top-1/2 translate-y-[-160%] right-1/2 translate-x-[225%]"
        >
          <Image
            src={nature}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="hasthe"
          className="opacity-0 w-52 h-20 fixed top-1/2 translate-y-[-260%] right-1/2 translate-x-[308%]"
        >
          <Image
            src={hasthe}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="answer"
          className="opacity-0 w-64 h-48 fixed top-1/2 translate-y-[-117%] right-1/2 translate-x-[264%]"
        >
          <Image
            src={answer}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="arrow"
          className="opacity-0 w-80 h-48 fixed top-1/2 translate-y-[-145%] right-1/2 translate-x-[85%]"
        >
          <Image
            src={arrow}
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

const Section3MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(3)
      setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(3)
        setBgColor('#B1BA96')
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

const Section3MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(3)
      setBgColor('#B1BA96')
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 3
        setCaption(3)
        setBgColor('#B1BA96')
      }
    },
  })

  return <div className="w-full h-2 bg-purple-600" ref={observe} />
}

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 3 */}
      <section
        id="trigger3"
        className="trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center"
      >
        {/* AND A BETTER WORLD */}
        <div
          id="enter_better_world"
          className="h-[100vh] __b bg-red-600 bg-opacity-50 mt-24"
        >
          BETTER WORLD ENTER
        </div>
        <Section3MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* TREE */}
        <div
          id="enter_tree"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        >
          ENTER TREE
        </div>
        {/* ENTER ANIMAL */}
        <div
          id="enter_animal"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        >
          ENTER ANIMAL
        </div>
        {/* ENTER NATURE */}
        <div
          id="enter_nature"
          className="h-[25vh] __b bg-blue-600 bg-opacity-50 mt-24"
        >
          ENTER NATURE
        </div>
        {/* ENTER HAS THE */}
        <div
          id="enter_hasthe"
          className="h-[25vh] __b bg-red-600 bg-opacity-50 mt-24"
        >
          ENTER HAS THE
        </div>
        {/* ENTER ANSWER */}
        <div
          id="enter_answer"
          className="h-[25vh] __b bg-green-600 bg-opacity-50 mt-24"
        >
          ENTER ANSWER
        </div>
        {/* ENTER ARROW */}
        <div
          id="enter_arrow"
          className="h-[25vh] __b bg-blue-600 bg-opacity-50"
        >
          ENTER ARROW
        </div>
        <div
          id="exit_all3"
          className="h-[50vh] __b bg-red-600 bg-opacity-50 mt-24"
        >
          EXIT All 3
        </div>
        <Section3MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section3AnimationOBJ = [
  // AND A BETTER WORLD
  () => {
    const id = 'enter_better_world' // animation id
    const elem = '#better_world'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_better_world', // which section will be tracked as the scroll trigger
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
  // TREE
  () => {
    const id = 'tree' // animation id
    const elem = '#tree'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
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
            y: '-60%',
            ease: 'none',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // ANIMAL
  () => {
    const id = 'enter_animal' // animation id
    const elem = '#animal'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_animal', // which section will be tracked as the scroll trigger
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
            x: '-62%',
            ease: 'none',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // NATURE
  () => {
    const id = 'enter_nature' // animation id
    const elem = '#nature'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nature', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
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
  // HAS THE
  () => {
    const id = 'enter_hasthe' // animation id
    const elem = '#hasthe'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_hasthe', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
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
  // ANSWER
  () => {
    const id = 'enter_answer' // animation id
    const elem = '#answer'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_answer', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
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
  // ARROW
  () => {
    const id = 'enter_arrow' // animation id
    const elem = '#arrow'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_arrow', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
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
  // EXIT GROUP 3
  () => {
    const id = 'exit_group3' // animation id
    const elem = '.exit_group3'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all3', // which section will be tracked as the scroll trigger
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
