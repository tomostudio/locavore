import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'
import Navbar from '@/components/modules/header'

// Components
import FancyLink from '@/components/utils/fancyLink'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import StickyButton from '@/components/modules/stickyButton'
import VideoComponent from '@/components/modules/editorial/videoComponent'
import SEO from '@/components/utils/seo'

// Helpers
import NextArticle from '@/components/modules/editorial/nextArticle'
import urlFor from '@/helpers/sanity/urlFor'
import timeConvert from '@/helpers/functional/timeConvert'

export default function Video({ article, seo, nextArticle }) {
  const router = useRouter()
  const [statusVideo, setStatusVideo] = useState(false)
  return (
    <Layout>
      <SEO
        seo={{
          title: article.title,
          webTitle:
            typeof seo !== 'undefined' && seo.webTitle ? seo.webTitle : '',
          pagelink: router.pathname,
          description:
            typeof article.seo !== 'undefined' &&
            typeof article.seo.seo_description !== 'undefined' &&
            article.seo.seo_description
              ? article.seo.seo_description
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_description !== 'undefined' &&
                seo.seo.seo_description
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof article.seo !== 'undefined' &&
            typeof article.seo.seo_keywords !== 'undefined' &&
            article.seo.seo_keywords
              ? article.seo.seo_keywords
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_keywords !== 'undefined' &&
                seo.seo.seo_keywords
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof article.seo !== 'undefined' &&
            typeof article.seo.seo_image !== 'undefined' &&
            article.seo.seo_image
              ? urlFor(article.seo.seo_image).url()
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof article.seo !== 'undefined' &&
            typeof article.seo.seo_image !== 'undefined' &&
            typeof article.seo.seo_image.name !== 'undefined' &&
            article.seo.seo_image.name
              ? article.seo.seo_image.name
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
      <OpeningArticle article={article} />
      <section className="w-full h-full flex flex-col">
        <Container className="max-md:px-0">
          {/* Video */}
          <div className="relative w-full flex flex-col space-y-3">
            <VideoComponent
              setStatusVideo={setStatusVideo}
              statusVideo={statusVideo}
              video={article.video}
            />
          </div>
        </Container>
      </section>
      <NextArticle
        bgColor={nextArticle.article.category.color.hex}
        title={`${nextArticle.article.order}. ${nextArticle.article.title}`}
        category={nextArticle.article.category.title}
        timeRead={timeConvert(
          nextArticle.article.timeReadBlog
            ? nextArticle.article.timeReadBlog
            : nextArticle.article.timeRead,
        )}
        thumbnail={urlFor(nextArticle.article.thumbnail).url()}
        alt={nextArticle.article.thumbnail.name}
        destination={`/editorial/${nextArticle.editorial_slug}/${nextArticle.article.slug.current}`}
      />
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  )
}
