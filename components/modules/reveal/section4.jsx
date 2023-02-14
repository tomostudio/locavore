import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';
import Image from 'next/image';

// Local Images
import box from '@/public/nxt/box.webp';
import constructionSticker from '@/public/nxt/construction-sticker.webp';
import pot from '@/public/nxt/pot.webp';
import construction1 from '@/public/nxt/construction1.webp';
import construction2 from '@/public/nxt/construction2.webp';
import blossom from '@/public/nxt/blossom.webp';
import loading from '@/public/nxt/loading.gif';
import boxMobile from '@/public/nxt/box_mobile.png';

export const Section4ComponentFixedFront = () => {
  return (
    <div id='section4_fixed_front'>
      <div className='s4_group_exit_all'>
        <div
          id='s4_text'
          className='opacity-0 pointer-events-none font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-5xl md:text-8xl sm:text-6xl'
        >
          <div className='relative max-w-screen-xl flex flex-col  w-fit leading-tight text-center md:text-left lg:ml-10'>
            <div className='relative z-2 w-fit mx-auto md:mx-0'>
              SO <br className='block md:hidden' /> WE TOOK
            </div>
            <div className='relative  z-2 mx-auto md:ml-28 lg:ml-44  w-fit'>
              THAT <br className='block md:hidden' /> DREAM
              <div
                id='pot'
                className='absolute w-28 md:w-48 opacity-0 top-1/2 translate-x-[60%] right-0 md:right-auto md:translate-x-[-70%] md:left-0 translate-y-[-55%]'
              >
                <Image src={pot} alt='' />
              </div>
            </div>
            <div className='w-fit  z-2 relative '>
              AND{' '}
              <span className='inline md:block lg:inline relative'>
                MADE <br className='block md:hidden' />
                IT REAL
                {/* Desktop */}
                <div
                  id='box'
                  className='absolute w-[53.5rem] hidden md:block opacity-0 top-1/2 right-0 translate-x-[70px] translate-y-[-50%]'
                >
                  <Image src={box} alt='' />
                </div>
              </span>
              {/* MOBILE */}
              <div
                id='box'
                className='block md:hidden w-[110%] h-[110%] opacity-0 absolute top-1/2 translate-y-[-50%] right-0 translate-x-[10%] '
              >
                <div className='relative h-full '>
                  <Image
                    src={boxMobile}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='s4_group_exit_all'>
              <div
                id='construction_sticker'
                className='absolute w-72 md:w-[28rem] -z-2  opacity-0 translate-x-[-10vw] lg:translate-x-[0vw] translate-y-[30px] md:top-full md:left-0 md:translate-y-[-20%]'
              >
                <Image src={constructionSticker} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='construction1'
        className='fixed h-0 w-0 top-0 right-1/2 overflow-visible'
      >
        <div className='w-52 md:w-96 z-10 absolute right-1/2 translate-x-[100%] translate-y-[-100%] md:translate-x-[145%]'>
          <Image
            src={construction1}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
export const Section4ComponentFixedBack = () => {
  return (
    <div id='section4_fixed_back'>
      <div
        id='construction2'
        className='fixed z-1 h-0 w-0 top-1/2 right-0 overflow-visible'
      >
        <div className='w-52 md:w-96 absolute top-1/2 left-1/2 translate-y-[-95%] translate-x-[100%]'>
          <Image
            src={construction2}
            alt=''
          />
        </div>
      </div>
      <div className='s4_group_exit_all'>
        <div
          id='blossom'
          className='fixed h-0 w-0 -z-1 top-1/2 translate-y-[-50%] right-0 overflow-visible translate-x-[100vw]'
        >
          <div className='w-56 md:w-[26rem] absolute top-1/2 right-0 md:right-auto md:left-auto translate-y-[-270%] sm:translate-y-[-300%] translate-x-[-20%] sm:translate-x-[-35%] md:translate-y-[-220%] lg:translate-y-[-150%] md:translate-x-[0%] lg:translate-x-[50%]'>
            <Image src={blossom} alt='' />
          </div>
        </div>
        <div
          id='loading'
          className='fixed h-0 w-0 top-1/2 translate-y-[-50%] right-0 md:right-1/2 overflow-visible opacity-0'
        >
          <div className='w-24 md:w-44 lg:w-48 absolute top-1/2 right-14 md:right-auto md:left-auto translate-y-[-600%] sm:translate-y-[-700%] md:translate-y-[-200px] lg:translate-y-[-140%] sm:translate-x-[-10%] md:translate-x-[150%] lg:translate-x-[230%]'>
            <Image src={loading} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section4MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(4);
      setBgColor(4);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(4);
        setBgColor(4);
      }
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

const Section4MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(4);
      setBgColor(4);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 4
        setCaption(4);
        setBgColor(4);
      }
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

export const Section4ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 4 */}
      <section
        id='trigger4'
        className='trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center'
        data-scroll-section
      >
        <div id='enter_s4_text' className='h-[100vh] mt-24' />
        <Section4MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div id='enter_box' className='h-[25vh]' />
        <div id='enter_construction_sticker' className='h-[25vh] ' />
        <div id='enter_group_s4' className='h-[150vh]' />
        <div className='h-[100vh]' />
        <div id='exit_all4' className='h-[100vh]' />
        <Section4MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
        <div className='h-50vh' />
      </section>
    </>
  );
};

export const Section4AnimationOBJ = [
  // TEXT ENTER
  () => {
    const id = 's4_text_enter'; // animation id
    const elem = document.querySelector('#s4_text');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_s4_text', // which section will be tracked as the scroll trigger
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
  // BOX
  () => {
    const id = 'enter_box'; // animation id
    const elem = document.querySelector('#box');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_box', // which section will be tracked as the scroll trigger
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
  // CONSTRUCTION STICKER
  () => {
    const id = 'enter_construction_sticker'; // animation id
    const elem = document.querySelector('#construction_sticker');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_construction_sticker', // which section will be tracked as the scroll trigger
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
  // POT
  () => {
    const id = 'enter_pot'; // animation id
    const elem = document.querySelector('#pot');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
       scrub: 0.5,
        start: 'top 100%',
        end: 'top 75%',
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
  // CONSTRUCTION 1
  () => {
    const id = 'enter_construction1'; // animation id
    const elem = document.querySelector('#construction1');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
       scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 50%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '100vh',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // CONSTRUCTION 1 INNER
  () => {
    const id = 'enter_construction1_inner'; // animation id
    const elem = document.querySelectorAll('#construction1 > div');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll triggerdocument.querySelector(
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 50%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '0%',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // CONSTRUCTION 2
  () => {
    const id = 'enter_construction2'; // animation id
    const elem = document.querySelector('#construction2');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 50%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            x: '-100vw',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // CONSTRUCTION 2 INNER
  () => {
    const id = 'enter_construction2_inner'; // animation id
    const elem = document.querySelectorAll('#construction2 > div');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 50%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            x: '-100%',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // BLOSSOM
  () => {
    const id = 'enter_blossom'; // animation id
    const elem = document.querySelector('#blossom');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 60%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            x: '-50vw',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // LOADING
  () => {
    const id = 'enter_loading'; // animation id
    const elem = document.querySelector('#loading');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 50%',
        end: 'top 25%',
      },
    };
    // Input Animation
    const animation = [
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
    const id = 'exit_all4'; // animation id
    const elem = document.querySelectorAll('.s4_group_exit_all');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all4', // which section will be tracked as the scroll trigger
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

export const Section4AnimationOBJMobile = [
  // TEXT ENTER
  () => {
    const id = 's4_text_enter'; // animation id
    const elem = document.querySelector('#s4_text');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_s4_text', // which section will be tracked as the scroll trigger
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
  // BOX
  () => {
    const id = 'enter_box'; // animation id
    const elem = document.querySelector('#box');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_box', // which section will be tracked as the scroll trigger
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
  // CONSTRUCTION STICKER
  () => {
    const id = 'enter_construction_sticker'; // animation id
    const elem = document.querySelector('#construction_sticker');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_construction_sticker', // which section will be tracked as the scroll trigger
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
  // POT
  () => {
    const id = 'enter_pot'; // animation id
    const elem = document.querySelector('#pot');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
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
  // CONSTRUCTION 1
  () => {
    const id = 'enter_construction1'; // animation id
    const elem = document.querySelector('#construction1');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 85%',
        end: 'bottom 0%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '100vh',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // CONSTRUCTION 1 INNER
  () => {
    const id = 'enter_construction1_inner'; // animation id
    const elem = document.querySelectorAll('#construction1 > div');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 85%',
        end: 'bottom 0%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            y: '0%',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // CONSTRUCTION 2
  () => {
    const id = 'enter_construction2'; // animation id
    const elem = document.querySelector('#construction2');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 85%',
        end: 'bottom 0%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            x: '-100vw',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // CONSTRUCTION 2 INNER
  () => {
    const id = 'enter_construction2_inner'; // animation id
    const elem = document.querySelectorAll('#construction2 > div');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 85%',
        end: 'bottom 0%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            x: '-100%',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // BLOSSOM
  () => {
    const id = 'enter_blossom'; // animation id
    const elem = document.querySelector('#blossom');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 0%',
      },
    };
    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            x: '0vw',
          },
        ],
      },
    ];
    return { id, elem, settings, animation };
  },
  // LOADING
  () => {
    const id = 'enter_loading'; // animation id
    const elem = document.querySelector('#loading');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s4', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 50%',
        end: 'top 0%',
      },
    };
    // Input Animation
    const animation = [
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
    const id = 'exit_all4'; // animation id
    const elem = document.querySelectorAll('.s4_group_exit_all');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_all4', // which section will be tracked as the scroll trigger
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
