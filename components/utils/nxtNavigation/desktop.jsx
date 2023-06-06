import Container from '@/components/modules/container'
import FancyLink from '../fancyLink'
import { m } from 'framer-motion'

const NxtNavigationDesktop = ({ focus = 'nxt', transition = false }) => {
  return (
    <m.div
      initial="initial"
      animate="enter"
      variants={transition ? {
        initial: { opacity: 0 },
        enter: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 3,
          },
        },
        exit: {
          opacity: 1,
        },
      } : {}}
      className="sticky bottom-10 z-10 mb-10"
    >
      <Container
        id="nxtNavigation"
        padding={true}
        className="!max-w-screen-lg mx-auto flex flex-wrap items-stretch text-black text-d-small"
      >
        <FancyLink
          destination="/nxt/menu"
          className={`relative z-1  ${
            focus === 'menu' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
        >
          MENU
        </FancyLink>
        <FancyLink
          destination="/nxt/facilities"
          className={`relative z-2 4 ${
            focus === 'features' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
        >
          FACILITIES
        </FancyLink>
        <FancyLink
          destination="/nxt/collaborators"
          className={`relative z-3  ${
            focus === 'collab' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
        >
          COLLABORATORS
        </FancyLink>
        <FancyLink
          destination="/nxt/events-programs"
          className={`relative z-4 ${
            focus === 'events' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
        >
          EVENTS & PROGRAMS
        </FancyLink>
        <FancyLink
          destination="/nxt"
          className={`relative z-4 ${
            focus === 'events' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
        >
          VISIT
        </FancyLink>
      </Container>
    </m.div>
  )
}

export default NxtNavigationDesktop
