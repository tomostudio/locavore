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
          webTitle: typeof seo !== 'undefined' ? seo.webTitle : '',
          description:
            typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_description
              : '',
          description:
            typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_image.name
              : '',
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
