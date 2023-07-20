import React, { useEffect } from 'react';
import 'intersection-observer'; // optional polyfill
import Image from 'next/image';
import Container from '../container';
import FancyLink from '@/components/utils/fancyLink';
import { useAppContext } from 'context/state';
import { m, useAnimation } from 'framer-motion';

// IMPORT LOCAL IMAGE
import lower_ground from '@/public/nxt/lower-ground.webp';
import ground from '@/public/nxt/ground.webp';
import firstFloor from '@/public/nxt/1st-floor.webp';
import secondFloor from '@/public/nxt/2nd-floor.webp';
import tunnel from '@/public/nxt/tunnel.webp';
import { useInView } from 'react-cool-inview';

import { Parallax } from 'react-scroll-parallax';

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  const controls = useAnimation();
  const controlBg = useAnimation();

  const bgInview = useInView({
    threshold: 0,
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      console.log(scrollDirection, entry, 'enter');
      if (scrollDirection.vertical === 'up') controlBg.start('visible');
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      console.log(scrollDirection, entry, 'exit');

      if (scrollDirection.vertical === 'down') controlBg.start('hidden');
    },
  });

  const { observe } = useInView({
    threshold: 0,
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      console.log(scrollDirection, entry, 'enter');
      if (scrollDirection.vertical === 'up') controls.start('visible');
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      console.log(scrollDirection, entry, 'exit');

      if (scrollDirection.vertical === 'down') controls.start('hidden');
    },
  });

  useEffect(() => {
    controlBg.start('hidden');
    controls.start('hidden');
  }, []);

  const buildingSpeed = 3;
  const variantsBg = {
    hidden: {
      scale: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const variantsBuilding = {
    hidden: {
      y: '50%',
      x: '-50%',
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: '-50%',
      x: '-50%',
      transition: {
        ease: 'easeInOut',
        duration: 2,
      },
    },
  };

  const variantsTunnel = {
    hidden: {
      y: '-50%',
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: '-41.1%',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: buildingSpeed,
      },
    },
  };

  const variantsSecondFloor = {
    hidden: {
      opacity: 0,
      y: '-30%',
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: '-41.2%',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: buildingSpeed,
      },
    },
  };

  const variantsFirstFloor = {
    hidden: {
      y: '-10%',
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: '-42.5%',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: buildingSpeed,
      },
    },
  };

  const variantsGround = {
    hidden: {
      y: '25%',
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: '-45%',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: buildingSpeed,
      },
    },
  };

  const variantsLowerGround = {
    hidden: {
      y: '40%',
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      y: '-45%',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: buildingSpeed,
      },
    },
  };

  return (
    <section id='section3' className='relative w-full overflow-x-clip'>
      {/* Background Buffer */}
      <div className='w-full h-0 landscape:h-[25vh]' />
      <div className='w-full '>
        <div className='sticky z-10 top-0 w-full h-screen flex flex-col justify-center items-center'>
          <div className='relative w-full h-screen'>
            <Container className='relative w-full h-full z-20 setflex-center'>
              <span className='text-[#BEC29D] text-center font-funkturm text-m-additionalTitle sm:text-[4rem] md:text-[5rem] lg:text-d-additionalTitle leading-full '>
                OUR
                <br />
                FACILITIES
              </span>
            </Container>
            <div className='absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex justify-center items-end'>
              <FancyLink
                className={`w-fit p-4 mb-20 lg:mb-[4.5rem] text-d-small bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm text-black font-default tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl`}
                destination='/nxt/facilities'
              >
                VIEW OUR FACILITIES
              </FancyLink>
            </div>
            <m.div
              animate={controls}
              initial='hidden'
              variants={variantsBuilding}
              className='absolute top-1/2 left-1/2 translate-y-[100%] -translate-x-1/2 w-full h-[95vh] z-2 max-w-screen-xl'
            >
              <Parallax speed={5} className='relative w-full h-full'>
                <m.div
                  animate={controls}
                  initial='hidden'
                  variants={variantsTunnel}
                  className='absolute w-full  z-40 top-1/2  translate-y-[-30%]'
                >
                  <Image src={tunnel} alt='' />
                </m.div>
                <m.div
                  animate={controls}
                  initial='hidden'
                  variants={variantsSecondFloor}
                  className='absolute w-full z-30 top-1/2  translate-y-[-10%]'
                >
                  <Image src={secondFloor} alt='' />
                </m.div>
                <m.div
                  animate={controls}
                  initial='hidden'
                  variants={variantsFirstFloor}
                  className='absolute w-full  z-20 top-1/2  translate-y-[10%]'
                >
                  <Image src={firstFloor} alt='' />
                </m.div>
                <m.div
                  animate={controls}
                  initial='hidden'
                  variants={variantsGround}
                  className='absolute w-full  z-10 top-1/2 translate-y-[25%]'
                >
                  <Image src={ground} alt='' />
                </m.div>
                <m.div
                  animate={controls}
                  initial='hidden'
                  variants={variantsLowerGround}
                  className='absolute w-full  top-1/2 translate-y-[40%]'
                >
                  <Image src={lower_ground} alt='' />
                </m.div>
              </Parallax>
            </m.div>

            <Parallax
              speed={10}
              className='absolute top-0 left-0 w-full h-screen overflow-visible flex justify-center content-center items-center'
            >
              <m.div
                animate={controlBg}
                initial='hidden'
                variants={variantsBg}
                id='bg-white-scale'
                className='relative w-[150vw] h-[150vw] aspect-1 md:w-[120vw] md:h-[120vw] bg-white rounded-full scale-0 flex-shrink-0'
              />
            </Parallax>
          </div>
          {/* Animation Trigger */}
          <div
            ref={observe}
            className='absolute top-[25%] w-full h-[1px] pointer-events-none opacity-0 z-50'
          />
          <div
            ref={bgInview.observe}
            className='absolute top-[25%] w-full h-[1px] pointer-events-none opacity-0 z-50'
          />
        </div>
      </div>
      {/* Background Buffer */}
      <div className='w-full h-0 landscape:h-[vw] landscape:min-h-[300px]' />
    </section>
  );
};

export const Section3AnimationOBJMobile = [];

export const Section3AnimationOBJ = () => {
  const appContext = useAppContext();
  const checkHeader = (data) => {
    appContext.setHeader({
      headerStyle: data,
    });
  };
  return [
    () => {
      const id = 'enter-blur'; // animation id
      const elem = null;
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#section3'), // which section will be tracked as the scroll trigger
          scrub: true,
          start: 'top 100%',
          end: 'top 25%',
          onEnterBack: () => checkHeader('blur-white'),
          onLeave: () => checkHeader('blur'),
        },
      };

      // Input Animation
      const animation = [];

      return { id, elem, settings, animation };
    },
    // EXIT BLUR
    () => {
      const id = 'blur-exit'; // animation id
      const elem = null;
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#section3'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'bottom 100%',
          end: 'bottom 50%',
          onEnterBack: () => checkHeader('blur'),
          onLeave: () => checkHeader('blur-white'),
        },
      };

      // Input Animation
      const animation = [];

      return { id, elem, settings, animation };
    },
  ];
};
