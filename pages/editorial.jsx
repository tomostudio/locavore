import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import StickyButton from '@/components/modules/stickyButton'
import SEO from '@/components/utils/seo'
import EditorialIssueCard from '@/components/modules/editorial/editorialIssueCard'

// Helpers
import client from '@/helpers/sanity/client'
import { toPlainText } from '@/helpers/functional/toPlainText'
import urlFor from '@/helpers/sanity/urlFor'
import { checkText } from '@/helpers/functional/checkText'

export default function Editorial({ issueAPI, seoAPI, editorialAPI }) {
  const [windowWidth, setWidth] = useState()
  const [seo] = seoAPI
  const [editorial] = editorialAPI

  const checkClosest = () => {
    const today = new Date()

    const closest = issueAPI.reduce((a, b) => {
      const adiff = new Date(a.date) - today
      return adiff > 0 && adiff < new Date(b.date) - today ? a : b
    })

    return closest
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.scroll(0, 0)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () => {}
  }, [])

  //Variable to toggle Coming Soon Style
  const comingsoon = true

  return (
    <Layout>
      <SEO
        seo={{
          title: 'Editorial',
          webTitle: typeof seo !== 'undefined' ? seo.webTitle : '',
          description:
            typeof editorial !== 'undefined' &&
            typeof editorial.seo !== 'undefined'
              ? editorial.seo.seo_description
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof editorial !== 'undefined' &&
            typeof editorial.seo !== 'undefined'
              ? editorial.seo.seo_keywords
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof editorial !== 'undefined' &&
            typeof editorial.seo !== 'undefined'
              ? urlFor(editorial.seo.seo_image).url()
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof editorial !== 'undefined' &&
            typeof editorial.seo !== 'undefined'
              ? editorial.seo.seo_image.name
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_image.name
              : '',
        }}
      />

      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" variants={fade}>
          {/* Header Gap */}
          {/* Untuk Content */}
          <section className="pb-10 w-full h-full flex flex-col">
            <Container className="max-md:px-6">
              {/* Sticky Container */}
              <div className={`relative w-full`}>
                <div
                  className={`w-full setflex-center  pt-10 ${
                    new Date(checkClosest().date) > new Date() &&
                    'comingsoonSticky'
                  }`}
                >
                  <HeaderGap />
                  {/* Title */}
                  <div className="mb-14">
                    <h1 className="titlestyle">
                      Editorial
                      <span className="sub">Issues</span>Index
                    </h1>
                  </div>
                  {new Date(checkClosest().date) > new Date() && (
                    <EditorialIssueCard
                      comingsoon={true}
                      title={checkClosest().title}
                      date={checkClosest().date}
                      totalArticles={15}
                      className="mb-10"
                      destination={`/editorial/${checkClosest().slug.current}`}
                      imageThumbnail={urlFor(checkClosest().image).url()}
                      descriptions={
                        <p>{toPlainText(checkClosest().description)}</p>
                      }
                    />
                  )}
                </div>
                {/* Spacer */}
                {new Date(checkClosest().date) > new Date() && (
                  <div className={`stickySpacer`} />
                )}
              </div>
              {/* Card */}
              <div
                id="editorialIssuesList"
                className={`relative w-full h-full space-y-10 ${
                  new Date(checkClosest().date) > new Date() && 'comingsoonAdj'
                }`}
              >
                {issueAPI.map(
                  (data, id) =>
                    new Date(checkClosest().date) > new Date() &&
                    !(checkClosest().slug.current === data.slug.current) &&
                    (data.title.toLowerCase() === 'under construction' ? (
                      <EditorialIssueCard
                        key={id}
                        issueNo={id}
                        title={data.title}
                        date={data.date}
                        dark={false}
                        totalArticles={data.articleCount}
                        destination={`/editorial/${data.slug.current}`}
                        imageThumbnail={urlFor(data.image).url()}
                        styleTitle={{
                          fontSize:
                            checkText(data.title, '3rem Whyte Inktrap') >
                              windowWidth - 144 && '29px',
                        }}
                        descriptions={<p>{toPlainText(data.description)}</p>}
                      />
                    ) : (
                      <EditorialIssueCard
                        key={id}
                        issueNo={id}
                        title={data.title}
                        date={data.date}
                        dark={true}
                        bgColor={data.bgColor ? data.bgColor : '#fff'}
                        totalArticles={data.articleCount}
                        destination={`/editorial/${data.slug.current}`}
                        imageThumbnail={urlFor(data.image).url()}
                        styleTitle={{
                          fontSize:
                            checkText(data.title, '3rem Whyte Inktrap') >
                              windowWidth - 144 && '29px',
                        }}
                        descriptions={<p>{toPlainText(data.description)}</p>}
                      />
                    )),
                )}
              </div>
            </Container>
          </section>
          {/* Button Sticky */}
          <StickyButton destination="/editorial/search" arrow="right">
            SEARCH ALL ARTICLES
          </StickyButton>
          <Footer />
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps() {
  const issueAPI = await client.fetch(`
                    *[_type == "issue"] {
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
  return {
    props: {
      issueAPI,
      seoAPI,
      editorialAPI,
    },
  }
}
