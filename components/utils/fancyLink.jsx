import Link from 'next/link'
import { forwardRef } from 'react'
import { useAppContext } from 'context/state'

const FancyLink = forwardRef(
  (
    {
      destination,
      a11yText,
      className = '',
      children,
      blank = false,
      onClick = () => {},
      pointerEvents = true,
      ...others
    },
    ref,
  ) => {
    const appContext = useAppContext()
    return !destination ? (
      <button
        aria-label={a11yText}
        className={`cursor-pointer ${className} ${
          pointerEvents ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={onClick}
        ref={ref}
        {...others}
      >
        {children}
      </button>
    ) : !blank ? (
      <Link href={destination} scroll={false}>
        <a
          aria-label={a11yText}
          className={`${className} ${
            pointerEvents ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          ref={ref}
          onClick={() => {
            onClick()
            appContext.setMobileMenu(false)
          }}
          {...others}
        >
          {children}
        </a>
      </Link>
    ) : (
      <a
        aria-label={a11yText}
        className={`${
          destination ? 'pointer-events-auto' : 'pointer-events-none'
        } ${className}`}
        target="_blank"
        href={destination}
        ref={ref}
        {...others}
      >
        {children}
      </a>
    )
  },
)

export default FancyLink
