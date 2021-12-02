import Image from 'next/image';

const ArticleCard = ({
  className = '',
  title,
  category,
  timeRead,
  src,
  alt,
  bgColor = '#ffffff',
  border,
}) => {
  return (
    <div
      className={`article-card relative rounded-xl w-full p-5 flex flex-col transition-all hover:shadow-lg hover:-translate-y-2 duration-300 ${className}`}
      style={{
        background: bgColor,
        border: border ? 'solid 1px' : 'none',
        borderColor: border ? '#000' : 'transparent',
      }}
    >
      <h3 className='text-3xl m-0 p-0'>{title}</h3>
      <div className='pb-2 mt-5 w-full flex justify-between border-b border-black text-sm'>
        <span>{category}</span>
        <span className='font-serif italic text-base'>{timeRead}</span>
      </div>
      <div className='relative mt-5 w-full h-full'>
        <Image
          src={src}
          alt={alt}
          className='rounded-xl'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
    </div>
  );
};

export default ArticleCard;
