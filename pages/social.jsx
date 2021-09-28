import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'

// Components
import FancyLink from '@/components/utils/fancyLink'
import PillButton from '@/components/utils/pillButton'
import Arrow from '@/components/utils/arrow'
import CardPortrait from '@/components/utils/articleCard'
import StickyButton from '@/components/utils/stickyButton'

// Helpers
import Link from '@/components/utils/link'

export default function Social() {
  return (
    <Layout>
      <NextSeo title="Social" />

      {/* Untuk Content */}
      <section className="w-full h-full flex flex-col">
        <div className="py-4 w-full flex items-center justify-center border-b border-black">
          <div className="relative w-8 h-8">
            <Image
              src={`/placeholder/NightRooster-Cocktail-2020-45.jpg`}
              alt={'Locavore'}
              className="rounded-full"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <span className="pl-3 text-sm">LOCAVORE</span>
        </div>
        <div className="w-full mx-auto mb-14">
          <span className="text-xs block my-5 text-center">
            TAP ON ANY IMAGE TO LEARN MORE
          </span>
          <div className="w-56rem max-md:w-full mx-auto grid auto-rows-auto grid-cols-3	gap-2 max-md:px-1" id="social">
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/dossier-lab-2-3cascara-1.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/locavore-rintik-crop-18.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/locavore-rintik-crop-16.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/locavore-rintik-crop-11.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRoosterArtwork-5.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRoosterArtwork-deggeha-2.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRooster-Cocktail-2020-12.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRooster-Cocktail-2020-24.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRooster-Cocktail-2020-45.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRooster-Cocktail-2020-46.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/NightRooster-Cocktail-2020-47.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/story-garum.jpg`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/content 11(2).png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/content 11.png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
            <FancyLink
              destination="https://instagram.com/restaurantlocavore"
              blank={true}
            >
              <Image
                src={`/placeholder/content 12(1).png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </FancyLink>
          </div>
        </div>
      </section>
      <Link />
    </Layout>
  )
}
