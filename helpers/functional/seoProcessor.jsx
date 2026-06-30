import urlFor from '@/helpers/sanity/urlFor';
import { absoluteUrl } from '@/helpers/seo/siteConfig';

const seoProcessor = ({
  inputSEO = '',
  defaultSEO = '',
  webTitle = '',
  title = 'Locavore',
  pagelink = '/',
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
      : ''; // Insert Blank
  const image =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_image !== 'undefined' &&
    typeof inputSEO.seo_image.asset !== 'undefined' &&
    inputSEO.seo_image
      ? urlFor(inputSEO.seo_image).url() // Check and Get Input
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_image !== 'undefined' &&
        typeof defaultSEO.seo_image.asset !== 'undefined' &&
        defaultSEO.seo_image
      ? urlFor(defaultSEO.seo_image).url() // Check and Get Default
      : ''; // Insert Blank

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
      : '';

  return {
    title: title,
    pagelink: pagelink,
    canonical: absoluteUrl(pagelink),
    webTitle: webTitle,
    description: description,
    image: image,
    image_alt: image_alt,
  };
};

export default seoProcessor;
