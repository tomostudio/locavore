import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/legacy/image'
import FancyLink from '@/components/utils/fancyLink'

// IMPORT LOCAL IMAGE
import section2_bg from '@/public/nxt2/section2_bg1.png'
import Container from '../../container'
import PillButton from '../../pillButton'
import { Parallax } from 'react-scroll-parallax'
import urlFor from '@/helpers/sanity/urlFor'

export const Section2Option1ComponentInner = ({ menuSectionOption1 }) => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen flex flex-col overflow-hidden">
        <Parallax className="absolute w-full h-full" speed={-10}>
          <div className="relative w-full h-full hidden md:block">
            <Image
              src={urlFor(menuSectionOption1.imageOption1.imageDesktop)
                .width(1440)
                .url()}
              alt={menuSectionOption1.imageOption1.imageDesktop.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={urlFor(menuSectionOption1.imageOption1.imageDesktop)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
            />
          </div>
          <div className="relative w-full h-full md:hidden">
            <Image
              src={urlFor(menuSectionOption1.imageOption1.imageMobile)
                .width(1440)
                .url()}
              alt={menuSectionOption1.imageOption1.imageMobile.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={urlFor(menuSectionOption1.imageOption1.imageMobile)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
            />
          </div>
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
              <span className="text-[1.125rem] md:text-[1.875rem] text-[#BEC29D]">
                {menuSectionOption1.menuTitle}
              </span>
              <p className="text-m-additionalTitle uppercase sm:text-[4rem] md:text-[5rem] lg:text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 max-w-md md:max-w-none text-center">
                {menuSectionOption1.heading}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end">
              <FancyLink
                className={`w-fit py-4 px-6 mb-20 lg:mb-[4.5rem] uppercase text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                destination="/nxt/menu"
              >
                {menuSectionOption1.button}
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
