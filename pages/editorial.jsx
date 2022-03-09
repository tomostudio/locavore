import EditorialTemplate from '@/components/modules/editorial/editorialTemplate'
import SEO from '@/components/utils/seo'
import urlFor from '@/helpers/sanity/urlFor'

// Helpers
import client from '@/helpers/sanity/client'

export default function Editorial({
  issueAPI,
  seoAPI,
  editorialAPI,
  footerAPI,
}) {
  const [seo] = seoAPI
  const [editorial] = editorialAPI
  const [footer] = footerAPI

  return (
    <>
      <SEO
        seo={{
          title: 'Editorial',
          webTitle: seo.webTitle ? seo.webTitle : "",
          description:
            editorial && editorial.seo && editorial.seo.seo_description
              ? editorial.seo.seo_description
              : seo.seo && seo.seo.seo_description,
          meta_keywords:
            editorial && editorial.seo && editorial.seo.seo_keywords
              ? editorial.seo.seo_keywords
              : seo.seo.seo_keywords && seo.seo.seo_keywords,
          image:
            editorial && editorial.seo && editorial.seo.seo_image
              ? urlFor(editorial.seo.seo_image).url()
              : seo.seo && seo.seo.seo_image && urlFor(seo.seo.seo_image).url(),
          image_alt:
            editorial && editorial.seo && editorial.seo.seo_image.name
              ? editorial.seo.seo_image.name
              : seo.seo && seo.seo.seo_image.name && seo.seo.seo_image.name,
        }}
      />
      <EditorialTemplate
        issueAPI={issueAPI}
        editorial={editorial}
        footer={footer}
      />
    </>
  )
}

export async function getStaticProps() {
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
      headerAPI,
    },
  }
}
