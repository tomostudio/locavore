import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fade } from '@/helpers/preset/transitions';
// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';

// Components
import FancyLink from '@/components/utils/fancyLink';
import PillButton from '@/components/utils/pillButton';
import Arrow from '@/components/utils/arrow';
import StickyButton from '@/components/utils/stickyButton';
import IssueCard from '@/components/utils/issueCard';

export default function Search() {
  useEffect(() => {
    window.scroll(0, 0);
    return () => {};
  }, []);

  return (
    <Layout>
      <NextSeo title='Search' />
      <LazyMotion features={domAnimation}>
        <m.main initial='initial' animate='enter' exit='exit' variants={fade}>
          {/* Header Gap */}
          <HeaderGap />
          {/* Untuk Content */}
          <section>
            <Container className='max-md:px-6 pt-10 pb-10'>
              <div className='w-full h-full setflex-center'>
                {/* Title */}
                <h1 className='titlestyle'>
                  Search
                  <span className='sub'>All</span>Articles
                </h1>
                {/* Form Search */}
                <div className='w-content max-md:w-full max-md:p-0 mt-10 px-paddingContent'>
                  <form className='mb-8 flex w-full h-full flex-col justify-between'>
                    <div className='relative w-full  border-black pb-2.5 border-b'>
                      <input
                        className='w-full text-xs tracking-wide placeholder-black bg-transparent'
                        type='text'
                        placeholder='ENTER A KEYWORD'
                      />
                      <Arrow
                        position='right'
                        className='absolute right-0 top-2'
                        fill='black'
                      />
                    </div>
                  </form>
                  <div className='w-full h-auto opacity-80 flex max-md:flex-wrap items-center space-x-4 max-md:gap-3 max-md:space-x-0'>
                    <span className='block text-xs pt-px'>CATEGORY</span>
                    <PillButton className='text-xs uppercase max-md:py-1 px-3'>
                      Food
                    </PillButton>
                    <PillButton className='text-xs uppercase max-md:py-1 px-3'>
                      Culture
                    </PillButton>
                    <PillButton className='text-xs  uppercase max-md:py-1 px-3'>
                      Features
                    </PillButton>
                    <PillButton className='text-xs uppercase max-md:py-1 px-3'>
                      ...
                    </PillButton>
                  </div>
                </div>
                {/* Category */}
              </div>
              <div className='relative w-full h-auto setflex-center'>
                <span className='font-bold mt-12 mb-10 text-lg'>
                  We found &nbsp;
                  <span className='border-black border-b'>8 Articles</span>
                </span>
                {/* Card */}
                <div
                  className='w-full h-auto gap-8 flex-wrap'
                  id='search-results'
                >
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='##DEFE71'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#9FF7CD'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#D66A51'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#9FF7CD'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#D66A51'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#C9C8BF'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#DEFE71'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                  <IssueCard
                    issueNo={1}
                    destination='/article/full'
                    articleClassName='bg-culture w-full'
                    title='7. Facial Expressions'
                    category='Culture'
                    timeRead='20 min read'
                    bgColor='#BC9EDF'
                    borderColor=''
                    thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
                    alt='Locavore'
                  />
                </div>
                <div className='flex mt-10'>
                  <FancyLink className='py-4 px-5 text-xs text-gray tracking-widest transition-all ease-linear hover:text-white hover:bg-gray border border-gray rounded-xl'>
                    LOAD MORE
                  </FancyLink>
                </div>
              </div>
            </Container>
          </section>
          {/* Button Sticky */}
          <StickyButton destination='/editorial' arrow='left'>
            Browse all issues
          </StickyButton>
          <Footer />
        </m.main>
      </LazyMotion>
    </Layout>
  );
}
