import { useEffect, useState } from 'react'
import Arrow from '../utils/arrow'
import Container from './container'
import Image from 'next/image'

const Footer = ({ className }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date())
    }, 5000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])
  return (
    <footer
      className={`w-full h-auto max-md:h-full flex bg-offBlack text-white px-0 py-14 ${className}`}
    >
      <Container className="flex max-md:flex-col max-md:px-6">
        <div className="h-full max-md:space-y-10 w-full max-md:w-full flex flex-col">
          <div className="w-full ">
            <span className="text-sm">
              UBUD{' '}
              {time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
          <form className="flex w-full mt-10 max-w-sm flex-col justify-between">
            <label className="text-xl font-normal">
              Sign up for
              <span className="font-serif italic"> insights </span>
              in your inbox
            </label>
            <div className="relative mt-5 w-full border-white pb-2.5 border-b">
              <input
                className="w-full text-xs tracking-wide placeholder-white  outline-none bg-transparent"
                type="email"
                placeholder="EMAIL"
              />
              <Arrow
                position="right"
                className="absolute right-0 top-2"
                fill="white"
              />
            </div>
          </form>
        </div>
        <div className="w-full h-full max-md:mt-10 max-md:space-y-10 flex flex-col justify-between">
          <div className="w-auto h-full space-x-6 flex justify-end max-md:justify-start">
            <div className="relative w-16px h-16px">
              <Image
                src={`/instagram-white.png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="relative w-16px h-16px">
              <Image
                src={`/facebook-white.png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="relative w-16px h-16px">
              <Image
                src={`/youtube-white.png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="relative w-16px h-16px">
              <Image
                src={`/linkedin-white.png`}
                alt={'Locavore'}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-end max-md:justify-start items-end max-md:items-start">
            <span className="text-sm">
              © 2021 Locavore. All Rights Reserved.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
