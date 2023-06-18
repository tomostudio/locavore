import Image from 'next/image'
import HeaderGap from '../headerGap'

const HeroComponent = ({ imageDesktop, imageMobile, title }) => {
  return (
    <div className="relative w-full h-[350px] flex flex-col">
      <Image
        src={imageDesktop}
        alt=""
        fill
        className="object-cover hidden md:block"
      />
      <Image src={imageMobile} alt="" fill className="object-cover md:hidden" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
      <HeaderGap />
      <div className="w-full flex grow-1 items-center md:items-end justify-center">
        <h1 className="relative text-m-header sm:text-t-header md:text-d-header text-[#BEC29D] font-funkturm md:mb-14 max-w-xs md:max-w-none text-center">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default HeroComponent
