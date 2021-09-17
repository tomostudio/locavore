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
import CardPortrait from '@/components/utils/cardPortrait'
import FixedButton from '@/components/utils/fixedButton'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'
import Link from '@/components/utils/link'

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
                        <div className="w-content mt-10 mb-8 px-paddingContent">
                          <form className="mb-8 flex w-full h-full flex-col justify-between">
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
                          <div className="w-full h-auto opacity-80 flex items-start space-x-4">
                            <span className="text-xs">CATEGORY</span>
                            <PillButton className="text-xs">Food</PillButton>
                            <PillButton className="text-xs">Culture</PillButton>
                            <PillButton className="text-xs">
                              Features
                            </PillButton>
                            <PillButton className="text-xs">...</PillButton>
                          </div>
                        </div>
                        {/* Category */}
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
                          className="w-full h-auto flex gap-8 flex-wrap"
                          id="card-search"
                        >
                          <div className="relative w-full bg-grayCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 1</span>
                            </div>
                            <CardPortrait
                              className="bg-culture w-full"
                              title="7. Facial Expressions"
                              category="Culture"
                              timeRead="20 min read"
                              src="/placeholder/locavore-rintik-crop-11.jpg"
                              alt="Locavore"
                            />
                          </div>
                          <div className="relative w-full bg-grayCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 1</span>
                            </div>
                            <CardPortrait
                              className="bg-white border border-black w-full"
                              title="16. Making Statements"
                              category="Culture"
                              timeRead="20 min read"
                              src="/placeholder/locavore-rintik-crop-11.jpg"
                              alt="Locavore"
                            />
                          </div>
                          <div className="relative w-full bg-grayCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 1</span>
                            </div>
                            <CardPortrait
                              className="bg-events w-full"
                              title="8. Semata Wayang"
                              category="Events"
                              timeRead="20 min read"
                              src="/placeholder/locavore-rintik-crop-11.jpg"
                              alt="Locavore"
                            />
                          </div>
                          <div className="relative w-full bg-grayCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 5</span>
                            </div>
                            <CardPortrait
                              className="bg-food w-full"
                              title="11. Some Like It Hot"
                              category="Culture  •  Food"
                              timeRead="20 min read"
                              src="/placeholder/locavore-rintik-crop-11.jpg"
                              alt="Locavore"
                            />
                          </div>
                          <div className="relative w-full bg-grayCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 8</span>
                            </div>
                            <CardPortrait
                              className="bg-interview w-full"
                              title="14. Eelke Says"
                              category="Culture"
                              timeRead="20 min read"
                              src="/placeholder/locavore-rintik-crop-11.jpg"
                              alt="Locavore"
                            />
                          </div>
                          <div className="relative w-full bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                            <div className="text-center w-full py-3">
                              <span>ISSUE 0</span>
                            </div>
                            <CardPortrait
                              className="bg-white border border-black w-full"
                              title="16. Wall of Fame"
                              category="Culture"
                              timeRead="20 min read"
                              src="/placeholder/locavore-rintik-crop-11.jpg"
                              alt="Locavore"
                            />
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
        <Link />
        {/* Button Fixed */}
        <FixedButton destination="/editorial" arrow="left">
          Browse all issues
        </FixedButton>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
