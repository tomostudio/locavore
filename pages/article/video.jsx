import { NextSeo } from 'next-seo'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'
import Navbar from '@/components/modules/navbar'

// Components
import FancyLink from '@/components/utils/fancyLink'
import PillButton from '@/components/utils/pillButton'
import ArticleCard from '@/components/utils/articleCard'
import StickyButton from '@/components/utils/stickyButton'

// Helpers
import Link from '@/components/utils/link'

export default function Video() {
  return (
    <Layout>
      <NextSeo title="Video" />
      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className="pt-10 pb-20 w-full h-full flex flex-col">
        <Container className="max-md:px-6">
          <div className="w-full mb-14 space-y-10">
            {/* Title */}
            <h1 className="m-0 font-sans font-normal">
              In Search of Regional Specialties Articles
            </h1>
            <div className="w-full flex max-md:flex-col items-center max-md:items-start justify-between">
              {/* Category */}
              <div className="w-auto space-x-4">
                <PillButton
                  destination="/"
                  className="text-xs max-md:py-1 max-md:px-2 opacity-100 border-black"
                >
                  Food
                </PillButton>
                <PillButton
                  destination="/"
                  className="text-xs max-md:py-1 max-md:px-2 opacity-100 border-black"
                >
                  Culture
                </PillButton>
              </div>
              {/* Social Media */}
              <div className="w-full max-md:mt-7 flex max-md:flex-row-reverse justify-between">
                <span className="ml-4 max-md:m-0 font-serif italic font-bold">
                  March 2021
                </span>
                <div className="flex space-x-7">
                  <div className="relative w-16px h-16px">
                    <Image
                      src={`/facebook.png`}
                      alt={'Locavore'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  <div className="relative w-16px h-16px">
                    <Image
                      src={`/twitter.png`}
                      alt={'Locavore'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  <div className="relative w-16px h-16px">
                    <Image
                      src={`/mail.png`}
                      alt={'Locavore'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Description */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </Container>
        <Container className="mb-14 max-md:px-0">
          {/* Video */}
          <div className="relative w-full flex flex-col space-y-3">
            <div className="relative w-full h-30rem">
              <div className="relative w-full h-full">
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="absolute top-0 left-0 h-full w-full setflex-center">
                <FancyLink
                  destination="/"
                  className="px-10 py-7 border border-white rounded-50% text-white"
                >
                  WATCH
                </FancyLink>
              </div>
            </div>
          </div>
        </Container>
        {/* Card Next Article */}
        <div className="w-full setflex-center space-y-14">
          <div className="h-40 setflex-center w-full">
            <hr className="bg-black border border-black h-full w-px" />
          </div>
          <div className="relative w-full h-96 setflex-center">
            <ArticleCard
              className="rotate-6 bg-food w-64 mx-4"
              title="5. Ulekan"
              category="Culture"
              timeRead="20 min read"
              src="/placeholder/locavore-rintik-crop-11.jpg"
              alt="Locavore"
            />
            <div className="absolute top-0 left-0 h-full w-full setflex-center z-min1">
              <Marquee gradient={false}>
                <h1 className="font-sans font-normal h-28">
                  Next Article • Next Article • Next Article
                </h1>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
      <Link />
    </Layout>
  )
}
