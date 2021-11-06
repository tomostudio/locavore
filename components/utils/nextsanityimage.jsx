import React, { useEffect } from 'react'
import Image from 'next/image'
import sanityClient from '@/helpers/sanity/client'
import { useNextSanityImage } from 'next-sanity-image'

const NextSanityImage = (data) => {
  const {
    image,
    maxHeight = 800,
    maxWidth,
    className = '',
    style,
    layout,
    ...forwards
  } = data
  //init plugin
  const imageProps = useNextSanityImage(sanityClient, image)

  const handleResize = () => {
    //get orientation
    const orientation = imageProps.width / imageProps.height
    imageProps.orientation = orientation <= 1 ? 'portrait' : 'landscape'

    //set maxheight on portrait
    if (imageProps.orientation === 'portrait') {
      if (
        (imageProps.width / imageProps.height) * maxHeight >
        window.innerWidth
      ) {
        if (!(window.innerWidth < 768)) {
          imageProps.width = window.innerWidth
        } else {
          imageProps.width = (imageProps.width / imageProps.height) * maxHeight
        }
      } else if ((imageProps.width / imageProps.height) * maxHeight > 2000) {
        imageProps.width = 2000
      } else {
        imageProps.width = (imageProps.width / imageProps.height) * maxHeight
      }

      if (maxHeight > window.innerHeight) {
        if (!(window.innerWidth < 768)) {
          imageProps.height = window.innerHeight
        } else {
          imageProps.height = maxHeight
        }
      } else if (maxHeight > 2000) {
        imageProps.height = 2000
      } else {
        imageProps.height = maxHeight
      }
    } else {
      if (imageProps.height > window.innerHeight) {
        if (!(window.innerWidth < 768)) {
          imageProps.height = window.innerHeight
        }
      } else if (imageProps.height > 2000) {
        imageProps.height = 2000
      }
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Image
      {...imageProps}
      {...forwards}
      className={`${imageProps.orientation} ${className}`}
      style={{
        display: 'block',
        ...style,
        aspectRatio: `${imageProps.width} / ${imageProps.height}`,
      }}
    />
  )
}

export default NextSanityImage
