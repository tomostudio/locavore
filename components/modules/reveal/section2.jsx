import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';

export const Section2ComponentFixed = () => {
  return (
    <>
      <div id='section2_fixed'></div>
    </>
  );
};

const Section2MarkerTop = ({ setCurrentSection, setBgColor }) => {
  const { observe } = useInView({
    threshold: 0, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCurrentSection(2);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // RETURN TO SECTION
        setCurrentSection(2);
      }
    },
  });

  return <div className='w-full h-2 bg-blue-600' ref={observe} />;
};

const Section2MarkerBottom = ({ setCurrentSection, setBgColor }) => {
  const { observe } = useInView({
    threshold: 0, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCurrentSection(2);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION
        setCurrentSection(2);
      }
    },
  });

  return <div className='w-full h-2 bg-blue-600' ref={observe} />;
};

export const Section2ComponentInner = ({ setCurrentSection, setBgColor }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger2'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        <Section2MarkerTop
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
        />
        <div className='h-[200vh] flex justify-center flex-col'>SECTION 2</div>
        <Section2MarkerBottom
          setCurrentSection={setCurrentSection}
          setBgColor={setBgColor}
        />
      </section>
    </>
  );
};

export const Section2AnimationOBJ = [
  // SECTION 2
  // TITLE ENTER
  // () => {
  //   // WE HAVE A DREAM COMING IN
  //   const id = 'wehaveadream-enter'; // animation id
  //   const elem = '#section1_fixed #whd_title';
  //   const settings = {
  //     scrollTrigger: {
  //       id: id,
  //       trigger: '#enter-dream', // which section will be tracked as the scroll trigger
  //       scroller: '#scroll-container', // id of scroll container
  //       scrub: true,
  //       start: 'top 100%',
  //       end: 'bottom 100%',
  //     },
  //   };
  //   // Input Animation
  //   const animation = [
  //     {
  //       set: [
  //         elem,
  //         {
  //           opacity: 0,
  //           scale: 5,
  //         },
  //       ],
  //     },
  //     {
  //       to: [
  //         elem,
  //         {
  //           opacity: 1,
  //           scale: 1,
  //         },
  //       ],
  //     },
  //   ];
  //   return { id, elem, settings, animation };
  // },
];
