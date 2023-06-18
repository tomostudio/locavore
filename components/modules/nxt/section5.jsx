import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'

// IMPORT LOCAL IMAGE
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import FancyLink from '@/components/utils/fancyLink'
import EventCard from './eventCard'

export const Section5ComponentInner = () => {
  const eventList = ['', '', '']
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
            <div className="w-full my-16 flex flex-nowrap gap-8">
              {eventList.map((_, id) => (
                <EventCard
                  key={id}
                  widthNormal={true}
                  date="10 OCTOBER 2023"
                  image={card}
                  image_bnw={card_bnw}
                  title="Event Title"
                  description="Lorem ispum dolor sit amet, consecteur des adispacing dolor sit amet."
                />
              ))}
            </div>
            <FancyLink
              className={`w-fit p-4 text-sm text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
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
