export default function Container({ children, className, ...others }) {
  return (
    <div
      className={`container px-10 max-w-screen-xl mx-auto w-full max-md:px-5 ${className}`}
      {...others}
    >
      {children}
    </div>
  )
}
