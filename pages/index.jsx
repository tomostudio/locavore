// Helpers
import client from '@/helpers/sanity/client'
import EditorialTemplate from '@/components/modules/editorial/editorialTemplate'

export default function Home({ issueAPI, seoAPI }) {
  const [seo] = seoAPI
  const [issue] = issueAPI

  return (
    <>
      <EditorialTemplate seo={seo} issue={issue} />
    </>
  )
}

export async function getServerSideProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"] {
    issue->
  }
  `)

  const issueAPI = await client.fetch(
    `
      *[_type == "issue" && slug.current ==  "${homeAPI[0].issue.slug.current}"]
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
      headerAPI,
    },
    redirect: {
      destination: `/editorial/${homeAPI[0].issue.slug.current}`,
      permanent: false,
    },
  }
}
