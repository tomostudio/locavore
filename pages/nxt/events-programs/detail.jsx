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

import detail from '@/public/nxt2/events/detail.png'
import StickyButton from '@/components/modules/stickyButton'
import PillButton from '@/components/modules/pillButton'

const EventsAndProgramsDetail = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI

  useEffect(() => {
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
        title={'Events & Programs'}
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
        <HeaderGap />
        <Container className="relative flex flex-col my-20">
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
            <Image src={detail} alt="" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="w-full flex flex-col mt-20 mx-auto max-w-4xl">
            <div className="w-full flex gap-8">
              <div className="w-[30%]" />
              <span className="w-[70%] font-funkturm text-[2.813rem] text-[#BEC29D]">
                LOREM IPSUM
              </span>
            </div>
            <div className="w-full flex gap-8 mt-8">
              <div className="w-[30%] flex flex-col gap-3">
                <div className="w-full flex flex-col gap-3 text-white">
                  <span className="text-[1.25rem]">
                    VENUE:
                    <br />
                    LOREM IPSUM
                  </span>
                  <span className="text-[1.25rem]">
                    DATE:
                    <br />
                    10 OCT 2023
                  </span>
                  <span className="text-[1.25rem]">
                    TIME:
                    <br />
                    07.00 - FINISH
                  </span>
                </div>
                <FancyLink className="font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.375rem] w-fit transtion-all duration-300 hover:opacity-30">
                  Register Now
                </FancyLink>
              </div>
              <p className="w-[70%] text-white text-[1.25rem]">
                Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor sit amet consectetur adipiscing elit. Proin nec
                massa dolor viverra, aliquet dui ac, amett gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor sit amet consectetur adipiscing elit. Proin nec
                massa dolor viverra, aliquet dui ac, amett gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor sit amet consectetur adipiscing elit. Proin nec
                massa dolor viverra, aliquet dui ac, amett gravida magna. <br />
                <br />
                Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                amet, dolor sit amet consectetur adipiscing elit. Proin nec
                massa dolor viverra, aliquet dui ac, amett gravida magna.
              </p>
            </div>
          </div>
        </Container>
        <div
          className={`sticky bottom-10 mb-10 left-0 w-full z-40 setflex-center`}
        >
          <PillButton
            destination="/nxt/events-programs"
            arrow="left"
            className="uppercase bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm"
          >
            EVENTS & PROGRAMS
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

export default EventsAndProgramsDetail
