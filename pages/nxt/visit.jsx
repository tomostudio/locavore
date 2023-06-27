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
import map from '@/public/nxt2/visit/map.png'
import map_mobile from '@/public/nxt2/visit/map_mobile.png'
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

const Visit = ({ visitAPI, seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [visit] = visitAPI
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
        ) : props.value?.wa_link ? (
          <FancyLink
            destination={props.value.wa_link}
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
        ) : props.value?.email ? (
          <FancyLink
            destination={props.value.email}
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
        title={'Visit'}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
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
            title="VISIT"
            imageDesktop={visit.hero.imageDesktop}
            imageMobile={visit.hero.imageMobile}
          />
          <div className="px-10 max-md:px-5 max-w-4xl w-full h-full flex flex-col mt-11 md:mt-20 mb-10 md:mb-16 text-white">
            <span className="font-serif text-[30px] sm:text-[40px] text-center">
              Plan to visit us? <br /> Check out our information below!
            </span>
            <div className="flex flex-col justify-center items-center text-[14px] sm:text-[16px] max-w-[250px] sm:max-w-none mx-auto mt-10 text-center sm:mt-20">
              <span className="font-bold">OUR LOCATION</span>
              <FancyLink
                target="_blank"
                destination={visit.location.link}
                className="underline hover:opacity-50 mt-2 sm:mt-3 transition-opacity cursor-pointer inline-block"
              >
                {visit.location.title}
                <Arrow position="right" fill="white" className="ml-2 inline" />
              </FancyLink>
            </div>
            <div className="relative w-full aspect-[361/243] my-9 sm:my-14">
              <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
                <Image src={map} alt="Map" layout="fill" objectFit="cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full sm:hidden">
                <Image
                  src={map_mobile}
                  alt="Map"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center w-full editor-styling max-w-[250px] sm:max-w-none mx-auto">
              <PortableText value={visit.description} components={serializer} />
            </div>
            <FancyLink
              target="_blank"
              destination={visit.booking.link}
              className={`w-fit p-4 mt-10 sm:mt-12 mx-auto text-d-small uppercase mb-12 sm:mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
            >
              {visit.booking.title}
            </FancyLink>
            <div className="w-full border-y border-white grid grid-cols-3 gap-y-8 py-8 sm:py-12">
              {visit.contents.map((data, id) => (
                <>
                  {id % 2 !== 0 && (
                    <div key={id} className="w-full hidden sm:block" />
                  )}
                  <div
                    key={id}
                    className="w-full flex flex-col col-span-3 sm:col-span-2"
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
                  {id % 2 === 0 && (
                    <div key={id} className="w-full hidden sm:block" />
                  )}
                </>
              ))}
            </div>
            <span className="font-serif text-[30px] sm:text-[40px] text-center mt-10 sm:mt-14">
              What are you waiting for?
              <br />
              Come and visit us now!
            </span>
            <FancyLink
              target="_blank"
              destination={visit.booking.link}
              className={`w-fit p-4 mx-auto text-d-small uppercase mt-6 sm:mt-12 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
            >
              {visit.booking.title}
            </FancyLink>
          </div>
        </div>
        <NxtNavigation />
      </motion.main>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticProps() {
  const visitAPI = await client.fetch(`
    *[_type == "visit"]
    `)
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
      visitAPI,
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default Visit
