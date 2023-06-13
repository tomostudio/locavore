import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../../container'
import FancyLink from '@/components/utils/fancyLink'

// IMPORT LOCAL IMAGE
import section2_bg1 from '@/public/nxt2/section2_bg1.png'
import PillButton from '../../pillButton'

export const Section2Option3ComponentInner = () => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen flex flex-col">
        <div className="absolute top-0 left-10 h-full flex flex-col justify-center gap-8 z-10">
          <PillButton destination="/" className="uppercase bg-white">
            Option 1
          </PillButton>
          <PillButton destination="/option2" className="uppercase bg-white">
            Option 2
          </PillButton>
          <PillButton
            destination="/option3"
            className="uppercase bg-white pointer-events-none"
          >
            Option 3
          </PillButton>
        </div>
        <Container className="relative w-full h-full grow setflex-center">
          <div
            id="section2_content"
            className="relative z-10 w-full h-auto opacity-0"
          >
            <div
              id="section2_bg1"
              className="absolute top-0 left-0 translate-y-[80vh] w-[384px] h-[210px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={section2_bg1}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="relative w-full h-full setflex-center ">
              <span className="text-[1.875rem] text-[#BEC29D]">
                WHAT’S ON LOCAVORE
              </span>
              <p className="text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 text-center">
                A HISTORY OF LOCAVORE IN 50 EDIBLE IDEAS
              </p>
              <FancyLink
                className={`w-fit p-4 text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                destination="/nxt/menu"
              >
                VIEW MENU
              </FancyLink>
            </div>
            <div
              id="section2_bg2"
              className="absolute z-20 bottom-0 right-0 translate-y-[90vh] w-[384px] h-[210px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={section2_bg1}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div id="enter-bg" className="h-[100vh]" />
      <div className="h-[25vh]" />
    </section>
  )
}

export const Section2Option3AnimationOBJMobile = []

export const Section2Option3AnimationOBJ = [
  // SECTION 2
  // CONTENT ENTER
  () => {
    const id = 'section2-content-enter-option3' // animation id
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
  // BACKGROUND 1 ENTER
  () => {
    const id = 'bg1-enter-option3' // animation id
    const elem = document.querySelector('#section2_bg1')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#enter-bg'), // which section will be tracked as the scroll trigger
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
            top: 0,
            y: 0,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // BACKGROUND 2 ENTER
  () => {
    const id = 'bg2-enter-option3' // animation id
    const elem = document.querySelector('#section2_bg2')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#enter-bg'), // which section will be tracked as the scroll trigger
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
            bottom: 0,
            y: 0,
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
]
