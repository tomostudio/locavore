import { useRef, useEffect, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import FancyLink from '@/components/utils/fancyLink'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'
import Link from '@/components/utils/link'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <LocomotiveScrollProvider options={preference} watch={[]}>
        <PushScrollGlobal />
        {/* Untuk Background */}
        <div
          className="fixed z-40 pointer-events-none w-full h-screen top-0 left-0 flex items-end"
          id="background-issue"
        >
          <Image
            src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
            alt={'Locavore'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="fixed-background absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10" />
          <div className="fixed w-full top-0 left-0 setflex-center z-20">
            <div className="h-screen setflex-center top-0 left-0 right-0 w-full relative text-white">
              <h2 className="content-issue font-subtitle font-normal italic py-1 opacity-0">
                Issue 1
              </h2>
              <h1 className="title-issue font-title text-white font-normal opacity-0">
                Metamorphosis
              </h1>
              <span className="content-issue w-full h-20vh setflex-center opacity-0">
                MARCH 2021 • 15 ARTICLES
              </span>
              <p className="content-issue w-46rem px-paddingContainer text-center opacity-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <FancyLink
                destination="/editorial/metamorphosis"
                className="content-issue opacity-0 mt-16 p-4 text-xs tracking-widest font-light border rounded-xl"
              >
                READ ISSUE
              </FancyLink>
            </div>
            <div className="fixed-issue h-screen setflex-center top-0 left-0 right-0 w-full absolute">
              <h1 className="text-white font-normal">ISSUE 1</h1>
            </div>
          </div>
          <div className="relative w-full h-20 setflex-center z-20">
            <span className="text-white font-light text-xs tracking-widest">
              SCROLL
            </span>
          </div>
        </div>
        <div data-scroll-container id="scroll-container">
          <div data-scroll-section>
            <ScrollTriggerWrapper>
              <LazyMotion features={domAnimation}>
                <m.main className="relative p-0 m-0" id="parallax-issue">
                  <Container>
                    {/* Untuk Content */}
                    <section className=" relative z-20">
                      <div className="w-full h-screen" />
                      <div className="w-full h-screen" />
                      <div className="ending-issue w-full h-screen setflex-center text-white"></div>
                    </section>
                  </Container>
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
        <Link />
      </LocomotiveScrollProvider>
    </Layout>
  )
}
