import { forwardRef, Fragment } from 'react'
import Container from '../container'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import VideoComponent from './videoComponent'
import Caption from './caption'

const GalleryComponent = ({ gallery, article }) => {
  return (
    <div className="w-full h-auto px-8 max-md:px-2 setflex-center mt-12">
      <div className={`w-full max-w-screen-xl flex flex-col`}>
        <div className="w-full space-y-3">
          {gallery.gallery ? (
            gallery.gallery.map((item, id) =>
              item._type === 'singleImage' ? (
                <Fragment key={id}>
                  {/* Singe Image */}
                  <div className="w-full setflex-center" key={id}>
                    <div
                      className={`relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1`}
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      <Image
                        src={urlFor(item.image).width(1500).url()}
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
                    </div>
                  </div>
                </Fragment>
              ) : item._type === 'twoImage' ? (
                <Fragment key={id}>
                  {/* Two Image */}
                  <div
                    className={`w-full h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2`}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      <Image
                        src={urlFor(item.firstImage).width(1500).url()}
                        alt={item.firstImage.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={urlFor(item.firstImage)
                          .blur(2)
                          .format('webp')
                          .width(500)
                          .url()}
                      />
                    </div>
                    <div
                      className="relative w-full h-full"
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      <Image
                        src={urlFor(item.secondImage).width(1500).url()}
                        alt={item.secondImage.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={urlFor(item.secondImage)
                          .blur(2)
                          .format('webp')
                          .width(500)
                          .url()}
                      />
                    </div>
                  </div>
                </Fragment>
              ) : (
                item._type === 'video' && (
                  <div className={`w-full max-w-800px mx-auto`} key={id}>
                    <VideoComponent video={item} />
                  </div>
                )
              ),
            )
          ) : (
            <></>
          )}
        </div>
        {gallery.description && (
          <div className="w-content mx-auto max-md:w-full max-md:px-4">
            <Caption caption={gallery.description} article={article} />
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryComponent
