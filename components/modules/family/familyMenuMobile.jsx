import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from '@/helpers/functional/checkMedia';
import FancyLink from '@/components/utils/fancyLink';

const FamilyMenuMobile = ({
  familyListAPI,
  familyAPI,
  className,
  collapse = false,
  onFamilyHover = false, //check if it is on family page or not
  ...props
}) => {
  // Mouse Leave & Enter for Family Button
  const familybutton_enter = (slug) => {
    if (!('ontouchstart' in window)) {
      const familyCards = document.querySelectorAll('.family-card');
      familyCards.forEach((card, id) => {
        if (card.getAttribute('data-store') === slug) {
          card.classList.add('show');
        }
      });
    }
  };

  const familybutton_leave = (id) => {
    const familyCards = document.querySelectorAll('.family-card');
    familyCards.forEach((card, id) => {
      card.classList.remove('show');
    });
  };

  const [touch, setTouch] = useState(false);
  const [menuHide, setMenuHide] = useState(true);
  const [endScrollShow, setEndScrollShow] = useState(false); // menu shown at the end of scroll
  const familyNavRef = useRef();
  const markerRef = useRef();

  const handleClickOutside = (event) => {
    if (familyNavRef.current && !familyNavRef.current.contains(event.target) && !endScrollShow) {
      //clicked outside
      setMenuHide(true);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  const checkScroll = () => {
    if (markerRef.current) {
      const checkSticky = markerRef.current.getBoundingClientRect().top;
      if (checkSticky - window.innerHeight + 160 < 0) {
        setMenuHide(false);
        setEndScrollShow(true);
      } else {
        setMenuHide(true);
        setEndScrollShow(false);
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }
  };

  useEffect(() => {
    setTouch('ontouchstart' in window);
    document.addEventListener('scroll', checkScroll, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', checkScroll, false);
    };
  }, []);

  return (
    <>
      {useMediaQuery('(max-width: 600px)') && (
        <>
          <div id='marker' className='h-0 w-full block' ref={markerRef} />
          <nav
            className={`group sticky bottom-[-2px] left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center overflow-hidden`}
            {...props}
            ref={familyNavRef}
            onClick={() => {
              if (touch) {
                if (menuHide) {
                  // menu is shown
                  document.addEventListener('mousedown', handleClickOutside);
                  setMenuHide(false);
                } else {
                  // menu is hidden
                  document.removeEventListener('mousedown', handleClickOutside);
                  setMenuHide(true);
                }
              }
            }}
          >
            {familyListAPI.map((familydata, id) => {
              if (collapse && familydata._id !== familyAPI[0]._id)
                return (
                  <FancyLink
                    key={id}
                    destination={`/family/${familydata.slug.current}`}
                    onMouseEnter={() => {
                      if (onFamilyHover)
                        familybutton_enter(familydata.slug.current);
                    }}
                    onMouseLeave={() => {
                      if (onFamilyHover) familybutton_leave(0);
                    }}
                    className={`group relative  text-center w-full h-full rounded-t-2xl bg-locavore pt-2 pb-7 px-2 font-bold uppercase block betterhover:hover:shadow-base last:pb-9 last:pb-9-safe transition-[transform,box-shadow,margin] duration-300 betterhover:hover:-translate-y-3 ${
                      collapse
                        ? `${
                            touch // on touch device
                              ? `${
                                  menuHide
                                    ? '-mb-12 last:-mb-14 !pointer-events-none'
                                    : '-mb-6 last:-mb-7'
                                }`
                              : `-mb-12 last:-mb-14 betterhover:group-hover:-mb-6  betterhover:group-hover:last:-mb-7` // not on touch device
                          }`
                        : '-mb-6 last:-mb-7'
                    } `}
                    style={{ backgroundColor: familydata.bgColor.hex }}
                  >
                    {/* Buffer for Mobile */}
                    {collapse && familyListAPI.length - 1 === id && (
                      <div
                        className={`w-full betterhover:group-hover:h-0 transition-[height] ${
                          menuHide ? 'h-2' : ' h-0'
                        }`}
                      />
                    )}
                    {familydata.title}
                  </FancyLink>
                );
            })}
          </nav>
        </>
      )}
    </>
  );
};

export default FamilyMenuMobile;
