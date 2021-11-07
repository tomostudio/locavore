import { useEffect, useRef } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import Arrow from '@/components/utils/arrow'
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'

// Helpers
import colors from '@/helpers/preset/colors'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { toPlainText } from '@/helpers/functional/toPlainText'

// install Swiper modules
SwiperCore.use([Pagination])

const FamilySlug = ({ familyAPI, seoAPI }) => {
  const router = useRouter()
  const [seo] = seoAPI
  const [family] = familyAPI
  const appContext = useAppContext()
  const onMouseEnter = (id, color, slug) => {
    document.getElementById('family-button').children[
      id
    ].style.background = color
    document.getElementById('family-button').children[id].style.fontWeight = 800
    document.getElementById('family-button').children[id].style.color = 'black'
    document.getElementById('family-button').children[id].style.borderColor =
      'black'
  }

  const onMouseLeave = (id) => {
    document
      .getElementById('family-button')
      .children[id].removeAttribute('style')
  }

  const dark = false

  useEffect(() => {
    appContext.setHeader({ headerStyle: dark ? 'white' : 'black' })
    window.scroll(0, 0)
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

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
          backgroundColor: family.bgColor ? family.bgColor : "#fff"
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
        <div className="w-52rem max-md:w-full px-paddingContent max-md:px-5 mb-14 pb-14 border-b border-black setflex-center ">
          <div className="w-full setflex-center">
            <span className="text-center py-3 font-bold uppercase">
              {family.title}
            </span>
            <div className="border-b border-black h-px w-full" />
          </div>
          <div className="w-full my-10">
            <p>{toPlainText(family.description)}</p>
            <div className="flex flex-col w-full mt-20 mb-10 ">
              <ScrollContainer
                className="flex space-x-4 flex-nowrap overflow-x-scroll hide-scrollbar"
                horizontal={true}
              >
                {family.image_socmed.map((data, id) => (
                  <FancyLink
                    destination={data.link}
                    blank={true}
                    className="w-72 h-72 relative flex-shrink-0"
                    key={id}
                  >
                    <Image
                      src={urlFor(data).url()}
                      alt={data.name}
                      className="rounded-2xl "
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </FancyLink>
                ))}
              </ScrollContainer>
              <FancyLink
                destination={family.instagram.link}
                blank={true}
                className="w-full flex justify-between mt-5"
              >
                <div className="flex items-center space-x-5">
                  <div className="relative w-16px h-16px">
                    <Image
                      src={`/instagram.png`}
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
          <div className="w-full flex">
            <div className="flex w-1/2 flex-col justify-between text-base pr-14 border-r">
              <p>{family.address}</p>
              <div className="w-full flex flex-col">
                <span>{family.phone_number}</span>
                <span>{family.email}</span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm">Share</span>
                <FancyLink
                  destination={family.instagram.link}
                  blank={true}
                  className="relative w-16px h-16px"
                >
                  <Image
                    src={`/instagram.png`}
                    alt={family.instagram.title}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </FancyLink>
                {family.facebook && (
                  <FancyLink
                    destination={family.facebook.link}
                    blank={true}
                    className="relative w-16px h-16px"
                  >
                    <Image
                      src={`/facebook.png`}
                      alt={family.facebook.title}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </FancyLink>
                )}
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-end">
              <div className="relative w-44 h-full" id="family-logo">
                <Image
                  src={`/placeholder/NightRooster-Cocktail-2020-45.jpg`}
                  alt={'Locavore'}
                  className="rounded-2xl"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
          <div className="w-full setflex-center">
            <FancyLink
              destination="/"
              className="mt-16 py-3 px-6 text-base tracking-widest border border-black font-bold rounded-xl"
            >
              BOOK NOW
            </FancyLink>
          </div>
        </div>
        <div
          className="relative max-md:hidden w-56rem mb-24 flex flex-wrap"
          id="family-button"
        >
          <FancyLink
            destination="/family/locavore"
            onMouseEnter={() => onMouseEnter(0, colors.locavore)}
            onMouseLeave={() => onMouseLeave(0)}
            className="relative left-6 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            locavore
          </FancyLink>
          <FancyLink
            destination="/family/rooster"
            onMouseEnter={() => onMouseEnter(1, colors.nightrooster)}
            onMouseLeave={() => onMouseLeave(1)}
            className="relative z-10 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            THE NIGHT ROOSTER
          </FancyLink>
          <FancyLink
            destination="/family/nusantara"
            onMouseEnter={() => onMouseEnter(2, colors.nusantara)}
            onMouseLeave={() => onMouseLeave(2)}
            className="relative right-6 z-20 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            NUSANTARA
          </FancyLink>
          <FancyLink
            destination="/family/localab"
            onMouseEnter={() => onMouseEnter(3, colors.localab)}
            onMouseLeave={() => onMouseLeave(3)}
            className="relative -top-px left-6 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            LOCAVORE LAB
          </FancyLink>
          <FancyLink
            destination="/family/locaparts"
            onMouseEnter={() => onMouseEnter(4, colors.localparts)}
            onMouseLeave={() => onMouseLeave(4)}
            className="relative -top-px z-10 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            LOCAL PARTS
          </FancyLink>
          <FancyLink
            destination="/family/togo"
            onMouseEnter={() => onMouseEnter(5, colors.togo)}
            onMouseLeave={() => onMouseLeave(5)}
            className="relative -top-px right-6 z-20 text-center bg-nightrooster uppercase font-bold text-sm py-1 px-4 border border-black rounded-full"
          >
            LOCAVORE TO-GO
          </FancyLink>
        </div>
        <div className="hidden max-md:block w-full mt-12">
          <Arrow className="mx-auto" position="top" />
        </div>
        <section
          className="sticky bottom-0 left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center"
          id="btnMobile"
        >
          <FancyLink
            destination="article/locavore"
            className="relative -bottom-14 text-center w-full h-full rounded-t-2xl bg-locavore pt-2 pb-4 font-bold uppercase"
          >
            Locavore
          </FancyLink>
          <FancyLink
            destination="article/rooster"
            className="relative z-2 -bottom-12 text-center w-full rounded-t-2xl bg-nightrooster pt-2 pb-4 font-bold uppercase"
          >
            the night rooster
          </FancyLink>
          <FancyLink
            destination="article/locaparts"
            className="relative z-3 -bottom-9 text-center w-full rounded-t-2xl bg-localparts pt-2 pb-4 font-bold uppercase"
          >
            locaparts
          </FancyLink>
          <FancyLink
            destination="article/nusantara"
            className="relative z-4 -bottom-6 text-center w-full rounded-t-2xl bg-nusantara pt-2 pb-4 font-bold uppercase"
          >
            nusantara
          </FancyLink>
          <FancyLink
            destination="article/localab"
            className="relative z-5 -bottom-3 text-center w-full rounded-t-2xl bg-localab pt-2 pb-4 font-bold uppercase"
          >
            localab
          </FancyLink>
          <FancyLink
            destination="article/togo"
            className="relative z-6 text-center w-full rounded-t-2xl bg-togo pt-2 pb-4 font-bold uppercase"
          >
            locavore to-go
          </FancyLink>
        </section>
      </motion.section>
      <Footer />
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
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  return {
    props: {
      familyAPI,
      seoAPI,
    },
  }
}

export default FamilySlug
