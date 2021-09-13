import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Marquee from 'react-fast-marquee'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import PillButton from '@/components/utils/pillButton'
import Arrow from '@/components/utils/arrow'
import CardPortrait from '@/components/utils/cardPortrait'
import FixedButton from '@/components/utils/fixedButton'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'

export default function Caroussel() {
  return (
    <Layout>
      <NextSeo title="Caroussel" />

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
                  <section className="py-10 w-full h-full flex flex-col">
                    <Container className="pb-14 space-y-10">
                      {/* Title */}
                      <h1 className="m-0 font-title font-normal">
                        In Search of Regional Specialties Articles
                      </h1>
                      <div className="w-full flex items-center justify-between">
                        {/* Category */}
                        <div className="w-full space-x-4">
                          <PillButton
                            destination="/"
                            className="text-xs opacity-100 border-black"
                          >
                            Food
                          </PillButton>
                          <PillButton
                            destination="/"
                            className="text-xs opacity-100 border-black"
                          >
                            Culture
                          </PillButton>
                          <span className="ml-2 font-subtitle italic font-bold">
                            March 2021
                          </span>
                        </div>
                        {/* Social Media */}
                        <div className="w-full space-x-4 flex justify-end">
                          <div className="w-4 h-4 bg-black" />
                          <div className="w-4 h-4 bg-black" />
                          <div className="w-4 h-4 bg-black" />
                          <div className="w-4 h-4 bg-black" />
                        </div>
                      </div>
                      {/* Description */}
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <div className="relative w-full flex flex-col space-y-3">
                        {/* Gallery */}
                        <div className="relative w-full h-96">
                          <div className="w-full h-full bg-culture" />
                          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between px-6">
                            <Arrow
                              position="left"
                              fill="white"
                              className="w-24px h-24px"
                            />
                            <Arrow
                              position="right"
                              fill="white"
                              className="w-24px h-24px"
                            />
                          </div>
                        </div>
                        {/* List Gallery */}
                        <div className="relative w-full h-44">
                          <div className="absolute left-0 w-full h-full flex space-x-3">
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                            <div className="w-48 h-full rounded-2xl bg-culture" />
                          </div>
                        </div>
                      </div>
                    </Container>
                    {/* Card Next Article */}
                    <div className="w-full setflex-center space-y-14 mb-14">
                      <div className="h-40 setflex-center w-full">
                        <hr className="bg-black border border-black h-full w-px" />
                      </div>
                      <div className="relative w-full mb-14 h-96 setflex-center">
                        <CardPortrait
                          className="rotate-6 bg-food w-72"
                          title="5. Ulekan"
                          category="Culture"
                          timeRead="20 min read"
                        />
                        <div className="absolute top-0 left-0 h-full w-full setflex-center z-min1">
                          <Marquee>
                            <h1>Next Article • Next Article • Next Article</h1>
                          </Marquee>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Footer />
                </m.main>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
        {/* Button Fixed */}
        <FixedButton destination="/editorial/metamorphosis" arrow="left">
          ISSUE 1
        </FixedButton>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
