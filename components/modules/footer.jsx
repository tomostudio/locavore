import Arrow from '../utils/arrow'
import Container from './container'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="w-full h-52 flex bg-black text-white">
      <Container className="flex my-8">
        <div className="w-full h-full">
          <div className="h-full w-80 flex flex-col">
            <div className="w-full h-full">
              <span className="text-sm">UBUD 15:46</span>
            </div>
            <div className="w-full h-full">
              <form className="flex w-full h-full flex-col justify-between">
                <label className="text-xl font-normal">
                  Sign up for
                  <span className="font-subtitle italic"> insights </span>
                  in your inbox
                </label>
                <div className="relative mt-5 w-full">
                  <input
                    className="w-full text-xs pb-4 tracking-wide placeholder-white border-white border-b outline-none bg-transparent"
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
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-auto h-full space-x-6 flex justify-end">
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
          <div className="w-full h-full space-x-6 flex justify-end items-end">
            <span className="text-sm">
              © 2021 Locavore. All Rights Reserved.
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer
