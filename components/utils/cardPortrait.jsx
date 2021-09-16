import Image from 'next/image'

const CardPortrait = ({ className, title, category, timeRead, src, alt }) => {
  return (
    <div className={`h-full rounded-2xl p-6 flex flex-col ${className}`}>
      <h3 className="text-2xl m-0 p-0">{title}</h3>
      <div className="pb-3 mt-3 w-full flex justify-between border-b border-black text-xs">
        <span>{category}</span>
        <span className="font-subtitle italic font-bold">{timeRead}</span>
      </div>
      <div className="relative mt-6 w-full h-full">
        <Image
          src={src}
          alt={alt}
          className="rounded-xl"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}

export default CardPortrait
