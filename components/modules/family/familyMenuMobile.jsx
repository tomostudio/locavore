import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from '@/helpers/functional/checkMedia';
import FancyLink from '@/components/utils/fancyLink';
import { motion } from 'framer-motion';

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
    if (
      familyNavRef.current &&
      !familyNavRef.current.contains(event.target) &&
      !endScrollShow
    ) {
      //clicked outside
      setMenuHide(true);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  const checkScroll = () => {
    if (markerRef.current) {
      const checkSticky = markerRef.current.getBoundingClientRect().top;
      console.log(checkSticky - window.innerHeight + 160);
      if (checkSticky - window.innerHeight + 120 < 0) {
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
          <div className='h-0 w-full block' ref={markerRef} />
          <motion.nav
            className={`group sticky bottom-[-2px] left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center pt-10 overflow-hidden`}
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
            initial='initial'
            animate='enter'
            exit='exit'
            variants={{
              initial: { y: '150%' },
              enter: {
                y: '0%',
                transition: { duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0 },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
              },
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
                              : `-mb-12 last:-mb-14 betterhover:group-hover:-mb-6  betterhover:group-hover:last:-mb-7 ${
                                  endScrollShow ? '-mb-6 last:-mb-7' : ''
                                }` // not on touch device
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
          </motion.nav>
        </>
      )}
    </>
  );
};

export default FamilyMenuMobile;
