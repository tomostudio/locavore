import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect } from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import HeaderGap from '@/components/modules/headerGap'
import Container from '@/components/modules/container'

import hero from '@/public/nxt2/collab/hero.png'
import detail from '@/public/nxt2/collab/detail.png'
import card_bnw1 from '@/public/nxt2/collab/card_bnw1.png'
import PillButton from '@/components/modules/pillButton'

const OurCollaboratorsDetail = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

  useEffect(() => {
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
        title={'Our Collaborators'}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="no-select-all bg-[#C2C2C2]"
      >
        <Container className="relative h-full flex gap-36">
          <div className="w-full h-full">
            <HeaderGap />
            <div className="w-full h-full flex flex-col text-black my-20">
              <h1 className="font-funkturm text-[2.813rem]">Lorem Ipsum</h1>
              <div className="w-full">
                <span className="italic font-medium font-serif text-[1.375rem] mr-1">
                  Creative Director
                </span>
                —<span className="text-[1.25rem] ml-1">Jakarta, Indonesia</span>
              </div>
              <p className="mt-24 text-[1.25rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec massa viverra, aliquet dui ac, gravida magna. Lorem ipsum
                dolor sit amet, dolor consectetur adipiscing elit. Proin nec
                massa viverra, aliquet dui ac, amett gravida magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit.
                Proin nec massa viverra, aliquet dui ac, amett gravida magna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec massa viverra, aliquet dui ac, gravida magna. Lorem ipsum
                dolor sit amet, dolor consectetur adipiscing elit. Proin nec
                massa viverra, aliquet dui ac, amett gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec massa viverra, aliquet dui ac, gravida magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, amett gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec massa viverra, aliquet dui ac, gravida magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, amett gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec massa viverra, aliquet dui ac, gravida magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor consectetur adipiscing elit. Proin nec massa
                viverra, aliquet dui ac, amett gravida magna.
              </p>
            </div>
          </div>
          <div className="sticky top-0 left-0 w-full h-screen flex flex-col">
            <HeaderGap />
            <div className="w-full h-full my-20">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={detail}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </Container>
        <div
          className={`sticky bottom-10 mb-10 left-0 w-full z-40 setflex-center`}
        >
          <PillButton
            destination="/nxt/our-collaborators"
            arrow="left"
            className="uppercase bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm"
          >
            COLLABORATORS
          </PillButton>
        </div>
      </motion.main>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticProps() {
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
      seoAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default OurCollaboratorsDetail
