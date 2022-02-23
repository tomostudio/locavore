import React from 'react';
import FancyLink from '../../utils/fancyLink';
import Marquee from 'react-fast-marquee';
import ArticleCard from './articleCard';

export default function NextArticle({
  className = '',
  articleTitle = 'Next Article',
  destination = '/',
  title,
  category,
  timeRead,
  bgColor,
  border,
  blursrc = '',
  thumbnail = '',
  alt,
}) {
  return (
    <section className={`w-full h-full pb-20 ${className}`}>
      <div className='w-full setflex-center mt-14 space-y-14'>
        <div className='h-40 setflex-center w-full'>
          <hr className='bg-black border border-black h-full w-px' />
        </div>
        <div className='relative w-full  setflex-center'>
          <FancyLink destination={destination} className={`group`}>
            <ArticleCard
              className='rotate-6 group-hover:-rotate-2 group-hover:-translate-y-2'
              title={title}
              border={border}
              bgColor={bgColor}
              category={category}
              timeRead={timeRead}
              src={thumbnail}
              blursrc={blursrc}
              alt={alt}
            />
          </FancyLink>
          <div className='absolute top-0 left-0 h-full w-full setflex-center z-min1'>
            <Marquee gradient={false}>
              <h1 className='font-sans font-normal h-28'>
                {`${articleTitle} • ${articleTitle} • ${articleTitle} • `}
              </h1>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
