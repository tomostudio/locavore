import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import StickyButton from '@/components/modules/stickyButton'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import VideoComponent from '@/components/modules/editorial/videoComponent'
import SEO from '@/components/utils/seo'

// Helpers
import NextArticle from '@/components/modules/editorial/nextArticle'
import timeConvert from '@/helpers/functional/timeConvert'
import urlFor from '@/helpers/sanity/urlFor'

export default function Gallery({ article, seo, nextArticle }) {
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
          {/* Image */}
          <div className="w-full flex flex-col">
            {article.gallery.map((item, index) =>
              item._type === 'singleImage' ? (
                <>
                  {/* Singe Image */}
                  <div className="w-full setflex-center mt-3 max-md:mt-2">
                    <div className="relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1">
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
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
                </>
              ) : item._type === 'twoImage' ? (
                <>
                  {/* Two Image */}
                  <div className="w-full mt-3 max-md:mt-2 h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(item.firstImage).url()}
                        alt={item.firstImage.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(item.secondImage).url()}
                        alt={item.secondImage.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </div>
                </>
              ) : (
                item._type === 'video' && (
                  <div className="w-full mt-3 max-md:mt-2">
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
        destination={`/editorial/${nextArticle.editorial_slug}/article/${nextArticle.article.slug.current}`}
      />
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  )
}