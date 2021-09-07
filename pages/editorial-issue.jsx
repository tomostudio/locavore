import { useRef, useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { fade } from '@/helpers/preset/transitions'
import PushScrollGlobal from '@/helpers/globalscroll'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import preference from '@/helpers/preset/scrollPreference'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'

export default function EditorialIssue() {
  const containerRef = useRef(null)
  const [animationObj, setAnimObj] = useState([])

  // Preset Function
  const presetFade = ({ id = '', trigger = '', showProgress = false }) => {
    return {
      scrollTrigger: {
        id: id,
        trigger: trigger,
        scroller: '#scroll-container',
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e) => {
          if (showProgress) console.log(Math.round(e.progress * 100))
        },
      },
    }
  }

  useEffect(() => {
    setAnimObj({
      '(min-width: 768px)': [
        () => {
          const id = 'si01'
          const elem = '.content-issue .title-issue'
          const settings = presetFade({ id: id, trigger: elem })

          const animation = presetAnimation(elem)
          return { id, elem, settings, animation }
        },
      ],
    })
    return () => {}
  }, [])

  return (
    <Layout>
      <NextSeo title="Home" />

      <LocomotiveScrollProvider
        options={preference}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <ScrollTriggerWrapper>
              <LazyMotion features={domAnimation}>
                <m.main className="m-0 p-0 relative">
                  <HeaderGap />
                  <section className="relative w-full h-screen z-20">
                    <div className="relative setflex-center pt-11 w-full">
                      <span className="font-subtitle italic text-xl">
                        Issue 1 — March 2021
                      </span>
                      <h1 className=" font-title font-normal">Metamorphosis</h1>
                    </div>
                    <div></div>
                    <div></div>
                  </section>
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
