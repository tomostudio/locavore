import FancyLink from '@/components/utils/fancyLink'
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
      className={`group hover:border-[#BEC29D] hover:text-black hover:bg-[#BEC29D] ${
        widthNormal
          ? 'w-full sm:w-[calc((100%/2)-1rem)] md:w-[calc(100%/3)]'
          : 'sm:w-[calc((100%/2)-1rem)] md:w-[calc((100%/3)-1.35rem)]'
      } pointer-events-auto cursor-pointer transition-all duration-300 border-2 border-white rounded-xl flex flex-col p-8 text-white`}
    >
      <span className="text-[1.125rem] md:text-d-body">{date}</span>
      <div className="event-image relative w-full aspect-[1/1] my-5 border-2 group-hover:border-[#BEC29D] border-white">
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
      <span className="font-bold text-d-body sm:text-m-title md:text-m-subheading">
        {title}
      </span>
      <p className="text-sm mt-1">{description}</p>
    </FancyLink>
  )
}

export default EventCard
