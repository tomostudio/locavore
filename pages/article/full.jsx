import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx'
import PillButton from '@/components/utils/pillButton'
import CardPortrait from '@/components/utils/cardPortrait'

// Helpers
import PushScrollGlobal from '@/helpers/globalscroll'
import preference from '@/helpers/preset/scrollPreference'

export default function Full() {
  return (
    <Layout>
      <NextSeo title="Full" />

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
                  <section className="pt-10 pb-24 w-full h-full flex flex-col">
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
                      {/* List */}
                      <div className="flex flex-col space-y-4 text-culture">
                        <div>
                          <span className="block font-subtitle italic">
                            Part 1
                          </span>
                          <span className="font-bold font-subtitle border-culture border-b">
                            Tools of The Trade
                          </span>
                        </div>
                        <div>
                          <span className="block font-subtitle italic">
                            Part 2
                          </span>
                          <span className="font-bold font-subtitle border-culture border-b">
                            Evolution of Food Industry
                          </span>
                        </div>
                        <div>
                          <span className="block font-subtitle italic text-culture">
                            Part 3
                          </span>
                          <span className="font-bold font-subtitle border-culture border-b">
                            You Are What You Eat
                          </span>
                        </div>
                      </div>
                    </Container>
                    {/* Orange Component */}
                    <div className="w-full h-auto bg-culture px-8 py-5">
                      <div className="w-full h-full bg-white rounded-2xl py-14 setflex-center">
                        <div className="max-w-xl space-y-10">
                          {/* Title */}
                          <div className="font-subtitle text-center font-bold">
                            <span className="block italic">Part 1</span>
                            Tools of The Trade
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularise in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. Contrary to popular belief, Lorem Ipsum
                            is not simply random text. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in
                            Virginia, looked up one of the more obscure Latin
                            words, consectetur, from a Lorem Ipsum passage, and
                            going through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. Letraset
                            sheets containing Lorem Ipsum passages.
                          </p>
                          <p className="font-title font-bold uppercase">
                            It has roots in a piece of classical west Latin
                            literature from 45 BC, making it over 2000 years old
                            ever since.
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularise in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus Page Maker including versions of
                            Lorem Ipsum.
                          </p>
                          {/* Image */}
                          <div className="w-full h-auto">
                            <div className="w-full h-64 bg-culture"></div>
                            <div className="flex items-end w-full mt-3">
                              <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                              <span className="w-full font-subtitle text-sm font-bold">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </span>
                            </div>
                          </div>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* White Component */}
                    <div className="w-full h-auto px-8 py-14 setflex-center">
                      <div className="max-w-xl space-y-10">
                        {/* Title */}
                        <div className="font-subtitle text-center font-bold">
                          <span className="block italic">Part 2</span>
                          Evolution of The Food Industry
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum. Contrary to popular belief, Lorem Ipsum
                          is not simply random text. Richard McClintock, a Latin
                          professor at Hampden-Sydney College in Virginia,
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33 of "de Finibus
                          Bonorum et Malorum" (The Extremes of Good and Evil) by
                          Cicero.
                        </p>
                        <div className="h-40 setflex-center w-full">
                          <hr className="bg-culture border border-culture h-full w-px" />
                        </div>
                      </div>
                      {/* Quote */}
                      <div className="max-w-3xl flex flex-col my-8">
                        <div className="relative h-32px w-32px mb-3">
                          <Image
                            src={`/quote.png`}
                            alt="Locavore"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </div>
                        <p className="font-title font-bold text-3xl">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, or randomised words which don't look
                          even slightly believable. If you are going to use a
                          passage of Lorem Ipsum, you need to be sure there
                          isn't anything hidden in the middle of text.
                        </p>
                      </div>
                      <div className="max-w-xl space-y-10">
                        <p>
                          It has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum. Contrary to popular belief,
                          Lorem Ipsum is not simply random text.
                        </p>
                      </div>
                    </div>
                    {/* Image Full */}
                    <div className="w-full setflex-center">
                      <div className="w-full h-96 bg-culture rounded-xl" />
                      <div className="flex items-end mt-3">
                        <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                        <span className="w-full font-subtitle text-sm font-bold">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </span>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="w-full h-auto setflex-center my-14">
                      <div className="w-36rem">
                        <div className="w-full h-48 bg-culture rounded-xl" />
                        <div className="flex items-end mt-3">
                          <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                          <span className="w-full font-subtitle text-sm font-bold">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Orange Component */}
                    <div className="w-full h-auto bg-culture px-8 py-5">
                      <div className="w-full h-full bg-white rounded-2xl py-14 setflex-center">
                        <div className="max-w-xl space-y-10">
                          <div className="font-subtitle text-center font-bold">
                            <span className="block italic">Part 3</span>
                            You Are What You Eat
                          </div>
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source of
                            material.
                          </p>
                          {/* Image */}
                          <div className="w-full h-56 bg-culture" />
                        </div>
                      </div>
                    </div>
                    {/* Card Next Article */}
                    <div className="w-full setflex-center">
                      <div className="h-40 my-14 setflex-center w-full">
                        <hr className="bg-black border border-black h-full w-px" />
                      </div>
                      <div className="relative w-full h-96 setflex-center">
                        <CardPortrait
                          className="rotate-6 bg-food"
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
        <div className="fixed bottom-0 left-0 w-full">
          <div className="setflex-center mb-6">
            <PillButton
              destination="/editorial/metamorphosis"
              arrow="left"
              className="uppercase bg-white flex items-center"
            >
              ISSUE 1
            </PillButton>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
