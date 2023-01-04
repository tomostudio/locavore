import getYoutube from '@/components/utils/getYoutube';
import urlFor from '@/helpers/sanity/urlFor';
import Image from 'next/legacy/image';
import { useState } from 'react';
import FancyLink from '../../utils/fancyLink';
import Caption from './caption';

const VideoComponent = ({ className = '', video, color, gallery = false }) => {
  const [statusVideo, setStatusVideo] = useState(false);

  return (
    <div
      className={`video relative mx-auto ${
        !gallery
          ? `${
              video.option === 'normal'
                ? 'w-content max-md:w-full px-14 max-w-800px'
                : video.option === 'medium' && 'w-full max-w-800px'
            }`
          : ''
      } ${className}`}
    >
      <FancyLink
        onClick={() => setStatusVideo(true)}
        className={`group block relative w-full mx-auto ${
          !gallery
            ? `${
                video.option === 'normal'
                  ? 'w-content max-md:w-full px-14 max-w-800px'
                  : video.option === 'medium' && 'w-full max-w-800px'
              }`
            : ''
        }`}
      >
        {!statusVideo && (
          <div
            className={`w-full h-full absolute top-0 left-0 z-10 transition-all duration-300 pointer-events-non opacity-25 group-hover:opacity-40 ${
              video.dark ? 'bg-black' : 'bg-white'
            }`}
          />
        )}
        <div
          className={`relative w-full h-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1`}
          style={{
            backgroundColor: `rgba(208,208,208, 1)`,
          }}
        >
          <>
            <iframe
              src={'https://www.youtube.com/embed/' + getYoutube(video.link)}
              id="videos"
              width="100%"
              height="100%"
            />
            {video.thumbnail && video.thumbnail.asset ? (
              <div
                className={`absolute w-full h-full z-2 ${
                  statusVideo ? 'pointer-events-none' : ''
                }`}
              >
                <Image
                  src={urlFor(video.thumbnail)
                    .width(1500)
                    .format('webp')
                    .url()}
                  alt={video.thumbnail.name}
                  className={`${statusVideo ? 'inActive' : ''}`}
                  loading='eager'
                  priority={true}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  placeholder='blur'
                  blurDataURL={urlFor(video.thumbnail)
                    .blur(2)
                    .format('webp')
                    .width(500)
                    .url()}
                />
              </div>
            ) : (
              <div
                className={`w-full h-full pointer-events-none ${
                  statusVideo ? 'inActive' : ''
                }`}
                style={{
                  backgroundColor: `rgba(208,208,208, 1)`,
                }}
              ></div>
            )}
          </>
        </div>
        {!statusVideo && (
          <div className='absolute top-0 left-0 z-20 h-full w-full setflex-center'>
            <div
              className={`px-10 py-7 rounded-50% transition-all duration-300 ${
                !video.dark
                  ? 'bg-white text-black group-hover:text-white group-hover:bg-black'
                  : 'bg-black text-white group-hover:text-black group-hover:bg-white'
              }`}
            >
              WATCH
            </div>
          </div>
        )}
      </FancyLink>
      {video.caption && (
        <div
          className={`${
            video.option ? 'w-content max-md:w-full' : 'w-full'
          } caption mx-auto max-md:px-4`}
        >
          <Caption caption={video.caption} color={color} />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;