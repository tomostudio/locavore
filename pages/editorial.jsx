import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import EditorialIssueCard from '@/components/utils/editorialIssueCard'

// Components
import StickyButton from '@/components/utils/stickyButton'

// Helpers
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { checkText } from '@/helpers/functional/checkText'
import { toPlainText } from '@/helpers/functional/toPlainText'

export default function Editorial({ issueAPI }) {
  const [windowWidth, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
    window.scroll(0, 0)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () => {}
  }, [])
  return (
    <Layout>
      <NextSeo title="Editorial" />

      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" variants={fade}>
          {/* Header Gap */}
          <HeaderGap />
          {/* Untuk Content */}
          <section className="pt-10 pb-10 w-full h-full flex flex-col">
            <Container className="max-md:px-6">
              <div className="w-full h-full setflex-center">
                {/* Title */}

                <h1 className="titlestyle">
                  Editorial
                  <span className="sub">Issues</span>Index
                </h1>
              </div>
              {/* Card */}
              <div
                id="edtiroalIssues"
                className="relative mt-14 w-full h-full space-y-10 "
              >
                {issueAPI.map((data, id) =>
                  data.title.toLowerCase() === 'under construction' ? (
                    <EditorialIssueCard
                      key={id}
                      issueNo={id}
                      title={data.title}
                      date={data.date}
                      dark={false}
                      totalArticles={15}
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
                      totalArticles={15}
                      destination={`/editorial/${data.slug.current}`}
                      imageThumbnail={urlFor(data.image).url()}
                      styleTitle={{
                        fontSize:
                          checkText(data.title, '3rem Whyte Inktrap') >
                            windowWidth - 144 && '29px',
                      }}
                      descriptions={<p>{toPlainText(data.description)}</p>}
                    />
                  ),
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
                    *[_type == "issue"]
                    `)
  return {
    props: {
      issueAPI,
    },
  }
}
