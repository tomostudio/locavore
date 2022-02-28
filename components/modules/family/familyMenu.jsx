import React from 'react';
import FancyLink from '@/components/utils/fancyLink';

const FamilyMenu = ({
  familyListAPI,
  className = '',
  bgColor = '#FFF',
  onFamilyHover = false,
  ...props
}) => {
  // check family list data
  const getFillerNumber = () => {
    const data = familyListAPI.length;
    const gridTotal = Math.ceil(data / 3) * 3;
    return gridTotal - data;
  };

  // Mouse Leave & Enter for Family Button
  const familybutton_enter = (slug) => {
    const familyCards = document.querySelectorAll('.family-card');
    familyCards.forEach((card, id) => {
      if (card.getAttribute('data-store') === slug) {
        card.classList.add('show');
      }
    });
  };

  const familybutton_leave = (id) => {
    const familyCards = document.querySelectorAll('.family-card');
    familyCards.forEach((card, id) => {
      card.classList.remove('show');
    });
  };

  return (
    <div
      className={`sticky max-sm:hidden top-20 z-40 max-w-5xl mx-auto flex flex-wrap mb-12 items-stretch ${className}`}
      id='family-menu'
      {...props}
    >
      {familyListAPI.map((familydata, id) => (
        <FancyLink
          key={id}
          destination={`/family/${familydata.slug.current}`}
          onMouseEnter={() => (onFamilyHover && familybutton_enter(familydata.slug.current))}
          onMouseLeave={() => (onFamilyHover && familybutton_leave(0))}
          className='group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full'
          style={{
            backgroundColor: `${bgColor}`,
          }}
        >
          <div className='relative z-2'>{familydata.title}</div>
          <div
            className='absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-100'
            style={{ backgroundColor: familydata.bgColor.hex }}
          />
        </FancyLink>
      ))}

      {[...Array(getFillerNumber())].map((content, i) => (
        <div
          className='relative rounded-full border border-grayBorder overflow-hidden'
          key={i}
          style={{
            backgroundColor: `${bgColor}`,
          }}
        >
          <div className='block w-full h-full bg-neutral-600 opacity-30' />
        </div>
      ))}
    </div>
  );
};

export default FamilyMenu;
