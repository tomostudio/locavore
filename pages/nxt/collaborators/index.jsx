import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'
import Footer from '@/components/modules/footer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import NxtNavigation from '@/components/utils/nxtNavigation'
import HeaderGap from '@/components/modules/headerGap'

import hero from '@/public/nxt2/collab/hero.png'
import hero_mobile from '@/public/nxt2/collab/hero_mobile.png'
import card1 from '@/public/nxt2/collab/card1.png'
import card_bnw1 from '@/public/nxt2/collab/card_bnw1.png'
import { useMediaQuery } from '@/helpers/functional/checkMedia'

const OurCollaborators = ({ seoAPI, footerAPI }) => {
  const router = useRouter()
  const appContext = useAppContext()
  const [seo] = seoAPI
  const [footer] = footerAPI
  const repeatArr = ['', '', '', '', '', '', '', '', '']
  const defaultItemToShow = 6
  const [itemToShow, setItemToShow] = useState(defaultItemToShow)
  const [showMoreButton, setShowMore] = useState(
    repeatArr.length > defaultItemToShow ? true : false,
  )

  const removeBorderLastRow = (data, index) => {
    // desktop column
    let rowCountDesktop = 3
    let columnCountDesktop = Math.ceil(data.length / rowCountDesktop)

    // mobile column
    let rowCountMobile = 2
    let columnCountMobile = Math.ceil(data.length / rowCountMobile)

    // check row desktop
    const lastRowDivsDesktop = []
    for (
      var i = rowCountDesktop * (columnCountDesktop - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsDesktop.push(i)
    }

    // check row mobile
    const lastRowDivsMobile = []
    for (
      var i = rowCountMobile * (columnCountMobile - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsMobile.push(i)
    }

    if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b'
    } else if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'md:border-b'
    } else if (
      lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b md:border-b-0'
    } else {
      return ''
    }
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
        className="no-select-all bg-black"
      >
        <div className="relative w-full h-full setflex-center">
          <div className="relative w-full h-[350px] flex flex-col">
            <Image
              src={hero}
              alt=""
              fill
              className="object-cover hidden md:block"
            />
            <Image
              src={hero_mobile}
              alt=""
              fill
              className="object-cover md:hidden"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
            <HeaderGap />
            <div className="w-full flex grow-1 items-center md:items-end justify-center">
              <h1 className="relative text-m-header sm:text-t-header md:text-d-header text-[#BEC29D] font-funkturm md:mb-14 max-w-xs sm:max-w-md md:max-w-none text-center">
                OUR COLLABORATORS
              </h1>
            </div>
          </div>
          <div className="w-full h-full flex flex-wrap mt-11 md:mt-20 mb-16 border-b sm:border-y border-white collaborators-border">
            {useMediaQuery('(min-width: 600px)')
              ? repeatArr.slice(0, itemToShow).map((_, id) => (
                  <FancyLink
                    destination="/nxt/collaborators/detail"
                    className={`w-[calc(100%/2)] md:w-[calc(100%/3)] ${removeBorderLastRow(
                      repeatArr.slice(0, itemToShow),
                      id,
                    )} border-white setflex-center text-white p-10 transition-all duration-300 group hover:text-black hover:bg-[#BEC29D]`}
                    key={id}
                  >
                    <div className="h-full flex flex-col">
                      <span className="italic font-serif text-[1.375rem] text-left mb-1">
                        Work Role
                      </span>
                      <div className="w-full flex">
                        <div className="relative aspect-[3/2] md:aspect-[6/5] w-full rounded-md overflow-hidden mr-1">
                          <Image
                            src={card_bnw1}
                            alt=""
                            fill
                            style={{ objectFit: 'cover' }}
                            className="group-hover:hidden"
                          />
                          <Image
                            src={card1}
                            alt=""
                            fill
                            style={{ objectFit: 'cover' }}
                            className="hidden group-hover:block"
                          />
                        </div>
                        <span className="text-d-small writing-mode-vertical text-left">
                          JAKARTA, INDONESIA
                        </span>
                      </div>
                      <span className="font-bold text-[1.875rem] max-w-[300px] text-left mt-4 leading-tight">
                        Lorem Ipsum Dolor Sit Amet
                      </span>
                    </div>
                  </FancyLink>
                ))
              : repeatArr.map((_, id) => (
                  <FancyLink
                    key={id}
                    destination="/nxt/collaborators/detail"
                    className="w-full flex flex-col"
                  >
                    <div className="relative w-full h-[258px]">
                      <Image
                        src={card_bnw1}
                        alt=""
                        fill
                        className="object-cover group-hover:hidden"
                      />
                      <Image
                        src={card1}
                        alt=""
                        fill
                        className="object-cover hidden group-hover:block"
                      />
                    </div>
                    <div className="relative bottom-5 w-full flex flex-col pt-5 px-7 bg-black text-white border-t border-white rounded-t-2xl">
                      <div>
                        <span className="italic font-serif">Work Role</span>
                        {` `}—{' '}
                        <span className="text-m-body">Jakarta, Indonesia</span>
                      </div>
                      <span className="font-bold text-d-body text-left mt-2 leading-tight">
                        Lorem Ipsum Dolor Sit Amet Two Lines or Longer Texts
                      </span>
                    </div>
                  </FancyLink>
                ))}
          </div>
          {showMoreButton && (
            <FancyLink
              className={`w-fit p-4 text-d-small mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              onClick={() => {
                setItemToShow(itemToShow + defaultItemToShow)
                setShowMore(repeatArr.length > itemToShow + defaultItemToShow)
              }}
            >
              VIEW MORE
            </FancyLink>
          )}
        </div>
        <NxtNavigation focus="collab" />
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

export default OurCollaborators
