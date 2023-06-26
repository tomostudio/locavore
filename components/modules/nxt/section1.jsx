import React, { useEffect } from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/legacy/image'
import { m } from 'framer-motion'
import Container from '../container'

// IMPORT LOCAL IMAGE
import section1 from '@/public/nxt2/section1.png'
import section1_mobile from '@/public/nxt2/section1_mobile.png'
import NXT_Logo_Bumper from '@/public/nxt2/nxt_logo.png'
import urlFor from '@/helpers/sanity/urlFor'

export const Section1ComponentInner = ({ dataSection1 }) => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full hidden sm:block z-10">
        <Image
          src={urlFor(dataSection1.image.imageDesktop).width(1440).url()}
          alt={dataSection1.image.imageDesktop.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(dataSection1.image.imageDesktop)
            .blur(2)
            .format('webp')
            .width(100)
            .url()}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full sm:hidden">
        <Image
          src={urlFor(dataSection1.image.imageMobile).width(600).url()}
          alt={dataSection1.image.imageMobile.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(dataSection1.image.imageMobile)
            .blur(2)
            .format('webp')
            .width(500)
            .url()}
        />
      </div>
      <m.div
        id="black-layer"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { opacity: 1 },
          enter: {
            opacity: 0.5,
            transition: {
              duration: 1,
              delay: 3,
            },
          },
          exit: {
            opacity: 0.5,
          },
        }}
        className="absolute top-0 left-0 w-full h-full bg-black z-20"
      />
      <div className="absolute top-0 left-0 w-full h-full setflex-center z-20">
        <Container className="relative setflex-center">
          <div
            id="logo-gap"
            className="w-[150px] sm:w-[250px] h-[150px] sm:h-[250px]"
          />
          <m.div
            id="nxt_logo"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              initial: {
                top: '50%',
                transform: 'translateY(-50%)',
              },
              enter: {
                top: '0%',
                transform: 'translateY(0%)',
                transition: {
                  duration: 1,
                  delay: 2,
                },
              },
              exit: {
                top: '0%',
                transform: 'translateY(0%)',
              },
            }}
            className="absolute top-0 left-0 w-full flex justify-center"
          >
            <div className="relative w-[150px] sm:w-[250px] aspect-[1/1]">
              <Image
                src={NXT_Logo_Bumper}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </m.div>
          <m.div
            id="group-title"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              enter: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 3,
                },
              },
              exit: {
                opacity: 1,
              },
            }}
            className="w-full flex flex-col items-center mt-10 sm:mt-12 sm:px-24"
          >
            <p className="text-[#BEC29D] font-funkturm text-m-additionalHeader sm:text-d-additionalHeader text-center leading-none sm:leading-[120%]">
              {dataSection1.description}
            </p>
            <div className="mt-2 sm:mt-4 text-[#BEC29D]">
              <span className="mr-2 sm:mr-4 text-m-body sm:text-d-body">
                {dataSection1.textLeft}
              </span>
              •
              <span className="ml-2 sm:ml-4 sm:text-[1.375rem] font-serif italic font-medium">
                {dataSection1.textRight}
              </span>
            </div>
          </m.div>
        </Container>
      </div>
    </section>
  )
}

export const Section1AnimationOBJMobile = []

export const Section1AnimationOBJ = []
