import ArrowFacilities from '@/components/utils/arrowFacilites';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Mousewheel, Navigation } from 'swiper';
import Image from 'next/legacy/image';

import feature1 from '@/public/nxt2/features/feature1.png';
import feature4 from '@/public/nxt2/features/feature4.png';
import feature5 from '@/public/nxt2/features/feature5.png';
import feature6 from '@/public/nxt2/features/feature6.png';
import feature1_color from '@/public/nxt2/features/feature1_color.png';
import feature4_color from '@/public/nxt2/features/feature4_color.png';
import feature5_color from '@/public/nxt2/features/feature5_color.png';
import feature6_color from '@/public/nxt2/features/feature6_color.png';
import FancyLink from '@/components/utils/fancyLink';
import urlFor from '@/helpers/sanity/urlFor';

const ImageView = ({
  facilitiesList,
  facilitiesListScroll,
  scrollContainer,
}) => {
  const [positionScroll, setPositionScroll] = useState(0);
  const [navVisibility, setNavVisbility] = useState(false);

  useEffect(() => {
    if (scrollContainer.current.scrollWidth < window.screen.width) {
      setNavVisbility(false);
    } else {
      setNavVisbility(true);
    }
    console.log(scrollContainer.current.scrollWidth, window.screen.width);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      id='image-view'
      className='relative w-full'
    >
      <div className='relative w-full h-[calc(40vw*3.7)] sm:h-[calc(30vw*3.7)] md:h-[calc(15vw*3.7)] mt-8'>
        <ScrollContainer
          className={`relative h-full scroll-smooth hide-scrollbar`}
          horizontal={true}
          vertical={false}
          hideScrollbars={false}
          nativeMobileScroll={true}
          innerRef={scrollContainer}
          onScroll={() => {
            setPositionScroll(scrollContainer.current.scrollLeft);
          }}
        >
          <div className='w-fit h-full flex items-center relative min-w-full'>
            <div className='w-fit h-full flex items-center mx-auto'>
              {navVisibility && (
                <div className='w-[25vw] flex-shrink-0 flex-grow' />
              )}
              {facilitiesListScroll.map((data, id) => (
                <div key={id}>
                  <FancyLink
                    className={`block relative w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[15vw] md:h-[15vw] cursor-pointer transtion-all duration-300 hover:!z-40 group`}
                    destination={`/nxt/facilities/${data.slug.current}`}
                    style={{
                      zIndex: data.zIndex,
                    }}
                  >
                    <div
                      className={`relative ${
                        data.thumbnail.position === 'bottom'
                          ? data.thumbnail.size === '150'
                            ? 'top-1/2 -translate-y-[78%]'
                            : data.thumbnail.size === '120'
                            ? 'top-1/2 -translate-y-[72%]'
                            : ''
                          : data.thumbnail.position === 'center'
                          ? 'top-1/2 -translate-y-1/2'
                          : ''
                      } ${
                        data.thumbnail.size === '150'
                          ? 'w-[calc(40vw*1.5)] h-[calc(40vw*2.25)] sm:w-[calc(30vw*1.5)] sm:h-[calc(30vw*2.25)] md:w-[calc(15vw*1.5)] md:h-[calc(15vw*2.25)]'
                          : data.thumbnail.size === '120'
                          ? 'w-[calc(40vw*1.2)] h-[calc(40vw*1.8)] sm:w-[calc(30vw*1.2)] sm:h-[calc(30vw*1.8)] md:w-[calc(15vw*1.2)] md:h-[calc(15vw*1.8)]'
                          : 'w-full h-full'
                      }`}
                    >
                      <div className='relative w-full h-full duration-300 transition-all group-hover:-rotate-6'>
                        <div className='absolute w-full h-full top-0 left-0 z-10 duration-300 transition-all group-hover:opacity-0'>
                          <Image
                            src={urlFor(data.thumbnail.imageBnw)
                              .width(350)
                              .url()}
                            alt={data.thumbnail.imageBnw.alt}
                            layout='fill'
                            objectFit='contain'
                            placeholder='blur'
                            blurDataURL={urlFor(data.thumbnail.imageBnw)
                              .blur(2)
                              .format('webp')
                              .width(100)
                              .url()}
                          />
                        </div>
                        <Image
                          src={urlFor(data.thumbnail.imageColor)
                            .width(350)
                            .url()}
                          alt={data.thumbnail.imageColor.alt}
                          layout='fill'
                          objectFit='contain'
                          placeholder='blur'
                          blurDataURL={urlFor(data.thumbnail.imageColor)
                            .blur(2)
                            .format('webp')
                            .width(100)
                            .url()}
                        />
                      </div>
                    </div>
                  </FancyLink>
                </div>
              ))}
              {facilitiesListScroll.map((data, id) => (
                <div key={id}>
                  <FancyLink
                    className={`block relative w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[15vw] md:h-[15vw] cursor-pointer transtion-all duration-300 hover:!z-40 group`}
                    destination={`/nxt/facilities/${data.slug.current}`}
                    style={{
                      zIndex: data.zIndex,
                    }}
                  >
                    <div
                      className={`relative ${
                        data.thumbnail.position === 'bottom'
                          ? data.thumbnail.size === '150'
                            ? 'top-1/2 -translate-y-[78%]'
                            : data.thumbnail.size === '120'
                            ? 'top-1/2 -translate-y-[72%]'
                            : ''
                          : data.thumbnail.position === 'center'
                          ? 'top-1/2 -translate-y-1/2'
                          : ''
                      } ${
                        data.thumbnail.size === '150'
                          ? 'w-[calc(40vw*1.5)] h-[calc(40vw*2.25)] sm:w-[calc(30vw*1.5)] sm:h-[calc(30vw*2.25)] md:w-[calc(15vw*1.5)] md:h-[calc(15vw*2.25)]'
                          : data.thumbnail.size === '120'
                          ? 'w-[calc(40vw*1.2)] h-[calc(40vw*1.8)] sm:w-[calc(30vw*1.2)] sm:h-[calc(30vw*1.8)] md:w-[calc(15vw*1.2)] md:h-[calc(15vw*1.8)]'
                          : 'w-full h-full'
                      }`}
                    >
                      <div className='relative w-full h-full duration-300 transition-all group-hover:-rotate-6'>
                        <div className='absolute w-full h-full top-0 left-0 z-10 duration-300 transition-all group-hover:opacity-0'>
                          <Image
                            src={urlFor(data.thumbnail.imageBnw)
                              .width(350)
                              .url()}
                            alt={data.thumbnail.imageBnw.alt}
                            layout='fill'
                            objectFit='contain'
                            placeholder='blur'
                            blurDataURL={urlFor(data.thumbnail.imageBnw)
                              .blur(2)
                              .format('webp')
                              .width(100)
                              .url()}
                          />
                        </div>
                        <Image
                          src={urlFor(data.thumbnail.imageColor)
                            .width(350)
                            .url()}
                          alt={data.thumbnail.imageColor.alt}
                          layout='fill'
                          objectFit='contain'
                          placeholder='blur'
                          blurDataURL={urlFor(data.thumbnail.imageColor)
                            .blur(2)
                            .format('webp')
                            .width(100)
                            .url()}
                        />
                      </div>
                    </div>
                  </FancyLink>
                </div>
              ))}
              {facilitiesListScroll.map((data, id) => (
                <div key={id}>
                  <FancyLink
                    className={`block relative w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[15vw] md:h-[15vw] cursor-pointer transtion-all duration-300 hover:!z-40 group`}
                    destination={`/nxt/facilities/${data.slug.current}`}
                    style={{
                      zIndex: data.zIndex,
                    }}
                  >
                    <div
                      className={`relative ${
                        data.thumbnail.position === 'bottom'
                          ? data.thumbnail.size === '150'
                            ? 'top-1/2 -translate-y-[78%]'
                            : data.thumbnail.size === '120'
                            ? 'top-1/2 -translate-y-[72%]'
                            : ''
                          : data.thumbnail.position === 'center'
                          ? 'top-1/2 -translate-y-1/2'
                          : ''
                      } ${
                        data.thumbnail.size === '150'
                          ? 'w-[calc(40vw*1.5)] h-[calc(40vw*2.25)] sm:w-[calc(30vw*1.5)] sm:h-[calc(30vw*2.25)] md:w-[calc(15vw*1.5)] md:h-[calc(15vw*2.25)]'
                          : data.thumbnail.size === '120'
                          ? 'w-[calc(40vw*1.2)] h-[calc(40vw*1.8)] sm:w-[calc(30vw*1.2)] sm:h-[calc(30vw*1.8)] md:w-[calc(15vw*1.2)] md:h-[calc(15vw*1.8)]'
                          : 'w-full h-full'
                      }`}
                    >
                      <div className='relative w-full h-full duration-300 transition-all group-hover:-rotate-6'>
                        <div className='absolute w-full h-full top-0 left-0 z-10 duration-300 transition-all group-hover:opacity-0'>
                          <Image
                            src={urlFor(data.thumbnail.imageBnw)
                              .width(350)
                              .url()}
                            alt={data.thumbnail.imageBnw.alt}
                            layout='fill'
                            objectFit='contain'
                            placeholder='blur'
                            blurDataURL={urlFor(data.thumbnail.imageBnw)
                              .blur(2)
                              .format('webp')
                              .width(100)
                              .url()}
                          />
                        </div>
                        <Image
                          src={urlFor(data.thumbnail.imageColor)
                            .width(350)
                            .url()}
                          alt={data.thumbnail.imageColor.alt}
                          layout='fill'
                          objectFit='contain'
                          placeholder='blur'
                          blurDataURL={urlFor(data.thumbnail.imageColor)
                            .blur(2)
                            .format('webp')
                            .width(100)
                            .url()}
                        />
                      </div>
                    </div>
                  </FancyLink>
                </div>
              ))}
              {navVisibility && (
                <div className='w-[25vw] flex-shrink-0 flex-grow' />
              )}
            </div>
          </div>
        </ScrollContainer>
        {navVisibility && (
          <div className='absolute pointer-events-none z-50 top-0 left-0 h-full w-full flex items-center justify-between '>
            <button
              className='group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full ml-8 transition-all duration-300 hover:bg-white'
              onClick={() => {
                const scrollContainerWidth =
                  scrollContainer.current.scrollWidth -
                  scrollContainer.current.clientWidth; // Max Scroll Position

                // base 40vw
                // sm 30vw
                // md 15vw

                let scrollProgressDis = (window.screen.width / 10) * 4; // base

                if (window.screen.width >= 640 && window.screen.width < 768) {
                  //sm
                  scrollProgressDis = (window.screen.width / 10) * 3;
                } else if (
                  window.screen.width >= 768 &&
                  window.screen.width < 1024
                ) {
                  // md
                  scrollProgressDis = (window.screen.width / 10) * 1.5;
                } else if (window.screen.width >= 1024) {
                  //lg
                  scrollProgressDis = (window.screen.width / 10) * 1.5 * 2;
                }

                let scrollToLeft = positionScroll - scrollProgressDis;

                if (scrollToLeft < 0) scrollToLeft = 0;

                scrollContainer.current.scrollLeft = scrollToLeft;

                setPositionScroll(scrollToLeft);
                console.log(positionScroll, scrollToLeft, scrollProgressDis);
              }}
            >
              <ArrowFacilities position='left' />
            </button>
            <button
              className={`group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full mr-8 transition-all duration-300 hover:bg-white`}
              onClick={() => {
                const scrollContainerWidth =
                  scrollContainer.current.scrollWidth -
                  scrollContainer.current.clientWidth; // Max Scroll Position

                // base 40vw
                // sm 30vw
                // md 15vw

                let scrollProgressDis = (window.screen.width / 10) * 4; // base

                if (window.screen.width >= 640 && window.screen.width < 768) {
                  //sm
                  scrollProgressDis = (window.screen.width / 10) * 3;
                } else if (
                  window.screen.width >= 768 &&
                  window.screen.width < 1024
                ) {
                  // md
                  scrollProgressDis = (window.screen.width / 10) * 1.5;
                } else if (window.screen.width >= 1024) {
                  //lg
                  scrollProgressDis = (window.screen.width / 10) * 1.5 * 2;
                }
                let scrollToRight = positionScroll + scrollProgressDis;

                if (scrollToRight > scrollContainerWidth)
                  scrollToRight = scrollContainerWidth;

                scrollContainer.current.scrollLeft = scrollToRight;

                setPositionScroll(scrollToRight);
                console.log(positionScroll, scrollToRight, scrollProgressDis);
              }}
            >
              <ArrowFacilities position='right' />
            </button>
          </div>
        )}
      </div>
      <div className='relative w-full h-[calc(40vw*3.7)] sm:h-[calc(30vw*3.7)] md:h-[calc(15vw*3.7)] flex items-center my-20'>
        <Swiper
          mousewheel={{
            forceToAxis: true,
          }}
          slidesPerView='auto'
          keyboard={{ enabled: true }}
          navigation={{
            nextEl: '.nextFacilities',
            prevEl: '.prevFacilities',
          }}
          loop={true}
          speed={500}
          centeredSlides={true}
          className='relative w-full !overflow-visible'
          modules={[FreeMode, Navigation, Keyboard, Mousewheel]}
        >
          {facilitiesListScroll.map((data, id) => (
            <SwiperSlide
              key={id}
              className='relative !w-[40vw] !h-[40vw] sm:!w-[30vw] sm:!h-[30vw] md:!w-[15vw] md:!h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group'
            >
              <FancyLink
                className={`block relative ${
                  data.thumbnail.position === 'bottom'
                    ? data.thumbnail.size === '150'
                      ? 'top-1/2 -translate-y-[78%]'
                      : data.thumbnail.size === '120'
                      ? 'top-1/2 -translate-y-[72%]'
                      : ''
                    : data.thumbnail.position === 'center'
                    ? 'top-1/2 -translate-y-1/2'
                    : ''
                } ${
                  data.thumbnail.size === '150'
                    ? 'w-[calc(40vw*1.5)] h-[calc(40vw*2.25)] sm:w-[calc(30vw*1.5)] sm:h-[calc(30vw*2.25)] md:w-[calc(15vw*1.5)] md:h-[calc(15vw*2.25)]'
                    : data.thumbnail.size === '120'
                    ? 'w-[calc(40vw*1.2)] h-[calc(40vw*1.8)] sm:w-[calc(30vw*1.2)] sm:h-[calc(30vw*1.8)] md:w-[calc(15vw*1.2)] md:h-[calc(15vw*1.8)]'
                    : 'w-full h-full'
                }`}
                destination={`/nxt/facilities/${data.slug.current}`}
              >
                <div className='relative w-full h-full duration-300 transition-all group-hover:-rotate-6'>
                  <div className='absolute top-0 left-0 w-full h-full duration-300 z-10 transition-all group-hover:opacity-0'>
                    <Image
                      src={urlFor(data.thumbnail.imageBnw).width(350).url()}
                      alt={data.thumbnail.imageBnw.alt}
                      layout='fill'
                      objectFit='contain'
                      placeholder='blur'
                      blurDataURL={urlFor(data.thumbnail.imageColor)
                        .blur(2)
                        .format('webp')
                        .width(100)
                        .url()}
                    />
                  </div>
                  <Image
                    src={urlFor(data.thumbnail.imageColor).width(350).url()}
                    alt={data.thumbnail.imageColor.alt}
                    layout='fill'
                    objectFit='contain'
                    placeholder='blur'
                    blurDataURL={urlFor(data.thumbnail.imageColor)
                      .blur(2)
                      .format('webp')
                      .width(100)
                      .url()}
                  />
                </div>
              </FancyLink>
            </SwiperSlide>
          ))}
          {facilitiesListScroll.map((data, id) => (
            <SwiperSlide
              key={id}
              className='relative !w-[40vw] !h-[40vw] sm:!w-[30vw] sm:!h-[30vw] md:!w-[15vw] md:!h-[15vw] cursor-pointer transtion-all duration-300 hover:z-50 group'
            >
              <FancyLink
                className={`block relative ${
                  data.thumbnail.position === 'bottom'
                    ? data.thumbnail.size === '150'
                      ? 'top-1/2 -translate-y-[78%]'
                      : data.thumbnail.size === '120'
                      ? 'top-1/2 -translate-y-[72%]'
                      : ''
                    : data.thumbnail.position === 'center'
                    ? 'top-1/2 -translate-y-1/2'
                    : ''
                } ${
                  data.thumbnail.size === '150'
                    ? 'w-[calc(40vw*1.5)] h-[calc(40vw*2.25)] sm:w-[calc(30vw*1.5)] sm:h-[calc(30vw*2.25)] md:w-[calc(15vw*1.5)] md:h-[calc(15vw*2.25)]'
                    : data.thumbnail.size === '120'
                    ? 'w-[calc(40vw*1.2)] h-[calc(40vw*1.8)] sm:w-[calc(30vw*1.2)] sm:h-[calc(30vw*1.8)] md:w-[calc(15vw*1.2)] md:h-[calc(15vw*1.8)]'
                    : 'w-full h-full'
                }`}
                destination={`/nxt/facilities/${data.slug.current}`}
              >
                <div className='relative w-full h-full duration-300 transition-all group-hover:-rotate-6'>
                  <div className='absolute top-0 left-0 w-full h-full duration-300 z-10 transition-all group-hover:opacity-0'>
                    <Image
                      src={urlFor(data.thumbnail.imageBnw).width(350).url()}
                      alt={data.thumbnail.imageBnw.alt}
                      layout='fill'
                      objectFit='contain'
                      placeholder='blur'
                      blurDataURL={urlFor(data.thumbnail.imageColor)
                        .blur(2)
                        .format('webp')
                        .width(100)
                        .url()}
                    />
                  </div>
                  <Image
                    src={urlFor(data.thumbnail.imageColor).width(350).url()}
                    alt={data.thumbnail.imageColor.alt}
                    layout='fill'
                    objectFit='contain'
                    placeholder='blur'
                    blurDataURL={urlFor(data.thumbnail.imageColor)
                      .blur(2)
                      .format('webp')
                      .width(100)
                      .url()}
                  />
                </div>
              </FancyLink>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute pointer-events-none z-50 top-0 left-0 h-full w-full flex items-center justify-between '>
          <button className='prevFacilities group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full ml-8 transition-all duration-300 hover:bg-white'>
            <ArrowFacilities position='left' />
          </button>
          <button className='nextFacilities group pointer-events-auto w-[60px] h-[60px] p-5 border-2 border-white rounded-full mr-8 transition-all duration-300 hover:bg-white'>
            <ArrowFacilities position='right' />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageView;
