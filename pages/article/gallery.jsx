import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import Navbar from '@/components/modules/navbar';

// Components
import StickyButton from '@/components/utils/stickyButton';
import OpeningArticle from '@/components/utils/openingArticle';

// Helpers
import NextArticle from '@/components/utils/nextArticle';

export default function Gallery() {
  return (
    <Layout>
      <NextSeo title='Gallery' />
      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <OpeningArticle />
      <section className='pb-14 w-full h-full flex flex-col'>
        <Container className='mb-14 max-md:px-0'>
          {/* Image */}
          <div className='w-full flex flex-col space-y-3 max-md:space-y-2'>
            <div className='relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1'>
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
            <div className='w-full h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2'>
              <div className='relative w-full h-full'>
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <div className='relative w-full h-full'>
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='w-full setflex-center'>
              <div className='relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1'>
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <div className='flex items-end max-md:items-start mt-3 max-md:px-6'>
                <div className='w-10 h-5 border-culture border-b-2 border-l-2 mr-4' />
                <span className='w-full font-serif text-sm font-bold'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </span>
              </div>
            </div>
          </div>
          <div className='w-full mt-14 max-md:mt-6 flex max-md:flex-col space-x-3 max-md:space-x-0 max-md:space-y-2'>
            <div className='relative w-full h-96'>
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
            <div className='relative w-full h-96'>
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
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
        destination={'/article/caroussel'}
      />
      {/* Button Sticky */}
      <StickyButton destination='/editorial/metamorphosis' arrow='left'>
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  );
}
