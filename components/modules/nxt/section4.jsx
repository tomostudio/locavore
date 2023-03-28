import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// IMPORT LOCAL IMAGE
import collab1 from '@/public/nxt2/collab1.png'
import collab2 from '@/public/nxt2/collab2.png'
import collab3 from '@/public/nxt2/collab3.png'
import collab4 from '@/public/nxt2/collab4.png'

export const Section4ComponentInner = () => {
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen">
        <div
          id="section4_title"
          className="relative w-full h-full setflex-center-row"
        >
          <span className="text-[#BEC29D] text-center font-funkturm text-[7.5rem] leading-full">
            OUR
            <br />
            COLLABORATORS
          </span>
          <div
            id="slider_collab"
            className="absolute top-0 left-0 z-10 w-full h-full setflex-center opacity-0"
          >
            <Marquee gradient={false}>
              <div className="relative w-full h-[60vh] overflow-x-scroll hide-scrollbar">
                <div className="absolute top-0 left-0 h-full flex flex-nowrap space-x-[24px] px-[24px] overflow-x-auto">
                  <div className="w-[50vw] h-full grid grid-flow-col grid-cols-3 grid-rows-2 gap-[24px]">
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab1}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                    <div className="w-full h-full" />
                    <div className="w-full h-full row-span-2 col-span-2 drop-shadow-collaborators">
                      <Image
                        src={collab2}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[50vw] h-full grid grid-flow-col grid-cols-3 grid-rows-2 gap-[24px]">
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab3}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab1}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab3}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[50vw] h-full grid grid-flow-col grid-cols-3 grid-rows-2 gap-[24px]">
                    <div className="w-full h-full row-span-2 col-span-2 drop-shadow-collaborators">
                      <Image
                        src={collab4}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab1}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[50vw] h-full grid grid-flow-col grid-cols-3 grid-rows-2 gap-[24px]">
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab3}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                    <div className="relative w-full h-full" />
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab3}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                    <div className="relative w-full h-full drop-shadow-collaborators">
                      <Image
                        src={collab1}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div className="w-full h-[25vh]" />
      <div id="enter-collab-opacity" className="w-full h-[50vh]" />
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
