import { forwardRef, Fragment } from 'react'
import Container from '../container'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import VideoComponent from './videoComponent'

const GalleryComponent = ({ gallery, blog }) => {
  return (
    <Container className="max-md:px-0 mt-12">
      <div className={`w-full flex flex-col ${blog && 'space-y-12'}`}>
        {gallery.map((item, id) =>
          item._type === 'singleImage' ? (
            <Fragment key={id}>
              {/* Singe Image */}
              <div className="w-full setflex-center" key={id}>
                <div
                  className={`relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1 ${
                    !blog && 'mt-3'
                  }`}
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
                    blurDataURL={urlFor(item.image)
                      .blur(2)
                      .format('webp')
                      .width(500)
                      .url()}
                  />
                </div>
                {item.description && (
                  <div className="flex items-end max-md:items-start mt-3 mb-6 max-md:px-6">
                    <div className="w-10 h-5 border-culture border-b-2 border-l-2 mr-4" />
                    <span className="w-full font-serif text-sm font-bold">
                      {item.description}
                    </span>
                  </div>
                )}
              </div>
            </Fragment>
          ) : item._type === 'twoImage' ? (
            <Fragment key={id}>
              {/* Two Image */}
              <div
                className={`w-full h-30rem max-md:h-56 flex space-x-3 max-md:space-x-2  ${
                  !blog && 'mt-3'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={urlFor(item.firstImage).width(1500).url()}
                    alt={item.firstImage.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={urlFor(item.secondImage).width(1500).url()}
                    alt={item.secondImage.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </Fragment>
          ) : (
            item._type === 'video' && (
              <div
                className={`w-full max-w-800px mx-auto ${!blog && 'mt-3'}`}
                key={id}
              >
                <VideoComponent
                  video={item}
                />
              </div>
            )
          ),
        )}
      </div>
    </Container>
  )
}

export default GalleryComponent
