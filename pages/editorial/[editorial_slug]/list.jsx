import { useEffect, useState } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import ArticleCard from '@/components/utils/articleCard'
import SEO from '@/components/utils/seo'
import FancyLink from '@/components/utils/fancyLink'
import StickyButton from '@/components/utils/stickyButton'
import Container from '@/components/modules/container'

// Helpers
import client from '@/helpers/sanity/client'
import checkMonth from '@/helpers/functional/checkMonth'
import { checkText } from '@/helpers/functional/checkText'
import urlFor from '@/helpers/sanity/urlFor'

// install Swiper modules
SwiperCore.use([Pagination])

export default function Issue({ issueAPI, seoAPI }) {
  const router = useRouter()
  const [issue] = issueAPI
  const [seo] = seoAPI
  const dataArticle = [
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      bgColor: '#E9C4DD',
      title: '5. Ulekan',
      category: 'Culture',
      timeRead: '20 min read',
      src: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
  ]
  const [windowWidth, setWidth] = useState()
  const [item, setItem] = useState(dataArticle)
  const fetchMoreData = () => {
    setItem(item.concat(dataArticle))
  }

  const [sentryRef] = useInfiniteScroll({
    hasNextPage: true,
    onLoadMore: fetchMoreData,
  })

  useEffect(() => {
    setWidth(window.innerWidth)
    window.scroll(0, 0)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
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
      <section className="py-10 w-full h-full flex flex-col space-y-10">
        {/* Title */}
        <Container className="max-md:px-6">
          <div className="w-full h-full setflex-center">
            <span className="font-serif italic text-xl">
              Issue {issue.order} —{' '}
              {checkMonth(new Date(issue.date).getMonth())}{' '}
              {new Date(issue.date).getFullYear()}
            </span>
            <h1
              className=" font-sans font-normal max-md:break-all max-md:text-center"
              style={{
                fontSize:
                  checkText(issue.title, '3rem Whyte Inktrap') >
                    windowWidth - 40 && '42px',
              }}
            >
              {issue.title}
            </h1>
          </div>
        </Container>
        {/* Card
         */}
        <div className="w-full flex" id="editorial-slider">
          <ScrollContainer
            className="flex w-full space-x-7 px-7"
            horizontal={true}
          >
            {item.map((item, id) => (
              <div className="article_wrapper" key={id} ref={sentryRef}>
                <FancyLink destination={'/article/full'} className={`group`}>
                  <ArticleCard
                    bgColor={'#E9C4DD'}
                    title="5. Ulekan"
                    category="Culture"
                    timeRead="20 min read"
                    src="/placeholder/locavore-rintik-crop-11.jpg"
                    alt="Locavore"
                  />
                </FancyLink>
              </div>
            ))}
          </ScrollContainer>
        </div>
        {/* CHANGE */}
        <Container className="max-md:px-6">
          <div className="w-full setflex-center">
            <div className="mb-5 text-xs">
              <span className="font-bold">1</span>-<span>15</span>
            </div>
            <div className="relative w-full setflex-center">
              <div className="relative border-b w-48 max-md:w-full h-px border-black">
                <div className="absolute left-4 w-8 h-1 -top-px border border-black bg-black" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Button Sticky */}
      <StickyButton destination="/editorial" arrow="left">
        EDITORIAL INDEX
      </StickyButton>
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "issue"]
      `)

  const paths = res.map((data) => ({
    params: { editorial_slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const issueAPI = await client.fetch(
    `
        *[_type == "issue" && slug.current == "${params.editorial_slug}"] 
      `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  return {
    props: {
      issueAPI,
      seoAPI,
    },
  }
}
