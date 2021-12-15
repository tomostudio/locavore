import getYoutube from '@/components/utils/getYoutube'
import urlFor from '@/helpers/sanity/urlFor'
import Image from 'next/image'
import FancyLink from '../../utils/fancyLink'

const VideoComponent = ({ setStatusVideo, statusVideo, video }) => {
  return (
    <FancyLink
      onClick={() => setStatusVideo(true)}
      className={`group relative w-full`}
    >
      {!statusVideo && (
        <div
          className={`w-full h-full absolute top-0 left-0 z-10 transition-all duration-300 pointer-events-none ${
            video.dark ? 'bg-black  opacity-25' : 'bg-white opacity-25'
          } group-hover:opacity-40`}
        />
      )}
      <div
        className={`relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1`}
      >
        <iframe
          src={
            'https://www.youtube.com/embed/' +
            getYoutube(video.link) +
            '?&autoplay=1'
          }
          id="videos"
          width="100%"
          height="100%"
        ></iframe>
        <div
          className={`absolute w-full h-full z-2 ${
            statusVideo ? 'pointer-events-none' : ''
          }`}
        >
          <Image
            src={urlFor(video.thumbnail).url()}
            alt={video.thumbnail.name}
            className={`${statusVideo ? 'inActive' : ''}`}
            loading="eager"
            priority={true}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      {!statusVideo && (
        <div className="absolute top-0 left-0 z-20 h-full w-full setflex-center">
          <div
            className={`px-10 py-7 border rounded-50% text-white transition-all duration-300 ${
              video.dark
                ? 'border-white text-white group-hover:text-black group-hover:bg-white'
                : 'border-black text-black group-hover:text-white group-hover:bg-black'
            }`}
          >
            WATCH
          </div>
        </div>
      )}
    </FancyLink>
  )
}

export default VideoComponent
