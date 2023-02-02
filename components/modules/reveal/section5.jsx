import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';
import Image from 'next/image';

// Local Images
import revolutionSticker from '@/public/nxt/revolution_sticker.png'
import daisy from '@/public/nxt/daisy.png'
import yourSelf from '@/public/nxt/yourself.png'
import bulb from '@/public/nxt/bulb.png'
import collage from '@/public/nxt/collage.png'
import cloud1 from '@/public/nxt/cloud01.png'
import cloud2 from '@/public/nxt/cloud02.png'

export const Section5ComponentFixedFront = () => {
  return (
    <div id="section5_fixed_front">
      <div className="s5_group_exit_1">
        <div
          id="s5_text"
          className="pointer-events-none opacity-0 font-funkturm tracking-[0.08em] fixed w-full h-full flex justify-center items-center text-center leading-none text-white text-8xl"
        >
          <div className="max-w-screen-lg w-full text-left ml-72">
            <span className="block -ml-24">SO</span>
            OTHER PEOPLE
            <br />
            CAN DREAM TOO
          </div>
        </div>
      </div>
    </div>
  );
};
export const Section5ComponentFixedBack = () => {
  return (
    <div id="section5_fixed_back">
      <div className="s5_group_exit_1">
        <div
          id="revolution"
          className="fixed w-52 h-52 opacity-0 top-1/2 left-1/2 translate-y-[50%] translate-x-[105%]"
        >
          <Image
            src={revolutionSticker}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="daisy"
          className="fixed z-10 w-52 h-32 top-1/2 left-1/2 translate-x-[-35%] translate-y-[-450%]"
        >
          <Image
            src={daisy}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="yourself"
          className="fixed w-96 h-52 top-1/2 left-1/2 translate-x-[-100%] translate-y-[250%]"
        >
          <Image
            src={yourSelf}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          id="bulb"
          className="fixed z-10 opacity-0 w-32 h-32 top-1/2 left-1/2 translate-x-[-350%] translate-y-[-190%]"
        >
          <Image
            src={bulb}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div
        id="cloud1"
        className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[-400%] translate-x-[425%] scale-[2] opacity-100"
      >
        <Image
          src={cloud1}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        id="cloud2"
        className="fixed w-96 h-40 top-1/2 right-1/2 translate-y-[305%] translate-x-[-310%] scale-[3] opacity-100"
      >
        <Image
          src={cloud2}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
};

const Section5MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(5);
      setBgColor(5);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(5);
        setBgColor(5);
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

const Section5MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(5);
      setBgColor(5);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 5
        setCaption(5);
        setBgColor(5);
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

export const Section5ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger3'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        {/* SO OTHER PEOPLE CAN DREAM TOO */}
        <div
          id='enter_text_s5'
          className='h-[100vh] w-full bg-green-600 bg-opacity-50 mt-24'
        />
        {/* START A REVOLUTION */}
        <div
          id='enter_revolution'
          className='h-[25vh] w-full bg-blue-600 bg-opacity-50 mt-24'
        />
        {/* COLLAGE NORMAL*/}
        <div
          id='wish'
          className='w-full mx-auto flex justify-end max-w-screen-lg mt-24'
        >
          <div className='relative w-[28rem] h-[38rem] mr-56'>
            <Image
              src={collage}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        {/* DAISY YOURSELF */}
        <div
          id='enter_daisy_yourself'
          className='h-[100vh] w-full bg-red-600 bg-opacity-50 mt-24'
        />
        {/* BULB */}
        <div
          id='enter_bulb'
          className='h-[25vh] w-full bg-green-600 bg-opacity-50'
        />
        {/* EXIT GROUP 1 */}
        <div
          id="exit_group_s5_1"
          className="h-[50vh] w-full bg-blue-600 bg-opacity-50 mt-24"
        />
        {/* CLOUD 1 */}
        <div
          id="enter_group_s5_1"
          className="h-[100vh] w-full bg-red-600 bg-opacity-50"
        />
        <Section5MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div className='h-[200vh] flex justify-center flex-col'>SECTION 5</div>
        <Section5MarkerBottom setCaption={setCaption} setBgColor={setBgColor} />
      </section>
    </>
  );
};

export const Section5AnimationOBJ = [
  // TITLE ENTER
  () => {
    const id = 's5_text_enter'; // animation id
    const elem = '#s5_text';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_text_s5', // which section will be tracked as the scroll trigger
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
  // REVOLUTION ENTER
  () => {
    const id = 'revolution_enter'; // animation id
    const elem = '#revolution';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_revolution', // which section will be tracked as the scroll trigger
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
  // DAISY ENTER
  () => {
    const id = 'daisy_enter'; // animation id
    const elem = '#daisy';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_daisy_yourself', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-35%',
            y: '-450%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-35%',
            y: '-170%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // YOURSELF ENTER
  () => {
    const id = 'yourself_enter'; // animation id
    const elem = '#yourself';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_daisy_yourself', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 50%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-100%',
            y: '250%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-100%',
            y: '-110%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // BULB ENTER
  () => {
    const id = 'bulb_enter'; // animation id
    const elem = '#bulb';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bulb', // which section will be tracked as the scroll trigger
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
    ]

    return { id, elem, settings, animation }
  },
  // EXIT ALL
  () => {
    const id = 'exit_group_s5_1' // animation id
    const elem = '.s5_group_exit_1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    }

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
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD1
  () => {
    const id = 'enter_cloud1' // animation id
    const elem = '#cloud1'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            scale: 2,
            opacity: 1,
            x: '425%',
            y: '-400%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            scale: 1,
            opacity: 0,
            x: '50%',
            y: '-50%',
          },
        ],
      },
    ]

    return { id, elem, settings, animation }
  },
  // ENTER CLOUD2
  () => {
    const id = 'enter_cloud2' // animation id
    const elem = '#cloud2'
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_group_s5_1', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    }

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            scale: 3,
            opacity: 1,
            x: '-310%',
            y: '305%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            scale: 1,
            opacity: 0,
            x: '50%',
            y: '-50%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
