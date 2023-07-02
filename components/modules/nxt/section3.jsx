import React, { useEffect } from 'react';
import 'intersection-observer'; // optional polyfill
import Image from 'next/image';
import Container from '../container';
import FancyLink from '@/components/utils/fancyLink';
import { useAppContext } from 'context/state';

// IMPORT LOCAL IMAGE
import lower_ground from '@/public/nxt/lower-ground.webp';
import ground from '@/public/nxt/ground.webp';
import firstFloor from '@/public/nxt/1st-floor.webp';
import secondFloor from '@/public/nxt/2nd-floor.webp';
import tunnel from '@/public/nxt/tunnel.webp';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '@/helpers/functional/checkMedia';

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  const appContext = useAppContext();

  useEffect(() => {
    window.addEventListener('resize', () => {
      appContext.setHeader({
        headerStyle: 'blur-white',
      });
    });
  }, []);

  return (
    <section className='relative w-full overflow-x-clip mt-[20vw] md:mb-[30vw]'>
      <div className='w-full'>
        <div
          id='enter-bg-white-scale'
          className='sticky z-10 top-0 w-full h-screen flex flex-col'
        >
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
            <Container
              id='building'
              className='absolute top-0 left-1/2 translate-y-[120vh] -translate-x-1/2 w-full h-[100vh] z-2'
            >
              <div className='relative w-full h-full'>
                <div
                  id='tunnel'
                  className='absolute w-[100%] z-40 top-1/2  translate-y-[-125%]'
                >
                  <Image src={tunnel} alt='Tunnel' />
                </div>
                <div
                  id='second_floor'
                  className='absolute w-[100%] z-30 top-1/2  translate-y-[-100%]'
                >
                  <Image src={secondFloor} alt='Second Floor' />
                </div>
                <div
                  id='first_floor'
                  className='absolute w-[100%] z-20 top-1/2  translate-y-[-75%]'
                >
                  <Image src={firstFloor} alt='First Floor' />
                </div>
                <div
                  id='ground'
                  className='absolute w-[100%]  z-10 top-1/2  translate-y-[-45%]'
                >
                  <Image src={ground} alt='Ground' />
                </div>
                <div
                  id='lower_ground'
                  className='absolute w-[100%]  top-1/2 translate-y-[0%]'
                >
                  <Image src={lower_ground} alt='Lower Ground' />
                </div>
              </div>
            </Container>
            <Parallax
              speed={15}
              // disabled={
              //   useMediaQuery('(orientation: landscape)') ? false : true
              // }
              className='absolute top-0 left-0 w-full h-full overflow-visible border border-red-400'
            >
              <div
                id='bg-white-scale'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] bg-white rounded-full'
              />
            </Parallax>
          </div>
        </div>
        <div id='enter-building' className='h-[75vh]' />
      </div>
    </section>
  );
};

export const Section3AnimationOBJ = () => {
  const appContext = useAppContext();

  const checkHeader = (data) => {
    appContext.setHeader({
      headerStyle: data,
    });
  };

  return [
    // SECTION 3
    // ENTER BLUR
    () => {
      const id = 'enter-blur'; // animation id
      const elem = null;
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-bg-white-scale'), // which section will be tracked as the scroll trigger
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
    // BG WHITE SCALE ENTER
    () => {
      const id = 'bg-white-scale-enter'; // animation id
      const elem = document.querySelector('#bg-white-scale');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-bg-white-scale'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 100%',
          end: 'top -50%',
        },
      };

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              scale: 0,
            },
          ],
          to: [
            elem,
            {
              scale: 1,
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // BUILDING ENTER
    () => {
      const id = 'building-enter'; // animation id
      const elem = document.querySelector('#building');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,

          start: 'top 150%',
          end: 'top 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              top: '50%',
              y: '-50%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // TUNNEL ENTER
    () => {
      const id = 'tunnel-enter'; // animation id
      const elem = document.querySelector('#tunnel');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,

          start: 'top 150%',
          end: 'top 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-125%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-41.1%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // ENTER SECOND FLOOR
    () => {
      const id = 'enter_second_floor'; // animation id
      const elem = document.querySelector('#second_floor');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,

          start: 'top 150%',
          end: 'top 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-100%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-41.2%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // ENTER FIRST FLOOR
    () => {
      const id = 'enter_first_floor'; // animation id
      const elem = document.querySelector('#first_floor');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,

          start: 'top 150%',
          end: 'top 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-75%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-42.5%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // ENTER LOWER GROUND
    () => {
      const id = 'enter_lower_ground'; // animation id
      const elem = document.querySelector('#lower_ground');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,

          start: 'top 150%',
          end: 'top 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '0%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-45%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // EXIT BLUR
    () => {
      const id = 'blur-exit'; // animation id
      const elem = null;
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'bottom 50%',
          end: 'bottom 0%',
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

export const Section3AnimationOBJPortrait = () => {
  return [
    // BG WHITE SCALE ENTER
    () => {
      const id = 'bg-white-scale-enter'; // animation id
      const elem = document.querySelector('#bg-white-scale');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-bg-white-scale'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 100%',
          end: 'top -50%',
        },
      };

      // Input Animation
      const animation = [
        {
          from: [
            elem,
            {
              scale: 0,
            },
          ],
          to: [
            elem,
            {
              scale: 1,
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // BUILDING ENTER
    () => {
      const id = 'building-enter'; // animation id
      const elem = document.querySelector('#building');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 150%',
          end: 'top 0%',
        },
      };

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              top: '50%',
              y: '-50%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // TUNNEL ENTER
    () => {
      const id = 'tunnel-enter'; // animation id
      const elem = document.querySelector('#tunnel');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          //
          start: 'top 80%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-125%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-41.1%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // ENTER SECOND FLOOR
    () => {
      const id = 'enter_second_floor'; // animation id
      const elem = document.querySelector('#second_floor');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-100%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-41.2%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // ENTER FIRST FLOOR
    () => {
      const id = 'enter_first_floor'; // animation id
      const elem = document.querySelector('#first_floor');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '-75%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-42.5%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
    // ENTER LOWER GROUND
    () => {
      const id = 'enter_lower_ground'; // animation id
      const elem = document.querySelector('#lower_ground');
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: document.querySelector('#enter-building'), // which section will be tracked as the scroll trigger
          scrub: 0.5,
          start: 'top 80%',
          end: 'bottom 100%',
        },
      };

      // Input Animation
      const animation = [
        {
          set: [
            elem,
            {
              y: '0%',
            },
          ],
        },
        {
          to: [
            elem,
            {
              y: '-45%',
            },
          ],
        },
      ];

      return { id, elem, settings, animation };
    },
  ];
};
