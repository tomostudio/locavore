import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

// Layout
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import { fade } from '@/helpers/preset/transitions'

// Components
import FancyLink from '@/components/utils/fancyLink'
import FamilyImage from '@/components/utils/familyImage'
import SEO from '@/components/utils/seo'

// Helpers
import colors from '@/helpers/preset/colors'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'

export default function Family({ seoAPI, familyAPI }) {
  const [seo] = seoAPI
  const [family] = familyAPI
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
  useEffect(() => {
    window.scroll(0, 0)
    return () => {}
  }, [])

  return (
    <Layout>
      <SEO
        seo={{
          title: 'Family',
          webTitle:
            typeof seo !== 'undefined' && seo.webTitle ? seo.webTitle : '',
          description:
            typeof family !== 'undefined' &&
            typeof family.seo.seo_description !== 'undefined' &&
            family.seo.seo_description
              ? family.seo.seo_description
              : typeof seo !== 'undefined' && seo.seo.seo_description
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof family !== 'undefined' &&
            typeof family.seo.seo_keywords !== 'undefined' &&
            family.seo.seo_keywords
              ? family.seo.seo_keywords
              : typeof seo !== 'undefined' && seo.seo.seo_keywords
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof family !== 'undefined' &&
            typeof family.seo.seo_image !== 'undefined' &&
            family.seo.seo_image
              ? urlFor(family.seo.seo_image).url()
              : typeof seo !== 'undefined' && seo.seo.seo_image
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof family !== 'undefined' &&
            typeof family.seo.seo_image !== 'undefined' &&
            typeof family.seo.seo_image.name !== 'undefined' &&
            family.seo.seo_image.name
              ? family.seo.seo_image.name
              : typeof seo !== 'undefined' &&
                seo.seo.seo_image &&
                seo.seo.seo_image.name
              ? seo.seo.seo_image.name
              : '',
        }}
      />
      <motion.main
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        {/* Header Gap */}
        <HeaderGap />
        {/* Untuk Content */}
        <div className="w-full h-full pt-10 setflex-center">
          {/* Title */}
          {/* <h1 className="m-0 flex justify-center items-center font-sans font-normal">
          Family
          <h2 className="my-0 mx-4 h-full font-serif italic font-normal">
            of
          </h2>
          Locavore
        </h1> */}

          <h1 className="titlestyle">
            Family
            <span className="sub">of</span>Locavore
          </h1>
        </div>
        {/* Family Button */}
        <div
          className="sticky max-md:hidden top-20 z-50 w-56rem mx-auto flex flex-wrap mt-14"
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
            onMouseEnter={() =>
              onMouseEnter(4, colors.localparts, 'local-parts')
            }
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
        <section className="w-full h-full flex flex-col relative mt-12 max-md:mt-0">
          <div
            className="relative w-full h-auto flex flex-wrap  "
            id="family-image"
          >
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              dataImage="locavore"
              bgColor="#789578"
              src="/placeholder/Additional-Locavore.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#789578"
              dataImage="locavore"
              src="/placeholder/Additional-Locavore-2.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-3.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-4.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#C2D09A"
              dataImage="locavore-togo"
              src="/placeholder/Additional-Locavore-5.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-6.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-7.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-8.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="THE NIGHT ROOSTER"
              position="Mixologist"
              name="John Doe"
              bgColor="#91C1E4"
              dataImage="the-night-rooster"
              src="/placeholder/Additional-Locavore-10.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              dataImage="locavore"
              bgColor="#789578"
              src="/placeholder/Additional-Locavore.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#789578"
              dataImage="locavore"
              src="/placeholder/Additional-Locavore-2.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-3.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-4.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#C2D09A"
              dataImage="locavore-togo"
              src="/placeholder/Additional-Locavore-5.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-6.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-7.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-8.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="THE NIGHT ROOSTER"
              position="Mixologist"
              name="John Doe"
              bgColor="#91C1E4"
              dataImage="the-night-rooster"
              src="/placeholder/Additional-Locavore-10.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              dataImage="locavore"
              bgColor="#789578"
              src="/placeholder/Additional-Locavore.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#789578"
              dataImage="locavore"
              src="/placeholder/Additional-Locavore-2.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-3.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-4.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#C2D09A"
              dataImage="locavore-togo"
              src="/placeholder/Additional-Locavore-5.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-6.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-7.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-8.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="THE NIGHT ROOSTER"
              position="Mixologist"
              name="John Doe"
              bgColor="#91C1E4"
              dataImage="the-night-rooster"
              src="/placeholder/Additional-Locavore-10.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              dataImage="locavore"
              bgColor="#789578"
              src="/placeholder/Additional-Locavore.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#789578"
              dataImage="locavore"
              src="/placeholder/Additional-Locavore-2.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-3.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-4.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#C2D09A"
              dataImage="locavore-togo"
              src="/placeholder/Additional-Locavore-5.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-6.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-7.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-8.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="THE NIGHT ROOSTER"
              position="Mixologist"
              name="John Doe"
              bgColor="#91C1E4"
              dataImage="the-night-rooster"
              src="/placeholder/Additional-Locavore-10.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              dataImage="locavore"
              bgColor="#789578"
              src="/placeholder/Additional-Locavore.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#789578"
              dataImage="locavore"
              src="/placeholder/Additional-Locavore-2.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-3.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-4.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="LOCAVORE"
              position="Executive Chef"
              name="Eelke Plasmeijer"
              bgColor="#C2D09A"
              dataImage="locavore-togo"
              src="/placeholder/Additional-Locavore-5.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-6.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-7.jpg"
              alt="Locavore"
            />
            <FamilyImage
              src="/placeholder/Additional-Locavore-8.jpg"
              alt="Locavore"
            />
            <FamilyImage
              background={true}
              title="THE NIGHT ROOSTER"
              position="Mixologist"
              name="John Doe"
              bgColor="#91C1E4"
              dataImage="the-night-rooster"
              src="/placeholder/Additional-Locavore-10.jpg"
              alt="Locavore"
            />
          </div>
        </section>
        <section
          className="sticky bottom-0 left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center"
          id="btnMobile"
        >
          <FancyLink
            destination="/article/locavore"
            className="relative -bottom-14 text-center w-full h-full rounded-t-2xl bg-locavore pt-2 pb-4 font-bold uppercase"
          >
            Locavore
          </FancyLink>
          <FancyLink
            destination="/article/rooster"
            className="relative z-2 -bottom-12 text-center w-full rounded-t-2xl bg-nightrooster pt-2 pb-4 font-bold uppercase"
          >
            the night rooster
          </FancyLink>
          <FancyLink
            destination="/article/locaparts"
            className="relative z-3 -bottom-9 text-center w-full rounded-t-2xl bg-localparts pt-2 pb-4 font-bold uppercase"
          >
            locaparts
          </FancyLink>
          <FancyLink
            destination="/article/nusantara"
            className="relative z-4 -bottom-6 text-center w-full rounded-t-2xl bg-nusantara pt-2 pb-4 font-bold uppercase"
          >
            nusantara
          </FancyLink>
          <FancyLink
            destination="/article/localab"
            className="relative z-5 -bottom-3 text-center w-full rounded-t-2xl bg-localab pt-2 pb-4 font-bold uppercase"
          >
            localab
          </FancyLink>
          <FancyLink
            destination="/article/togo"
            className="relative z-6 text-center w-full rounded-t-2xl bg-togo pt-2 pb-4 font-bold uppercase"
          >
            locavore to-go
          </FancyLink>
        </section>
        <Footer />
      </motion.main>
    </Layout>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const familyAPI = await client.fetch(`
  *[_type == "family"]
  `)
  return {
    props: {
      seoAPI,
      familyAPI,
    },
  }
}
