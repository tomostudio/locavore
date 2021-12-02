import { useEffect, useState, useRef } from 'react';
import { NextSeo } from 'next-seo';
import ScrollContainer from 'react-indiana-drag-scroll';

// Layout
import Layout from '@/components/modules/layout';
import HeaderGap from '@/components/modules/headerGap';
import Footer from '@/components/modules/footer';

// Components
import ArticleCard from '@/components/modules/editorial/articleCard';

// Helpers
import FancyLink from '@/components/utils/fancyLink';
import StickyButton from '@/components/modules/stickyButton';
import Container from '@/components/modules/container';

export default function Issue() {
  const dataArticle = [
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
  ];

  const articleRef = useRef([]);
  const scrollInd = useRef(null);
  const scrollContainer = useRef(null);
  const [centerCard, setCenterCard] = useState(1);

  const updateScroll = () => {
    articleRef.current.forEach((card, id) => {
      // get window position relative to center (Horizontal)
      const fromCenter =
        -50 +
        Math.round(
          ((card.getBoundingClientRect().x +
            card.getBoundingClientRect().width / 2) /
            window.innerWidth) *
            100
        );

      // update card rotation
      const rotatationTarget = card.querySelector('a');
      rotatationTarget.style.transform = `rotate(${
        (fromCenter / 100) * 10
      }deg)`;

      // set center item
      if (fromCenter > -10 && fromCenter < 10) {
        setCenterCard(id + 1);
      }
    });

    // update scroll bar position
    const currentScroll =
      Math.round(
        Math.min(
          (scrollContainer.current.scrollLeft /
            (scrollContainer.current.scrollWidth - window.innerWidth)) *
            10000,
          10000
        )
      ) / 100;
    const indWidth = scrollInd.current.offsetWidth;
    const parentWidth = scrollInd.current.parentElement.offsetWidth;
    const scrollMove = (parentWidth - indWidth) * (currentScroll / 100);
    scrollInd.current.style.transform = `translateX(${scrollMove}px)`;
  };

  useEffect(() => {
    window.scroll(0, 0);
    updateScroll();

    // check article card count & container size
  }, []);

  return (
    <Layout>
      <NextSeo title='Metamorphosis' />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className='py-10 w-full h-full flex flex-col space-y-10'>
        {/* Title */}
        <Container className='max-md:px-6'>
          <div className='w-full h-full setflex-center'>
            <span className='font-serif italic text-xl'>
              Issue 1 — March 2021
            </span>
            <h1 className=' font-sans font-normal max-md:break-all max-md:text-center'>
              Metamorphosis
            </h1>
          </div>
        </Container>
        {/* Card */}
        <div className='w-full' id='editorial-slider'>
          <ScrollContainer
            className='issue_container flex w-full space-x-7 px-7 hide-scrollbar'
            horizontal={true}
            vertical={false}
            hideScrollbars={false}
            onScroll={updateScroll}
            innerRef={scrollContainer}
            nativeMobileScroll={true}
          >
            {dataArticle.map((data, id) => (
              <div
                className='article_wrapper'
                key={id}
                ref={(el) => (articleRef.current[id] = el)}
              >
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    bgColor={'#E9C4DD'}
                    title='5. Ulekan'
                    category='Culture'
                    timeRead='20 min read'
                    src='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                </FancyLink>
              </div>
            ))}
          </ScrollContainer>
        </div>
        {/* CHANGE */}
        <Container className='max-md:px-6'>
          <div className='w-full setflex-center'>
            <div className='mb-5 text-xs'>
              <span className='font-bold'>{centerCard}</span>
              {` — `}
              <span>{articleRef.current.length}</span>
            </div>
            <div className='relative w-full setflex-center'>
              <div className='relative border-b w-s-50 max-w-sm max-md:w-full h-px border-black'>
                <div
                  ref={scrollInd}
                  className='absolute w-8 h-1 -top-px border border-black bg-black'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Button Sticky */}
      <StickyButton destination='/editorial' arrow='left'>
        EDITORIAL INDEX
      </StickyButton>
      <Footer />
    </Layout>
  );
}
