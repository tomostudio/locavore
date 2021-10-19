import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import ScrollContainer from 'react-indiana-drag-scroll'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import ArticleCard from '@/components/utils/articleCard'

// Helpers
import FancyLink from '@/components/utils/fancyLink'
import StickyButton from '@/components/utils/stickyButton'
import Container from '@/components/modules/container'
import client from '@/helpers/sanity/client'
import checkMonth from '@/helpers/functional/checkMonth'
import { checkText } from '@/helpers/functional/checkText'

// install Swiper modules
SwiperCore.use([Pagination])

export default function Issue({ issueAPI }) {
  const [issue] = issueAPI
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
  const [hasNextPage, setHasNextPage] = useState(true)

  const fetchMoreData = () => {
    setHasNextPage(true)
    setTimeout(() => {
      setItem(item.concat(dataArticle))
      setHasNextPage(false)
      console.log(hasNextPage)
    }, 200)
  }

  const [sentryRef] = useInfiniteScroll({
    hasNextPage: true,
    onLoadMore: fetchMoreData,
    delayInMs: 400,
  })

  useEffect(() => {
    setWidth(window.innerWidth)
    window.scroll(0, 0)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <Layout>
      <NextSeo title={issue.title} />

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
          <ScrollContainer className="flex w-full space-x-7 px-7" horizontal={true}>
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
  return {
    props: {
      issueAPI,
    },
  }
}
