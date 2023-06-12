import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'

// IMPORT LOCAL IMAGE
import section2_bg from '@/public/nxt2/section2_bg1.png'
import Container from '../../container'
import PillButton from '../../pillButton'

export const Section2Option1ComponentInner = () => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen flex flex-col">
        <div className="absolute top-0 left-10 h-full flex flex-col justify-center gap-8 z-10">
          <PillButton
            destination="/"
            className="uppercase bg-white pointer-events-none"
          >
            Option 1
          </PillButton>
          <PillButton destination="/nxt/option2" className="uppercase bg-white">
            Option 2
          </PillButton>
          <PillButton destination="/nxt/option3" className="uppercase bg-white">
            Option 3
          </PillButton>
        </div>
        <Image src={section2_bg} alt="" fill style={{ objectFit: 'cover' }} />
        <div
          id="black-layer-option1"
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        />
        <Container className="relative w-full h-full grow setflex-center">
          <div
            id="section2_content-option1"
            className="relative z-10 w-full h-auto opacity-0"
          >
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
