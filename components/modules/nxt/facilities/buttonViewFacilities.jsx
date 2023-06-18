const ButtonViewFacilities = ({ setShowComponent }) => {
  return (
    <div className="mt-6 text-[#BEC29D] text-d-body">
      <button
        id="image-view-btn"
        onClick={(e) => {
          setShowComponent('image-view')

          document.getElementById('image-view-btn').classList.add('opacity-40')
          document
            .getElementById('image-view-btn')
            .classList.add('pointer-events-none')
          document
            .getElementById('image-view-btn')
            .children[0].classList.add('italic')
          document
            .getElementById('image-view-btn')
            .children[0].classList.add('text-[1.375rem]')

          document
            .getElementById('grid-view-btn')
            .classList.remove('opacity-40')
          document
            .getElementById('grid-view-btn')
            .classList.remove('pointer-events-none')
          document
            .getElementById('grid-view-btn')
            .children[0].classList.remove('italic')
          document
            .getElementById('grid-view-btn')
            .children[0].classList.remove('text-[1.375rem]')
        }}
        className="mr-4 opacity-40 leading-6 transition-all duration-300 hover:opacity-30 pointer-events-none"
      >
        <span className="text-[1.375rem] font-serif italic font-medium">
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
            .getElementById('grid-view-btn')
            .children[0].classList.add('italic')
          document
            .getElementById('grid-view-btn')
            .children[0].classList.add('text-[1.375rem]')

          document
            .getElementById('image-view-btn')
            .classList.remove('opacity-40')
          document
            .getElementById('image-view-btn')
            .classList.remove('pointer-events-none')
          document
            .getElementById('image-view-btn')
            .children[0].classList.remove('italic')
          document
            .getElementById('image-view-btn')
            .children[0].classList.remove('text-[1.375rem]')
        }}
        className="ml-4 leading-6 transition-all duration-300 hover:opacity-30"
      >
        <span className="font-serif font-medium">Grid View</span>
      </button>
    </div>
  )
}

export default ButtonViewFacilities
