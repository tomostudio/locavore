import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'
import FancyLink from '@/components/utils/fancyLink'
import { useAppContext } from 'context/state'

// IMPORT LOCAL IMAGE
import building from '@/public/nxt2/building.png'

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <section className="relative w-full overflow-x-clip">
      <div className="w-full">
        <div className="sticky z-10 top-0 w-full h-screen flex flex-col">
          <div className="relative w-full h-screen">
            <Container className="relative w-full h-full z-10 setflex-center">
              <span className="text-black text-center font-funkturm text-d-additionalTitle leading-full">
                FEATURES <br />&<br /> FACILITIES
              </span>
            </Container>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
              <FancyLink
                id="btn-features"
                className={`opacity-0 w-fit p-4 text-d-small text-black bg-white bg-opacity-80 font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-black rounded-xl`}
              >
                OUR FEATURES & FACILITIES
              </FancyLink>
            </div>
            <div
              id="building"
              className="absolute top-0 left-1/2 translate-y-[100vh] -translate-x-1/2 w-full h-[95vh] z-10"
            >
              <div className="relative w-full h-full">
                <Image
                  src={building}
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div
              id="bg-white-scale"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[125%] h-[170%] clip-path-circle-[0%] rounded-50% bg-white"
            />
          </div>
        </div>
        <div id="enter-bg-white-scale" className="h-[100vh]" />
        <div id="enter-building" className="h-[100vh]" />
        <div className="h-[25vh]" />
      </div>
      <div className="w-full h-[35vh]" />
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
          start: 'top 100%',
          end: 'bottom 100%',
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
    // BUTTON FEATURES ENTER
    () => {
      const id = 'btn-features-enter' // animation id
      const elem = document.querySelector('#btn-features')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-bg-white-scale'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 90%',
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
          onEnterBack: () => checkHeader('blur'),
          onLeave: () => checkHeader('blur-white'),
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
  ]
}
