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
import { useMediaQuery } from '@/helpers/functional/checkMedia';
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

  const [noScroll, setNoScroll] = useState(false);
  // set scroll style status

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

    // Hide Scroll indicator
    const { innerWidth: width, innerHeight: height } = window;
    if (scrollContainer.current.scrollLeft > 50 && width > 600) {
      document.querySelector('#scrollIndicator').classList.add('hide');
    } else {
      document.querySelector('#scrollIndicator').classList.remove('hide');
    }

    // Show Content indicator
    const finalTarget =
      scrollContainer.current.scrollWidth - window.innerWidth - 50;
    if (scrollContainer.current.scrollLeft > finalTarget) {
      document.querySelector('#endIndicator').classList.remove('opacity-0');
    } else {
      document.querySelector('#endIndicator').classList.add('opacity-0');
    }

    updateScrollBar();
  };

  // Update Scroll Bar Position
  const updateScrollBar = () => {
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

  // Detect Page Length
  const detectLength = () => {
    if (articleRef.current.length <= 1) {
      setNoScroll(true);
    } else {
      setNoScroll(false);
    }
  };

  // sort article based on article number
  const processedArticle = issue.article.sort((a, b) => {
    return a.articleNumber - b.articleNumber;
  });

  useEffect(() => {
    // detectLength();
    // updateScroll();
    // window.addEventListener('resize', detectLength, true);
    // window.addEventListener('resize', updateScrollBar, true);
    // window.scroll(0, 0);
    // return () => {
    //   window.removeEventListener('resize', detectLength, true);
    //   window.removeEventListener('resize', updateScrollBar, true);
    // };
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
        title={issue.title}
        pagelink={`editorial/${issue.slug.current}/list`}
        inputSEO={issue.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
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
          className='py-10 w-full h-full flex flex-col no-select-all'
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
                  titleS ? 'text-[2.5rem] sm:text-6xl md:text-8xl' : ''
                }`}
              >
                {issue.title}
              </h1>
            </div>
          </Container>
          {/* Card */}
          <div className='w-full flex relative flex-col' id='editorial-slider'>
            <div
              id='scrollIndicator'
              className={`${
                noScroll ? 'hidden' : ''
              } pointer-events-none w-full absolute top-[50%] translate-y-[-50%] text-left transition-opacity duration-300 max-sm:relative max-sm:top-0 max-sm:translate-y-0 max-sm:left-0 max-sm:w-full max-sm:px-5 max-sm:text-center`}
            >
              <Container>
                <span className='relative sm:animate-fade-left-slower block uppercase leading-none text-xs tracking-widest '>
                  Scroll / Drag
                  {useMediaQuery('(min-width: 600px)') ? <br /> : ' '}
                  Horizontally
                </span>
              </Container>
            </div>
            <div
              id='endIndicator'
              className={`${
                noScroll ? 'hidden' : ''
              } w-full pointer-events-none absolute top-[50%] translate-y-[-50%] text-right transition-opacity duration-300 max-sm:hidden opacity-0`}
            >
              <Container>
                <span className='relative block uppercase leading-none text-xs tracking-widest '>
                  END OF ISSUE {issue.issueNumber}
                </span>
              </Container>
            </div>
            <ScrollContainer
              className={`issue_container relative py-7 w-full hide-scrollbar  ${
                noScroll ? 'single-item' : ''
              }`}
              horizontal={true}
              vertical={false}
              hideScrollbars={false}
              onScroll={updateScroll}
              innerRef={scrollContainer}
              nativeMobileScroll={true}
              draggingClassName={'dragging'}
            >
              <div className='wrapper w-auto flex flex-row relative min-w-full'>
                <div className='spacer' />
                {processedArticle.map(
                  (data, id) => (
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
                              !data.issue.turnOffArticleNumber
                                ? `${data.articleNumber}.`
                                : ''
                            } ${data.title}`}
                            category={data.category.title}
                            timeRead={
                              data.readTime
                                ? timeConvert(data.readTime)
                                : data.timeReadBlog
                                ? data.timeReadBlog !== 0 &&
                                  timeConvert(data.timeReadBlog)
                                : data.timeRead !== 0 &&
                                  timeConvert(data.timeRead)
                            }
                            border={data.category.border}
                            src={
                              data.thumbnail && data.thumbnail.asset
                                ? urlFor(data.thumbnail).width(750).url()
                                : false
                            }
                            blursrc={
                              data.thumbnail && data.thumbnail.asset
                                ? urlFor(data.thumbnail)
                                    .blur(2)
                                    .format('webp')
                                    .width(350)
                                    .url()
                                : false
                            }
                            alt={
                              data.thumbnail && data.thumbnail.asset
                                ? data.thumbnail.name
                                : false
                            }
                            className={`group`}
                          />
                        </FancyLink>
                      </div>
                    )
                )}
                <div className='spacer' />
              </div>
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
                <div className='relative border-b w-full max-w-sm h-px border-black'>
                  <div
                    ref={scrollInd}
                    className={`absolute w-8 h-1 -top-px border border-black bg-black issueindicator ${
                      noScroll ? 'single-item' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </Container>
        </m.section>
      </LazyMotion>
      {/* Button Sticky */}
      <StickyButton destination='/editorial' arrow='left'>
        HOME
      </StickyButton>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
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
