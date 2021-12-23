import EditorialTemplate from '@/components/modules/editorial/editorialTemplate'
import client from '@/helpers/sanity/client'

export default function Index({ issueAPI, seoAPI }) {
  const [seo] = seoAPI
  const [issue] = issueAPI

  return (
    <>
      <EditorialTemplate seo={seo} issue={issue} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
      *[_type == "issue" && comingSoon == false]
    `)

  const paths = res.map((data) => ({
    params: { editorial_slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const issueAPI = await client.fetch(
    `
      *[_type == "issue" && slug.current ==  "${params.editorial_slug}"]
    `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `)
  return {
    props: {
      issueAPI,
      seoAPI,
      headerAPI
    },
  }
}
