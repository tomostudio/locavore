import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'

// Components
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'

// Helpers
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'

export default function Social({ seoAPI, socialAPI }) {
  const [seo] = seoAPI
  const [social] = socialAPI
  const appContext = useAppContext()
  useEffect(() => {
    appContext.setHeader({ headerStyle: 'hidden' })
    window.scroll(0, 0)
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])
  return (
    <Layout>
      <SEO
        seo={{
          title: 'Social',
          webTitle:
            typeof seo !== 'undefined' && seo.webTitle ? seo.webTitle : '',
          description:
            typeof social !== 'undefined' &&
            typeof social.seo.seo_description !== 'undefined' &&
            social.seo.seo_description
              ? social.seo.seo_description
              : typeof seo !== 'undefined' && seo.seo.seo_description
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof social !== 'undefined' &&
            typeof social.seo.seo_keywords !== 'undefined' &&
            social.seo.seo_keywords
              ? social.seo.seo_keywords
              : typeof seo !== 'undefined' && seo.seo.seo_keywords
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof social !== 'undefined' &&
            typeof social.seo.seo_image !== 'undefined' &&
            social.seo.seo_image
              ? urlFor(social.seo.seo_image).url()
              : typeof seo !== 'undefined' && seo.seo.seo_image
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof social !== 'undefined' &&
            typeof social.seo.seo_image !== 'undefined' &&
            typeof social.seo.seo_image.name !== 'undefined' &&
            social.seo.seo_image.name
              ? social.seo.seo_image.name
              : typeof seo !== 'undefined' &&
                seo.seo.seo_image &&
                seo.seo.seo_image.name
              ? seo.seo.seo_image.name
              : '',
        }}
      />

      {/* Untuk Content */}
      <section className="w-full h-full flex flex-col">
        <FancyLink
          destination="/"
          // blank={true}
          className="sticky top-0 left-0 w-full z-25"
        >
          <header className="py-2 w-full flex items-center justify-center border-b border-black bg-white">
            <div className="relative w-10 h-10">
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
          </header>
        </FancyLink>
        <div className="w-full mx-auto mb-14">
          <span className="text-xs block my-5 text-center">
            TAP ON ANY IMAGE TO LEARN MORE
          </span>
          <div
            className="w-56rem max-md:w-full mx-auto grid auto-rows-auto grid-cols-3	gap-2 max-md:px-1"
            id="social"
          >
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
    </Layout>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const socialAPI = await client.fetch(`
  *[_type == "social"]
  `)
  return {
    props: {
      seoAPI,
      socialAPI,
    },
  }
}
