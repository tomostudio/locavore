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

export const Section2Option1ComponentInner = ({ data }) => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen flex flex-col overflow-hidden">
        <div className="absolute top-0 left-10 h-full flex flex-col justify-center gap-8 z-10">
          <PillButton
            destination="/"
            className="uppercase bg-red-500 text-white pointer-events-none"
          >
            Option 1
          </PillButton>
          <PillButton
            destination="/nxt/option2"
            className="uppercase bg-red-500 text-white"
          >
            Option 2
          </PillButton>
          <PillButton
            destination="/nxt/option3"
            className="uppercase bg-red-500 text-white"
          >
            Option 3
          </PillButton>
        </div>
        <Parallax className="absolute w-full h-full" speed={-10}>
          <Image
            src={urlFor(data.imageWide).width(1440).url()}
            alt=""
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={urlFor(data.imageWide)
              .blur(2)
              .format('webp')
              .width(100)
              .url()}
          />
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
                {data.title}
              </span>
              <p className="text-m-additionalTitle md:text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 max-w-md md:max-w-none text-center">
                {data.description}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end">
              <FancyLink
                className={`w-fit p-4 mb-[4.5rem] text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
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
