import EditorialTemplate from '@/components/modules/editorial/editorialTemplate'
import urlFor from '@/helpers/sanity/urlFor'

// Helpers
import client from '@/helpers/sanity/client'

export default function Home({
  issueAPI,
  seoAPI,
  editorialAPI,
  footerAPI,
  homeAPI,
}) {
  const [seo] = seoAPI
  const [editorial] = editorialAPI
  const [footer] = footerAPI
  const [home] = homeAPI

  return (
    <>
      <SEO
        seo={{
          title: 'Home',
          webTitle: seo.webTitle && seo.webTitle,
          description:
            home && home.seo && home.seo.seo_description
              ? home.seo.seo_description
              : seo.seo && seo.seo.seo_description,
          meta_keywords:
            home && home.seo && home.seo.seo_keywords
              ? home.seo.seo_keywords
              : seo.seo.seo_keywords && seo.seo.seo_keywords,
          image:
            home && home.seo && home.seo.seo_image
              ? urlFor(home.seo.seo_image).url()
              : seo.seo && seo.seo.seo_image && urlFor(seo.seo.seo_image).url(),
          image_alt:
            home && home.seo && home.seo.seo_image.name
              ? home.seo.seo_image.name
              : seo.seo && seo.seo.seo_image.name && seo.seo.seo_image.name,
        }}
      />
      <EditorialTemplate
        issueAPI={issueAPI}
        seo={seo}
        editorial={editorial}
        footer={footer}
      />
    </>
  )
}

export async function getStaticProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"] {
    issue->
  }
  `)
  const issueAPI = await client.fetch(`
                    *[_type == "issue"] | order(issueNumber asc) {
                      ...,
                      "articleCount": count(*[_type=='article' && references(^._id)])
                    }
                    `)
  const seoAPI = await client.fetch(`
                    *[_type == "settings"]
                    `)
  const editorialAPI = await client.fetch(`
                    *[_type == "editorial"]
                    `)
  const headerAPI = await client.fetch(`
                    *[_type == "header"]
                    `)
  const footerAPI = await client.fetch(`
                    *[_type == "footer"]
                    `)
  return {
    props: {
      issueAPI,
      seoAPI,
      editorialAPI,
      footerAPI,
      homeAPI,
      headerAPI,
    },
    redirect: {
      destination: `/editorial/${homeAPI[0].issue.slug.current}`,
      permanent: false,
    },
  }
}
