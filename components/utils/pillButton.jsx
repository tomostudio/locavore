import FancyLink from './fancyLink';
import Arrow from './arrow';

const PillButton = ({ className, destination, arrow, children, onClick }) => {
  return (
    <>
      <FancyLink
        destination={destination ? destination : false}
        onClick={!destination ? onClick : false}
        className={`text-xs px-6 py-2 border border-gray text-gray rounded-full setflex-center ${className}`}
      >
        {arrow === 'left' ? (
            <Arrow position={arrow} className='mr-2 block' />
        ) : (
          ''
        )}
        <span className="pt-px">
        {children}
        </span>
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
