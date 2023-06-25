import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Container from '../container'

// IMPORT LOCAL IMAGE
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import FancyLink from '@/components/utils/fancyLink'
import EventCard from './eventCard'

export const Section5ComponentInner = ({ dataSection5 }) => {
  const eventList = Array(3).fill(dataSection5[0])
  return (
    <>
      <section id="trigger5" className="trigger relative w-full flex flex-col">
        <Container className="mb-10">
          <div className="relative w-full flex flex-col items-center sm:border-2 border-white rounded-2xl sm:px-16 md:p-20">
            <div className="hidden sm:block absolute top-7 left-7 w-4 h-4 bg-white rounded-50%" />
            <div className="hidden sm:block absolute top-7 right-7 w-4 h-4 bg-white rounded-50%" />
            <div className="hidden sm:block absolute bottom-7 left-7 w-4 h-4 bg-white rounded-50%" />
            <div className="hidden sm:block absolute bottom-7 right-7 w-4 h-4 bg-white rounded-50%" />
            <span className="text-[#BEC29D] text-center font-funkturm text-m-additionalTitle md:text-d-additionalTitle leading-full">
              WHAT'S ON?
            </span>
            <div className="w-full my-10 sm:my-12 md:my-16 flex flex-wrap md:flex-nowrap gap-8">
              {eventList.map((e, id) => (
                <EventCard
                  key={id}
                  widthNormal={true}
                  slug={e.slug.current}
                  date={e.date}
                  image={e.thumbnail.imageColor}
                  image_bnw={e.thumbnail.imageBnw}
                  title={e.title}
                  description={e.thumbnail.description}
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
