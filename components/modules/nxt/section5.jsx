import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'

// IMPORT LOCAL IMAGE
import card_bnw from '@/public/nxt2/card_bnw.png'

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
            <span className="text-[#BEC29D] text-center font-funkturm text-[7.5rem] leading-full">
              WHAT'S ON?
            </span>
            <div className="w-full mt-16 grid grid-cols-3 gap-8">
              <div className="w-full border-2 border-white rounded-xl flex flex-col p-8 text-white">
                <span className="text-[1.25rem]">10 OCTOBER 2023</span>
                <div className="relative w-full aspect-w-1 aspect-h-1 my-5">
                  <Image src={card_bnw} />
                </div>
                <span className="font-bold text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-[0.875rem] mt-1">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </div>
              <div className="w-full border-2 border-white rounded-xl flex flex-col p-8 text-white">
                <span className="text-[1.25rem]">10 OCTOBER 2023</span>
                <div className="relative w-full aspect-w-1 aspect-h-1 my-5">
                  <Image src={card_bnw} />
                </div>
                <span className="font-bold text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-[0.875rem] mt-1">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </div>
              <div className="w-full border-2 border-white rounded-xl flex flex-col p-8 text-white">
                <span className="text-[1.25rem]">10 OCTOBER 2023</span>
                <div className="relative w-full aspect-w-1 aspect-h-1 my-5">
                  <Image src={card_bnw} />
                </div>
                <span className="font-bold text-[1.875rem] leading-[32px]">
                  Event Title
                </span>
                <p className="text-[0.875rem] mt-1">
                  Lorem ispum dolor sit amet, consecteur des adispacing dolor
                  sit amet.
                </p>
              </div>
            </div>
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
