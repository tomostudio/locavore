import React from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import checkMonth from '@/helpers/functional/checkMonth'

export default function EditorialIssueCard({
  issueNo,
  title,
  date,
  totalArticles,
  descriptions,
  destination,
  dark = true,
  bgColor = '#000000',
  imageThumbnail = '',
  styleTitle,
}) {
  return (
    <FancyLink
      destination={destination}
      className="group relative w-full h-30rem bg-lightGray even:bg-lighterGray rounded-2xl px-5 pb-5 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
    >
      <div className="text-center w-full py-3">
        <span>ISSUE {issueNo}</span>
      </div>
      <div className="relative w-full h-full rounded-2xl">
        <div
          className={`absolute w-full h-full top-0 left-0 rounded-2xl overflow-hidden ${
            dark ? 'bg-black' : 'bg-white'
          }`}
        >
          {imageThumbnail ? (
            <>
              {/* Image */}
              <div
                className={`imageCover w-full h-full absolute top-0 left-0 z-10 transition-all duration-300  ${
                  dark ? 'bg-black  opacity-25' : 'bg-white  opacity-25'
                } group-hover:opacity-40`}
              />
              <Image
                src={imageThumbnail}
                alt={'Locavore'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
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
          className={`relative z-10 w-full h-full flex flex-col justify-between p-8 ${
            dark ? 'text-white ' : 'text-black'
          }`}
        >
          {useMediaQuery('(max-width: 768px)') && (
            <div className="w-full flex justify-between text-xs">
            <span>{checkMonth(new Date(date).getMonth())} {new Date(date).getFullYear()}</span>
              <span>{totalArticles} ARTICLES</span>
            </div>
          )}
          <h1 className="font-sans font-normal break-all" style={styleTitle}>
            {title}
          </h1>
          <div className="w-full flex justify-between max-md:justify-center">
            {!useMediaQuery('(max-width: 768px)') && (
              <div className="w-full flex flex-col max-md:hidden">
                <div className="w-96">{descriptions}</div>
                <div
                  className={`flex space-x-16 border-t w-full pt-6 mt-6 text-xs ${
                    dark ? 'border-white' : 'border-black'
                  }`}
                >
                  <span>{checkMonth(new Date(date).getMonth())} {new Date(date).getFullYear()}</span>
                  <span>15 ARTICLES</span>
                </div>
              </div>
            )}
            <div className="flex w-96 max-md:w-auto items-end justify-end">
              <div
                className={`px-10 py-7 border  rounded-50%  transition-all duration-300 ${
                  dark
                    ? 'border-white text-white group-hover:text-black group-hover:bg-white'
                    : 'border-black text-black group-hover:text-white group-hover:bg-black'
                }`}
              >
                READ ISSUE
              </div>
            </div>
          </div>
        </div>
      </div>
    </FancyLink>
  )
}
