import React from 'react'
import Container from '../container'
import FancyLink from '../../utils/fancyLink'
import PillButton from '../pillButton'
import Image from 'next/image'
import { useAppContext } from 'context/state'

export default function OpeningArticle() {
  const appContext = useAppContext()
  return (
    <section className="pt-10 pb-12 w-full h-full">
      <Container className="space-y-10 max-md:px-6">
        {/* Title */}
        <h1 className="m-0 font-sans font-normal">
          In Search of Regional Specialties Articles
        </h1>
        <div className="w-full flex max-md:flex-col items-center max-md:items-start justify-between">
          {/* Category */}
          <div className="w-auto space-x-4 flex ">
            <PillButton
              destination="/editorial/search"
              onClick={() => {
                appContext.setCategory('Food')
              }}
              className="text-xs max-md:py-1 max-md:px-2 opacity-100 border-black"
            >
              Food
            </PillButton>
            <PillButton
              destination="/editorial/search"
              onClick={() => {
                appContext.setCategory('Culture')
              }}
              className="text-xs max-md:py-1 max-md:px-2 opacity-100 border-black"
            >
              Culture
            </PillButton>
          </div>
          {/* Social Media */}
          <div className="w-full max-md:mt-7 flex max-md:flex-row-reverse justify-between">
            <span className="ml-4 max-md:m-0 font-serif italic font-bold">
              March 2021
            </span>
            <div className="flex space-x-7">
              <div className="relative w-16px h-16px">
                <Image
                  src={`/facebook.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-16px h-16px">
                <Image
                  src={`/twitter.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-16px h-16px">
                <Image
                  src={`/mail.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          {/* Description */}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </Container>
    </section>
  )
}
