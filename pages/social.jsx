import { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import useInfiniteScroll from 'react-infinite-scroll-hook'

// Layout
import Layout from '@/components/modules/layout'

// Components
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'

// Helpers
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'

export default function Social({ seoAPI, socialAPI }) {
  const [seo] = seoAPI
  const [social] = socialAPI
  const appContext = useAppContext()
  const [postNum, setPostNum] = useState(12)
  const [hasNextPage, setHasNextPage] = useState(true)

  const fetchMoreData = () => {
    setPostNum((prevPostNum) => prevPostNum + 12)
    if (postNum >= social.content.length) {
      setHasNextPage(false)
    }
  }

  const [sentryRef] = useInfiniteScroll({
    hasNextPage: hasNextPage,
    onLoadMore: fetchMoreData,
  })

  useEffect(() => {
    appContext.setHeader({ headerStyle: 'hidden' })
    window.scroll(0, 0)
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])
  return (
    <Layout>
      <SEO
        seo={{
          title: 'Social',
          webTitle: typeof seo !== 'undefined' ? seo.webTitle : '',
          description:
            typeof social !== 'undefined' && typeof social.seo !== 'undefined'
              ? social.seo.seo_description
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof social !== 'undefined' && typeof social.seo !== 'undefined'
              ? social.seo.seo_keywords
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof social !== 'undefined' && typeof social.seo !== 'undefined'
              ? urlFor(social.seo.seo_image).url()
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof social !== 'undefined' && typeof social.seo !== 'undefined'
              ? social.seo.seo_image.name
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_image.name
              : '',
        }}
      />

      {/* Untuk Content */}
      <section className="w-full h-full flex flex-col">
        <FancyLink
          destination="/"
          // blank={true}
          className="sticky top-0 left-0 w-full z-25"
        >
          <header className="py-2 w-full flex items-center justify-center border-b border-black bg-white">
            <div className="relative w-10 h-10">
              {seo.logo ? (
                <Image
                  src={urlFor(seo.logo).url()}
                  alt={seo.webTitle ? seo.webTitle : 'Locavore'}
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              ) : (
                <Image
                  src={`/locavore-black.png`}
                  alt={seo.webTitle ? seo.webTitle : 'Locavore'}
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              )}
            </div>
            <span className="pl-3 text-sm uppercase">
              {seo.webTitle ? seo.webTitle : 'Locavore'}
            </span>
          </header>
        </FancyLink>
        <div className="w-full mx-auto mb-14">
          <span className="text-xs block my-5 text-center">
            TAP ON ANY IMAGE TO LEARN MORE
          </span>
          <div
            className="w-56rem max-md:w-full mx-auto grid auto-rows-auto grid-cols-3	gap-2 max-md:px-1"
            id="social"
          >
            {social.content.slice(0, postNum).map((data, id) => (
              <FancyLink
                destination={data.link}
                blank={true}
                key={id}
                ref={sentryRef}
              >
                <Image
                  src={urlFor(data.image).url()}
                  alt={data.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </FancyLink>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const socialAPI = await client.fetch(`
  *[_type == "social"]
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
      seoAPI,
      socialAPI,
      headerAPI,
      footerAPI,
      familyListAPI
    },
  }
}
