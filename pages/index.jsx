import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'

// Components
import SEO from '@/components/utils/seo'

// Helpers
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'

export default function Home({ seoAPI }) {
  const [seo] = seoAPI
  useEffect(() => {
    // const { pathname } = Router;
    // if (pathname == '/') {
    //   // Router.push('/editorial/metamorphosis');
    //   location.replace('/editorial/metamorphosis');
    // }
  }, [])

  return (
    <>
      <SEO
        seo={{
          title: 'Home',
          webTitle: seo.webTitle && seo.webTitle,
          description: seo.seo && seo.seo.seo_description,
          meta_keywords: seo.seo.seo_keywords && seo.seo.seo_keywords,
          image:
            seo.seo && seo.seo.seo_image && urlFor(seo.seo.seo_image).url(),
          image_alt:
            seo.seo && seo.seo.seo_image.name && seo.seo.seo_image.name,
        }}
      />
    </>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)

  const homeAPI = await client.fetch(`
  *[_type == "home"] {
    issue->
  }
  `)

  //redirect test
  return {
    redirect: {
      destination: `/editorial/${homeAPI[0].issue.slug.current}`,
      permanent: false,
    },
  }

  return {
    props: {
      seoAPI,
    },
  }
}
