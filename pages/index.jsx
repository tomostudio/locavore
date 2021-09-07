import { useRef, useEffect, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'

export default function Home() {
  const containerRef = useRef(null)
  const [animationObj, setAnimObj] = useState([])

  // Preset Function
  const presetFade = ({ id = '', trigger = '', showProgress = false }) => {
    return {
      scrollTrigger: {
        id: id,
        trigger: trigger,
        scroller: '#scroll-container',
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e) => {
          if (showProgress) console.log(Math.round(e.progress * 100))
        },
      },
    }
  }

  useEffect(() => {
    setAnimObj({
      all: [
        () => {
          const id = 'issue1'
          const elem = '.content-issue .title-issue'

          const settings = {
            scrollTrigger: {
              id: id,
              trigger: '.content-issue', // which page section will be tracked as the scroll trigger
              scroller: '#scroll-container', // id of scroll container
              scrub: true,
              start: 'top bottom',
              end: 'bottom top',
              onUpdate: (e) => {
                console.log(e)
              },
            },
          }
          const animation = [
            {
              set: [elem, { opacity: 0, rotateX: '-20deg', z: -200 }],
            },
            {
              to: [
                elem,
                { opacity: 0, duration: 0.001, rotateX: '-20deg', z: -200 },
                '>',
              ], // Start
            },
            {
              to: [
                elem,
                { opacity: 1, duration: 1, rotateX: '0deg', z: 0 },
                '>',
              ], // Start
            },
            {
              to: [
                elem,
                { opacity: 1, duration: 0.25, rotateX: '0deg', z: 0 },
                '>',
              ], // HOLD
            },
            {
              to: [
                elem,
                { opacity: 0, duration: 1, rotateX: '15deg', z: -200 },
                '>',
              ], // EXIT
            },
          ]
          // const animation = presetAnimation(elem);
          return { id, elem, settings, animation }
        },
      ],
    })
    return () => {}
  }, [])

  return (
    <Layout>
      <NextSeo title="Home" />

      <LocomotiveScrollProvider
        options={preference}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <ScrollTriggerWrapper animation={animationObj}>
              <LazyMotion features={domAnimation}>
                <m.main className="relative p-0 m-0" id="parallax-issue">
                  {/* Untuk Content */}
                  <section className=" relative z-20">
                    <div className="fixed w-full h-full top-0 left-0 setflex-center">
                      <h1 className="font-title text-white font-normal opacity-0">
                        Metamorphosis
                      </h1>
                    </div>
                    <div className="content-issue w-full h-screen setflex-center">
                      <h1 className="title-issue text-white font-normal">
                        ISSUE 1
                      </h1>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full h-20 setflex-center">
                      <span className="text-white font-normal text-xs tracking-widest">
                        SCROLL
                      </span>
                    </div>
                  </section>
                  {/* Untuk Background */}
                  <section
                    className="fixed w-full h-screen top-0 left-0"
                    id="background-issue"
                  >
                    <div className="relative w-full h-full bg-black z-10" />
                    <Image
                      src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                      alt={'Locavore'}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </section>
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
