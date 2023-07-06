import FancyLink from '@/components/utils/fancyLink';
import { motion } from 'framer-motion';

const GridView = ({ facilitiesListGrid }) => {
  const removeBorderLastRow = (data, index) => {
    // desktop column
    let rowCountDesktop = 3;
    let columnCountDesktop = Math.ceil(data.length / rowCountDesktop);

    // mobile column
    let rowCountMobile = 2;
    let columnCountMobile = Math.ceil(
      data.filter((e) => !e.mobile).length / rowCountMobile
    );

    // check row desktop
    const lastRowDivsDesktop = [];
    for (
      var i = rowCountDesktop * (columnCountDesktop - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsDesktop.push(i);
    }

    // check row mobile
    const lastRowDivsMobile = [];
    for (
      var i = rowCountMobile * (columnCountMobile - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsMobile.push(i);
    }

    if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b';
    } else if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'md:border-b';
    } else if (
      lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b md:border-b-0';
    } else {
      return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      id='grid-view'
      className='w-full my-20'
    >
      <div className='w-full flex flex-wrap border-y border-white facilities-border'>
        {facilitiesListGrid.map((data, id) =>
          data.title ? (
            <FancyLink
              key={id}
              destination={`/nxt/facilities/${data.slug.current}`}
              className={`w-[calc(100%/2)] md:w-[calc(100%/3)] ${removeBorderLastRow(
                facilitiesListGrid,
                id
              )} border-white px-2 py-4 text-center sm:p-10 setflex-center-row text-white transition-all duration-300 hover:bg-[#BEC29D] hover:text-black`}
            >
              <span className='font-medium text-m-body sm:text-d-body uppercase'>
                {data.title}
              </span>
            </FancyLink>
          ) : (
            <div
              className={`w-[calc(100%/2)] md:w-[calc(100%/3)] ${removeBorderLastRow(
                facilitiesListGrid,
                id
              )} ${
                data.mobile === 'hidden' ? 'hidden md:block' : ''
              } border-white`}
            />
          )
        )}
      </div>
    </motion.div>
  );
};

export default GridView;
