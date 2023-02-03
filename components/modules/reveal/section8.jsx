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
      <div id='section8_fixed_back' />
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
        >
          VIDEO ENTER
        </div>
        <div className='w-full min-h-[200vh] '>
          <div className='h-screen bg-slate-400 bg-opacity-20 w-full sticky top-0 flex justify-center items-center'>
            {/* ANIMATION CONTENT STICKY */}
            <div className='frame __b w-full h-full relative'>
              <div className='absolute w-full h-full z-5 top-0 left-0 text-red-400  __b'>
                <div className='max-w-screen-lg w-full h-full flex justify-center items-center __b mx-auto'>
                  FRONT CONTENT
                </div>
              </div>
              <div className='absolute w-full h-full z-1 top-0 left-0 flex justify-center items-center text-blue-500   __b'>
                BACK CONTENT
              </div>
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
