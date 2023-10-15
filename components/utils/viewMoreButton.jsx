import FancyLink from './fancyLink'

const ViewMoreButton = ({
  data,
  itemToShow,
  setItemToShow,
  defaultItemToShow,
  setShowMore,
}) => {
  const handleViewMore = () => {
    setItemToShow(itemToShow + defaultItemToShow)
    setShowMore(data.length > itemToShow + defaultItemToShow)
  }

  return (
    <FancyLink
      className={`w-fit p-4 text-d-small mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
      onClick={handleViewMore}
    >
      VIEW MORE
    </FancyLink>
  )
}

export default ViewMoreButton
