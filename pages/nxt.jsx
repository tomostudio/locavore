import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { Parallax } from 'react-scroll-parallax';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Container from '@/components/modules/container';
import Layout from '@/components/modules/layout';
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger';
import SEO from '@/components/utils/seo';

import PushScrollGlobal from '@/helpers/globalscroll';
import { fade } from '@/helpers/preset/transitions';
import client from '@/helpers/sanity/client';

export default function Reveal() {
  const router = useRouter();
  const containerRef = useRef(null);

  // ANIMATION
  const animationObj = [
    // SECTION 1
    // TITLE ENTER
    () => {
      // WE HAVE A DREAM COMING IN
      const id = 'wehaveadream-enter'; // animation id
      const elem = '#section1_fixed #whd_title';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#enter-dream', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              opacity: 0,
              scale: 5,
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              scale: 1,
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // EYES ENTER
    () => {
      // WE HAVE A DREAM COMING IN
      const id = 'eyes-enter'; // animation id
      const elem = '#eyes';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#enter-eyes', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              opacity: 0,
              y: 200,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              y: 100,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              y: 0,
              ease: 'none',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // EYES EXIT
    () => {
      // WE HAVE A DREAM COMING IN
      const id = 'eyes-enter'; // animation id
      const elem = '#eyes';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#exit-eyes', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              opacity: 1,
              y: 0,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 1,
              y: 100,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              opacity: 0,
              y: 200,
              ease: 'none',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
  ];

  const [bgColor, setBgColor] = useState('#BFC29D');

  useEffect(() => {
    const BackgroundLocomotiveEvents = (e) => {
      console.log(e);
      // console.log(enter, target, element, e);
      const { enter, target, element } = e.detail;
      if (enter === 'enter')
        switch (target) {
          case 'section1':
            setBgColor('#BFC29D');
            break;
          case 'section2':
            setBgColor('#B1BA96');
            break;

          default:
            break;
        }
    };

    window.addEventListener('LocoCall', BackgroundLocomotiveEvents);
    return () => {
      window.removeEventListener('LocoCall', BackgroundLocomotiveEvents);
    };
  }, []);
  return (
    <Layout>
      <SEO title={'Editorial'} pagelink={router.pathname} />
      {/* FIXED POSITION */}
      <div className='outercontainer fixed z-50 w-full h-full border pointer-events-none select-none'>
        {/* SECTION 1 WE HAD A DREAM */}
        <div id='section1_fixed'>
          <div
            id='whd_title'
            className=' pointer-events-none font-funkturm absolute w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl'
          >
            WE HAD
            <br />A DREAM
          </div>
          <div
            id='eyes'
            className='opacity-0 h-24 w-[50vh] bg-slate-900 fixed bottom-[15vh] left-1/2 translate-x-[-50%]'
          />
        </div>
      </div>
      {/* BACKGROUND COLOR */}
      <div
        id='NXTbackground'
        className={`background fixed z-1 w-full h-full pointer-events-none transition-colors duration-1000`}
        style={{ background: bgColor }}
      />
      {/* CAPTION */}
      <div
        id='reveal_caption'
        className='caption fixed z-50 pointer-events-none w-full px-20 flex flex-wrap justify-center gap-1 bottom-4 top-auto left-1/2 -translate-x-1/2 max-w-screen-xl text-md'
      >
        <div className={`caption_tab px-2 w-fit rotate-0 active`}>
          WE HAD A DREAM
        </div>
        <div className={`caption_tab px-2 w-fit rotate-1`}>
          INSPIRED BY NICE THINGS
        </div>
        <div className={`caption_tab px-2 w-fit -rotate-[-.5deg]`}>
          AND A BETTER WORLD
        </div>
        <div className={`caption_tab px-2 w-fit rotate-[-.25deg]`}>
          SO WE TOOK THAT DREAM AND MADE IT REAL
        </div>
        <div className={`caption_tab px-2 w-fit rotate-0`}>
          SO OTHER PEOPLE CAN DREAM TOO
        </div>
        <div className={`caption_tab px-2 w-fit rotate-1/2`}>
          INSPIRED BY OUR NICE THING
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
          id='scroll-container'
          className={`z-1 relative`}
        >
          <ScrollTriggerWrapper animation={animationObj}>
            <LazyMotion features={domAnimation}>
              <m.main
                className='relative p-0 m-0'
                initial='initial'
                animate='enter'
                exit='exit'
                variants={fade}
              >
                <section
                  id='trigger0'
                  className='trigger w-full h-[110vh] text-4xl'
                  data-scroll-section
                >
                  <div className='flex justify-center items-center w-full h-screen'>
                    <Parallax speed={-20}>
                      <div
                        className={`font-light text-xs text-center tracking-widest animate-fade-down text-black select-none`}
                      >
                        SCROLL TO
                        <br />
                        BEGIN
                      </div>
                    </Parallax>
                  </div>
                </section>
                <section
                  id='trigger1'
                  className='trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center __b '
                  data-scroll
                  data-scroll-repeat
                  data-scroll-call='section1'
                  data-scroll-section
                >
                  {/* WE HAD A DREAM */}
                  <div
                    id='enter-dream'
                    className='h-[50vh] __b bg-green-600 bg-opacity-50'
                  />
                  {/* EYES */}
                  <div
                    id='enter-eyes'
                    className='h-[50vh] __b bg-green-600 bg-opacity-50 -mt-24'
                  />
                  <div
                    id='buffer'
                    className='h-[50vh] __b bg-yellow-600 bg-opacity-50'
                  />
                  {/* EYES */}
                  <div
                    id='exit-eyes'
                    className='h-[50vh] __b bg-red-600 bg-opacity-50'
                  />
                  <div className='exit' />
                </section>
                <section
                  id='trigger1'
                  className='trigger relative w-full h-[110vh]  text-4xl flex justify-center items-center '
                  data-scroll-section
                  data-scroll
                  data-scroll-repeat
                  data-scroll-call='section2'
                ></section>
              </m.main>
            </LazyMotion>
          </ScrollTriggerWrapper>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

export async function getStaticProps() {
  const headerAPI = await client.fetch(`
    *[_type == "header"]
    `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  return {
    props: {
      headerAPI,
      footerAPI,
    },
  };
}
