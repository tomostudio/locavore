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
        <Container className="relative h-full flex flex-col-reverse md:flex-row md:gap-36">
          <div className="w-full h-full">
            <HeaderGap className='hidden md:block'/>
            <div className="w-full h-full flex flex-col text-black mt-12 md:my-20">
              <h1 className="font-funkturm m-0 md:mb-2 text-m-additionalHeader md:text-d-additionalHeader">Lorem Ipsum</h1>
              <div className="w-full text-m-small md:text-[1.375rem]">
                <span className="italic font-medium font-serif mr-1">
                  Creative Director
                </span>
                —<span className="ml-1">Jakarta, Indonesia</span>
              </div>
              <p className="mt-10 md:mt-24 text-m-body md:text-d-body">
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
          <div className="md:sticky top-0 left-0 w-full md:h-screen flex flex-col">
            <HeaderGap />
            <div className="w-full h-[421px] mt-8 md:my-20">
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