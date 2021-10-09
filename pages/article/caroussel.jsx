import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import Image from 'next/image';
import { useRef } from 'react';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import HeaderGap from '@/components/modules/headerGap';
import Footer from '@/components/modules/footer';
import Navbar from '@/components/modules/navbar';

// Components
import PillButton from '@/components/utils/pillButton';
import Arrow from '@/components/utils/arrow';
import OpeningArticle from '@/components/utils/openingArticle';
import StickyButton from '@/components/utils/stickyButton';

// Helpers
import NextArticle from '@/components/utils/nextArticle';
import FancyLink from '@/components/utils/fancyLink';

// install Swiper modules
SwiperCore.use([EffectFade]);

export default function Caroussel() {
  const refSlide = useRef(null);
  const refList = useRef(null);

  const goNext = () => {
    if (refSlide.current !== null && refSlide.current.swiper !== null) {
      refSlide.current.swiper.slideNext();
      refList.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (refSlide.current !== null && refSlide.current.swiper !== null) {
      refSlide.current.swiper.slidePrev();
      refList.current.swiper.slidePrev();
    }
  };

  const onListChange = () => {
    refSlide.current.swiper.slideTo(refList.current.swiper.realIndex + 1);
  };
  useEffect(() => {
    window.scroll(0, 0);
    return () => {
    };
  }, []);

  return (
    <Layout>
      <NextSeo title='Caroussel' />
      <Navbar
        className='border-black'
        defaultStyle
        logo='/locavore-black.png'
      />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <OpeningArticle />
      <section className='pb-20 w-full h-full flex flex-col'>
        <Container className='mb-14 max-md:mb-5 space-y-3 max-md:space-y-5 max-md:px-0'>
          {/* Gallery */}
          <div className='relative w-full h-full'>
            <Swiper
              loop={true}
              ref={refSlide}
              // speed={0}
              slidesPerView={1}
              // loopedSlides={1}
              allowTouchMove={false}
              className='w-full h-full'
            >
              <SwiperSlide>
                <div className='relative w-full aspect-w-16 max-md:aspect-w-1 aspect-h-9 max-md:aspect-h-1'>
                  <Image
                    src={`/placeholder/locavore-rintik-crop-18.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='gallery-image'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-full aspect-w-16 aspect-h-9'>
                  <Image
                    src={`/placeholder/locavore-rintik-crop-16.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='gallery-image'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-full aspect-w-16 aspect-h-9'>
                  <Image
                    src={`/placeholder/locavore-rintik-crop-11.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='gallery-image'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-full aspect-w-16 aspect-h-9'>
                  <Image
                    src={`/placeholder/NightRoosterArtwork-5.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='gallery-image'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-full aspect-w-16 aspect-h-9'>
                  <Image
                    src={`/placeholder/NightRoosterArtwork-deggeha-2.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='gallery-image'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-full aspect-w-16 aspect-h-9'>
                  <Image
                    src={`/placeholder/NightRooster-Cocktail-2020-12.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='absolute pointer-events-none z-10 top-0 left-0 h-full w-full flex items-center justify-between px-6'>
              <FancyLink className='pointer-events-auto' onClick={goPrev}>
                <Arrow position='left' fill='white' className='w-24px h-24px' />
              </FancyLink>
              <FancyLink className='pointer-events-auto' onClick={goNext}>
                <Arrow
                  position='right'
                  fill='white'
                  className='w-24px h-24px'
                />
              </FancyLink>
            </div>
          </div>
          {/* List Gallery */}
          <div className='relative w-full h-36 max-md:h-24 max-md:pl-6'>
            <div className='absolute left-0 w-full h-full flex space-x-3'>
              <Swiper
                slidesPerView='auto'
                loop={true}
                spaceBetween={20}
                allowTouchMove={false}
                ref={refList}
                loop={true}
                slideToClickedSlide={true}
                // loopedSlides={2}
                centeredSlides={true}
                onSlideChange={onListChange}
                id='swipe-caroussel'
              >
                <SwiperSlide>
                  <div className='cursor-pointer relative w-full h-full'>
                    <Image
                      src={`/placeholder/locavore-rintik-crop-18.jpg`}
                      alt={'Locavore'}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cursor-pointer relative w-full h-full'>
                    <Image
                      src={`/placeholder/locavore-rintik-crop-16.jpg`}
                      alt={'Locavore'}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cursor-pointer relative w-full h-full'>
                    <Image
                      src={`/placeholder/locavore-rintik-crop-11.jpg`}
                      alt={'Locavore'}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cursor-pointer relative w-full h-full'>
                    <Image
                      src={`/placeholder/NightRoosterArtwork-5.jpg`}
                      alt={'Locavore'}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cursor-pointer relative w-full h-full'>
                    <Image
                      src={`/placeholder/NightRoosterArtwork-deggeha-2.jpg`}
                      alt={'Locavore'}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cursor-pointer relative w-full h-full'>
                    <Image
                      src={`/placeholder/NightRooster-Cocktail-2020-12.jpg`}
                      alt={'Locavore'}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
        <hr className='hidden max-md:block border-gray mt-3 mb-14 mx-6' />
      </section>
      <NextArticle
        bgColor={'#C9C8BF'}
        title='5. Ulekan'
        category='Culture'
        timeRead='20 min read'
        thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
        alt='Locavore'
        destination={'/article/video'}
      />
      {/* Button Sticky */}
      <StickyButton destination='/editorial/metamorphosis' arrow='left'>
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  );
}
