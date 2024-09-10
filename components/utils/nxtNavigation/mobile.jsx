import Container from '@/components/modules/container'
import FancyLink from '../fancyLink'
import { useState } from 'react'
import { m } from 'framer-motion'
import { useRouter } from 'next/router'

const NxtNavigationMobile = ({ transition = false }) => {
  const router = useRouter()
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
      <div className="relative w-full mx-auto max-w-xl ">
        <div className="max-w-screen-xl mx-auto w-full flex px-5 flex-wrap text-black min-h-[50px] md:!px-0">
          <div className="relative w-full">
            <div className="relative w-full px-2">
              <FancyLink
                className="relative w-full h-[50px] rounded-full bg-[#BEC29D] border border-black text-black z-2"
                onClick={() => {
                  setOpen(!open)
                }}
              >
                {router.pathname === '/nxt' ||
                router.pathname === '/' ||
                router.pathname === '/nxt/option2' ||
                router.pathname === '/nxt/option3'
                  ? 'NXT'
                  : router.pathname === '/nxt/menu'
                  ? 'MENU'
                  : router.pathname === '/nxt/features'
                  ? 'FEATURES'
                  : router.pathname === '/nxt/collaborators'
                  ? 'COLLABORATORS'
                  : router.pathname === '/nxt/visit'
                  ? 'VISIT'
                  : router.pathname == '/nxt/events-programs'
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
              className={`absolute -bottom-[10px] left-0 w-full nxt-mobile-menu pt-[10px] ${
                open ? 'open' : ''
              } flex flex-col justify-end bg-white rounded-[30px] overflow-hidden `}
            >
              {router.pathname !== '/nxt/menu' && (
                <FancyLink
                  className="w-full h-[50px] flex-shrink-0 bg-white mb-[10px] setflex-center"
                  destination="/nxt/menu"
                >
                  TASTING MENU
                </FancyLink>
              )}
              {router.pathname !== '/nxt/features' && (
                <FancyLink
                  className="w-full h-[50px] flex-shrink-0 bg-white mb-[10px] setflex-center"
                  destination="/nxt/features"
                >
                  FEATURES
                </FancyLink>
              )}
              {router.pathname !== '/nxt/collaborators' && (
                <FancyLink
                  className="w-full h-[50px] flex-shrink-0 bg-white mb-[10px] setflex-center"
                  destination="/nxt/collaborators"
                >
                  COLLABORATORS
                </FancyLink>
              )}
              {router.pathname !== '/nxt/events-programs' && (
                <FancyLink
                  className="w-full h-[50px] flex-shrink-0 bg-white mb-[10px] setflex-center"
                  destination="/nxt/events-programs"
                >
                  EVENTS & PROGRAMS
                </FancyLink>
              )}
              {router.pathname !== '/nxt/visit' && (
                <FancyLink
                  className="w-full h-[50px] flex-shrink-0 bg-white mb-[10px] setflex-center"
                  destination="/nxt/visit"
                >
                  VISIT
                </FancyLink>
              )}
              <div className="w-full h-[60px] flex-shrink-0 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default NxtNavigationMobile
