import { useEffect, useRef, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import checkMonth from '@/helpers/functional/checkMonth'
import { PortableText } from '@portabletext/react'

import applyScrollTrigger from '@/components/utils/applyScrollTrigger'

export default function Index({ issueAPI, seoAPI }) {
  const router = useRouter()
  const [seo] = seoAPI
  const [issue] = issueAPI
  const dark = issue.dark
  const containerRef = useRef(null)
  const appContext = useAppContext()

  useEffect(() => {
    appContext.setHeader({
      headerStyle: issue.headerOption ? issue.headerOption : 'default',
    })
    // white, black, blur-black, blur-white, trans-white, trans-black

    window.scroll(0, 0)

    const scrollTriggerAnimation = applyScrollTrigger({
      animation: animationObj,
    })

    return () => {
      appContext.setHeader({ headerStyle: 'default' })
      scrollTriggerAnimation.revert()
    }
  }, [])

  //check title word count
  const maxLetter = 10
  const [titleS, setSize] = useState(false)
  useEffect(() => {
    const splitTitle = issue.title.split(' ')

    splitTitle.forEach((word) => {
      setSize(word.length > maxLetter)
    })
  }, [])

  // ANIMATION
  const animationObj = [
    () => {
      // Issue No Animation
      const id = 'issueNo'
      const elem = document.querySelector('#issueNo')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          // id of scroll container
          scrub: 0.5,
          start: 'top 0%',
          end: 'bottom -0%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              y: '90%',
              scale: 4.5,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // Start Background
      const id = 'First BG'
      const elem = document.querySelector('#firstBG')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          // id of scroll container
          scrub: 0.5,
          start: 'top 0%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              opacity: 0,
              scale: 1.25,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // Start Background
      const id = 'End BG'
      const elem = document.querySelector('#endBg')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          // id of scroll container
          scrub: 0.5,
          start: 'top 0%',
          end: 'bottom 0%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              scale: 1.1,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
    () => {
      // Scroller Dissapear
      const id = 'scrollIndicator'
      const elem = document.querySelector('#scrollIndicator')
      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '#trigger1', // which section will be tracked as the scroll trigger
          // id of scroll container
          scrub: 0.5,
          start: 'top -10%',
          end: 'bottom 50%',
        },
      }

      // Input Animation
      const animation = [
        {
          to: [
            elem,
            {
              opacity: 0,
              ease: 'none',
            },
          ],
        },
      ]

      return { id, elem, settings, animation }
    },
  ]

  const serializers = {
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p align="center">{children}</p>,
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      h5: ({ children }) => <h5>{children}</h5>,
      center: ({ children }) => <p align="center">{children}</p>,
      left: ({ children }) => <p align="left">{children}</p>,
      right: ({ children }) => <p align="right">{children}</p>,
    },
    list: {
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    types: {
      code: (props) => (
        <div dangerouslySetInnerHTML={{ __html: props.value.code }} />
      ),
    },
    marks: {
      add_ann: (props) =>
        props.value?.link ? (
          <FancyLink
            destination={props.value.link}
            blank={props.value.target_blank}
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
              backgroundColor: props.value?.bgColor
                ? props.value?.bgColor
                : 'transparent',
              fontSize: props.value?.fontSize
                ? props.value?.fontSize
                : 'initial',
            }}
            className={
              props.value?.font
                ? props.value?.font === 'display'
                  ? 'font-default'
                  : props.value.font
                : 'font-default'
            }
          >
            {props.children}
          </FancyLink>
        ) : (
          <span
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
              backgroundColor: props.value?.bgColor
                ? props.value?.bgColor
                : 'transparent',
              fontSize: props.value?.fontSize
                ? props.value?.fontSize
                : 'initial',
            }}
            className={
              props.value?.font
                ? props.value?.font === 'display'
                  ? 'font-default'
                  : props.value.font
                : 'font-default'
            }
          >
            {props.children}
          </span>
        ),
      largerSize: (props) => (
        <span style={{ fontSize: '1.5em' }}>{props.children}</span>
      ),
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
    },
  }

  return (
    <Layout>
      <SEO
        title={issue.title}
        pagelink={`editorial/${issue.slug.current}`}
        inputSEO={issue.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      {/* Issue Title */}
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
          className={`z-1 relative no-select-all`}
        >
          {/* Issue Number */}
          <div
            id="issueNo"
            className="h-screen top-0 left-0 right-0  setflex-center w-screen fixed z-10 pointer-events-none"
          >
            <Container className="max-md:px-6 text-center ">
              <span
                className={` font-normal text-7xl sm:text-8xl md:text-9xl  uppercase ${
                  dark === 'white-text' ? 'text-white' : 'text-black'
                }`}
              >
                ISSUE <span className="font-sans"> {issue.issueNumber}</span>
                {/* WHAT'S NXT? */}
              </span>
            </Container>
          </div>
          {/* Scroll Inidicator */}
          <div
            id="scrollIndicator"
            className="fixed z-20 bottom-10 left-0 w-full setflex-center pointer-events-none"
          >
            <span
              className={`font-light text-xs tracking-widest animate-fade-down  ${
                dark === 'white-text' ? 'text-white' : 'text-black'
              }`}
            >
              SCROLL
            </span>
          </div>

          {/* First Background */}
          <div
            id="firstBG"
            className={`fixed setflex-center h-screen w-screen top-0 left-0 -z-1 pointer-events-none ${
              dark === 'white-text' ? 'bg-black ' : 'bg-white'
            }`}
          >
            {issue.image1 ? (
              issue.image1.placeholder?.asset ? (
                <>
                  {/* Image  */}
                  <div
                    className={`absolute h-full w-full top-0 left-0  z-10 ${
                      dark === 'white-text'
                        ? 'bg-black opacity-40'
                        : 'bg-white opacity-25'
                    }`}
                  />
                  <Image
                    src={urlFor(issue.image1.placeholder)
                      .width(1400)
                      .format('webp')
                      .url()}
                    alt={issue.image1.placeholder.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL={urlFor(issue.image1.placeholder)
                      .width(800)
                      .blur(2)
                      .format('webp')
                      .url()}
                  />
                </>
              ) : (
                issue.image1.color && (
                  <>
                    {/* Plain Background  */}
                    <div
                      className="absolute h-full w-full top-0 left-0 z-20"
                      style={{ background: `${issue.image1.color.hex}` }}
                    />
                  </>
                )
              )
            ) : (
              <></>
            )}
          </div>

          {/* End Background */}
          <div
            id="endBg"
            className={`fixed setflex-center h-screen w-screen top-0 left-0 -z-10 pointer-events-none ${
              dark === 'white-text' ? 'bg-black ' : 'bg-white'
            }`}
          >
            {issue.image2 ? (
              issue.image2.placeholder?.asset ? (
                <>
                  {/* Image  */}
                  <div
                    className={`absolute  h-full w-full top-0 left-0 z-10  ${
                      dark === 'white-text'
                        ? 'bg-black opacity-40'
                        : 'bg-white opacity-25'
                    }`}
                  />
                  <Image
                    src={urlFor(issue.image2.placeholder)
                      .width(1400)
                      .format('webp')
                      .url()}
                    alt={issue.image2.placeholder.name}
                    layout="fill"
                    objectFit="cover"
                    loading="eager"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={urlFor(issue.image2.placeholder)
                      .width(800)
                      .blur(2)
                      .format('webp')
                      .url()}
                  />
                </>
              ) : (
                issue.image2.color && (
                  <>
                    {/* Plain Background  */}
                    <div
                      className="absolute h-full w-full top-0 left-0 z-20"
                      style={{ background: `${issue.image2.color.hex}` }}
                    />
                  </>
                )
              )
            ) : (
              <></>
            )}
          </div>
        </m.div>
      </LazyMotion>
      <LazyMotion features={domAnimation}>
        <m.main
          className="relative p-0 m-0 z-2"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
        >
          <div id="trigger1" className="w-full h-[150vh] mx-md:h-screen" />
          <div id="trigger2" className="w-full min-h-screen ">
            <div className="h-[50vh] w-full" />
            <section className="w-full">
              <Container
                className={`max-md:px-6 pb-24 pb-24-safe flex flex-col justify-between min-h-[65vh] content-center items-center ${
                  dark === 'white-text' ? 'text-white' : 'text-black'
                }`}
              >
                <span
                  id="issueNoInside"
                  className="font-serif font-normal italic text-5xl max-md:text-3xl"
                >
                  Issue {issue.issueNumber}
                </span>
                <h1
                  className={`title-issue font-sans font-normal  text-center leading-none ${
                    titleS
                      ? 'text-[2.5rem] sm:text-6xl md:text-6xl lg:text-8xl'
                      : 'text-7xl sm:text-8xl'
                  }`}
                >
                  {issue.title}
                </h1>
                <span className=" w-full text-center mt-5 max-md:mt-2 mb-auto">
                  {checkMonth(new Date(issue.date).getMonth())}{' '}
                  {new Date(issue.date).getFullYear()}
                  <span className="mx-4 inline-block">•</span>
                  {issue.articleCount} ARTICLES
                </span>
                <div className="content-issue editor-styling max-w-lg text-center mt-16">
                  <PortableText
                    value={issue.description}
                    components={serializers}
                  />
                </div>
                <FancyLink
                  destination={`/editorial/${issue.slug.current}/list`}
                  className={` mt-10 py-4 px-6 text-xs tracking-widest transition-all ease-linear ${
                    dark === 'white-text'
                      ? 'hover:bg-white border hover:text-black border-white rounded-xl'
                      : 'hover:bg-black border hover:text-white border-black rounded-xl'
                  }`}
                >
                  READ ISSUE
                </FancyLink>
              </Container>
            </section>
          </div>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
      *[_type == "issue" && comingSoon == false]
    `)

  const paths = res.map((data) => ({
    params: { editorial_slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const issueAPI = await client.fetch(
    `
      *[_type == "issue" && slug.current ==  "${params.editorial_slug}"]{
        ...,
        "articleCount": count(*[_type=='article' && references(^._id)])
      }
    `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
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
      headerAPI,
      footerAPI,
      familyListAPI
    },
  }
}
