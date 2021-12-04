import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation, Controller } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import Arrow from '@/components/utils/arrow'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import StickyButton from '@/components/modules/stickyButton'
import SEO from '@/components/utils/seo'

// Helpers
import NextArticle from '@/components/modules/editorial/nextArticle'
import FancyLink from '@/components/utils/fancyLink'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { toPlainText } from '@/helpers/functional/toPlainText'
import timeConvert from '@/helpers/functional/timeConvert'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation])

export default function Caroussel({ article, seo, nextArticle }) {
  const router = useRouter()
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  useEffect(() => {
    window.scroll(0, 0)
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
      <OpeningArticle article={article} />
      <section className="w-full h-full flex flex-col">
        <Container className="max-md:mb-5 space-y-3 max-md:space-y-5 max-md:px-0">
          {/* Gallery */}
          <div className="relative w-full h-full">
            <Swiper
              loop={true}
              effect="fade"
              // navigation={true}
              // speed={0}
              slidesPerView={1}
              // loopedSlides={1}
              allowTouchMove={false}
              className="w-full h-full"
              navigation={{
                nextEl: '.nextCaroussel',
                prevEl: '.prevCaroussel',
              }}
              modules={[Controller]}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              loopedSlides={article.caroussel.length}
            >
              {article.caroussel.map((data, id) => (
                <SwiperSlide key={id}>
                  <div className="relative w-full aspect-w-16 max-md:aspect-w-1 aspect-h-9 max-md:aspect-h-1">
                    <Image
                      src={urlFor(data).url()}
                      alt={data.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="gallery-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute pointer-events-none z-10 top-0 left-0 h-full w-full flex items-center justify-between px-6">
              <FancyLink className="pointer-events-auto">
                <Arrow
                  position="left"
                  fill="white"
                  className="w-24px h-24px prevCaroussel"
                />
              </FancyLink>
              <FancyLink className="pointer-events-auto">
                <Arrow
                  position="right"
                  fill="white"
                  className="w-24px h-24px nextCaroussel"
                />
              </FancyLink>
            </div>
          </div>
          {/* List Gallery */}
          <div className="relative w-full h-36 max-md:h-24 max-md:pl-6">
            <div className="absolute left-0 w-full h-full flex space-x-3">
              <Swiper
                slidesPerView="auto"
                loop={true}
                spaceBetween={20}
                allowTouchMove={false}
                slideToClickedSlide={true}
                // loopedSlides={2}
                centeredSlides={true}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                loopedSlides={article.caroussel.length}
                id="swipe-caroussel"
              >
                {article.caroussel.map((data, id) => (
                  <SwiperSlide key={id}>
                    <div className="cursor-pointer relative w-full h-full">
                      <Image
                        src={urlFor(data).url()}
                        alt={data.name}
                        className="rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
        <hr className="hidden max-md:block border-gray mt-3 mb-14 mx-6" />
      </section>
      <NextArticle
        bgColor={nextArticle.article.category.color.hex}
        title={`${nextArticle.article.articleNumber}. ${nextArticle.article.title}`}
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
      <Footer setting={seo}/>
    </Layout>
  )
}
