import React from 'react'
import { NextSeo } from 'next-seo'
import urlFor from '@/helpers/sanity/urlFor'
import { absoluteUrl } from '@/helpers/seo/siteConfig'

const SEO = ({
  inputSEO = '',
  defaultSEO = '',
  webTitle = '',
  title = 'Locavore',
  pagelink = '/',
  // Optional absolute-URL image for pages whose hero isn't a Sanity asset
  // (e.g. the NXT guides). Shape: { url, alt, width, height }.
  image: imageOverride,
  type = 'website',
}) => {
  const description =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_description !== 'undefined' &&
    inputSEO.seo_description
      ? inputSEO.seo_description // Check and Get Input
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_description !== 'undefined' &&
        defaultSEO.seo_description
      ? defaultSEO.seo_description // Check and Get Default
      : '' // Insert Blank
  const image =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_image !== 'undefined' &&
    typeof inputSEO.seo_image.asset !== 'undefined' &&
    inputSEO.seo_image
      ? urlFor(inputSEO.seo_image).format('jpg').quality(80).width(1200).url() // Check and Get Input
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_image !== 'undefined' &&
        typeof defaultSEO.seo_image.asset !== 'undefined' &&
        defaultSEO.seo_image
      ? urlFor(defaultSEO.seo_image).format('jpg').quality(80).width(1200).url() // Check and Get Default
      : '' // Insert Blank

  const image_alt =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_image !== 'undefined' &&
    typeof inputSEO.seo_image.name !== 'undefined' &&
    inputSEO.seo_image.name
      ? inputSEO.seo_image.name
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_image !== 'undefined' &&
        defaultSEO.seo_image.name
      ? defaultSEO.seo_image.name
      : ''

  const ogImage = imageOverride && imageOverride.url ? imageOverride.url : image
  const ogImageAlt =
    imageOverride && imageOverride.alt ? imageOverride.alt : image_alt

  const pagetitle = title && webTitle ? `${title} • ${webTitle}` : `Locavore®`
  const canonicalLink = absoluteUrl(pagelink)

  return (
    <NextSeo
      title={pagetitle}
      description={description}
      canonical={canonicalLink}
      openGraph={{
        url: canonicalLink,
        title: pagetitle,
        description: description,
        type,
        // An empty og:image is worse than none: crawlers treat it as broken.
        images: ogImage
          ? [
              {
                url: ogImage,
                alt: ogImageAlt,
                width: (imageOverride && imageOverride.width) || 1200,
                height: (imageOverride && imageOverride.height) || 628,
              },
            ]
          : [],
        site_name: 'Locavore',
      }}
      twitter={{
        site: 'Locavore',
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default SEO
