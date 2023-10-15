import PillButton from './pillButton';

const StickyButton = ({ className, destination, arrow, children }) => {
  return (
    <div className={`stickyButton sticky bottom-5 mb-10 left-0 w-full z-40 setflex-center ${className}`}>
      <PillButton
        destination={destination}
        arrow={arrow}
        className='uppercase bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm'
      >
        {children}
      </PillButton>
    </div>
  );
};

export default StickyButton;
