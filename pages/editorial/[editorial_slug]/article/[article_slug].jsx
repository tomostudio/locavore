import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Navbar from '@/components/modules/header'

// Components
import PillButton from '@/components/modules/pillButton'
import ArticleCard from '@/components/modules/editorial/articleCard'
import StickyButton from '@/components/modules/stickyButton'
import SEO from '@/components/utils/seo'

// Helpers
import FancyLink from '@/components/utils/fancyLink'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import Blog from '@/components/modules/articleTemplate/blog'
import Caroussel from '@/components/modules/articleTemplate/caroussel'
import Gallery from '@/components/modules/articleTemplate/gallery'
import Video from '@/components/modules/articleTemplate/video'

export default function ArticleSlug({ articleAPI, seoAPI, nextArticle }) {
  const router = useRouter()
  const [seo] = seoAPI
  const [article] = articleAPI
  // const onMouseClick = (slug) => {
  //   document.querySelectorAll(`[data-slug*="${slug}"]`)[0].scrollIntoView({
  //     behavior: 'smooth',
  //   })
  // }

  return article.layout === 'blog' ? (
    <Blog article={article} seo={seo} nextArticle={nextArticle} />
  ) : article.layout === 'caroussel' ? (
    <Caroussel article={article} seo={seo} nextArticle={nextArticle} />
  ) : article.layout === 'gallery' ? (
    <Gallery article={article} seo={seo} nextArticle={nextArticle} />
  ) : (
    article.layout === 'video' && (
      <Video article={article} seo={seo} nextArticle={nextArticle} />
    )
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "article"] {
          ...,
          issue->
        }
      `)

  const paths = res.map((data) => ({
    params: {
      article_slug: data.slug.current.toString(),
      editorial_slug: data.issue.slug.current.toString(),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  let nextArticle = {}
  const articleAPI = await client.fetch(
    `
        *[_type == "article" && slug.current == "${params.article_slug}"] {
          ...,
          category->,
          "timeRead": round(length(pt::text(description)) / 5 / 180 ),
          "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
        }
      `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const next = await client.fetch(
    `
        *[_type == "issue" && slug.current == "${params.editorial_slug}"] {
          "article": *[_type=='article' && references(^._id)] {
            ...,
            category->,
            "timeRead": round(length(pt::text(description)) / 5 / 180 ),
            "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
          }
        }
      `,
  )
  next[0].article.forEach((data, id) => {
    if (next[0].article[id + 1]) {
      nextArticle = {
        editorial_slug: params.editorial_slug,
        article: next[0].article[id + 1],
      }
    } else {
      nextArticle = {
        editorial_slug: params.editorial_slug,
        article: next[0].article[0],
      }
    }
  })
  return {
    props: {
      articleAPI,
      seoAPI,
      nextArticle,
    },
  }
}
