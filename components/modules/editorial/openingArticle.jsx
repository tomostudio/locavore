import React from 'react'
import Container from '../container'
import FancyLink from '../../utils/fancyLink'
import Arrow from '../../utils/arrow'
import PillButton from '../pillButton'
import Image from 'next/image'
import { useAppContext } from 'context/state'
import checkMonth from '@/helpers/functional/checkMonth'
import { PortableText } from '@portabletext/react'
import { Facebook, Twitter, Mail, Link } from '@/helpers/preset/svg'
import { transition } from '@/helpers/preset/tailwind'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@/helpers/functional/checkMedia';

export default function OpeningArticle({ general, article, baseUrl }) {
  const appContext = useAppContext()
  const router = useRouter()

  const serializers = {
    // hardBreak: (props) => <br />,
    block: {
      normal: ({ children }) =>
        children[0] === '' ? <br /> : <p>{children}</p>,
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      h5: ({ children }) => <h5>{children}</h5>,
      center: ({ children }) => <p align="center">{children}</p>,
      left: ({ children }) => <p align="left">{children}</p>,
      right: ({ children }) => <p align="right">{children}</p>,
    },
    list: {
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    types: {
      code: (props) => (
        <div dangerouslySetInnerHTML={{ __html: props.value.code }} />
      ),
    },
    marks: {
      link: (props) => (
        <FancyLink destination={props.value.url} blank={true}>
          {props.children}
        </FancyLink>
      ),
      changeColor: (props) => (
        <span style={{ color: props.value.color.hex }}>{props.children}</span>
      ),
      backgroundColor: (props) => (
        <span style={{ backgroundColor: props.value.color.hex }}>
          {props.children}
        </span>
      ),
      largerSize: (props) => (
        <span style={{ fontSize: '1.5em' }}>{props.children}</span>
      ),
      sub: (props) => <sub>{props.children}</sub>,
      sup: (props) => <sup>{props.children}</sup>,
      fontSize: (props) => (
        <span style={{ fontSize: props.value.size }}>{props.children}</span>
      ),
      font: (props) => (
        <span
          className={
            props.value.type === 'display' ? 'font-default' : props.value.type
          }
        >
          {props.children}
        </span>
      ),
    },
  }

  const copy = () => {
    const el = document.createElement('input')
    el.value = baseUrl
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  const handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {
      navigator.share({
        url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`,
      })
    } else {
      console.log('Sorry! Your browser does not support Web Share API')
    }
  }

  return (
    <section className="pt-10 w-full h-full">
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
            {useMediaQuery('(max-width: 850px)') ? (
              <FancyLink
                onClick={handleShareButton}
                className={`relative h-4 ${transition.fade}`}
              >
                Share
                <Arrow position="right" className="inline ml-2" />
              </FancyLink>
            ) : (
              <div className="flex space-x-7">
                <FancyLink
                  blank={true}
                  destination={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`}
                  className={`relative w-4 h-4 ${transition.fade}`}
                >
                  <Facebook fill={'#000'} className={'w-full h-full'} />
                </FancyLink>
                <FancyLink
                  blank={true}
                  destination={`https://twitter.com/share?url=${baseUrl}`}
                  className={`relative w-4 h-4 ${transition.fade}`}
                >
                  <Twitter fill={'#000'} className={'w-full h-full'} />
                </FancyLink>
                <FancyLink
                  destination={`mailto:?subject=${general.share.title}&body=${general.share.message} %0D%0A${baseUrl}`}
                  className={`relative w-4 h-4 ${transition.fade}`}
                >
                  <Mail fill={'#000'} className={'w-full h-full'} />
                </FancyLink>
                <FancyLink
                  onClick={copy}
                  className={`relative w-4 h-4 ${transition.fade}`}
                >
                  <Link fill={'#000'} className={'w-full h-full'} />
                </FancyLink>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-full">
          {/* Description */}
          <div className="max-w-800px flex flex-col">
            <PortableText
              value={article.description}
              components={serializers}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
