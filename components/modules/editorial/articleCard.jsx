import Image from 'next/legacy/image'

const ArticleCard = ({
  className = '',
  title,
  category,
  timeRead,
  src,
  alt,
  bgColor = '#ffffff',
  border,
  blursrc = '',
}) => {
  return (
    <div
      className={`article-card relative rounded-xl w-full p-5 max-md:p-4 flex flex-col transition-all hover:shadow-lg hover:-translate-y-2 duration-300 ${className}`}
      style={{
        background: bgColor,
        border: border ? 'solid 1px' : 'none',
        borderColor: border ? '#000' : 'transparent',
      }}
    >
      <h3 className="text-3xl m-0 p-0 whitespace-normal max-md:text-2xl">
        {title}
      </h3>
      <div className="pb-2 mt-5 max-md:mt-4 w-full flex justify-between items-end border-b border-black text-sm max-md:text-xs">
        <span className="translate-y-[1px] max-md:translate-y-0">
          {category}
        </span>
        <span className="font-serif italic text-base max-md:text-sm leading-none max-md:translate-y-[2px]">
          {timeRead}
        </span>
      </div>
      <div
        className="relative mt-5 max-md:mt-4 w-full h-full rounded-xl"
        style={{
          backgroundColor: `rgba(208,208,208, 1)`,
        }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            className="rounded-lg overflow-hidden"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blursrc !== '' ? blursrc : `${src}?blur=50`}
            objectPosition="center"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default ArticleCard
