import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import { useAppContext } from 'context/state'
import { useState } from 'react'
import Image from 'next/image'

export default function Header({ className = '', setting }) {
  const appContext = useAppContext()
  const { headerStyle } = appContext.headerVar
  const [menu, setMenu] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50  transition-all duration-150 ease-linear border-b ${className} ${
        headerStyle.toLowerCase() === 'default'
          ? 'border-black bg-white'
          : headerStyle.toLowerCase() === 'hidden'
          ? 'hidden'
          : headerStyle.toLowerCase() === 'white'
          ? 'border-white bg-black'
          : headerStyle.toLowerCase() === 'black'
          ? 'border-black bg-white '
          : headerStyle.toLowerCase() === 'blur-black'
          ? 'border-black bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm'
          : headerStyle.toLowerCase() === 'blur-white'
          ? 'border-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm'
          : headerStyle.toLowerCase() === 'trans-black'
          ? 'border-black bg-opacity-0'
          : headerStyle.toLowerCase() === 'trans-white'
          ? 'border-white bg-opacity-0'
          : 'border-black bg-white'
      }`}
    >
      <Container
        className={`h-header relative pointer-events-auto flex flex-wrap max-md:flex-nowrap max-md:pb-5 max-md:items-center max-md:pt-10 `}
      >
        {headerStyle.toLowerCase() === 'default' ? (
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
        ) : headerStyle.toLowerCase() === 'white' ? (
          <FancyLink
            onClick={() => {
              setMenu(!menu)
            }}
            className="hidden max-md:block"
          >
            <svg width="25" height="9" viewBox="0 0 25 9" fill="none">
              <line y1="1" x2="25" y2="1" stroke="white" />
              <line y1="8" x2="25" y2="8" stroke="white" strokeWidth="2" />
            </svg>
          </FancyLink>
        ) : (
          ''
        )}
        <FancyLink
          destination="/"
          a11yText="Navigate to the home page"
          className="max-md:ml-3 setflex-center max-md:p-0"
        >
          <img
            src={
              headerStyle.toLowerCase() === 'default' ||
              headerStyle.toLowerCase().includes('black')
                ? '/locavore-black.png'
                : headerStyle.toLowerCase().includes('white')
                ? '/locavore-white.png'
                : '/locavore-black.png'
            }
          />
        </FancyLink>
        <nav
          className={`ml-auto setflex-center-row max-md:justify-end space-x-6 w-full text-sm md:text-sm md:w-auto transition-colors duration-300 ease-linear ${
            headerStyle.toLowerCase() === 'default' ||
            headerStyle.toLowerCase().includes('black')
              ? 'text-black'
              : headerStyle.toLowerCase().includes('white')
              ? 'text-white'
              : ''
          }`}
        >
          {useMediaQuery('(min-width: 768px)') && (
            <>
              <FancyLink
                destination="/editorial"
                a11yText="Navigate to the editorial page"
                className="hover:opacity-60 transition-opacity ease-linear"
              >
                Editorial
              </FancyLink>
              {setting && setting[0].headerLink &&
                setting[0].headerLink.map((item, index) => (
                  <FancyLink
                    key={index}
                    destination={item.link}
                    a11yText={item.title}
                    className="hover:opacity-60 transition-opacity ease-linear"
                  >
                    {item.title}
                  </FancyLink>
                ))}
              {/* <FancyLink
                destination="/editorial/uc"
                a11yText="Navigate to the about page"
                className="hover:opacity-60 transition-opacity ease-linear"
              >
                Under Construction
              </FancyLink> */}
              <FancyLink
                destination="/family"
                a11yText="Navigate to the about page"
                className="hover:opacity-60 transition-opacity ease-linear"
              >
                Family
              </FancyLink>
            </>
          )}
          <FancyLink
            destination="/about"
            a11yText="Navigate to the about page"
            className="font-bold hover:opacity-60 transition-opacity ease-linear"
          >
            BOOKING
          </FancyLink>
        </nav>
      </Container>
      {useMediaQuery('(max-width: 768px)') && (
        <div
          className={`z-0 w-full h-screen ${
            menu
              ? 'relative opacity-1 pointer-events-auto'
              : 'absolute opacity-0 pointer-events-none'
          } ${
            headerStyle.toLowerCase() === 'default'
              ? 'bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm'
              : headerStyle.toLowerCase() === 'white'
              ? 'bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm'
              : ''
          }`}
        >
          <div
            className={`w-full py-8 border-b flex justify-center text-4xl ${
              headerStyle.toLowerCase() === 'default'
                ? 'border-black'
                : headerStyle.toLowerCase() === 'white'
                ? 'border-white text-white'
                : ''
            }`}
          >
            <FancyLink destination="/editorial" className="text-center">
              Editorial
            </FancyLink>
          </div>
          <div
            className={`w-full py-8 border-b flex justify-center text-4xl ${
              headerStyle.toLowerCase() === 'default'
                ? 'border-black'
                : headerStyle.toLowerCase() === 'white'
                ? 'border-white text-white'
                : ''
            }`}
          >
            <FancyLink
              destination="/under_construction"
              className="text-center"
            >
              Under Construction
            </FancyLink>
          </div>
          <div
            className={`w-full py-8 border-b flex justify-center text-4xl ${
              headerStyle.toLowerCase() === 'default'
                ? 'border-black'
                : headerStyle.toLowerCase() === 'white'
                ? 'border-white text-white'
                : ''
            }`}
          >
            <FancyLink destination="/family" className="text-center">
              Family
            </FancyLink>
          </div>
          <div
            className={`w-full py-8 border-b flex justify-center text-4xl ${
              headerStyle.toLowerCase() === 'default'
                ? 'border-black'
                : headerStyle.toLowerCase() === 'white'
                ? 'border-white text-white'
                : ''
            }`}
          >
            <FancyLink destination="/booking" className="text-center">
              Booking
            </FancyLink>
          </div>
          <div
            className={`w-full py-8 border-b flex justify-center space-x-12 ${
              headerStyle.toLowerCase() === 'default'
                ? 'border-black'
                : headerStyle.toLowerCase() === 'white'
                ? 'border-white'
                : ''
            }`}
          >
            {headerStyle.toLowerCase() === 'default' ? (
              <>
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
              </>
            ) : headerStyle.toLowerCase() === 'white' ? (
              <>
                <FancyLink className="relative w-16px h-16px">
                  <Image
                    src={`/instagram-white.png`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </FancyLink>
                <FancyLink className="relative w-16px h-16px">
                  <Image
                    src={`/facebook-white.png`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </FancyLink>
                <FancyLink className="relative w-16px h-16px">
                  <Image
                    src={`/Youtube-white.png`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </FancyLink>
                <FancyLink className="relative w-16px h-16px">
                  <Image
                    src={`/Linkedin-white.png`}
                    alt={'Locavore'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </FancyLink>
              </>
            ) : (
              ''
            )}
          </div>
          <div
            className={`w-full pt-7 flex justify-center ${
              headerStyle.toLowerCase() === 'default'
                ? 'text-black'
                : headerStyle.toLowerCase() === 'white'
                ? 'text-white'
                : ''
            }`}
          >
            <FancyLink onClick={() => setMenu(false)}>Close</FancyLink>
          </div>
        </div>
      )}
    </header>
  )
}
