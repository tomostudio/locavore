import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';

export const Section1ComponentFixed = () => {
  return (
    <div id='section1_fixed'>
      <div
        id='whd_title'
        className=' pointer-events-none font-funkturm absolute w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl'
      >
        WE HAD
        <br />A DREAM
      </div>
      <div
        id='eyes'
        className='opacity-0 h-24 w-[50vh] bg-slate-900 fixed bottom-[15vh] left-1/2 translate-x-[-50%]'
      />
      <div
        id='dream'
        className='opacity-0 h-24 w-[50vh] bg-slate-900 fixed bottom-[15vh] left-1/2 translate-x-[-50%]'
      />
    </div>
  );
};

const Section1MarkerTop = ({ setCurrentSection, setBgColor }) => {
  const { observe } = useInView({
    threshold: 0, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCurrentSection(1);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCurrentSection(1);
      } else if (scrollDirection.vertical === 'down') {
        // PREVIOUS
        setCurrentSection(0);
      }
    },
  });

  return <div className='w-full h-2 bg-blue-600' ref={observe} />;
};

const Section1MarkerBottom = ({ setCurrentSection, setBgColor }) => {
  const { observe } = useInView({
    threshold: 0, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCurrentSection(1);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 1
        setCurrentSection(1);
      }
    },
  });

  return <div className='w-full h-2 bg-blue-600' ref={observe} />;
};

export const Section1ComponentInner = ({ setCurrentSection, setBgColor }) => {
  return (
    <>
      <section
        id='trigger1'
        className='trigger relative w-full min-h-[110vh] text-4xl flex flex-col justify-center __b '
        data-scroll-section
      >
        {/* WE HAD A DREAM */}
        <div
          id='enter-dream'
          className='h-[50vh] __b bg-green-600 bg-opacity-50'
        />
        <Section1MarkerTop
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
        />
        {/* EYES */}
        <div
          id='enter-eyes'
          className='h-[50vh] __b bg-green-600 bg-opacity-50 -mt-24'
        />
        {/* HEAD APPEAR */}
        <div
          id='head'
          className='h-[50vh] __b bg-green-600 bg-opacity-50 -mt-24'
        />
        {/* DREAM LEFT TO RIGHT */}
        <div
          id='dream'
          className='h-[50vh] __b bg-green-600 bg-opacity-50 -mt-24'
        />
        {/* WISH NORMAL*/}
        <div
          id='wish'
          className='h-[50vh] __b bg-green-600 bg-opacity-50 -mt-24'
        />

        <div className='buffer h-[50vh] __b bg-yellow-600 bg-opacity-50' />
        {/* EYES EXIT*/}
        <div id='exit-eyes' className='h-[50vh] __b bg-red-600 bg-opacity-50' />
        <div id='exit-all' className='h-[50vh] __b bg-red-600 bg-opacity-50' />
        <Section1MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
        />
      </section>
    </>
  );
};

export const Section1AnimationOBJ = [
  // SECTION 1
  // TITLE ENTER
  () => {
    // WE HAVE A DREAM COMING IN
    const id = 'wehaveadream-enter'; // animation id
    const elem = '#section1_fixed #whd_title';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-dream', // which section will be tracked as the scroll trigger
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
  // EYES ENTER
  () => {
    // WE HAVE A DREAM COMING IN
    const id = 'eyes-enter'; // animation id
    const elem = '#eyes';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-eyes', // which section will be tracked as the scroll trigger
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
            y: 200,
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            y: 100,
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            y: 0,
            ease: 'none',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // EYES EXIT
  () => {
    // WE HAVE A DREAM COMING IN
    const id = 'eyes-enter'; // animation id
    const elem = '#eyes';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-eyes', // which section will be tracked as the scroll trigger
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
            opacity: 1,
            y: 0,
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
            y: 100,
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            y: 200,
            ease: 'none',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
