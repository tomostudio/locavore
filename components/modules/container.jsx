export default function Container({ children, className }) {
  return (
    <div
      className={`container px-10 max-w-screen-lg mx-auto w-full max-md:px-5 ${className}`}
    >
      {children}
    </div>
  )
}
