import React, { useEffect } from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/legacy/image'
import { m } from 'framer-motion'
import Container from '../container'

// IMPORT LOCAL IMAGE
import NXT_Logo_Bumper from '@/public/nxt2/nxt_logo.png'
import urlFor from '@/helpers/sanity/urlFor'

export const Section1ComponentInner = ({ landingSection }) => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full hidden sm:block z-10">
        <Image
          src={urlFor(landingSection.imageDesktop).width(1440).url()}
          alt={landingSection.imageDesktop.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(landingSection.imageDesktop)
            .blur(2)
            .format('webp')
            .width(100)
            .url()}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full sm:hidden">
        <Image
          src={urlFor(landingSection.imageMobile).width(600).url()}
          alt={landingSection.imageMobile.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlFor(landingSection.imageMobile)
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
            <div className="relative w-[150px] sm:w-[180px] lg:w-[250px] aspect-[1/1]">
              <Image
                src={NXT_Logo_Bumper}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
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
            className="w-full flex flex-col items-center mt-10 md:mt-12 md:px-4"
          >
            <p className="text-[#BEC29D] font-funkturm text-2xl md:text-[45px] text-center leading-none md:leading-[120%]">
              {landingSection.description}
            </p>
            <div className="mt-2 md:mt-4 text-[#BEC29D]">
              {landingSection.textLeft && landingSection.textRight ? (
                <>
                  <span className="mr-2 md:mr-4 text-m-body md:text-d-body">
                    {landingSection.textLeft}
                  </span>
                  •
                  <span className="ml-2 md:ml-4 md:text-[1.375rem] font-serif italic font-medium">
                    {landingSection.textRight}
                  </span>
                </>
              ) : landingSection.textLeft || landingSection.textRight ? (
                landingSection.textLeft ? (
                  <span className="mr-2 md:mr-4 text-m-body md:text-d-body">
                    {landingSection.textLeft}
                  </span>
                ) : (
                  <span className="ml-2 md:ml-4 md:text-[1.375rem] font-serif italic font-medium">
                    {landingSection.textRight}
                  </span>
                )
              ) : (
                <></>
              )}
            </div>
          </m.div>
        </Container>
      </div>
    </section>
  )
}

export const Section1AnimationOBJMobile = []

export const Section1AnimationOBJ = []
