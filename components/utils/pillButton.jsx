import FancyLink from './fancyLink';
import Arrow from './arrow';

const PillButton = ({ className, destination, arrow, children, onClick, defaultHover = true }) => {
  return (
    <>
      <FancyLink
        destination={destination}
        onClick={onClick}
        className={`pillbutton text-xs px-6 py-2 border border-gray text-gray rounded-3xl transition-all ease-linear setflex-center-row ${className} ${defaultHover ? 'hover:bg-gray hover:text-white' : ''}`}
      >
        {arrow === 'left' ? (
          <Arrow position={arrow} className='mr-2 block' />
        ) : (
          ''
        )}
        <span className='pt-px'>{children}</span>
        {arrow === 'right' ? (
          <Arrow position={arrow} className='ml-2 block' />
        ) : (
          ''
        )}
      </FancyLink>
    </>
  );
};

export default PillButton;
