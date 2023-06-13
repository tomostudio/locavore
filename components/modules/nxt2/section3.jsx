import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'
import FancyLink from '@/components/utils/fancyLink'
import { useAppContext } from 'context/state'
import { m, useAnimation } from 'framer-motion'

// IMPORT LOCAL IMAGE
import lower_ground from '@/public/nxt/lower-ground.webp'
import ground from '@/public/nxt/ground.webp'
import firstFloor from '@/public/nxt/1st-floor.webp'
import secondFloor from '@/public/nxt/2nd-floor.webp'
import tunnel from '@/public/nxt/tunnel.webp'
import { useInView } from 'react-cool-inview'

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  const controls = useAnimation()
  const { observe } = useInView({
    threshold: 0,
    unobserveOnEnter: true,
    onEnter: () => {
      controls.start('visible')
    },
  })
  const variantsBg = {
    hidden: {
      clipPath: 'circle(0%)',
    },
    visible: {
      clipPath: 'circle(55%)',
      transition: {
        duration: 1,
      },
    },
  }

  const variantsBuilding = {
    hidden: {
      left: '50%',
      top: 0,
      y: '120vh',
      x: '-50%',
    },
    visible: {
      left: '50%',
      top: '50%',
      y: '-50%',
      x: '-50%',
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  }

  const variantsTunnel = {
    hidden: {
      top: '50%',
      y: '-95%',
    },
    visible: {
      top: '50%',
      y: '-41.1%',
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  }

  const variantsSecondFloor = {
    hidden: {
      top: '50%',
      y: '-87%',
    },
    visible: {
      top: '50%',
      y: '-41.2%',
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  }

  const variantsFirstFloor = {
    hidden: {
      top: '50%',
      y: '-62%',
    },
    visible: {
      top: '50%',
      y: '-42.5%',
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  }

  const variantsGround = {
    hidden: {
      top: '50%',
      y: '-30%',
    },
    visible: {
      top: '50%',
      y: '-45%',
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  }

  const variantsLowerGround = {
    hidden: {
      top: '50%',
      y: '-5%',
    },
    visible: {
      top: '50%',
      y: '-45%',
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  }

  const variantsButton = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 4,
      },
    },
  }

  return (
    <section className="relative w-full overflow-x-clip my-[40vh]">
      <div className="w-full">
        <div
          className="sticky z-10 top-0 w-full h-screen flex flex-col"
        >
          <div className="relative w-full h-screen">
            <Container className="relative w-full h-full z-20 setflex-center">
              <span className="text-[#BEC29D] text-center font-funkturm text-d-additionalTitle leading-full ">
                OUR
                <br />
                FACILITIES
              </span>
            </Container>
            <m.div
              animate={controls}
              initial="hidden"
              variants={variantsButton}
              className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex justify-center items-end"
            >
              <FancyLink
                className="w-fit p-4 mb-24 text-d-small bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm text-black font-default tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl"
                destination="/nxt/facilities"
              >
                VIEW OUR FACILITIES
              </FancyLink>
            </m.div>
            <m.div
              animate={controls}
              initial="hidden"
              variants={variantsBuilding}
              className="absolute top-0 left-1/2 translate-y-[120vh] -translate-x-1/2 w-full h-[95vh] z-2 max-w-screen-xl"
            >
              <div className="relative w-full h-full">
                <m.div
                  animate={controls}
                  initial="hidden"
                  variants={variantsTunnel}
                  className="absolute w-full h-full z-40 top-1/2  translate-y-[-95%]"
                >
                  <Image src={tunnel} alt="" fill className="object-contain" />
                </m.div>
                <m.div
                  animate={controls}
                  initial="hidden"
                  variants={variantsSecondFloor}
                  className="absolute w-full h-full z-30 top-1/2  translate-y-[-87%]"
                >
                  <Image
                    src={secondFloor}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </m.div>
                <m.div
                  animate={controls}
                  initial="hidden"
                  variants={variantsFirstFloor}
                  className="absolute w-full h-full z-20 top-1/2  translate-y-[-62%]"
                >
                  <Image
                    src={firstFloor}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </m.div>
                <m.div
                  animate={controls}
                  initial="hidden"
                  variants={variantsGround}
                  className="absolute w-full h-full z-10 top-1/2 translate-y-[-30%]"
                >
                  <Image src={ground} alt="" fill className="object-contain" />
                </m.div>
                <m.div
                  animate={controls}
                  initial="hidden"
                  variants={variantsLowerGround}
                  className="absolute w-full h-full  top-1/2 translate-y-[-5%]"
                >
                  <Image
                    src={lower_ground}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </m.div>
              </div>
            </m.div>
            <m.div
              animate={controls}
              initial="hidden"
              variants={variantsBg}
              id="bg-white-scale"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[125%] h-[170%] clip-path-circle-[0%] rounded-50% bg-white"
            />
          </div>
          <div ref={observe} className='w-full' />
        </div>
      </div>
      <div id="enter-blur" className="w-full h-[10vh]" />
    </section>
  )
}

export const Section3AnimationOBJMobile = []

export const Section3AnimationOBJ = () => {
  const appContext = useAppContext()
  const checkHeader = (data) => {
    appContext.setHeader({
      headerStyle: data,
    })
  }
  return [
    // BG WHITE SCALE ENTER
    () => {
      const id = 'bg-white-scale-enter' // animation id
      const elem = document.querySelector('#bg-white-scale')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#bg-white-scale'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top -20%',
          end: 'top -20%',
          onEnterBack: () => checkHeader('blur-white'),
          onLeave: () => checkHeader('blur'),
        },
      }

      // Input Animation
      const animation = []

      return { id, elem, settings, animation }
    },
    // ENTER BLUR
    () => {
      const id = 'blur-enter' // animation id
      const elem = document.querySelector('#enter-blur')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-blur'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'bottom 50%',
          end: 'bottom 0%',
          onEnterBack: () => checkHeader('blur'),
          onLeave: () => checkHeader('blur-white'),
        },
      }

      // Input Animation
      const animation = []

      return { id, elem, settings, animation }
    },
  ]
}
