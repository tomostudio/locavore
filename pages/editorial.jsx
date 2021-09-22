import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import FancyLink from '@/components/utils/fancyLink'
import StickyButton from '@/components/utils/stickyButton'

// Helpers
import Link from '@/components/utils/link'
import { useMediaQuery } from '@/helpers/functional/checkMedia'

export default function Editorial() {
  return (
    <Layout>
      <NextSeo title="Editorial" />

      <LazyMotion features={domAnimation}>
        <m.main className="p-0 m-0">
          {/* Header Gap */}
          <HeaderGap />
          {/* Untuk Content */}
          <section className="pt-10 pb-10 w-full h-full flex flex-col">
            <Container>
              <div className="w-full h-full setflex-center">
                {/* Title */}
                <h1 className="m-0 flex max-md:flex-wrap max-md:text-4xl justify-center items-center max-md:items-end font-title font-normal">
                  Editorial
                  <h2 className="my-0 mx-4 h-full font-subtitle italic font-normal">
                    Issue
                  </h2>
                  Index
                </h1>
              </div>
              {/* Card */}
              <div className="relative mt-14 w-full h-full space-y-10">
                <div className="relative w-full h-30rem bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                  <div className="text-center w-full py-3">
                    <span>ISSUE 5</span>
                  </div>
                  <div className="relative w-full h-full rounded-2xl">
                    <div className="absolute w-full h-full top-0 left-0 bg-black rounded-2xl">
                      <Image
                        src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                        alt={'Locavore'}
                        className="opacity-70 rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="relative z-10 w-full h-full flex flex-col justify-between text-white p-8">
                      <div className="w-full flex justify-between text-xs">
                        <span>MARCH 2021</span>
                        <span>15 ARTICLES</span>
                      </div>
                      <h1 className="font-title font-normal break-all">Metamorphosis</h1>
                      <div className="w-full flex justify-between max-md:justify-center">
                        {!useMediaQuery('(max-width: 768px)') && (
                          <div className="w-4/5 flex flex-col max-md:hidden">
                            <p className="w-96">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s.
                            </p>
                            <div className="flex space-x-16 border-t border-white w-full pt-6 mt-6 text-xs">
                              <span>MARCH 2021</span>
                              <span>15 ARTICLES</span>
                            </div>
                          </div>
                        )}
                        <div className="flex items-end">
                          <FancyLink
                            destination="/editorial/metamorphosis"
                            className="px-10 py-7 border border-white rounded-50% text-white"
                          >
                            READ ISSUE
                          </FancyLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-30rem bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                  <div className="text-center w-full py-3">
                    <span>ISSUE 5</span>
                  </div>
                  <div className="relative w-full h-full rounded-2xl">
                    <div className="absolute w-full h-full top-0 left-0 bg-black rounded-2xl">
                      <Image
                        src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                        alt={'Locavore'}
                        className="opacity-70 rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="relative z-10 w-full h-full flex flex-col justify-between text-white p-8">
                      <div className="w-full flex justify-between text-xs">
                        <span>MARCH 2021</span>
                        <span>15 ARTICLES</span>
                      </div>
                      <h1 className="font-title font-normal">Rempah Rempah</h1>
                      <div className="w-full flex justify-between max-md:justify-center">
                        {!useMediaQuery('(max-width: 768px)') && (
                          <div className="w-4/5 flex flex-col max-md:hidden">
                            <p className="w-96">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s.
                            </p>
                            <div className="flex space-x-16 border-t border-white w-full pt-6 mt-6 text-xs">
                              <span>MARCH 2021</span>
                              <span>15 ARTICLES</span>
                            </div>
                          </div>
                        )}
                        <div className="flex items-end">
                          <FancyLink
                            destination="/editorial/metamorphosis"
                            className="px-10 py-7 border border-white rounded-50% text-white"
                          >
                            READ ISSUE
                          </FancyLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-30rem bg-grayDarkerCard rounded-2xl px-5 pb-5 flex flex-col">
                  <div className="text-center w-full py-3">
                    <span>ISSUE 5</span>
                  </div>
                  <div className="relative w-full h-full rounded-2xl">
                    <div className="absolute w-full h-full top-0 left-0 bg-black rounded-2xl">
                      <Image
                        src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                        alt={'Locavore'}
                        className="opacity-70 rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="relative z-10 w-full h-full flex flex-col justify-between text-white p-8">
                      <div className="w-full flex justify-between text-xs">
                        <span>MARCH 2021</span>
                        <span>15 ARTICLES</span>
                      </div>
                      <h1 className="font-title font-normal">Rempah Rempah</h1>
                      <div className="w-full flex justify-between max-md:justify-center">
                        {!useMediaQuery('(max-width: 768px)') && (
                          <div className="w-4/5 flex flex-col max-md:hidden">
                            <p className="w-96">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s.
                            </p>
                            <div className="flex space-x-16 border-t border-white w-full pt-6 mt-6 text-xs">
                              <span>MARCH 2021</span>
                              <span>15 ARTICLES</span>
                            </div>
                          </div>
                        )}
                        <div className="flex items-end">
                          <FancyLink
                            destination="/editorial/metamorphosis"
                            className="px-10 py-7 border border-white rounded-50% text-white"
                          >
                            READ ISSUE
                          </FancyLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* Button Sticky */}
          <StickyButton destination="/search" arrow="right">
            SEARCH ALL ARTICLES
          </StickyButton>
          <Footer />
        </m.main>
      </LazyMotion>
      <Link />
    </Layout>
  )
}
