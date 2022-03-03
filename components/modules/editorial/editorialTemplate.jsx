import { useEffect, useRef, useState } from 'react'

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
import HeadingTitle from '@/components/utils/headingTitle'

// Helpers
import urlFor from '@/helpers/sanity/urlFor'

export default function EditorialTemplate({
  issueAPI,
  seo,
  editorial,
  footer,
}) {
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

  const comingSoonComp = useRef(null)
  const [scrollOffset, setOffset] = useState(316)

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    // check if coming soon is enabled or present
    if (isComingSoon && width > 850) {
      window.scrollTo(0, scrollOffset)
    } else {
      window.scrollTo(0, 0)
    }
    const setBuffer = () => {
      if (isComingSoon) {
        if (width > 850) {
          setOffset(comingSoonComp.current.offsetHeight - 10) // get automated number - reduce the card header
        } else {
          setOffset(comingSoonComp.current.offsetHeight + 40) // get automated number + mobile margin bottom
        }
      }
    }

    window.addEventListener('resize', setBuffer, false)
    return () => {
      window.removeEventListener('resize', setBuffer, false)
    }
  }, [])

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    if (isComingSoon) {
      if (width > 850) {
        setOffset(comingSoonComp.current.offsetHeight - 10) // get automated number - reduce the card header
      } else {
        setOffset(comingSoonComp.current.offsetHeight + 40) // get automated number + mobile margin bottom
      }
    }
  }, [comingSoonComp])

  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" variants={fade}>
          {/* Header Gap */}
          {/* Untuk Content */}
          <section className="pb-10 w-full h-full flex flex-col">
            <Container className="max-md:px-6">
              {/* Sticky Container */}
              <div
                className={`relative w-full ${
                  !isComingSoon ? 'sticky top-0' : ''
                }`}
              >
                <div className={`w-full setflex-center comingsoonSticky`}>
                  <HeaderGap />
                  {/* Heading Title */}
                  <HeadingTitle className={`sticky`} style={{ top: '60px' }}>
                    Editorial
                    <span className="sub">Issues</span>Index
                  </HeadingTitle>
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
                        urlFor(checkClosest().thumbnail.placeholder)
                          .width(1500)
                          .url()
                      }
                      alt={
                        checkClosest().thumbnail &&
                        checkClosest().thumbnail.placeholder.name
                      }
                      blurDataURL={
                        checkClosest().thumbnail &&
                        urlFor(checkClosest().thumbnail.placeholder)
                          .blur(2)
                          .format('webp')
                          .width(500)
                          .url()
                      }
                      ref={comingSoonComp}
                    />
                  )}
                </div>
                {isComingSoon && (
                  <div
                    className={`stickySpacer`}
                    style={{ height: `${scrollOffset}px` }}
                  />
                )}
                {/* Spacer */}
              </div>
              {/* Card */}
              <div
                id="editorialIssuesList"
                className={`relative w-full h-full space-y-10`}
                style={{
                  marginTop: isComingSoon ? `-${scrollOffset - 0}px` : '0px',
                }}
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
                        alt={data.thumbnail && data.thumbnail.placeholder.name}
                        descriptions={data.coverText}
                        blurDataURL={
                          data.thumbnail &&
                          urlFor(data.thumbnail.placeholder)
                            .blur(2)
                            .format('webp')
                            .width(500)
                            .url()
                        }
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
