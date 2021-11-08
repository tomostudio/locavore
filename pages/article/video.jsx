import { NextSeo } from 'next-seo'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { useState } from 'react'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'
import Navbar from '@/components/modules/header'

// Components
import FancyLink from '@/components/utils/fancyLink'
import OpeningArticle from '@/components/modules/editorial/openingArticle'
import StickyButton from '@/components/modules/stickyButton'
import VideoComponent from '@/components/modules/editorial/videoComponent'

// Helpers
import NextArticle from '@/components/modules/editorial/nextArticle'

export default function Video() {
  const [video, setVideo] = useState(false)
  return (
    <Layout>
      <NextSeo title="Video" />
      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <OpeningArticle />
      <section className="w-full h-full flex flex-col">
        <Container className="max-md:px-0">
          {/* Video */}
          <div className="relative w-full flex flex-col space-y-3">
            <VideoComponent setVideo={setVideo} video={video}/>
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
        destination={'/article/blog'}
      />
      {/* Button Sticky */}
      <StickyButton destination="/editorial/metamorphosis" arrow="left">
        ISSUE 1
      </StickyButton>
      <Footer />
    </Layout>
  )
}
