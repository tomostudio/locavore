import { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Fuse from 'fuse.js'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import PillButton from '@/components/modules/pillButton'
import StickyButton from '@/components/modules/stickyButton'
import IssueCard from '@/components/modules/editorial/issueCard'
import FancyLink from '@/components/utils/fancyLink'
import Arrow from '@/components/utils/arrow'
import SEO from '@/comp@/components/modules/editorial/issueCard'

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
      category: 'Food',
      timeRead: '20 min read',
      bgColor: '#C9C8BF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Tes',
      category: 'Food',
      timeRead: '20 min read',
      bgColor: '#BC9EDF',
      thumbnail: '/placeholder/locavore-rintik-crop-11.jpg',
      alt: 'Locavore',
    },
    {
      destination: '/article/full',
      articleClassName: 'bg-culture w-full',
      title: '7. Facial Expressions',
      category: 'Food',
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
  const [itemsToDisplay, setitemsToDisplay] = useState(dataSearch)

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

    if (appContext.category) {
      const fuseCategory = new Fuse(dataSearch, {
        keys: ['category'],
        useExtendedSearch: true,
      })
      let cat = fuseCategory
        .search(`=${appContext.category}`)
        .map((result) => result.item)

      const fuseSearchCategory = new Fuse(cat, {
        keys: ['title', 'timeRead'],
      })
      const data = fuseSearchCategory.search(value).map((result) => result.item)
      setitemsToDisplay(value ? data : cat)
    } else {
      const fuse = new Fuse(dataSearch, {
        keys: ['title', 'category', 'timeRead'],
      })
      const data = fuse.search(value).map((result) => result.item)
      setitemsToDisplay(value ? data : dataSearch)
    }
  }

  const handleCategory = (value) => {
    setPostNum(6)
    appContext.setCategory(value)
    if (search) {
      const fuse = new Fuse(dataSearch, {
        keys: ['title', 'category', 'timeRead'],
      })
      const data = fuse.search(search).map((result) => result.item)
      setitemsToDisplay(data)
    } else {
      const fuse = new Fuse(dataSearch, {
        keys: ['category'],
        useExtendedSearch: true,
      })
      let cat = fuse.search(`=${value}`).map((result) => result.item)
      setitemsToDisplay(value ? cat : dataSearch)
    }
  }

  useEffect(() => {
    if (appContext.category) {
      handleCategory(appContext.category)
    }
    window.scroll(0, 0)
    return () => {
      appContext.setCategory('')
    }
  }, [])

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
                  <form className="mb-6 flex w-full h-full flex-col justify-between">
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
                  <div className="w-full h-auto opacity-80 flex flex-wrap items-center space-x-2 space-y-2 max-md:space-x-0">
                    <span className="block text-xs pt-px">CATEGORY</span>
                    {dataCategory.slice(0, postNumCategory).map((data, id) => (
                      <PillButton
                        onClick={() =>
                          handleCategory(
                            appContext.category === `${data.category}`
                              ? ''
                              : `${data.category}`,
                          )
                        }
                        className={`text-xs uppercase max-md:py-1 px-4 ${
                          appContext.category.toLowerCase() ===
                          data.category.toLocaleLowerCase()
                            ? 'activeCategory'
                            : ''
                        }`}
                        key={id}
                      >
                        {data.category}
                      </PillButton>
                    ))}
                    {!(postNumCategory >= dataCategory.length) && (
                      <PillButton
                        className="text-xs uppercase max-md:py-1 px-4"
                        onClick={handleLoadMoreCategory}
                        loadMore={true}
                      >
                        ...
                      </PillButton>
                    )}
                  </div>
                </div>
                {/* Category */}
              </div>
              <div className="relative w-full h-auto setflex-center">
                <span className="font-bold mt-12 mb-10 text-lg">
                  We found &nbsp;
                  <span className="border-black border-b">
                    {itemsToDisplay.length} Articles
                  </span>
                </span>
                {/* Card */}
                <div
                  className="w-full h-auto gap-8 flex-wrap"
                  id="search-results"
                >
                  {itemsToDisplay.slice(0, postNum).map((data, id) => (
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
                {search || appContext.category
                  ? !(postNum >= itemsToDisplay.length) && (
                      <div className="flex mt-10">
                        <FancyLink
                          onClick={handleLoadMore}
                          className="py-4 px-5 text-xs text-gray tracking-widest transition-all ease-linear hover:text-white hover:bg-gray border border-gray rounded-xl"
                        >
                          LOAD MORE
                        </FancyLink>
                      </div>
                    )
                  : !(postNum >= dataSearch.length) && (
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