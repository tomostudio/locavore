// Helpers
import client from '@/helpers/sanity/client';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import Layout from '@/components/modules/layout';
import SEO from '@/components/utils/seo';
import urlFor from '@/helpers/sanity/urlFor';
import HeaderGap from '@/components/modules/headerGap';
import OpeningArticle from '@/components/modules/editorial/openingArticle';
import Container from '@/components/modules/container';
import FancyLink from '@/components/utils/fancyLink';
import VideoComponent from '@/components/modules/editorial/videoComponent';
import Image from 'next/image';
import GalleryComponent from '@/components/modules/editorial/galleryComponent';
import NextArticle from '@/components/modules/editorial/nextArticle';
import StickyButton from '@/components/modules/stickyButton';
import Footer from '@/components/modules/footer';
import timeConvert from '@/helpers/functional/timeConvert';
import CarousselComponent from '@/components/modules/editorial/carousselComponent';
import { PortableText } from '@portabletext/react';
import Caption from '@/components/modules/editorial/caption';
import { Quote } from '@/helpers/preset/svg';

export default function ArticleSlug({
  articleAPI,
  seoAPI,
  headerAPI,
  footerAPI,
  nextArticle,
}) {
  const [seo] = seoAPI;
  const [footer] = footerAPI;
  const [article] = articleAPI;

  const router = useRouter();
  let layoutFilter =
    article.blog &&
    article.blog
      .filter((item) => item._type === 'editor')
      .map((data, id) => {
        return {
          part: id + 1,
          ...data,
        };
      });
  const [baseUrl, setBaseUrl] = useState();

  const scrolltoview = (slug) => {
    window.scrollTo({
      top:
        document.querySelectorAll(`[data-slug*="${slug}"]`)[0].offsetTop - 60,
      behavior: 'smooth',
    });
  };

  const serializers = {
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p>{children}</p>,
      h1: ({ children }) => <h1 align='left'>{children}</h1>,
      h2: ({ children }) => <h2 align='left'>{children}</h2>,
      h3: ({ children }) => <h3 align='left'>{children}</h3>,
      h4: ({ children }) => <h4 align='left'>{children}</h4>,
      h5: ({ children }) => <h5 align='left'>{children}</h5>,
      h1Center: ({ children }) => <h1 align='center'>{children}</h1>,
      h2Center: ({ children }) => <h2 align='center'>{children}</h2>,
      h3Center: ({ children }) => <h3 align='center'>{children}</h3>,
      h4Center: ({ children }) => <h4 align='center'>{children}</h4>,
      h5Center: ({ children }) => <h5 align='center'>{children}</h5>,
      center: ({ children }) =>
        children[0] === '' ? <br /> : <p align='center'>{children}</p>,
      right: ({ children }) =>
        children[0] === '' ? <br /> : <p align='right'>{children}</p>,
      left: ({ children }) =>
        children[0] === '' ? <br /> : <p align='left'>{children}</p>,
    },
    list: {
      number: ({ children }) => <ol>{children}</ol>,
    },
    types: {
      video: (props) => (
        <VideoComponent video={props.value} article={article} />
      ),
      lineSpacer: () => (
        <div className='line-spacer h-40 setflex-center w-full'>
          <hr
            className='border h-full w-px'
            style={{
              borderColor: article.setColor
                ? article.setColor === 'articleColor'
                  ? article.color.hex
                  : article.setColor === 'categoryColor' &&
                    article.categoryColor &&
                    article.category.color.hex
                : '#D66A51',
            }}
          />
        </div>
      ),
      code: (props) => (
        <div
          className='code'
          dangerouslySetInnerHTML={{ __html: props.value.code }}
        />
      ),
      quote: (props) => (
        <div className='quote flex flex-col'>
          {props.value.option && (
            <div className='relative h-8 w-8 mb-3'>
              <Quote
                className='w-full h-full'
                fill={
                  article.setColor
                    ? article.setColor === 'articleColor'
                      ? article.color.hex
                      : article.setColor === 'categoryColor' &&
                        article.categoryColor &&
                        article.category.color.hex
                    : '#D66A51'
                }
              />
            </div>
          )}
          <PortableText
            value={props.value.content}
            components={{
              block: {
                normal: ({ children }) =>
                  children[0] === '' ? (
                    <br />
                  ) : (
                    <p
                      className={`font-sans font-bold ${
                        props.value.option ? 'text-3xl max-md:text-2xl' : ''
                      }`}
                    >
                      {children}
                    </p>
                  ),
                h1: ({ children }) => (
                  <h1 className='font-sans font-bold'>{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className='font-sans font-bold'>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className='font-sans font-bold'>{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className='font-sans font-bold'>{children}</h4>
                ),
                h5: ({ children }) => (
                  <h5 className='font-sans font-bold'>{children}</h5>
                ),
                center: ({ children }) => (
                  <p className='font-sans font-bold' align='center'>
                    {children}
                  </p>
                ),
                left: ({ children }) => (
                  <p className='font-sans font-bold' align='left'>
                    {children}
                  </p>
                ),
                right: ({ children }) => (
                  <p className='font-sans font-bold' align='right'>
                    {children}
                  </p>
                ),
              },
              list: {
                number: ({ children }) => (
                  <ol
                    className={`list-decimal font-sans font-bold ${
                      props.value.option ? 'text-3xl max-md:text-2xl' : ''
                    }`}
                  >
                    {children}
                  </ol>
                ),
              },
            }}
          />
        </div>
      ),
      img: (props) => (
        <div className={`image ${!props.value.option ? '' : '!px-0'}`}>
          <div
            className='relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1 rounded-xl overflow-hidden'
            style={{
              backgroundColor: `rgba(208,208,208, 1)`,
            }}
          >
            <Image
              src={urlFor(props.value.image).url()}
              alt={props.value.image.name}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              placeholder='blur'
              blurDataURL={urlFor(props.value.image)
                .blur(2)
                .format('webp')
                .saturation(-100)
                .width(100)
                .url()}
            />
          </div>
          {props.value.name && (
            <Caption
              option={props.value.option}
              caption={props.value.name}
              article={article}
            />
          )}
        </div>
      ),
      columnBlock: (props) => (
        <div className={`column ${!props.value.padding ? '' : '!px-0'}`}>
          <div
            className={
              props.value.left.columnLeft === 'blank' ? 'max-md:hidden' : ''
            }
          >
            {props.value.left.columnLeft === 'block' ? (
              <div className='w-full h-full'>
                <PortableText
                  value={props.value.left.blockLeft}
                  components={{
                    block: {
                      normal: ({ children }) =>
                        children[0] === '' ? <br /> : <p>{children}</p>,
                      h1: ({ children }) => <h1>{children}</h1>,
                      h2: ({ children }) => <h2>{children}</h2>,
                      h3: ({ children }) => <h3>{children}</h3>,
                      h4: ({ children }) => <h4>{children}</h4>,
                      h5: ({ children }) => <h5>{children}</h5>,
                      center: ({ children }) => (
                        <p align='center'>{children}</p>
                      ),
                      left: ({ children }) => <p align='left'>{children}</p>,
                      right: ({ children }) => <p align='right'>{children}</p>,
                    },
                    list: {
                      number: ({ children }) => (
                        <ol className='list-decimal'>{children}</ol>
                      ),
                    },
                  }}
                />
              </div>
            ) : props.value.left.columnLeft === 'image' ? (
              <div
                className='relative min-h-16rem rounded-xl overflow-hidden'
                style={{
                  backgroundColor: `rgba(208,208,208, 1)`,
                }}
              >
                <Image
                  src={urlFor(props.value.left.imageLeft).url()}
                  alt={props.value.left.imageLeft.name}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  placeholder='blur'
                  blurDataURL={urlFor(props.value.left.imageLeft)
                    .blur(2)
                    .format('webp')
                    .saturation(-100)
                    .width(100)
                    .url()}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              props.value.left.columnRight === 'blank' ? 'max-md:hidden' : ''
            }
          >
            {props.value.right.columnRight === 'block' ? (
              <div className='w-full h-full'>
                <PortableText
                  value={props.value.right.blockRight}
                  components={{
                    block: {
                      normal: ({ children }) =>
                        children[0] === '' ? <br /> : <p>{children}</p>,
                      h1: ({ children }) => <h1>{children}</h1>,
                      h2: ({ children }) => <h2>{children}</h2>,
                      h3: ({ children }) => <h3>{children}</h3>,
                      h4: ({ children }) => <h4>{children}</h4>,
                      h5: ({ children }) => <h5>{children}</h5>,
                      center: ({ children }) => (
                        <p align='center'>{children}</p>
                      ),
                      left: ({ children }) => <p align='left'>{children}</p>,
                      right: ({ children }) => <p align='right'>{children}</p>,
                    },
                    list: {
                      number: ({ children }) => (
                        <ol className='list-decimal'>{children}</ol>
                      ),
                    },
                  }}
                />
              </div>
            ) : props.value.right.columnRight === 'image' ? (
              <div
                className='relative min-h-16rem rounded-xl overflow-hidden'
                style={{
                  backgroundColor: `rgba(208,208,208, 1)`,
                }}
              >
                <Image
                  src={urlFor(props.value.right.imageRight).url()}
                  alt={props.value.right.imageRight.name}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  placeholder='blur'
                  blurDataURL={urlFor(props.value.right.imageRight)
                    .blur(2)
                    .format('webp')
                    .saturation(-100)
                    .width(100)
                    .url()}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ),
    },
    marks: {
      changeColor: (props) => (
        <span style={{ color: props.value.color.hex }}>{props.children}</span>
      ),
      backgroundColor: (props) => (
        <span style={{ backgroundColor: props.value.color.hex }}>
          {props.children}
        </span>
      ),
      largerSize: (props) => (
        <span style={{ fontSize: '1.5em' }}>{props.children}</span>
      ),
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
      fontSize: (props) => (
        <span style={{ fontSize: props.value.size }}>{props.children}</span>
      ),
      font: (props) => (
        <span
          className={
            props.value.type === 'display' ? 'font-default' : props.value.type
          }
        >
          {props.children}
        </span>
      ),
    },
  };

  useEffect(() => {
    window.scroll(0, 0);
    setBaseUrl(window.location.href);
    return () => {};
  }, []);

  return (
    <Layout>
      <SEO
        seo={{
          title: article.title,
          webTitle: seo.webTitle ? seo.webTitle : '',
          pagelink: router.pathname,
          description:
            article.seo && article.seo.seo_description
              ? article.seo.seo_description
              : seo.seo && seo.seo.seo_description && seo.seo.seo_description,
          meta_keywords:
            article.seo && article.seo.seo_keywords
              ? article.seo.seo_keywords
              : seo.seo && seo.seo.seo_keywords && seo.seo.seo_keywords,
          image:
            article.seo && article.seo.seo_image
              ? urlFor(article.seo.seo_image).url()
              : seo.seo && seo.seo.seo_image && urlFor(seo.seo.seo_image).url(),
          image_alt:
            article.seo && article.seo.seo_image.name
              ? article.seo.seo_image.name
              : seo.seo && seo.seo.seo_image.name && seo.seo.seo_image.name,
        }}
      />

      {/* Header Gap */}
      <HeaderGap />

      {/* Untuk Content */}
      <OpeningArticle general={seo} article={article} baseUrl={baseUrl} />

      {article.layout === 'blog' &&
        (layoutFilter && layoutFilter[0].showTitle ? (
          <section className='mt-12'>
            <Container>
              <div>
                <div
                  className='flex flex-col space-y-2 max-md:mt-5'
                  style={{
                    color: article.setColor
                      ? article.setColor === 'articleColor'
                        ? article.color.hex
                        : article.setColor === 'categoryColor' &&
                          article.categoryColor &&
                          article.category.color.hex
                      : '#D66A51',
                  }}
                >
                  {layoutFilter &&
                    layoutFilter.map(
                      (data, i) =>
                        data.showTitle && (
                          <div key={i}>
                            <span className='block font-serif italic'>
                              Part {data.part}
                            </span>
                            <FancyLink
                              onClick={() =>
                                scrolltoview(
                                  data.title
                                    .toLowerCase()
                                    .replace(/ /g, '-')
                                    .replace(/[-]+/g, '-')
                                    .replace(/[^\w-]+/g, '')
                                )
                              }
                              className='font-bold font-serif border-b'
                              style={{
                                borderColor: article.setColor
                                  ? article.setColor === 'articleColor'
                                    ? article.color.hex
                                    : article.setColor === 'categoryColor' &&
                                      article.categoryColor &&
                                      article.category.color.hex
                                  : '#D66A51',
                              }}
                            >
                              {data.title}
                            </FancyLink>
                          </div>
                        )
                    )}
                </div>
              </div>
            </Container>
          </section>
        ) : (
          <></>
        ))}
      <section className='mt-12 space-y-12 w-full h-full'>
        {article.layout === 'blog' && article.blog ? (
          article.blog.map((data, i) =>
            data._type === 'editor' ? (
              <div
                data-slug={data.title
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[-]+/g, '-')
                  .replace(/[^\w-]+/g, '')}
                className='w-full h-auto px-8 py-4 max-md:p-2 setflex-center'
                style={{
                  background: data.border
                    ? data.color
                      ? data.color.hex
                      : article.setColor
                      ? article.setColor === 'articleColor'
                        ? article.color && article.color.hex
                        : article.setColor === 'categoryColor' &&
                          article.categoryColor &&
                          article.category.color.hex
                      : '#D66A51'
                    : 'none',
                }}
                key={i}
              >
                {/* Orange Component */}
                <div className='w-full h-full bg-white rounded-2xl py-14 max-md:py-7 setflex-center max-w-screen-xl'>
                  <div className='w-content max-md:w-full max-md:px-4'>
                    {/* Title */}
                    {data.showTitle && (
                      <div
                        className='font-serif text-center font-bold mb-10 max-md:mb-7'
                        style={{
                          color: data.color
                            ? data.color.hex
                            : article.setColor
                            ? article.setColor === 'articleColor'
                              ? article.color.hex
                              : article.setColor === 'categoryColor' &&
                                article.categoryColor &&
                                article.category.color.hex
                            : '#D66A51',
                        }}
                      >
                        <span className='block italic'>
                          Part{' '}
                          {layoutFilter &&
                            layoutFilter.find(
                              (item) =>
                                item.title
                                  .toLowerCase()
                                  .replace(/ /g, '-')
                                  .replace(/[-]+/g, '-')
                                  .replace(/[^\w-]+/g, '') ===
                                data.title
                                  .toLowerCase()
                                  .replace(/ /g, '-')
                                  .replace(/[-]+/g, '-')
                                  .replace(/[^\w-]+/g, '')
                            ).part}
                        </span>
                        <span className='block'>{data.title}</span>
                      </div>
                    )}
                    <div className='editor-styling blog'>
                      <PortableText
                        value={data.content}
                        components={serializers}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : data._type === 'gallery' && data.gallery ? (
              <Fragment key={i}>
                <GalleryComponent gallery={data} article={article} />
              </Fragment>
            ) : data._type === 'video' ? (
              <div className='max-w-screen-xl mx-auto w-full' key={i}>
                {/* Video */}
                <div className='relative w-full max-w-800px mx-auto flex flex-col space-y-3'>
                  <VideoComponent video={data} article={article} />
                </div>
              </div>
            ) : data._type === 'imageComponent' ? (
              <div className={`w-full h-auto setflex-center`} key={i}>
                <div
                  className={`h-auto setflex-center ${
                    !data.option ? 'w-content max-md:w-full px-20' : 'w-full'
                  }`}
                >
                  <div
                    className={`relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1 rounded-xl overflow-hidden`}
                    style={{
                      backgroundColor: `rgba(208,208,208, 1)`,
                    }}
                  >
                    <Image
                      src={urlFor(data.image).width(1500).url()}
                      alt={data.image.name}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                      placeholder='blur'
                      blurDataURL={urlFor(data.image)
                        .blur(2)
                        .format('webp')
                        .width(500)
                        .url()}
                    />
                  </div>
                  {data.description && (
                    <div className='w-content mx-auto max-md:w-full max-md:px-4'>
                      <Caption
                        option={data.option}
                        caption={data.description}
                        article={article}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Fragment key={i}></Fragment>
            )
          )
        ) : article.layout === 'video' && article.video ? (
          <VideoComponent video={article.video} article={article} />
        ) : article.layout === 'gallery' && article.gallery ? (
          <GalleryComponent gallery={article} article={article} />
        ) : article.layout === 'caroussel' && article.caroussel ? (
          <CarousselComponent caroussel={article.caroussel} />
        ) : (
          <></>
        )}
      </section>
      {/* Card Next Article */}
      <NextArticle
        bgColor={nextArticle.article.category.color.hex}
        title={`${
          !nextArticle.turnOffArticleNumber &&
          `${nextArticle.article.articleNumber}.`
        } ${nextArticle.article.title}`}
        category={nextArticle.article.category.title}
        timeRead={
          nextArticle.article.readTime
            ? timeConvert(nextArticle.article.readTime)
            : nextArticle.article.timeReadBlog
            ? nextArticle.article.timeReadBlog !== 0 &&
              timeConvert(nextArticle.article.timeReadBlog)
            : nextArticle.article.timeRead !== 0 &&
              timeConvert(nextArticle.article.timeRead)
        }
        thumbnail={urlFor(nextArticle.article.thumbnail).width(1000).url()}
        blursrc={urlFor(nextArticle.article.thumbnail)
          .blur(2)
          .format('webp')
          .saturation(-100)
          .width(200)
          .url()}
        border={nextArticle.article.category.border}
        alt={nextArticle.article.thumbnail.name}
        destination={`/editorial/${nextArticle.editorial_slug}/${nextArticle.article.slug.current}`}
      />
      {/* Button Sticky */}
      <StickyButton
        className={nextArticle === null && `mb-5 mt-10`}
        destination={`/editorial/${article.issue.slug.current}/list`}
        arrow='left'
      >
        ISSUE {article.issue.issueNumber}
      </StickyButton>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "article"] {
          ...,
          issue->,
          category->,
        }
      `);

  const paths = res.map((data) => ({
    params: {
      article_slug: data.slug.current.toString(),
      previewData: data.slug,
      articleNumber: data.articleNumber,
      editorial_slug: data.issue.slug.current.toString(),
      ...data,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let nextArticle = {};
  const articleAPI = await client.fetch(
    `
        *[_type == "article" && slug.current == "${params.article_slug}"] {
          ...,
          issue->,
          category->,
          "timeRead": round(length(pt::text(description)) / 5 / 180 ),
          "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
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

  const next = await client.fetch(
    `
        *[_type == "issue" && slug.current ==  "${params.editorial_slug}"] {
          ...,
          "article": *[_type=='article' && references(^._id) ] | order(articleNumber asc) {
            ...,
            category->,
            "timeRead": round(length(pt::text(description)) / 5 / 180 ),
            "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
          }
        }
      `
  );

  const processedArticle = next[0].article.sort((a, b) => {
    return a.articleNumber - b.articleNumber;
  }); // sort article based on article number

  const nextArticleIndex =
    processedArticle.indexOf(
      processedArticle.find(({ slug }) => slug.current == params.article_slug)
    ) + 1;

  if (nextArticleIndex < processedArticle.length) {
    nextArticle = {
      editorial_slug: params.editorial_slug,
      article: processedArticle[nextArticleIndex],
      turnOffArticleNumber: next[0].turnOffArticleNumber,
    };
  } else {
    nextArticle = {
      editorial_slug: params.editorial_slug,
      article: processedArticle[0],
      turnOffArticleNumber: next[0].turnOffArticleNumber,
    };
  }

  return {
    props: {
      articleAPI,
      seoAPI,
      headerAPI,
      footerAPI,
      nextArticleIndex,
      processedArticle,
      nextArticle,
    },
  };
}
