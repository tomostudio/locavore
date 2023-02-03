import React from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';

export const Section8ComponentFixedFront = () => {
  return (
    <>
      <div id='section8_fixed_front'></div>
    </>
  );
};
export const Section8ComponentFixedBack = () => {
  return (
    <>
      <div id='section8_fixed_back'></div>
    </>
  );
};

const Section8MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(8);
      setBgColor(8);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      // console.log('leave', scrollDirection.vertical, entry);
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(8);
        setBgColor(8);
      }
    },
  });

  return <div className='w-full h-2 bg-purple-600' ref={observe} />;
};

export const Section8ComponentInner = ({ setBgColor, setCaption }) => {
  return (
    <>
      {/* Section 2 */}
      <section
        id='trigger2'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center '
        data-scroll-section
      >
        <Section8MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div
          id='video-enter'
          className='h-[100vh] w-full bg-blue-600 bg-opacity-50 mt-24'
        />
        <div className='w-full min-h-[200vh] '>
          <div className='h-screen bg-slate-400 bg-opacity-20 w-full class sticky top-0 flex justify-center items-center'>
            {/* CONTENT */}
            <div className='frame __b w-full max-w-screen-lg h-full flex justify-center items-center'>
              New Locavore
            </div>
          </div>
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
          <div
            id='trigger'
            className='h-[50vh] w-full bg-green-600 bg-opacity-50 mt-24'
          />
        </div>
      </section>
    </>
  );
};

export const Section8AnimationOBJ = [];
