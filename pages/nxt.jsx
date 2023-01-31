import { useEffect, useRef } from 'react';
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

import {
  Section4ComponentFixedFront,
  Section4ComponentFixedBack,
  Section4AnimationOBJ,
  Section4ComponentInner,
} from '@/components/modules/reveal/section4';

import {
  Section5ComponentFixedFront,
  Section5ComponentFixedBack,
  Section5AnimationOBJ,
  Section5ComponentInner,
} from '@/components/modules/reveal/section5';

import {
  Section6ComponentFixedFront,
  Section6ComponentFixedBack,
  Section6AnimationOBJ,
  Section6ComponentInner,
} from '@/components/modules/reveal/section6';

import {
  Section7ComponentFixedFront,
  Section7ComponentFixedBack,
  Section7AnimationOBJ,
  Section7ComponentInner,
} from '@/components/modules/reveal/section7';

import {
  Section8ComponentFixedFront,
  Section8ComponentFixedBack,
  Section8AnimationOBJ,
  Section8ComponentInner,
} from '@/components/modules/reveal/section8';

export default function Reveal({ seoAPI }) {
  const router = useRouter();
  const [seo] = seoAPI;
  const containerRef = useRef(null);

  // ANIMATION
  const animationObj = [
    ...Section1AnimationOBJ,
    ...Section2AnimationOBJ,
    ...Section3AnimationOBJ,
    ...Section4AnimationOBJ,
    ...Section5AnimationOBJ,
  ];

  // const [bgColor, setBgColor] = useState('#BFC29D');

  useEffect(() => {
    const BackgroundLocomotiveEvents = (e) => {
      const { enter, target } = e.detail;
      if (enter === 'enter' && target === 'section0') {
        setCaption(0);
        setBgColor('#BFC29D');
      }
    };

    window.addEventListener('LocoCall', BackgroundLocomotiveEvents);
    return () => {
      window.removeEventListener('LocoCall', BackgroundLocomotiveEvents);
    };
  }, []);

  // ALTERNATIVE CAPTION
  const setCaption = (n) => {
    const captions = document.querySelectorAll(
      '#reveal_caption > .caption_tab'
    );
    captions.forEach((caption, index) => {
      caption.classList.remove('active');
      if (index + 1 <= n) caption.classList.add('active');
    });
  };

  // Set Background

  const setBgColor = (color) => {
    const bgFrame = document.querySelector('#NXTbackground');
    bgFrame.style.background = color;
  };

  return (
    <Layout>
      <SEO
        title={'Up NXT'}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      {/* FIXED POSITION FRONT*/}
      <div className='outercontainer-front fixed z-40 w-full h-full border pointer-events-none select-none'>
        {/* SECTION 1 */}
        <Section1ComponentFixedFront />
        {/* SECTION 2 */}
        <Section2ComponentFixedFront />
        {/* SECTION 3 */}
        <Section3ComponentFixedFront />
        {/* SECTION 4 */}
        <Section4ComponentFixedFront />
        {/* SECTION 5 */}
        <Section5ComponentFixedFront />
        {/* SECTION 6 */}
        <Section6ComponentFixedFront />
        {/* SECTION 7 */}
        <Section7ComponentFixedFront />
        {/* SECTION 8 */}
        <Section8ComponentFixedFront />
      </div>
      {/* FIXED POSITION BACK*/}
      <div className='outercontainer-back fixed z-2 w-full h-full border pointer-events-none select-none'>
        {/* SECTION 1 */}
        <Section1ComponentFixedBack />
        {/* SECTION 2 */}
        <Section2ComponentFixedBack />
        {/* SECTION 3 */}
        <Section3ComponentFixedBack />
        {/* SECTION 4 */}
        <Section4ComponentFixedBack />
        {/* SECTION 5 */}
        <Section5ComponentFixedBack />
        {/* SECTION 6 */}
        <Section6ComponentFixedBack />
        {/* SECTION 7 */}
        <Section7ComponentFixedBack />
        {/* SECTION 8 */}
        <Section8ComponentFixedBack />
      </div>
      {/* BACKGROUND COLOR */}
      <div
        id='NXTbackground'
        className={`background fixed z-1 w-full h-full pointer-events-none transition-colors duration-1000`}
      />
      {/* CAPTION */}
      <div
        id='reveal_caption'
        className='caption fixed z-50 pointer-events-none w-full px-20 flex flex-wrap justify-center gap-1 bottom-4 top-auto left-1/2 -translate-x-1/2 max-w-screen-xl text-md'
      >
        {/* CURRENT BUG, JITTER EFFECT DUE TO UPDATING THE STYLE USING USE STATE -> SEEK ALTERNATIVE */}
        {/* Potential Solution 1: Create Custom Function for Class Trigger */}
        <div className={`caption_tab px-2 w-fit rotate-0 will-change-auto`}>
          WE HAD A DREAM
        </div>
        <div className={`caption_tab px-2 w-fit rotate-1 will-change-auto`}>
          INSPIRED BY NICE THINGS
        </div>
        <div
          className={`caption_tab px-2 w-fit -rotate-[-.5deg] will-change-auto`}
        >
          AND A BETTER WORLD
        </div>
        <div className={`caption_tab px-2 w-fit rotate-[-.25deg]`}>
          SO WE TOOK THAT DREAM AND MADE IT REAL
        </div>
        <div className={`caption_tab px-2 w-fit rotate-0`}>
          SO OTHER PEOPLE CAN DREAM TOO
        </div>
        <div className={`caption_tab px-2 w-fit rotate-1/2 `}>
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
                  {/* WE HAD A DREAM */}
                  <Section1ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 2 */}
                  {/* INSPIRED BY NICE THINGS */}
                  <Section2ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 3 */}
                  {/* AND A BETTER WORLD */}
                  <Section3ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 4 */}
                  {/* SO WE TOOK THAT DREAM AND MADE IT REAL */}
                  <Section4ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 5 */}
                  {/* SO OTHER PEOPLE CAN DREAM TOO */}
                  <Section5ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 6 */}
                  {/* INSPIRED BY OUR NICE THING */}
                  <Section6ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 7 */}
                  {/* FEED CHANGE */}
                  <Section7ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
                  {/* Section 8*/}
                  {/* LOCAVORE NEXT */}
                  <Section8ComponentInner
                    setBgColor={setBgColor}
                    setCaption={setCaption}
                  />
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
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  return {
    props: {
      seoAPI,
      headerAPI,
      footerAPI,
    },
  };
}
