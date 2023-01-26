import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'
import Image from 'next/legacy/image'

export const Section2ComponentFixedFront = () => {
  return (
    // <>
    //   <div id='section2_fixed_front'></div>
    // </>
    <div id="section2_fixed_front">
      <div id="s2_exit_group_front">
        <div
          id="s2_title"
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
      </div>
      <div
        id="flower_bee_worm_butterfly"
        className="fixed w-full h-full z-50 opacity-0"
      >
        <div className='w-28 h-28 fixed left-1/2 translate-x-[-540%] translate-y-[150px]'>
          <Image src="/nxt/sunflower02.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-28 h-28 fixed left-1/2 top-1/2 translate-x-[-195%] translate-y-[-276%]'>
          <Image src="/nxt/worm.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-20 h-20 fixed left-1/2 translate-x-[100%] translate-y-[45px]'>
          <Image src="/nxt/butterfly02.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-12 h-12 fixed right-0 translate-x-[-360px] translate-y-[140px]'>
          <Image src="/nxt/bee01.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-20 h-20 fixed right-0 translate-x-[-410px] translate-y-[215px]'>
          <Image src="/nxt/butterfly01.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-40 h-40 fixed left-1/2 translate-x-[-460%] bottom-0'>
          <Image src="/nxt/sunflower01.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-14 h-14 fixed left-1/2 translate-x-[-1030%] bottom-0 translate-y-[-180%]'>
          <Image src="/nxt/bee03.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-14 h-14 fixed left-1/2 translate-x-[-1220%] bottom-0 translate-y-[-400%]'>
          <Image src="/nxt/bee02.png" layout="fill" objectFit="contain" />
        </div>
        <div className='w-28 h-28 fixed right-0 translate-x-[-250%] bottom-0 translate-y-[-100%]'>
          <Image src="/nxt/sunflower03.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  )
}

export const Section2ComponentFixedBack = () => {
  return (
    <>
      <div id="section2_fixed_back"></div>
    </>
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

// export const Section2ComponentInner = ({ setCaption, setBgColor }) => {
//   return (
//     <>
//       {/* Section 2 */}
//       <section
//         id="trigger2"
//         className="trigger relative w-full text-4xl flex flex-col justify-center items-center "
//         data-scroll-section
//       >
//         <Section2MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
//         <div className="h-[200vh] flex justify-center flex-col">SECTION 2</div>
//         <Section2MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
//       </section>
//     </>
//   )
// }

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
        data-scroll-section
      >
        <div id="enter2" className="h-[25vh] __b bg-blue-600 bg-opacity-50" />
        {/* INSPIRED BY NICE THINGS */}
        <div
          id="enter-inspired"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        >
          INSPIRED ENTER
        </div>
        {/* BUG WORM FLOWER */}
        <div
          id="enter-bug-worm-flower"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        <Section2MarkerTop
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
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
        {/* DREAM LEFT TO RIGHT */}
        <div
          id="dream-trigger"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        {/* WISH NORMAL*/}
        <div id="wish" className="w-full mx-auto max-w-screen-lg mb-40">
          <div className="relative w-96 h-30rem">
            <Image src="/nxt/wish.png" layout="fill" objectFit="contain" />
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
        <Section2MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        <div id="exit-all2" className="h-[50vh] __b bg-red-600 bg-opacity-50" />
      </section>
    </>
  )
}

export const Section2AnimationOBJ = [
  // SECTION 2
  // TITLE ENTER
  () => {
    // INSPIRED BY NICE THINGS IN
    const id = 'inspiredbynicethings-enter' // animation id
    const elem = '#s2_title'
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
  // EXIT GROUPED
  () => {
    const id = 'title-exit-front' // animation id
    const elem = '#s2_exit_group_front'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-all2', // which section will be tracked as the scroll trigger
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
  // EYES ENTER
  () => {
    const id = 'bug-worm-flower-enter' // animation id
    const elem = '#flower_bee_worm_butterfly'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-bug-worm-flower', // which section will be tracked as the scroll trigger
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
