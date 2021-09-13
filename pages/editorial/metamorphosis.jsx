import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import CardPortrait from '@/components/utils/cardPortrait'
import PillButton from '@/components/utils/pillButton'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'

export default function Metamorphosis() {
  return (
    <Layout>
      <NextSeo title="Metamorphosis" />

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
                  <section className="py-10 w-full h-full flex flex-col space-y-10">
                    {/* Title */}
                    <div className="w-full h-full setflex-center">
                      <span className="font-subtitle italic text-xl">
                        Issue 1 — March 2021
                      </span>
                      <h1 className=" font-title font-normal">Metamorphosis</h1>
                    </div>
                    {/* Card */}
                    <div
                      className="w-full h-96 flex space-x-4"
                      id="editorial-slider"
                    >
                      <CardPortrait
                        className="bg-events w-72"
                        title="5. Ulekan"
                        category="Culture"
                        timeRead="20 min read"
                      />
                      <CardPortrait
                        className="bg-infographic w-72"
                        title="5. Ulekan"
                        category="Culture"
                        timeRead="20 min read"
                      />
                      <CardPortrait
                        className="bg-interview w-72"
                        title="5. Ulekan"
                        category="Culture"
                        timeRead="20 min read"
                      />
                      <CardPortrait
                        className="bg-food w-72"
                        title="5. Ulekan"
                        category="Culture"
                        timeRead="20 min read"
                      />
                    </div>
                    <div className="w-full setflex-center">
                      <div className="mb-5 text-xs">
                        <span className="font-bold">1</span>-<span>15</span>
                      </div>
                      <div className="relative w-full setflex-center">
                        <div className="relative border-b w-48 h-px border-black">
                          <div className="absolute left-4 w-8 h-1 -top-px border border-black bg-black" />
                        </div>
                      </div>
                    </div>
                    {/* Button */}
                    <div className="w-full setflex-center">
                      <PillButton destination="/editorial" arrow="left">
                        ISSUE INDEX
                      </PillButton>
                    </div>
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
