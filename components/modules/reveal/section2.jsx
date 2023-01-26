import React from 'react'
import 'intersection-observer' // optional polyfill
import { useInView } from 'react-cool-inview'

export const Section2ComponentFixedFront = () => {
  return (
    // <>
    //   <div id='section2_fixed_front'></div>
    // </>
    <div id="section3_fixed_front">
      <div id="s3_exit_group_front">
        <div
          id="s3_title"
          className=" pointer-events-none font-funkturm fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl"
        >
          <div>
            INSPIRED
            <br />
            BY
          </div>
          NICE
          <div>THINGS</div>
        </div>
      </div>
      {/* <div
      id="eyes"
      className="opacity-0 h-24 w-[50vh] fixed z-50 bottom-[15vh] left-1/2 translate-x-[-50%] translate-y-[200px] will-change-auto"
    >
      <Image src="/nxt/eyes.png" layout="fill" objectFit="contain" />
    </div> */}
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
        {/* WE HAD A DREAM */}
        <div
          id="enter-dream"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        {/* EYES */}
        <div
          id="enter-eyes"
          className="h-[100vh] __b bg-green-600 bg-opacity-50"
        />
        <Section1MarkerTop
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
        <Section1MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        <div id="exit-all" className="h-[50vh] __b bg-red-600 bg-opacity-50" />
      </section>
    </>
  )
}

export const Section2AnimationOBJ = [
  // SECTION 2
  // TITLE ENTER
  () => {
    // INSPIRED BY NICE THINGS IN
    const id = 'wehaveadream-enter' // animation id
    const elem = '#s2_title'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-dream', // which section will be tracked as the scroll trigger
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
            scale: 5,
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
