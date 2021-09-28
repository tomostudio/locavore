import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx';
import FancyLink from '@/components/utils/fancyLink';

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll';
import preference from '@/helpers/preset/scrollPreference';
import Link from '@/components/utils/link';
import { useAppContext } from 'context/state';

export default function IssueLanding() {
  const containerRef = useRef(null);
  const appContext = useAppContext();
  useEffect(() => {
    appContext.setHeader({ headerStyle: 'white' });
    window.scroll(0, 0);
    return () => {
      appContext.setHeader({ headerStyle: 'default' });
    };
  }, []);

  const animationObj = [
    () => {
      const id = 'si01';
      const elem = '.scrollmove';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which page section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: 'bottom 50%',
          onUpdate: (e) => {
            console.log('1', Math.round(e.progress * 100));
          },
        },
      };

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              opacity: '0',
              ease: 'none',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
  ];
  return (
    <Layout>
      <NextSeo title='Test' />

      <LocomotiveScrollProvider
        options={{ smooth: false, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        {/* Untuk Background */}
        <div
          className='fixed z-0 pointer-events-none w-full h-screen top-0 left-0 flex items-end'
          id='background-issue'
        >
          {/* <Image
            src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
            alt={'Locavore'}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          /> */}
          <div className='absolute top-0 left-0 w-full h-full bg-black z-10' />
          <div className='fixed w-full top-0 left-0 setflex-center z-20'>
            <div className='h-screen setflex-center top-0 left-0 right-0 w-full relative text-white'>
              <h2 className='content-issue font-serif font-normal italic py-1 opacity-0'>
                Issue 0
              </h2>
              <h1 className='title-issue font-sans text-white font-normal opacity-0'>
                Under Construction
              </h1>
              <span className='content-issue w-full h-20vh setflex-center opacity-0'>
                MARCH 2021 • 8 ARTICLES
              </span>
              <p className='content-issue max-w-md text-center opacity-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <FancyLink
                destination='/editorial/metamorphosis'
                className='content-issue opacity-0 mt-16 p-4 text-xs tracking-widest font-light border rounded-xl'
              >
                READ ISSUE
              </FancyLink>
            </div>
            <div className='fixed-issue h-screen setflex-center top-0 left-0 right-0 w-full absolute'>
              <h1 className='text-white font-normal'>ISSUE 1</h1>
            </div>
          </div>

          <div className='relative w-full h-20 setflex-center z-20 scrollmove'>
            <span className='text-white font-light text-xs tracking-widest'>
              SCROLL
            </span>
          </div>
        </div>
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <ScrollTriggerWrapper animation={animationObj}>
              <LazyMotion features={domAnimation}>
                <main className='relative p-0 m-0' id='parallax-issue'>
                  {/* Untuk Content */}
                  <section className=' relative z-20'>
                    <div
                      id='trigger1'
                      className='w-full h-screen border-solid border-4 border-red-800'
                    />
                    <div
                      id='trigger2'
                      className='w-full h-screen border-solid border-4 border-red-800'
                    />
                    <div
                      id='trigger3'
                      className='ending-issue w-full h-screen setflex-center text-white'
                    ></div>
                  </section>
                </main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
        <Link />
      </LocomotiveScrollProvider>
    </Layout>
  );
}
