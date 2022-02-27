import { useEffect } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ScrollContainer from 'react-indiana-drag-scroll'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import Arrow from '@/components/utils/arrow'
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'

// Helpers
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { PortableText } from '@portabletext/react'

// install Swiper modules
SwiperCore.use([Pagination])

const FamilySlug = ({ familyAPI, seoAPI, familyListAPI, footerAPI }) => {
  const router = useRouter()
  const [seo] = seoAPI
  const [family] = familyAPI
  const [footer] = footerAPI
  const appContext = useAppContext()

  const dark = false

  useEffect(() => {
    appContext.setHeader({ headerStyle: dark ? 'white' : 'black' })
    window.scroll(0, 0)
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  const serializers = {
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p>{children}</p>,
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      h5: ({ children }) => <h5>{children}</h5>,
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
      changeColor: (props) => (
        <span style={{ color: props.value.color.hex }}>{props.children}</span>
      ),
      center: (props) => (
        <span className="block text-center">{props.children}</span>
      ),
      left: (props) => (
        <span className="block text-left">{props.children}</span>
      ),
      right: (props) => (
        <span className="block text-right">{props.children}</span>
      ),
      backgroundColor: (props) => (
        <span style={{ backgroundColor: props.value.color.hex }}>
          {props.children}
        </span>
      ),
      largerSize: (props) => (
        <span style={{ fontSize: '22px' }}>{props.children}</span>
      ),
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
      fontSize: (props) => (
        <span style={{ fontSize: props.value.size }}>{props.children}</span>
      ),
      font: (props) => (
        <span className={props.value.type}>{props.children}</span>
      ),
    },
  }

  return (
    <Layout>
      <SEO
        seo={{
          title: family.title,
          webTitle:
            typeof seo !== 'undefined' && seo.webTitle ? seo.webTitle : '',
          pagelink: router.pathname,
          description:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_description !== 'undefined' &&
            family.seo.seo_description
              ? family.seo.seo_description
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_description !== 'undefined' &&
                seo.seo.seo_description
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_keywords !== 'undefined' &&
            family.seo.seo_keywords
              ? family.seo.seo_keywords
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_keywords !== 'undefined' &&
                seo.seo.seo_keywords
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_image !== 'undefined' &&
            family.seo.seo_image
              ? urlFor(family.seo.seo_image).url()
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof family.seo !== 'undefined' &&
            typeof family.seo.seo_image !== 'undefined' &&
            typeof family.seo.seo_image.name !== 'undefined' &&
            family.seo.seo_image.name
              ? family.seo.seo_image.name
              : typeof seo.seo !== 'undefined' &&
                typeof seo.seo.seo_image !== 'undefined' &&
                seo.seo.seo_image.name
              ? seo.seo.seo_image.name
              : '',
        }}
      />
      {/* Header Gap */}
      <HeaderGap />
      <motion.section
        className="w-full setflex-center rounded-t-2xl"
        style={{
          backgroundColor: family.bgColor.hex ? family.bgColor.hex : '#fff',
        }}
        id="rooster"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { y: '100vh' },
          enter: {
            y: '0%',
            transition: { duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0 },
          },
        }}
      >
        <div className="w-52rem max-md:w-full px-paddingContent max-md:px-5 setflex-center ">
          <div className="w-full setflex-center mb-10">
            <span className="text-center py-3 font-bold uppercase">
              {family.title}
            </span>
            <div className="border-b border-black h-px w-full" />
            <div className="w-full my-10">
              <PortableText
                value={family.description}
                components={serializers}
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl max-md:w-full px-5 setflex-center ">
          <div className="w-full my-0">
            <div className="flex flex-col w-full">
              {/* INSTAGRAM SECTION */}
              <div className="w-full border border-black rounded-2xl h-auto p-5">
                {family.elfsightCode && (
                  <>
                    <script
                      src="https://apps.elfsight.com/p/platform.js"
                      defer
                    ></script>
                    {/* Change the Elfsight Code to Update */}
                    {/* default code elfsight-app-b1b735e6-61b1-4eda-8840-cf78479acb1c */}
                    <div
                      className={`${family.elfsightCode} rounded-2xl overflow-hidden`}
                    ></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-52rem max-md:w-full px-paddingContent max-md:px-5 mb-14 pb-14 setflex-center ">
          <div className="w-full ">
            <div className="flex flex-col w-full mb-10 ">
              <FancyLink
                destination={family.instagram.link}
                blank={true}
                className="w-full flex justify-between mt-4 hover:opacity-50 transition-opacity duration-300"
              >
                <div className="flex items-center space-x-5">
                  <div className="relative w-16px h-16px">
                    <Image
                      src={`/ig.svg`}
                      alt={'Locavore'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  <span className=" text-base ">@{family.instagram.title}</span>
                </div>
                <div>
                  <Arrow position="right" fill="black" />
                </div>
              </FancyLink>
            </div>
          </div>
          <div className="w-full grid grid-cols-2">
            <div className="flex flex-col justify-between text-base pr-14 border-r py-7 space-y-4">
              <p>
                {family.address}
                {` • `}
                <FancyLink
                  destination={family.mapLink}
                  className="whitespace-nowrap hover:opacity-50 transition-opacity duration-300 underline"
                  blank={true}
                >
                  Map
                  <Arrow
                    position="right"
                    fill="black"
                    className=" ml-1 inline-block -translate-y-px"
                  />
                </FancyLink>
              </p>
              <div className="w-full flex flex-col">
                <FancyLink destination={`tel:${family.phone_number}`}>
                  {family.phone_number}
                </FancyLink>
                <FancyLink destination={`mailto:${family.email}`}>
                  {family.email}
                </FancyLink>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm">Visit</span>
                {family.instagram && (
                  <FancyLink
                    destination={family.instagram.link}
                    blank={true}
                    className="relative w-16px h-16px hover:opacity-30 transition-opacity duration-300"
                  >
                    <Image
                      src={`/ig.svg`}
                      alt={family.instagram.title}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </FancyLink>
                )}
                {family.facebook && (
                  <FancyLink
                    destination={family.facebook.link}
                    blank={true}
                    className="relative w-16px h-16px hover:opacity-50 transition-opacity duration-300"
                  >
                    <Image
                      src={`/fb.svg`}
                      alt={family.facebook.title}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </FancyLink>
                )}
                {family.waLink && (
                  <FancyLink
                    destination={family.waLink}
                    blank={true}
                    className="relative w-16px h-16px hover:opacity-50 transition-opacity duration-300"
                  >
                    <Image
                      src={`/wa.svg`}
                      alt={family.title}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </FancyLink>
                )}
              </div>
            </div>
            <div className="h-full flex justify-end items-center relative w-full">
              <div className="relative w-90% h-90%" id="family-logo">
                <Image
                  src={urlFor(family.logo).width(750).url()}
                  alt={family.logo.name}
                  className="rounded-2xl"
                  layout="fill"
                  objectFit="contain"
                  loading="eager"
                  priority={true}
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={urlFor(family.logo)
                    .blur(2)
                    .format('webp')
                    .width(300)
                    .url()}
                />
              </div>
            </div>
          </div>
          <div className="w-full setflex-center">
            <FancyLink
              destination={family.booking}
              blank={true}
              className="mt-16 py-3 px-6 text-base tracking-widest border border-black font-bold rounded-xl hover:bg-black hover:text-white transition-all duration-300"
            >
              BOOK NOW
            </FancyLink>
          </div>
        </div>
        <div
          className="relative max-md:hidden w-56rem mb-24 flex flex-wrap"
          id="family-button"
        >
          {familyListAPI.map((familydata, id) => {
            const checkSame = familydata._id === family._id
            return (
              <FancyLink
                key={id}
                destination={`/family/${familydata.slug.current}`}
                className={`group relative text-center uppercase overflow-hidden bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full ${
                  checkSame ? 'pointer-events-none' : ''
                }`}
                style={{ backgroundColor: family.bgColor.hex }}
              >
                <div className="relative z-2">{familydata.title}</div>
                <div
                  className="absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: familydata.bgColor.hex }}
                />
              </FancyLink>
            )
          })}
        </div>
        <div className="hidden max-md:block w-full mt-12">
          <Arrow className="mx-auto" position="top" />
        </div>
      </motion.section>
      <Footer footer={footer} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
      *[_type == "family_list"]
    `)

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const familyAPI = await client.fetch(
    `
      *[_type == "family_list" && slug.current == "${params.slug}"] 
    `,
  )
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)

  return {
    props: {
      familyAPI,
      seoAPI,
      familyListAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default FamilySlug
