import EditorialTemplate from '@/components/modules/editorial/editorialTemplate'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'

// Helpers
import client from '@/helpers/sanity/client'
import { useEffect } from 'react'

export default function Editorial({
  issueAPI,
  seoAPI,
  editorialAPI,
  footerAPI,
}) {
  const router = useRouter()
  const [seo] = seoAPI
  const [editorial] = editorialAPI
  const [footer] = footerAPI

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <SEO
        title={'Editorial'}
        pagelink={router.pathname}
        inputSEO={
          typeof editorial !== 'undefined' &&
          typeof editorial.seo !== 'undefined' &&
          editorial.seo
        }
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <EditorialTemplate
        issueAPI={issueAPI}
        editorial={editorial}
        footer={footer}
        mailchimp={seo.mailchimpID}
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
  const familyListAPI = await client.fetch(`
                    *[_type == "family_list"] | order(order asc)
                    `)
  return {
    props: {
      issueAPI,
      seoAPI,
      editorialAPI,
      footerAPI,
      headerAPI,
      familyListAPI,
    },
  }
}
