import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';


export const Section2ComponentFixedFront = () => {
  return (
    <>
      <div id='section2_fixed_front'></div>
    </>
  );
};

export const Section2ComponentFixedBack = () => {
  return (
    <>
      <div id='section2_fixed_back'></div>
    </>
  );
};

const Section2MarkerTop = ({ setCurrentSection, setBgColor }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCurrentSection(2);
      setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCurrentSection(2);
        setBgColor('#B1BA96');
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

const Section2MarkerBottom = ({ setCurrentSection, setBgColor }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCurrentSection(2);
      setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 2
        setCurrentSection(2);
        setBgColor('#B1BA96');
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
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

export const Section2AnimationOBJ = [];
