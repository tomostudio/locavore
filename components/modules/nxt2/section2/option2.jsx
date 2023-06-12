import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import { m, useAnimation } from 'framer-motion'
import { useInView } from 'react-cool-inview'

// IMPORT LOCAL IMAGE
import section2_bg from '@/public/nxt2/section2_bg1.png'
import Container from '../../container'

export const Section2Option2ComponentInner = () => {
  const controls = useAnimation()
  const { observe } = useInView({
    threshold: 1,
    unobserveOnEnter: true,
    onEnter: () => {
      controls.start('visible')
    },
  })
  const variants = {
    hidden: {
      left: '50%',
      bottom: '0%',
      y: '90vh',
      x: '-50%',
    },
    visible: {
      left: '50%',
      bottom: '50%',
      y: '50%',
      x: '-50%',
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <section className="relative w-full">
      <div
        ref={observe}
        className="sticky z-10 top-0 w-full h-screen flex flex-col"
      >
        <Container className="relative w-full h-full grow setflex-center">
          <div
            // id="section2_content"
            className="relative z-10 w-full h-full"
          >
            <div className="relative w-full h-full setflex-center pb-20">
              <span className="text-[1.875rem] text-[#BEC29D]">
                WHAT’S ON LOCAVORE
              </span>
              <div className="relative text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 text-center">
                A HISTORY OF LOCAVORE IN 50 EDIBLE IDEAS
                <m.div
                  animate={controls}
                  initial="hidden"
                  variants={variants}
                  onAnimationStart={() => {
                    document
                      .querySelector('body')
                      .classList.add('overflow-hidden')
                  }}
                  onAnimationComplete={() => {
                    document
                      .querySelector('body')
                      .classList.remove('overflow-hidden')
                  }}
                  className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 translate-y-[100vh] w-full h-full"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={section2_bg}
                      alt=""
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </m.div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end">
              <FancyLink
                className={`w-fit p-4 mb-24 text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                destination="/nxt/collaborators"
              >
                VIEW MENU
              </FancyLink>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-[50vh]" />
    </section>
  )
}

export const Section2Option2AnimationOBJMobile = []

export const Section2Option2AnimationOBJ = [
  // SECTION 2 OPTION 3
  // CONTENT ENTER
  () => {
    const id = 'section2-content-enter' // animation id
    const elem = document.querySelector('#section2_content')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#section2_content'), // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 80%',
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
]
