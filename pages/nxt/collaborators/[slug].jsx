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
import { PortableText } from '@portabletext/react'
import urlFor from '@/helpers/sanity/urlFor'
import Arrow from '@/components/utils/arrow'

const OurCollaboratorsDetail = ({
  homeAPI,
  collaboratorButtonText,
  collaboratorAPI,
  settingAPI,
  footerAPI,
}) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [home] = homeAPI
  const [collaborator] = collaboratorAPI
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
          className={`w-fit p-4 mx-auto text-d-small uppercase text-black font-default tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl`}
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
      headerStyle: 'blur',
    })

    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  return (
    <Layout>
      <SEO
        title={collaborator.title}
        pagelink={router.pathname}
        inputSEO={
          typeof collaborator !== 'undefined' &&
          typeof collaborator.seo !== 'undefined' &&
          collaborator.seo
        }
        defaultSEO={typeof home !== 'undefined' && home.seo}
        webTitle={typeof setting !== 'undefined' && setting.webTitle}
      />

      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="no-select-all bg-[#C2C2C2]"
      >
        <div>
          <Container className="relative h-full max-md:max-w-[500px] flex flex-col-reverse md:flex-row md:gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 h-full">
              <HeaderGap className="hidden md:block" />
              <div className="w-full h-full flex flex-col text-black mt-10 md:my-20">
                <h1 className="font-funkturm m-0 md:mb-2 text-[2.5rem] md:text-d-additionalHeader">
                  {collaborator.title}
                </h1>
                <div className="w-full">
                  <span className="italic font-medium font-serif mr-1 md:text-d-body">
                    {collaborator.workRole}
                  </span>
                  —
                  <span className="ml-1 text-m-body md:text-d-body">
                    {collaborator.location}
                  </span>
                </div>
                <div className="w-full my-10 md:mb-0 md:mt-24 md:max-w-lg editor-styling mr-auto">
                  <PortableText
                    value={collaborator.content}
                    components={serializer}
                  />
                </div>
              </div>
            </div>
            <div className="md:sticky  w-full md:w-1/2 top-8 md:top-0 left-0 md:h-screen flex flex-col">
              <HeaderGap />
              <div className="relative w-full h-auto aspect-[11/13] md:aspect-auto mt-6 md:my-20">
                <div className="relative w-full h-full md:h-[calc(100vh-(10rem+61px))] md:max-h-[720px]  rounded-[15px] overflow-hidden">
                  <Image
                    src={urlFor(collaborator.image).width(590).url()}
                    alt={collaborator.image.alt}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={urlFor(collaborator.image)
                      .blur(2)
                      .format('webp')
                      .width(100)
                      .url()}
                  />
                </div>
              </div>
            </div>
          </Container>
          {/* Button Sticky */}
          <StickyButton
            destination="/nxt/collaborators"
            arrow="left"
            className="uppercase"
          >
            {collaboratorButtonText.heading}
          </StickyButton>
        </div>
        <Footer footer={footer} mailchimp={setting.mailchimpID} />
      </motion.main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "collaboratorList"]
      `)

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const collaboratorAPI = await client.fetch(
    `
      *[_type == "collaboratorList" && slug.current == "${params.slug}"] 
    `,
  )
  const collaboratorButtonText = await client.fetch(`
    *[_type == "collaborator"][0] {
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
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"] | order(order asc)
  `)
  return {
    props: {
      homeAPI,
      collaboratorButtonText,
      collaboratorAPI,
      settingAPI,
      footerAPI,
      headerAPI,
      familyListAPI
    },
  }
}

export default OurCollaboratorsDetail
