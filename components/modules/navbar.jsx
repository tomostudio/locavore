import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({ className, logo }) {
  const [menu, setMenu] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full h-full z-50 pointer-events-none"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <Container
        className={`max-md:px-6 py-2 border-b pointer-events-auto ${className}`}
      >
        <div className="flex flex-wrap max-md:flex-nowrap max-md:items-center max-md:pt-10">
          <FancyLink
            onClick={() => {
              setMenu(!menu)
            }}
            className="hidden max-md:block"
          >
            <svg width="25" height="9" viewBox="0 0 25 9" fill="none">
              <line y1="1" x2="25" y2="1" stroke="black" />
              <line y1="8" x2="25" y2="8" stroke="black" strokeWidth="2" />
            </svg>
          </FancyLink>
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className="mb-1 max-md:ml-3 max-md:mb-0 py-2 max-md:p-0"
          >
            <img src={logo} />
          </FancyLink>

          <nav className="ml-auto flex max-md:justify-end space-x-7 w-full text-sm md:text-base md:w-auto">
            {useMediaQuery('(max-width: 768px)') ? (
              <FancyLink
                destination="/about"
                a11yText="Navigate to the about page"
                className="p-2 font-bold max-md:p-0"
              >
                BOOKING
              </FancyLink>
            ) : (
              <>
                <FancyLink
                  destination="/editorial"
                  a11yText="Navigate to the editorial page"
                  className="p-2"
                >
                  Editorial
                </FancyLink>
                <FancyLink
                  destination="/under_construction"
                  a11yText="Navigate to the about page"
                  className="p-2"
                >
                  Under Construction
                </FancyLink>
                <FancyLink
                  destination="/family"
                  a11yText="Navigate to the about page"
                  className="p-2"
                >
                  Family
                </FancyLink>
                <FancyLink
                  destination="/about"
                  a11yText="Navigate to the about page"
                  className="p-2 font-bold"
                >
                  BOOKING
                </FancyLink>
              </>
            )}
          </nav>
        </div>
      </Container>
      <div
        className={`relative hidden max-md:block z-0 w-full h-full bg-white ${
          menu
            ? 'opacity-1 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full py-8 border-b flex justify-center border-black  text-4xl">
          <FancyLink destination="/editorial">Editorial</FancyLink>
        </div>
        <div className="w-full py-8 border-b flex justify-center border-black text-4xl">
          <FancyLink destination="/under_construction">
            Under Construction
          </FancyLink>
        </div>
        <div className="w-full py-8 border-b flex justify-center border-black text-4xl">
          <FancyLink destination="/family">Family</FancyLink>
        </div>
        <div className="w-full py-8 border-b flex justify-center border-black text-4xl">
          <FancyLink destination="/booking">Booking</FancyLink>
        </div>
        <div className="w-full py-8 border-b flex justify-center border-black space-x-12">
          <FancyLink className="relative w-16px h-16px">
            <Image
              src={`/instagram.png`}
              alt={'Locavore'}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </FancyLink>
          <FancyLink className="relative w-16px h-16px">
            <Image
              src={`/facebook.png`}
              alt={'Locavore'}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </FancyLink>
          <FancyLink className="relative w-16px h-16px">
            <Image
              src={`/Youtube.png`}
              alt={'Locavore'}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </FancyLink>
          <FancyLink className="relative w-16px h-16px">
            <Image
              src={`/Linkedin.png`}
              alt={'Locavore'}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </FancyLink>
        </div>
        <div className="w-full pt-4 flex justify-center">
          <FancyLink onClick={() => setMenu(false)}>Close</FancyLink>
        </div>
      </div>
    </header>
  )
}
