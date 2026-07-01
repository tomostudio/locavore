import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import ImageModule from 'next/image'
import { useRouter } from 'next/router'

// Layout
import Layout from '@/components/modules/layout'
import HeaderGap from '@/components/modules/headerGap'
import Footer from '@/components/modules/footer'

// Components
import Arrow from '@/components/utils/arrow'
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'
import { RestaurantSchema } from '@/components/utils/structuredData'
import { absoluteUrl } from '@/helpers/seo/siteConfig'
import FamilyMenu from '@/components/modules/family/familyMenu'
import FamilyMenuMobile from '@/components/modules/family/familyMenuMobile'

// Helpers
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { transition } from '@/helpers/preset/tailwind'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import { PortableText } from '@portabletext/react'
import { Facebook, Instagram, Whatsapp } from '@/helpers/preset/svg'
import Script from 'next/script'
import PillButton from '@/components/modules/pillButton'
import { useNextSanityImage } from 'next-sanity-image'
import { singleIURB } from '@/components/utils/iurb'
import Caption from '@/components/modules/editorial/caption'

const FamilySlug = ({
  familyAPI,
  seoAPI,
  familyListAPI,
  footerAPI,
  headerAPI,
}) => {
  const router = useRouter()
  const [seo] = seoAPI
  const [family] = familyAPI
  const [footer] = footerAPI
  const appContext = useAppContext()

  const dark = false

  // Get a stable slug to avoid hydration glitches
  const slug = router.query?.slug || family?.slug?.current

  // --- Side-by-side image helpers (robust to asset _ref and plain URLs) ---
  // Award badges that live only in code (the image is NOT placed in the Sanity
  // page body) render directly from these CDN URLs via the plain-URL image path.
  const OAD_2026_SRC = 'https://cdn.sanity.io/images/n3bn5042/production/5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07-790x460.png'
  const TATLER_BEST_2026_SRC = 'https://cdn.sanity.io/images/n3bn5042/production/99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380-1080x1080.png'

  // Awards organized by year for each restaurant
  const locavorenxtAwards = [
    { id: '6aff0992c9a0ebc8a56b9844c2d3add813677ccc', year: 2025 }, // 50s Best
    { id: '602faac7df0984afe4db4182cbd207aed2ed6c81', year: 2025 }, // The best chef
    { id: '104e22761eb1e670d4b7ad91c9d72a52e5ce7dbe', year: 2025 }, // La Liste
    { id: '9beebc5300dcedecc33287527d7b8f319831f134', year: 2025 }, // Prestige gourmet awards
    { id: '27680879083f1134b31e01821f1240de3859937e', year: 2025 }, // OAD
    { id: 'c1b4a40bd80040a6a6507b2d09c36986719364ad', year: 2025 }, // Tatler
    { id: 'f2703e94ad106c3b08e54e982e39a0238c44f985', year: 2025 }, // Food made good
    { id: 'ac7b19c73879f83cd6e86d78aa8c107dea47f58d', year: 2025 }, // Tatler Asia
    { id: 'edc5e221323934d0b2b79008c5280b54dea050f8', year: 2025 }, // Taste Makers Award
    { id: '4dd4be020a72f65fd3ec9e5a359f4086532c94ff', year: 2026 }, // Food Made Good 2026
    { id: 'd114ce1bf91edb448872938fa089de604e22cd3b', year: 2026 }, // Asia's 50 Best 2026
    { id: '1c1758fa4e3d7098f31eaaa7a16790ab9a7f84a4', year: 2026 }, // Prestige Gourmet Awards 2026
    { id: 'e6890e9bb2eee9816d95c24956d58a249e96bc10', year: 2026 }, // Tatler 2026
    { id: '5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07', year: 2026, src: OAD_2026_SRC, label: 'OAD' }, // OAD 2026
  ]

  const nightRoosterAwards = [
    { id: '3567ce9db6f96a110a3e89c885aaabc8a52117b9', year: 2025 }, // Tatler image
    { id: 'd4250f7ef233482fc3a8324c4ae68689fda335e7', year: 2025 }, // 50s best
    { id: '27430b9c4a0dd35429e82e738b1c80196cf00a3e', year: 2025 }, // tatler 2025
    { id: '9944e7595d79259aeefe13e8a672d37082eb54bb', year: 2025 }, // Taste Makers Award
    { id: 'b843596706cc059cc07de1202ba7965d2ace3b11', year: 2026 }, // Top 500 Bars
    { id: '99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380', year: 2026, src: TATLER_BEST_2026_SRC, label: 'Tatler Best' }, // Tatler Best 2026
  ]

  const nusantaraAwards = [
    { id: '5f5d222a9f8c58798daf60761b175594567d8888', year: 2025 }, // OAD
    { id: '7f8aeb89fdbea91a6f73542db808950397a272b9', year: 2025 }, // 50s best discovery
    { id: 'c0f8daca212f83363fdbec4d5d68383d2cc12646', year: 2025 }, // tatler 2025
    { id: '72ad8a2cc47aadf5da5d688640e1da7e167132eb', year: 2025 }, // Taste Makers Award
    { id: '5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07', year: 2026, src: OAD_2026_SRC, label: 'OAD' }, // OAD 2026
    { id: '99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380', year: 2026, src: TATLER_BEST_2026_SRC, label: 'Tatler Best' }, // Tatler Best 2026
  ]

  // Helper to get awards array for current slug
  const getAwardsForSlug = () => {
    if (slug === 'locavorenxt') return locavorenxtAwards
    if (slug === 'night-rooster') return nightRoosterAwards
    if (slug === 'nusantara') return nusantaraAwards
    return []
  }

  // Create Sets for quick lookup (used by isSideBySideImage)
  const locavorenxtSideBySideIds = new Set(locavorenxtAwards.map(a => a.id))
  const nightRoosterSideBySideIds = new Set(nightRoosterAwards.map(a => a.id))
  const nusantaraSideBySideIds = new Set(nusantaraAwards.map(a => a.id))

  const extractId = (refOrUrl) => {
    if (!refOrUrl) return null
    const s = String(refOrUrl)
    // Matches Sanity image id both in _ref (image-<id>-WxH-<fmt>) and URL path (<id>-WxH.<ext>)
    const m = s.match(/(?:image-)?([a-f0-9]{40})-[0-9]+x[0-9]+/)
    return m?.[1] || null
  }

  const isSideBySideImage = (imageBlock) => {
    if (!imageBlock?.image) return false
    const idFromRef = extractId(imageBlock.image?.asset?._ref)
    const idFromUrl = extractId(imageBlock.image?.url)
    const id = idFromRef || idFromUrl
    return (
      (slug === 'locavorenxt' && id && locavorenxtSideBySideIds.has(id)) ||
      (slug === 'night-rooster' && id && nightRoosterSideBySideIds.has(id)) ||
      (slug === 'nusantara' && id && nusantaraSideBySideIds.has(id))
    )
  }

  // Click-through URL mapping (optional). Keyed by slug so a shared award image
  // (e.g. the Tatler Best badge used on both Nusantara and Night Rooster) can
  // resolve to a different destination on each page.
  const getImageUrl = (imageBlock) => {
    if (!imageBlock?.image) return null
    const id = extractId(imageBlock.image?.asset?._ref) || extractId(imageBlock.image?.url)
    const imageUrlMapping = {
      locavorenxt: {
        '6aff0992c9a0ebc8a56b9844c2d3add813677ccc': 'https://www.theworlds50best.com/asia/en/awards/sustainable-restaurant-award.html',
        '602faac7df0984afe4db4182cbd207aed2ed6c81': 'https://thebestchefawards.com/chefs/eelke-plasmeijer-ray-adriansyah/',
        '104e22761eb1e670d4b7ad91c9d72a52e5ce7dbe': 'https://www.laliste.com/awards/ethical-sustainability-award-awards-2025',
        '9beebc5300dcedecc33287527d7b8f319831f134': 'https://www.prestigeonline.com/id/wine-dine/prestige-gourmet-awards-2025/',
        '27680879083f1134b31e01821f1240de3859937e': 'https://www.oadguides.com/restaurant/locavore-nxt',
        'f2703e94ad106c3b08e54e982e39a0238c44f985': 'https://thesra.org/about-us/food-made-good-directory/',
        'c1b4a40bd80040a6a6507b2d09c36986719364ad': 'https://www.tatlerasia.com/dining/locavore-nxt-id',
        'ac7b19c73879f83cd6e86d78aa8c107dea47f58d': 'https://www.tatlerasia.com/dining/locavore-nxt?listId=281',
        'edc5e221323934d0b2b79008c5280b54dea050f8': 'https://www.travelandleisureasia.com/sea/tl-tastemakers/tl-tastemakers-2025-26-these-are-the-best-restaurants-in-indonesia/',
        '4dd4be020a72f65fd3ec9e5a359f4086532c94ff': 'https://thesra.org/about-us/food-made-good-directory/',
        'd114ce1bf91edb448872938fa089de604e22cd3b': 'https://www.theworlds50best.com/asia/en/list/1-50',
        '1c1758fa4e3d7098f31eaaa7a16790ab9a7f84a4': 'https://www.prestigeonline.com/id/wine-dine/prestige-gourmet-awards-2026/',
        'e6890e9bb2eee9816d95c24956d58a249e96bc10': 'https://www.tatlerasia.com/dining/food/20-restoran-terbaik-tatler-best-indonesia-2026-id',
        '5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07': 'https://www.oadguides.com/lists/asia/top-restaurants/2026', // OAD 2026
      },
      'night-rooster': {
        '3567ce9db6f96a110a3e89c885aaabc8a52117b9': 'https://www.tatlerasia.com/dining/night-rooster?listId=282',
        'd4250f7ef233482fc3a8324c4ae68689fda335e7': 'https://www.theworlds50best.com/discovery/Establishments/Indonesia/Bali/Night-Rooster-by-Locavore-NXT.html',
        '27430b9c4a0dd35429e82e738b1c80196cf00a3e': 'https://www.tatlerasia.com/dining/night-rooster?listId=282',
        '9944e7595d79259aeefe13e8a672d37082eb54bb': 'https://www.travelandleisureasia.com/sea/tl-tastemakers/tl-tastemakers-2025-26-these-are-the-best-bars-in-indonesia/',
        'b843596706cc059cc07de1202ba7965d2ace3b11': 'https://www.top500bars.com/copie-de-451-500-2024',
        '99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380': 'https://www.tatlerasia.com/dining/drinks/20-bar-terbaik-tatler-best-indonesia-2026-id', // Tatler Best 2026 (bar)
      },
      nusantara: {
        '5f5d222a9f8c58798daf60761b175594567d8888': 'https://www.oadguides.com/restaurant/nusantara-by-locavore',
        '7f8aeb89fdbea91a6f73542db808950397a272b9': 'https://www.theworlds50best.com/discovery/Establishments/Indonesia/Bali/Nusantara-by-Locavore-NXT.html',
        'c0f8daca212f83363fdbec4d5d68383d2cc12646': 'https://www.tatlerasia.com/dining/nusantara-by-locavore-id',
        '72ad8a2cc47aadf5da5d688640e1da7e167132eb': 'https://www.travelandleisureasia.com/sea/tl-tastemakers/tl-tastemakers-2025-26-these-are-the-best-restaurants-in-indonesia/',
        '5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07': 'https://www.oadguides.com/lists/asia/top-restaurants/2026', // OAD 2026
        '99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380': 'https://www.tatlerasia.com/dining/food/20-restoran-terbaik-tatler-best-indonesia-2026-id', // Tatler Best 2026 (food)
      },
    }
    const slugMapping = imageUrlMapping[slug] || {}
    return id && slugMapping[id] ? slugMapping[id] : null
  }

  useEffect(() => {
    appContext.setHeader({ headerStyle: dark ? 'white' : 'black' })
    window.scroll(0, 0)
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  const serializers = {
    block: {
      normal: ({ children }) => (children[0] === '' ? <br /> : <p align='center'>{children}</p>),
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      h5: ({ children }) => <h5>{children}</h5>,
      center: ({ children }) => <p align='center'>{children}</p>,
      left: ({ children }) => <p align='left'>{children}</p>,
      right: ({ children }) => <p align='right'>{children}</p>,
    },
    list: {
      number: ({ children }) => <ol className='list-decimal'>{children}</ol>,
    },
    types: {
      code: (props) => <div dangerouslySetInnerHTML={{ __html: props.value.code }} />,
      roundedButton: (props) => (
        <>
          <FancyLink
            destination={props.value?.link}
            blank
            className={`w-fit mx-auto pillbutton px-4 py-2 pt-1.5 max-md:py-1 max-md:px-3 border border-black text-black rounded-3xl transition-all ease-linear setflex-center-row hover:bg-black hover:text-white hover:border-black `}
          >
            {props.value?.name}
          </FancyLink>
        </>
      ),
      imageModule: (props) => {
        const hasAsset = !!props?.value?.image?.asset
        // Call the hook unconditionally to respect Rules of Hooks
        const imageProps = useNextSanityImage(
          client,
          hasAsset ? props.value.image : undefined,
          { imageBuilder: singleIURB }
        )

        const shouldDisplaySideBySide = isSideBySideImage(props.value)
        const imageUrl = getImageUrl(props.value)

        // Plain URL fallback for images without asset (e.g., direct Sanity CDN URL)
        const plainUrl = !hasAsset && props?.value?.image?.url ? props.value.image.url : null

        const imageContent = (
          <div className={`image ${shouldDisplaySideBySide ? 'w-[100px]' : 'md:!px-24 max-w-[700px] mx-auto'}`}>
            <div
              className='relative w-full rounded-xl overflow-hidden mx-auto '
              style={{ backgroundColor: shouldDisplaySideBySide ? 'transparent' : `rgba(208,208,208, 1)` }}
            >
              {hasAsset ? (
                <ImageModule
                  {...imageProps}
                  alt={props.value.image.name || ''}
                  placeholder='blur'
                  blurDataURL={urlFor(props.value.image).blur(2).format('webp').saturation(-100).width(100).url()}
                  style={{ width: shouldDisplaySideBySide ? '100px' : '100%', height: 'auto' }}
                />
              ) : plainUrl ? (
                <img
                  src={plainUrl}
                  alt={props.value?.name || ''}
                  style={{ width: shouldDisplaySideBySide ? '100px' : '100%', height: 'auto', display: 'block' }}
                  loading='lazy'
                  decoding='async'
                />
              ) : null}
            </div>
            {props.value.name && <Caption option={false} caption={props.value.name} color='#000' />}
          </div>
        )

        return imageUrl ? (
          <FancyLink destination={imageUrl} blank={true} className='block hover:opacity-80 transition-opacity duration-300 cursor-pointer'>
            {imageContent}
          </FancyLink>
        ) : (
          imageContent
        )
      },
      // Auto-collage: editors upload 2–6 separate images and they fill one
      // edge-to-edge block (no Photoshop). Layout adapts to the image count.
      imageGallery: (props) => {
        const images = (props.value?.images || []).filter((img) => img?.asset)
        const count = images.length
        if (count === 0) return null

        // Grid template per count. Always a 3:2 block; cells fill flush (no gaps).
        const gridClass =
          count === 2 ? 'grid-cols-2 grid-rows-1'
          : count <= 4 ? 'grid-cols-2 grid-rows-2'
          : 'grid-cols-3 grid-rows-2'

        // 3 images → first is large (full height); 5 images → first spans two
        // columns so there are no empty cells.
        const cellSpan = (i) => {
          if (count === 3 && i === 0) return 'row-span-2'
          if (count === 5 && i === 0) return 'col-span-2'
          return ''
        }

        return (
          <div className='image md:!px-24 max-w-[700px] mx-auto'>
            <div className={`grid ${gridClass} aspect-[3/2] w-full rounded-xl overflow-hidden`}>
              {images.map((img, i) => (
                <div key={img._key || i} className={`relative ${cellSpan(i)}`}>
                  <img
                    src={urlFor(img).width(900).format('webp').url()}
                    alt={img.name || ''}
                    className='absolute inset-0 w-full h-full object-cover'
                    style={{
                      objectPosition: img.hotspot
                        ? `${(img.hotspot.x * 100).toFixed(2)}% ${(img.hotspot.y * 100).toFixed(2)}%`
                        : 'center',
                    }}
                    loading='lazy'
                    decoding='async'
                  />
                </div>
              ))}
            </div>
          </div>
        )
      },
    },
    marks: {
      add_ann: (props) =>
        props.value?.link ? (
          <FancyLink
            destination={props.value.link}
            blank={props.value.target_blank}
            style={{
              color: props.value?.textColor ? props.value?.textColor.hex : 'currentColor',
              backgroundColor: props.value?.bgColor ? props.value?.bgColor : 'transparent',
              fontSize: props.value?.fontSize ? props.value?.fontSize : 'initial',
            }}
            className={
              props.value?.font ? (props.value?.font === 'display' ? 'font-default' : props.value.font) : 'font-default'
            }
          >
            {props.children}
          </FancyLink>
        ) : (
          <span
            style={{
              color: props.value?.textColor ? props.value?.textColor.hex : 'currentColor',
              backgroundColor: props.value?.bgColor ? props.value?.bgColor : 'transparent',
              fontSize: props.value?.fontSize ? props.value?.fontSize : 'initial',
            }}
            className={
              props.value?.font ? (props.value?.font === 'display' ? 'font-default' : props.value.font) : 'font-default'
            }
          >
            {props.children}
          </span>
        ),
      largerSize: (props) => <span style={{ fontSize: '1.5em' }}>{props.children}</span>,
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
    },
  }

  const serializerInfo = {
    block: {
      normal: ({ children }) => (children[0] === '' ? <br /> : <p>{children}</p>),
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      h5: ({ children }) => <h5>{children}</h5>,
      center: ({ children }) => <p align='center'>{children}</p>,
      left: ({ children }) => <p align='left'>{children}</p>,
      right: ({ children }) => <p align='right'>{children}</p>,
    },
    list: { number: ({ children }) => <ol className='list-decimal'>{children}</ol> },
    types: { code: (props) => <div dangerouslySetInnerHTML={{ __html: props.value.code }} /> },
    marks: {
      add_ann: (props) =>
        props.value?.link ? (
          <FancyLink
            destination={props.value.link}
            blank={props.value.target_blank}
            style={{
              color: props.value?.textColor ? props.value?.textColor.hex : 'currentColor',
              backgroundColor: props.value?.bgColor ? props.value?.bgColor : 'transparent',
              fontSize: props.value?.fontSize ? props.value?.fontSize : 'initial',
            }}
            className={
              props.value?.font ? (props.value?.font === 'display' ? 'font-default' : props.value.font) : 'font-default'
            }
          >
            {props.children}
          </FancyLink>
        ) : (
          <span
            style={{
              color: props.value?.textColor ? props.value?.textColor.hex : 'currentColor',
              backgroundColor: props.value?.bgColor ? props.value?.bgColor : 'transparent',
              fontSize: props.value?.fontSize ? props.value?.fontSize : 'initial',
            }}
            className={
              props.value?.font ? (props.value?.font === 'display' ? 'font-default' : props.value.font) : 'font-default'
            }
          >
            {props.children}
          </span>
        ),
      largerSize: (props) => <span style={{ fontSize: '1.5em' }}>{props.children}</span>,
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
    },
  }

  return (
    <Layout>
      <SEO
        title={family.title}
        pagelink={`family/${family.slug.current}`}
        inputSEO={family.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <RestaurantSchema
        slug={family.slug.current}
        name={family.title}
        description={family.seo?.seo_description || ''}
        image={
          family.seo?.seo_image?.asset
            ? urlFor(family.seo.seo_image).format('jpg').quality(80).width(1200).url()
            : ''
        }
        url={absoluteUrl(`family/${family.slug.current}`)}
      />
      {/* Header Gap */}
      <HeaderGap />
      <div>
        <motion.section
          className='w-full setflex-center rounded-t-2xl min-h-[calc(100vh-60px)] no-select-all pb-20 md:pb-0'
          style={{ backgroundColor: family.bgColor.hex ? family.bgColor.hex : '#fff' }}
          initial='initial'
          animate='enter'
          exit='exit'
          variants={{
            initial: { y: '100vh' },
            enter: { y: '0%', transition: { duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0 } },
            exit: { opacity: 0, transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] } },
          }}
        >
          <div className='w-full max-w-5xl px-20 max-md:px-5 setflex-center  '>
            <div className='w-full setflex-center mb-14'>
              <span className='text-center py-3 font-bold uppercase'>{family.title}</span>
              <div className='border-b border-black h-px w-full' />
              <div className='editor-styling w-full mt-8 max-md:max-w-lg'>
                {/* Special rendering for locavorenxt, night-rooster, and nusantara: side-by-side for selected images */}
                {(slug === 'locavorenxt' || slug === 'night-rooster' || slug === 'nusantara') ? (
                  <div className='space-y-4'>
                    {/* Render all content except images selected for side-by-side */}
                    {family.description.map((block, index) => {
                      if (block._type === 'imageModule' && isSideBySideImage(block)) {
                        return null
                      }
                      return <PortableText key={index} value={[block]} components={serializers} />
                    })}
                    {/* Side-by-side container with row layout, grouped by year */}
                    <div className='flex flex-col gap-8 items-center max-w-4xl mx-auto'>
                      {(() => {
                        const awards = getAwardsForSlug()
                        // Award images placed in the Sanity page body
                        const realBlocks = family.description.filter((block) => block._type === 'imageModule' && isSideBySideImage(block))
                        // Awards defined only in code (have a `src`) and not already in the CMS
                        // are injected as plain-URL image blocks so they render without a Sanity edit.
                        const presentIds = new Set(realBlocks.map((block) => extractId(block.image?.asset?._ref) || extractId(block.image?.url)))
                        const codeOnlyBlocks = awards
                          .filter((award) => award.src && !presentIds.has(award.id))
                          .map((award) => ({ _type: 'imageModule', _key: `award-${award.id}`, image: { url: award.src, name: award.label || '' } }))
                        const sideBySeideImages = [...realBlocks, ...codeOnlyBlocks]

                        // Get image year based on its ID
                        const getImageYear = (block) => {
                          const id = extractId(block.image?.asset?._ref) || extractId(block.image?.url)
                          const award = awards.find(a => a.id === id)
                          return award?.year || 2025
                        }

                        // Group images by year
                        const imagesByYear = sideBySeideImages.reduce((acc, block) => {
                          const year = getImageYear(block)
                          if (!acc[year]) acc[year] = []
                          acc[year].push(block)
                          return acc
                        }, {})

                        // Sort years descending (newest first)
                        const years = Object.keys(imagesByYear).sort((a, b) => b - a)

                        return years.map((year) => {
                          const images = imagesByYear[year]
                          const firstRowCount = Math.min(5, images.length)
                          const secondRowCount = images.length - firstRowCount

                          return (
                            <div key={year} className='w-full flex flex-col gap-4 items-center'>
                              {/* Year label */}
                              <span className='text-sm font-bold tracking-widest uppercase'>{year}</span>

                              {/* First row */}
                              <div className='flex justify-center items-center gap-4 flex-wrap w-full'>
                                {images.slice(0, firstRowCount).map((block, index) => (
                                  <div key={index} className='w-[100px] md:w-[120px] flex justify-center'>
                                    <PortableText value={[block]} components={serializers} />
                                  </div>
                                ))}
                              </div>

                              {/* Second row if there are more images */}
                              {secondRowCount > 0 && (
                                <div className='flex justify-center items-center gap-4 flex-wrap w-full'>
                                  {images.slice(firstRowCount).map((block, index) => (
                                    <div key={`second-${index}`} className='w-[100px] md:w-[120px] flex justify-center'>
                                      <PortableText value={[block]} components={serializers} />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })
                      })()}
                    </div>
                  </div>
                ) : (
                  <PortableText value={family.description} components={serializers} />
                )}
              </div>
            </div>
            {/* Right column with logo */}
            <div className='w-full grid grid-cols-2 max-md:grid-cols-1'>
              <div className='flex flex-col justify-between text-base pr-14 border-r py-7 space-y-4 relative max-md:row-start-2 max-md:row-end-3 max-md:text-center max-md:justify-center max-md:py-4 max-md:px-4 max-md:border-0'>
                <div className='hidden max-md:block w-[50%] h-[1px] bg-black mb-10 mx-auto min-w-[15em]' />
                <div>
                  {family.address}
                  {` • `}
                  <FancyLink destination={family.mapLink} className={`whitespace-nowrap ${transition.fade} underline`} blank={true}>
                    Map
                    <Arrow position='right' fill='black' className=' ml-1 inline-block -translate-y-px' />
                  </FancyLink>
                </div>
                {!family.disableInfo && (
                  <div className='w-full flex flex-col'>
                    <PortableText value={family.infoText} components={serializerInfo} />
                  </div>
                )}
                <div className='w-full flex flex-col underline'>
                  <FancyLink destination={family.waLink ? family.waLink : `tel:${family.phone_number}`} className={`${transition.fade}`}>
                    {family.phone_number}
                  </FancyLink>
                  <FancyLink destination={`mailto:${family.email}`} className={`${transition.fade}`}>
                    {family.email}
                  </FancyLink>
                </div>
                <div className='flex items-center space-x-6 max-md:w-full max-md:justify-center'>
                  <span className='text-sm'>Visit</span>
                  {family.instagram && (
                    <FancyLink destination={family.instagram.link} blank={true} className='relative w-4 h-4 hover:opacity-30 transition-opacity duration-300'>
                      <Instagram fill={'#000'} className='w-4 h-4' />
                    </FancyLink>
                  )}
                  {family.facebook && (
                    <FancyLink destination={family.facebook.link} blank={true} className='relative w-4 h-4 hover:opacity-50 transition-opacity duration-300'>
                      <Facebook fill={'#000'} className='w-4 h-4' />
                    </FancyLink>
                  )}
                  {family.waLink && (
                    <FancyLink destination={family.waLink} blank={true} className='relative w-4 h-4 hover:opacity-50 transition-opacity duration-300'>
                      <Whatsapp fill={'#000'} className='w-4 h-4' />
                    </FancyLink>
                  )}
                </div>
              </div>
              <div className='flex justify-end items-center relative w-full max-md:row-start-1 max-md:row-end-2 max-md:h-auto max-md:justify-center max-md:max-w-md max-md:mx-auto'>
                <div className='relative w-[90%] h-[90%] max-md:h-60' id='family-logo'>
                  {family.logo && family.logo.asset ? (
                    <Image
                      src={urlFor(family.logo).width(750).url()}
                      alt={family.logo.name}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='contain'
                      loading='eager'
                      priority={true}
                      objectPosition='center'
                      placeholder='blur'
                      blurDataURL={urlFor(family.logo).blur(2).format('webp').width(300).url()}
                    />
                  ) : (
                    <div className='w-full h-full' style={{ backgroundColor: `rgba(208,208,208, 1)` }}></div>
                  )}
                </div>
              </div>
            </div>
            {!family.disableButton && family.ctaButton && family.ctaButton.link && (
              <div className='w-full setflex-center'>
                <FancyLink
                  destination={family.ctaButton.link}
                  blank={true}
                  className='mt-16 py-3 px-6 text-base tracking-widest border border-black font-bold rounded-xl hover:bg-black hover:text-white transition-all duration-300 max-md:mt-10'
                >
                  {family.ctaButton.title}
                </FancyLink>
              </div>
            )}
          </div>
          <FamilyMenu familyListAPI={familyListAPI} bgColor={family.bgColor.hex ? family.bgColor.hex : 'default'} className='mt-auto' />
          {useMediaQuery('(max-width: 600px)') && (
            <div
              className={`absolute bottom-0 w-full h-28 translate-y-[80px] -z-1`}
              style={{ backgroundColor: family.bgColor.hex ? family.bgColor.hex : '#fff' }}
            />
          )}
        </motion.section>
        <FamilyMenuMobile familyListAPI={familyListAPI} familyAPI={familyAPI} collapse={true} />
      </div>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`*[_type == "family_list"]`)
  const paths = res.map((data) => ({ params: { slug: data.slug.current.toString() } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const familyAPI = await client.fetch(`*[_type == "family_list" && slug.current == "${params.slug}"]`)
  const familyListAPI = await client.fetch(`*[_type == "family_list"] | order(order asc)`)
  const seoAPI = await client.fetch(`*[_type == "settings"]`)
  const headerAPI = await client.fetch(`*[_type == "header"]`)
  const footerAPI = await client.fetch(`*[_type == "footer"]`)

  return {
    props: {
      familyAPI,
      seoAPI,
      familyListAPI,
      footerAPI,
      headerAPI,
    },
  }
}

export default FamilySlug
