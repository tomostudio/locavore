import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';
import Image from 'next/image';

// Local Images
import circle from '@/public/nxt/circle.webp';
import home from '@/public/nxt/home.webp';
import inspire1 from '@/public/nxt/inspire1.webp';
import inspire2 from '@/public/nxt/inspire2.webp';
import inspire3 from '@/public/nxt/inspire3.webp';
import inspire4 from '@/public/nxt/inspire4.webp';
import inspire5 from '@/public/nxt/inspire5.webp';
import inspire6 from '@/public/nxt/inspire6.webp';
import inspire7 from '@/public/nxt/inspire7.webp';
import inspire8 from '@/public/nxt/inspire8.webp';
import inspire9 from '@/public/nxt/inspire9.webp';
import inspire10 from '@/public/nxt/inspire10.webp';

export const Section6ComponentFixedFront = () => {
  return <div id='section6_fixed_front'></div>;
};
export const Section6ComponentFixedBack = () => {
  return (
    <>
      <div id='section6_fixed_back'>
        <div id='exit_group_s6'>
          <div
            id='s6_text'
            className='opacity-0 pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl '
          >
            <div className='max-w-screen-lg w-full text-center flex flex-col gap-4 md:gap-2 justify-center items-center text-5xl md:text-8xl sm:text-6xl'>
              <span className='flex flex-col md:flex-row gap-4 md:gap-8'>
                <span>INSPIRED</span>
                <span>BY</span>
              </span>
              <span className='flex flex-col md:flex-row gap-4 md:gap-8'>
                <span className='relative'>
                  <div
                    id='circle'
                    className='absolute w-[12rem] md:w-[19rem] opacity-0 translate-y-[-15%] translate-x-[-18%] md:translate-x-[-20%] '
                  >
                    <Image src={circle} alt='' />
                  </div>
                  OUR NICE
                </span>
                <span className='relative'>
                  THING
                  <div className='absolute right-0 bottom-0 h-0 w-0 translate-y-[10px] md:translate-y-[40px] translate-x-[-40px] md:translate-x-[0px]'>
                    <div
                      id='home'
                      className='relative w-[16rem] md:w-[26rem] opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    >
                      <Image src={home} alt='' />
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section6MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(6);
      setBgColor(6);
      console.log('enter 6 top', scrollDirection.vertical);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(6);
        setBgColor(6);
      }
      console.log('leave 6 top', scrollDirection.vertical);
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

const Section6MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(6);
      setBgColor(6);
      console.log('enter 6 bottom', scrollDirection.vertical);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 6
        setCaption(6);
        setBgColor(6);
      }
      console.log('leave 6 bottom', scrollDirection.vertical);
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

export const Section6ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger4'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        {/* INSPIRED BY OUR NICE THING */}
        <div id='enter_text_s6' className='h-[100vh] w-full mt-24' />
        <Section6MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* CIRCLE */}
        <div id='enter_circle' className='h-[25vh] w-full ' />
        {/* INSPIRE1 */}
        <div id='home_spin' className='w-full relative z-50'>
          {/* HOME */}
          <div id='enter_home' className='h-[25vh] w-full' />
          <div
            id='enter_inspire1'
            className='relative h-[50vh] w-full flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl mx-auto w-full h-full'>
              <div
                id='inspire1d'
                className='absolute w-[90%] md:w-[80%] bottom-0 left-0 aspect-[16/9] z-1'
              >
                <Image src={inspire9} alt='' priority />
              </div>
              <div
                id='inspire1n'
                className='absolute w-[90%] md:w-[80%] bottom-0 left-0 aspect-[16/9] opacity-0 z-10 stop-flickering will-change-auto '
              >
                <Image src={inspire10} alt='' priority />
              </div>
            </div>
          </div>
          {/* INSPIRE2 */}
          <div className='relative h-[25vh] w-full' />
          <div
            id='enter_inspire2'
            className='relative h-[50vh] md:h-screen w-full  flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl w-full h-full'>
              <div
                id='inspire2d'
                className='absolute w-[80%] md:w-[60%] top-0 right-0 aspect-[16/9] z-1'
              >
                <Image src={inspire7} alt='' priority />
              </div>
              <div
                id='inspire2n'
                className='absolute w-[80%] md:w-[60%] top-0 right-0 aspect-[16/9] opacity-0 z-10 stop-flickering will-change-auto'
              >
                <Image src={inspire8} alt='' priority />
              </div>
            </div>
          </div>
          {/* INSPIRE3 */}
          <div
            id='enter_inspire3'
            className='relative h-[50vh] md:h-screen w-full flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl w-[80%] md:w-[50%] aspect-[16/9] mx-auto'>
              <div id='inspire3d' className='relative w-full h-full z-1 block'>
                <Image src={inspire5} alt='' priority />
              </div>
              <div
                id='inspire3n'
                className='absolute  w-full h-full top-0 left-0 opacity-0 z-10 stop-flickering will-change-auto block'
              >
                <Image src={inspire6} alt='' priority />
              </div>
            </div>
          </div>
          {/* INSPIRE4 */}
          <div
            id='enter_inspire4'
            className='relative h-[50vh] md:h-screen w-full  flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl w-full h-full mx-auto'>
              <div id='inspire4d' className='absolute w-full top-0 z-1'>
                <Image src={inspire3} alt='' priority />
              </div>
              <div
                id='inspire4n'
                className='absolute w-full top-0 opacity-0  z-10 will-change-auto stop-flickering'
              >
                <Image src={inspire4} alt='' priority />
              </div>
            </div>
          </div>
          {/* INSPIRE5 */}
          <div className='relative h-[50vh] md:h-screen w-full  flex justify-center items-center'>
            <div className='relative max-w-screen-xl mx-auto w-full '>
              <div id='inspire5d' className='absolute w-full h-full px-10 sm:px-20 z-1'>
                <Image src={inspire1} alt='' priority />
              </div>
              <div
                id='inspire5n'
                className='absolute w-full h-full  opacity-0 px-10 sm:px-20 z-10  stop-flickering will-change-auto'
              >
                <Image src={inspire2} alt='' priority />
              </div>
            </div>
          </div>
          {/* EXIT ALL S6 */}
          <div id='exit_all_s6' className='h-[50vh] w-full' />
        </div>
        <Section6MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  );
};

export const Section6AnimationOBJ = [
  // TITLE ENTER
  () => {
    const id = 's6_text_enter'; // animation id
    const elem = document.querySelector('#s6_text');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_s6', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CIRCLE ENTER
  () => {
    const id = 'circle_enter'; // animation id
    const elem = document.querySelector('#circle');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_circle', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // HOME ENTER
  () => {
    const id = 'home_enter'; // animation id
    const elem = document.querySelector('#home');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_home', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE1 SWITCH
  () => {
    const id = 'inspire1_switch'; // animation id
    const elem = document.querySelector('#inspire1n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire1n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 25%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE2 SWITCH
  () => {
    const id = 'inspire2_switch'; // animation id
    const elem = document.querySelector('#inspire2n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire2n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 35%',
        end: 'top 10%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE3 SWITCH
  () => {
    const id = 'inspire3_switch'; // animation id
    const elem = document.querySelector('#inspire3n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire3n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 25%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE4 SWITCH
  () => {
    const id = 'inspire4_switch'; // animation id
    const elem = document.querySelector('#inspire4n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire4n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 20%',
        end: 'top -5%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE5 SWITCH
  () => {
    const id = 'inspire5_switch'; // animation id
    const elem = document.querySelector('#inspire5n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire5n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 25%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // EXIT ALL
  () => {
    const id = 'home_spin'; // animation id
    const elem = document.querySelector('#home');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#home_spin', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
            rotate: '0deg',
          },
        ],
      },
      {
        to: [
          elem,
          {
            rotate: '720deg',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // EXIT ALL
  () => {
    const id = 'exit_group_s6'; // animation id
    const elem = document.querySelector('#exit_group_s6');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s6', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];

export const Section6AnimationOBJMobile = [
  // TITLE ENTER
  () => {
    const id = 's6_text_enter'; // animation id
    const elem = document.querySelector('#s6_text');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_s6', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CIRCLE ENTER
  () => {
    const id = 'circle_enter'; // animation id
    const elem = document.querySelector('#circle');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_circle', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // HOME ENTER
  () => {
    const id = 'home_enter'; // animation id
    const elem = document.querySelector('#home');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_home', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE1 SWITCH
  () => {
    const id = 'inspire1_switch'; // animation id
    const elem = document.querySelector('#inspire1n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire1n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 35%',
        end: 'top 10%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE2 SWITCH
  () => {
    const id = 'inspire2_switch'; // animation id
    const elem = document.querySelector('#inspire2n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire2n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 35%',
        end: 'top 10%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE3 SWITCH
  () => {
    const id = 'inspire3_switch'; // animation id
    const elem = document.querySelector('#inspire3n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire3n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 25%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE4 SWITCH
  () => {
    const id = 'inspire4_switch'; // animation id
    const elem = document.querySelector('#inspire4n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire4n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 40%',
        end: 'top 15%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // INSPIRE5 SWITCH
  () => {
    const id = 'inspire5_switch'; // animation id
    const elem = document.querySelector('#inspire5n');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire5n', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 35%',
        end: 'top 10%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // EXIT ALL
  () => {
    const id = 'home_spin'; // animation id
    const elem = document.querySelector('#home');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#home_spin', // which section will be tracked as the scroll trigger
        scrub: 0.5,
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
            rotate: '0deg',
          },
        ],
      },
      {
        to: [
          elem,
          {
            rotate: '720deg',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // EXIT ALL
  () => {
    const id = 'exit_group_s6'; // animation id
    const elem = document.querySelector('#exit_group_s6');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s6', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
