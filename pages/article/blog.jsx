import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import Navbar from '@/components/modules/navbar';

// Components
import PillButton from '@/components/utils/pillButton';
import OpeningArticle from '@/components/utils/openingArticle';
import StickyButton from '@/components/utils/stickyButton';
import NextArticle from '@/components/utils/nextArticle';

// Helpers
import FancyLink from '@/components/utils/fancyLink';

export default function Full() {
  const scrolltoview = (slug) => {
    const element = document.querySelector(`[data-slug*="${slug}"]`);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // document.querySelectorAll(`[data-slug*="${slug}"]`)[0].scrollIntoView({
    //   behavior: 'smooth',
    // });
  };

  return (
    <Layout>
      <NextSeo title='Full' />
      <Navbar
        className='border-black'
        defaultStyle
        logo='/locavore-black.png'
      />

      {/* Header Gap */}
      <HeaderGap />

      {/* Untuk Content */}
      <OpeningArticle />

      <section className=''>
        <Container>
          <div>
            <div className='flex flex-col space-y-1 max-md:mt-5 text-culture'>
              <div>
                <span className='block font-serif italic'>Part 1</span>
                <FancyLink
                  onClick={() => scrolltoview('tools-of-trade')}
                  className='font-bold font-serif border-culture border-b'
                >
                  Tools of The Trade
                </FancyLink>
              </div>
              <div>
                <span className='block font-serif italic'>Part 2</span>
                <FancyLink
                  onClick={() => scrolltoview('evolution-of-the-food-industry')}
                  className='font-bold font-serif border-culture border-b'
                >
                  Evolution of The Food Industry
                </FancyLink>
              </div>
              <div>
                <span className='block font-serif italic text-culture'>
                  Part 3
                </span>
                <FancyLink
                  onClick={() => scrolltoview('you-are-what-you-eat')}
                  className='font-bold font-serif border-culture border-b'
                >
                  You Are What You Eat
                </FancyLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='mt-14 w-full h-full'>
        {/* Orange Component */}
        <div
          data-slug='tools-of-trade'
          className='w-full h-auto px-8 py-4 max-md:p-2'
          style={{ background: '#D66A51' }}
        >
          <div className='w-full h-full bg-white rounded-2xl py-14 max-md:py-7 setflex-center'>
            <div className='w-content max-md:w-full max-md:px-4 max-md:space-y-7 space-y-10'>
              {/* Title */}
              <div className='font-serif text-center font-bold'>
                <span className='block italic'>Part 1</span>
                Tools of The Trade
              </div>
              <p className='px-paddingContent max-md:p-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularise in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not
                simply random text. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                Letraset sheets containing Lorem Ipsum passages.
              </p>
              <p className='font-sans font-bold uppercase px-paddingContent max-md:p-0'>
                It has roots in a piece of classical west Latin literature from
                45 BC, making it over 2000 years old ever since.
              </p>
              <p className='px-paddingContent max-md:p-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularise in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus Page Maker including versions of
                Lorem Ipsum.
              </p>
              {/* Image */}
              <div className='w-full h-auto px-paddingContent max-md:p-0'>
                <div className='relative w-full h-80'>
                  <Image
                    src={`/placeholder/Content 3.png`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                  />
                </div>
                <div className='flex items-end max-md:items-start w-full mt-3'>
                  <div className='w-10 h-5 border-culture border-b-2 border-l-2 mr-4' />
                  <span className='w-full font-serif text-sm font-bold'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                </div>
              </div>
              <p className='px-paddingContent max-md:p-0'>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
              </p>
            </div>
          </div>
        </div>
        {/* White Component */}
        <div
          data-slug='evolution-of-the-food-industry'
          className='w-full h-auto px-8 max-md:px-6 py-14 setflex-center'
        >
          <div className='w-content max-md:w-full space-y-10 max-md:space-y-7'>
            {/* Title */}
            <div className='font-serif text-center font-bold'>
              <span className='block italic'>Part 2</span>
              Evolution of The Food Industry
            </div>
            <p className='px-paddingContent max-md:p-0'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero.
            </p>
            <div className='h-40 setflex-center w-full'>
              <hr className='bg-culture border border-culture h-full w-px' />
            </div>
            <div className='relative h-32px w-32px mb-3'>
              <Image
                src={`/quote.png`}
                alt='Locavore'
                layout='fill'
                objectFit='contain'
                objectPosition='center'
              />
            </div>
            <p className='font-sans font-bold text-3xl max-md:text-2xl'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, or
              randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything hidden in the middle of text.
            </p>
            <p className='px-paddingContent max-md:p-0'>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text.
            </p>
          </div>
        </div>
        {/* Image Full */}
        <div className='w-full setflex-center'>
          <div className='relative w-full h-36rem'>
            <Image
              src={`/placeholder/locavore-rintik-crop-11.jpg`}
              alt={'Locavore'}
              className='rounded-xl'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className='w-content max-md:w-full px-paddingContent max-md:px-6 flex items-end max-md:items-start mt-3'>
            <div className='w-10 h-5 border-culture border-b-2 border-l-2 mr-4' />
            <span className='w-full font-serif text-sm font-bold'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          </div>
        </div>
        {/* Image */}
        <div className='w-full h-auto setflex-center my-14'>
          <div className='relative w-content max-md:w-full px-paddingContent max-md:px-6'>
            <div className='relative w-full h-72'>
              <Image
                src={`/placeholder/Content 2.png`}
                alt={'Locavore'}
                className='rounded-xl'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
            <div className='flex items-end max-md:items-start mt-3'>
              <div className='w-10 h-5 border-culture border-b-2 border-l-2 mr-4' />
              <span className='w-full font-serif text-sm font-bold'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
            </div>
          </div>
        </div>
        {/* Orange Component */}
        <div
          data-slug='you-are-what-you-eat'
          className='w-full h-auto px-8 py-4 max-md:p-2'
          style={{ background: '#D66A51' }}
        >
          <div className='w-full h-full bg-white rounded-2xl py-14 max-md:py-7 setflex-center'>
            <div className='w-content max-md:w-full max-md:px-4 max-md:space-y-7 space-y-10'>
              <div className='font-serif text-center font-bold'>
                <span className='block italic'>Part 3</span>
                You Are What You Eat
              </div>
              <p className='px-paddingContent max-md:p-0'>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum
                is not simply random text. Richard McClintock, a Latin professor
                at Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source of material.
              </p>
              {/* Image */}
              <div className='w-full h-auto px-paddingContent max-md:p-0'>
                <div className='relative w-full h-64'>
                  <Image
                    src={`/placeholder/locavore-rintik-crop-18.jpg`}
                    alt={'Locavore'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Card Next Article */}
      <NextArticle
        bgColor={'#C9C8BF'}
        title='5. Ulekan'
        category='Culture'
        timeRead='20 min read'
        thumbnail='/placeholder/locavore-rintik-crop-11.jpg'
        alt='Locavore'
        destination={'/article/gallery'}
      />
      {/* Button Sticky */}
      <StickyButton destination='/editorial/metamorphosis' arrow='left'>
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  );
}
