import Container from '@/components/modules/container'
import Layout from '@/components/modules/layout'
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger'
import PushScrollGlobal from '@/helpers/globalscroll'
import { fade } from '@/helpers/preset/transitions'
import client from '@/helpers/sanity/client'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function Reveal() {
  const containerRef = useRef(null)

  // ANIMATION
  const animationObj = [
    () => {
      // Scroller Dissapear
      const id = 'scroll'
      const elem = '#scroll'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: 'bottom 30%'
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              opacity: 0,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // Section A1 Animation
      const id = 'section_a1'
      const elem = '#section_a1'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 70%',
          end: 'bottom 0%'
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              y: '0%',
              scale: 8,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '0%',
              scale: 1,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
  ]

  return (
    <Layout>
      <div className="bg-[#BFC29D]">
        <LocomotiveScrollProvider
          options={{ smooth: false, lerp: 0.05 }}
          containerRef={containerRef}
          watch={[]}
        >
          <PushScrollGlobal />
          <div
            data-scroll-container
            ref={containerRef}
            id="scroll-container"
            className={`z-1 relative`}
          >
            <div data-scroll-section>
              <ScrollTriggerWrapper animation={animationObj}>
                <LazyMotion features={domAnimation}>
                  <m.main
                    className="relative p-0 m-0"
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={fade}
                  >
                    {/* Begin */}
                    <div
                      id="scroll"
                      className="fixed top-0 left-0 w-full h-screen setflex-center pointer-events-none"
                    >
                      <span
                        className={`font-light text-xs text-center tracking-widest animate-fade-down text-black`}
                      >
                        SCROLL TO
                        <br />
                        BEGIN
                      </span>
                    </div>
                    <div id="trigger1" className="w-full h-screen bg-red-500" />
                    {/* Section A1 */}
                    <div
                      id="section_a1"
                      className="h-screen top-0 left-0 right-0  setflex-center w-screen z-10 pointer-events-none"
                    >
                      <Container className="max-md:px-6 text-center ">
                        <span
                          className={`font-bold text-7xl sm:text-8xl md:text-9xl  uppercase text-white`}
                        >
                          WE HAD A BIG DREAM
                        </span>
                      </Container>
                    </div>
                    <div
                      id="section_a2"
                      className="w-full h-screen bg-green-500"
                    />
                  </m.main>
                </LazyMotion>
              </ScrollTriggerWrapper>
            </div>
          </div>
        </LocomotiveScrollProvider>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const headerAPI = await client.fetch(`
    *[_type == "header"]
    `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      headerAPI,
      footerAPI,
    },
  }
}
