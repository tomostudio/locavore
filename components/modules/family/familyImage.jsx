import { useRef } from 'react';
import Image from 'next/image';
import FancyLink from '@/components/utils/fancyLink';
import urlFor from '@/helpers/sanity/urlFor';

const familyImage = ({ store, src, alt, position = '', name = '' }) => {
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
      data-store={store.slug.current}
      destination={`/family/${store.slug.current}`}
      className='family-card'
      ref={familyRef}
      onMouseEnter={(e) => {
        familyRef.current.classList.add('show');
      }}
      onMouseLeave={(e) => {
        familyRef.current.classList.remove('show');
      }}
      style={{
        backgroundColor: `rgba(${hexToRgb(
          store.bgColor.hex ? store.bgColor.hex : '#D0D0D0'
        )}, 1)`,
      }}
    >
      <Image
        src={urlFor(src).width(750).url()}
        alt={alt}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
        placeholder="blur"
        blurDataURL={urlFor(src).blur(2).format('webp').saturation(-100).width(100).url()}
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
          {store.title}
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
            backgroundColor: `rgba(${hexToRgb(
              store.bgColor.hex ? store.bgColor.hex : '#FFFFFF'
            )}, .9)`,
          }}
        />
      </div>
    </FancyLink>
  );
};

export default familyImage;
