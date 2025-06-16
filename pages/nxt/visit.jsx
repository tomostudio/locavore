import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect, useState } from 'react'
import FancyLink from '@/components/utils/fancyLink'

import hero from '@/public/nxt2/visit/hero.png'
import map from '@/public/nxt2/visit/map.jpg'
import map_mobile from '@/public/nxt2/visit/map_mobile.jpg'
import Container from '@/components/modules/container'
import card_bnw from '@/public/nxt2/card_bnw.png'
import card from '@/public/nxt2/card.png'
import NxtNavigation from '@/components/utils/nxtNavigation'
import HeroComponent from '@/components/modules/nxt/hero'
import EventCard from '@/components/modules/nxt/eventCard'
import Image from 'next/legacy/image'
import urlFor from '@/helpers/sanity/urlFor'
import { PortableText } from '@portabletext/react'
import Arrow from '@/components/utils/arrow'
import { useNextSanityImage } from 'next-sanity-image'
import { singleIURB } from '@/components/utils/iurb'

const Visit = ({ homeAPI, visitAPI, settingAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [visit] = visitAPI
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
      mapImage: (props) =>
        props.value.imageDesktop.asset && props.value.imageMobile.asset ? (
          <FancyLink
            target="_blank"
            destination={props.value.link}
            className="relative w-full aspect-[361/243] my-6 sm:my-11"
          >
            <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
              <Image
                src={urlFor(props.value.imageDesktop).width(722).url()}
                alt={props.value.imageDesktop.alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={urlFor(props.value.imageDesktop)
                  .blur(2)
                  .format('webp')
                  .width(100)
                  .url()}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full sm:hidden">
              <Image
                src={urlFor(props.value.imageMobile).width(321).url()}
                alt={props.value.imageMobile.alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={urlFor(props.value.imageMobile)
                  .blur(2)
                  .format('webp')
                  .width(100)
                  .url()}
              />
            </div>
          </FancyLink>
        ) : (
          <></>
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
        title={visit.heading}
        pagelink={router.pathname}
        inputSEO={
          typeof visit !== 'undefined' &&
          typeof visit.seo !== 'undefined' &&
          visit.seo
        }
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
      />

      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="no-select-all bg-black"
      >
        <div className="relative w-full h-full setflex-center">
          <HeroComponent
            title={visit.heading}
            imageDesktop={visit.hero.imageDesktop}
            imageMobile={visit.hero.imageMobile}
          />
          <div className="px-10 max-md:px-5 max-w-4xl w-full h-full flex flex-col mt-11 md:mt-20 mb-10 md:mb-16 text-white">
            {visit.subheadingTop && (
              <span className="font-serif text-[30px] sm:text-[40px] text-center leading-tight mb-10 sm:mb-20">
                {visit.subheadingTop}
              </span>
            )}
            {/* <div className="flex flex-col justify-center items-center text-[14px] sm:text-[16px] max-w-sm sm:max-w-none mx-auto mt-10 text-center sm:mt-20">
              <span className="font-bold">OUR LOCATION</span>
              <FancyLink
                target="_blank"
                destination={visit.location.link}
                className="underline hover:opacity-50 mt-2 sm:mt-3 transition-opacity cursor-pointer inline-block"
              >
                {visit.location.entry}
                <Arrow position="right" fill="white" className="ml-2 inline" />
              </FancyLink>
            </div> */}

            <div className="text-center w-full editor-styling max-w-sm sm:max-w-none mx-auto mb-10 sm:mb-12">
              <PortableText value={visit.content} components={serializer} />
            </div>
            <div className="w-full border-y border-white flex flex-col gap-y-8 py-8 sm:py-12">
              {visit.additionalInfo.map((data, id) => (
                <div
                  key={id}
                  className={`w-full sm:max-w-lg flex flex-col col-span-3 sm:col-span-2 mx-0 ${
                    id % 2 == 0 ? 'sm:mr-2 sm:ml-auto' : 'sm:ml-2 sm:mr-auto'
                  }`}
                >
                  <span className="font-serif italic text-[20px] sm:text-[24px] flex items-center">
                    <Arrow
                      position="right"
                      fill="white"
                      sizeLeftRight="14"
                      className="mr-3"
                    />
                    {data.title}
                  </span>
                  <div className="mt-2 editor-styling">
                    <PortableText
                      value={data.description}
                      components={serializer}
                    />
                  </div>
                </div>
              ))}
            </div>
            {visit.subheadingBottom && (
              <span className="font-serif text-[30px] sm:text-[40px] text-center mt-10 sm:mt-14">
                {visit.subheadingBottom}
              </span>
            )}
            <FancyLink
              target="_blank"
              destination={visit.ctaButton.link}
              className={`w-fit p-4 mx-auto text-d-small uppercase mt-6 sm:mt-12 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
            >
              {visit.ctaButton.buttonText}
            </FancyLink>
          </div>
        </div>
        <NxtNavigation />
        <Footer footer={footer} mailchimp={setting.mailchimpID} />
      </motion.main>
    </Layout>
  )
}

export async function getStaticProps() {
  const visitAPI = await client.fetch(`
    *[_type == "visit"]
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
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"] | order(order asc)
  `)
  return {
    props: {
      homeAPI,
      visitAPI,
      settingAPI,
      footerAPI,
      headerAPI,
      familyListAPI,
    },
  }
}

export default Visit
