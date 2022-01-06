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
import EditorialIssueCard from '@/components/modules/editorial/editorialIssueCard'

// Helpers
import client from '@/helpers/sanity/client'
import { toPlainText } from '@/helpers/functional/toPlainText'
import urlFor from '@/helpers/sanity/urlFor'

export default function EditorialTemplate({ issueAPI, seo, editorial, footer }) {

  console.log(issueAPI)

  const dataSoon = issueAPI
    .filter((data) => data.comingSoon === true)
    .sort((a, b) => {
      return a.issueNumber - b.issueNumber
    })
  const processedIssue = issueAPI.sort((a, b) => {
    return b.issueNumber - a.issueNumber
  }) // sort array descending

  const isComingSoon = dataSoon.length > 0 ? true : false // tanda if there is a comingsoon card or not

  const checkClosest = () => {
    const today = new Date()

    const dataSoon = issueAPI.filter((data) => data.comingSoon === true)

    if (dataSoon.length > 0) {
      const closest = dataSoon.reduce((a, b) => {
        const adiff = new Date(a.date) - today
        return adiff > 0 && adiff < new Date(b.date) - today ? a : b
      })

      return closest
    } else {
      return false
    }
  }

  useEffect(() => {
    // check if coming soon is enabled or present
    if (isComingSoon) {
      window.scrollTo(0, 315)
    } else {
      window.scrollTo(0, 0)
    }

    return () => {}
  }, [])

  return (
    <Layout>

      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" variants={fade}>
          {/* Header Gap */}
          {/* Untuk Content */}
          <section className="pb-10 w-full h-full flex flex-col">
            <Container className="max-md:px-6">
              {/* Sticky Container */}
              <div className={`relative w-full`}>
                <div
                  className={`w-full setflex-center  pt-10 comingsoonSticky`}
                >
                  <HeaderGap />
                  {/* Title */}
                  <div className="mb-14">
                    <h1 className="titlestyle">
                      Editorial
                      <span className="sub">Issues</span>Index
                    </h1>
                  </div>
                  {/* // COMING SOON TEST */}
                  {isComingSoon && (
                    <EditorialIssueCard
                      comingsoon={true}
                      title={checkClosest().title}
                      date={checkClosest().date}
                      dark={checkClosest().dark}
                      bgColor={
                        checkClosest().thumbnail &&
                        !checkClosest().thumbnail.placeholder &&
                        checkClosest().thumbnail.color.hex
                          ? checkClosest().thumbnail.color.hex
                          : '#fff'
                      }
                      className="mb-10"
                      imageThumbnail={
                        checkClosest().thumbnail &&
                        urlFor(checkClosest().thumbnail.placeholder).url()
                      }
                    />
                  )}
                </div>
                {isComingSoon && <div className={`stickySpacer`} />}
                {/* Spacer */}
              </div>
              {/* Card */}
              <div
                id="editorialIssuesList"
                className={`relative w-full h-full space-y-10 ${
                  isComingSoon ? 'comingsoonMargin' : ''
                }`}
              >
                {processedIssue.map((data, id) => {
                  if (!data.comingSoon)
                    return (
                      <EditorialIssueCard
                        key={id}
                        issueNo={data.issueNumber}
                        title={data.title}
                        date={data.date}
                        dark={data.dark}
                        bgColor={
                          data.thumbnail &&
                          !data.thumbnail.placeholder &&
                          data.thumbnail.color.hex
                            ? data.thumbnail.color.hex
                            : '#fff'
                        }
                        totalArticles={data.articleCount}
                        destination={`/editorial/${data.slug.current}`}
                        imageThumbnail={
                          data.thumbnail &&
                          urlFor(data.thumbnail.placeholder).url()
                        }
                        descriptions={<p>{toPlainText(data.description)}</p>}
                      />
                    )
                })}
              </div>
            </Container>
          </section>
          {/* Button Sticky */}
          <StickyButton destination="/editorial/search" arrow="right">
            SEARCH ALL ARTICLES
          </StickyButton>
          <Footer footer={footer} />
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
