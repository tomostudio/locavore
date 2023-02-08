import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { Parallax } from 'react-scroll-parallax';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Layout from '@/components/modules/layout';
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger';
import SEO from '@/components/utils/seo';
import Footer from '@/components/modules/footer';

import PushScrollGlobal from '@/helpers/globalscroll';
import { fade } from '@/helpers/preset/transitions';
import client from '@/helpers/sanity/client';

import {
  Section1ComponentFixedFront,
  Section1ComponentFixedBack,
  Section1AnimationOBJ,
  Section1AnimationOBJMobile,
  Section1ComponentInner,
} from '@/components/modules/reveal/section1';

import {
  Section2ComponentFixedFront,
  Section2ComponentFixedBack,
  Section2AnimationOBJ,
  Section2AnimationOBJMobile,
  Section2ComponentInner,
} from '@/components/modules/reveal/section2';

import {
  Section3ComponentFixedFront,
  Section3ComponentFixedBack,
  Section3AnimationOBJ,
  Section3AnimationOBJMobile,
  Section3ComponentInner,
} from '@/components/modules/reveal/section3';

import {
  Section4ComponentFixedFront,
  Section4ComponentFixedBack,
  Section4AnimationOBJ,
  Section4AnimationOBJMobile,
  Section4ComponentInner,
} from '@/components/modules/reveal/section4';

import {
  Section5ComponentFixedFront,
  Section5ComponentFixedBack,
  Section5AnimationOBJ,
  Section5AnimationOBJMobile,
  Section5ComponentInner,
} from '@/components/modules/reveal/section5';

import {
  Section6ComponentFixedFront,
  Section6ComponentFixedBack,
  Section6AnimationOBJ,
  Section6AnimationOBJMobile,
  Section6ComponentInner,
} from '@/components/modules/reveal/section6';

import {
  Section7ComponentFixedFront,
  Section7ComponentFixedBack,
  Section7AnimationOBJ,
  Section7AnimationOBJMobile,
  Section7ComponentInner,
} from '@/components/modules/reveal/section7';

import {
  Section8ComponentFixedFront,
  Section8ComponentFixedBack,
  Section8AnimationOBJ,
  Section8AnimationOBJMobile,
  Section8ComponentInner,
} from '@/components/modules/reveal/section8';

export default function Reveal({ seoAPI, footerAPI }) {
  const router = useRouter();
  const [seo] = seoAPI;
  const [footer] = footerAPI;

  const containerRef = useRef(null);

  // ANIMATION
  const animationObj = {
    '(min-width: 851px)': [
      ...Section1AnimationOBJ,
      ...Section2AnimationOBJ,
      ...Section3AnimationOBJ,
      ...Section4AnimationOBJ,
      ...Section5AnimationOBJ,
      ...Section6AnimationOBJ,
      ...Section7AnimationOBJ,
      ...Section8AnimationOBJ,
    ],
    '(max-width: 850px)': [
      ...Section1AnimationOBJMobile,
      ...Section2AnimationOBJMobile,
      ...Section3AnimationOBJMobile,
      ...Section4AnimationOBJMobile,
      ...Section5AnimationOBJMobile,
      ...Section6AnimationOBJMobile,
      ...Section7AnimationOBJMobile,
      ...Section8AnimationOBJMobile,
    ],
  };

  useEffect(() => {
    const BackgroundLocomotiveEvents = (e) => {
      const { enter, target } = e.detail;
      if (enter === 'enter' && target === 'section0') {
        setCaption(0);
        setBgColor(0);
      } else if (target === 'sectionstart') {
        setBgColor(0);
        setCaption(-1);
      }
    };

    window.addEventListener('LocoCall', BackgroundLocomotiveEvents);

    // Go to the Top, Set Background Color
    // window.scroll(0, 0);
    setCaption(0);
    setBgColor(0);

    const resizeFunction = () => {
      setCaption(currentCaption);
    };
    window.addEventListener('resize', resizeFunction);

    return () => {
      window.removeEventListener('LocoCall', BackgroundLocomotiveEvents);
      window.removeEventListener('resize', resizeFunction);
    };
  }, []);

  let currentCaption = 0;
  // ALTERNATIVE CAPTION
  const setCaption = (n) => {
    const captions = document.querySelectorAll(
      '#reveal_caption > div.captions_wrapper > .caption_tab'
    );
    captions.forEach((caption, index) => {
      caption.classList.remove('active');
      if (index + 1 <= n) caption.classList.add('active');
    });

    const captionContainer = document.querySelector('#reveal_caption');

    // Hide Caption on Section 7 & 8
    if (n >= 7 || n === -1) {
      captionContainer.style.opacity = 0;
    } else {
      captionContainer.style.opacity = 1;
    }

    //ADJUST CENTERING FOR MOBILE
    let offsetX = 0;

    if (n <= 1) {
      offsetX = captions[0].offsetWidth / 2;
    } else {
      // offsetX =
      // moving for 2 or 3 or 4 or 5
      captions.forEach((caption, index) => {
        const setN = n >= 6 ? 6 : n;
        if (index < setN - 1) {
          offsetX = offsetX + caption.offsetWidth + 8;
        }
        if (index === setN - 1) {
          offsetX = offsetX + caption.offsetWidth / 2;
        }
      });
    }

    document.querySelector('#reveal_caption').scroll({
      left: offsetX,
      top: 0,
      behavior: 'smooth',
    });
    currentCaption = n;
  };

  // Set Background

  const bgColorSet = [
    '#BFC29D', //0
    '#BFC29D', //1
    '#B5BD98', //2
    '#ADB894', //3
    '#A0B18E', //4
    '#93A287', //5
    '#8A9881', //6
    '#7B8778', //7
    '#7B8778', //8
  ];
  const setBgColor = (set) => {
    const bgFrame = document.querySelector('#NXTbackground');
    bgFrame.style.background = bgColorSet[set];
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
      <div className='outercontainer-front fixed z-40 w-full h-full border pointer-events-none select-none overflow-hidden'>
        {/* SECTION 1 */}
        <Section1ComponentFixedFront />
        {/* SECTION 2 */}
        {/* <Section2ComponentFixedFront /> */}
        {/* SECTION 3 */}
        {/* <Section3ComponentFixedFront /> */}
        {/* SECTION 4 */}
        {/* <Section4ComponentFixedFront /> */}
        {/* SECTION 5 */}
        {/* <Section5ComponentFixedFront /> */}
        {/* SECTION 6 */}
        {/* <Section6ComponentFixedFront /> */}
        {/* SECTION 7 */}
        {/* <Section7ComponentFixedFront /> */}
        {/* SECTION 8 */}
        <Section8ComponentFixedFront />
      </div>
      {/* FIXED POSITION BACK*/}
      <div className='outercontainer-back fixed -z-1 w-full h-full border pointer-events-none select-none overflow-hidden'>
        {/* SECTION 1 */}
        <Section1ComponentFixedBack />
        {/* SECTION 2 */}
        {/* <Section2ComponentFixedBack /> */}
        {/* SECTION 3 */}
        {/* <Section3ComponentFixedBack /> */}
        {/* SECTION 4 */}
        {/* <Section4ComponentFixedBack /> */}
        {/* SECTION 5 */}
        {/* <Section5ComponentFixedBack /> */}
        {/* SECTION 6 */}
        {/* <Section6ComponentFixedBack /> */}
        {/* SECTION 7 */}
        {/* <Section7ComponentFixedBack /> */}
        {/* SECTION 8 */}
        <Section8ComponentFixedBack />
      </div>
      {/* BACKGROUND COLOR */}
      <div
        id='NXTbackground'
        className={`background fixed -z-2 w-full h-full pointer-events-none transition-colors duration-[2000ms]`}
        style={{ background: bgColorSet[0] }}
      />
      {/* CAPTION */}
      <div
        id='reveal_caption'
        className='caption flex flex-row md:justify-center items-center hide-scrollbar fixed z-50 text-sm pointer-events-none overflow-x-auto py-8 md:py-0 md:overflow-x-auto w-full md:px-20 bottom-2 md:bottom-10 top-auto left-1/2 -translate-x-1/2 max-w-screen-xl transition-all duration-500 opacity-0'
      >
        <div className='md:hidden block w-[50vw] shrink-0' />
        <div className='captions_wrapper flex md:flex-wrap justify-center items-center gap-2 md:gap-1 relative md:!translate-x-0 transition-transform shrink-0 md:shrink'>
          <div
            className={`caption_tab px-2 w-fit h-fit rotate-0 will-change-auto text-center shrink-0 max-w-[80vw]`}
          >
            WE HAD A DREAM
          </div>
          <div
            className={`caption_tab px-2 w-fit h-fit rotate-1 will-change-auto text-center shrink-0 max-w-[80vw]`}
          >
            INSPIRED BY NICE THINGS
          </div>
          <div
            className={`caption_tab px-2 w-fit h-fit -rotate-[-.5deg] will-change-auto text-center shrink-0 max-w-[80vw]`}
          >
            AND A BETTER WORLD
          </div>
          <div
            className={`caption_tab px-2 w-fit h-fit rotate-[-.25deg] text-center shrink-0 max-w-[80vw]`}
          >
            SO WE TOOK THAT DREAM AND MADE IT REAL
          </div>
          <div
            className={`caption_tab px-2 w-fit h-fit rotate-0 text-center shrink-0 max-w-[80vw]`}
          >
            SO OTHER PEOPLE CAN DREAM TOO
          </div>
          <div
            className={`caption_tab px-2 w-fit h-fit rotate-1/2 text-center shrink-0 max-w-[80vw]`}
          >
            INSPIRED BY OUR NICE THING
          </div>
        </div>
        <div className='md:hidden block w-[50vw] shrink-0' />
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
                  <div
                    id='captionmarker_0'
                    className='w-full h-0'
                    data-scroll
                    data-scroll-call='sectionstart'
                    data-scroll-repeat
                  />
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
                    className='w-full h-0'
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

                  <Footer footer={footer} mailchimp={seo.mailchimpID} />
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
