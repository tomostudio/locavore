import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'

export default function Navbar({ className, logo }) {
  return (
    <header
      className={`py-2 fixed top-0 left-0 right-0 w-full z-50 border-b ${className}`}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <Container>
        <div className="flex flex-wrap">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className="mb-1 md:mb-0 py-2"
          >
            <img src={logo} />
          </FancyLink>

          <nav className="ml-auto flex space-x-7 w-full text-sm md:text-base md:w-auto">
            <FancyLink
              destination="/editorial"
              a11yText="Navigate to the editorial page"
              className="p-2"
            >
              Editorial
            </FancyLink>
            <FancyLink
              destination="/under_construction"
              a11yText="Navigate to the about page"
              className="p-2"
            >
              Under Construction
            </FancyLink>
            <FancyLink
              destination="/family"
              a11yText="Navigate to the about page"
              className="p-2"
            >
              Family
            </FancyLink>
            <FancyLink
              destination="/about"
              a11yText="Navigate to the about page"
              className="p-2 font-bold"
            >
              BOOKING
            </FancyLink>
          </nav>
        </div>
      </Container>
    </header>
  )
}
