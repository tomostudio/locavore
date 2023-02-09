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
import globe from '@/public/nxt/globe.png'
import supportYourLocalPlanet from '@/public/nxt/supportyourlocalplanet.png'
import beRegenerative from '@/public/nxt/beregenerative.png'
import sharingIsCaring from '@/public/nxt/sharingiscaring.png'

export const Section3ComponentFixedFront = () => {
  return (
    <div id="section3_fixed_front">
      <div className="exit_group3">
        <div
          id="better_world"
          className="pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-8xl"
        >
          <div className="max-w-screen-lg w-full text-right mr-36">
            <span className="block mr-[11.5rem]">AND</span>A BETTER
            <span className="block mr-6">WORLD</span>
          </div>
        </div>
      </div>
      <div id="s3_group_exit">
        <div
          id="globe_rotate"
          className="fixed w-full h-full pointer-events-none flex justify-center items-center"
        >
          <div
            id="support"
            className="relative z-2 w-72 lg:w-[26rem]  opacity-0"
          >
            <Image src={supportYourLocalPlanet} placeholder="blur" alt=" " />
          </div>
          <div id="globe" className="absolute  w-72 lg:w-[26rem]  opacity-0">
            <Image src={globe} placeholder="blur" alt="" />
          </div>
        </div>
        <div id="s3_group_enter" className="w-full h-full fixed">
          <div
            id="be_regenerative"
            className="fixed h-0 w-0 top-1/2 left-1/2 translate-y-[-50vh] translate-x-[-50vw] overflow-visible"
          >
            <div className=" w-72 lg:w-96 absolute bottom-1/2 lg:bottom-auto lg:top-1/2 left-1/2 lg:left-auto lg:right-1/2 translate-y-[calc(-50%-100px)] translate-x-[-50%] lg:translate-y-[-50%] lg:translate-x-[calc(-50%-25px)]">
              <Image src={beRegenerative} placeholder="blur" alt="" />
            </div>
          </div>
          <div
            id="sharing_is_caring"
            className="fixed h-0 w-0 top-1/2 right-1/2 translate-y-[50vh] translate-x-[50vw]  overflow-visible"
          >
            <div className="w-72 lg:w-96 absolute top-1/2 left-1/2 translate-y-[calc(100%+100px)] translate-x-[-50%] lg:translate-y-[-50%] lg:translate-x-[calc(50%+50px)]">
              <Image src={sharingIsCaring} placeholder="blur" alt="" />
            </div>
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
          className="fixed h-0 w-0 top-0 left-1/2   overflow-visible"
        >
          <div className="w-[32rem] h-[35rem] absolute top-1/2 right-1/2 translate-y-[-100%] translate-x-[-20%]">
            <Image
              src={tree}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
            <div
              id="hugger"
              className="fixed w-32 h-32 right-1 top-28 opacity-0"
            >
              <Image
                src={hugger}
                placeholder="blur"
                fill
                style={{
                  objectFit: 'contain',
                }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="animal"
          className="fixed h-0 w-0 top-1/2 left-0 z-10  overflow-visible"
        >
          <div className="w-[22rem] h-[22rem] absolute top-1/2 translate-y-[-24%] translate-x-[-100%]">
            <Image
              src={animal}
              placeholder="blur"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
        </div>
        <div
          id="nature"
          className="opacity-0 w-60 h-48 fixed top-1/2 translate-y-[-140%] right-1/2 translate-x-[205%]"
        >
          <Image
            src={nature}
            placeholder="blur"
            fill
            style={{
              objectFit: 'contain',
            }}
            alt=""
          />
        </div>
        <div
          id="hasthe"
          className="opacity-0 w-48 h-20 fixed top-1/2 translate-y-[-218%] right-1/2 translate-x-[285%]"
        >
          <Image
            src={hasthe}
            placeholder="blur"
            fill
            style={{
              objectFit: 'contain',
            }}
            alt=""
          />
        </div>
        <div
          id="answer"
          className="opacity-0 w-56 h-48 fixed top-1/2 translate-y-[-101%] right-1/2 translate-x-[251%]"
        >
          <Image
            src={answer}
            placeholder="blur"
            fill
            style={{
              objectFit: 'contain',
            }}
            alt=""
          />
        </div>
        <div
          id="arrow"
          className="opacity-0 w-80 h-44 fixed top-1/2 translate-y-[-140%] right-1/2 translate-x-[78%]"
        >
          <Image
            src={arrow}
            placeholder="blur"
            fill
            style={{
              objectFit: 'contain',
            }}
            alt=""
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
      setBgColor(3)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(3)
        setBgColor(3)
      }
    },
  })

  return <div className="w-full h-0" ref={observe} />
}

const Section3MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(3)
      setBgColor(3)
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 3
        setCaption(3)
        setBgColor(3)
      }
    },
  })

  return <div className="w-full h-0" ref={observe} />
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
        <div id="enter_better_world" className="h-[100vh]" />
        <Section3MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* TREE */}
        <div id="enter_tree" className="h-[100vh]  " />
        {/* ENTER ANIMAL */}
        <div id="enter_animal" className="h-[100vh]  " />
        {/* ENTER NATURE */}
        <div id="enter_nature" className="h-[25vh] " />
        {/* ENTER HAS THE */}
        <div id="enter_hasthe" className="h-[25vh]  " />
        {/* ENTER ANSWER */}
        <div id="enter_answer" className="h-[25vh]   " />
        {/* ENTER ARROW */}
        <div id="enter_arrow" className="h-[25vh]  " />
        <div className="h-[50vh] w-full" />
        <div id="exit_all3" className="h-[50vh]" />
        {/* GLOBE SUPPORT */}
        <div id="enter_support" className="h-[100vh]  " />
        <div id="enter_globe" className="h-[25vh]" />
        <div id="enter_globe_rotate" className="relative h-auto  ">
          <div id="enter_text_globe" className="h-[100vh] w-full" />
          <div className="h-[100vh] w-full" />
          <div id="exit_all_s3" className="bottom-0 h-[50vh]  " />
        </div>
        <Section3MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  )
}

export const Section3AnimationOBJMobile = [
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
    const id = 'enter_tree' // animation id
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
        to: [
          elem,
          {
            top: '50%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // TREE INNER
  () => {
    const id = 'enter_tree_inner' // animation id
    const elem = '#tree > div'
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
        to: [
          elem,
          {
            y: '-61%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // HUGGER
  () => {
    const id = 'enter_hugger' // animation id
    const elem = '#hugger'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 20%',
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
            x: '50vw',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // ANIMAL INNER
  () => {
    const id = 'enter_animal_inner' // animation id
    const elem = '#animal > div'
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
            x: '-65%',
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
  // SUPPORT
  () => {
    const id = 'support_enter' // animation id
    const elem = '#support'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_support', // which section will be tracked as the scroll trigger
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
  // BE REGENERATIVE ENTER
  () => {
    const id = 'be_regenerative_enter' // animation id
    const elem = '#be_regenerative'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
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
            y: '-50vh',
            x: '-50vw',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
            x: '0vw',
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
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
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
            y: '50vh',
            x: '50vw',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
            x: '0vw',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // S4 GROUP EXIT
  () => {
    const id = 's3_group_exit' // animation id
    const elem = '#s3_group_exit'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s3', // which section will be tracked as the scroll trigger
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
    const id = 'enter_tree' // animation id
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
        to: [
          elem,
          {
            top: '50%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // TREE INNER
  () => {
    const id = 'enter_tree_inner' // animation id
    const elem = '#tree > div'
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
        to: [
          elem,
          {
            y: '-61%',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // HUGGER
  () => {
    const id = 'enter_hugger' // animation id
    const elem = '#hugger'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 20%',
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
            x: '50vw',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // ANIMAL INNER
  () => {
    const id = 'enter_animal_inner' // animation id
    const elem = '#animal > div'
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
            x: '-65%',
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
  // SUPPORT
  () => {
    const id = 'support_enter' // animation id
    const elem = '#support'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_support', // which section will be tracked as the scroll trigger
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
  // BE REGENERATIVE ENTER
  () => {
    const id = 'be_regenerative_enter' // animation id
    const elem = '#be_regenerative'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
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
            y: '-50vh',
            x: '-50vw',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
            x: '0vw',
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
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
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
            y: '50vh',
            x: '50vw',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
            x: '0vw',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // S4 GROUP EXIT
  () => {
    const id = 's3_group_exit' // animation id
    const elem = '#s3_group_exit'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s3', // which section will be tracked as the scroll trigger
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
