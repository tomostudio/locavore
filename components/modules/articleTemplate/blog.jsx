import { useEffect, useState } from 'react'
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

export default function Blog({ article, seo, nextArticle }) {
  const router = useRouter()
  const articleBlog = article.blog.filter((item) => item._type === 'orange')
  const articleWhite = article.blog.filter((item) => item._type === 'white')
  let layoutFilter = [...articleBlog, ...articleWhite]
  const [baseUrl, setBaseUrl] = useState();
  const scrolltoview = (slug) => {
    const element = document.querySelector(`[data-slug*="${slug}"]`)
    const headerOffset = 60
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    // document.querySelectorAll(`[data-slug*="${slug}"]`)[0].scrollIntoView({
    //   behavior: 'smooth',
    // });
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
      <OpeningArticle article={article} baseUrl={baseUrl} />

      <section className="">
        <Container>
          <div>
            <div className="flex flex-col space-y-1 max-md:mt-5 text-culture">
              {layoutFilter.map((data, i) => (
                <div>
                  <span className="block font-serif italic">Part {i + 1}</span>
                  <FancyLink
                    onClick={() => scrolltoview(data.title)}
                    className="font-bold font-serif border-culture border-b"
                  >
                    {data.title}
                  </FancyLink>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-14 w-full h-full">
        {article.blog.map((data, i) =>
          data._type === 'orange' ? (
            <>
              {/* Orange Component */}
              <div
                data-slug={data.title}
                className="w-full h-auto px-8 py-4 max-md:p-2"
                style={{ background: '#D66A51' }}
              >
                <div className="w-full h-full bg-white rounded-2xl py-14 max-md:py-7 setflex-center">
                  <div className="w-content max-md:w-full max-md:px-4 max-md:space-y-7 space-y-10">
                    {/* Title */}
                    <div className="font-serif text-center font-bold">
                      <span className="block italic">Part {i + 1}</span>
                      {data.title}
                    </div>
                    {data.content.map((content, i) =>
                      content._type === 'block' ? (
                        <p className="px-paddingContent max-md:p-0">
                          {content.children.map((child) => child.text).join('')}
                        </p>
                      ) : content._type === 'img' ? (
                        <>
                          {/* Image */}
                          <div className="w-full h-auto px-paddingContent max-md:p-0">
                            <div className="relative w-full h-80">
                              <Image
                                src={urlFor(content.image).url()}
                                alt={content.image.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                              />
                            </div>
                            {content.name && (
                              <div className="flex items-end max-md:items-start w-full mt-3">
                                <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                                <span className="w-full font-serif text-sm font-bold">
                                  {content.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        content._type === 'blockquote' && (
                          <p className="font-sans font-bold uppercase px-paddingContent max-md:p-0">
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
                data-slug={data.title}
                className="w-full h-auto px-8 max-md:px-6 py-14 setflex-center"
              >
                <div className="w-content max-md:w-full space-y-10 max-md:space-y-7">
                  {/* Title */}
                  <div className="font-serif text-center font-bold">
                    <span className="block italic">Part {i + 1}</span>
                    {data.title}
                  </div>
                  {data.content.map((content, i) =>
                    content._type === 'block' ? (
                      <p className="px-paddingContent max-md:p-0">
                        {content.children.map((child) => child.text).join('')}
                      </p>
                    ) : (
                      content._type === 'quote' && (
                        <>
                          <div className="h-40 setflex-center w-full">
                            <hr className="bg-culture border border-culture h-full w-px" />
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
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, or randomised words which don't look
                            even slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there
                            isn't anything hidden in the middle of text.
                          </p>
                        </>
                      )
                    ),
                  )}
                </div>
              </div>
            </>
          ) : data._type === 'image' ? (
            <>
              {/* Image Component */}
              <div className="w-full h-auto setflex-center my-14">
                <div className="relative w-content max-md:w-full px-paddingContent max-md:px-6">
                  <div className="relative w-full h-72">
                    <Image
                      src={urlFor(data).url()}
                      alt={data.name}
                      className="rounded-xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  {data.name && (
                    <div className="flex items-end max-md:items-start mt-3">
                      <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                      <span className="w-full font-serif text-sm font-bold">
                        {data.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            data._type === 'imageFull' && (
              <>
                {/* Image Full Component */}
                <div className="w-full setflex-center">
                  <div className="relative w-full h-36rem">
                    <Image
                      src={urlFor(data.image).url()}
                      alt={data.name}
                      className="rounded-xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  {data.name && (
                    <div className="w-content max-md:w-full px-paddingContent max-md:px-6 flex items-end max-md:items-start mt-3">
                      <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                      <span className="w-full font-serif text-sm font-bold">
                        {data.name}
                      </span>
                    </div>
                  )}
                </div>
              </>
            )
          ),
        )}
      </section>
      {/* Card Next Article */}
      {nextArticle !== null && (
        <NextArticle
          bgColor={nextArticle.article.category.color.hex}
          title={`${nextArticle.article.articleNumber}. ${nextArticle.article.title}`}
          category={nextArticle.article.category.title}
          timeRead={timeConvert(
            nextArticle.article.timeReadBlog
              ? nextArticle.article.timeReadBlog
              : nextArticle.article.timeRead,
          )}
          thumbnail={urlFor(nextArticle.article.thumbnail).width(1000).url()}
          border={nextArticle.article.category.border}
          alt={nextArticle.article.thumbnail.name}
          destination={`/editorial/${nextArticle.editorial_slug}/${nextArticle.article.slug.current}`}
        />
      )}
      {/* Button Sticky */}
      <StickyButton
        className={nextArticle === null && `mb-5 mt-10`}
        destination={`/editorial/${article.issue.slug.current}`}
        arrow="left"
      >
        ISSUE {article.issue.issueNumber}
      </StickyButton>
      <Footer setting={seo} />
    </Layout>
  )
}
