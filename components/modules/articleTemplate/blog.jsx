import { Fragment, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import PillButton from '@/components/modules/pillButton'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import StickyButton from '@/components/modules/stickyButton'
import NextArticle from '@/components/modules/editorial/nextArticle'
import SEO from '@/components/utils/seo'

// Helpers
import FancyLink from '@/components/utils/fancyLink'
import urlFor from '@/helpers/sanity/urlFor'
import timeConvert from '@/helpers/functional/timeConvert'
import VideoComponent from '../editorial/videoComponent'

export default function Blog({ article, seo, footer, nextArticle }) {
  const router = useRouter()
  let layoutFilter =
    article.blog &&
    article.blog
      .filter((item) => item._type === 'orange' || item._type === 'white')
      .map((data, id) => {
        return {
          part: id + 1,
          ...data,
        }
      })
  const [baseUrl, setBaseUrl] = useState()
  const [statusVideo, setStatusVideo] = useState(false)
  const scrolltoview = (slug) => {
    const element = document.querySelector(`[data-slug*="${slug}"]`)
    const headerOffset = 60
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top:
        document.querySelectorAll(`[data-slug*="${slug}"]`)[0].offsetTop - 60,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.scroll(0, 0)
    setBaseUrl(window.location.href)
    return () => {}
  }, [])

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

      <section className="">
        <Container>
          <div>
            <div
              className="flex flex-col space-y-1 max-md:mt-5"
              style={{
                color: article.categoryColor
                  ? article.category.color.hex
                  : '#D66A51',
              }}
            >
              {layoutFilter &&
                layoutFilter.map((data, i) => (
                  <div key={i}>
                    <span className="block font-serif italic">
                      Part {data.part}
                    </span>
                    <FancyLink
                      onClick={() =>
                        scrolltoview(
                          data.title
                            .toLowerCase()
                            .replace(/ /g, '-')
                            .replace(/[-]+/g, '-')
                            .replace(/[^\w-]+/g, ''),
                        )
                      }
                      className="font-bold font-serif border-b"
                      style={{
                        borderColor: article.categoryColor
                          ? article.category.color.hex
                          : '#D66A51',
                      }}
                    >
                      {data.title}
                    </FancyLink>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-14 space-y-14 w-full h-full">
        {article.blog &&
          article.blog.map((data, i) =>
            data._type === 'orange' ? (
              <>
                {/* Orange Component */}
                <div
                  data-slug={data.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[-]+/g, '-')
                    .replace(/[^\w-]+/g, '')}
                  className="w-full h-auto px-8 py-4 max-md:p-2"
                  style={{
                    background: article.categoryColor
                      ? article.category.color.hex
                      : data.color
                      ? data.color.hex && data.color.hex
                      : '#D66A51',
                  }}
                  key={i}
                >
                  <div className="w-full h-full bg-white rounded-2xl py-14 max-md:py-7 setflex-center">
                    <div className="w-content max-md:w-full max-md:px-4 max-md:space-y-7 space-y-10">
                      {/* Title */}
                      <div className="font-serif text-center font-bold">
                        <span className="block italic">
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
                                  .replace(/[^\w-]+/g, ''),
                            ).part}
                        </span>
                        {data.title}
                      </div>
                      {data.content &&
                        data.content.map((content, id) =>
                          content._type === 'block' ? (
                            <p
                              className="px-paddingContent max-md:p-0"
                              key={id}
                            >
                              {content.children
                                .map((child) => child.text)
                                .join('')}
                            </p>
                          ) : content._type === 'img' ? (
                            <>
                              {/* Image */}
                              <div
                                className={`w-full h-auto max-md:p-0 ${
                                  !content.option && 'px-paddingContent'
                                }`}
                                key={id}
                              >
                                <div className="relative w-full h-80">
                                  <Image
                                    src={urlFor(content.image).url()}
                                    alt={content.image.name}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    placeholder="blur"
                                    blurDataURL={urlFor(content.image)
                                      .blur(2)
                                      .format('webp')
                                      .saturation(-100)
                                      .width(100)
                                      .url()}
                                  />
                                </div>
                                {content.name && (
                                  <div
                                    className={`flex items-end max-md:items-start w-full mt-3 ${
                                      content.option &&
                                      'px-paddingContent max-md:p-0'
                                    }`}
                                  >
                                    <div
                                      className="w-10 h-5 border-b-2 border-l-2 mr-4"
                                      style={{
                                        borderColor: article.categoryColor
                                          ? article.category.color.hex
                                          : '#D66A51',
                                      }}
                                    />
                                    <span className="w-full font-serif text-sm font-bold">
                                      {content.name}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </>
                          ) : (
                            content._type === 'blockquote' && (
                              <p
                                className="font-sans font-bold uppercase px-paddingContent max-md:p-0"
                                key={id}
                              >
                                {content.content}
                              </p>
                            )
                          ),
                        )}
                    </div>
                  </div>
                </div>
              </>
            ) : data._type === 'white' ? (
              <>
                {/* White Component */}
                <div
                  data-slug={data.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[-]+/g, '-')
                    .replace(/[^\w-]+/g, '')}
                  className="w-full h-auto px-8 max-md:px-6 setflex-center"
                  key={i}
                >
                  <div className="w-content max-md:w-full space-y-10 max-md:space-y-7">
                    {/* Title */}
                    <div className="font-serif text-center font-bold">
                      <span className="block italic">
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
                                .replace(/[^\w-]+/g, ''),
                          ).part}
                      </span>
                      {data.title}
                    </div>
                    {data.content &&
                      data.content.map((content, id) =>
                        content._type === 'block' ? (
                          <p className="px-paddingContent max-md:p-0" key={id}>
                            {content.children
                              .map((child) => child.text)
                              .join('')}
                          </p>
                        ) : content._type === 'img' ? (
                          <>
                            {/* Image */}
                            <div
                              className={`w-full h-auto max-md:p-0 ${
                                !content.option && 'px-paddingContent'
                              }`}
                              key={id}
                            >
                              <div className="relative w-full h-80">
                                <Image
                                  src={urlFor(content.image).url()}
                                  alt={content.image.name}
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center"
                                  placeholder="blur"
                                  blurDataURL={urlFor(content.image)
                                    .blur(2)
                                    .format('webp')
                                    .saturation(-100)
                                    .width(100)
                                    .url()}
                                />
                              </div>
                              {content.name && (
                                <div
                                  className={`flex items-end max-md:items-start w-full mt-3 ${
                                    content.option &&
                                    'px-paddingContent max-md:p-0'
                                  }`}
                                >
                                  <div
                                    className="w-10 h-5 border-b-2 border-l-2 mr-4"
                                    style={{
                                      borderColor: article.categoryColor
                                        ? article.category.color.hex
                                        : '#D66A51',
                                    }}
                                  />
                                  <span className="w-full font-serif text-sm font-bold">
                                    {content.name}
                                  </span>
                                </div>
                              )}
                            </div>
                          </>
                        ) : (
                          content._type === 'quote' && (
                            <>
                              <div
                                className="h-40 setflex-center w-full"
                                key={id}
                              >
                                <hr
                                  className="border h-full w-px"
                                  style={{
                                    borderColor: article.categoryColor
                                      ? article.category.color.hex
                                      : '#D66A51',
                                  }}
                                />
                              </div>
                              <div className="relative h-32px w-32px mb-3">
                                <Image
                                  src={`/quote.png`}
                                  alt="Locavore"
                                  layout="fill"
                                  objectFit="contain"
                                  objectPosition="center"
                                />
                              </div>
                              <p className="font-sans font-bold text-3xl max-md:text-2xl">
                                {content.content}
                              </p>
                            </>
                          )
                        ),
                      )}
                  </div>
                </div>
              </>
            ) : data._type === 'gallery' ? (
              <Container className="max-md:px-0 mt-14">
                <div className="w-full flex flex-col space-y-14">
                  {data.galleryComponent.map((item, id) =>
                    item._type === 'singleImage' ? (
                      <Fragment key={id}>
                        {/* Singe Image */}
                        <div className="w-full setflex-center" key={id}>
                          <div
                            className="relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1"
                            style={{
                              backgroundColor: `rgba(208,208,208, 1)`,
                            }}
                          >
                            <Image
                              src={urlFor(item.image).width(1500).url()}
                              alt={item.name}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              blurDataURL={urlFor(item.image)
                                .blur(2)
                                .format('webp')
                                .width(500)
                                .url()}
                            />
                          </div>
                          {item.name && (
                            <div className="flex items-end max-md:items-start mt-3 mb-6 max-md:px-6">
                              <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                              <span className="w-full font-serif text-sm font-bold">
                                {item.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </Fragment>
                    ) : item._type === 'twoImage' ? (
                      <Fragment key={id}>
                        {/* Two Image */}
                        <div className="w-full h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2">
                          <div className="relative w-full h-full">
                            <Image
                              src={urlFor(item.firstImage).width(1500).url()}
                              alt={item.firstImage.name}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </div>
                          <div className="relative w-full h-full">
                            <Image
                              src={urlFor(item.secondImage).width(1500).url()}
                              alt={item.secondImage.name}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      item._type === 'video' && (
                        <div
                          className="w-full max-w-800px mx-auto py-14"
                          key={id}
                        >
                          <VideoComponent
                            setStatusVideo={setStatusVideo}
                            statusVideo={statusVideo}
                            video={item}
                          />
                        </div>
                      )
                    ),
                  )}
                </div>
              </Container>
            ) : data._type === 'video' ? (
              <Container className="max-md:px-0">
                {/* Video */}
                <div className="relative w-full max-w-800px mx-auto flex flex-col space-y-3">
                  <VideoComponent
                    setStatusVideo={setStatusVideo}
                    statusVideo={statusVideo}
                    video={data}
                  />
                </div>
              </Container>
            ) : (
              <></>
            ),
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
        border={nextArticle.article.category.border}
        alt={nextArticle.article.thumbnail.name}
        destination={`/editorial/${nextArticle.editorial_slug}/${nextArticle.article.slug.current}`}
      />
      {/* Button Sticky */}
      <StickyButton
        className={nextArticle === null && `mb-5 mt-10`}
        destination={`/editorial/${article.issue.slug.current}/list`}
        arrow="left"
      >
        ISSUE {article.issue.issueNumber}
      </StickyButton>
      <Footer footer={footer} />
    </Layout>
  )
}
