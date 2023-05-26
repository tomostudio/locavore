import Container from '../modules/container'
import FancyLink from './fancyLink'

const NxtNavigation = ({ focus = 'nxt' }) => {
  return (
    <Container
      id="nxtNavigation"
      className="sticky bottom-10 z-10 mb-10 mx-auto flex flex-wrap text-black"
    >
      <FancyLink
        destination="/nxt"
        className={`relative ${
          focus === 'nxt' ? 'bg-[#BEC29D]' : 'bg-white'
        } border border-black rounded-full py-1.5 px-4 text-center transition-all duration-300 hover:bg-[#BEC29D]`}
      >
        NXT
      </FancyLink>
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

  // return (
  //   <div
  //     class="sticky max-sm:hidden top-20 z-40 max-w-screen-xl w-full px-10 mx-auto flex flex-wrap mb-12 items-stretch "
  //     id="family-menu"
  //   >
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/agency-x"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       Agency X
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/locavore"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Locavore</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(111, 156, 94);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/nusantara"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Nusantara</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(236, 139, 80);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/localab"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">LocaLAB</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(165, 124, 55);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/locavore-to-go"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Locavore To Go</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(68, 96, 74);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/local-parts"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Local Parts</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(239, 118, 122);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/butchers-table"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Butcher's Table</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(200, 59, 43);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/night-rooster"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Night Rooster</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(163, 109, 204);"
  //       ></div>
  //     </a>
  //     <a
  //       class="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 border border-black rounded-full pointer-events-auto"
  //       href="/family/club-soda"
  //       // style="background-color: rgb(255, 255, 255);"
  //     >
  //       <div class="relative z-2">Club Soda</div>
  //       <div
  //         class="absolute top-0 left-0 w-full h-full z-0  opacity-0 betterhover:group-hover:opacity-100"
  //         // style="background-color: rgb(121, 198, 212);"
  //       ></div>
  //     </a>
  //   </div>
  // )
}

export default NxtNavigation
