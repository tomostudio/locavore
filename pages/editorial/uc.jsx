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
import Link from '@/components/utils/shortcutLinks';
import { useAppContext } from 'context/state';

export default function IssueLanding() {
  const dark = false;
  const containerRef = useRef(null);
  const appContext = useAppContext();
  useEffect(() => {
    appContext.setHeader({ headerStyle: dark ? 'white' : 'black' });
    window.scroll(0, 0);
    return () => {
      appContext.setHeader({ headerStyle: 'default' });
    };
  }, []);

  const animationObj = [
    () => {
      // Issue No Animation
      const id = 'issueNo';
      const elem = '#issueNo';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: 'bottom -0%',
        },
      };

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              y: '100%',
              scale: 2.5,
              ease: 'none',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    () => {
      // Start Background
      const id = 'First BG';
      const elem = '#firstBG';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: 'bottom 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              opacity: 0,
              scale: 1.25,
              ease: 'none',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    () => {
      // Start Background
      const id = 'End BG';
      const elem = '#endBg';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: 'bottom 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              scale: 1.1,
              ease: 'none',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    () => {
      // Scroller Dissapear
      const id = 'scrollIndicator';
      const elem = '#scrollIndicator';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top -10%',
          end: 'bottom 50%',
        },
      };

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
      ];

      return { id, elem, settings, animation };
    },
    () => {
      // Issue No Animation
      const id = 'Issue Title';
      const elem = '#issueTitle';
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: 'bottom 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              scale: '0.75',
              opacity: 0,
              y: 50,
              ease: 'none',
            },
          ],
        },
        {
          to: [
            elem,
            {
              scale: '1',
              opacity: 1,
              y: 0,
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
      <NextSeo title='Under Construction' />

      {/* Issue Title */}
      <div>
        <div
          id='issueTitle'
          className={`h-s-50 pb-20 top-0 left-0 right-0 w-screen flex items-center content-center flex-col justify-end fixed z-10 pointer-events-none  opacity-0 ${
            dark ? 'text-white' : 'text-black'
          }`}
        >
          <Container className='max-md:px-6 text-center setflex-center '>
            <span
              id='issueNoInside'
              className='content-issue font-serif font-normal italic text-5xl'
            >
              Issue 0
            </span>
            <h1 className='title-issue font-sans font-normal text-8xl'>
              Under Construction
            </h1>
          </Container>
        </div>
        {/* Issue Number */}
        <div
          id='issueNo'
          className='h-screen top-0 left-0 right-0  setflex-center w-screen fixed z-10 pointer-events-none'
        >
          <Container className='max-md:px-6 text-center '>
            <span
              className={` font-normal text-8xl ${
                dark ? 'text-white' : 'text-black'
              }`}
            >
              ISSUE 0
            </span>
          </Container>
        </div>
        {/* Scroll Inidicator */}
        <div
          id='scrollIndicator'
          className='fixed z-20 bottom-10 left-0 w-full setflex-center pointer-events-none'
        >
          <span
            className={`font-light text-xs tracking-widest  ${
              dark ? 'text-white' : 'text-black'
            }`}
          >
            SCROLL
          </span>
        </div>

        {/* First Background */}
        <div
          id='firstBG'
          className={`fixed setflex-center h-screen w-screen top-0 left-0 -z-1 pointer-events-none ${
            dark ? 'bg-black ' : 'bg-white'
          }`}
        >
          {/* Image  */}
          <div
            className={`absolute h-full w-full top-0 left-0  z-10 ${
              dark ? 'bg-black opacity-40' : 'bg-white opacity-25'
            }`}
          />

          <Image
            src={`/placeholder/dossier-lab-2-3-8.jpg`}
            alt={'Locavore'}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>

        {/* End Background */}
        <div
          id='endBg'
          className={`fixed setflex-center h-screen w-screen top-0 left-0 -z-10 pointer-events-none ${
            dark ? 'bg-black ' : 'bg-white'
          }`}
        >
          {/* Plain Background  */}
          <div
            className='absolute h-full w-full top-0 left-0 z-20'
            style={{ background: 'rgba(255,255,255,1' }}
          />
          {/* Image  */}
          {/* <div
            className={`absolute  h-full w-full top-0 left-0 z-10  ${
              dark ? 'bg-black opacity-40' : 'bg-white opacity-25'
            }`}
          />

          <Image
            src={`/placeholder/dossier-lab-2-3-8.jpg`}
            alt={'Locavore'}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          /> */}
        </div>
      </div>
      <LocomotiveScrollProvider
        options={{ smooth: false, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        <div data-scroll-container ref={containerRef} id='scroll-container'>
          <div data-scroll-section>
            <ScrollTriggerWrapper animation={animationObj}>
              <LazyMotion features={domAnimation}>
                <main className='relative p-0 m-0'>
                  <div id='trigger1' className='w-full h-s-150 ' />
                  <div id='trigger2' className='w-full min-h-screen '>
                    <div className='h-s-50 w-full' />
                    <section className='w-full '>
                      <Container
                        className={`max-md:px-6 pb-16 flex flex-col justify-start content-center items-center ${
                          dark ? 'text-white' : 'text-black'
                        }`}
                      >
                        <span className='content-issue w-full text-center'>
                          MARCH 2021<span className='mx-4 inline-block'>•</span>
                          8 ARTICLES
                        </span>
                        <p className='content-issue max-w-md text-center mt-12'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <FancyLink
                          destination='/editorial/issue-index'
                          className={`content-issue mt-12 py-4 px-6 text-xs tracking-widest transition-all ease-linear ${
                            dark
                              ? 'hover:bg-white border hover:text-black border-white rounded-xl'
                              : 'hover:bg-black border hover:text-white border-black rounded-xl'
                          }`}
                        >
                          READ ISSUE
                        </FancyLink>
                      </Container>
                    </section>
                  </div>
                </main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}