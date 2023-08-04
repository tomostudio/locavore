import React from 'react';
import 'intersection-observer'; // optional polyfill
import Image from 'next/legacy/image';
import Container from '../../container';
import FancyLink from '@/components/utils/fancyLink';
import urlFor from '@/helpers/sanity/urlFor';

export const Section2Option3ComponentInner = ({ menuSectionOption3 }) => {
  return (
    <section className='relative w-full'>
      <div className='sticky top-0 w-full h-screen flex flex-col z-10'>
        <Container className='relative w-full h-full grow setflex-center'>
          <div
            id='section2_content'
            className='relative z-10 w-full h-full opacity-0'
          >
            <div className='relative w-full h-full setflex-center '>
              <div className='relative w-full setflex-center'>
                <span className='text-[1.125rem] md:text-[1.875rem] text-[#BEC29D]'>
                  {menuSectionOption3.menuTitle}
                </span>
                <p className='text-m-additionalTitle uppercase sm:text-[4rem] md:text-[5rem] lg:text-d-additionalTitle text-[#BEC29D] font-funkturm leading-[100%] tracking-[0.03em] my-8 max-w-md md:max-w-none text-center'>
                  {menuSectionOption3.heading}
                </p>
              </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end'>
              <FancyLink
                className={`w-fit py-4 px-6 mb-20 lg:mb-[4.5rem] uppercase text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                destination='/nxt/menu'
              >
                {menuSectionOption3.button}
              </FancyLink>
            </div>
          </div>
        </Container>
      </div>
      {/* Buffer */}
      <div className='relative h-screen flex justify-center items-center flex-col'>
        <div className=' w-full mx-auto max-w-screen-lg px-8 z-1 pointer-events-none '>
          <div className='relative w-[40vw] md:w-[25vw] max-w-[500px] h-25vh'>
            <Image
              src={urlFor(menuSectionOption3.imageOption3.imageLeft).width(798).url()}
              alt={menuSectionOption3.imageOption3.imageLeft.alt}
              layout='fill'
              objectFit='contain'
              placeholder='blur'
              blurDataURL={urlFor(menuSectionOption3.imageOption3.imageLeft)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
            />
          </div>
        </div>
        <div className='relative w-[40vw] md:w-[25vw] max-w-[500px] h-[10vh] md:h-20vh max-h-[150px]' />
        {/* Buffer */}
        <div className=' w-full mx-auto max-w-screen-lg px-8 flex justify-end z-20 pointer-events-none'>
          <div className='relative w-[40vw] md:w-[25vw] max-w-[500px] h-25vh'>
            <Image
              src={urlFor(menuSectionOption3.imageOption3.imageRight).width(798).url()}
              alt={menuSectionOption3.imageOption3.imageRight.alt}
              layout='fill'
              objectFit='contain'
              placeholder='blur'
              blurDataURL={urlFor(menuSectionOption3.imageOption3.imageRight)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Section2Option3AnimationOBJMobile = [];

export const Section2Option3AnimationOBJ = [
  // SECTION 2
  // CONTENT ENTER
  () => {
    const id = 'section2-content-enter-option3'; // animation id
    const elem = document.querySelector('#section2_content');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#section2_content'), // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 80%',
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
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
