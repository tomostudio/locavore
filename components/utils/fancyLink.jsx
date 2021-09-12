import Link from 'next/link'

export default function FancyLink({
  destination,
  a11yText,
  className = '',
  children,
  blank = false,
  onClick,
  ...others
}) {
  return !destination ? (
    <button
      aria-label={a11yText}
      className={`pointer-events-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  ) : !blank ? (
    <Link href={destination} scroll={false}>
      <a
        aria-label={a11yText}
        className={`pointer-events-auto ${className}`}
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
    >
      {children}
    </a>
  )
}
