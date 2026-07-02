import FancyLink from '@/components/utils/fancyLink'
import urlFor from '@/helpers/sanity/urlFor'

const Badge = ({ award }) => {
  const img = (
    <img
      src={urlFor(award.image).width(240).format('webp').url()}
      alt={award.title || ''}
      className='w-full h-auto'
      loading='lazy'
      decoding='async'
    />
  )
  return (
    <div className='w-[100px] md:w-[120px] flex justify-center'>
      {award.link ? (
        <FancyLink
          destination={award.link}
          blank={true}
          className='block hover:opacity-80 transition-opacity duration-300'
        >
          {img}
        </FancyLink>
      ) : (
        img
      )}
    </div>
  )
}

const AwardsSection = ({ awards = [] }) => {
  const valid = (awards || []).filter((a) => a && a.image && a.image.asset)
  if (valid.length === 0) return null

  const currentYear = new Date().getFullYear()
  const byYear = valid.reduce((acc, a) => {
    const year = a.year || currentYear
    if (!acc[year]) acc[year] = []
    acc[year].push(a)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <div className='flex flex-col gap-8 items-center max-w-4xl mx-auto mt-4'>
      {years.map((year) => {
        const items = byYear[year]
        const firstRow = items.slice(0, 5)
        const secondRow = items.slice(5)
        return (
          <div key={year} className='w-full flex flex-col gap-4 items-center'>
            <span className='text-sm font-bold tracking-widest uppercase'>{year}</span>
            <div className='flex justify-center items-center gap-4 flex-wrap w-full'>
              {firstRow.map((award, i) => (
                <Badge key={award._key || i} award={award} />
              ))}
            </div>
            {secondRow.length > 0 && (
              <div className='flex justify-center items-center gap-4 flex-wrap w-full'>
                {secondRow.map((award, i) => (
                  <Badge key={award._key || `s${i}`} award={award} />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AwardsSection
