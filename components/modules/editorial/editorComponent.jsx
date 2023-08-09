import { PortableText } from '@portabletext/react'
import VideoComponent from '@/components/modules/editorial/videoComponent'
import { Quote } from '@/helpers/preset/svg'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import Caption from '@/components/modules/editorial/caption'
import FancyLink from '@/components/utils/fancyLink'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/helpers/sanity/client'
import { singleIURB, columnIURB } from '@/components/utils/iurb'

const EditorComponent = ({ data, color, fontColor = '', textAlign = '' }) => {
  return (
    <div
      className={`editor-styling blog padding-none ${fontColor} ${textAlign}`}
    >
      <PortableText
        value={data}
        components={{
          block: {
            normal: ({ children }) =>
              children[0] === '' ? <br /> : <p>{children}</p>,
            h1: ({ children }) => <h1 align="left">{children}</h1>,
            h2: ({ children }) => <h2 align="left">{children}</h2>,
            h3: ({ children }) => <h3 align="left">{children}</h3>,
            h4: ({ children }) => <h4 align="left">{children}</h4>,
            h5: ({ children }) => <h5 align="left">{children}</h5>,
            h1Center: ({ children }) => <h1 align="center">{children}</h1>,
            h2Center: ({ children }) => <h2 align="center">{children}</h2>,
            h3Center: ({ children }) => <h3 align="center">{children}</h3>,
            h4Center: ({ children }) => <h4 align="center">{children}</h4>,
            h5Center: ({ children }) => <h5 align="center">{children}</h5>,
            center: ({ children }) => <p align="center">{children}</p>,
            right: ({ children }) => <p align="right">{children}</p>,
            left: ({ children }) => <p align="left">{children}</p>,
          },
          list: {
            number: ({ children }) => <ol>{children}</ol>,
          },
          types: {
            video: (props) => (
              <VideoComponent video={props.value} color={color} />
            ),
            lineSpacer: () => (
              <div className="line-spacer h-40 setflex-center w-full">
                <hr
                  className="border h-full w-px"
                  style={{
                    borderColor: color,
                  }}
                />
              </div>
            ),
            horizontallineSpacer: () => (
              <div className="horizontal-line-spacer h-px w-full">
                <hr
                  className="border h-full w-full"
                  style={{
                    borderColor: color,
                  }}
                />
              </div>
            ),
            code: (props) => (
              <div
                className="code"
                dangerouslySetInnerHTML={{ __html: props.value.code }}
              />
            ),
            quote: (props) => (
              <div className="quote flex flex-col">
                {props.value.option && (
                  <div className="relative h-8 w-8 mb-3">
                    <Quote className="w-full h-full" fill={color} />
                  </div>
                )}
                <PortableText
                  value={props.value.content}
                  components={{
                    block: {
                      normal: ({ children }) =>
                        children[0] === '' ? (
                          <br />
                        ) : (
                          <p
                            className={`font-sans font-bold ${
                              props.value.option
                                ? 'text-3xl max-md:text-2xl'
                                : ''
                            }`}
                          >
                            {children}
                          </p>
                        ),
                      h1: ({ children }) => (
                        <h1 className="font-sans font-bold">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="font-sans font-bold">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="font-sans font-bold">{children}</h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="font-sans font-bold">{children}</h4>
                      ),
                      h5: ({ children }) => (
                        <h5 className="font-sans font-bold">{children}</h5>
                      ),
                      center: ({ children }) => (
                        <p className="font-sans font-bold" align="center">
                          {children}
                        </p>
                      ),
                      left: ({ children }) => (
                        <p className="font-sans font-bold" align="left">
                          {children}
                        </p>
                      ),
                      right: ({ children }) => (
                        <p className="font-sans font-bold" align="right">
                          {children}
                        </p>
                      ),
                    },
                    list: {
                      number: ({ children }) => (
                        <ol
                          className={`list-decimal font-sans font-bold ${
                            props.value.option ? 'text-3xl max-md:text-2xl' : ''
                          }`}
                        >
                          {children}
                        </ol>
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
                        <span style={{ fontSize: '1.5em' }}>
                          {props.children}
                        </span>
                      ),
                      sub: (props) => <sub>{props.children}</sub>,
                      sup: (props) => <sup>{props.children}</sup>,
                    },
                  }}
                />
              </div>
            ),
            img: (props) => (
              <div className={`image ${!props.value.option ? '' : '!px-0'}`}>
                <div
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: `rgba(208,208,208, 1)`,
                  }}
                >
                  {props.value.image && props.value.image.asset ? (
                    <Image
                      {...useNextSanityImage(client, props.value.image, {
                        imageBuilder: singleIURB,
                      })}
                      style={{ width: '100%', height: 'auto' }}
                      alt={props.value.image.name}
                      placeholder="blur"
                      blurDataURL={urlFor(props.value.image)
                        .blur(2)
                        .format('webp')
                        .saturation(-100)
                        .width(100)
                        .url()}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                {props.value.name && (
                  <Caption
                    option={props.value.option}
                    caption={props.value.name}
                    color={color}
                  />
                )}
              </div>
            ),
            smallImage: (props) => (
              <div className={`image !my-10`}>
                <div className="relative w-full max-w-[500px] mx-auto aspect-[5/2] overflow-hidden">
                  {props.value.image && props.value.image.asset ? (
                    <Image
                      {...useNextSanityImage(client, props.value.image, {
                        imageBuilder: singleIURB,
                      })}
                      style={{ width: '100%', height: 'auto' }}
                      alt={props.value.image.name}
                      placeholder="blur"
                      blurDataURL={urlFor(props.value.image)
                        .blur(2)
                        .format('webp')
                        .saturation(-100)
                        .width(100)
                        .url()}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ),
            columnBlock: (props) => (
              <div
                className={`column space-y-6 md:space-y-0 ${
                  !props.value.padding ? '' : '!px-0'
                }`}
              >
                <div className="md:pr-4">
                  {props.value.left.columnLeft === 'block' ? (
                    <div className="w-full h-full ">
                      <PortableText
                        value={props.value.left.blockLeft}
                        components={{
                          block: {
                            normal: ({ children }) =>
                              children[0] === '' ? (
                                <br />
                              ) : (
                                <p align="center">{children}</p>
                              ),
                            h1: ({ children }) => <h1>{children}</h1>,
                            h2: ({ children }) => <h2>{children}</h2>,
                            h3: ({ children }) => <h3>{children}</h3>,
                            h4: ({ children }) => <h4>{children}</h4>,
                            h5: ({ children }) => <h5>{children}</h5>,
                            center: ({ children }) => (
                              <p align="center">{children}</p>
                            ),
                            left: ({ children }) => (
                              <p align="left">{children}</p>
                            ),
                            right: ({ children }) => (
                              <p align="right">{children}</p>
                            ),
                          },
                          list: {
                            number: ({ children }) => (
                              <ol className="list-decimal">{children}</ol>
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
                              <span style={{ fontSize: '1.5em' }}>
                                {props.children}
                              </span>
                            ),
                            sub: (props) => <sub>{props.children}</sub>,
                            sup: (props) => <sup>{props.children}</sup>,
                          },
                        }}
                      />
                    </div>
                  ) : props.value.left.columnLeft === 'image' ? (
                    <div
                      className="relative w-full rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      {props.value.left.imageLeft &&
                      props.value.left.imageLeft.asset ? (
                        <Image
                          {...useNextSanityImage(
                            client,
                            props.value.left.imageLeft,
                            {
                              imageBuilder: columnIURB,
                            },
                          )}
                          style={{ width: '100%', height: 'auto' }}
                          alt={props.value.left.imageLeft.name}
                          placeholder="blur"
                          blurDataURL={urlFor(props.value.left.imageLeft)
                            .blur(2)
                            .format('webp')
                            .saturation(-100)
                            .width(100)
                            .url()}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="md:pl-4">
                  {props.value.right.columnRight === 'block' ? (
                    <div className="w-full h-full">
                      <PortableText
                        value={props.value.right.blockRight}
                        components={{
                          block: {
                            normal: ({ children }) =>
                              children[0] === '' ? (
                                <br />
                              ) : (
                                <p align="center">{children}</p>
                              ),
                            h1: ({ children }) => <h1>{children}</h1>,
                            h2: ({ children }) => <h2>{children}</h2>,
                            h3: ({ children }) => <h3>{children}</h3>,
                            h4: ({ children }) => <h4>{children}</h4>,
                            h5: ({ children }) => <h5>{children}</h5>,
                            center: ({ children }) => (
                              <p align="center">{children}</p>
                            ),
                            left: ({ children }) => (
                              <p align="left">{children}</p>
                            ),
                            right: ({ children }) => (
                              <p align="right">{children}</p>
                            ),
                          },
                          list: {
                            number: ({ children }) => (
                              <ol className="list-decimal">{children}</ol>
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
                              <span style={{ fontSize: '1.5em' }}>
                                {props.children}
                              </span>
                            ),
                            sub: (props) => <sub>{props.children}</sub>,
                            sup: (props) => <sup>{props.children}</sup>,
                          },
                        }}
                      />
                    </div>
                  ) : props.value.right.columnRight === 'image' ? (
                    <div
                      className="relative w-full rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      {props.value.right.imageRight &&
                      props.value.right.imageRight.asset ? (
                        <Image
                          {...useNextSanityImage(
                            client,
                            props.value.right.imageRight,
                            {
                              imageBuilder: columnIURB,
                            },
                          )}
                          style={{ width: '100%', height: 'auto' }}
                          alt={props.value.right.imageRight.name}
                          placeholder="blur"
                          blurDataURL={urlFor(props.value.right.imageRight)
                            .blur(2)
                            .format('webp')
                            .saturation(-100)
                            .width(100)
                            .url()}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
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
        }}
      />
    </div>
  )
}

export default EditorComponent
