import { PortableText } from '@portabletext/react'
import VideoComponent from '@/components/modules/editorial/videoComponent'
import { Quote } from '@/helpers/preset/svg'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import Caption from '@/components/modules/editorial/caption'

const EditorComponent = ({ data, color }) => {
  return (
    <div className="editor-styling blog">
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
                  }}
                />
              </div>
            ),
            img: (props) => (
              <div className={`image ${!props.value.option ? '' : '!px-0'}`}>
                <div
                  className="relative w-full aspect-w-16 aspect-h-9 max-md:aspect-w-1 max-md:aspect-h-1 rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: `rgba(208,208,208, 1)`,
                  }}
                >
                  <Image
                    src={urlFor(props.value.image).url()}
                    alt={props.value.image.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={urlFor(props.value.image)
                      .blur(2)
                      .format('webp')
                      .saturation(-100)
                      .width(100)
                      .url()}
                  />
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
            columnBlock: (props) => (
              <div className={`column ${!props.value.padding ? '' : '!px-0'}`}>
                <div
                  className={
                    props.value.left.columnLeft === 'blank'
                      ? 'max-md:hidden'
                      : ''
                  }
                >
                  {props.value.left.columnLeft === 'block' ? (
                    <div className="w-full h-full">
                      <PortableText
                        value={props.value.left.blockLeft}
                        components={{
                          block: {
                            normal: ({ children }) =>
                              children[0] === '' ? <br /> : <p>{children}</p>,
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
                        }}
                      />
                    </div>
                  ) : props.value.left.columnLeft === 'image' ? (
                    <div
                      className="relative min-h-16rem rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      <Image
                        src={urlFor(props.value.left.imageLeft).url()}
                        alt={props.value.left.imageLeft.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={urlFor(props.value.left.imageLeft)
                          .blur(2)
                          .format('webp')
                          .saturation(-100)
                          .width(100)
                          .url()}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  className={
                    props.value.left.columnRight === 'blank'
                      ? 'max-md:hidden'
                      : ''
                  }
                >
                  {props.value.right.columnRight === 'block' ? (
                    <div className="w-full h-full">
                      <PortableText
                        value={props.value.right.blockRight}
                        components={{
                          block: {
                            normal: ({ children }) =>
                              children[0] === '' ? <br /> : <p>{children}</p>,
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
                        }}
                      />
                    </div>
                  ) : props.value.right.columnRight === 'image' ? (
                    <div
                      className="relative min-h-16rem rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: `rgba(208,208,208, 1)`,
                      }}
                    >
                      <Image
                        src={urlFor(props.value.right.imageRight).url()}
                        alt={props.value.right.imageRight.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={urlFor(props.value.right.imageRight)
                          .blur(2)
                          .format('webp')
                          .saturation(-100)
                          .width(100)
                          .url()}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ),
          },
          marks: {
            changeColor: (props) => (
              <span style={{ color: props.value.color.hex }}>
                {props.children}
              </span>
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
              <span style={{ fontSize: props.value.size }}>
                {props.children}
              </span>
            ),
            font: (props) => (
              <span
                className={
                  props.value.type === 'display'
                    ? 'font-default'
                    : props.value.type
                }
              >
                {props.children}
              </span>
            ),
          },
        }}
      />
    </div>
  )
}

export default EditorComponent