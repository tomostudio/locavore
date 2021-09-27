import { NextSeo } from 'next-seo'
import Image from 'next/image'

// Layout
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Navbar from '@/components/modules/navbar'

// Components
import FancyLink from '@/components/utils/fancyLink'
import Link from '@/components/utils/link'

// Helpers
import colors from '@/helpers/preset/colors'

export default function Family() {

  const onMouseEnter = (id, color, slug) => {
    document.getElementById('family-button').children[
      id
    ].style.background = color
    document.getElementById('family-button').children[id].style.fontWeight = 800
    document.getElementById('family-button').children[id].style.color = 'black'
    document.getElementById('family-button').children[id].style.borderColor =
      'black'
    const image = document.getElementById('family-image')
    for (let i = 0; i < image.children.length; i++) {
      if (image.children[i].getAttribute('data-image') === slug) {
        image.children[i].children[1].style.opacity = 1
      }
    }
  }

  const onMouseLeave = (id) => {
    document
      .getElementById('family-button')
      .children[id].removeAttribute('style')

    const image = document.getElementById('family-image')
    for (let i = 0; i < image.children.length; i++) {
      if (image.children[i].hasAttribute('data-image')) {
        image.children[i].children[1].style.opacity = 0
      }
    }
  }

  return (
    <Layout>
      <NextSeo title="Family" />
      <Navbar className="border-black bg-white" logo="/locavore-black.png" />

      {/* Header Gap */}
      <HeaderGap />
      {/* Untuk Content */}
      <div className="w-full h-full setflex-center">
        {/* Title */}
        <h1 className="m-0 flex justify-center items-center font-title font-normal">
          Family
          <h2 className="my-0 mx-4 h-full font-subtitle italic font-normal">
            of
          </h2>
          Locavore
        </h1>
        <p className="mt-14 text-center w-content px-paddingContent">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>
      {/* Family Button */}
      <div
        className="sticky top-20 z-50 w-56rem mx-auto flex flex-wrap mt-14"
        id="family-button"
      >
        <FancyLink
          destination="/family/locavore"
          onMouseEnter={() => onMouseEnter(0, colors.locavore, 'locavore')}
          onMouseLeave={() => onMouseLeave(0)}
          className="relative left-6 text-center uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
        >
          locavore
        </FancyLink>
        <FancyLink
          destination="/family/rooster"
          onMouseEnter={() =>
            onMouseEnter(1, colors.nightrooster, 'the-night-rooster')
          }
          onMouseLeave={() => onMouseLeave(1)}
          className="relative z-10 text-center uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
        >
          THE NIGHT ROOSTER
        </FancyLink>
        <FancyLink
          destination="/family/nusantara"
          onMouseEnter={() => onMouseEnter(2, colors.nusantara, 'nusantara')}
          onMouseLeave={() => onMouseLeave(2)}
          className="relative right-6 z-20 text-center uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
        >
          NUSANTARA
        </FancyLink>
        <FancyLink
          destination="/family/localab"
          onMouseEnter={() => onMouseEnter(3, colors.localab, 'localab')}
          onMouseLeave={() => onMouseLeave(3)}
          className="relative -top-px left-6 text-center uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
        >
          LOCAVORE LAB
        </FancyLink>
        <FancyLink
          destination="/family/locaparts"
          onMouseEnter={() => onMouseEnter(4, colors.localparts, 'local-parts')}
          onMouseLeave={() => onMouseLeave(4)}
          className="relative -top-px z-10 text-center uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
        >
          LOCAL PARTS
        </FancyLink>
        <FancyLink
          destination="/family/togo"
          onMouseEnter={() => onMouseEnter(5, colors.togo, 'locavore-togo')}
          onMouseLeave={() => onMouseLeave(5)}
          className="relative -top-px right-6 z-20 text-center uppercase bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full"
        >
          LOCAVORE TO-GO
        </FancyLink>
      </div>
      <section className="pt-10 w-full h-full flex flex-col">
        <div
          className="relative w-full h-auto flex flex-wrap mt-14"
          id="family-image"
        >
          <div data-image="locavore">
            <Image
              src={`/placeholder/Additional-Locavore.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-locavore bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">
                Eelke Plasmeijer
              </span>
              <span className="font-bold text-lg">LOCAVORE</span>
              <span className="font-subtitle font-semibold">
                Executive Chef
              </span>
            </div>
          </div>
          <div data-image="locavore">
            <Image
              src={`/placeholder/Additional-Locavore-2.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-locavore bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">
                Eelke Plasmeijer
              </span>
              <span className="font-bold text-lg">LOCAVORE</span>
              <span className="font-subtitle font-semibold">
                Executive Chef
              </span>
            </div>
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-3.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-4.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div data-image="locavore-togo">
            <Image
              src={`/placeholder/Additional-Locavore-5.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-togo bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">
                Eelke Plasmeijer
              </span>
              <span className="font-bold text-lg">LOCAVORE TO-GO</span>
              <span className="font-subtitle font-semibold">
                Executive Chef
              </span>
            </div>
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-6.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-7.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-8.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div data-image="the-night-rooster">
            <Image
              src={`/placeholder/Additional-Locavore-9.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-nightrooster bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">John Doe</span>
              <span className="font-bold text-lg">THE NIGHT ROOSTER</span>
              <span className="font-subtitle font-semibold">Mixologist</span>
            </div>
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-10.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div data-image="nusantara">
            <Image
              src={`/placeholder/Additional-Locavore-11.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-nusantara bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">John Doe</span>
              <span className="font-bold text-lg">NUSANTARA</span>
              <span className="font-subtitle font-semibold">Marketing</span>
            </div>
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-12.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Additional-Locavore-13.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Locavore-Headshot.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Locavore-Headshot-2.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div>
            <Image
              src={`/placeholder/Locavore-Headshot-3.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div data-image="local-parts">
            <Image
              src={`/placeholder/Locavore-Headshot-4.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-localparts bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">Andrew Doe</span>
              <span className="font-bold text-lg">LOCAL PARTS</span>
              <span className="font-subtitle font-semibold">
                Food Scientist
              </span>
            </div>
          </div>
          <div>
            <Image
              src={`/placeholder/Locavore-Headshot-5.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div data-image="localab">
            <Image
              src={`/placeholder/Locavore-Headshot-6.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-localab bg-opacity-75 flex flex-col items-center justify-between py-4">
              <span className="font-subtitle font-semibold">Andrew Doe</span>
              <span className="font-bold text-lg">LOCALAB</span>
              <span className="font-subtitle font-semibold">
                Food Scientist
              </span>
            </div>
          </div>
          <div>
            <Image
              src={`/placeholder/Locavore-Headshot-7.jpg`}
              alt={'Locavore'}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
      </section>
      <Footer />
      <Link />
    </Layout>
  )
}
