import FancyLink from './fancyLink'
import Arrow from './arrow'

const PillButton = ({ className, destination, arrow, children, onClick }) => {
  return (
    <>
      {destination ? (
        <FancyLink
          destination={destination}
          className={`text-xs py-2 px-4 border border-grayBorder rounded-full ${className}`}
        >
          {arrow === 'left' ? (
            <>
              <Arrow position={arrow} className="mr-2 inline" />
              {children}
            </>
          ) : arrow === 'right' ? (
            <>
              {children}
              <Arrow position={arrow} className="ml-2 inline" />
            </>
          ) : (
            children
          )}
        </FancyLink>
      ) : (
        <FancyLink
          onClick={onClick}
          className={`text-xs py-2 px-4 border border-grayBorder rounded-full ${className}`}
        >
          {arrow === 'left' ? (
            <>
              <Arrow position={arrow} className="mr-2 inline" />
              {children}
            </>
          ) : arrow === 'right' ? (
            <>
              {children}
              <Arrow position={arrow} className="ml-2 inline" />
            </>
          ) : (
            children
          )}
        </FancyLink>
      )}
    </>
  )
}

export default PillButton
