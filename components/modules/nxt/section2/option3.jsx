import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/legacy/image'
import Container from '../../container'
import FancyLink from '@/components/utils/fancyLink'

// IMPORT LOCAL IMAGE
import section2_bg1 from '@/public/nxt2/section2_bg1.png'
import PillButton from '../../pillButton'
import urlFor from '@/helpers/sanity/urlFor'

export const Section2Option3ComponentInner = ({ data }) => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-full z-10">
        <div className="sticky top-0 w-full h-screen flex flex-col">
          <div className="absolute top-0 left-10 h-full flex flex-col justify-center gap-8 z-20">
            <PillButton
              destination="/"
              className="uppercase bg-red-500 text-white"
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
              className="uppercase bg-red-500 text-white pointer-events-none"
            >
              Option 3
            </PillButton>
          </div>
          <Container className="relative w-full h-full grow setflex-center">
            <div
              id="section2_content"
              className="relative z-10 w-full h-full opacity-0"
            >
              <div className="relative w-full h-full setflex-center ">
                <div className="relative w-full setflex-center">
                  <span className="text-[1.125rem] md:text-[1.875rem] text-[#BEC29D]">
                    {data.title}
                  </span>
                  <p className="text-m-additionalTitle md:text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 max-w-md md:max-w-none text-center">
                    {data.description}
                  </p>
                </div>
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
        <div className="relative w-full h-screen pointer-events-none" />
      </div>
      <div className="absolute top-0 left-0 w-full h-[200vh] flex items-end z-1 pointer-events-none">
        <div className="relative w-full h-screen flex items-center">
          <Container className="relative h-[50vh] md:h-screen flex justify-start pointer-events-none z-20">
            <div className="relative w-[30vw] md:w-[25vw] max-w-[500px] h-full">
              <div className="relative w-full h-[25vw]">
                <Image
                  src={urlFor(data.imageNormal).width(798).url()}
                  alt=""
                  layout='fill'
                  objectFit='contain'
                  placeholder="blur"
                  blurDataURL={urlFor(data.imageNormal)
                    .blur(2)
                    .format('webp')
                    .width(100)
                    .url()}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-[200vh] flex items-end z-20 pointer-events-none">
        <div className="relative w-full h-screen flex items-center">
          <Container className="relative h-[50vh] md:h-screen flex justify-end pointer-events-none z-20">
            <div className="relative w-[30vw] md:w-[25vw] max-w-[500px] h-full flex items-end">
              <div className="relative w-full h-[25vw]">
                <Image
                  src={urlFor(data.imageNormal).width(798).url()}
                  alt=""
                  layout='fill'
                  objectFit='contain'
                  placeholder="blur"
                  blurDataURL={urlFor(data.imageNormal)
                    .blur(2)
                    .format('webp')
                    .width(100)
                    .url()}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
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
]
