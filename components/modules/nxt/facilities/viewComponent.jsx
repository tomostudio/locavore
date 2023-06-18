import { AnimatePresence } from 'framer-motion'
import GridView from './gridView'
import ImageView from './imageView'
import { useEffect, useRef } from 'react'

const ViewComponent = ({
  showComponent,
  facilitiesList,
  facilitiesListGrid,
  facilitiesListScroll,
}) => {
  const scrollContainer = useRef()

  useEffect(() => {
    if (scrollContainer.current) {
      const scrollContainerWidth =
        scrollContainer.current.scrollWidth -
        scrollContainer.current.clientWidth
      scrollContainer.current.scrollLeft = scrollContainerWidth / 2
    }
  }, [])
  return (
    <div className="relative w-full">
      <AnimatePresence>
        {showComponent === 'grid-view' ? (
          <GridView
            key={showComponent}
            facilitiesListGrid={facilitiesListGrid}
          />
        ) : (
          <ImageView
            key={showComponent}
            facilitiesList={facilitiesList}
            facilitiesListScroll={facilitiesListScroll}
            scrollContainer={scrollContainer}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ViewComponent
