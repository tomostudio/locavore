import Container from "@/components/modules/container"
import FancyLink from "../fancyLink"

const NxtNavigationMobile = ({ focus = 'nxt' }) => {
  return (
    <Container
      id="nxtNavigation"
      padding={false}
      className="sticky bottom-10 z-10 mb-10 mx-auto flex flex-wrap text-black"
    >
      {/* <FancyLink
        destination="/nxt"
        className={`relative ${
          focus === 'nxt' ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        NXT
      </FancyLink> */}
      <FancyLink
        destination="/nxt/menu"
        className={`relative z-10 ${
          focus === 'menu' ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        MENU
      </FancyLink>
      <FancyLink
        destination="/nxt/features-facilities"
        className={`relative z-20 ${
          focus === 'features' ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        FEATURES & FACILITIES
      </FancyLink>
      <FancyLink
        destination="/nxt/our-collaborators"
        className={`relative z-30 ${
          focus === 'collab' ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        COLLABORATORS
      </FancyLink>
      <FancyLink
        destination="/nxt/events-programs"
        className={`relative z-40 ${
          focus === 'events' ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        EVENTS & PROGRAMS
      </FancyLink>
    </Container>
  )
}

export default NxtNavigationMobile
