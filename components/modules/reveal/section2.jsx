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

const Section2MarkerTop = ({ setCaption, setBgColor }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(2);
      setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(2);
        setBgColor('#B1BA96');
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

const Section2MarkerBottom = ({ setCaption, setBgColor }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(2);
      setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 2
        setCaption(2);
        setBgColor('#B1BA96');
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

export const Section2ComponentInner = ({ setCaption, setBgColor }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger2'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        <Section2MarkerTop
          setCaption={setCaption}
          setBgColor={setBgColor}
        />
        <div className='h-[200vh] flex justify-center flex-col'>SECTION 2</div>
        <Section2MarkerBottom
          setCaption={setCaption}
          setBgColor={setBgColor}
        />
      </section>
    </>
  );
};

export const Section2AnimationOBJ = [];
