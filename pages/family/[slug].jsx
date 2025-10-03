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

  // Helper function to check if an image should be displayed side by side
  const isSideBySideImage = (imageBlock) => {
    if (!imageBlock?.image?.asset) return false;
    
    // Extract image IDs from the URLs and also keep the original asset refs for fallback
    const sideBySideImageIds = [
      '33cf22d22de434d87085524090825871b0c9bab3', // from first URL
      '4dcbde0cab708850c1aa5bf21741ecf1121d6dbe',  // from second URL  
      'eedce8f1b794e1bf34e491c36037d53d0b2063fe', // from third URL
      'ce279421dca0f410aefeeef9d2fa776b3392df85'  // from fourth URL
    ];
    
    const assetRef = imageBlock.image.asset._ref;
    
    // Check if the asset reference contains any of our target image IDs
    return sideBySideImageIds.some(imageId => assetRef && assetRef.includes(imageId));
  };

  // Helper function to get URL for specific images
  // TO ADD MORE CLICKABLE IMAGES: 
  // 1. Add the image asset ID to both sideBySideImageIds arrays (this function and imageModule serializer)
  // 2. Add the corresponding URL mapping in imageUrlMapping below
  // 3. The image will automatically become clickable and open the URL in a new tab
  const getImageUrl = (imageBlock) => {
    if (!imageBlock?.image?.asset) return null;
    
    // CLICKABLE IMAGE URL MAPPING
    // To add more images: Add 'imageAssetId': 'https://your-url-here' entries below
    // Find image asset IDs by inspecting the Sanity asset reference in browser dev tools
    const imageUrlMapping = {
      'eedce8f1b794e1bf34e491c36037d53d0b2063fe': 'https://www.theworlds50best.com/asia/en/awards/sustainable-restaurant-award.html',
      'ce279421dca0f410aefeeef9d2fa776b3392df85': 'https://www.laliste.com/es/awards2025'
      // ADD MORE MAPPINGS HERE: 'imageAssetId': 'https://destination-url.com'
    };
    
    const assetRef = imageBlock.image.asset._ref;
    
    // Find matching URL for the image
    for (const [imageId, url] of Object.entries(imageUrlMapping)) {
      if (assetRef && assetRef.includes(imageId)) {
        return url;
      }
    }
    
    return null;
  };

  useEffect(() => {
    appContext.setHeader({ headerStyle: dark ? 'white' : 'black' })
    window.scroll(0, 0)
    return () => {
      appContext.setHeader({ headerStyle: 'default' })
    }
  }, [])

  const serializers = {
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p align='center'>{children}</p>,
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
      code: (props) => (
        <div dangerouslySetInnerHTML={{ __html: props.value.code }} />
      ),
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
        // CUSTOM MODIFICATION: Check if we're on locavorenxt page and if image is one of the specific ones that should display side by side
        // TO ADD MORE SIDE-BY-SIDE IMAGES: Add the image asset ID to this array AND to the getImageUrl function above
        // IMPORTANT: Keep this array in sync with the imageUrlMapping in getImageUrl function
        const sideBySideImageIds = [
          '33cf22d22de434d87085524090825871b0c9bab3', // from first URL (if needed)
          '4dcbde0cab708850c1aa5bf21741ecf1121d6dbe',  // from second URL (if needed)
          'eedce8f1b794e1bf34e491c36037d53d0b2063fe', // World's 50 Best Award
          'ce279421dca0f410aefeeef9d2fa776b3392df85'  // La Liste Award
          // ADD MORE IMAGE IDs HERE to make them display side-by-side on locavorenxt page
        ];
        
        const assetRef = props.value.image?.asset?._ref;
        const shouldDisplaySideBySide = router.query.slug === 'locavorenxt' && 
          sideBySideImageIds.some(imageId => assetRef && assetRef.includes(imageId));
        
        // Get URL for clickable images - this checks if the current image has a URL mapping
        const imageUrl = getImageUrl(props.value);
        
        const imageContent = (
          <div className={`image ${shouldDisplaySideBySide ? 'w-[120px]' : 'md:!px-24 max-w-[700px] mx-auto'}`}>
            <div
              className='relative w-full rounded-xl overflow-hidden mx-auto '
              style={{
                backgroundColor: `rgba(208,208,208, 1)`,
              }}
            >
              {props.value.image && props.value.image.asset ? (
                <ImageModule
                  {...useNextSanityImage(client, props.value.image, {
                    imageBuilder: singleIURB,
                  })}
                  style={{ width: shouldDisplaySideBySide ? '120px' : '100%', height: 'auto' }} // CUSTOM MODIFICATION: Set fixed width for side-by-side images
                  alt={props.value.image.name}
                  placeholder='blur'
                  blurDataURL={urlFor(props.value.image)
                    .blur(2)
                    .format('webp')
                    .saturation(-100)
                    .width(100)
                    .url()}
                />
              ) : (
                <></>
              )}
            </div>
            {props.value.name && (
              <Caption option={false} caption={props.value.name} color='#000' />
            )}
          </div>
        );
        
        // CLICKABLE IMAGE LOGIC: If image has a URL mapping, wrap it in a clickable link that opens in new tab
        if (imageUrl) {
          return (
            <FancyLink
              destination={imageUrl}
              blank={true}
              className="block hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              {imageContent}
            </FancyLink>
          );
        }
        
        // Return regular image if no URL mapping exists
        return imageContent;
      },
    },
    marks: {
      add_ann: (props) =>
        props.value?.link ? (
          <FancyLink
            destination={props.value.link}
            blank={props.value.target_blank}
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
              backgroundColor: props.value?.bgColor
                ? props.value?.bgColor
                : 'transparent',
              fontSize: props.value?.fontSize
                ? props.value?.fontSize
                : 'initial',
            }}
            className={
              props.value?.font
                ? props.value?.font === 'display'
                  ? 'font-default'
                  : props.value.font
                : 'font-default'
            }
          >
            {props.children} 
          </FancyLink>
        ) : (
          <span
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
              backgroundColor: props.value?.bgColor
                ? props.value?.bgColor
                : 'transparent',
              fontSize: props.value?.fontSize
                ? props.value?.fontSize
                : 'initial',
            }}
            className={
              props.value?.font
                ? props.value?.font === 'display'
                  ? 'font-default'
                  : props.value.font
                : 'font-default'
            }
          >
            {props.children}
          </span>
        ),
      largerSize: (props) => (
        <span style={{ fontSize: '1.5em' }}>{props.children}</span>
      ),
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
    },
  }

  const serializerInfo = {
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p>{children}</p>,
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
      code: (props) => (
        <div dangerouslySetInnerHTML={{ __html: props.value.code }} />
      ),
    },
    marks: {
      add_ann: (props) =>
        props.value?.link ? (
          <FancyLink
            destination={props.value.link}
            blank={props.value.target_blank}
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
              backgroundColor: props.value?.bgColor
                ? props.value?.bgColor
                : 'transparent',
              fontSize: props.value?.fontSize
                ? props.value?.fontSize
                : 'initial',
            }}
            className={
              props.value?.font
                ? props.value?.font === 'display'
                  ? 'font-default'
                  : props.value.font
                : 'font-default'
            }
          >
            {props.children}
          </FancyLink>
        ) : (
          <span
            style={{
              color: props.value?.textColor
                ? props.value?.textColor.hex
                : 'currentColor',
              backgroundColor: props.value?.bgColor
                ? props.value?.bgColor
                : 'transparent',
              fontSize: props.value?.fontSize
                ? props.value?.fontSize
                : 'initial',
            }}
            className={
              props.value?.font
                ? props.value?.font === 'display'
                  ? 'font-default'
                  : props.value.font
                : 'font-default'
            }
          >
            {props.children}
          </span>
        ),
      largerSize: (props) => (
        <span style={{ fontSize: '1.5em' }}>{props.children}</span>
      ),
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
      {/* Header Gap */}
      <HeaderGap />
      <div>
        <motion.section
          className='w-full setflex-center rounded-t-2xl min-h-[calc(100vh-60px)] no-select-all pb-20 md:pb-0'
          style={{
            backgroundColor: family.bgColor.hex ? family.bgColor.hex : '#fff',
          }}
          initial='initial'
          animate='enter'
          exit='exit'
          variants={{
            initial: { y: '100vh' },
            enter: {
              y: '0%',
              transition: { duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0 },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
            },
          }}
        >
          <div className='w-full max-w-5xl px-20 max-md:px-5 setflex-center  '>
            <div className='w-full setflex-center mb-14'>
              <span className='text-center py-3 font-bold uppercase'>
                {family.title}
              </span>
              <div className='border-b border-black h-px w-full' />
              <div className="editor-styling w-full mt-8 max-md:max-w-lg">
                {/* CUSTOM MODIFICATION: Special rendering for locavorenxt page to display specific images side by side */}
                {router.query.slug === 'locavorenxt' ? (
                  <div className="space-y-4">
                    {/* Render all content except the specific images that need to be side by side */}
                    {family.description.map((block, index) => {
                      if (block._type === 'imageModule' && isSideBySideImage(block)) {
                        return null; // Skip these images - they'll be rendered separately below
                      }
                      return (
                        <PortableText
                          key={index}
                          value={[block]}
                          components={serializers}
                        />
                      );
                    })}
                    {/* CUSTOM MODIFICATION: Flexbox container to display specific images side by side */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      {family.description
                        .filter(block => 
                          block._type === 'imageModule' && isSideBySideImage(block)
                        )
                        .map((block, index) => (
                          <div key={index} className="w-[120px]"> {/* Fixed width container for side-by-side display */}
                            <PortableText
                              value={[block]}
                              components={serializers}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ) : (
                  /* Default rendering for all other pages */
                  <PortableText
                    value={family.description}
                    components={serializers}
                  />
                )}
              </div>
            </div>
          </div>
          {!family.disableInstagram && family.elfsightCode && (
            <div className='w-full max-w-screen-xl max-md:w-full px-5 setflex-center '>
              <div className='w-full my-0'>
                <div className='flex flex-col w-full'>
                  {/* INSTAGRAM SECTION */}
                  <div className='w-full border border-black rounded-2xl h-auto p-5'>
                    {family.elfsightCode && (
                      <>
                        <Script
                          src='https://apps.elfsight.com/p/platform.js'
                          beforeInteractive
                        />
                        {/* Change the Elfsight Code to Update */}
                        {/* default code elfsight-app-b1b735e6-61b1-4eda-8840-cf78479acb1c */}
                        <div
                          className={`${family.elfsightCode} rounded-2xl overflow-hidden relative z-1`}
                        ></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='w-full max-w-5xl px-20 max-md:px-5 mb-14 max-sm:mb-4 setflex-center max-md:max-w-lg '>
            {!family.disableInstagram && family.elfsightCode && (
              <div className='w-full'>
                <div className='flex flex-col w-full mb-10 '>
                  <FancyLink
                    destination={family.instagram.link}
                    blank={true}
                    className='w-full flex justify-between mt-4 hover:opacity-50 transition-opacity duration-300'
                  >
                    <div className='flex items-center space-x-5'>
                      <Instagram fill={'#000'} className='w-4 h-4' />
                      <span className=' text-base '>
                        @{family.instagram.title}
                      </span>
                    </div>
                    <div>
                      <Arrow position='right' fill='black' />
                    </div>
                  </FancyLink>
                </div>
              </div>
            )}
            <div className='w-full grid grid-cols-2 max-md:grid-cols-1'>
              <div className='flex flex-col justify-between text-base pr-14 border-r py-7 space-y-4 relative max-md:row-start-2 max-md:row-end-3 max-md:text-center max-md:justify-center max-md:py-4 max-md:px-4 max-md:border-0'>
                <div className='hidden max-md:block w-[50%] h-[1px] bg-black mb-10 mx-auto min-w-[15em]' />
                <div>
                  {family.address}
                  {` • `}
                  <FancyLink
                    destination={family.mapLink}
                    className={`whitespace-nowrap ${transition.fade} underline`}
                    blank={true}
                  >
                    Map
                    <Arrow
                      position='right'
                      fill='black'
                      className=' ml-1 inline-block -translate-y-px'
                    />
                  </FancyLink>
                </div>
                {!family.disableInfo && (
                  <div className='w-full flex flex-col'>
                    <PortableText
                      value={family.infoText}
                      components={serializerInfo}
                    />
                  </div>
                )}
                <div className='w-full flex flex-col underline'>
                  <FancyLink
                    destination={
                      family.waLink
                        ? family.waLink
                        : `tel:${family.phone_number}`
                    }
                    className={`${transition.fade}`}
                  >
                    {family.phone_number}
                  </FancyLink>
                  <FancyLink
                    destination={`mailto:${family.email}`}
                    className={`${transition.fade}`}
                  >
                    {family.email}
                  </FancyLink>
                </div>
                <div className='flex items-center space-x-6 max-md:w-full max-md:justify-center'>
                  <span className='text-sm'>Visit</span>
                  {family.instagram && (
                    <FancyLink
                      destination={family.instagram.link}
                      blank={true}
                      className='relative w-4 h-4 hover:opacity-30 transition-opacity duration-300'
                    >
                      <Instagram fill={'#000'} className='w-4 h-4' />
                    </FancyLink>
                  )}
                  {family.facebook && (
                    <FancyLink
                      destination={family.facebook.link}
                      blank={true}
                      className='relative w-4 h-4 hover:opacity-50 transition-opacity duration-300'
                    >
                      <Facebook fill={'#000'} className='w-4 h-4' />
                    </FancyLink>
                  )}
                  {family.waLink && (
                    <FancyLink
                      destination={family.waLink}
                      blank={true}
                      className='relative w-4 h-4 hover:opacity-50 transition-opacity duration-300'
                    >
                      <Whatsapp fill={'#000'} className='w-4 h-4' />
                    </FancyLink>
                  )}
                </div>
              </div>
              <div className='flex justify-end items-center relative w-full max-md:row-start-1 max-md:row-end-2 max-md:h-auto max-md:justify-center max-md:max-w-md max-md:mx-auto'>
                <div
                  className='relative w-[90%] h-[90%] max-md:h-60'
                  id='family-logo'
                >
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
                      blurDataURL={urlFor(family.logo)
                        .blur(2)
                        .format('webp')
                        .width(300)
                        .url()}
                    />
                  ) : (
                    <div
                      className='w-full h-full'
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
            {!family.disableButton &&
              family.ctaButton &&
              family.ctaButton.link && (
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
          <FamilyMenu
            familyListAPI={familyListAPI}
            bgColor={family.bgColor.hex ? family.bgColor.hex : 'default'}
            className='mt-auto'
          />
          {useMediaQuery('(max-width: 600px)') && (
            <div
              className={`absolute bottom-0 w-full h-28 translate-y-[80px] -z-1`}
              style={{
                backgroundColor: family.bgColor.hex
                  ? family.bgColor.hex
                  : '#fff',
              }} /*background filler*/
            />
          )}
        </motion.section>
        <FamilyMenuMobile
          familyListAPI={familyListAPI}
          familyAPI={familyAPI}
          collapse={true}
        />
      </div>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
      *[_type == "family_list"]
    `)

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const familyAPI = await client.fetch(
    `
      *[_type == "family_list" && slug.current == "${params.slug}"] 
    `
  )
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"] | order(order asc)
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const headerAPI = await client.fetch(`
  *[_type == "header"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)

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
