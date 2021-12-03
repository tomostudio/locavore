import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fade } from '@/helpers/preset/transitions';

// Layout
import Layout from '@/components/modules/layout';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';

// Components
import StickyButton from '@/components/modules/stickyButton';
import SEO from '@/components/utils/seo';
import EditorialIssueCard from '@/components/modules/editorial/editorialIssueCard';

// Helpers
import client from '@/helpers/sanity/client';
import { toPlainText } from '@/helpers/functional/toPlainText';
import urlFor from '@/helpers/sanity/urlFor';

export default function Editorial({ issueAPI, seoAPI, editorialAPI }) {
  const [seo] = seoAPI;
  const [editorial] = editorialAPI;

  const dataSoon = issueAPI.filter((data) => data.comingSoon === true);

  const isComingSoon = dataSoon.length > 0 ? true : false; // tanda if there is a comingsoon card or not

  const checkClosest = () => {
    const today = new Date();

    const dataSoon = issueAPI.filter((data) => data.comingSoon === true);

    if (dataSoon.length > 0) {
      const closest = dataSoon.reduce((a, b) => {
        const adiff = new Date(a.date) - today;
        return adiff > 0 && adiff < new Date(b.date) - today ? a : b;
      });

      return closest;
    } else {
      return false;
    }
  };

  useEffect(() => {
    // check if coming soon is enabled or present

    if (isComingSoon) {
      window.scrollTo(0, 315);
      console.log(' coming soon');
    } else {
      window.scrollTo(0, 0);
      console.log('non coming soon');
    }

    return () => {};
  }, []);

  return (
    <Layout>
      <SEO
        seo={{
          title: 'Editorial',
          webTitle: seo.webTitle && seo.webTitle,
          description:
            editorial && editorial.seo && editorial.seo.seo_description
              ? editorial.seo.seo_description
              : seo.seo && seo.seo.seo_description,
          meta_keywords:
            editorial && editorial.seo && editorial.seo.seo_keywords
              ? editorial.seo.seo_keywords
              : seo.seo.seo_keywords && seo.seo.seo_keywords,
          image:
            editorial && editorial.seo && editorial.seo.seo_image
              ? urlFor(editorial.seo.seo_image).url()
              : seo.seo && seo.seo.seo_image && urlFor(seo.seo.seo_image).url(),
          image_alt:
            editorial && editorial.seo && editorial.seo.seo_image.name
              ? editorial.seo.seo_image.name
              : seo.seo && seo.seo.seo_image.name && seo.seo.seo_image.name,
        }}
      />

      <LazyMotion features={domAnimation}>
        <m.main initial='initial' animate='enter' exit='exit' variants={fade}>
          {/* Header Gap */}
          {/* Untuk Content */}
          <section className='pb-10 w-full h-full flex flex-col'>
            <Container className='max-md:px-6'>
              {/* Sticky Container */}
              <div className={`relative w-full`}>
                <div
                  className={`w-full setflex-center  pt-10 comingsoonSticky`}
                >
                  <HeaderGap />
                  {/* Title */}
                  <div className='mb-14'>
                    <h1 className='titlestyle'>
                      Editorial
                      <span className='sub'>Issues</span>Index
                    </h1>
                  </div>
                  {/* // COMING SOON TEST */}
                  {isComingSoon &&
                    new Date(checkClosest().date) > new Date() && (
                      <EditorialIssueCard
                        comingsoon={true}
                        title={checkClosest().title}
                        date={checkClosest().date}
                        dark={checkClosest().dark}
                        bgColor={
                          !checkClosest().thumbnail &&
                          checkClosest().bgColor.hex
                        }
                        className='mb-10'
                        destination={`/editorial/${
                          checkClosest().slug.current
                        }`}
                        imageThumbnail={
                          checkClosest().thumbnail.asset
                            ? urlFor(checkClosest().thumbnail).url()
                            : null
                        }
                      />
                    )}
                </div>
                {isComingSoon && new Date(checkClosest().date) > new Date() && (
                  <div className={`stickySpacer`} />
                )}
                {/* Spacer */}
              </div>
              {/* Card */}
              <div
                id='editorialIssuesList'
                className={`relative w-full h-full space-y-10 ${
                  isComingSoon && new Date(checkClosest().date) > new Date()
                    ? 'comingsoonMargin'
                    : ''
                }`}
              >
                {/* Ini map aja yang ga ada tulisan coming soon  */}
                {issueAPI.reverse().map((data, id) => {
                  if (!data.comingSoon)
                    return (
                      <EditorialIssueCard
                        key={id}
                        issueNo={id}
                        title={data.title}
                        date={data.date}
                        dark={data.dark}
                        bgColor={!data.thumbnail ? data.bgColor.hex : null}
                        totalArticles={data.articleCount}
                        destination={`/editorial/${data.slug.current}`}
                        imageThumbnail={
                          data.thumbnail.asset ? urlFor(data.thumbnail).url() : null
                        }
                        descriptions={<p>{toPlainText(data.description)}</p>}
                      />
                    );
                })}
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

export async function getStaticProps() {
  const issueAPI = await client.fetch(`
                    *[_type == "issue"] {
                      ...,
                      "articleCount": count(*[_type=='article' && references(^._id)])
                    }
                    `);
  const seoAPI = await client.fetch(`
                    *[_type == "settings"]
                    `);
  const editorialAPI = await client.fetch(`
                    *[_type == "editorial"]
                    `);
  return {
    props: {
      issueAPI,
      seoAPI,
      editorialAPI,
    },
  };
}
