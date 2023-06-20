import React, { useEffect } from 'react'
import 'intersection-observer' // optional polyfill
import Image from 'next/image'
import { m } from 'framer-motion'
import Container from '../container'

// IMPORT LOCAL IMAGE
import section1 from '@/public/nxt2/section1.png'
import section1_mobile from '@/public/nxt2/section1_mobile.png'
import NXT_Logo_Bumper from '@/public/nxt2/nxt_logo.png'

export const Section1ComponentInner = () => {

  return (
    <section className="relative w-full h-screen">
      <Image src={section1} alt="" fill className='object-cover hidden sm:block' />
      <Image src={section1_mobile} alt="" fill className='object-cover sm:hidden' />
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
        className="absolute top-0 left-0 w-full h-full bg-black"
      />
      <div className="absolute top-0 left-0 w-full h-full setflex-center">
        <Container className="relative setflex-center">
          <div id="logo-gap" className="w-[150px] sm:w-[250px] h-[150px] sm:h-[250px]" />
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
                  delay: 2
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
                className='object-cover'
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
              Locavore NXT is Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Proin nec massa viverra, aliquet dui ac.
            </p>
            <div className="mt-2 sm:mt-4 text-[#BEC29D]">
              <span className="mr-2 sm:mr-4 text-m-body sm:text-d-body">Lorem ipsum</span>•
              <span className="ml-2 sm:ml-4 sm:text-[1.375rem] font-serif italic font-medium">
                March 2022
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
