export default function Container({
  children,
  className,
  padding = true,
  ...others
}) {
  return (
    <div
      className={`container ${
        padding ? 'px-10 max-md:px-5' : ''
      } max-w-screen-xl mx-auto w-full ${className}`}
      {...others}
    >
      {children}
    </div>
  )
}
