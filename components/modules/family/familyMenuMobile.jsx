import React from 'react';
import { useMediaQuery } from '@/helpers/functional/checkMedia';
import FancyLink from '@/components/utils/fancyLink';

const FamilyMenuMobile = ({
  familyListAPI,
  className,
  collapse = false,
  onFamilyHover = false,
  ...props
}) => {
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
    <>
      {useMediaQuery('(max-width: 600px)') && (
        <nav
          className={`group sticky bottom-0 left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center pt-5 mt-5 overflow-hidden`}
          {...props}
        >
          {familyListAPI.map((familydata, id) => (
            <FancyLink
              key={id}
              destination={`/family/${familydata.slug.current}`}
              onMouseEnter={() => (onFamilyHover && familybutton_enter(familydata.slug.current))}
              onMouseLeave={() => (onFamilyHover && familybutton_leave(0))}
              className={`group relative  text-center w-full h-full rounded-t-2xl bg-locavore pt-2 pb-7 px-2 font-bold uppercase block hover:shadow-base last:pb-9 last:pb-9-safe transition-[transform,box-shadow,margin] duration-300 hover:-translate-y-3 ${
                collapse
                  ? '-mb-12 last:-mb-14 group-hover:-mb-6  group-hover:last:-mb-7'
                  : '-mb-6 last:-mb-7 '
              }`}
              style={{ backgroundColor: familydata.bgColor.hex }}
            >
              {/* Buffer for Mobile */}
              {collapse && familyListAPI.length - 1 === id && (
                <div
                  className={`w-full h-2  group-hover:h-0 transition-[height]`}
                />
              )}
              {familydata.title}
            </FancyLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default FamilyMenuMobile;
