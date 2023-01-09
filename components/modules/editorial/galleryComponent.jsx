import { forwardRef, Fragment } from 'react';
import Container from '../container';
import Image from 'next/image';
import urlFor from '@/helpers/sanity/urlFor';
import VideoComponent from './videoComponent';
import Caption from './caption';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/helpers/sanity/client';
import { singleIURB, columnIURB } from '@/components/utils/iurb';

const GalleryComponent = ({ gallery, color }) => {
  return (
    <Container className='w-full h-auto setflex-center mt-12'>
      <div className={`w-full max-w-screen-xl flex flex-col`}>
        <div className='w-full space-y-3'>
          {gallery.gallery ? (
            gallery.gallery.map((item, id) =>
              item._type === 'singleImage' ? (
                <Fragment key={id}>
                  {/* Singe Image */}
                  <div className='w-full flex-col'>
                    <div className='w-full setflex-center' key={id}>
                      <div
                        className={`relative w-full block`}
                        style={{
                          backgroundColor: `rgba(208,208,208, 1)`,
                          aspectRatio: `${
                            item.image ? useNextSanityImage(client, item.image).width : '16'
                          }/${item.image ? useNextSanityImage(client, item.image).height : '9'}`,
                        }}
                      >
                        {item.image && item.image.asset ? (
                          <Image
                            {...useNextSanityImage(client, item.image, {
                              imageBuilder: singleIURB,
                            })}
                            alt={item.image.name}
                            style={{ width: '100%', height: 'auto' }}
                            placeholder='blur'
                            blurDataURL={urlFor(item.image)
                              .blur(4)
                              .format('webp')
                              .width(250)
                              .quality(50)
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
                  <div className={`w-full flex space-x-3 max-md:space-x-2`}>
                    <div className='flex flex-col w-full'>
                      <div
                        className='relative w-full block'
                        style={{
                          backgroundColor: `rgba(208,208,208, 1)`,
                        }}
                      >
                        {item.firstImage.image &&
                        item.firstImage.image.asset ? (
                          <Image
                            {...useNextSanityImage(
                              client,
                              item.firstImage.image,
                              {
                                imageBuilder: columnIURB,
                              }
                            )}
                            style={{ width: '100%', height: 'auto' }}
                            alt={item.firstImage.image.name}
                            placeholder='blur'
                            blurDataURL={urlFor(item.firstImage.image)
                              .blur(4)
                              .format('webp')
                              .width(250)
                              .quality(50)
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
                    <div className='flex flex-col w-full'>
                      <div
                        className='relative w-full block'
                        style={{
                          backgroundColor: `rgba(208,208,208, 1)`,
                        }}
                      >
                        {item.secondImage.image &&
                        item.secondImage.image.asset ? (
                          <Image
                            {...useNextSanityImage(
                              client,
                              item.secondImage.image,
                              {
                                imageBuilder: columnIURB,
                              }
                            )}
                            style={{ width: '100%', height: 'auto' }}
                            alt={item.secondImage.image.name}
                            placeholder='blur'
                            blurDataURL={urlFor(item.secondImage.image)
                              .blur(4)
                              .format('webp')
                              .width(250)
                              .quality(50)
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
              )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  );
};

export default GalleryComponent;
