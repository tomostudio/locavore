import FancyLink from '../utils/fancyLink'
import Arrow from '../utils/arrow'

const PillButton = ({
  className,
  destination,
  arrow,
  children,
  onClick,
  defaultHover = true,
  loadMore = false,
  click = false,
  ...others
}) => {
  return (
    <>
      {!loadMore ? (
        <FancyLink
          destination={destination}
          onClick={onClick}
          className={`pillbutton text-xs px-4 py-2 max-md:py-1 max-md:px-3 border border-gray ${!click ? "text-gray" : "text-white"} rounded-3xl transition-all ease-linear setflex-center-row whitespace-nowrap text-center ${className} ${
            defaultHover ? 'hover:bg-gray hover:text-white' : ''
          }`}
          {...others}
        >
          {arrow === 'left' ? (
            <Arrow position={arrow} className="mr-2 block" />
          ) : (
            ''
          )}
          <span className="pt-px">{children}</span>
          {arrow === 'right' ? (
            <Arrow position={arrow} className="ml-2 block" />
          ) : (
            ''
          )}
        </FancyLink>
      ) : (
        <FancyLink
          destination={destination}
          onClick={onClick}
          className={`pillbutton text-xs px-4 py-2 max-md:py-1 max-md:px-3 border border-gray bg-gray text-white rounded-3xl transition-all ease-linear setflex-center-row ${className} ${
            defaultHover
              ? 'hover:bg-white hover:text-gray hover:border-gray'
              : ''
          }`}
          {...others}
        >
          {arrow === 'left' ? (
            <Arrow position={arrow} className="mr-2 block" />
          ) : (
            ''
          )}
          <span className="pt-px">{children}</span>
          {arrow === 'right' ? (
            <Arrow position={arrow} className="ml-2 block" />
          ) : (
            ''
          )}
        </FancyLink>
      )}
    </>
  )
}

export default PillButton
