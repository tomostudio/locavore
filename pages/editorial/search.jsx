import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import ScrollContainer from 'react-indiana-drag-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Fuse from 'fuse.js'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import FancyLink from '@/components/utils/fancyLink'
import PillButton from '@/components/utils/pillButton'
import Arrow from '@/components/utils/arrow'
import StickyButton from '@/components/utils/stickyButton'
import IssueCard from '@/components/utils/issueCard'
import SEO from '@/components/utils/seo'

// Helpers
import { fade } from '@/helpers/preset/transitions'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useAppContext } from 'context/state'

export default function Search({ seoAPI, searchAPI }) {
  const [seo] = seoAPI
  const [APISearch] = searchAPI
  const appContext = useAppContext()
  const dataCategory = [
    {
      category: 'Food',
    },
    {
      category: 'Culture',
    },
    {
      category: 'Features',
    },
    {
      category: 'Food',
    },
    {
      category: 'Culture',
    },
    {
      category: 'Features',
    },
    {
      category: 'Food',
    },
    {
      category: 'Culture',
    },
    {
      category: 'Features',
    },
  ]
  const dataSearch = [
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#DEFE71',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#9FF7CD',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#D66A51',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#9FF7CD',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#D66A51',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#C9C8BF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#BC9EDF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#DEFE71',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#9FF7CD',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#D66A51',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#9FF7CD',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#D66A51',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#C9C8BF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#BC9EDF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#DEFE71',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#9FF7CD',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#D66A51',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#9FF7CD',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#D66A51',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#C9C8BF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Culture',
      timeRead: '20 min read',
      bgColor: '#BC9EDF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
  ]
  const [postNumCategory, setPostNumCategory] = useState(3)
  const [postNum, setPostNum] = useState(6)
  const [search, setSearch] = useState('')
  const [searchResult, setsearchResult] = useState([])
  const [searchData, setSearchData] = useState(new Array())
  const [itemsToDisplay, setitemsToDisplay] = useState([])

  const handleLoadMoreCategory = () => {
    setPostNumCategory((prevPostNum) => prevPostNum + 3)
  }

  const handleLoadMore = () => {
    setPostNum((prevPostNum) => prevPostNum + 6)
  }

  // Search
  const handleSearch = ({ target }) => {
    const { value } = target
    // set value untuk search
    setSearch(value)
    setPostNum(6)

    // Inisialiasi fuzzy search dengan fuse.js
    // inisialisasi data object dan key yang ingin dicari
    const fuse = new Fuse(searchData, {
      keys: ['title', 'category', 'timeRead'],
    })
    setsearchResult(fuse.search(value).map((result) => result.item))
  }

  const handleCategory = (value) => {
    const fuse = new Fuse(dataSearch, {
      keys: ['category'],
    })
    setsearchResult(fuse.search(value).map((result) => result.item))
    setitemsToDisplay(fuse.search(value).map((result) => result.item))
  }

  useEffect(() => {
    if (appContext.category) {
      handleCategory(appContext.category)
    }
    // setitemsToDisplay(searchResult.length > 0 ? searchResult : [])
    if (searchData) {
      if (!searchData.length) {
        setSearchData((prevArray) => [...prevArray, ...dataSearch])
      }
    }
    window.scroll(0, 0)
    return () => {}
  }, [search])

  return (
    <Layout>
      <SEO
        seo={{
          title: 'Search',
          webTitle: typeof seo !== 'undefined' ? seo.webTitle : '',
          description:
            typeof APISearch !== 'undefined' &&
            typeof APISearch.seo !== 'undefined'
              ? APISearch.seo.seo_description
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof APISearch !== 'undefined' &&
            typeof APISearch.seo !== 'undefined'
              ? APISearch.seo.seo_keywords
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof APISearch !== 'undefined' &&
            typeof APISearch.seo !== 'undefined'
              ? urlFor(APISearch.seo.seo_image).url()
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof APISearch !== 'undefined' &&
            typeof APISearch.seo !== 'undefined'
              ? APISearch.seo.seo_image.name
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_image.name
              : '',
        }}
      />
      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" variants={fade}>
          {/* Header Gap */}
          <HeaderGap />
          {/* Untuk Content */}
          <section>
            <Container className="max-md:px-6 pt-10 pb-10">
              <div className="w-full h-full setflex-center">
                {/* Title */}
                <h1 className="titlestyle">
                  Search
                  <span className="sub">All</span>Articles
                </h1>
                {/* Form Search */}
                <div className="w-content max-md:w-full max-md:p-0 mt-10 px-paddingContent">
                  <form className="mb-8 flex w-full h-full flex-col justify-between">
                    <div className="relative w-full  border-black pb-2.5 border-b">
                      <input
                        onChange={handleSearch}
                        className="w-full text-xs tracking-wide placeholder-black bg-transparent outline-none"
                        type="text"
                        placeholder="ENTER A KEYWORD"
                      />
                      <Arrow
                        position="right"
                        className="absolute right-0 top-2 cursor-pointer"
                        fill="black"
                      />
                    </div>
                  </form>
                  <ScrollContainer
                    className="w-full h-auto opacity-80 flex max-md:flex-wrap items-center space-x-4 max-md:gap-3 max-md:space-x-0 overflow-x-scroll hide-scrollbar"
                    horizontal={true}
                  >
                    <span className="block text-xs pt-px">CATEGORY</span>
                    {dataCategory.slice(0, postNumCategory).map((data, id) => (
                      <PillButton
                        onClick={() => handleCategory(data.category)}
                        className="text-xs uppercase max-md:py-1 px-3"
                        key={id}
                      >
                        {data.category}
                      </PillButton>
                    ))}
                    {!(postNumCategory >= dataCategory.length) && (
                      <PillButton
                        className="text-xs uppercase max-md:py-1 px-3"
                        onClick={handleLoadMoreCategory}
                      >
                        ...
                      </PillButton>
                    )}
                  </ScrollContainer>
                </div>
                {/* Category */}
              </div>
              <div className="relative w-full h-auto setflex-center">
                <span className="font-bold mt-12 mb-10 text-lg">
                  We found &nbsp;
                  <span className="border-black border-b">
                    {search ? itemsToDisplay.length : dataSearch.length}{' '}
                    Articles
                  </span>
                </span>
                {/* Card */}
                <div
                  className="w-full h-auto gap-8 flex-wrap"
                  id="search-results"
                >
                  {
                    console.log(itemsToDisplay)
                  }
                  {search || appContext.category
                    ? itemsToDisplay
                        .slice(0, postNum)
                        .map((data, id) => (
                          <IssueCard
                            key={id}
                            issueNo={1}
                            destination={data.destination}
                            articleClassName="bg-culture w-full"
                            title={data.title}
                            category={data.category}
                            timeRead={data.timeRead}
                            bgColor={data.bgColor}
                            borderColor=""
                            thumbnail={data.thumbnail}
                            alt={data.alt}
                          />
                        ))
                    : dataSearch
                        .slice(0, postNum)
                        .map((data, id) => (
                          <IssueCard
                            key={id}
                            issueNo={1}
                            destination={data.destination}
                            articleClassName="bg-culture w-full"
                            title={data.title}
                            category={data.category}
                            timeRead={data.timeRead}
                            bgColor={data.bgColor}
                            borderColor=""
                            thumbnail={data.thumbnail}
                            alt={data.alt}
                          />
                        ))}
                </div>
                {!(postNum >= dataSearch.length) && (
                  <div className="flex mt-10">
                    <FancyLink
                      onClick={handleLoadMore}
                      className="py-4 px-5 text-xs text-gray tracking-widest transition-all ease-linear hover:text-white hover:bg-gray border border-gray rounded-xl"
                    >
                      LOAD MORE
                    </FancyLink>
                  </div>
                )}
              </div>
            </Container>
          </section>
          {/* Button Sticky */}
          <StickyButton destination="/editorial" arrow="left">
            Browse all issues
          </StickyButton>
          <Footer />
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
                    *[_type == "settings"]
                    `)
  const searchAPI = await client.fetch(`
                    *[_type == "search"]
                    `)
  return {
    props: {
      seoAPI,
      searchAPI,
    },
  }
}
