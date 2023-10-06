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
import HeaderGap from '@/components/modules/headerGap'

import StickyButton from '@/components/modules/stickyButton'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import ScrollContainer from 'react-indiana-drag-scroll'
import urlFor from '@/helpers/sanity/urlFor'
import { PortableText } from '@portabletext/react'
import FancyLink from '@/components/utils/fancyLink'
import Arrow from '@/components/utils/arrow'

const FeaturesAndFacilitiesDetail = ({
  homeAPI,
  facilitiesButtonText,
  facilitiesAPI,
  settingAPI,
  footerAPI,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [facilities] = facilitiesAPI
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
            {props.value.arrow && (
              <Arrow position="right" fill="white" className="ml-2 inline" />
            )}
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
        title={facilities.title}
        pagelink={router.pathname}
        inputSEO={
          typeof facilities !== 'undefined' &&
          typeof facilities.seo !== 'undefined' &&
          facilities.seo
        }
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
      />
      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="relative bg-black flex flex-col md:flex-row flex-wrap w-full"
      >
        <div className="relative w-full md:w-1/2 h-full grow flex flex-col md:flex-row mb-0">
          {useMediaQuery('(min-width: 850px)') ? (
            <div className="w-full flex flex-col">
              {facilities.images.map((data, id) => (
                <div key={id} className="relative aspect-[4/6]">
                  <Image
                    src={urlFor(data).width(720).url()}
                    alt={data.alt}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={urlFor(data)
                      .blur(2)
                      .format('webp')
                      .width(100)
                      .url()}
                  />
                </div>
              ))}
            </div>
          ) : (
            <ScrollContainer
              className={`relative w-full scroll-smooth hide-scrollbar`}
              horizontal={true}
              vertical={false}
              hideScrollbars={false}
              nativeMobileScroll={true}
            >
              <div className="w-fit flex items-center relative min-w-full">
                {facilities.images.map((data, id) => (
                  <div
                    key={id}
                    className="relative w-[80vw] sm:w-[66vw] aspect-[4/6]"
                  >
                    <Image
                      src={urlFor(data).width(720).url()}
                      alt={data.alt}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={urlFor(data)
                        .blur(2)
                        .format('webp')
                        .width(100)
                        .url()}
                    />
                  </div>
                ))}
              </div>
            </ScrollContainer>
          )}
        </div>
        <div className="md:sticky md:top-0 md:right-0 w-full md:w-1/2 md:min-h-screen h-full flex justify-end">
          <div className="w-full mx-auto max-w-2xl px-10 max-md:px-5 setflex-center py-20 md:py-24">
            <HeaderGap className="hidden md:block" />
            <h1 className="text-[2.5rem] md:text-d-additionalHeader mb-10 text-[#BEC29D] font-funkturm">
              {facilities.title}
            </h1>
            {facilities.imageIcon?.asset && (
              <div className="relative w-full aspect-[5/2] mb-10">
                <Image
                  src={urlFor(facilities.imageIcon).width(500).url()}
                  alt={facilities.imageIcon.name}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={urlFor(facilities.imageIcon)
                    .blur(2)
                    .format('webp')
                    .saturation(-100)
                    .width(100)
                    .url()}
                />
              </div>
            )}
            <div className="relative w-full max-w-xl mx-auto text-center text-white editor-styling px-10">
              <PortableText
                value={facilities.content}
                components={serializer}
              />
            </div>
          </div>
        </div>
        {/* Button Sticky */}
        <div className="sticky bottom-0 w-full md:h-0 left-0 flex items-end pointer-events-none">
          <StickyButton
            destination="/nxt/facilities"
            arrow="left"
            className="uppercase"
          >
            {facilitiesButtonText.heading}
          </StickyButton>
        </div>
      </motion.main>
      <Footer footer={footer} mailchimp={setting.mailchimpID} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "facilitiesList"]
      `)

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const facilitiesAPI = await client.fetch(
    `
      *[_type == "facilitiesList" && slug.current == "${params.slug}"] 
    `,
  )
  const facilitiesButtonText = await client.fetch(`
    *[_type == "facilities"][0] {
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
      facilitiesButtonText,
      facilitiesAPI,
      settingAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default FeaturesAndFacilitiesDetail
