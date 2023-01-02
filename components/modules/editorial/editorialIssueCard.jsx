import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import checkMonth from '@/helpers/functional/checkMonth'
import { PortableText } from '@portabletext/react'

const EditorialIssueCard = React.forwardRef(
  (
    {
      issueNo,
      title,
      date,
      totalArticles,
      descriptions,
      destination,
      className = '',
      dark,
      bgColor = '#000000',
      imageThumbnail = '',
      comingsoon = false,
      styleTitle,
      blurDataURL = '',
      alt,
    },
    ref,
  ) => {
    //check title word count
    const maxLetter = 8
    const [titleS, setSize] = useState(false)
    useEffect(() => {
      const splitTitle = title.split(' ')

      splitTitle.forEach((word) => {
        setSize(word.length > maxLetter)
      })
    }, [])

    const serializers = {
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
        add_ann: (props) =>
          props.value?.link ? (
            <FancyLink
              destination={props.value.link}
              blank={props.value.target_blank}
              style={{
                color: props.value?.textColor
                  ? props.value?.textColor.hex
                  : 'currentColor',
                backgroundColor: props.value?.bgColor
                  ? props.value?.bgColor
                  : 'transparent',
                fontSize: props.value?.fontSize
                  ? props.value?.fontSize
                  : 'initial',
              }}
              className={
                props.value?.font
                  ? props.value?.font === 'display'
                    ? 'font-default'
                    : props.value.font
                  : 'font-default'
              }
            >
              {props.children}
            </FancyLink>
          ) : (
            <span
              style={{
                color: props.value?.textColor
                  ? props.value?.textColor.hex
                  : 'currentColor',
                backgroundColor: props.value?.bgColor
                  ? props.value?.bgColor
                  : 'transparent',
                fontSize: props.value?.fontSize
                  ? props.value?.fontSize
                  : 'initial',
              }}
              className={
                props.value?.font
                  ? props.value?.font === 'display'
                    ? 'font-default'
                    : props.value.font
                  : 'font-default'
              }
            >
              {props.children}
            </span>
          ),
        largerSize: (props) => (
          <span style={{ fontSize: '1.5em' }}>{props.children}</span>
        ),
        sub: (props) => <sub>{props.children}</sub>,
        sup: (props) => <sup>{props.children}</sup>,
      },
    }

    return (
      <FancyLink
        destination={destination}
        className={`group relative select-none w-full rounded-2xl p-5 pt-0 max-md:p-4 max-md:pt-0 flex flex-col transition-[shadow transform] duration-300 ${
          comingsoon
            ? `bg-lighterGray cursor-default ${
                useMediaQuery('(max-width: 850px)') ? 'max-md:pt-4' : ''
              }`
            : 'bg-lightGray even:bg-lighterGray  hover:shadow-lg  odd:hover:-rotate-1 even:hover:rotate-1'
        }  ${className}`}
        ref={ref}
      >
        {/* TOP HEADER */}
        {!(useMediaQuery('(max-width: 850px)') && comingsoon) && (
          <div className="text-center w-full py-3 h-[50px] setflex-center">
            <span>{comingsoon ? <>COMING SOON</> : <>ISSUE {issueNo}</>}</span>
          </div>
        )}

        <div className="relative w-full rounded-2xl flex flex-col justify-between overflow-hidden">
          <div
            className={`absolute w-full h-full top-0 left-0 rounded-2xl  ${
              dark === 'white-text' ? 'bg-black' : 'bg-white'
            }`}
          >
            {imageThumbnail ? (
              <>
                {/* Image */}
                <div
                  className={`imageCover w-full h-full absolute top-0 left-0 z-10 transition-all duration-300  ${
                    dark === 'white-text'
                      ? 'bg-black  opacity-30'
                      : 'bg-white opacity-30'
                  } ${!comingsoon ? `group-hover:opacity-50` : ''}`}
                />
                <Image
                  src={imageThumbnail}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder={`${imageThumbnail ? 'blur' : 'empty'}`}
                  blurDataURL={blurDataURL}
                />
              </>
            ) : (
              <>
                {/* Plain BG */}
                <div
                  className="w-full h-full absolute top-0"
                  style={{ background: bgColor }}
                />
              </>
            )}
          </div>
          <div
            className={`relative z-10 w-full  flex flex-col justify-between p-8 max-md:p-5 ${
              dark === 'white-text' ? 'text-white ' : 'text-black'
            }
            ${
              comingsoon
                ? `h-64 max-md:h-60`
                : `min-h-[24rem] max-sm:aspect-[4/5]`
            } `}
          >
            {/* MOBILE ARTICLE DATE */}
            {useMediaQuery('(max-width: 850px)') && !comingsoon && (
              <div className="w-full flex justify-between text-base max-sm:text-sm font-bold text-center uppercase max-md:h-24 mb-auto">
                <span>
                  {checkMonth(new Date(date).getMonth())}{' '}
                  {new Date(date).getFullYear()}
                </span>
                {!comingsoon && <span>{totalArticles} ARTICLES</span>}
              </div>
            )}

            {useMediaQuery('(max-width: 850px)') && comingsoon && (
              <div className="w-full text-base max-sm:text-sm font-bold text-center uppercase">
                COMING SOON
              </div>
            )}

            {/* TITLE */}
            <h2
              className={`editor-title ${titleS ? 'smaller' : ''} ${
                comingsoon ? 'mb-auto ' : 'mb-10'
              } max-md:mb-5 max-md:w-full`}
              style={styleTitle}
            >
              {title}
            </h2>

            {/* COMING SOON DATE */}
            {useMediaQuery('(max-width: 850px)') && comingsoon && (
              <div className="w-full text-base max-sm:text-sm font-bold text-center uppercase">
                {checkMonth(new Date(date).getMonth())}{' '}
                {new Date(date).getFullYear()}
              </div>
            )}

            {/* DESCRIPTION */}
            {!(useMediaQuery('(max-width: 850px)') && comingsoon) && (
              <div className="w-full mt-auto flex justify-between items-end max-md:justify-center max-md:h-24">
                <div className="flex flex-col max-md:hidden mr-8 grow-1">
                  {/* Description */}
                  {!comingsoon && (
                    <div className="w-full">
                      <PortableText
                        value={descriptions}
                        components={serializers}
                      />
                    </div>
                  )}
                  <div
                    className={`flex space-x-16 border-t w-full pt-6 mt-6 text-xs ${
                      dark === 'white-text' ? 'border-white' : 'border-black'
                    }`}
                  >
                    <span>
                      {checkMonth(new Date(date).getMonth())}{' '}
                      {new Date(date).getFullYear()}
                    </span>
                    {!comingsoon && <span>{totalArticles} ARTICLES</span>}
                  </div>
                </div>
                <div className="max-md:w-auto shrink-0">
                  <div
                    className={`px-10 py-7 border rounded-[100%] max-md:px-6 max-md:py-5 max-md:mb-4 transition-all duration-300 ${
                      !comingsoon
                        ? `${
                            dark === 'white-text'
                              ? 'border-white text-white group-hover:text-black group-hover:bg-white'
                              : 'border-black text-black group-hover:text-white group-hover:bg-black'
                          }`
                        : ''
                    }`}
                  >
                    <span
                      className={` max-sm:text-sm max-md:text-base font-bold m-0 leading-none`}
                    >
                      {comingsoon ? <>COMING SOON</> : <> READ ISSUE</>}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </FancyLink>
    )
  },
)
export default EditorialIssueCard
