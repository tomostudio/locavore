import FancyLink from '@/components/utils/fancyLink'
import Image from 'next/image'

const EventCard = ({
  date,
  image,
  image_bnw,
  title,
  description,
  widthNormal = false,
}) => {
  return (
    <FancyLink
      destination="/nxt/events-programs/detail"
      className={`group hover:border-[#BEC29D] hover:text-black hover:bg-[#BEC29D] ${
        widthNormal
          ? 'sm:w-[calc(100%/2)] md:w-[calc(100%/3)]'
          : 'sm:w-[calc((100%/2)-1rem)] md:w-[calc((100%/3)-1.35rem)]'
      } pointer-events-auto cursor-pointer transition-all duration-300 border-2 border-white rounded-xl flex flex-col p-8 text-white`}
    >
      <span className="text-[1.125rem] md:text-d-body">{date}</span>
      <div className="event-image relative w-full aspect-[1/1] my-5 border-2 group-hover:border-[#BEC29D] border-white">
        <Image src={image_bnw} className="group-hover:hidden" />
        <Image src={image} className="hidden group-hover:block" />
      </div>
      <span className="font-bold text-d-body sm:text-m-title md:text-m-subheading">
        {title}
      </span>
      <p className="text-sm mt-1">{description}</p>
    </FancyLink>
  )
}

export default EventCard
