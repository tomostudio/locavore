import { NextSeo } from 'next-seo';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import HeaderGap from '@/components/modules/headerGap';
import Footer from '@/components/modules/footer';
import Navbar from '@/components/modules/navbar';

// Components
import FancyLink from '@/components/utils/fancyLink';
import OpeningArticle from '@/components/utils/openingArticle';
import StickyButton from '@/components/utils/stickyButton';

// Helpers
import NextArticle from '@/components/utils/nextArticle';

export default function Video() {
  return (
    <Layout>
      <NextSeo title='Video' />
      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <OpeningArticle />
      <section className='pb-20 w-full h-full flex flex-col'>
        <Container className='mb-14 max-md:px-0'>
          {/* Video */}
          <div className='relative w-full flex flex-col space-y-3'>
            <div className='relative w-full'>
              <div className='relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1'>
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <div className='absolute top-0 left-0 h-full w-full setflex-center'>
                <FancyLink
                  destination='/'
                  className='px-10 py-7 border border-white rounded-50% text-white'
                >
                  WATCH
                </FancyLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <NextArticle
        bgColor={'#C9C8BF'}
        title='5. Ulekan'
        category='Culture'
        timeRead='20 min read'
        thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
        alt='Locavore'
        destination={'/article/blog'}
      />
      {/* Button Sticky */}
      <StickyButton destination='/editorial/metamorphosis' arrow='left'>
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  );
}
