import { forwardRef, Fragment } from 'react'
import Container from '../container'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import VideoComponent from './videoComponent'
import Caption from './caption'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/helpers/sanity/client'

const GalleryComponent = ({ gallery, color }) => {
  return (
    <Container className="w-full h-auto setflex-center mt-12">
      <div className={`w-full max-w-screen-xl flex flex-col`}>
        <div className="w-full space-y-3">
          {gallery.gallery ? (
            gallery.gallery.map((item, id) =>
              item._type === 'singleImage' ? (
                <Fragment key={id}>
                  {/* Singe Image */}
                  <div className="w-full flex-col">
                    <div className="w-full setflex-center" key={id}>
                      <div
                        className={`relative w-full h-full`}
                        style={{
                          backgroundColor: `rgba(208,208,208, 1)`,
                          aspectRatio: `${
                            item.image ? useNextSanityImage(client, item.image).width : '16'
                          }/${item.image ? useNextSanityImage(client, item.image).height : '9'}`,
                        }}
                      >
                        {item.image && item.image.asset ? (
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.image.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            placeholder="blur"
                            blurDataURL={urlFor(item.image)
                              .blur(2)
                              .format('webp')
                              .width(500)
                              .url()}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {item.caption && (
                      <div
                        className={`${
                          item.option ? 'w-content max-md:w-full' : 'w-full'
                        } mx-auto max-md:px-4`}
                      >
                        <Caption caption={item.caption} color={color} />
                      </div>
                    )}
                  </div>
                </Fragment>
              ) : item._type === 'twoImage' ? (
                <Fragment key={id}>
                  {/* Two Image */}
                  <div
                    className={`w-full h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2`}
                  >
                    <div className="flex flex-col w-full">
                      <div
                        className="relative w-full h-full"
                        style={{
                          backgroundColor: `rgba(208,208,208, 1)`,
                        }}
                      >
                        {item.firstImage.image &&
                        item.firstImage.image.asset ? (
                          <Image
                            src={urlFor(item.firstImage.image)
                              .width(1500)
                              .url()}
                            alt={item.firstImage.image.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            placeholder="blur"
                            blurDataURL={urlFor(item.firstImage.image)
                              .blur(2)
                              .format('webp')
                              .width(500)
                              .url()}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      {item.firstImage.caption && (
                        <div
                          className={`${
                            item.option ? 'w-content max-md:w-full' : 'w-full'
                          } mx-auto max-md:px-4`}
                        >
                          <Caption
                            caption={item.firstImage.caption}
                            color={color}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <div
                        className="relative w-full h-full"
                        style={{
                          backgroundColor: `rgba(208,208,208, 1)`,
                        }}
                      >
                        {item.secondImage.image &&
                        item.secondImage.image.asset ? (
                          <Image
                            src={urlFor(item.secondImage.image)
                              .width(1500)
                              .url()}
                            alt={item.secondImage.image.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            placeholder="blur"
                            blurDataURL={urlFor(item.secondImage.image)
                              .blur(2)
                              .format('webp')
                              .width(500)
                              .url()}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      {item.secondImage.caption && (
                        <div
                          className={`${
                            item.option ? 'w-content max-md:w-full' : 'w-full'
                          } mx-auto max-md:px-4`}
                        >
                          <Caption
                            caption={item.secondImage.caption}
                            color={color}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Fragment>
              ) : (
                item._type === 'video' && (
                  <VideoComponent video={item} color={color} gallery={true} />
                )
              ),
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  )
}

export default GalleryComponent
