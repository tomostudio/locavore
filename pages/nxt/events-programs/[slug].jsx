import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect } from 'react'
import Image from 'next/legacy/image'
import FancyLink from '@/components/utils/fancyLink'
import HeaderGap from '@/components/modules/headerGap'
import Container from '@/components/modules/container'

import detail from '@/public/nxt2/events/detail.png'
import detail_mobile from '@/public/nxt2/events/detail_mobile.png'
import StickyButton from '@/components/modules/stickyButton'
import PillButton from '@/components/modules/pillButton'
import urlFor from '@/helpers/sanity/urlFor'
import { PortableText } from '@portabletext/react'

const EventsAndProgramsDetail = ({ eventAPI, seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [event] = eventAPI
  const [seo] = seoAPI
  const [footer] = footerAPI

  const serializer = {
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p>{children}</p>,
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

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = 'black'
    window.scroll(0, 0)
    appContext.setHeader({
      headerStyle: 'blur-white',
    })

    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  return (
    <Layout>
      <SEO
        title={event.title}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className=" bg-black"
      >
        <HeaderGap />
        <Container className="relative flex flex-col mt-6 mb-10 md:my-20">
          <div className="relative w-full aspect-[345/442] sm:aspect-[8/3] rounded-[15px] overflow-hidden">
            <Image
              src={urlFor(event.image.imageDesktop).width(1200).url()}
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={urlFor(event.image.imageDesktop)
                .blur(2)
                .format('webp')
                .width(100)
                .url()}
              className="sm:block"
            />
            <div className="absolute top-0 left-0 w-full h-full sm:hidden">
              <Image
                src={urlFor(event.image.imageMobile).width(345).url()}
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={urlFor(event.image.imageMobile)
                  .blur(2)
                  .format('webp')
                  .width(100)
                  .url()}
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-10 md:mt-20 mx-auto max-w-4xl">
            <div className="w-full flex gap-8">
              <div className="hidden sm:block w-[30%]" />
              <span className="w-full sm:w-[70%] text-center sm:text-left font-funkturm text-m-additionalHeader md:text-d-additionalHeader text-[#BEC29D]">
                {event.title}
              </span>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-8 mt-8">
              <div className="w-full sm:w-[30%] flex flex-col gap-3">
                <div className="w-full grid grid-flow-col-dense grid-rows-2 sm:flex sm:flex-col gap-4 sm:gap-3 text-white text-center sm:text-left">
                  <span>
                    VENUE:
                    <br />
                    {event.venue}
                  </span>
                  <span>
                    DATE:
                    <br />
                    {event.date}
                  </span>
                  <span>
                    LOCATION:
                    <br />
                    {event.location}
                  </span>
                  <span>
                    TIME:
                    <br />
                    {event.time}
                  </span>
                </div>
                <FancyLink
                  target="_blank"
                  destination={event.registerLink}
                  className="hidden sm:block font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.1rem] w-fit transtion-all duration-300 hover:opacity-30"
                >
                  Register Now
                </FancyLink>
              </div>
              <div className="w-full sm:w-[70%] text-white editor-styling">
                <PortableText
                  value={event.description}
                  components={serializer}
                />
              </div>
              <FancyLink
                target="_blank"
                destination={event.registerLink}
                className="sm:hidden mx-auto font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.1rem] w-fit transtion-all duration-300 hover:opacity-30"
              >
                Register Now
              </FancyLink>
            </div>
          </div>
        </Container>
        {/* Button Sticky */}
        <StickyButton destination="/nxt/events-programs" arrow="left">
          EVENTS & PROGRAMS
        </StickyButton>
      </motion.main>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "eventList"]
      `)

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const eventAPI = await client.fetch(
    `
      *[_type == "eventList" && slug.current == "${params.slug}"] 
    `,
  )
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `)
  const footerAPI = await client.fetch(`
                      *[_type == "footer"]
                      `)
  const headerAPI = await client.fetch(`
                      *[_type == "header"]
                      `)
  return {
    props: {
      eventAPI,
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default EventsAndProgramsDetail