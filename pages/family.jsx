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

export default function Family({
  seoAPI,
  familyAPI,
  familyListAPI,
  memberListAPI,
}) {
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

  let familyImageAPI_split = [];
  // familyListAPI.forEach((data, index) => {
  //   memberListAPI.forEach((item) => {
  //     if (item.slug.current === data.family.slug.current) {
  //       familyImageAPI_split.push({
  //         ...data,
  //         storeID: index,
  //       })
  //     }
  //   })
  // })

  memberListAPI.map((data) => {
    if (
      familyListAPI.find((x) => x.slug.current === data.family.slug.current)
    ) {
      familyImageAPI_split.push({
        ...data,
        storeID: familyListAPI.findIndex(
          (x) => x.slug.current === data.family.slug.current
        ),
      });
    }
  });

  // familyListAPI.map((item, id) => {
  //   memberListAPI.map((data) => {
  //     familyImageAPI_split.push({
  //       ...data,
  //       storeID: id,
  //     })
  //   })
  // })

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

  const [familyImageFixed, setFamilyData] = useState([]);

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

  const row_data = {
    mobile: 5,
    tablet: 4,
    desktop: 5,
  };
  const resetData = () => {
    let triggerChange = false;
    let columnCount = 8;
    let minRow = row_data.desktop;

    if (window.innerWidth < bp.mobile) {
      // Mobile
      if (onWindow !== 'mobile') {
        onWindow = 'mobile';
        triggerChange = true;
        columnCount = 3;
        minRow = row_data.mobile;
      }
    } else if (
      window.innerWidth >= bp.mobile &&
      window.innerWidth < bp.tablet
    ) {
      // Tablet
      if (onWindow !== 'tablet') {
        onWindow = 'tablet';
        columnCount = 5;
        minRow = row_data.tablet;
        triggerChange = true;
      }
    } else {
      // Desktop
      if (onWindow !== 'desktop') {
        onWindow = 'desktop';
        columnCount = 8;
        minRow = row_data.desktop;
        triggerChange = true;
      }
    }

    if (triggerChange) {
      triggerChange = false;

      let _a = [...familyImageAPI_split]; // placeholder array

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
          let dataIndex = i;
          let multipler = Math.floor(i / familyImageAPI_split.length);
          if (dataIndex >= familyImageAPI_split.length) {
            dataIndex = i - familyImageAPI_split.length * multipler;
          }
          _a.push(familyImageAPI_split[dataIndex]);
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
          webTitle: seo.webTitle && seo.webTitle,
          description:
            family && family.seo && family.seo.seo_description
              ? family.seo.seo_description
              : seo.seo && seo.seo.seo_description,
          meta_keywords:
            family && family.seo && family.seo.seo_keywords
              ? family.seo.seo_keywords
              : seo.seo.seo_keywords && seo.seo.seo_keywords,
          image:
            family && family.seo && family.seo.seo_image
              ? urlFor(family.seo.seo_image).url()
              : seo.seo && seo.seo.seo_image && urlFor(seo.seo.seo_image).url(),
          image_alt:
            family && family.seo && family.seo.seo_image.name
              ? family.seo.seo_image.name
              : seo.seo && seo.seo.seo_image.name && seo.seo.seo_image.name,
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
          {familyListAPI.map((familydata, id) => {
            return (
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
            );
          })}
        </div>
        <section className='w-full h-full flex flex-col relative mt-12 '>
          <div
            className='relative w-full h-auto flex flex-wrap  '
            id='family-image'
          >
            {familyImageFixed !== [] &&
              familyImageFixed.map((data, id) => (
                <FamilyImage
                  key={id}
                  store={familyListAPI[data.storeID]}
                  position={data.position || ''}
                  name={data.name || ''}
                  src={urlFor(data.image).url()}
                  alt={data.name}
                />
              ))}
          </div>
        </section>
        {isMobile && (
          <section
            className='sticky bottom-0 left-0 w-full z-40 hidden max-md:flex flex-col justify-center items-center mt-10'
            id='family-button-mobile'
          >
            {familyListAPI.map((familydata, id) => (
              <FancyLink
                key={id}
                destination={`/family/${familydata.slug.current}`}
                className='relative -mb-4 text-center w-full h-full rounded-t-2xl bg-locavore pt-2 pb-5 font-bold uppercase last:mb-0'
                style={{ backgroundColor: familydata.bgColor.hex }}
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
  const memberListAPI = await client.fetch(`
  *[_type == "member_list"] {
    ...,
    family->
  }
  `);
  return {
    props: {
      seoAPI,
      familyAPI,
      familyListAPI,
      memberListAPI,
    },
  };
}
