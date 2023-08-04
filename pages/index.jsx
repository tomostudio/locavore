import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import 'intersection-observer' // optional polyfill

import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'
import Footer from '@/components/modules/footer'

import { fade } from '@/helpers/preset/transitions'
import client from '@/helpers/sanity/client'

import {
  Section1AnimationOBJ,
  Section1AnimationOBJMobile,
  Section1ComponentInner,
} from '@/components/modules/nxt/section1'

import {
  Section2Option1AnimationOBJ,
  Section2Option1AnimationOBJMobile,
  Section2Option1ComponentInner,
} from '@/components/modules/nxt/section2/option1'

import {
  Section3AnimationOBJ,
  Section3ComponentInner,
} from '@/components/modules/nxt/section3'

import {
  Section4AnimationOBJ,
  Section4AnimationOBJMobile,
  Section4ComponentInner,
} from '@/components/modules/nxt/section4'

import {
  Section5AnimationOBJ,
  Section5AnimationOBJMobile,
  Section5ComponentInner,
} from '@/components/modules/nxt/section5'

import { useAppContext } from 'context/state'
import applyScrollTrigger from '@/components/utils/applyScrollTrigger'
import NxtNavigation from '@/components/utils/nxtNavigation'
import PillButton from '@/components/modules/pillButton'
import {
  Section2Option2AnimationOBJ,
  Section2Option2ComponentInner,
} from '@/components/modules/nxt/section2/option2'
import {
  Section2Option3AnimationOBJ,
  Section2Option3ComponentInner,
} from '@/components/modules/nxt/section2/option3'

export default function Nxt({
  homeNxtAPI,
  eventAPI,
  collabAPI,
  seoAPI,
  footerAPI,
}) {
  const router = useRouter()
  const appContext = useAppContext()
  const [homeNxt] = homeNxtAPI
  const [seo] = seoAPI
  const [footer] = footerAPI

  const getFuncSection2 = () => {
    if (homeNxt.section2.option === 'option1') {
      return Section2Option1AnimationOBJ
    } else if (homeNxt.section2.option === 'option2') {
      return Section2Option2AnimationOBJ
    } else {
      return Section2Option3AnimationOBJ
    }
  }

  // ANIMATION
  const animationObj = {
    '(min-width: 851px)': [
      ...Section1AnimationOBJ,
      ...getFuncSection2(),
      ...Section3AnimationOBJ(),
      ...Section4AnimationOBJ,
      ...Section5AnimationOBJ,
    ],
    '(max-width: 850px)': [
      ...Section1AnimationOBJMobile,
      ...getFuncSection2(),
      ...Section4AnimationOBJ,
      ...Section5AnimationOBJMobile,
    ],
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

  useEffect(() => {
    let scrollTriggerAnimation = null
    scrollTriggerAnimation = applyScrollTrigger({
      animation: animationObj,
    })
    return () => {
      if (scrollTriggerAnimation != null) scrollTriggerAnimation.revert()
    }
  }, [])

  return (
    <Layout>
      <SEO
        title={'Up NXT'}
        pagelink={router.pathname}
        inputSEO={
          typeof homeNxt !== 'undefined' &&
          typeof homeNxt.seo !== 'undefined' &&
          homeNxt.seo
        }
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <LazyMotion features={domAnimation}>
        <m.main
          className="relative p-0 m-0 bg-black"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
        >
          <m.div
            initial="initial"
            animate="enter"
            variants={{
              initial: { opacity: 1 },
              enter: {
                opacity: 0,
                transition: {
                  duration: 1,
                  delay: 1,
                },
              },
              exit: {
                opacity: 0,
              },
            }}
            className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none bg-black"
          />
          <section className="relative p-0 m-0">
            {/* Section 1 */}
            {/* TITLE */}
            <Section1ComponentInner landingSection={homeNxt.section1} />
            {/* Section 2 */}
            {/* MENU */}
            {homeNxt.section2.option === 'option1' ? (
              <Section2Option1ComponentInner
                menuSectionOption1={homeNxt.section2}
              />
            ) : homeNxt.section2.option === 'option2' ? (
              <Section2Option2ComponentInner
                menuSectionOption2={homeNxt.section2}
              />
            ) : (
              <Section2Option3ComponentInner
                menuSectionOption3={homeNxt.section2}
              />
            )}
            {/* Section 3 */}
            {/* OUR FACILITIES */}
            <Section3ComponentInner facilitiesSection={homeNxt.facilitiesSection} />
            {/* Section 4 */}
            {/* OUR COLLABORATORS */}
            <Section4ComponentInner collabList={collabAPI} collaboratorSection={homeNxt.collaboratorSection} />
            {/* Section 5 */}
            {/* WHAT'S ON? */}
            <Section5ComponentInner eventList={eventAPI} eventSection={homeNxt.eventSection} />
            <NxtNavigation transition={true} />
          </section>
          <Footer footer={footer} mailchimp={seo.mailchimpID} />
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps() {
  const homeNxtAPI = await client.fetch(`
    *[_type == "homeNxt"]
    `)
  const eventAPI = await client.fetch(`
  *[_type == "eventList"][0..2]
  `)
  const collabAPI = await client.fetch(`
      *[_type == "collaboratorList"]
      `)
  const headerAPI = await client.fetch(`
    *[_type == "header"]
    `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  return {
    props: {
      homeNxtAPI,
      eventAPI,
      collabAPI,
      seoAPI,
      headerAPI,
      footerAPI,
    },
  }
}
