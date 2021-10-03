import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import ArticleCard from '@/components/utils/articleCard'

// Helpers
import Link from '@/components/utils/link'
import StickyButton from '@/components/utils/stickyButton'
import Container from '@/components/modules/container'

// install Swiper modules
SwiperCore.use([Pagination])

export default function UnderConstruction() {
  return (
    <Layout>
      <NextSeo title="Under Construction" />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <section className="py-10 w-full h-full flex flex-col space-y-10">
        {/* Title */}
        <Container className="max-md:px-6">
          <div className="w-full h-full setflex-center">
            <span className="font-serif italic text-xl">
              Issue 0 — March 2021
            </span>
            <h1 className=" font-sans font-normal max-md:break-all max-md:text-center">
              Under Construction
            </h1>
          </div>
        </Container>
        {/* Card */}
        <div className="w-full h-96 flex" id="editorial-slider">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            loop={true}
            centeredSlides={true}
            id="swipe-editorial"
          >
            <SwiperSlide>
              <ArticleCard
                className="border border-black w-full h-96"
                title="5. Ulekan"
                category="Culture"
                timeRead="20 min read"
                src="/placeholder/content 16(5).png"
                alt="Locavore"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard
                className="border border-black w-full h-96"
                title="5. Ulekan"
                category="Culture"
                timeRead="20 min read"
                src="/placeholder/content 16(5).png"
                alt="Locavore"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard
                className="border border-black w-full h-96"
                title="5. Ulekan"
                category="Culture"
                timeRead="20 min read"
                src="/placeholder/content 16(5).png"
                alt="Locavore"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard
                className="border border-black w-full h-96"
                title="5. Ulekan"
                category="Culture"
                timeRead="20 min read"
                src="/placeholder/content 16(5).png"
                alt="Locavore"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard
                className="border border-black w-full h-96"
                title="5. Ulekan"
                category="Culture"
                timeRead="20 min read"
                src="/placeholder/content 16(5).png"
                alt="Locavore"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <Container className="max-md:px-6">
          <div className="w-full setflex-center">
            <div className="mb-5 text-xs">
              <span className="font-bold">1</span>-<span>15</span>
            </div>
            <div className="relative w-full setflex-center">
              <div className="relative border-b w-48 max-md:w-full h-px border-black">
                <div className="absolute left-4 w-8 h-1 -top-px border border-black bg-black" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Button Sticky */}
      <StickyButton destination="/editorial" arrow="left">
        ISSUE INDEX
      </StickyButton>
      <Footer />
      <Link />
    </Layout>
  )
}
