import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';
import Image from 'next/image';

// Local Images
import underline from '@/public/nxt/underline.webp';
import heart1 from '@/public/nxt/heart01.webp';
import heart2 from '@/public/nxt/heart02.webp';

export const Section7ComponentFixedFront = () => {
  return (
    <div id='section7_fixed_front'>
      <div
        id='exit_group_s7'
        className='fixed top-1/2 left-1/2 w-full h-fit translate-y-[-50%] translate-x-[-50%]'
      >
        <div
          id='feed_change'
          className='pointer-events-none font-funkturm tracking-[0.08em] scale-[5] fixed w-full h-fit opacity-0 flex flex-col justify-center items-center text-center leading-none text-white'
        >
          <div className='relative flex gap-4 md:gap-6 flex-col md:flex-row justify-center items-center w-fit h-fit text-5xl md:text-8xl sm:text-6xl'>
            <span className='relative block'>
              FEED
              <div
                id='underline-mobile-1'
                className='absolute clip-path-inset-[0%_100%_0%_0] w-full h-2 bottom-0 left-[-5px] translate-y-[15px] block md:hidden'
              >
                <Image
                  src={underline}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'left',
                  }}
                />
              </div>
            </span>
            <span className='relative block'>
              CHANGE.
              <div
                id='underline-mobile-2'
                className='absolute clip-path-inset-[0%_100%_0%_0] w-full h-2 bottom-0 left-[-5px] translate-y-[15px] block md:hidden'
              >
                <Image
                  src={underline}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'left',
                  }}
                />
              </div>
            </span>
            <div
              id='hearts'
              className='absolute right-2 md:right-4 bottom-18 md:bottom-auto md:-top-10 opacity-0'
            >
              <div id='heart1' className='absolute w-10 md:w-16 animate-fade'>
                <Image src={heart1} alt='' />
              </div>
              <div
                id='heart2'
                className='absolute w-8 md:w-14 translate-x-[-40%] translate-y-[-80%] animate-fade-delay'
              >
                <Image src={heart2} alt='' />
              </div>
            </div>
          </div>
          <div
            id='underline'
            className='relative w-[43rem] h-4 mr-16 mt-2 clip-path-inset-[0%_100%_0%_0] hidden md:block'
          >
            <Image
              src={underline}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Section7ComponentFixedBack = () => {
  return <div id='section7_fixed_back'></div>;
};

const Section7MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(7);
      setBgColor(7);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(7);
        setBgColor(7);
      }
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

const Section7MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(7);
      setBgColor(7);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 7
        setCaption(7);
        setBgColor(7);
      }
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

export const Section7ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger4'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        <Section7MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        {/* FEED CHANGE */}
        <div id='enter_feed_change' className='h-[100vh] w-full' />
        {/* UNDERLINE */}
        <div id='enter_underline' className='h-[50vh] w-full'>
          <div id='enter_underline_m_1' className='h-[50%] w-full ' />
          <div id='enter_underline_m_2' className='h-[50%] w-full ' />
        </div>
        {/* HEART1 */}
        <div id='enter_hearts' className='h-[25vh] w-full mt-24' />
        <div className='h-[100vh] md:h-[50vh]' />
        <div id='exit_all_s7' className='h-[50vh]' />
        <Section7MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  );
};

export const Section7AnimationOBJMobile = [
  // TITLE ENTER
  () => {
    const id = 'feed_change_enter'; // animation id
    const elem = '#feed_change';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_feed_change', // which section will be tracked as the scroll trigger
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
            opacity: 0,
            scale: 5,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            scale: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // UNDERLINE ENTER
  () => {
    const id = 'underline_enter_m_1'; // animation id
    const elem = '#underline-mobile-1';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_underline_m_1', // which section will be tracked as the scroll trigger
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
            clipPath: 'inset(0% 100% 0% 0%)',
          },
        ],
      },
      {
        to: [
          elem,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // UNDERLINE 2 ENTER
  () => {
    const id = 'underline_enter_m_2'; // animation id
    const elem = '#underline-mobile-2';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_underline_m_2', // which section will be tracked as the scroll trigger
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
            clipPath: 'inset(0% 100% 0% 0%)',
          },
        ],
      },
      {
        to: [
          elem,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // HEART1 ENTER
  () => {
    const id = 'hearts_enter'; // animation id
    const elem = '#hearts';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_hearts', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
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
    const id = 'exit_group_s7'; // animation id
    const elem = '#exit_group_s7';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s7', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '-100vh',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
export const Section7AnimationOBJ = [
  // TITLE ENTER
  () => {
    const id = 'feed_change_enter'; // animation id
    const elem = '#feed_change';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_feed_change', // which section will be tracked as the scroll trigger
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
            opacity: 0,
            scale: 5,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            scale: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // UNDERLINE ENTER
  () => {
    const id = 'underline_enter'; // animation id
    const elem = '#underline';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_underline', // which section will be tracked as the scroll trigger
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
            clipPath: 'inset(0% 100% 0% 0%)',
          },
        ],
      },
      {
        to: [
          elem,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // HEART1 ENTER
  () => {
    const id = 'hearts_enter'; // animation id
    const elem = '#hearts';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_hearts', // which section will be tracked as the scroll trigger
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
  // EXIT ALL
  () => {
    const id = 'exit_group_s7'; // animation id
    const elem = '#exit_group_s7';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all_s7', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '-100vh',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
