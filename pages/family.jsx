import { useEffect, useState } from 'react';

// Layout
import Layout from '@/components/modules/layout';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import { motion } from 'framer-motion';

// Components
import FancyLink from '@/components/utils/fancyLink';
import FamilyImage from '@/components/modules/family/familyImage';
import SEO from '@/components/utils/seo';

// Helpers
// import { useAppContext } from 'context/state';
import { bp, isMobile } from '@/helpers/preset/breakpoints';
import urlFor from '@/helpers/sanity/urlFor';
import { fade } from '@/helpers/preset/transitions';
import client from '@/helpers/sanity/client';

export default function Family({ seoAPI, familyAPI, familyListAPI }) {
  const [seo] = seoAPI;
  const [family] = familyAPI;

  // TEST DATA
  const dataFamilyButtons = [
    {
      slug: 'locavore',
      title: 'LOCAVORE',
      colour: '#789578',
    },
    {
      slug: 'night-rooster',
      title: 'THE NIGHT ROOSTER',
      colour: '#91C1E4',
    },
    {
      slug: 'localparts',
      title: 'LOCAL PARTS',
      colour: '#C06467',
    },
    {
      slug: 'nusantara',
      title: 'NUSANTARA',
      colour: '#E18065',
    },
    {
      slug: 'localab',
      title: 'LOCAVORE LAB',
      colour: '#BC9EDF',
    },
    {
      slug: 'togo',
      title: 'LOCAVORE TO-GO',
      colour: '#C2D09A',
    },
  ];

  const dataFamilyImage = [
    {
      storeID: 2,
      src: '/placeholder/Additional-Locavore.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 2,
      src: '/placeholder/Additional-Locavore-2.jpg',
      alt: 'Locavore Staff',
    },
    {
      storeID: 1,
      src: '/placeholder/Additional-Locavore-3.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 1,
      src: '/placeholder/Additional-Locavore-4.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 0,
      position: 'Executive Chef',
      name: 'Eelke Plasmeijer',
      src: '/placeholder/Additional-Locavore-5.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 0,
      position: 'Executive Chef',
      name: 'Eelke Plasmeijer',
      src: '/placeholder/Additional-Locavore-6.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 3,
      src: '/placeholder/Additional-Locavore-7.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 3,
      src: '/placeholder/Additional-Locavore-8.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 4,
      src: '/placeholder/Additional-Locavore-9.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 4,
      src: '/placeholder/Additional-Locavore-10.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 5,
      src: '/placeholder/Additional-Locavore-11.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 5,
      src: '/placeholder/Additional-Locavore-12.jpg',
      alt: 'Locavore',
    },
    {
      storeID: 5,
      src: '/placeholder/Additional-Locavore-13.jpg',
      alt: 'Locavore',
    },
  ];

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const [familyDataFixed, setFamilyData] = useState([]);

  // Mouse Leave & Enter for Family Button
  const familybutton_enter = (slug) => {
    const familyCards = document.querySelectorAll('.family-card');
    familyCards.forEach((card, id) => {
      if (card.getAttribute('data-store') === slug) {
        card.classList.add('show');
      }
    });
  };

  const familybutton_leave = (id) => {
    const familyCards = document.querySelectorAll('.family-card');
    familyCards.forEach((card, id) => {
      card.classList.remove('show');
    });
  };

  let onWindow = 'none';
  const resetData = () => {
    let triggerChange = false;
    let columnCount = 8;
    let minRow = 3;

    if (window.innerWidth < bp.mobile) {
      // Mobile
      if (onWindow !== 'mobile') {
        onWindow = 'mobile';
        triggerChange = true;
        columnCount = 3;
        minRow = 5;
      }
    } else if (
      window.innerWidth >= bp.mobile &&
      window.innerWidth < bp.tablet
    ) {
      // Tablet
      if (onWindow !== 'tablet') {
        onWindow = 'tablet';
        columnCount = 5;
        minRow = 3;
        triggerChange = true;
      }
    } else {
      // Desktop
      if (onWindow !== 'desktop') {
        onWindow = 'desktop';
        columnCount = 8;
        minRow = 3;
        triggerChange = true;
      }
    }

    if (triggerChange) {
      triggerChange = false;

      let _a = [...dataFamilyImage]; // placeholder array

      let minData = columnCount * minRow; // get min data based on row and column

      if (
        _a.length <= minData || // check if is within minimum
        _a.length % columnCount !== 0 // check data is divisable by column
      ) {
        // set remaining
        let addData = minData - _a.length;
        if (_a.length >= minData) {
          addData =
            Math.ceil(_a.length / columnCount) * columnCount - _a.length;
        }

        // add new data;
        for (let i = 0; i <= addData - 1; i++) {
          _a.push(dataFamilyImage[i]);
        }
      }
      setFamilyData(shuffle(_a)); // apply data and shuffle
    }
  };

  useEffect(() => {
    resetData();
    window.addEventListener('resize', resetData);
    window.scroll(0, 0);
    return () => {
      window.removeEventListener('resize', resetData);
    };
  }, []);

  return (
    <Layout>
      <SEO
        seo={{
          title: 'Family',
          webTitle: typeof seo !== 'undefined' ? seo.webTitle : '',
          description:
            typeof family !== 'undefined' && typeof family.seo !== 'undefined'
              ? family.seo.seo_description
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_description
              : '',
          meta_keywords:
            typeof family !== 'undefined' && typeof family.seo !== 'undefined'
              ? family.seo.seo_keywords
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_keywords
              : '',
          image:
            typeof family !== 'undefined' && typeof family.seo !== 'undefined'
              ? urlFor(family.seo.seo_image).url()
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? urlFor(seo.seo.seo_image).url()
              : '',
          image_alt:
            typeof family !== 'undefined' && typeof family.seo !== 'undefined'
              ? family.seo.seo_image.name
              : typeof seo !== 'undefined' && seo.seo !== 'undefined'
              ? seo.seo.seo_image.name
              : '',
        }}
      />
      <motion.main
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
      >
        {/* Header Gap */}
        <HeaderGap />
        <div className='w-full h-full pt-10 setflex-center px-4'>
          <h1 className='titlestyle'>
            Family
            <span className='sub'>of</span>Locavore
          </h1>
        </div>
        {/* Family Button */}
        <div
          className='sticky max-md:hidden top-20 z-50 max-w-5xl mx-auto flex flex-wrap mt-14 items-stretch'
          id='family-button'
        >
          {familyListAPI.map((familydata, id) => (
            <FancyLink
              key={id}
              destination={`/family/${familydata.slug.current}`}
              onMouseEnter={() => familybutton_enter(familydata.slug.current)}
              onMouseLeave={() => familybutton_leave(0)}
              className='group relative text-center uppercase overflow-hidden bg-white text-grayFont text-sm py-1 px-4 border border-grayBorder rounded-full'
            >
              <div className='relative z-2'>{familydata.title}</div>
              <div
                className='absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-100'
                style={{ backgroundColor: familydata.bgColor.hex }}
              />
            </FancyLink>
          ))}
        </div>
        <section className='w-full h-full flex flex-col relative mt-12 '>
          <div
            className='relative w-full h-auto flex flex-wrap  '
            id='family-image'
          >
            {familyDataFixed.map((data, id) => (
              <FamilyImage
                key={id}
                store={dataFamilyButtons[data.storeID]}
                position={data.position || ''}
                name={data.name || ''}
                src={data.src}
                alt={data.alt}
              />
            ))}
          </div>
        </section>
        {isMobile && (
          <section
            className='sticky bottom-0 left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center mt-10'
            id='family-button-mobile'
          >
            {dataFamilyButtons.map((familydata, id) => (
              <FancyLink
                key={id}
                destination={`/family/${familydata.slug}`}
                className='relative -mb-4 text-center w-full h-full rounded-t-2xl bg-locavore pt-2 pb-5 font-bold uppercase last:mb-0'
                style={{ backgroundColor: familydata.colour }}
              >
                {familydata.title}
              </FancyLink>
            ))}
          </section>
        )}
        <Footer />
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const familyAPI = await client.fetch(`
  *[_type == "family"]
  `);
  const familyListAPI = await client.fetch(`
  *[_type == "family_list"]
  `);
  return {
    props: {
      seoAPI,
      familyAPI,
      familyListAPI,
    },
  };
}
