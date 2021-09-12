import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import PillButton from '@/components/utils/pillButton'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'

export default function Editorial() {
  return (
    <Layout>
      <NextSeo title="Editorial" />

      <LocomotiveScrollProvider options={preference} watch={[]}>
        <PushScrollGlobal />
        <div data-scroll-container id="scroll-container">
          <div data-scroll-section>
            <ScrollTriggerWrapper>
              <LazyMotion features={domAnimation}>
                <m.main className="p-0 m-0">
                  {/* Header Gap */}
                  <HeaderGap />
                  {/* Untuk Content */}
                  <section className="pt-10 pb-14 w-full h-full flex flex-col">
                    <Container>
                      <div className="w-full h-full setflex-center">
                        {/* Title */}
                        <h1 className="m-0 flex justify-center items-center font-title font-normal">
                          Editorial
                          <h2 className="my-0 mx-4 h-full font-subtitle italic font-normal">
                            Issue
                          </h2>
                          Index
                        </h1>
                        {/* Button to search */}
                        <PillButton
                          destination="/search"
                          arrow="right"
                          className="my-10 flex items-center"
                        >
                          SEARCH ALL ARTICLES
                        </PillButton>
                      </div>
                      {/* Card */}
                      <div className="relative w-full h-full space-y-10">
                        <div className="relative w-full h-96 bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                          <div className="text-center w-full py-3">
                            <span>ISSUE 5</span>
                          </div>
                          <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                        </div>
                        <div className="relative w-full h-96 bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                          <div className="text-center w-full py-3">
                            <span>ISSUE 5</span>
                          </div>
                          <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                        </div>
                        <div className="relative w-full h-96 bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                          <div className="text-center w-full py-3">
                            <span>ISSUE 5</span>
                          </div>
                          <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                        </div>
                        <div className="relative w-full h-96 bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                          <div className="text-center w-full py-3">
                            <span>ISSUE 5</span>
                          </div>
                          <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                        </div>
                      </div>
                    </Container>
                  </section>
                  <Footer />
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
        {/* Button Fixed */}
        <div className="fixed bottom-0 left-0 w-full">
          <div className="setflex-center mb-6">
            <PillButton
              destination="/search"
              arrow="right"
              className="uppercase bg-white flex items-center"
            >
              SEARCH ALL ARTICLES
            </PillButton>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
