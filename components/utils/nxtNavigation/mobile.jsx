import Container from '@/components/modules/container'
import FancyLink from '../fancyLink'
import { useState } from 'react'
import { m } from 'framer-motion'

const NxtNavigationMobile = ({ focus = '', transition = false }) => {
  const [open, setOpen] = useState(false)
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
      <div className="relative w-full">
        <Container className="mx-auto flex flex-wrap text-black w-full min-h-[50px]">
          <div className="relative w-full">
            <div className="absolute bottom-0 left-0 w-full px-2 pb-2">
              <FancyLink
                className="relative w-full h-[50px] rounded-full bg-[#BEC29D] border border-black text-black z-2"
                onClick={() => {
                  setOpen(!open)
                }}
              >
                {focus === 'menu'
                  ? 'MENU'
                  : focus === 'facilities'
                  ? 'FACILITIES'
                  : focus === 'collab'
                  ? 'COLLABORATORS'
                  : focus === 'visit'
                  ? 'VISIT'
                  : focus == 'events'
                  ? 'EVENTS & PROGRAMS'
                  : ''}
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <div
                    className={`menu-icon black ${
                      open ? 'open' : ''
                    } hover:opacity-50 transition-opacity duration-300`}
                  >
                    <div />
                    <div />
                  </div>
                </div>
              </FancyLink>
            </div>
            <div
              className={`py-2 w-full ${
                open ? 'flex' : 'hidden'
              } flex flex-col bg-white rounded-[25px] overflow-hidden`}
            >
              {focus !== 'menu' && (
                <FancyLink
                  className="w-full h-[50px] bg-white mb-2 setflex-center"
                  destination="/nxt/menu"
                >
                  MENU
                </FancyLink>
              )}
              {focus !== 'facilities' && (
                <FancyLink
                  className="w-full h-[50px] bg-white mb-2 setflex-center"
                  destination="/nxt/facilities"
                >
                  FACILITIES
                </FancyLink>
              )}
              {focus !== 'collab' && (
                <FancyLink
                  className="w-full h-[50px] bg-white mb-2 setflex-center"
                  destination="/nxt/collaborators"
                >
                  COLLABORATORS
                </FancyLink>
              )}
              {focus !== 'events' && (
                <FancyLink
                  className="w-full h-[50px] bg-white mb-2 setflex-center"
                  destination="/nxt/events-programs"
                >
                  EVENTS & PROGRAMS
                </FancyLink>
              )}
              {focus !== 'visit' && (
                <FancyLink
                  className="w-full h-[50px] bg-white mb-2 setflex-center"
                  destination="/nxt/visit"
                >
                  VISIT
                </FancyLink>
              )}
              <div className="w-full h-[50px] bg-white" />
            </div>
          </div>
        </Container>
      </div>
    </m.div>
  )
}

export default NxtNavigationMobile
