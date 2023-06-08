import { useMediaQuery } from '@/helpers/functional/checkMedia'
import NxtNavigationDesktop from './desktop'
import NxtNavigationMobile from './mobile'
import { useEffect, useState } from 'react'

const NxtNavigation = ({ focus = '', transition = false }) => {
  const [resizeTransition, setResizeTransition] = useState(transition)
  useEffect(() => {
    window.addEventListener('resize', () => {
        setResizeTransition(false)
    }, true)
  }, [])

  return useMediaQuery('(min-width: 1060px)') ? (
    <NxtNavigationDesktop transition={resizeTransition} focus={focus} />
  ) : (
    <NxtNavigationMobile transition={resizeTransition} focus={focus} />
  )
}

export default NxtNavigation
