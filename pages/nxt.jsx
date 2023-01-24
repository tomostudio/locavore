import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { Parallax } from 'react-scroll-parallax';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Layout from '@/components/modules/layout';
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger';
import SEO from '@/components/utils/seo';

import PushScrollGlobal from '@/helpers/globalscroll';
import { fade } from '@/helpers/preset/transitions';
import client from '@/helpers/sanity/client';

import {
  Section1ComponentFixedFront,
  Section1ComponentFixedBack,
  Section1AnimationOBJ,
  Section1ComponentInner,
} from '@/components/modules/reveal/section1';

import {
  Section2ComponentFixedFront,
  Section2ComponentFixedBack,
  Section2AnimationOBJ,
  Section2ComponentInner,
} from '@/components/modules/reveal/section2';

import {
  Section3ComponentFixedFront,
  Section3ComponentFixedBack,
  Section3AnimationOBJ,
  Section3ComponentInner,
} from '@/components/modules/reveal/section3';

export default function Reveal() {
  const router = useRouter();
  const containerRef = useRef(null);

  // ANIMATION
  const animationObj = [
    ...Section1AnimationOBJ,
    ...Section2AnimationOBJ,
    ...Section3AnimationOBJ,
  ];

  const [bgColor, setBgColor] = useState('#BFC29D');
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const BackgroundLocomotiveEvents = (e) => {
      const { enter, target } = e.detail;
      if (enter === 'enter') {
        switch (target) {
          case 'section0':
            setCurrentSection(0);
            setBgColor('#BFC29D');
            break;
          case 'section1-bottom':
            setCurrentSection(1);
            setBgColor('#BFC29D');
            break;
          case 'section1-top':
            setCurrentSection(1);
            setBgColor('#BFC29D');
            break;
          case 'section2-top':
            setCurrentSection(2);
            setBgColor('#B1BA96');
            break;
          case 'section2-bottom':
            setCurrentSection(2);
            setBgColor('#B1BA96');
            break;
          case 'section3-top':
            setCurrentSection(3);
            setBgColor('#B1BA96');
            break;
          case 'section3-bottom':
            setCurrentSection(3);
            setBgColor('#B1BA96');
            break;

          default:
            break;
        }
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
      {/* FIXED POSITION FRONT*/}
      <div className='outercontainer-front fixed z-50 w-full h-full border pointer-events-none select-none'>
        {/* SECTION 1 */}
        <Section1ComponentFixedFront />
        {/* SECTION 2 */}
        <Section2ComponentFixedFront />
        {/* SECTION 3 */}
        <Section3ComponentFixedFront />
      </div>
      {/* FIXED POSITION BACK*/}
      <div className='outercontainer-back fixed z-2 w-full h-full border pointer-events-none select-none'>
        {/* SECTION 1 */}
        <Section1ComponentFixedBack />
        {/* SECTION 2 */}
        <Section2ComponentFixedBack />
        {/* SECTION 3 */}
        <Section3ComponentFixedBack />
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
        {/* CURRENT BUG, JITTER EFFECT DUE TO UPDATING THE STYLE USING USE STATE -> SEEK ALTERNATIVE */}
        <div
          className={`caption_tab px-2 w-fit rotate-0 ${
            currentSection >= 1 ? 'active' : ''
          }`}
        >
          WE HAD A DREAM
        </div>
        <div
          className={`caption_tab px-2 w-fit rotate-1 ${
            currentSection >= 2 ? 'active' : ''
          }`}
        >
          INSPIRED BY NICE THINGS
        </div>
        <div
          className={`caption_tab px-2 w-fit -rotate-[-.5deg] ${
            currentSection >= 3 ? 'active' : ''
          }`}
        >
          AND A BETTER WORLD
        </div>
        <div
          className={`caption_tab px-2 w-fit rotate-[-.25deg] ${
            currentSection >= 4 ? 'active' : ''
          }`}
        >
          SO WE TOOK THAT DREAM AND MADE IT REAL
        </div>
        <div
          className={`caption_tab px-2 w-fit rotate-0 ${
            currentSection >= 5 ? 'active' : ''
          }`}
        >
          SO OTHER PEOPLE CAN DREAM TOO
        </div>
        <div
          className={`caption_tab px-2 w-fit rotate-1/2 ${
            currentSection >= 6 ? 'active' : ''
          }`}
        >
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
                {/* Section 0 */}
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
                <div
                  id='captionmarker_0'
                  className='w-full h-2 bg-purple-600'
                  data-scroll
                  data-scroll-call='section0'
                  data-scroll-repeat
                />
                {/* Section 1 */}
                <Section1ComponentInner
                  setCurrentSection={setCurrentSection}
                  setBgColor={setBgColor}
                />
                {/* Section 2 */}
                <Section2ComponentInner
                  setCurrentSection={setCurrentSection}
                  setBgColor={setBgColor}
                />
                {/* Section 3 */}
                <Section3ComponentInner
                  setCurrentSection={setCurrentSection}
                  setBgColor={setBgColor}
                />
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
