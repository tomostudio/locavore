import { useEffect, useState, useRef } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fade } from '@/helpers/preset/transitions';
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

export default function Issue({ issueAPI, seoAPI, footerAPI }) {
  const router = useRouter();
  const [issue] = issueAPI;
  const [seo] = seoAPI;
  const [footer] = footerAPI;

  const articleRef = useRef([]);
  const scrollInd = useRef(null);
  const scrollContainer = useRef(null);

  const [centerCard, setCenterCard] = useState(1);

  const updateScroll = () => {
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

  const [scrollStyle, setScrollStyle] = useState('normal');

  const detectLength = () => {
    if (articleRef.current.length <= 2) {
      setScrollStyle('noscroll');
    } else {
      let totalWidth = 0;
      articleRef.current.forEach((a) => {
        totalWidth += a.offsetWidth;
      });
      setScrollStyle('normal');
      if (totalWidth < window.innerWidth - 300) {
        const centerPos =
          (scrollContainer.current.scrollWidth - window.innerWidth) / 2;
        scrollContainer.current.scrollLeft = centerPos;
      }
    }
  };

  const processedArticle = issue.article.sort((a, b) => {
    return a.articleNumber - b.articleNumber;
  }); // sort article based on article number

  useEffect(() => {
    window.scroll(0, 0);
    detectLength();
    updateScroll();
    window.addEventListener('resize', detectLength, true);
    return () => {
      window.removeEventListener('resize', detectLength, true);
    };
  }, []);

  //check title word count
  const maxLetter = 10;
  const [titleS, setSize] = useState(false);
  useEffect(() => {
    const splitTitle = issue.title.split(' ');

    splitTitle.forEach((word) => {
      setSize(word.length > maxLetter);
    });
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
      <LazyMotion features={domAnimation}>
        <m.section
          initial='initial'
          animate='enter'
          exit='exit'
          variants={fade}
          className='py-10 w-full h-full flex flex-col'
        >
          {/* Title */}
          <Container className='max-md:px-6'>
            <div className='w-full h-full setflex-center'>
              <span className='font-serif italic text-xl'>
                Issue {issue.issueNumber} —{' '}
                {checkMonth(new Date(issue.date).getMonth())}{' '}
                {new Date(issue.date).getFullYear()}
              </span>
              <h1
                className={`font-sans font-normal text-center ${
                  titleS ? 'text-5xl sm:text-7xl md:text-8xl' : ''
                }`}
              >
                {issue.title}
              </h1>
            </div>
          </Container>
          {/* Card
           */}
          <div className='w-full flex' id='editorial-slider'>
            <ScrollContainer
              className={`issue_container flex w-full space-x-7 py-7 px-7 hide-scrollbar ${scrollStyle}`}
              horizontal={true}
              vertical={false}
              hideScrollbars={false}
              onScroll={updateScroll}
              innerRef={scrollContainer}
              nativeMobileScroll={true}
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
                        blursrc={urlFor(data.thumbnail)
                          .blur(2)
                          .format('webp')
                          .width(350)
                          .url()}
                        alt={data.thumbnail.name}
                        className={`group`}
                      />
                    </FancyLink>
                  </div>
                );
              })}
            </ScrollContainer>
          </div>
          {/* Lower Information */}
          <Container className='max-md:px-6'>
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
        </m.section>
      </LazyMotion>
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
