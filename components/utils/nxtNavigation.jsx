import FancyLink from './fancyLink'

const NxtNavigation = ({ focus = "nxt" }) => {
  return (
    <div className="w-full fixed bottom-0 left-0 z-10 mb-10 grid grid-cols-5">
      <FancyLink
        destination="/nxt"
        className={`relative left-[52px] w-full ${
          focus === "nxt" ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        NXT
      </FancyLink>
      <FancyLink
        destination="/nxt/menu"
        className={`relative left-[26px] z-10 w-full ${
          focus === "menu" ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        MENU
      </FancyLink>
      <FancyLink
        destination="/nxt/features-facilities"
        className={`relative z-20 w-full ${
          focus === "features" ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        FEATURES & FACILITIES
      </FancyLink>
      <FancyLink
        destination="/nxt/our-collaborators"
        className={`relative right-[26px] z-30 w-full ${
          focus === "collab" ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        COLLABORATORS
      </FancyLink>
      <FancyLink
        destination="/nxt/events-programs"
        className={`relative right-[52px] z-40 w-full ${
          focus === "events" ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        EVENTS & PROGRAMS
      </FancyLink>
    </div>
  )
}

export default NxtNavigation
