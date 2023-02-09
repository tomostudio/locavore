import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

// Local Images
import circle from '@/public/nxt/circle.png';
import home from '@/public/nxt/home.png';
import inspire1 from '@/public/nxt/inspire1.jpg';
import inspire2 from '@/public/nxt/inspire2.jpg';
import inspire3 from '@/public/nxt/inspire3.jpg';
import inspire4 from '@/public/nxt/inspire4.jpg';
import inspire5 from '@/public/nxt/inspire5.jpg';
import inspire6 from '@/public/nxt/inspire6.jpg';
import inspire7 from '@/public/nxt/inspire7.jpg';
import inspire8 from '@/public/nxt/inspire8.jpg';
import inspire9 from '@/public/nxt/inspire9.jpg';
import inspire10 from '@/public/nxt/inspire10.jpg';

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
                    <Image src={circle} placeholder="blur" alt='' />
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
                      <Image src={home} placeholder="blur" alt='' />
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
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(6);
        setBgColor(6);
      }
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
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 6
        setCaption(6);
        setBgColor(6);
      }
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
        {/* HOME */}
        <div id='enter_home' className='h-[25vh] w-full' />
        {/* INSPIRE1 */}
        <div id='home_spin' className='w-full relative'>
          <div
            id='enter_inspire1'
            className='relative h-[100vh] w-full flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl mx-auto w-full h-full'>
              <div
                id='inspire1d'
                className='absolute w-[90%] md:w-[80%] bottom-0 left-0 aspect-[16/9]'
              >
                <Image src={inspire9} placeholder="blur" alt='' />
              </div>
              <div
                id='inspire1n'
                className='absolute w-[90%] md:w-[80%] bottom-0 left-0 aspect-[16/9] opacity-0'
              >
                <Image src={inspire10} placeholder="blur" alt='' />
              </div>
            </div>
          </div>
          {/* INSPIRE2 */}
          <div className='relative h-[25vh] w-full' />
          <div
            id='enter_inspire2'
            className='relative h-screen w-full  flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl w-full h-full'>
              <Parallax speed={-10} className='relative w-full h-full'>
                <div
                  id='inspire2d'
                  className='absolute w-[80%] md:w-[60%] top-0 right-0 aspect-[16/9]'
                >
                  <Image src={inspire7} placeholder="blur" alt='' />
                </div>
                <div
                  id='inspire2n'
                  className='absolute w-[80%] md:w-[60%] top-0 right-0 aspect-[16/9] opacity-0'
                >
                  <Image src={inspire8} placeholder="blur" alt='' />
                </div>
              </Parallax>
            </div>
          </div>
          {/* INSPIRE3 */}
          <div
            id='enter_inspire3'
            className='relative h-screen w-full  flex justify-center items-center'
          >
            <div className='relative max-w-screen-xl w-full h-full mx-auto'>
              <div
                id='inspire3d'
                className='absolute w-[80%] md:w-[70%] top-0 left-1/2 translate-x-[-50%] aspect-[16/9]'
              >
                <Image src={inspire5} placeholder="blur" alt='' />
              </div>
              <div
                id='inspire3n'
                className='absolute w-[80%] md:w-[70%] top-0 left-1/2 translate-x-[-50%] aspect-[16/9] opacity-0'
              >
                <Image src={inspire6} placeholder="blur" alt='' />
              </div>
            </div>
          </div>
          {/* INSPIRE4 */}
          <div
            id='enter_inspire4'
            className='relative h-screen w-full  flex justify-center items-center'
          >
            <Parallax speed={-20} className='relative w-full h-full'>
              <div className='relative max-w-screen-xl w-full h-full mx-auto'>
                <div id='inspire4d' className='absolute w-full  top-0'>
                  <Image src={inspire3} placeholder="blur" alt='' />
                </div>
                <div id='inspire4n' className='absolute w-full top-0 opacity-0'>
                  <Image src={inspire4} placeholder="blur" alt='' />
                </div>
              </div>
            </Parallax>
          </div>
          {/* INSPIRE5 */}
          <div className='relative h-screen w-full  flex justify-center items-center'>
            <div className='relative max-w-screen-xl mx-auto w-full h-full'>
              <div
                id='inspire5d'
                className='absolute w-[80%] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]'
              >
                <Image src={inspire1} placeholder="blur" alt='' />
              </div>
              <div
                id='inspire5n'
                className='absolute w-[80%] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] opacity-0'
              >
                <Image src={inspire2} placeholder="blur" alt='' />
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
    const elem = '#s6_text';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_s6', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
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
    const elem = '#circle';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_circle', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
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
    const elem = '#home';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_home', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
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
    const elem = '#inspire1n';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire1n', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 110%',
        end: 'bottom 40%',
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
    const elem = '#inspire2n';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire2n', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 110%',
        end: 'bottom 40%',
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
    const elem = '#inspire3n';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire3n', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 110%',
        end: 'bottom 40%',
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
    const elem = '#inspire4n';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire4n', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 110%',
        end: 'bottom 40%',
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
    const elem = '#inspire5n';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#inspire5n', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'bottom 110%',
        end: 'bottom 40%',
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
    const elem = '#home';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#home_spin', // which section will be tracked as the scroll trigger
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
    const elem = '#exit_group_s6';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s6', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
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

export const Section6AnimationOBJMobile = [...Section6AnimationOBJ];
