export const singleIURB = (imageUrlBuilder, options) => {
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 2000),
    )
    .quality(75)
    .format('webp')
}

export const columnIURB = (imageUrlBuilder, options) => {
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 750),
    )
    .quality(75)
    .format('webp')
}
