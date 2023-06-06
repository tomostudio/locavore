import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'
import FancyLink from '@/components/utils/fancyLink'
import { useAppContext } from 'context/state'

// IMPORT LOCAL IMAGE
import lower_ground from '@/public/nxt/lower-ground.webp'
import ground from '@/public/nxt/ground.webp'
import firstFloor from '@/public/nxt/1st-floor.webp'
import secondFloor from '@/public/nxt/2nd-floor.webp'
import tunnel from '@/public/nxt/tunnel.webp'

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <section className="relative w-full overflow-x-clip">
      <div className="w-full">
        <div className="sticky z-10 top-0 w-full h-screen flex flex-col">
          <div className="relative w-full h-screen">
            <Container className="relative w-full h-full z-10 setflex-center">
              <span className="text-black text-center font-funkturm text-d-additionalTitle leading-full">
                FACILITIES
              </span>
            </Container>
            <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex justify-center items-end">
              <FancyLink
                id="btn-features"
                className={`opacity-0 w-fit p-4 mb-24 text-d-small text-black font-default tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl`}
                destination="/nxt/facilities"
              >
                OUR FACILITIES
              </FancyLink>
            </div>
            <Container
              id="building"
              className="absolute top-0 left-1/2 translate-y-[120vh] -translate-x-1/2 w-full h-[100vh] z-10"
            >
              <div className="relative w-full h-full">
                <div
                  id="tunnel"
                  className="absolute w-[100%] z-40 top-1/2  translate-y-[-95%]"
                >
                  <Image src={tunnel} alt="" />
                </div>
                <div
                  id="second_floor"
                  className="absolute w-[100%] z-30 top-1/2  translate-y-[-87%]"
                >
                  <Image src={secondFloor} alt="" />
                </div>
                <div
                  id="first_floor"
                  className="absolute w-[100%] z-20 top-1/2  translate-y-[-62%]"
                >
                  <Image src={firstFloor} alt="" />
                </div>
                <div
                  id="ground"
                  className="absolute w-[100%]  z-10 top-1/2  translate-y-[-30%]"
                >
                  <Image src={ground} alt="" />
                </div>
                <div
                  id="lower_ground"
                  className="absolute w-[100%]  top-1/2 translate-y-[-5%]"
                >
                  <Image src={lower_ground} alt="" />
                </div>
              </div>
            </Container>
            <div
              id="bg-white-scale"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[125%] h-[170%] clip-path-circle-[0%] rounded-50% bg-white"
            />
          </div>
        </div>
        <div id="enter-bg-white-scale" className="h-[25vh]" />
        <div id="enter-building" className="h-[100vh]" />
        {/* Building Buffer */}
        <div className="h-[25vh]" />
        {/* <div id="enter-restructure-building" className="h-[100vh]" /> */}
        <div id="enter-btn-collab" className="h-[25vh]" />
        {/* Ending Buffer */}
        <div className="h-[25vh]" />
      </div>
      <div id="enter-blur" className="w-full h-[25vh]" />
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
    // SECTION 3
    // BG WHITE SCALE ENTER
    () => {
      const id = 'bg-white-scale-enter' // animation id
      const elem = document.querySelector('#bg-white-scale')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-bg-white-scale'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 150%',
          end: 'top 100%',
          onEnterBack: () => checkHeader('blur-white'),
          onLeave: () => checkHeader('blur'),
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              clipPath: 'circle(100%)',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // BUILDING ENTER
    () => {
      const id = 'building-enter' // animation id
      const elem = document.querySelector('#building')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
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
              top: '50%',
              y: '-50%',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // TUNNEL ENTER
    () => {
      const id = 'tunnel-enter' // animation id
      const elem = document.querySelector('#tunnel')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          // markers: true,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-95%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-41.1%',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // ENTER SECOND FLOOR
    () => {
      const id = 'enter_second_floor' // animation id
      const elem = document.querySelector('#second_floor')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-87%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-41.2%',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // ENTER FIRST FLOOR
    () => {
      const id = 'enter_first_floor' // animation id
      const elem = document.querySelector('#first_floor')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-62%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-42.5%',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // ENTER GROUND
    () => {
      const id = 'enter_ground' // animation id
      const elem = document.querySelector('#ground')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-30%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-45%',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // ENTER LOWER GROUND
    () => {
      const id = 'enter_lower_round' // animation id
      const elem = document.querySelector('#lower_ground')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-5%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-45%',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    // BUTTON FEATURES ENTER
    () => {
      const id = 'btn-features-enter' // animation id
      const elem = document.querySelector('#btn-features')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-btn-collab'), // which section will be tracked as the scroll trigger
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
              opacity: 1,
            },
          ],
        },
      ]

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
