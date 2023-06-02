import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'

// IMPORT LOCAL IMAGE
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import FancyLink from '@/components/utils/fancyLink'

export const Section5ComponentInner = () => {
  return (
    <>
      <section id="trigger5" className="trigger relative w-full flex flex-col">
        <Container className="mb-10">
          <div className="relative w-full flex flex-col items-center border-2 border-white rounded-2xl p-20">
            <div className="absolute top-7 left-7 w-4 h-4 bg-white rounded-50%" />
            <div className="absolute top-7 right-7 w-4 h-4 bg-white rounded-50%" />
            <div className="absolute bottom-7 left-7 w-4 h-4 bg-white rounded-50%" />
            <div className="absolute bottom-7 right-7 w-4 h-4 bg-white rounded-50%" />
            <span className="text-[#BEC29D] text-center font-funkturm text-d-additionalTitle leading-full">
              WHAT'S ON?
            </span>
            <div className="w-full my-16 grid grid-cols-3 gap-8">
              <FancyLink
                className="group hover:border-[#BEC29D] hover:text-black hover:bg-[#BEC29D] w-full pointer-events-auto cursor-pointer transition-all duration-300 border-2 border-white rounded-xl flex flex-col p-8 text-white"
                destination="/nxt/events-programs/detail"
              >
                <span className="text-d-body">10 OCTOBER 2023</span>
                <div className="event-image relative w-full aspect-w-1 aspect-h-1 my-5 border-2 group-hover:border-[#BEC29D] border-white">
                  <Image src={card_bnw} className="group-hover:hidden" />
                  <Image src={card} className="hidden group-hover:block" />
                </div>
                <span className="font-bold text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-d-small mt-1">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </FancyLink>
              <FancyLink
                className="group hover:border-[#BEC29D] hover:text-black hover:bg-[#BEC29D] w-full pointer-events-auto cursor-pointer transition-all duration-300 border-2 border-white rounded-xl flex flex-col p-8 text-white"
                destination="/nxt/events-programs/detail"
              >
                <span className="text-d-body">10 OCTOBER 2023</span>
                <div className="event-image relative w-full aspect-w-1 aspect-h-1 my-5 border-2 group-hover:border-[#BEC29D] border-white">
                  <Image src={card_bnw} className="group-hover:hidden" />
                  <Image src={card} className="hidden group-hover:block" />
                </div>
                <span className="font-bold text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-d-small mt-1">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </FancyLink>
              <FancyLink
                className="group hover:border-[#BEC29D] hover:text-black hover:bg-[#BEC29D] w-full pointer-events-auto cursor-pointer transition-all duration-300 border-2 border-white rounded-xl flex flex-col p-8 text-white"
                destination="/nxt/events-programs/detail"
              >
                <span className="text-d-body">10 OCTOBER 2023</span>
                <div className="event-image relative w-full aspect-w-1 aspect-h-1 my-5 border-2 group-hover:border-[#BEC29D] border-white">
                  <Image src={card_bnw} className="group-hover:hidden" />
                  <Image src={card} className="hidden group-hover:block" />
                </div>
                <span className="font-bold text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-d-small mt-1">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </FancyLink>
            </div>
            <FancyLink
              className={`w-fit p-4 text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              destination="/nxt/events-programs"
            >
              VIEW ALL EVENTS & PROGRAMS
            </FancyLink>
          </div>
        </Container>
      </section>
    </>
  )
}

export const Section5AnimationOBJMobile = []

export const Section5AnimationOBJ = [
  // SECTION 5
]
