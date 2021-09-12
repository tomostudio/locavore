import { NextSeo } from 'next-seo'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import FancyLink from '@/components/utils/fancyLink'
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import PillButton from '@/components/utils/pillButton'
import Arrow from '@/components/utils/arrow'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'

export default function Search() {
  return (
    <Layout>
      <NextSeo title="Search" />

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
                          Search
                          <h2 className="my-0 mx-4 h-full font-subtitle italic font-normal">
                            All
                          </h2>
                          Articles
                        </h1>
                        {/* Form Search */}
                        <div className="mt-10 mb-8">
                          <form className="flex w-36rem h-full flex-col justify-between">
                            <div className="relative w-full">
                              <input
                                className="w-full text-xs pb-3 tracking-wide placeholder-black border-black border-b outline-none bg-transparent"
                                type="text"
                                placeholder="ENTER A KEYWORD"
                              />
                              <Arrow
                                position="right"
                                className="absolute right-0 top-2"
                                fill="black"
                              />
                            </div>
                          </form>
                        </div>
                        {/* Category */}
                        <div className="w-36rem h-auto mb-8 opacity-80 flex items-start space-x-4">
                          <span className="text-xs">CATEGORY</span>
                          <PillButton className="text-xs">Food</PillButton>
                          <PillButton className="text-xs">Culture</PillButton>
                          <PillButton className="text-xs">Features</PillButton>
                          <PillButton className="text-xs">...</PillButton>
                        </div>
                      </div>
                      <div className="relative w-full h-auto setflex-center">
                        <span className="font-bold mt-10 mb-14">
                          We found &nbsp;
                          <span className="border-black border-b">
                            8 Articles
                          </span>
                        </span>
                        {/* Card */}
                        <div
                          className="w-full h-auto flex gap-6 flex-wrap"
                          id="card-search"
                        >
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                          </div>
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                          </div>
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                          </div>
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                          </div>
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                          </div>
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <div className="relative bg-gray-500 w-full h-full rounded-2xl"></div>
                          </div>
                        </div>
                        <FancyLink className="mt-14 py-4 px-6 text-xs tracking-widest opacity-80 border border-grayBorder rounded-xl">
                          LOAD MORE
                        </FancyLink>
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
              destination="/editorial"
              arrow="left"
              className="uppercase bg-white flex items-center"
            >
              BROWSE ALL ISSUES
            </PillButton>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
