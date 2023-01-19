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
      // Footer 1
      const id = 'footer1'
      const elem = '#footer1'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger2', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
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
              backgroundColor: 'white',
              ease: 'none',
            }
          ],
        },
        {
          to: [
            '#footer1 > span',
            {
              color: 'black',
              ease: 'none',
            }
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
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
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              y: '0%',
              ease: 'none'
            }
          ]
        },
        {
          to: [
            elem,
            {
              y: '-100%',
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // Section A1 Animation
      const id = 'begin'
      const elem = '#begin'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger2', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              opacity: 0,
              scale: 5,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              scale: 1,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // Eye1
      const id = 'eye1'
      const elem = '#eye1'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger3', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              y: '100%',
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '0%',
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // orang1
      const id = 'orang1'
      const elem = '#orang1'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger4', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              opacity: 0,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // orang2
      const id = 'orang2'
      const elem = '#orang2'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger5', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 100%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              opacity: 0,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // dream
      const id = 'dream'
      const elem = '#dream'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger6', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              x: '-100%',
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              x: '0%',
              ease: 'none'
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // dream
      const id = 'dream'
      const elem = '#dream'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger8', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              x: '110%',
              ease: 'none'
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // wish
      const id = 'wish'
      const elem = '#wish'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger9', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              y: '100%',
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '0%',
              ease: 'none'
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // wish
      const id = 'wish'
      const elem = '#wish'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger11', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              y: '-110%',
              ease: 'none'
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // eye1 out
      const id = 'eye1'
      const elem = '#eye1'
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger12', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              y: '100%',
              ease: 'none'
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
        <div className="outercontainer fixed z-30 w-full h-full">
          {/* Footer */}
          <div className="fixed z-20 bottom-10 left-0 w-full setflex-center">
            <div className='w-full flex flex-wrap justify-center max-w-xl gap-2'>
              <div id="footer1" className='px-2'>
                <span className='text-gray text-xs active'>WE HAD A DREAM</span>
              </div>
              <div className=' px-2'>
                <span className='text-gray text-xs'>INSPIRED BY NICE THINGS</span>
              </div>
              <div className='px-2'>
                <span className='text-gray text-xs'>AND A BETTER WORLD</span>
              </div>
              <div className='px-2'>
                <span className='text-gray text-xs'>SO WE TOOK THAT DREAM AND MADE IT REAL</span>
              </div>
              <div className='px-2'>
                <span className='text-gray text-xs'>SO OTHER PEOPLE CAN DREAM TOO</span>
              </div>
            </div>
          </div>
          {/* Scroll */}
          <div id="scroll" className="absolute top-0 left-0 w-full h-screen setflex-center">
            <span
              className={`font-light text-xs text-center tracking-widest animate-fade-down text-black`}
            >
              SCROLL TO
              <br />
              BEGIN
            </span>
          </div>
          <div id="begin" className="absolute top-0 left-0 w-full h-screen setflex-center">
            <span
              className={`font-bold text-7xl text-center text-white`}
            >
              WE HAD<br/> A DREAM
            </span>
          </div>
          <div id="eye1" className="absolute top-0 left-0 z-10 w-full h-screen setflex-center">
            <div className='bg-gray w-80 h-14 rotate-6 mt-52'>
              <span className='block w-full text-center text-white'>Mata</span>  
            </div>
          </div>
          <div id="orang1" className="absolute top-0 left-56 z-10 w-full h-screen setflex-center">
            <div className='bg-gray w-16 h-28'>
              <span className='block w-full text-center text-white'>Orang mikir</span>
            </div>
          </div>
          <div id="orang2" className="absolute bottom-24 left-44 z-10 w-full h-screen setflex-center">
            <div className='bg-black w-16 h-12'>
              <span className='block w-full text-center text-white'>What if</span>
            </div>
          </div>
          <div id="dream" className="absolute bottom-20 right-24 rotate-6 w-full h-screen setflex-center">
            <div className='bg-black w-48 h-40'>
              <span className='block w-full h-full setflex-center text-white'>Dream</span>
            </div>
          </div>
          <div id="wish" className="absolute top-0 left-60 w-full h-screen flex items-center">
            <div className='bg-black w-40 h-56'>
              <span className='block w-full h-full setflex-center text-white'>Wish</span>
            </div>
          </div>
        </div>
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
                    <div id="trigger1" className="w-full h-screen" />
                    <div
                      id="trigger2"
                      className="w-full h-screen "
                    />
                    <div
                      id="trigger3"
                      className="w-full h-[50vh] "
                    />
                    <div
                      id="trigger4"
                      className="w-full h-[50vh] "
                    />
                    <div
                      id="trigger5"
                      className="w-full h-[50vh] "
                    />
                    <div
                      id="trigger6"
                      className="w-full h-[50vh]"
                    />
                    <div
                      id="trigger7"
                      className="w-full h-[50vh]"
                    />
                    <div
                      id="trigger8"
                      className="w-full h-[50vh]"
                    />
                    <div
                      id="trigger9"
                      className="w-full h-[50vh]"
                    />
                    <div
                      id="trigger10"
                      className="w-full h-[50vh]"
                    />
                    <div
                      id="trigger11"
                      className="w-full h-[50vh] bg-green-500"
                    />
                    <div
                      id="trigger12"
                      className="w-full h-[50vh] bg-blue-500"
                    />
                    <div
                      id="trigger13"
                      className="w-full h-[50vh] bg-red-500"
                    />
                    <div
                      id="trigger14"
                      className="w-full h-screen bg-green-500"
                    />
                    <div
                      id="trigger15"
                      className="w-full h-screen bg-blue-500"
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
