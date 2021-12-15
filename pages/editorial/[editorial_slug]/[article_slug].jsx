// Helpers
import client from '@/helpers/sanity/client'
import Blog from '@/components/modules/articleTemplate/blog'
import Caroussel from '@/components/modules/articleTemplate/caroussel'
import Gallery from '@/components/modules/articleTemplate/gallery'
import Video from '@/components/modules/articleTemplate/video'

export default function ArticleSlug({
  articleAPI,
  seoAPI,
  headerAPI,
  footerAPI,
  nextArticle,
}) {
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [article] = articleAPI

  return article.layout === 'blog' ? (
    <Blog
      article={article}
      seo={seo}
      footer={footer}
      nextArticle={nextArticle}
    />
  ) : article.layout === 'caroussel' ? (
    <Caroussel
      article={article}
      seo={seo}
      footer={footer}
      nextArticle={nextArticle}
    />
  ) : article.layout === 'gallery' ? (
    <Gallery
      article={article}
      seo={seo}
      footer={footer}
      nextArticle={nextArticle}
    />
  ) : (
    article.layout === 'video' && (
      <Video
        article={article}
        seo={seo}
        footer={footer}
        nextArticle={nextArticle}
      />
    )
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "article"] {
          ...,
          issue->,
          category->,
        }
      `)

  const paths = res.map((data) => ({
    params: {
      article_slug: data.slug.current.toString(),
      previewData: data.slug,
      articleNumber: data.articleNumber,
      editorial_slug: data.issue.slug.current.toString(),
      ...data,
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
          issue->,
          category->,
          "timeRead": round(length(pt::text(description)) / 5 / 180 ),
          "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
        }
      `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)

  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `)

  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)

  const next = await client.fetch(
    `
        *[_type == "issue" && slug.current ==  "${params.editorial_slug}"] {
          ...,
          "article": *[_type=='article' && references(^._id) ] | order(articleNumber asc) {
            ...,
            category->,
            "timeRead": round(length(pt::text(description)) / 5 / 180 ),
            "timeReadBlog": round(((length(pt::text(blog[].content)) / 5) + (length(pt::text(description)) / 5)) / 180 )
          }
        }
      `,
  )

  const processedArticle = next[0].article.sort((a, b) => {
    return a.articleNumber - b.articleNumber
  }) // sort article based on article number

  const nextArticleIndex =
    processedArticle.indexOf(
      processedArticle.find(({ slug }) => slug.current == params.article_slug),
    ) + 1

  if (nextArticleIndex < processedArticle.length) {
    nextArticle = {
      editorial_slug: params.editorial_slug,
      article: processedArticle[nextArticleIndex],
    }
  } else {
    nextArticle = null
  }

  return {
    props: {
      articleAPI,
      seoAPI,
      headerAPI,
      footerAPI,
      nextArticleIndex,
      processedArticle,
      nextArticle,
    },
  }
}
