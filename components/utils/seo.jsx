import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const SEO = ({ seo }) => {
  const { title, description, pagelink, image, image_alt, webTitle, meta_keywords } = seo;
  const pagetitle =
    title && webTitle
      ? `${title} | ${webTitle}`
      : `Locavore`;
  const canonicalLink = `https://website.site${
    pagelink ? `${pagelink.startsWith('/') ? '' : '/'}${pagelink}` : ''
  }`;

  return (
    <>
      <NextSeo
        title={pagetitle}
        description={description}
        canonical={canonicalLink}
        openGraph={{
          url: canonicalLink,
          title: pagetitle,
          description: description,
          images: [
            {
              url: image,
              alt: image_alt,
            },
          ],
          site_name: 'Locavore',
        }}
        twitter={{
          site: 'Locavore',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="keywords" content={meta_keywords} />
      </Head>
    </>
  );
};

export default SEO;
