import PillButton from "./pillButton"

const StickyButton = ({ destination, arrow, children }) => {
  return (
    <div className="sticky bottom-6 mb-10 left-0 w-full z-50">
      <div className="setflex-center">
        <PillButton
          destination={destination}
          arrow={arrow}
          className="uppercase bg-white flex items-center"
        >
          {children}
        </PillButton>
      </div>
    </div>
  )
}

export default StickyButton