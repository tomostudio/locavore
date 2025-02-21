import Container from '@/components/modules/container'
import FancyLink from '../fancyLink'
import { m } from 'framer-motion'
import { useRouter } from 'next/router'

const NxtNavigationDesktop = ({transition = false }) => {
  const router = useRouter()
  return (
    <m.div
      initial="initial"
      animate="enter"
      variants={
        transition
          ? {
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
            }
          : {}
      }
      className="sticky bottom-5 z-50 mb-10"
    >
      <Container
        id="nxtNavigation"
        padding={true}
        className="!max-w-screen-lg mx-auto flex flex-wrap items-stretch text-black text-d-small"
      >
        <FancyLink
          destination="/nxt/menu"
          className={`relative z-1  ${
            router.pathname === '/nxt/menu' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-500 hover:bg-[#BEC29D]`}
        >
          TASTING MENU
        </FancyLink>
        <FancyLink
          destination="/nxt/features"
          className={`relative z-2 4 ${
            router.pathname === '/nxt/features' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-500 hover:bg-[#BEC29D]`}
        >
          FEATURES
        </FancyLink>
        <FancyLink
          destination="/nxt/collaborators"
          className={`relative z-3  ${
            router.pathname === '/nxt/collaborators'
              ? 'bg-[#BEC29D]'
              : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-500 hover:bg-[#BEC29D]`}
        >
          COLLABORATORS
        </FancyLink>
        <FancyLink
          destination="/nxt/events-programs"
          className={`relative z-4 ${
            router.pathname === '/nxt/events-programs'
              ? 'bg-[#BEC29D]'
              : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-500 hover:bg-[#BEC29D]`}
        >
          EVENTS & PROGRAMS
        </FancyLink>
        <FancyLink
          destination="/nxt/visit"
          className={`relative z-4 ${
            router.pathname === '/nxt/visit' ? 'bg-[#BEC29D]' : 'bg-white'
          } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-500 hover:bg-[#BEC29D]`}
        >
          VISIT
        </FancyLink>
      </Container>
    </m.div>
  )
}

export default NxtNavigationDesktop
