import { forwardRef, Fragment, useEffect, useRef, useState } from 'react'
import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import { useAppContext } from 'context/state'
import Image from 'next/legacy/image'
import urlFor from '@/helpers/sanity/urlFor'
import { transition } from '@/helpers/preset/tailwind'
import { motion } from 'framer-motion'
import { Youtube, Facebook, Instagram, Linkedin } from '@/helpers/preset/svg'

export default function Header({ className = '', header, family, footer }) {
  const appContext = useAppContext()
  const popUpRefDekstop = useRef()
  const popUpRefMobile = useRef()
  const { headerStyle } = appContext.headerVar
  const [isOpenBookDesktop, setOpenBookDesktop] = useState(false)

  // Handle Click Outside
  const handleClickOutsideDesktop = (event) => {
    if (
      popUpRefDekstop.current &&
      !popUpRefDekstop.current.contains(event.target)
    ) {
      setOpenBookDesktop(false)
    }
  }

  const handleClickOutsideMobile = (event) => {
    if (
      popUpRefMobile.current &&
      !popUpRefMobile.current.contains(event.target)
    ) {
      appContext.setOpenBookMobile(false)
    }
  }

  // mobileMenu
  // setMobileMenu
  const [menu, setMenu] = useState(appContext.mobileMenu)
  const [footerProcessed] = footer

  const [wHeight, setWHeight] = useState(800)

  // simplified value of BNW
  // true = black
  const [bnw, setBNW] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setOpenBookDesktop(false)
      if (window.innerWidth > 850) {
        appContext.setOpenBookMobile(false)
      }
    }
    window.addEventListener('resize', handleResize, false)
  }, [])

  useEffect(() => {
    setMenu(appContext.mobileMenu)
  }, [appContext.mobileMenu])

  useEffect(() => {
    setBNW(!headerStyle.includes('white'))
  }, [headerStyle])

  useEffect(() => {
    const updateHeight = () => {
      setWHeight(window.innerHeight)
    }
    window.addEventListener('resize', updateHeight, false)

    const checkMenu = () => {
      const { innerWidth: width, innerHeight: height } = window
      if (width > 850) {
        appContext.setMobileMenu(false)
      }
    }

    window.addEventListener('resize', checkMenu, false)
    return () => {
      window.removeEventListener('resize', updateHeight, false)
      window.removeEventListener('resize', checkMenu, false)
    }
  }, [])

  const MobileLink = ({
    destination,
    className = '',
    children,
    bnw = true,
  }) => (
    <FancyLink
      destination={destination}
      className={`text-center w-full py-8 border-b flex justify-center text-4xl  ${
        bnw || menu
          ? 'border-black text-black hover:bg-black hover:text-white transition-colors duration-500'
          : 'border-white text-white hover:bg-white hover:text-black transition-colors duration-500'
      } ${className}`}
    >
      {children}
    </FancyLink>
  )

  // Header Style Values:
  // default, hidden, white black,
  // blur-black, blur-white
  // trans-black / transparent-black,   trans-white / transparent-white

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[99] overflow-auto hide-scrollbar flex flex-col no-select-all ${
        menu || appContext.isOpenBookMobile ? 'h-screen' : ''
      }`}
      style={{
        height: menu || appContext.isOpenBookMobile ? `${wHeight}px` : 'auto',
      }}
    >
      <motion.header
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.44,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.05,
            },
          },
          exit: {
            opacity: 0,
            transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] },
          },
        }}
        className={`sticky top-0 left-0 right-0 w-full z-2 border-b ${className}
        ${
          bnw || menu || appContext.isOpenBookMobile
            ? 'border-black bg-white'
            : 'border-white bg-black'
        }
        ${
          headerStyle.toLowerCase().includes('blur')
            ? `bg-opacity-50 backdrop-filter backdrop-blur-sm ${
                menu || appContext.isOpenBookMobile ? '' : '!bg-transparent'
              }`
            : headerStyle.toLowerCase().includes('trans') ||
              headerStyle.toLowerCase().includes('transparent')
            ? 'bg-opacity-0'
            : 'bg-opacity-100'
        }
        ${menu || appContext.isOpenBookMobile ? `!bg-opacity-100 ` : ''}
        ${
          headerStyle.toLowerCase().includes('hidden') ? '!hidden' : ''
        } transition-all duration-500`}
      >
        <Container
          className={`h-header relative pointer-events-auto flex flex-wrap max-md:flex-nowrap max-md:items-center `}
        >
          <FancyLink
            onClick={() => {
              setWHeight(window.innerHeight)
              if (appContext.isOpenBookMobile) {
                appContext.setOpenBookMobile(false)
              } else {
                //Toggle Menu
                appContext.setMobileMenu(!appContext.mobileMenu)
              }
            }}
            className={`mobile-menu-icon hidden max-md:block w-[25px] h-[25px] max-md:mr-5 ${
              bnw || menu || appContext.isOpenBookMobile ? 'black' : 'white'
            }
          ${menu || appContext.isOpenBookMobile ? 'open black' : ''} ${
              transition.fade
            }`}
          >
            <div />
            <div />
          </FancyLink>
          {/* Locavore Logo */}
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className={`relative max-md:p-0 ${transition.fade}`}
          >
            {/* Black */}
            <div
              className={`w-full h-full setflex-center transition-all duration-500 ${
                bnw || menu || appContext.isOpenBookMobile
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <Image
                src={urlFor(header[0].logo.black)
                  .width(300)
                  .format('webp')
                  .url()}
                alt={header[0].logo.black.name}
                layout="intrinsic"
                objectFit="contain"
                objectPosition={'left center'}
                priority={true}
                width={100}
                height={40}
              />
            </div>
            {/* White */}
            <div
              className={`absolute top-0 left-0 w-full h-full setflex-center transition-all duration-500 ${
                bnw || menu || appContext.isOpenBookMobile
                  ? 'opacity-0'
                  : 'opacity-100'
              } `}
            >
              <Image
                src={urlFor(header[0].logo.white)
                  .width(300)
                  .format('webp')
                  .url()}
                alt={header[0].logo.white.name}
                layout="intrinsic"
                objectFit="contain"
                priority={true}
                objectPosition={'left center'}
                width={100}
                height={40}
              />
            </div>
          </FancyLink>
          {/* Right Header Content */}
          <div
            className={`ml-auto setflex-center-row max-md:justify-end space-x-6 w-full pointer-events-none text-sm md:text-sm md:w-auto ${
              bnw || menu ? 'text-black' : 'text-white'
            } transition-colors duration-500`}
          >
            {useMediaQuery('(min-width: 850px)') && (
              <>
                <FancyLink
                  destination="/"
                  a11yText="Navigate to the nxt page"
                  className={`leading-none ${transition.fade}`}
                >
                  NXT
                </FancyLink>
                <FancyLink
                  destination="/editorial"
                  a11yText="Navigate to the editorial page"
                  className={`leading-none ${transition.fade}`}
                >
                  Editorial
                </FancyLink>
                {/* Custom Header Insert */}
                {header &&
                  header[0].headerLink &&
                  header[0].headerLink.map((item, index) => (
                    <FancyLink
                      key={index}
                      destination={item.link}
                      a11yText={item.title}
                      className={`leading-none ${transition.fade}`}
                    >
                      {item.title}
                    </FancyLink>
                  ))}
                <FancyLink
                  destination="/family"
                  a11yText="Navigate to the about page"
                  className={`leading-none ${transition.fade}`}
                >
                  Family
                </FancyLink>
              </>
            )}
            <FancyLink
              onClick={() => {
                setWHeight(window.innerHeight)
                if (appContext.mobileMenu) {
                  appContext.setMobileMenu(false)
                }
                if (window.innerWidth > 850) {
                  setOpenBookDesktop(true)
                } else {
                  appContext.setOpenBookMobile(true)
                }
              }}
              a11yText="Navigate to the about page"
              className={`font-bold leading-none ${transition.fade} ${
                appContext.isOpenBookMobile ? 'text-black' : ''
              }`}
            >
              BOOK NOW
            </FancyLink>
          </div>
        </Container>
      </motion.header>
      <PopUpDesktop
        ref={popUpRefDekstop}
        header={header[0]}
        isOpenBook={isOpenBookDesktop}
        setOpenBook={setOpenBookDesktop}
        handleClickOutside={handleClickOutsideDesktop}
      />
      {useMediaQuery('(max-width: 850px)') && (
        <PopUpMobile
          ref={popUpRefMobile}
          header={header[0]}
          isOpenBook={appContext.isOpenBookMobile}
          setOpenBook={appContext.setOpenBookMobile}
          handleClickOutside={handleClickOutsideMobile}
        />
      )}
      {/* MOBILE MENU */}
      {useMediaQuery('(max-width: 850px)') && (
        <div
          className={`z-1 w-full flex flex-col justify-between grow-1 ${
            menu
              ? 'relative opacity-1 pointer-events-auto'
              : 'opacity-0 pointer-events-none hidden'
          } ${
            bnw || menu ? 'bg-white ' : 'bg-black'
          }  transition-all duration-500`}
        >
          <MobileLink bnw={bnw} destination="/">
            NXT
          </MobileLink>
          <MobileLink bnw={bnw} destination="/editorial">
            Editorial
          </MobileLink>
          {header &&
            header[0].headerLink &&
            header[0].headerLink.map((item, index) => (
              <MobileLink key={index} bnw={bnw} destination={item.link}>
                {item.title}
              </MobileLink>
            ))}
          <MobileLink bnw={bnw} destination="/family">
            Family
          </MobileLink>
          {/* Social Media */}
          <div
            className={`w-full py-8 border-b flex justify-center space-x-4 transition-all duration-500 ${
              bnw || menu ? 'border-black' : 'border-white'
            }`}
          >
            {footerProcessed.footerLink &&
              footerProcessed.footerLink.instagram && (
                <FancyLink
                  destination={footerProcessed.footerLink.instagram.link}
                  blank={true}
                  className={`relative w-10 h-10 setflex-center ${transition.fade}`}
                >
                  <Instagram
                    fill={bnw || menu ? '#000' : '#FFF'}
                    className="w-4 h-4"
                  />
                </FancyLink>
              )}
            {footerProcessed.footerLink && footerProcessed.footerLink.facebook && (
              <FancyLink
                destination={footerProcessed.footerLink.facebook.link}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Facebook
                  fill={bnw || menu ? '#000' : '#FFF'}
                  className="w-4 h-4"
                />
              </FancyLink>
            )}
            {footerProcessed.footerLink && footerProcessed.footerLink.youtube && (
              <FancyLink
                destination={footerProcessed.footerLink.youtube.link}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Youtube
                  fill={bnw || menu ? '#000' : '#FFF'}
                  className="w-4 h-4"
                />
              </FancyLink>
            )}
            {footerProcessed.footerLink && footerProcessed.footerLink.linkedin && (
              <FancyLink
                destination={footerProcessed.footerLink.linkedin.link}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Linkedin
                  fill={bnw || menu ? '#000' : '#FFF'}
                  className="w-4 h-4"
                />
              </FancyLink>
            )}
          </div>
          {/* Ending */}
          <FancyLink
            className={`w-full h-16 flex justify-center items-center mt-auto transition-colors duration-500 relative ${
              bnw || menu
                ? 'bg-white text-black hover:bg-black hover:text-white'
                : 'bg-black text-white hover:bg-white hover:text-black'
            }`}
            onClick={() => appContext.setMobileMenu(false)}
          >
            <div
              className={`w-full h-[1px] absolute top-[-1px]  transition-colors duration-500 ${
                bnw || menu
                  ? 'bg-black hover:bg-black hover:text-white'
                  : 'bg-white hover:bg-white hover:text-black'
              }`}
            />
            Close
          </FancyLink>
        </div>
      )}
    </nav>
  )
}

const PopUpMobile = forwardRef(
  ({ header, isOpenBook, setOpenBook, handleClickOutside = () => {} }, ref) => {
    return (
      <div
        onClick={handleClickOutside}
        className={`fixed max-md:relative top-0 left-0 z-[99] w-full h-full flex justify-center items-center max-md:items-start bg-black bg-opacity-50 overflow-y-scroll hide-scrollbar py-10 max-md:p-0 ${
          isOpenBook ? 'flex opacity-100' : 'none opacity-0 pointer-events-none'
        }`}
      >
        <div
          ref={ref}
          className="w-full max-w-[600px] max-md:max-w-none min-h-0 max-md:min-h-full flex flex-col justify-between bg-white rounded-[10px] max-md:rounded-none m-auto max-md:m-0"
        >
          <div className="w-full flex flex-col">
            <div className="py-[25px] text-center border-b border-black">
              <span className="font-serif font-normal text-[16px] leading-[110%] tracking-[0.7px]">
                Choose which venue to book
              </span>
            </div>
            {header.bookNow.map((data, id) => (
              <div
                key={id}
                className="py-[20px] text-center border-b border-black"
              >
                <FancyLink
                  destination={data.link}
                  blank
                  className="text-[35px] leading-[38px] transition-all duration-500 hover:opacity-50"
                >
                  {data.name}
                </FancyLink>
              </div>
            ))}
          </div>
          <FancyLink
            onClick={() => setOpenBook(false)}
            className="relative py-[25px] text-center text-[12px] font-[500] leading-[18px] tracking-[0.6px] transition-all duration-500 hover:opacity-50"
          >
            <div className="absolute top-[-1px] left-0 w-full h-[1px] bg-black" />
            CLOSE
          </FancyLink>
        </div>
      </div>
    )
  },
)

const PopUpDesktop = forwardRef(
  ({ header, isOpenBook, setOpenBook, handleClickOutside = () => {} }, ref) => {
    return (
      <motion.div
        initial={{
          display: 'none',
          opacity: 0,
        }}
        animate={
          isOpenBook
            ? {
                display: 'flex',
                opacity: 1,
              }
            : {
                display: 'none',
                opacity: 0,
              }
        }
        transition={
          isOpenBook
            ? {
                display: {
                  duration: 0.01,
                },
                opacity: {
                  delay: 0.01,
                  duration: 0.5,
                },
              }
            : {
                opacity: {
                  duration: 0.5,
                },
                display: {
                  delay: 0.55,
                  duration: 0.01,
                },
              }
        }
        onClick={handleClickOutside}
        className="fixed max-md:relative top-0 left-0 z-[99] w-full h-full flex justify-center items-center max-md:items-start bg-black bg-opacity-50 overflow-y-scroll hide-scrollbar py-10 max-md:p-0"
      >
        <div
          ref={ref}
          className="w-full max-w-[600px] max-md:max-w-none min-h-0 max-md:min-h-full flex flex-col justify-between bg-white rounded-[10px] max-md:rounded-none m-auto max-md:m-0"
        >
          <div className="w-full flex flex-col">
            <div className="py-[25px] text-center border-b border-black">
              <span className="font-serif font-normal text-[16px] leading-[110%] tracking-[0.7px]">
                Choose which venue to book
              </span>
            </div>
            {header.bookNow.map((data, id) => (
              <div
                key={id}
                className="py-[20px] text-center border-b border-black"
              >
                <FancyLink
                  destination={data.link}
                  blank
                  className="text-[35px] leading-[38px] transition-all duration-500 hover:opacity-50"
                >
                  {data.name}
                </FancyLink>
              </div>
            ))}
          </div>
          <FancyLink
            onClick={() => setOpenBook(false)}
            className="relative py-[25px] text-center text-[12px] font-[500] leading-[18px] tracking-[0.6px] transition-all duration-500 hover:opacity-50"
          >
            <div className="absolute top-[-1px] left-0 w-full h-[1px] bg-black" />
            CLOSE
          </FancyLink>
        </div>
      </motion.div>
    )
  },
)
