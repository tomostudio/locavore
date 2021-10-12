import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fade } from '@/helpers/preset/transitions';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import EditorialIssueCard from '@/components/utils/editorialIssueCard';

// Components
import StickyButton from '@/components/utils/stickyButton';

export default function Editorial() {
  useEffect(() => {
    window.scroll(0, 0);
    return () => {};
  }, []);
  
  //Variable to toggle Coming Soon Style
  const comingsoon = true;

  return (
    <Layout>
      <NextSeo title='Editorial' />

      <LazyMotion features={domAnimation}>
        <m.main initial='initial' animate='enter' exit='exit' variants={fade}>
          {/* Header Gap */}
          {/* Untuk Content */}
          <section className='pb-10 w-full h-full flex flex-col'>
            <Container className='max-md:px-6'>
              {/* Sticky Container */}
              <div className={`relative w-full`}>
                <div
                  className={`w-full setflex-center  pt-10 ${
                    comingsoon && 'comingsoonSticky'
                  }`}
                >
                  <HeaderGap />
                  {/* Title */}
                  <div className='mb-14'>
                    <h1 className='titlestyle'>
                      Editorial
                      <span className='sub'>Issues</span>Index
                    </h1>
                  </div>
                  {comingsoon && (
                    <EditorialIssueCard
                      comingsoon={true}
                      title={'Coming Soon'}
                      date='MARCH 2021'
                      totalArticles={15}
                      className='mb-10'
                      destination={'/editorial/metamorphosis'}
                      imageThumbnail={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                      descriptions={
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      }
                    />
                  )}
                </div>
                {/* Spacer */}

                {comingsoon && <div className={`stickySpacer`} />}
              </div>
              {/* Card */}
              <div
                id='editorialIssuesList'
                className={`relative w-full h-full space-y-10 ${
                  comingsoon && 'comingsoonAdj'
                }`}
              >
                <EditorialIssueCard
                  issueNo={3}
                  title={'Metamorphosis'}
                  date='MARCH 2021'
                  totalArticles={15}
                  destination={'/editorial/metamorphosis'}
                  imageThumbnail={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                  descriptions={
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  }
                />
                <EditorialIssueCard
                  issueNo={2}
                  title={'Metamorphosis'}
                  date='MARCH 2021'
                  totalArticles={15}
                  destination={'/editorial/metamorphosis'}
                  imageThumbnail={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                  descriptions={
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  }
                />
                <EditorialIssueCard
                  issueNo={1}
                  title={'Metamorphosis'}
                  date='MARCH 2021'
                  totalArticles={15}
                  destination={'/editorial/metamorphosis'}
                  bgColor='#BC9EDF'
                  dark={false}
                  descriptions={
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  }
                />
                <EditorialIssueCard
                  issueNo={0}
                  title={'Under Construction'}
                  date='FEBRUARY 2021'
                  totalArticles={12}
                  destination={'/editorial/uc'}
                  dark={false}
                  imageThumbnail={`/placeholder/dossier-lab-2-3-8.jpg`}
                  descriptions={
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  }
                />
              </div>
            </Container>
          </section>
          {/* Button Sticky */}
          <StickyButton destination='/editorial/search' arrow='right'>
            SEARCH ALL ARTICLES
          </StickyButton>
          <Footer />
        </m.main>
      </LazyMotion>
    </Layout>
  );
}
