import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Layout
import Layout from '@/components/modules/layout';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import { motion } from 'framer-motion';

// Components
import FamilyImage from '@/components/modules/family/familyImage';
import SEO from '@/components/utils/seo';
import FamilyMenu from '@/components/modules/family/familyMenu';
import FamilyMenuMobile from '@/components/modules/family/familyMenuMobile';
import HeadingTitle from '@/components/utils/headingTitle';

// Helpers
// import { useAppContext } from 'context/state';
import { bp } from '@/helpers/preset/breakpoints';
import { fade } from '@/helpers/preset/transitions';
import client from '@/helpers/sanity/client';

export default function Family({
  seoAPI,
  familyAPI,
  familyListAPI,
  memberListAPI,
  footerAPI,
}) {
  const router = useRouter();
  const [seo] = seoAPI;
  const [family] = familyAPI;
  const [footer] = footerAPI;

  let familyImageAPI_split = [];

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
        title={'Family'}
        pagelink={router.pathname}
        inputSEO={family.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.main
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
        className='no-select-all'
      >
        <div>
          {/* Header Gap */}
          <HeaderGap />

          <HeadingTitle
            className={`sticky text-center`}
            style={{ top: '60px' }}
          >
            <span className='sub'>The</span>Locavore Family
          </HeadingTitle>
          {/* Family Button */}
          <FamilyMenu familyListAPI={familyListAPI} onFamilyHover={true} />
          <section className='w-full h-full flex flex-col relative'>
            <div
              className='relative w-full h-auto flex flex-wrap  '
              id='family-image'
            >
              {familyImageFixed !== [] &&
                familyImageFixed.map((data, id) => (
                  <FamilyImage
                    key={id}
                    store={familyListAPI[data.storeID]}
                    position={(data.hideNamePosition && data.position) || ''}
                    name={(data.hideNamePosition && data.name) || ''}
                    src={data.image}
                    alt={data.image.name}
                  />
                ))}
            </div>
          </section>
        </div>
        <FamilyMenuMobile
          familyListAPI={familyListAPI}
          familyAPI={familyAPI}
          collapse={false}
        />
        <Footer footer={footer} mailchimp={seo.mailchimpID} />
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
  *[_type == "family_list"] | order(order asc)
  `);
  const memberListAPI = await client.fetch(`
  *[_type == "member_list"] {
    ...,
    family->
  }
  `);
  const footerAPI = await client.fetch(`
                    *[_type == "footer"]
                    `);
  const headerAPI = await client.fetch(`
                    *[_type == "header"]
                    `);
  return {
    props: {
      seoAPI,
      familyAPI,
      familyListAPI,
      memberListAPI,
      footerAPI,
      headerAPI,
    },
  };
}
