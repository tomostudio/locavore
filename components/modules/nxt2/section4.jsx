import React from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { m, useAnimation } from 'framer-motion'
import { useInView } from 'react-cool-inview'

// IMPORT LOCAL IMAGE
import collab1 from '@/public/nxt2/collab1.png'
import collab2 from '@/public/nxt2/collab2.png'
import collab3 from '@/public/nxt2/collab3.png'
import collab4 from '@/public/nxt2/collab4.png'
import FancyLink from '@/components/utils/fancyLink'

export const Section4ComponentInner = () => {
  const controls = useAnimation()
  const { observe } = useInView({
    threshold: 0,
    unobserveOnEnter: true,
    onEnter: () => {
      controls.start('visible')
    },
  })
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }
  return (
    <section className="relative w-full">
      <div className="sticky z-10 top-0 w-full h-screen">
        <div className="relative w-full h-full setflex-center-row">
          <span className="text-[#BEC29D] text-center font-funkturm text-d-additionalTitle leading-full drop-shadow-collaborators">
            OUR
            <br />
            COLLABORATORS
          </span>
          <m.div
            animate={controls}
            initial="hidden"
            variants={variants}
            className="absolute top-0 left-0 -z-1 w-full h-full setflex-center pb-20"
          >
            <Marquee gradient={false}>
              <div className="h-[60vh] grid grid-flow-col auto-cols-max grid-rows-nxt gap-6 pl-6">
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image
                    src={collab1}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    alt=""
                  />
                </div>
                <div className="h-full aspect-1" />
                <div className="h-full aspect-1 row-span-2 col-span-2 drop-shadow-collaborators">
                  <Image
                    src={collab2}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    alt=""
                  />
                </div>
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image
                    src={collab1}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    alt=""
                  />
                </div>
                <div className="h-full aspect-1" />
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image
                    src={collab1}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    alt=""
                  />
                </div>
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
                  <Image
                    src={collab1}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    alt=""
                  />
                </div>
                <div className="h-full aspect-1" />
                <div className="relative h-full aspect-1 drop-shadow-collaborators">
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
            </Marquee>
          </m.div>
          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end">
            <FancyLink
              className={`w-fit p-4 mb-24 text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              destination="/nxt/collaborators"
            >
              VIEW OUR COLLABORATORS
            </FancyLink>
          </div>
        </div>
        <div ref={observe} className='w-full' />
      </div>
    </section>
  )
}

export const Section4AnimationOBJMobile = []

export const Section4AnimationOBJ =[]
