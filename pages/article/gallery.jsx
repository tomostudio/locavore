import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import StickyButton from '@/components/modules/stickyButton'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import VideoComponent from '@/components/modules/editorial/videoComponent'

// Helpers
import NextArticle from '@/components/modules/editorial/nextArticle'
import { useState } from 'react'

export default function Gallery() {
  const [video, setVideo] = useState(false)

  return (
    <Layout>
      <NextSeo title="Gallery" />
      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <OpeningArticle />
      <section className="w-full h-full flex flex-col">
        <Container className="max-md:px-0">
          {/* Image */}
          <div className="w-full flex flex-col">
            <div className="relative mt-3 max-md:mt-2 w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1">
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-full mt-3 max-md:mt-2 h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2">
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
            <div className="w-full setflex-center mt-3 max-md:mt-2">
              <div className="relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1">
                <Image
                  src={`/placeholder/locavore-rintik-crop-18.jpg`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex items-end max-md:items-start mt-3 mb-6 max-md:px-6">
                <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                <span className="w-full font-serif text-sm font-bold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </span>
              </div>
            </div>
            <div className="w-full mt-3 max-md:mt-2">
              <VideoComponent setVideo={setVideo} video={video} />
            </div>
          </div>
        </Container>
      </section>
      <NextArticle
        bgColor={'#C9C8BF'}
        title="5. Ulekan"
        category="Culture"
        timeRead="20 min read"
        thumbnail="/placeholder/locavore-rintik-crop-11.jpg"
        alt="Locavore"
        destination={'/article/caroussel'}
      />
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  )
}
