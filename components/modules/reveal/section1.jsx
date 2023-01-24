import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';

export const Section1ComponentFixedFront = () => {
  return (
    <div id='section1_fixed_front'>
      <div id='s1_exit_group_front'>
        <div
          id='s1_title'
          className=' pointer-events-none font-funkturm fixed w-full h-full flex opacity-0 justify-center items-center text-center leading-none text-white text-9xl'
        >
          WE HAD
          <br />A DREAM
        </div>
      </div>
      <div
        id='eyes'
        className='opacity-0 h-24 w-[50vh] bg-slate-900 fixed z-50 bottom-[15vh] left-1/2 translate-x-[-50%] translate-y-[200px] will-change-auto'
      />
    </div>
  );
};

export const Section1ComponentFixedBack = () => {
  return (
    <div id='section1_fixed_back'>
      <div id='s1_exit_group_back'>
        <div
          id='head'
          className='opacity-0 h-72 w-72 bg-slate-900 fixed z-5 top-1/2 translate-y-[-70%] right-[50%] translate-x-[180%] will-change-auto'
        />
      </div>
      <div
        id='dream'
        className='w-96 h-72 bg-slate-900 fixed top-1/2 z-10 translate-y-[-50%] translate-x-[-25vw]'
      />
    </div>
  );
};

const Section1MarkerTop = ({ setCurrentSection, setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      // setCurrentSection(1);
      setCaption(1);
      setBgColor('#BFC29D');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        // setCurrentSection(1);
        setCaption(1);
        setBgColor('#BFC29D');
      } else if (scrollDirection.vertical === 'down') {
        // PREVIOUS
        // setCurrentSection(0);
        setCaption(0);
        setBgColor('#BFC29D');
      }
    },
  });

  return <div className='w-full h-2 bg-blue-600' ref={observe} />;
};

const Section1MarkerBottom = ({
  setCurrentSection,
  setBgColor,
  setCaption,
}) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      // setCurrentSection(1);
      setCaption(1);
      setBgColor('#BFC29D');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 1
        // setCurrentSection(1);
        setCaption(1);
        setBgColor('#BFC29D');
      }
    },
  });

  return <div className='w-full h-2 bg-blue-600' ref={observe} />;
};

export const Section1ComponentInner = ({
  setCurrentSection,
  setBgColor,
  setCaption,
}) => {
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
          className='h-[100vh] __b bg-green-600 bg-opacity-50'
        />
        {/* EYES */}
        <div
          id='enter-eyes'
          className='h-[100vh] __b bg-green-600 bg-opacity-50'
        />
        <Section1MarkerTop
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        {/* <div
          id='captionmarker_top'
          className='w-full h-2 bg-purple-600'
          data-scroll
          data-scroll-call='section1-top'
          data-scroll-repeat
        /> */}
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        {/* HEAD APPEAR */}
        <div
          id='head-trigger'
          className='h-[50vh] __b bg-green-600 bg-opacity-50 mt-24'
        />
        {/* DREAM LEFT TO RIGHT */}
        <div
          id='dream-trigger'
          className='h-[100vh] __b bg-green-600 bg-opacity-50'
        />
        {/* WISH NORMAL*/}
        <div id='wish' className='w-full mx-auto max-w-screen-lg mb-40'>
          <div className=' w-96 h-30rem bg-slate-900' />
        </div>
        {/* EYES EXIT*/}
        <div id='exit-eyes' className='h-[50vh] __b bg-red-600 bg-opacity-50' />
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        {/* <div
          id='captionmarker_bottom'
          className='w-full h-2 bg-purple-600'
          data-scroll
          data-scroll-call='section1-bottom'
          data-scroll-repeat
        /> */}
        {/* // ALTERNATIVE CAPTION TRIGGER */}
        <Section1MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
          setCaption={setCaption}
        />
        <div id='exit-all' className='h-[50vh] __b bg-red-600 bg-opacity-50' />
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
    const elem = '#s1_title';
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
    const id = 'eyes-enter'; // animation id
    const elem = '#eyes';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter-eyes', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 125%',
        end: 'bottom 125%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
            y: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // HEAD
  () => {
    const id = 'head'; // animation id
    const elem = '#head';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#head-trigger', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
            ease: 'none',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // DREAM
  () => {
    const id = 'dream-horizontal'; // animation id
    const elem = '#dream';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#dream-trigger', // which section will be tracked as the scroll trigger
        scroller: '#scroll-container', // id of scroll container
        scrub: true,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
            x: '100vw',
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
    const id = 'eyes-exit'; // animation id
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
  // EXIT GROUPED
  () => {
    const id = 'title-exit-front'; // animation id
    const elem = '#s1_exit_group_front';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-all', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            ease: 'none',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // EXIT GROUPED
  () => {
    const id = 'title-exit-back'; // animation id
    const elem = '#s1_exit_group_back';
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#exit-all', // which section will be tracked as the scroll trigger
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
            ease: 'none',
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
            ease: 'none',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
