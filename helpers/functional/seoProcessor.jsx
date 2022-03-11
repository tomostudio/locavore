import urlFor from '@/helpers/sanity/urlFor';

const seoProcessor = ({
  inputSEO = '',
  defaultSEO = '',
  webTitle = '',
  title = 'Locavore',
  pagelink = 'https://locavorenext.com',
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

  const meta_keywords =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_keywords !== 'undefined' &&
    inputSEO.seo_keywords
      ? inputSEO.seo_keywords
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_keywords !== 'undefined' &&
        defaultSEO.seo_keywords
      ? defaultSEO.seo_keywords
      : '';

  return {
    title: title,
    pagelink: pagelink,
    webTitle: webTitle,
    description: description,
    meta_keywords: meta_keywords,
    image: image,
    image_alt: image_alt,
  };
};

export default seoProcessor;
// description:
// typeof inputSEO !== 'undefined' &&
// typeof inputSEO.seo_description !== 'undefined' &&
// inputSEO.seo_description
//   ? inputSEO.seo_description
//   : typeof defaultSEO !== 'undefined' &&
//     typeof defaultSEO.seo_description !== 'undefined' &&
//     defaultSEO.seo_description
//   ? defaultSEO.seo_description
//   : '',
// meta_keywords:
// typeof inputSEO !== 'undefined' &&
// typeof inputSEO.seo_keywords !== 'undefined' &&
// inputSEO.seo_keywords
//   ? inputSEO.seo_keywords
//   : typeof defaultSEO !== 'undefined' &&
//     typeof defaultSEO.seo_keywords !== 'undefined' &&
//     defaultSEO.seo_keywords
//   ? defaultSEO.seo_keywords
//   : '',
// image_alt:
// typeof inputSEO !== 'undefined' &&
// typeof inputSEO.seo_image !== 'undefined' &&
// typeof inputSEO.seo_image.name !== 'undefined' &&
// inputSEO.seo_image.name
//   ? inputSEO.seo_image.name
//   : typeof defaultSEO !== 'undefined' &&
//     typeof defaultSEO.seo_image !== 'undefined' &&
//     defaultSEO.seo_image.name
//   ? defaultSEO.seo_image.name
//   : '',
