import Link from 'next/link'
import { forwardRef } from 'react'

const FancyLink = forwardRef(
  (
    {
      destination,
      a11yText,
      className = '',
      children,
      blank = false,
      onClick,
      ...others
    },
    ref,
  ) => {
    return !destination ? (
      <button
        aria-label={a11yText}
        className={`cursor-pointer ${className}`}
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
          className={`${className}`}
          ref={ref}
          onClick={onClick}
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
