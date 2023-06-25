import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// IMPORT LOCAL IMAGE
import collab1 from '@/public/nxt2/collab1.png'
import collab2 from '@/public/nxt2/collab2.png'
import FancyLink from '@/components/utils/fancyLink'
import { useMediaQuery } from '@/helpers/functional/checkMedia'

export const Section4ComponentInner = () => {
  var dataSection4 = [
    [
      {
        image: collab1,
      },
      {
        image: collab2,
      },
      {
        image: collab1,
      },
      {
        image: collab1,
      },
      {
        image: collab1,
      },
    ],
    [
      {
        image: collab2,
      },
    ],
  ]

  for (var i = 0; i < dataSection4.length; i++) {
    if (dataSection4[i].length === 5) {
      // Mendapatkan index acak di dalam array pecahan (kecuali awal dan akhir)
      var randomIndex =
        Math.floor(Math.random() * (dataSection4[i].length - 2)) + 1

      // Menambah properti size pada elemen object
      dataSection4[i][randomIndex] = {
        ...dataSection4[i][randomIndex],
        size: 'big',
      }

      // Menambahkan elemen object kosong pada posisi acak (indeks 0 hingga 4)
      var emptyIndex = Math.floor(Math.random() * 5)
      dataSection4[i].splice(emptyIndex, 0, {})
    }
  }

  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen">
        <div
          id="section4_title"
          className="relative w-full h-full setflex-center-row opacity-0"
        >
          {useMediaQuery('(min-width: 601px)') && (
            <span className="text-[#BEC29D] whitespace-pre-line text-center font-funkturm text-m-additionalTitle md:text-[5rem] lg:text-d-additionalTitle leading-full drop-shadow-collaborators">
              OUR
              <br />
              COLLABORATORS
            </span>
          )}
          <div
            id="slider_collab"
            className="absolute top-0 left-0 -z-1 w-full h-full setflex-center pb-20 opacity-0"
          >
            {useMediaQuery('(max-width: 600px)') && (
              <span className="text-[#BEC29D] mb-7 whitespace-pre-line text-center font-funkturm text-m-additionalTitle leading-full drop-shadow-collaborators">
                OUR
                <br />
                COLLABOR-
                <br />
                ATORS
              </span>
            )}
            <Marquee gradient={false}>
              <div className="h-[35vh] sm:h-[40vh] md:h-[60vh] grid grid-flow-col auto-cols-max grid-rows-nxt gap-6 pl-6">
                {dataSection4
                  .reduce((prev, next) => prev.concat(next))
                  .map((data, id) =>
                    Object.keys(data).length > 0 ? (
                      data.size ? (
                        <div
                          key={id}
                          className="h-full aspect-1 row-span-2 col-span-2 drop-shadow-collaborators"
                        >
                          <Image
                            src={data.image}
                            fill
                            alt=""
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          key={id}
                          className="relative h-full aspect-1 drop-shadow-collaborators"
                        >
                          <Image
                            src={data.image}
                            fill
                            alt=""
                            className="object-cover"
                          />
                        </div>
                      )
                    ) : (
                      <div className="h-full aspect-1" />
                    ),
                  )}
                {/* <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image src={collab1} fill alt="" className="object-cover" />
                </div>
                <div className="h-full aspect-1" />
                <div className="h-full aspect-1 row-span-2 col-span-2 drop-shadow-collaborators">
                  <Image src={collab2} fill alt="" className="object-cover" />
                </div>
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image src={collab1} fill alt="" className="object-cover" />
                </div>
                <div className="h-full aspect-1" />
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image src={collab1} fill alt="" className="object-cover" />
                </div>
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image src={collab1} fill alt="" className="object-cover" />
                </div>
                <div className="h-full aspect-1" />
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image src={collab1} fill alt="" className="object-cover" />
                </div> */}
              </div>
            </Marquee>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end">
            <FancyLink
              className={`w-fit p-4 mb-24 md:mb-[4.5rem] text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              destination="/nxt/collaborators"
            >
              VIEW OUR COLLABORATORS
            </FancyLink>
          </div>
        </div>
      </div>
      <div id="enter-collab-opacity" className="w-full h-[30vh] sm:h-[40vh]" />
    </section>
  )
}

export const Section4AnimationOBJMobile = []

export const Section4AnimationOBJ = [
  // SECTION 4
  // TITLE ENTER
  () => {
    const id = 'section4-title-enter' // animation id
    const elem = document.querySelector('#section4_title')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#section4_title'), // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 50%',
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
  // SLIDER COLLAB ENTER
  () => {
    const id = 'slider-collab-enter' // animation id
    const elem = document.querySelector('#slider_collab')
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#enter-collab-opacity'), // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
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
