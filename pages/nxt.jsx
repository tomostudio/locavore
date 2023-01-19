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
      const elem = '#box';
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
        {
          set: [
            elem,
            {
              y: '300%',
              scale: 3,
              ease: 'none',
              opacity: 0,
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: 0,
              scale: 1,
              ease: 'none',
              opacity: 1,
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
  ];

  return (
    <Layout>
      <SEO title={'Editorial'} pagelink={router.pathname} />
      {/* FIXED POSITION */}
      <div className='outercontainer fixed z-50 w-full h-full border pointer-events-none '>
        <div className='absolute left-0 top-0 flex items-center justify-center w-full h-full'>
          <div id='box' className='relative w-96 h-96 bg-yellow-400' />
        </div>
        <div id='line' className='absolute w-full h-1 bg-red-500 top-[50%]' />
      </div>
      {/* CAPTION */}
      <div className='caption fixed z-50 w-full h-full pointer-events-none'></div>

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
                  <div
                    id='trigger0'
                    className='trigger w-full h-screen bg-slate-400 text-4xl flex justify-center items-center '
                  >
                    0
                  </div>
                  <div
                    id='trigger1'
                    className='trigger relative w-full h-screen bg-red-400 text-4xl flex justify-center items-center '
                  >
                    <span className=''>1</span>
                  </div>
                  <div
                    id='trigger2'
                    className='trigger w-full h-screen  bg-blue-400 text-4xl flex justify-center items-center '
                  >
                    2
                  </div>
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
