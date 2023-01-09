// Helpers
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import urlFor from '@/helpers/sanity/urlFor'
import HeaderGap from '@/components/modules/headerGap'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import VideoComponent from '@/components/modules/editorial/videoComponent'
import Image from "next/legacy/image";
import GalleryComponent from '@/components/modules/editorial/galleryComponent'
import NextArticle from '@/components/modules/editorial/nextArticle'
import StickyButton from '@/components/modules/stickyButton'
import Footer from '@/components/modules/footer'
import timeConvert from '@/helpers/functional/timeConvert'
import CarousselComponent from '@/components/modules/editorial/carousselComponent'
import Caption from '@/components/modules/editorial/caption'
import EditorComponent from '@/components/modules/editorial/editorComponent'

export default function ArticleSlug({
  articleAPI,
  seoAPI,
  headerAPI,
  footerAPI,
  nextArticle,
}) {
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [article] = articleAPI

  const router = useRouter()
  let layoutFilter =
    article.blog &&
    article.blog.map((data, id) => {
      return {
        part: id + 1,
        ...data,
      }
    })
  const [baseUrl, setBaseUrl] = useState()
  const [snackBar, setSnackBar] = useState(false)

  const scrolltoview = (slug) => {
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
        title={article.title}
        pagelink={router.pathname}
        inputSEO={article.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      {/* Header Gap */}
      <HeaderGap />

      {/* Untuk Content */}
      <OpeningArticle
        general={seo}
        article={article}
        baseUrl={baseUrl}
        snackBar={snackBar}
        setSnackBar={setSnackBar}
      />
      {article.layout === 'blog' &&
        (layoutFilter && layoutFilter[0].showTitle ? (
          <section className="mt-12">
            <Container>
              <div>
                <div
                  className="flex flex-col space-y-2 max-md:mt-5"
                  style={{
                    color: article.setColor
                      ? article.setColor === 'articleColor'
                        ? article.color.hex
                        : article.setColor === 'categoryColor' &&
                          article.category.color.hex === '#ffffff'
                        ? '#000000'
                        : article.category.color.hex
                      : '#D66A51',
                  }}
                >
                  {layoutFilter &&
                    layoutFilter.map(
                      (data, i) =>
                        data.showTitle && (
                          <div key={i}>
                            <span className="block font-serif italic">
                              Part {data.part}
                            </span>
                            <FancyLink
                              onClick={() =>
                                scrolltoview(
                                  data.title
                                    .toLowerCase()
                                    .replace(/^\s+|\s+$/g, '')
                                    .replace(/[^a-z0-9 -]/g, '')
                                    .replace(/\s+/g, '-')
                                    .replace(/-+/g, '-')
                                    .replace(/^-+/, '')
                                    .replace(/-+$/, ''),
                                )
                              }
                              className="font-bold font-serif border-b"
                              style={{
                                borderColor: article.setColor
                                  ? article.setColor === 'articleColor'
                                    ? article.color.hex
                                    : article.setColor === 'categoryColor' &&
                                      article.category.color.hex === '#ffffff'
                                    ? '#000000'
                                    : article.category.color.hex
                                  : '#D66A51',
                              }}
                            >
                              {data.title}
                            </FancyLink>
                          </div>
                        ),
                    )}
                </div>
              </div>
            </Container>
          </section>
        ) : (
          <></>
        ))}
      <section className="mt-12 space-y-12 w-full h-full">
        {article.layout === 'blog' && article.blog ? (
          article.blog.map((data, i) =>
            data._type === 'editor' ? (
              <div
                data-slug={data.title
                  .toLowerCase()
                  .replace(/^\s+|\s+$/g, '')
                  .replace(/[^a-z0-9 -]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/^-+/, '')
                  .replace(/-+$/, '')}
                className="w-full h-auto px-8 py-4 max-md:p-2 setflex-center"
                style={{
                  background: data.border
                    ? data.color
                      ? data.color.hex
                      : article.setColor
                      ? article.setColor === 'articleColor'
                        ? article.color && article.color.hex
                        : article.setColor === 'categoryColor' &&
                          article.category.color.hex === '#ffffff'
                        ? '#000000'
                        : article.category.color.hex
                      : '#D66A51'
                    : 'none',
                }}
                key={i}
              >
                {/* Orange Component */}
                <div className="w-full h-full bg-white rounded-2xl py-14 max-md:py-7 setflex-center max-w-screen-xl">
                  <div className="w-content max-md:w-full max-md:px-4">
                    {/* Title */}
                    {data.showTitle && (
                      <div
                        className="font-serif text-center font-bold mb-10 max-md:mb-7"
                        style={{
                          color: data.color
                            ? data.color.hex
                            : article.setColor
                            ? article.setColor === 'articleColor'
                              ? article.color.hex
                              : article.setColor === 'categoryColor' &&
                                article.category.color.hex === '#ffffff'
                              ? '#000000'
                              : article.category.color.hex
                            : '#D66A51',
                        }}
                      >
                        <span className="block italic">
                          Part{' '}
                          {layoutFilter &&
                            layoutFilter.find(
                              (item) =>
                                item.title
                                  .toLowerCase()
                                  .replace(/^\s+|\s+$/g, '')
                                  .replace(/[^a-z0-9 -]/g, '')
                                  .replace(/\s+/g, '-')
                                  .replace(/-+/g, '-')
                                  .replace(/^-+/, '')
                                  .replace(/-+$/, '') ===
                                data.title
                                  .toLowerCase()
                                  .replace(/^\s+|\s+$/g, '')
                                  .replace(/[^a-z0-9 -]/g, '')
                                  .replace(/\s+/g, '-')
                                  .replace(/-+/g, '-')
                                  .replace(/^-+/, '')
                                  .replace(/-+$/, ''),
                            ).part}
                        </span>
                        <span className="block">{data.title}</span>
                      </div>
                    )}
                    <EditorComponent
                      data={data.content}
                      color={
                        data.color
                          ? data.color.hex
                          : article.setColor
                          ? article.setColor === 'articleColor'
                            ? article.color.hex
                            : article.setColor === 'categoryColor' &&
                              article.category.color.hex === '#ffffff'
                            ? '#000000'
                            : article.category.color.hex
                          : '#D66A51'
                      }
                    />
                  </div>
                </div>
              </div>
            ) : data._type === 'gallery' && data.gallery ? (
              <Fragment
                key={i}
                data-slug={data.title
                  .toLowerCase()
                  .replace(/^\s+|\s+$/g, '')
                  .replace(/[^a-z0-9 -]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/^-+/, '')
                  .replace(/-+$/, '')}
              >
                {/* Title */}
                {data.showTitle && (
                  <div
                    className="font-serif text-center font-bold mb-10 max-md:mb-7"
                    data-slug={data.title
                      .toLowerCase()
                      .replace(/^\s+|\s+$/g, '')
                      .replace(/[^a-z0-9 -]/g, '')
                      .replace(/\s+/g, '-')
                      .replace(/-+/g, '-')
                      .replace(/^-+/, '')
                      .replace(/-+$/, '')}
                    style={{
                      color: data.color
                        ? data.color.hex
                        : article.setColor
                        ? article.setColor === 'articleColor'
                          ? article.color.hex
                          : article.setColor === 'categoryColor' &&
                            article.category.color.hex === '#ffffff'
                          ? '#000000'
                          : article.category.color.hex
                        : '#D66A51',
                    }}
                  >
                    <span className="block italic">
                      Part{' '}
                      {layoutFilter &&
                        layoutFilter.find(
                          (item) =>
                            item.title
                              .toLowerCase()
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/[^a-z0-9 -]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+/, '')
                              .replace(/-+$/, '') ===
                            data.title
                              .toLowerCase()
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/[^a-z0-9 -]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+/, '')
                              .replace(/-+$/, ''),
                        ).part}
                    </span>
                    <span className="block">{data.title}</span>
                  </div>
                )}
                <GalleryComponent
                  gallery={data}
                  color={
                    article.setColor
                      ? article.setColor === 'articleColor'
                        ? article.color.hex
                        : article.setColor === 'categoryColor' &&
                          article.category.color.hex === '#ffffff'
                        ? '#000000'
                        : article.category.color.hex
                      : '#D66A51'
                  }
                />
              </Fragment>
            ) : data._type === 'video' ? (
              <div
                className="max-w-screen-xl mx-auto w-full"
                key={i}
                data-slug={data.title
                  .toLowerCase()
                  .replace(/^\s+|\s+$/g, '')
                  .replace(/[^a-z0-9 -]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/^-+/, '')
                  .replace(/-+$/, '')}
              >
                {/* Title */}
                {data.showTitle && (
                  <div
                    className="font-serif text-center font-bold mb-10 max-md:mb-7"
                    style={{
                      color: data.color
                        ? data.color.hex
                        : article.setColor
                        ? article.setColor === 'articleColor'
                          ? article.color.hex
                          : article.setColor === 'categoryColor' &&
                            article.category.color.hex === '#ffffff'
                          ? '#000000'
                          : article.category.color.hex
                        : '#D66A51',
                    }}
                  >
                    <span className="block italic">
                      Part{' '}
                      {layoutFilter &&
                        layoutFilter.find(
                          (item) =>
                            item.title
                              .toLowerCase()
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/[^a-z0-9 -]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+/, '')
                              .replace(/-+$/, '') ===
                            data.title
                              .toLowerCase()
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/[^a-z0-9 -]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+/, '')
                              .replace(/-+$/, ''),
                        ).part}
                    </span>
                    <span className="block">{data.title}</span>
                  </div>
                )}
                {/* Video */}
                <div className="relative w-full max-w-800px mx-auto flex flex-col space-y-3">
                  <VideoComponent
                    video={data.video}
                    color={
                      article.setColor
                        ? article.setColor === 'articleColor'
                          ? article.color.hex
                          : article.setColor === 'categoryColor' &&
                            article.category.color.hex === '#ffffff'
                          ? '#000000'
                          : article.category.color.hex
                        : '#D66A51'
                    }
                  />
                </div>
              </div>
            ) : data._type === 'imageComponent' ? (
              <div
                className={`w-full h-auto setflex-center`}
                key={i}
                data-slug={data.title
                  .toLowerCase()
                  .replace(/^\s+|\s+$/g, '')
                  .replace(/[^a-z0-9 -]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/^-+/, '')
                  .replace(/-+$/, '')}
              >
                {/* Title */}
                {data.showTitle && (
                  <div
                    className="font-serif text-center font-bold mb-10 max-md:mb-7"
                    style={{
                      color: data.color
                        ? data.color.hex
                        : article.setColor
                        ? article.setColor === 'articleColor'
                          ? article.color.hex
                          : article.setColor === 'categoryColor' &&
                            article.category.color.hex === '#ffffff'
                          ? '#000000'
                          : article.category.color.hex
                        : '#D66A51',
                    }}
                  >
                    <span className="block italic">
                      Part{' '}
                      {layoutFilter &&
                        layoutFilter.find(
                          (item) =>
                            item.title
                              .toLowerCase()
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/[^a-z0-9 -]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+/, '')
                              .replace(/-+$/, '') ===
                            data.title
                              .toLowerCase()
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/[^a-z0-9 -]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+/, '')
                              .replace(/-+$/, ''),
                        ).part}
                    </span>
                    <span className="block">{data.title}</span>
                  </div>
                )}
                <div
                  className={`h-auto setflex-center ${
                    !data.option ? 'w-content max-md:w-full px-20' : 'w-full'
                  }`}
                >
                  <div
                    className={`relative w-full h-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1 rounded-xl overflow-hidden`}
                    style={{
                      backgroundColor: `rgba(208,208,208, 1)`,
                    }}
                  >
                    {data.image && data.image.asset ? (
                      <Image
                        src={urlFor(data.image).width(1500).url()}
                        alt={data.image.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={urlFor(data.image)
                          .blur(2)
                          .format('webp')
                          .width(500)
                          .url()}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  {data.description && (
                    <div className="w-content mx-auto max-md:w-full max-md:px-4">
                      <Caption
                        option={data.option}
                        caption={data.description}
                        color={
                          article.setColor
                            ? article.setColor === 'articleColor'
                              ? article.color.hex
                              : article.setColor === 'categoryColor' &&
                                article.category.color.hex === '#ffffff'
                              ? '#000000'
                              : article.category.color.hex
                            : '#D66A51'
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Fragment key={i}></Fragment>
            ),
          )
        ) : article.layout === 'video' && article.video ? (
          <Container>
            <VideoComponent
              video={article.video}
              color={
                article.setColor
                  ? article.setColor === 'articleColor'
                    ? article.color.hex
                    : article.setColor === 'categoryColor' &&
                      article.category.color.hex === '#ffffff'
                    ? '#000000'
                    : article.category.color.hex
                  : '#D66A51'
              }
            />
          </Container>
        ) : article.layout === 'gallery' && article.gallery ? (
          <GalleryComponent
            gallery={article}
            color={
              article.setColor
                ? article.setColor === 'articleColor'
                  ? article.color.hex
                  : article.setColor === 'categoryColor' &&
                    article.category.color.hex === '#ffffff'
                  ? '#000000'
                  : article.category.color.hex
                : '#D66A51'
            }
          />
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
          !nextArticle.turnOffArticleNumber
            ? `${nextArticle.article.articleNumber}.`
            : ''
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
        className={nextArticle === null ? `mb-5 mt-10` : ''}
        destination={`/editorial/${article.issue.slug.current}/list`}
        arrow="left"
      >
        ARTICLE LIST
      </StickyButton>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const checkArticle = await client.fetch(
    `*[_type == "article" && slug.current == "${params.article_slug}"]`,
  )
  const checkEditor = await client.fetch(
    `*[_type == "issue" && slug.current == "${params.editorial_slug}"]`,
  )
  if (checkArticle.length === 0 || checkEditor === 0) {
    return {
      notFound: true,
    }
  }
    
  let nextArticle = {}
  const articleAPI = await client.fetch(
    `
        *[_type == "article" && slug.current == "${params.article_slug}"] {
          ...,
          issue->,
          category->,
          "timeRead": round(length(pt::text(description)) / 5 / 180 ),
          "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
        }
      `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)

  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `)

  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)

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
      `,
  )

  const processedArticle = next[0].article.sort((a, b) => {
    return a.articleNumber - b.articleNumber
  }) // sort article based on article number

  const nextArticleIndex =
    processedArticle.indexOf(
      processedArticle.find(({ slug }) => slug.current == params.article_slug),
    ) + 1

  if (nextArticleIndex < processedArticle.length) {
    nextArticle = {
      editorial_slug: params.editorial_slug,
      article: processedArticle[nextArticleIndex],
      turnOffArticleNumber: next[0].turnOffArticleNumber,
    }
  } else {
    nextArticle = {
      editorial_slug: params.editorial_slug,
      article: processedArticle[0],
      turnOffArticleNumber: next[0].turnOffArticleNumber,
    }
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
  }
}