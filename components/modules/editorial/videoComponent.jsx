import Image from 'next/image'
import FancyLink from '../../utils/fancyLink'

const VideoComponent = ({ dark = true, setVideo, video }) => {
  return (
    <FancyLink
      onClick={() => setVideo(true)}
      className={`group relative w-full`}
    >
      {!video && (
        <div
          className={`w-full h-full absolute top-0 left-0 z-10 transition-all duration-300 pointer-events-none ${
            dark ? 'bg-black  opacity-25' : 'bg-white opacity-25'
          } group-hover:opacity-40`}
        />
      )}
      <div
        className={`relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1`}
      >
        <iframe
          src={'https://www.youtube.com/embed/4YgOPaR9wUs?&autoplay=1'}
          id="videos"
          width="100%"
          height="100%"
        ></iframe>
        <div
          className={`absolute w-full h-full z-2 ${
            video ? 'pointer-events-none' : ''
          }`}
        >
          <Image
            src={`/placeholder/locavore-rintik-crop-18.jpg`}
            alt={'Locavore'}
            className={`${video ? 'inActive' : ''}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      {!video && (
        <div className="absolute top-0 left-0 z-20 h-full w-full setflex-center">
          <div
            className={`px-10 py-7 border rounded-50% text-white transition-all duration-300 ${
              dark
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
