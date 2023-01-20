import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

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
    () => {
      // Scroller Dissapear
      const id = 'scroll'; // animation id
      const elem = '';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      };

      // Input Animation
      const animation = [
        // {
        //   set: [
        //     elem,
        //     {
        //       y: '300%',
        //       scale: 3,
        //       ease: 'none',
        //       opacity: 0,
        //     },
        //   ],
        // },
        // {
        //   to: [
        //     elem,
        //     {
        //       y: 0,
        //       scale: 1,
        //       ease: 'none',
        //       opacity: 1,
        //     },
        //   ],
        // },
      ];

      return { id, elem, settings, animation };
    },
  ];

  const [bgColor, setBgColor] = useState('#BFC29D');

  useEffect(() => {
    const BackgroundLocomotiveEvents = (e) => {
      const { enter, target, element } = e.detail;
      console.log(enter, target, element, e);
      if (enter === 'enter')
        switch (target) {
          case 'section1':
            console.log('set');
            setBgColor('#BFC29D');
            break;
          case 'section2':
            console.log('set');
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
      <div className='outercontainer fixed z-50 w-full h-full border pointer-events-none '>
        {/* SECTION 1 WE HAD A DREAM */}
        <div id='section1_fixed'>
          <div className='font-funkturm absolute w-full h-full flex justify-center items-center text-center leading-none text-white text-9xl'>
            WE HAD
            <br />A DREAM
          </div>
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
          <div data-scroll-section>
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
                  >
                    <div className='flex justify-center items-center w-full h-screen'>
                      <span
                        className={`font-light text-xs text-center tracking-widest animate-fade-down text-black`}
                      >
                        SCROLL TO
                        <br />
                        BEGIN
                      </span>
                    </div>
                  </section>
                  <section
                    id='trigger1'
                    className='trigger relative w-full h-[110vh] text-4xl flex justify-center items-center __b '
                    data-scroll
                    data-scroll-repeat
                    data-scroll-call='section1'
                  >
                    {/* WE HAD A DREAM */}
                    <div className='exit' />
                  </section>
                  <section
                    id='trigger1'
                    className='trigger relative w-full h-[110vh]  text-4xl flex justify-center items-center '
                    data-scroll
                    data-scroll-repeat
                    data-scroll-call='section2'
                  ></section>
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
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
