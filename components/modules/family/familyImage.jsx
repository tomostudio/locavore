import { useRef } from 'react';
import Image from 'next/image';
import FancyLink from '@/components/utils/fancyLink';

const familyImage = ({ store, src, alt, position = '', name = '' }) => {
  const { slug, title, colour = '#FFFFFF' } = store;

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : null;
  }

  const familyRef = useRef(null);

  return (
    <FancyLink
      data-store={slug}
      destination={`/family/${slug}`}
      className='family-card'
      ref={familyRef}
      onMouseEnter={(e) => {
        familyRef.current.classList.add('show');
      }}
      onMouseLeave={(e) => {
        familyRef.current.classList.remove('show');
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout='fill'
        loading="eager"
        priority={true}
        objectFit='cover'
        objectPosition='top'
      />
      <div className='absolute w-full h-full top-0 left-0 flex flex-col items-center  text-center justify-center p-4 z-1'>
        {position !== '' && name !== '' ? (
          <span className='relative z-1 mb-auto font-serif text-sm font-bold'>
            {name}
          </span>
        ) : (
          ''
        )}
        <span className='font-bold text-lg leading-none text-center relative z-2'>
          {title}
        </span>
        {position !== '' && name !== '' ? (
          <span className='relative z-1 mt-auto font-serif text-sm '>
            {position}
          </span>
        ) : (
          ''
        )}
        <div
          className='absolute w-full h-full top-0 left-0 z-0 '
          style={{
            backgroundColor: `rgba(${hexToRgb(colour)}, .9)`,
          }}
        />
      </div>
    </FancyLink>
  );
};

export default familyImage;
