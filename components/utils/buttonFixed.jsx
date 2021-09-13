import PillButton from "./pillButton"

const ButtonFixed = ({ destination, arrow, children }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="setflex-center mb-6">
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

export default ButtonFixed
