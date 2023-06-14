import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'

// IMPORT LOCAL IMAGE
import section2_bg from '@/public/nxt2/section2_bg1.png'
import Container from '../../container'
import PillButton from '../../pillButton'
import { Parallax } from 'react-scroll-parallax'

export const Section2Option1ComponentInner = () => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen flex flex-col overflow-hidden">
        <Parallax className="absolute w-full h-full" speed={-10}>
          <Image src={section2_bg} alt="" fill style={{ objectFit: 'cover' }} />
        </Parallax>
        <div
          id="black-layer-option1"
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        />
        <Container className="relative w-full h-full grow setflex-center">
          <div
            id="section2_content-option1"
            className="relative z-10 w-full h-full opacity-0"
          >
            <div className="relative w-full h-full setflex-center ">
              <span className="text-[1.875rem] text-[#BEC29D]">
                WHAT’S ON LOCAVORE
              </span>
              <p className="text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 text-center">
                A HISTORY OF LOCAVORE IN 50 EDIBLE IDEAS
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end">
              <FancyLink
                className={`w-fit p-4 mb-16 text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                destination="/nxt/menu"
              >
                VIEW MENU
              </FancyLink>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export const Section2Option1AnimationOBJMobile = []

export const Section2Option1AnimationOBJ = [
  // SECTION 2 OPTION 3
  // CONTENT ENTER
  () => {
    const id = 'section2-content-enter-option1' // animation id
    const elem = document.querySelector('#section2_content-option1')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#section2_content-option1'), // which section will be tracked as the scroll trigger
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
