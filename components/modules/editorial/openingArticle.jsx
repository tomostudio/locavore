import React from 'react'
import Container from '../container'
import FancyLink from '../../utils/fancyLink'
import PillButton from '../pillButton'
import Image from 'next/image'
import { useAppContext } from 'context/state'
import checkMonth from '@/helpers/functional/checkMonth'
import { toPlainText } from '@/helpers/functional/toPlainText'

export default function OpeningArticle({ article, baseUrl }) {
  const appContext = useAppContext()
  return (
    <section className="pt-10 pb-12 w-full h-full">
      <Container className="space-y-10 max-md:px-6">
        {/* Title */}
        <h1 className="m-0 font-sans font-normal">{article.title}</h1>
        <div className="w-full flex max-md:flex-col items-center max-md:items-start justify-between">
          {/* Category */}
          <div className="w-auto space-x-4 flex ">
            <PillButton
              destination="/editorial/search"
              onClick={() => {
                appContext.setCategory(article.category.title)
              }}
              className="text-xs max-md:py-1 max-md:px-2 opacity-100 border-black"
            >
              {article.category.title}
            </PillButton>
          </div>
          {/* Social Media */}
          <div className="w-full max-md:mt-7 flex max-md:flex-row-reverse justify-between">
            <span className="ml-4 max-md:m-0 font-serif italic font-bold">
              {checkMonth(new Date(article.date).getMonth())}{' '}
              {new Date(article.date).getFullYear()}
            </span>
            <div className="flex space-x-7">
              <FancyLink
                blank={true}
                destination={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`}
                className="relative w-16px h-16px"
              >
                <Image
                  src={`/facebook.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </FancyLink>
              <FancyLink
                blank={true}
                destination={`https://twitter.com/share?url=${baseUrl}`}
                className="relative w-16px h-16px"
              >
                <Image
                  src={`/twitter.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </FancyLink>
              {/* <div className="relative w-16px h-16px">
                <Image
                  src={`/mail.png`}
                  alt={'Locavore'}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          {/* Description */}
          <p>{toPlainText(article.description)}</p>
        </div>
      </Container>
    </section>
  )
}
