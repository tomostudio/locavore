import Image from 'next/legacy/image'
import HeaderGap from '../headerGap'
import urlFor from '@/helpers/sanity/urlFor'
import { Parallax } from 'react-scroll-parallax'

const HeroComponent = ({ imageDesktop, imageMobile, title }) => {
  return (
    <div className="relative w-full aspect-[15/14] sm:aspect-[144/35] flex flex-col">
      <Parallax speed={10} className="absolute top-0 left-0 w-full h-full hidden sm:block z-10">
        <Image
          src={urlFor(imageDesktop).width(1140).url()}
          alt={imageDesktop.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(imageDesktop)
            .blur(2)
            .format('webp')
            .width(100)
            .url()}
        />
      </Parallax>
      <Parallax speed={10} className="absolute top-0 left-0 w-full h-full sm:hidden">
        <Image
          src={urlFor(imageMobile).width(375).url()}
          alt={imageMobile.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(imageMobile)
            .blur(2)
            .format('webp')
            .width(100)
            .url()}
        />
      </Parallax>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10" />
      <HeaderGap />
      <div className="w-full flex grow-1 items-center sm:items-end justify-center z-20">
        <h1 className="relative text-m-header sm:text-t-header md:text-d-header text-[#BEC29D] font-funkturm sm:mb-10 md:mb-14 max-w-xs sm:max-w-none text-center">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default HeroComponent
