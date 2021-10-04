import FancyLink from '@/components/utils/fancyLink';
import Container from '@/components/modules/container';
import { useMediaQuery } from '@/helpers/functional/checkMedia';
import { useAppContext } from 'context/state';

export default function Navbar({ className = '' }) {
  const appContext = useAppContext();
  const { headerStyle } = appContext.headerVar;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50  transition-all duration-150 ease-linear ${className} ${
        headerStyle.toLowerCase() === 'default'
          ? 'bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm border-black'
          : headerStyle.toLowerCase() === 'white'
          ? 'border-white'
          : headerStyle.toLowerCase() === 'black'
          ? 'border-black'
          : ''
      }`}
    >
      <Container className='h-header relative flex flex-wrap max-md:flex-nowrap max-md:items-center max-md:pt-10'>
        <FancyLink
          destination='/'
          a11yText='Navigate to the home page'
          className='mb-1 md:mb-0 setflex-center max-md:p-0'
        >
          <img
            src={
              headerStyle.toLowerCase() === 'default' || headerStyle.toLowerCase() === 'black'
                ? '/locavore-black.png'
                : headerStyle.toLowerCase() === 'white'
                ? '/locavore-white.png'
                : ''
            }
          />
        </FancyLink>

        <nav
          className={`ml-auto setflex-center-row max-md:justify-end space-x-6 w-full text-sm md:text-sm md:w-auto transition-colors duration-300 ease-linear ${
            headerStyle.toLowerCase() === 'default' || headerStyle.toLowerCase() === 'black'
              ? 'text-black'
              : headerStyle.toLowerCase() === 'white'
              ? 'text-white'
              : ''
          }`}
        >
          {useMediaQuery('(min-width: 768px)') && (
            <>
              <FancyLink
                destination='/editorial'
                a11yText='Navigate to the editorial page'
                className='hover:opacity-60 transition-opacity ease-linear'
              >
                Editorial
              </FancyLink>
              <FancyLink
                destination='/under_construction'
                a11yText='Navigate to the about page'
                className='hover:opacity-60 transition-opacity ease-linear'
              >
                Under Construction
              </FancyLink>
              <FancyLink
                destination='/family'
                a11yText='Navigate to the about page'
                className='hover:opacity-60 transition-opacity ease-linear'
              >
                Family
              </FancyLink>
            </>
          )}
          <FancyLink
            destination='/about'
            a11yText='Navigate to the about page'
            className='font-bold hover:opacity-60 transition-opacity ease-linear'
          >
            BOOKING
          </FancyLink>
        </nav>
      </Container>
    </header>
  );
}
