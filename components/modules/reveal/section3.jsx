import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';

export const Section3ComponentFixedFront = () => {
  return (
    <>
      <div id='section3_fixed_front'></div>
    </>
  );
};
export const Section3ComponentFixedBack = () => {
  return (
    <>
      <div id='section3_fixed_back'></div>
    </>
  );
};

const Section3MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(3);
      setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(3);
        setBgColor('#B1BA96');
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

const Section3MarkerBottom = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(3);
      setBgColor('#B1BA96');
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
      } else if (scrollDirection.vertical === 'down') {
        // RETURN TO SECTION 3
        setCaption(3);
        setBgColor('#B1BA96');
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

export const Section3ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger2'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        <Section3MarkerTop
          setCaption={setCaption}
          setBgColor={setBgColor}
        />
        <div className='h-[200vh] flex justify-center flex-col'>SECTION 3</div>
        <Section3MarkerBottom
          setCaption={setCaption}
          setBgColor={setBgColor}
        />
      </section>
    </>
  );
};

export const Section3AnimationOBJ = [];
