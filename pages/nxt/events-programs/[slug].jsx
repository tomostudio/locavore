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

import StickyButton from '@/components/modules/stickyButton'
import urlFor from '@/helpers/sanity/urlFor'
import { PortableText } from '@portabletext/react'
import dateConvert from '@/helpers/functional/dateConvert'

const EventsAndProgramsDetail = ({
  homeAPI,
  eventButtonText,
  eventAPI,
  settingAPI,
  footerAPI,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [event] = eventAPI
  const [setting] = settingAPI
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
      buttonLink: (props) => (
        <FancyLink
          blank="_blank"
          destination={props.value.link}
          className={`w-fit p-4 mx-auto text-d-small uppercase text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
        >
          {props.value.title}
        </FancyLink>
      ),
    },
    marks: {
      add_ann: (props) =>
        props.value.select_link === 'default' ? (
          <FancyLink
            destination={props.value.link}
            blank={props.value.target_blank}
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
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
        ) : props.value.select_link === 'wa_link' ? (
          <FancyLink
            destination={props.value.wa_link}
            blank={true}
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
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
          <FancyLink
            destination={props.value.email}
            blank={false}
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
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
        ),
      largerSize: (props) => (
        <span style={{ fontSize: '1.5em' }}>{props.children}</span>
      ),
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
    },
  }

  useEffect(() => {
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
        inputSEO={
          typeof event !== 'undefined' &&
          typeof event.seo !== 'undefined' &&
          event.seo
        }
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
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
          <div className="relative w-full aspect-[345/442] md:aspect-[8/3] rounded-[15px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full hidden md:block">
              <Image
                src={urlFor(event.image.imageDesktop).width(1200).url()}
                alt={event.image.imageDesktop.alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={urlFor(event.image.imageDesktop)
                  .blur(2)
                  .format('webp')
                  .width(100)
                  .url()}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full md:hidden">
              <Image
                src={urlFor(event.image.imageMobile).width(345).url()}
                alt={event.image.imageMobile.alt}
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
              <div className="hidden md:block w-[30%]" />
              <span className="w-full md:w-[70%] text-center md:text-left font-funkturm text-[2.5rem] md:text-d-additionalHeader text-[#BEC29D]">
                {event.title}
              </span>
            </div>
            <div className="w-full flex flex-col max-w-lg md:max-w-none  mx-auto md:flex-row gap-8 mt-8">
              <div className="w-full md:w-[30%] flex flex-col gap-3">
                <div className="w-full grid grid-flow-col-dense grid-rows-2 md:flex md:flex-col gap-4 md:gap-3 text-white text-center md:text-left">
                  {event.detailInfo?.map((data, id) => (
                    <div key={id} className="w-full flex flex-col uppercase">
                      <span>{data.infoTitle}:</span>
                      <span>{data.infoDetail}</span>
                    </div>
                  ))}
                  <FancyLink
                    target="_blank"
                    destination={event.ctaButton.buttonLink}
                    className="hidden md:block font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.1rem] w-fit transtion-all duration-300 hover:opacity-30"
                  >
                    {event.ctaButton.buttonText}
                  </FancyLink>
                </div>
              </div>
              <div className={`w-full md:w-[70%] text-white editor-styling`}>
                <PortableText value={event.content} components={serializer} />
              </div>
              <FancyLink
                target="_blank"
                destination={event.ctaButton.buttonLink}
                className="md:hidden mx-auto font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.1rem] w-fit transtion-all duration-300 hover:opacity-30"
              >
                {event.ctaButton.buttonText}
              </FancyLink>
            </div>
          </div>
        </Container>
        {/* Button Sticky */}
        <StickyButton
          destination="/nxt/events-programs"
          arrow="left"
          className="uppercase"
        >
          {eventButtonText.heading}
        </StickyButton>
      </motion.main>
      <Footer footer={footer} mailchimp={setting.mailchimpID} />
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
  const eventButtonText = await client.fetch(`
    *[_type == "event"][0] {
      heading
    }
    `)
  const homeAPI = await client.fetch(`
      *[_type == "homeNxt"]
      `)
  const settingAPI = await client.fetch(`
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
      homeAPI,
      eventButtonText,
      eventAPI,
      settingAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default EventsAndProgramsDetail
