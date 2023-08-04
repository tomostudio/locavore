import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/legacy/image'
import FancyLink from '@/components/utils/fancyLink'

import Container from '../../container'
import urlFor from '@/helpers/sanity/urlFor'

export const Section2Option2ComponentInner = ({ menuSectionOption2 }) => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen flex flex-col">
        <Container className="relative w-full h-full grow setflex-center">
          <div
            id="section2_content-option2"
            className="relative z-10 w-full h-full opacity-0"
          >
            <div className="relative w-full h-full setflex-center">
              <span className="text-[1.125rem] md:text-[1.875rem] text-[#BEC29D]">
                {menuSectionOption2.menuTitle}
              </span>
              <p className="relative uppercase text-m-additionalTitle sm:text-[4rem] md:text-[5rem] lg:text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 max-w-md md:max-w-none text-center">
                {menuSectionOption2.heading}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-end">
              <FancyLink
                className={`w-fit py-4 px-6 mb-20 lg:mb-[4.5rem] uppercase text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                destination="/nxt/menu"
              >
                {menuSectionOption2.button}
              </FancyLink>
            </div>
          </div>
        </Container>
      </div>
      <Container className="relative setflex-center pointer-events-none z-20">
        <div className="relative w-full max-w-3xl aspect-[266/145]">
          <Image
            src={urlFor(menuSectionOption2.imageOption2).width(798).url()}
            alt={menuSectionOption2.imageOption2.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={urlFor(menuSectionOption2.imageOption2)
              .blur(2)
              .format('webp')
              .width(100)
              .url()}
          />
        </div>
      </Container>
      <div className="relative h-screen" />
    </section>
  )
}

export const Section2Option2AnimationOBJMobile = []

export const Section2Option2AnimationOBJ = [
  // SECTION 2 OPTION 3
  // CONTENT ENTER
  () => {
    const id = 'section2-content-enter-option2' // animation id
    const elem = document.querySelector('#section2_content-option2')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#section2_content-option2'), // which section will be tracked as the scroll trigger
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
