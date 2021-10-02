import React from 'react';
import Image from 'next/image';
import FancyLink from '@/components/utils/fancyLink';
import { useMediaQuery } from '@/helpers/functional/checkMedia';

export default function EditorialIssueCard({
  issueNo,
  title,
  date,
  totalArticles,
  descriptions,
  destination,
  imageThumbnail,
}) {
  return (
    <FancyLink
      destination={destination}
      className='group relative w-full h-30rem bg-lightGray even:bg-lighterGray rounded-2xl px-5 pb-5 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 duration-300'
    >
      <div className='text-center w-full py-3'>
        <span>ISSUE {issueNo}</span>
      </div>
      <div className='relative w-full h-full rounded-2xl'>
        <div className='absolute w-full h-full top-0 left-0 rounded-2xl'>
          <div className='imageCover bg-black w-full h-full absolute top-0 left-0 z-10 transition-all duration-300 opacity-40 group-hover:opacity-50' />
          <Image
            src={imageThumbnail}
            alt={'Locavore'}
            className='rounded-2xl'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='relative z-10 w-full h-full flex flex-col justify-between text-white p-8'>
          {useMediaQuery('(max-width: 768px)') && (
            <div className='w-full flex justify-between text-xs'>
              <span>{date}</span>
              <span>{totalArticles} ARTICLES</span>
            </div>
          )}
          <h1 className='font-sans font-normal break-all'>{title}</h1>
          <div className='w-full flex justify-between max-md:justify-center'>
            {!useMediaQuery('(max-width: 768px)') && (
              <div className='w-full flex flex-col max-md:hidden'>
                <div className='w-96'>{descriptions}</div>
                <div className='flex space-x-16 border-t border-white w-full pt-6 mt-6 text-xs'>
                  <span>MARCH 2021</span>
                  <span>15 ARTICLES</span>
                </div>
              </div>
            )}
            <div className='flex w-96 max-md:w-auto items-end justify-end'>
              <div className='px-10 py-7 border border-white rounded-50% text-white'>
                READ ISSUE
              </div>
            </div>
          </div>
        </div>
      </div>
    </FancyLink>
  );
}
