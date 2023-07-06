const ButtonViewFacilities = ({ setShowComponent }) => {
  return (
    <div className="mt-2 md:mt-6 text-[#BEC29D] md:text-d-body">
      <button
        id="image-view-btn"
        onClick={(e) => {
          setShowComponent('image-view')

          document.getElementById('image-view-btn').classList.add('opacity-40')
          document
            .getElementById('image-view-btn')
            .classList.add('pointer-events-none')

          document
            .getElementById('grid-view-btn')
            .classList.remove('opacity-40')
          document
            .getElementById('grid-view-btn')
            .classList.remove('pointer-events-none')
        }}
        className="mr-2 md:mr-4 opacity-40 leading-6 transition-all duration-300 hover:opacity-30 pointer-events-none"
      >
        <span className="font-serif font-medium">
          Image View
        </span>
      </button>
      •
      <button
        id="grid-view-btn"
        onClick={(e) => {
          setShowComponent('grid-view')

          document.getElementById('grid-view-btn').classList.add('opacity-40')
          document
            .getElementById('grid-view-btn')
            .classList.add('pointer-events-none')

          document
            .getElementById('image-view-btn')
            .classList.remove('opacity-40')
          document
            .getElementById('image-view-btn')
            .classList.remove('pointer-events-none')
        }}
        className="ml-2 md:ml-4 leading-6 transition-all duration-300 hover:opacity-30"
      >
        <span className="font-serif font-medium">Grid View</span>
      </button>
    </div>
  )
}

export default ButtonViewFacilities
