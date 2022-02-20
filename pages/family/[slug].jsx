import { useEffect } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Instagram from 'instagram-web-api';
import ScrollContainer from 'react-indiana-drag-scroll';

// Layout
import Layout from '@/components/modules/layout';
import HeaderGap from '@/components/modules/headerGap';
import Footer from '@/components/modules/footer';

// Components
import Arrow from '@/components/utils/arrow';
import FancyLink from '@/components/utils/fancyLink';
import SEO from '@/components/utils/seo';

// Helpers
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import urlFor from '@/helpers/sanity/urlFor';
import { toPlainText } from '@/helpers/functional/toPlainText';

// install Swiper modules
SwiperCore.use([Pagination]);

const FamilySlug = ({
  familyAPI,
  seoAPI,
  familyListAPI,
  footerAPI,
  instagramPosts,
}) => {
  const router = useRouter();
  const [seo] = seoAPI;
  const [family] = familyAPI;
  const [footer] = footerAPI;
  const appContext = useAppContext();

  const dark =  false;

  useEffect(() => {
    console.log(instagramPosts)
    appContext.setHeader({ headerStyle: dark ? 'white' : 'black' });
    window.scroll(0, 0);
    return () => {
      appContext.setHeader({ headerStyle: 'default' });
    };
  }, []);

  return (
    <Layout>
      <SEO
        seo={{
          title: family.title,
          webTitle:
            typeof seo !== 'undefined' && seo.webTitle ? seo.webTitle : '',
          pagelink: router.pathname,
          description:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_description !== 'undefined' &&
            family.seo.seo_description
              ? family.seo.seo_description
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_description !== 'undefined' &&
                seo.seo.seo_description
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_keywords !== 'undefined' &&
            family.seo.seo_keywords
              ? family.seo.seo_keywords
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_keywords !== 'undefined' &&
                seo.seo.seo_keywords
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_image !== 'undefined' &&
            family.seo.seo_image
              ? urlFor(family.seo.seo_image).url()
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_image !== 'undefined' &&
            typeof family.seo.seo_image.name !== 'undefined' &&
            family.seo.seo_image.name
              ? family.seo.seo_image.name
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image.name
              ? seo.seo.seo_image.name
              : '',
        }}
      />
      {/* Header Gap */}
      <HeaderGap />
      <motion.section
        className='w-full setflex-center rounded-t-2xl'
        style={{
          backgroundColor: family.bgColor.hex ? family.bgColor.hex : '#fff',
        }}
        id='rooster'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={{
          initial: { y: '100vh' },
          enter: {
            y: '0%',
            transition: { duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0 },
          },
        }}
      >
        <div className='w-52rem max-md:w-full px-paddingContent max-md:px-5 mb-14 pb-14 border-b border-black setflex-center '>
          <div className='w-full setflex-center'>
            <span className='text-center py-3 font-bold uppercase'>
              {family.title}
            </span>
            <div className='border-b border-black h-px w-full' />
          </div>
          <div className='w-full my-10'>
            <p>{toPlainText(family.description)}</p>
            <div className='flex flex-col w-full mt-20 mb-10 '>
              <div className='w-full border border-black rounded-2xl h-56 p-5'>
                <ScrollContainer
                  className='flex space-x-4 flex-nowrap overflow-x-scroll hide-scrollbar h-full'
                  horizontal={true}
                >
                  {/* {instagramPosts.map(({ node }, id) => (
                    <FancyLink
                      destination={`https://www.instagram.com/p/${node.shortcode}`}
                      blank={true}
                      className='h-full w-auto relative flex-shrink-0'
                      key={id}
                    >
                      <img src={node.thumbnail_src} className='rounded-2xl ' />
                    </FancyLink>
                  ))} */}
                      <img src={'https://instagram.fcgk29-1.fna.fbcdn.net/v/t51.2885-15/271429611_434461895024570_1923218028260432388_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcgk29-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=kEMJpSw0ZwwAX8XmbhY&edm=APU89FABAAAA&ccb=7-4&oh=00_AT-YV8T4k6y9uV056a5lAK6wyB27jXqPagkUW45gWpjRvg&oe=6219C720&_nc_sid=86f79a'} className='rounded-2xl ' />
                </ScrollContainer>
              </div>
              <FancyLink
                destination={family.instagram.link}
                blank={true}
                className='w-full flex justify-between mt-5 hover:opacity-50 transition-opacity duration-300'
              >
                <div className='flex items-center space-x-5'>
                  <div className='relative w-16px h-16px'>
                    <Image
                      src={`/IG.svg`}
                      alt={'Locavore'}
                      layout='fill'
                      objectFit='contain'
                      objectPosition='center'
                    />
                  </div>
                  <span className=' text-base '>@{family.instagram.title}</span>
                </div>
                <div>
                  <Arrow position='right' fill='black' />
                </div>
              </FancyLink>
            </div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <div className='flex flex-col justify-between text-base pr-14 border-r py-7 space-y-4'>
              <p>
                {family.address}
                {` • `}
                <FancyLink
                  destination={family.mapLink}
                  className='whitespace-nowrap hover:opacity-50 transition-opacity duration-300 underline'
                  blank={true}
                >
                  Map
                  <Arrow
                    position='right'
                    fill='black'
                    className=' ml-1 inline-block -translate-y-px'
                  />
                </FancyLink>
              </p>
              <div className='w-full flex flex-col'>
                <FancyLink destination={`tel:${family.phone_number}`}>
                  {family.phone_number}
                </FancyLink>
                <FancyLink destination={`mailto:${family.email}`}>
                  {family.email}
                </FancyLink>
              </div>
              <div className='flex items-center space-x-6'>
                <span className='text-sm'>Visit</span>
                {family.instagram && (
                  <FancyLink
                    destination={family.instagram.link}
                    blank={true}
                    className='relative w-16px h-16px hover:opacity-30 transition-opacity duration-300'
                  >
                    <Image
                      src={`/ig.svg`}
                      alt={family.instagram.title}
                      layout='fill'
                      objectFit='contain'
                      objectPosition='center'
                    />
                  </FancyLink>
                )}
                {family.facebook && (
                  <FancyLink
                    destination={family.facebook.link}
                    blank={true}
                    className='relative w-16px h-16px hover:opacity-50 transition-opacity duration-300'
                  >
                    <Image
                      src={`/FB.svg`}
                      alt={family.facebook.title}
                      layout='fill'
                      objectFit='contain'
                      objectPosition='center'
                    />
                  </FancyLink>
                )}
                {family.waLink && (
                  <FancyLink
                    destination={family.waLink}
                    blank={true}
                    className='relative w-16px h-16px hover:opacity-50 transition-opacity duration-300'
                  >
                    <Image
                      src={`/wa.svg`}
                      alt={family.title}
                      layout='fill'
                      objectFit='contain'
                      objectPosition='center'
                    />
                  </FancyLink>
                )}
              </div>
            </div>
            <div className='h-full flex justify-end items-center relative w-full'>
              <div className='relative w-90% h-90%' id='family-logo'>
                <Image
                  src={urlFor(family.logo).width(750).url()}
                  alt={family.logo.name}
                  className='rounded-2xl'
                  layout='fill'
                  objectFit='contain'
                  loading='eager'
                  priority={true}
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='w-full setflex-center'>
            <FancyLink
              destination={family.booking}
              blank={true}
              className='mt-16 py-3 px-6 text-base tracking-widest border border-black font-bold rounded-xl hover:bg-black hover:text-white transition-all duration-300'
            >
              BOOK NOW
            </FancyLink>
          </div>
        </div>
        <div
          className='relative max-md:hidden w-56rem mb-24 flex flex-wrap'
          id='family-button'
        >
          {familyListAPI.map((familydata, id) => {
            const checkSame = familydata._id === family._id;
            return (
              <FancyLink
                key={id}
                destination={`/family/${familydata.slug.current}`}
                className={`group relative text-center uppercase overflow-hidden bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full ${
                  checkSame ? 'pointer-events-none' : ''
                }`}
                style={{ backgroundColor: family.bgColor.hex }}
              >
                <div className='relative z-2'>{familydata.title}</div>
                <div
                  className='absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-100'
                  style={{ backgroundColor: familydata.bgColor.hex }}
                />
              </FancyLink>
            );
          })}
        </div>
        <div className='hidden max-md:block w-full mt-12'>
          <Arrow className='mx-auto' position='top' />
        </div>
      </motion.section>
      <Footer footer={footer} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await client.fetch(`
      *[_type == "family_list"]
    `);

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const igClient = new Instagram({
    // username: process.env.IG_USERNAME,
    // password: process.env.IG_PASSWORD,
    username: 'tomo__studio',
    password: 'InstaTOMOGram123',
  });

  const familyAPI = await client.fetch(
    `
      *[_type == "family_list" && slug.current == "${params.slug}"] 
    `
  );
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);

  let posts = [];
  try {
    await igClient.login();
    // request photos for a specific instagram user
    const instagram = await igClient.getPhotosByUsername({
      username: 'tomo__studio', // get the instagram
    });

    if (instagram['user']['edge_owner_to_timeline_media']['count'] > 0) {
      // if we receive timeline data back
      // update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram['user']['edge_owner_to_timeline_media']['edges'];
    }
  } catch (err) {
    console.log(
      'Something went wrong while fetching content from Instagram',
      err
    );
  }
  return {
    props: {
      familyAPI,
      seoAPI,
      familyListAPI,
      footerAPI,
      headerAPI,
      instagramPosts: posts,
    },
  };
}

export default FamilySlug;
