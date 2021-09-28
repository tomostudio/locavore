import FancyLink from '@/components/utils/fancyLink';
import Container from '@/components/modules/container';
import { useMediaQuery } from '@/helpers/functional/checkMedia';

export default function Navbar({ className, logo }) {
  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 ${className}`}>
      <Container className='h-header relative flex flex-wrap max-md:flex-nowrap max-md:items-center max-md:pt-10'>
        <FancyLink
          destination='/'
          a11yText='Navigate to the home page'
          className='mb-1 md:mb-0 setflex-center max-md:p-0'
        >
          <img src={logo} />
        </FancyLink>

        <nav className='ml-auto setflex-center max-md:justify-end space-x-6 w-full text-sm md:text-sm md:w-auto'>
          {useMediaQuery('(max-width: 768px)') ? (
            <FancyLink
              destination='/about'
              a11yText='Navigate to the about page'
              className='font-bold'
            >
              BOOKING
            </FancyLink>
          ) : (
            <>
              <FancyLink
                destination='/editorial'
                a11yText='Navigate to the editorial page'
              >
                Editorial
              </FancyLink>
              <FancyLink
                destination='/under_construction'
                a11yText='Navigate to the about page'
              >
                Under Construction
              </FancyLink>
              <FancyLink
                destination='/family'
                a11yText='Navigate to the about page'
              >
                Family
              </FancyLink>
              <FancyLink
                destination='/about'
                a11yText='Navigate to the about page'
                className='font-bold'
              >
                BOOKING
              </FancyLink>
            </>
          )}
        </nav>
      </Container>
    </header>
  );
}
