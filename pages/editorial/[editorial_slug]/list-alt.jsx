import { useEffect, useState, useRef } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useRouter } from 'next/router';

// Layout
import Layout from '@/components/modules/layout';
import HeaderGap from '@/components/modules/headerGap';
import Footer from '@/components/modules/footer';

// Components
import ArticleCard from '@/components/modules/editorial/articleCard';
import SEO from '@/components/utils/seo';
import FancyLink from '@/components/utils/fancyLink';
import StickyButton from '@/components/modules/stickyButton';
import Container from '@/components/modules/container';

// Helpers
import client from '@/helpers/sanity/client';
import checkMonth from '@/helpers/functional/checkMonth';
import urlFor from '@/helpers/sanity/urlFor';
import timeConvert from '@/helpers/functional/timeConvert';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Issue({ issueAPI, seoAPI, footerAPI }) {
  const router = useRouter();
  const [issue] = issueAPI;
  const [seo] = seoAPI;
  const [footer] = footerAPI;

  const articleRef = useRef([]);
  const scrollInd = useRef(null);
  const scrollContainer = useRef(null);

  const contentWrapperRef = useRef(null);

  const [centerCard, setCenterCard] = useState(1);

  const updateArticleRotation = () => {
    articleRef.current.forEach((card, id) => {
      // get window position relative to center (Horizontal)
      const fromCenter =
        -50 +
        Math.round(
          ((card.getBoundingClientRect().x +
            card.getBoundingClientRect().width / 2) /
            window.innerWidth) *
            100
        );

      // update card rotation
      const rotatationTarget = card.querySelector('a');
      rotatationTarget.style.transform = `rotate(${
        (fromCenter / 100) * 7.5
      }deg)`;

      // set center item
      if (fromCenter > -15 && fromCenter < 15) {
        setCenterCard(id + 1);
      }
    });
  };

  const updateScroll = () => {
    updateArticleRotation();
    // update scroll bar position
    const currentScroll =
      Math.round(
        Math.min(
          (scrollContainer.current.scrollLeft /
            (scrollContainer.current.scrollWidth - window.innerWidth)) *
            10000,
          10000
        )
      ) / 100;

    const indWidth = scrollInd.current.offsetWidth;
    const parentWidth = scrollInd.current.parentElement.offsetWidth;
    const scrollMove = (parentWidth - indWidth) * (currentScroll / 100);
    scrollInd.current.style.transform = `translateX(${scrollMove}px)`;
  };

  const updateScroll2 = (e) => {
    updateArticleRotation();
    console.log('check scroll', e);

    // on scroll convert container visibility to wrapper horizontal movement (transform x);

    // also convert to scroll indicator
  };

  const [stickyTopVal, setStickyTopVal] = useState(0);
  const [containerHeight, setContHeight] = useState(1200);

  // Width To Height Multipler
  const _multiplier = 1.5;

  const setupContainer = () => {
    updateArticleRotation();
    detectLength();
    //Get Card Wrapper Height
    const cardHeight =
      contentWrapperRef.current.querySelector('.article_wrapper').clientHeight;
    const topHeight = (window.innerHeight - cardHeight) / 2;
    setStickyTopVal(topHeight);

    //Get Wrapper Width
    const wrapperWidth = contentWrapperRef.current.clientWidth;
    setContHeight(wrapperWidth * _multiplier);
  };

  // Detect The Length of the Scroll and Card Number to see if scroll is required.
  const [scrollStyle, setScrollStyle] = useState('normal');

  const detectLength = () => {
    // Get Total Width
    let totalWidth = 0;
    articleRef.current.forEach((a) => {
      totalWidth += a.offsetWidth;
    });

    // disable scroll if the total width of the card is less than the window.
    if (totalWidth < window.innerWidth - 300) {
    }
    // Adjust styling so the card is in the center

    if (articleRef.current.length <= 2) {
      setScrollStyle('noscroll');
    } else {
      //Get Width
      setScrollStyle('normal');
    }
  };

  // sort article based on article number
  const processedArticle = issue.article.sort((a, b) => {
    return a.articleNumber - b.articleNumber;
  });

  useEffect(() => {
    window.scroll(0, 0);
    setupContainer();
    window.addEventListener('resize', setupContainer, true);
    window.addEventListener('scroll', updateScroll2, true);
    return () => {
      window.removeEventListener('scroll', updateScroll2, true);
      window.removeEventListener('resize', setupContainer, true);
    };
  }, []);

  return (
    <Layout>
      <SEO
        seo={{
          title: issue.title,
          webTitle:
            typeof seo !== 'undefined' && seo.webTitle ? seo.webTitle : '',
          pagelink: router.pathname,
          description:
            typeof issue.seo !== 'undefined' &&
            typeof issue.seo.seo_description !== 'undefined' &&
            issue.seo.seo_description
              ? issue.seo.seo_description
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_description !== 'undefined' &&
                seo.seo.seo_description
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof issue.seo !== 'undefined' &&
            typeof issue.seo.seo_keywords !== 'undefined' &&
            issue.seo.seo_keywords
              ? issue.seo.seo_keywords
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_keywords !== 'undefined' &&
                seo.seo.seo_keywords
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof issue.seo !== 'undefined' &&
            typeof issue.seo.seo_image !== 'undefined' &&
            issue.seo.seo_image
              ? urlFor(issue.seo.seo_image).url()
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof issue.seo !== 'undefined' &&
            typeof issue.seo.seo_image !== 'undefined' &&
            typeof issue.seo.seo_image.name !== 'undefined' &&
            issue.seo.seo_image.name
              ? issue.seo.seo_image.name
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image.name
              ? seo.seo.seo_image.name
              : '',
        }}
      />
      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className='py-10 w-full h-full flex flex-col'>
        {/* Title */}
        <Container className='max-md:px-6'>
          <div className='w-full h-full setflex-center'>
            <span className='font-serif italic text-xl'>
              Issue {issue.issueNumber} —{' '}
              {checkMonth(new Date(issue.date).getMonth())}{' '}
              {new Date(issue.date).getFullYear()}
            </span>
            <h1 className=' font-sans font-normal max-md:break-all max-md:text-center'>
              {issue.title}
            </h1>
          </div>
        </Container>
      </section>
      <section
        id='issue-content-wrapper'
        style={{ height: `${containerHeight}px` }}
        ref={contentWrapperRef}
      >
        <div
          className='w-full flex flex-col'
          id='editorial-slider'
          style={{ top: `${stickyTopVal}px` }}
        >
          {/* Card */}
          <div
            className={`issue_container flex space-x-7 ${scrollStyle}`}
            // onScroll={updateScroll}
          >
            {processedArticle.map((data, id) => {
              return (
                <div
                  className='article_wrapper'
                  key={id}
                  ref={(el) => (articleRef.current[id] = el)}
                >
                  <FancyLink
                    destination={`/editorial/${issue.slug.current}/${data.slug.current}`}
                    className={`group`}
                  >
                    <ArticleCard
                      bgColor={data.category.color.hex}
                      title={`${
                        !data.issue.turnOffArticleNumber &&
                        `${data.articleNumber}.`
                      } ${data.title}`}
                      category={data.category.title}
                      timeRead={
                        data.readTime
                          ? timeConvert(data.readTime)
                          : data.timeReadBlog
                          ? data.timeReadBlog !== 0 &&
                            timeConvert(data.timeReadBlog)
                          : data.timeRead !== 0 && timeConvert(data.timeRead)
                      }
                      border={data.category.border}
                      src={urlFor(data.thumbnail).width(750).url()}
                      alt={data.thumbnail.name}
                      className={`group`}
                    />
                  </FancyLink>
                </div>
              );
            })}
          </div>
          {/* Lower Information */}
          <Container className='max-md:px-6 pb-7'>
            <div className='w-full setflex-center'>
              <div className='mb-5 text-xs'>
                <span className='font-bold'>{centerCard}</span>
                {` — `}
                <span>{articleRef.current.length}</span>
              </div>
              <div className='relative w-full setflex-center'>
                <div className='relative border-b w-s-50 max-w-sm max-md:w-full h-px border-black'>
                  <div
                    ref={scrollInd}
                    className={`absolute w-8 h-1 -top-px border border-black bg-black issueindicator ${scrollStyle}`}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      {/* Button Sticky */}
      <StickyButton destination='/editorial' arrow='left'>
        EDITORIAL INDEX
      </StickyButton>
      <Footer footer={footer} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "issue"]
      `);

  const paths = res.map((data) => ({
    params: { editorial_slug: data.slug.current.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const issueAPI = await client.fetch(
    `
        *[_type == "issue" && slug.current ==  "${params.editorial_slug}"] {
          ...,
          "article": *[_type=='article' && references(^._id)] | order(articleNumber asc) {
            ...,
            issue->,
            category->,
            "timeRead": round(length(pt::text(description)) / 5 / 180 ),
            "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
          }
        }
      `
  );
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  return {
    props: {
      issueAPI,
      seoAPI,
      footerAPI,
      headerAPI,
    },
  };
}
