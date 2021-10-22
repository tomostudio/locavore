import Image from 'next/image'

const familyImage = ({
  title,
  name,
  position,
  background = false,
  bgColor,
  dataImage,
  src,
  alt,
}) => {
  return (
    <div data-image={dataImage}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      {background && bgColor && (
        <div
          className="absolute w-full h-full top-0 left-0 opacity-0 bg-opacity-75 flex flex-col items-center justify-between py-4"
          style={{ backgroundColor: bgColor }}
        >
          <span className="font-serif font-semibold">{name}</span>
          <span className="font-bold text-lg text-center">{title}</span>
          <span className="font-serif font-semibold">{position}</span>
        </div>
      )}
    </div>
  )
}

export default familyImage
