import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [scrollState, setScrollState] = useState(null)
  const [headerVar, setHeader] = useState({ headerStyle: 'default' })
  const [playVideo, setPlayVideo] = useState(false)

  return (
    <AppContext.Provider
      value={{
        scrollState,
        setScrollState,
        headerVar,
        setHeader,
        playVideo,
        setPlayVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
