import { useEffect, useState } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'

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
import SEO from '@/components/utils/seo'
import HeadingTitle from '@/components/utils/headingTitle'

// Helpers
import { fade } from '@/helpers/preset/transitions'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useAppContext } from 'context/state'
import timeConvert from '@/helpers/functional/timeConvert'

export default function Search({
  seoAPI,
  searchAPI,
  categoryAPI,
  articleAPI,
  issueAPI,
  footerAPI,
}) {
  const router = useRouter()
  const [seo] = seoAPI
  const [APISearch] = searchAPI
  const appContext = useAppContext()
  const [postNumCategory, setPostNumCategory] = useState(3)
  const [postNum, setPostNum] = useState(6)
  const [search, setSearch] = useState('')
  const [itemsToDisplay, setitemsToDisplay] = useState(articleAPI)
  const [footer] = footerAPI

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
      const fuseCategory = new Fuse(articleAPI, {
        keys: ['article.category.title'],
        useExtendedSearch: true,
      })
      let cat = fuseCategory
        .search(`=${appContext.category}`)
        .map((result) => result.item)

      const fuseSearchCategory = new Fuse(cat, {
        keys: ['article.title'],
      })
      const data = fuseSearchCategory.search(value).map((result) => result.item)
      setitemsToDisplay(value ? data : cat)
    } else {
      const fuse = new Fuse(articleAPI, {
        keys: ['aricle.title', 'article.category.title'],
      })
      const data = fuse.search(value).map((result) => result.item)
      setitemsToDisplay(value ? data : articleAPI)
    }
  }

  const handleCategory = (value) => {
    setPostNum(6)
    appContext.setCategory(value)
    if (search) {
      const fuse = new Fuse(articleAPI, {
        keys: ['article.title', 'article.category.title'],
      })
      const data = fuse.search(search).map((result) => result.item)
      if (value) {
        const dataFilter = data.filter((item) => item.category.title === value)
        setitemsToDisplay(dataFilter)
      } else {
        setitemsToDisplay(data)
      }
    } else {
      const fuse = new Fuse(articleAPI, {
        keys: ['article.category.title'],
        includeMatches: true,
      })
      let cat = fuse.search(`=${value}`).map((result) => result.item)
      setitemsToDisplay(value ? cat : articleAPI)
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
        title={'Search'}
        pagelink={router.pathname}
        inputSEO={APISearch.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" variants={fade}>
          {/* Header Gap */}
          <HeaderGap />
          {/* Untuk Content */}
          <Container className="max-md:px-6 pb-10">
            <div className="w-full h-full setflex-center relative">
              {/* Title */}
              <HeadingTitle className="max-md:mb-0">
                Search
                <span className="sub">All</span>Articles
              </HeadingTitle>
              {/* Form Search */}
              <div className="w-full max-w-xl max-md:p-0">
                <form className="mb-4 flex w-full h-full flex-col justify-between">
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
                <div className="w-full h-auto opacity-80 flex flex-wrap items-center">
                  <span className="block text-xs pt-px mr-4 mt-2">
                    CATEGORY
                  </span>
                  {categoryAPI.slice(0, postNumCategory).map((data, id) => (
                    <PillButton
                      onClick={() =>
                        handleCategory(
                          appContext.category === `${data.title}`
                            ? ''
                            : `${data.title}`,
                        )
                      }
                      className={`text-xs uppercase mt-2 mr-2 ${
                        appContext.category.toLowerCase() ===
                        data.title.toLocaleLowerCase()
                          ? 'bg-gray'
                          : ''
                      }`}
                      click={
                        appContext.category.toLowerCase() ===
                        data.title.toLocaleLowerCase()
                          ? true
                          : false
                      }
                      key={id}
                    >
                      {data.title}
                    </PillButton>
                  ))}
                  {!(postNumCategory >= categoryAPI.length) && (
                    <PillButton
                      className="text-xs uppercase mt-2 mr-2"
                      onClick={handleLoadMoreCategory}
                      loadMore={true}
                    >
                      ...
                    </PillButton>
                  )}
                </div>
              </div>
              {/* Category */}
              <div className="mt-10">
                <span className="font-bold text-lg">
                  We found &nbsp;
                  <span className="border-black border-b">
                    {itemsToDisplay.reduce(
                      (count, current) => count + current.article.length,
                      0,
                    )}{' '}
                    Articles
                  </span>
                </span>
              </div>
            </div>
            {/* content */}
            <section className="relative w-full h-auto setflex-center mt-10">
              {/* Card */}
              <div id="search-results">
                {itemsToDisplay
                  .slice(0, postNum)
                  .map((datas, _) =>
                    datas.article.map((data, id) => (
                      <IssueCard
                        key={id}
                        issueNo={datas.issueNumber}
                        destination={`${datas.slug.current}/${data.slug.current}`}
                        articleClassName="bg-culture w-full"
                        title={`${
                          !datas.turnOffArticleNumber
                            ? `${data.articleNumber}.`
                            : ''
                        } ${data.title}`}
                        category={data.category.title}
                        timeRead={
                          data.readTime
                            ? timeConvert(data.readTime)
                            : data.timeReadBlog
                            ? data.timeReadBlog !== 0 &&
                              timeConvert(data.timeReadBlog)
                            : data.timeRead !== 0 && timeConvert(data.timeRead)
                        }
                        bgColor={data.category.color.hex}
                        borderColor={data.category.border}
                        thumbnail={
                          data.thumbnail && data.thumbnail.asset
                            ? urlFor(data.thumbnail).width(750).url()
                            : false
                        }
                        blursrc={
                          data.thumbnail && data.thumbnail.asset
                            ? urlFor(data.thumbnail)
                                .blur(2)
                                .format('webp')
                                .width(350)
                                .url()
                            : false
                        }
                        alt={
                          data.thumbnail && data.thumbnail.asset
                            ? data.thumbnail.name
                            : false
                        }
                      />
                    )),
                  )}
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
                : !(postNum >= articleAPI.length) && (
                    <div className="flex mt-10">
                      <FancyLink
                        onClick={handleLoadMore}
                        className="py-4 px-5 text-xs text-gray tracking-widest transition-all ease-linear hover:text-white hover:bg-gray border border-gray rounded-xl"
                      >
                        LOAD MORE
                      </FancyLink>
                    </div>
                  )}
            </section>
          </Container>
          {/* Button Sticky */}
          <StickyButton destination="/APISearch" arrow="left">
            Browse all issues
          </StickyButton>
          <Footer footer={footer} mailchimp={seo.mailchimpID} />
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
  const categoryAPI = await client.fetch(`
                    *[_type == "category"]
                    `)
  const issueAPI = await client.fetch(`
                    *[_type == "issue"]
                    `)
  const articleAPI = await client.fetch(`*[
    _type == "issue"
  ] | order(issueNumber asc) {
    ...,
    "article": *[_type=='article' && references(^._id) ] | order(articleNumber asc) {
      ...,
      category->,
      "timeRead": round(length(pt::text(description)) / 5 / 180 ),
      "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
    }
  }`)
  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      seoAPI,
      searchAPI,
      categoryAPI,
      articleAPI,
      issueAPI,
      footerAPI,
      headerAPI,
    },
  }
}
