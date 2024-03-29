import FancyLink from '@/components/utils/fancyLink'
import dateConvert from '@/helpers/functional/dateConvert'
import urlFor from '@/helpers/sanity/urlFor'
import Image from 'next/legacy/image'

const EventCard = ({
  slug,
  date,
  image,
  image_bnw,
  title,
  description,
  widthNormal = false,
}) => {
  return (
    <FancyLink
      destination={`/nxt/events-programs/${slug}`}
      className={`group hover:border-[#BEC29D] max-w-sm hover:text-black hover:bg-[#BEC29D] w-full pointer-events-auto cursor-pointer transition-all duration-300 border border-white rounded-xl flex flex-col p-8 text-white`}
    >
      <span className="text-[1.125rem] md:text-d-body uppercase">{dateConvert(date)}</span>
      <div className="event-image relative w-full aspect-[1/1] mt-3 mb-4 border group-hover:border-[#BEC29D] border-white transition-all duration-300">
        <Image
          src={urlFor(image_bnw).width(500).url()}
          alt={image_bnw.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(image_bnw)
            .blur(2)
            .format('webp')
            .width(100)
            .url()}
          className="group-hover:opacity-0"
        />
        <Image
          src={urlFor(image).width(500).url()}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(image).blur(2).format('webp').width(100).url()}
          className="opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="w-full flex items-center grow">
        <span className="font-bold text-d-body sm:text-m-title md:text-m-subheading line-clamp-2 leading-[32px]">
          {title}
        </span>
      </div>
      <p className="text-sm mt-1">{description}</p>
    </FancyLink>
  )
}

export default EventCard
