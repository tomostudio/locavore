import React, { useEffect, useState } from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/legacy/image'
import Marquee from 'react-fast-marquee'

import FancyLink from '@/components/utils/fancyLink'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import urlFor from '@/helpers/sanity/urlFor'

export const Section4ComponentInner = ({ collabList, collaboratorSection }) => {
  const [dataSection4Split, setDataSection4] = useState([])

  useEffect(() => {
    // Ambil Data Collaborators
    // Randomize (shuffle)
    // Truncate (15 / 20 / 25)
    // Set Random Big (minimum per 5 Jarak(boleh lebih))
    // Set Random Empty Space (Ga boleh ada 4 empty space continuosly)
    // Set Random Big (minimum per 5 Jarak(boleh lebih))

    // UseEffect supaya ga retrigger
    // ini complicated sekali array adjustmentnya
    let shuffledArray = collabList.sort((a, b) => 0.5 - Math.random()) // Shuffle

    const _dataSection = []

    const bigGapCounterMinCount = 5 // Untuk hitung jarak minimum antara component besar
    const bigGapCounterMaxCount = 10 // Untuk hitung jarak maximum antara component besar (eg Harus ada Besar setiap 10)
    const emptyCounterCount = 3 // Hitung Maximal Component Kosong

    let bigGapCounterMin = bigGapCounterMinCount
    let bigGapCounterMax = bigGapCounterMaxCount
    let emptyCounter = emptyCounterCount

    shuffledArray.forEach((data, index) => {
      // SET EMPTY
      let setData = Math.random() < 0.5
      if (emptyCounter === 0 || bigGapCounterMax === 0) setData = true

      // LOOP WHILE EMPTY
      while (!setData) {
        // DAPET EMPTY
        // push empty
        _dataSection.push({
          data: '',
          type: 'empty',
        })

        // + 1 empty counter
        emptyCounter > 0 ? emptyCounter-- : 0
        // +1 Big Gap Counter
        bigGapCounterMax > 0 ? bigGapCounterMax-- : bigGapCounterMax
        bigGapCounterMin > 0 ? bigGapCounterMin-- : bigGapCounterMin

        setData = Math.random() < 0.5
        if (emptyCounter === 0 || bigGapCounterMax === 0) setData = true

        if (setData) {
          // RESET COUNT
          emptyCounter = emptyCounterCount
          break
        }
      }

      // INSERT DATA
      // CHECK RANDOM BIG
      let setBig = Math.random() < 0.5
      // CONDITIONING DATA
      if (bigGapCounterMax === 0) setBig = true
      if (bigGapCounterMin > 0) setBig = false

      // INSERT DATA ACCORDINGLY
      if (setBig) {
        _dataSection.push({
          data,
          type: 'big',
        })
        // reset big counter
        bigGapCounterMin = bigGapCounterMinCount
        bigGapCounterMax = bigGapCounterMaxCount
      } else {
        _dataSection.push({
          data,
          type: 'normal',
        })
        // +1 Big Gap MIN MAX Counter
        bigGapCounterMax > 0 ? bigGapCounterMax-- : bigGapCounterMax
        bigGapCounterMin > 0 ? bigGapCounterMin-- : bigGapCounterMin
      }
    })

    setDataSection4(_dataSection)
  }, [])

  return (
    <section className="relative w-full">
      <div id="enter-collab" className="relative z-10 top-0 w-full h-screen ">
        <div
          id="section4_title"
          className="relative w-full h-full setflex-center-row pointer-events-none"
        >
          <span className="hidden md:block text-[#BEC29D] max-w-[1000px] whitespace-pre-line text-center font-funkturm text-m-additionalTitle sm:text-[4rem] md:text-[5rem] lg:text-d-additionalTitle leading-full drop-shadow-collaborators">
            {collaboratorSection.heading}
          </span>
          <div
            id="slider_collab"
            className="absolute top-0 left-0 -z-1 w-full h-full setflex-center opacity-0"
          >
            <span className="text-[#BEC29D] mb-7 break-all max-w-[450px] whitespace-pre-line text-center font-funkturm text-m-additionalTitle sm:text-[2rem] leading-full drop-shadow-collaborators md:hidden">
              {useMediaQuery('(min-width: 400px)') ? (
                <>{collaboratorSection.heading}</>
              ) : (
                <>{collaboratorSection.heading}</>
              )}
            </span>

            <Marquee gradient={false}>
              <div className="h-[35vh] sm:h-[40vh] md:h-[60vh] grid grid-flow-col auto-cols-max grid-rows-nxt gap-3 pl-3 md:gap-6 md:pl-6">
                {dataSection4Split.length > 0 &&
                  dataSection4Split.map(({ data, type }, id) => {
                    if (type === 'big') {
                      return (
                        <div
                          key={id}
                          className="relative h-full aspect-1 row-span-2 col-span-2 drop-shadow-collaborators"
                        >
                          <Image
                            src={urlFor(data.image).width(510).url()}
                            alt={data.image.alt}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={urlFor(data.image)
                              .blur(2)
                              .format('webp')
                              .width(100)
                              .url()}
                          />
                        </div>
                      )
                    } else if (type === 'normal') {
                      return (
                        <div
                          key={id}
                          className="relative h-full aspect-1 drop-shadow-collaborators"
                        >
                          <Image
                            src={urlFor(data.image).width(510).url()}
                            alt={data.image.alt}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={urlFor(data.image)
                              .blur(2)
                              .format('webp')
                              .width(100)
                              .url()}
                          />
                        </div>
                      )
                    } else if (type === 'empty') {
                      return <div key={id} className="h-full aspect-1" />
                    }
                  })}
              </div>
            </Marquee>
            <FancyLink
              className={`w-fit py-4 px-6 mt-10 uppercase text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              destination="/nxt/collaborators"
            >
              {collaboratorSection.button}
            </FancyLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Section4AnimationOBJ = [
  // SLIDER COLLAB ENTER
  () => {
    const id = 'slider-collab-enter' // animation id
    const elem = document.querySelector('#slider_collab')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#enter-collab'), // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 75%',
        end: 'top 0%',
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
