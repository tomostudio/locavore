import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/image'

// Local Images
import tree from '@/public/nxt/tree.webp'
import hugger from '@/public/nxt/hugger.webp'
import animal from '@/public/nxt/animal.webp'
import nature from '@/public/nxt/nature.webp'
import hasthe from '@/public/nxt/hasthe.webp'
import answer from '@/public/nxt/answer.webp'
import arrow from '@/public/nxt/arrow.webp'
import globe from '@/public/nxt/globe.webp'
import supportYourLocalPlanet from '@/public/nxt/supportyourlocalplanet.webp'
import beRegenerative from '@/public/nxt/beregenerative.webp'
import sharingIsCaring from '@/public/nxt/sharingiscaring.webp'

export const Section3ComponentFixedFront = () => {
  return (
    <div id="section3_fixed_front">
      <div className="exit_group3">
        <div
          id="better_world"
          className="pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-5xl md:text-8xl sm:text-6xl"
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 gap-4 md:gap-2 left-1/2 md:translate-x-0 w-64 sm:w-fit md:w-[35rem] text-left flex flex-col ">
            <span className="block ml-16 md:ml-28">AND</span>
            <span className="block">A BETTER</span>
            <span className="block md:ml-28">WORLD</span>
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
            <Image src={supportYourLocalPlanet} alt=" " />
          </div>
          <div id="globe" className="absolute  w-72 lg:w-[26rem]  opacity-0">
            <Image src={globe} alt="" />
          </div>
        </div>
        <div id="s3_group_enter" className="w-full h-full fixed">
          <div
            id="be_regenerative"
            className="fixed h-0 w-0 top-1/2 left-1/2 translate-y-[-50vh] translate-x-[-50vw] overflow-visible"
          >
            <div className=" w-72 lg:w-96 absolute bottom-1/2 lg:bottom-auto lg:top-1/2 left-1/2 lg:left-auto lg:right-1/2 translate-y-[calc(-50%-100px)] translate-x-[-50%] lg:translate-y-[-50%] lg:translate-x-[calc(-50%-25px)]">
              <Image src={beRegenerative} alt="" />
            </div>
          </div>
          <div
            id="sharing_is_caring"
            className="fixed h-0 w-0 top-1/2 right-1/2 translate-y-[50vh] translate-x-[50vw]  overflow-visible"
          >
            <div className="w-72 lg:w-96 absolute top-1/2 left-1/2 translate-y-[calc(100%+100px)] translate-x-[-50%] lg:translate-y-[-50%] lg:translate-x-[calc(50%+50px)]">
              <Image src={sharingIsCaring} alt="" />
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
          className="fixed h-0 w-0 top-0 md:top-1/2 right-0 md:right-auto md:left-1/2 overflow-visible translate-y-[-50%] md:translate-y-[-100vh]"
        >
          <div className="w-48 sm:w-[16rem] md:w-[24rem] absolute top-1/2 right-0 md:right-1/2 translate-y-[-100%] md:translate-y-[-60%] ">
            <div className="relative md:translate-x-[-30%] lg:translate-x-[-50%] w-full h-auto">
              <Image src={tree} alt="" />
              <div
                id="hugger"
                className="fixed w-24 md:w-32 left-0 md:left-auto md:right-0 translate-x-[-20%] md:translate-x-[20%] bottom-24 md:bottom-auto md:top-28 opacity-0"
              >
                <Image src={hugger} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="animal"
          className="fixed h-0 w-0 top-1/2 left-0 translate-x-[-50vw] z-10  overflow-visible"
        >
          <div className="w-40 sm:w-[15rem] md:w-[22rem] absolute md:top-1/2 translate-y-[-90%] sm:translate-y-[-60%] md:translate-y-[-20%] lg:translate-y-[-17%] bottom-0 md:bottom-auto md:right-auto right-0 md:translate-x-[-80%] lg:translate-x-[-80%]">
            <Image src={animal} alt="" />
          </div>
        </div>
        <div className="fixed translate-y-[-120px] left-1/2 top-1/2 md:translate-x-[200px] md:translate-y-[-220px] scale-50 md:scale-75 lg:scale-100 lg:translate-x-[350px] lg:translate-y-[-180px] overflow-visible">
          <div
            id="arrow"
            className="opacity-0 w-64 sm:w-80 h-44 absolute right-0 bottom-0 md:bottom-auto md:top-0 translate-y-[-40px] sm:translate-y-[-100px] translate-x-[105%] sm:translate-x-[110%] md:translate-x-[-10%] md:translate-y-[-0%] lg:translate-x-[-40%] lg:translate-y-[-40%] rotate-[70deg] sm:rotate-[50deg] md:-rotate-12 lg:rotate-0"
          >
            <Image
              src={arrow}
              fill
              style={{
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          <div
            id="nature"
            className="opacity-0 w-60 absolute translate-y-[-5%] sm:translate-y-[-110%] translate-x-[10%] sm:translate-x-[20%] md:translate-x-[-40%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
          >
            <Image src={nature} alt="" />
          </div>
          <div
            id="hasthe"
            className="opacity-0 w-48 absolute translate-y-[160%] translate-x-[65%] sm:translate-x-[78%] sm:translate-y-[-80%] md:translate-y-[-50%] md:translate-x-[-10%] lg:translate-y-[50%]"
          >
            <Image src={hasthe} alt="" />
          </div>
          <div
            id="answer"
            className="opacity-0 w-56 absolute translate-y-[150%] translate-x-[47%] sm:translate-x-[63%] sm:translate-y-[-2%] md:translate-y-[20%] md:translate-x-[-10%] lg:translate-x-[-15%] lg:translate-y-[73%]"
          >
            <Image src={answer} alt="" />
          </div>
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
        <div id="enter_tree" className="h-[150vh]  " />
        {/* ENTER ANIMAL */}
        <div id="enter_animal" className="h-[100vh]" />
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
    const elem = document.querySelector('#better_world')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_better_world', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#tree')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    }
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            top: '50%'
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // TREE INNER
  () => {
    const id = 'enter_tree_inner' // animation id
    const elem = document.querySelectorAll('#tree > div')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    }
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '0%'
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // HUGGER
  () => {
    const id = 'enter_hugger' // animation id
    const elem = document.querySelector('#hugger')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 20%',
        end: 'bottom 0%',
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
    const elem = document.querySelector('#animal')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_animal', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    }
    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-50vw',
          },
        ],
      },
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
  // NATURE
  () => {
    const id = 'enter_nature' // animation id
    const elem = document.querySelector('#nature')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nature', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#hasthe')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_hasthe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#answer')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_answer', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#arrow')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_arrow', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelectorAll('.exit_group3')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all3', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#support')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_support', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#globe')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#globe_rotate')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#be_regenerative')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#sharing_is_caring')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#s3_group_exit')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s3', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#better_world')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_better_world', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#tree')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    }
    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            y: '-100vh',
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '0vh',
          },
        ],
      },
    ]
    return { id, elem, settings, animation }
  },
  // HUGGER
  () => {
    const id = 'enter_hugger' // animation id
    const elem = document.querySelector('#hugger')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_tree', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#animal')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_animal', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    }
    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-50vw',
          },
        ],
      },
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
  // NATURE
  () => {
    const id = 'enter_nature' // animation id
    const elem = document.querySelector('#nature')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nature', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#hasthe')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_hasthe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#answer')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_answer', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#arrow')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_arrow', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelectorAll('.exit_group3')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all3', // which section will be tracked as the scroll trigger
        
        scrub: 0.5,
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
    const elem = document.querySelector('#support')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_support', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#globe')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#globe_rotate')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_globe_rotate', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#be_regenerative')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#sharing_is_caring')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_globe', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
    const elem = document.querySelector('#s3_group_exit')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s3', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
