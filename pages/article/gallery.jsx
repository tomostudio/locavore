import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Navbar from '@/components/modules/navbar'

// Components
import PillButton from '@/components/utils/pillButton'
import CardPortrait from '@/components/utils/cardPortrait'
import StickyButton from '@/components/utils/stickyButton'

// Helpers
import Link from '@/components/utils/link'

export default function Gallery() {
  return (
    <Layout>
      <NextSeo title="Gallery" />
      <Navbar className="border-black bg-white" logo="/locavore-black.png" />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className="pt-10 pb-14 w-full h-full flex flex-col">
        <Container className="mb-14 max-md:px-6">
          <div className="w-full space-y-10">
            {/* Title */}
            <h1 className="m-0 font-title font-normal">
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
                <span className="ml-4 max-md:m-0 font-subtitle italic font-bold">
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
          {/* Image */}
          <div className="w-full flex flex-col space-y-3 max-md:space-y-2">
            <div className="relative w-full h-30rem aspect-w-1 aspect-h-1">
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-full h-30rem max-md:h-56 max-md:px-2 flex space-x-3 max-md:space-x-2">
              <div className="relative w-full h-full">
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="w-full setflex-center max-md:px-2">
              <div className="relative w-full h-30rem">
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex items-end max-md:items-start mt-3 max-md:px-6">
                <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                <span className="w-full font-subtitle text-sm font-bold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mt-14 max-md:mt-6 flex max-md:flex-col space-x-3 max-md:space-x-0 max-md:space-y-2">
            <div className="relative w-full h-96">
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="relative w-full h-96">
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </Container>
        {/* Card Next Article */}
        <div className="w-full setflex-center space-y-14">
          <div className="h-40 setflex-center w-full">
            <hr className="bg-black border border-black h-full w-px" />
          </div>
          <div className="relative w-full h-96 setflex-center">
            <CardPortrait
              className="rotate-6 bg-food w-64 mx-4"
              title="5. Ulekan"
              category="Culture"
              timeRead="20 min read"
              src="/placeholder/locavore-rintik-crop-11.jpg"
              alt="Locavore"
            />
            <div className="absolute top-0 left-0 h-full w-full setflex-center z-min1">
              <Marquee gradient={false}>
                <h1 className="font-title font-normal h-28">
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
