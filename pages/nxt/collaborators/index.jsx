import Layout from '@/components/modules/layout';
import SEO from '@/components/utils/seo';
import client from '@/helpers/sanity/client';
import { useAppContext } from 'context/state';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/preset/transitions';
import Footer from '@/components/modules/footer';
import { useEffect } from 'react';
import Image from 'next/image';
import FancyLink from '@/components/utils/fancyLink';

import hero from '@/public/nxt2/collab/hero.png';
import card1 from '@/public/nxt2/collab/card1.png';
import card_bnw1 from '@/public/nxt2/collab/card_bnw1.png';
import NxtNavigationDesktop from '@/components/utils/nxtNavigation/desktop';

const OurCollaborators = ({ seoAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [seo] = seoAPI;
  const [footer] = footerAPI;

  useEffect(() => {
    window.scrollTo(0, 0);
    appContext.setHeader({
      headerStyle: 'blur-white',
    });

    return () => {
      appContext.setHeader({ headerStyle: 'default' });
    };
  }, []);

  const repeatArr = ['', '', '', '', ''];

  return (
    <Layout>
      <SEO
        title={'Our Collaborators'}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.main
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
        className='no-select-all bg-black'
      >
        <div className='relative w-full h-full setflex-center'>
          <div className='relative w-full h-[350px] flex items-center md:items-end justify-center'>
            <Image src={hero} alt='' fill style={{ objectFit: 'cover' }} />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40' />
            <h1 className='relative text-m-header md:text-d-header text-[#BEC29D] font-funkturm md:mb-14 max-w-xs md:max-w-none text-center'>
              OUR COLLABORATORS
            </h1>
          </div>
          <div className='w-full h-full flex flex-wrap mt-20 mb-16 border-y border-white collaborators-border'>
            {repeatArr.map((obj, id) => (
              <FancyLink
                destination='/nxt/collaborators/detail'
                className='w-[calc(100%/3)] setflex-center text-white p-10 transition-all duration-300 group hover:text-black hover:bg-[#BEC29D] '
                key={id}
              >
                <div className='h-full flex flex-col'>
                  <span className='italic font-serif text-[1.375rem] text-left mb-1'>
                    Work Role
                  </span>
                  <div className='w-full flex'>
                    <div className='relative aspect-[3/2] md:aspect-[6/5] w-full rounded-md overflow-hidden mr-1'>
                      <Image
                        src={card_bnw1}
                        alt=''
                        fill
                        style={{ objectFit: 'cover' }}
                        className='group-hover:hidden'
                      />
                      <Image
                        src={card1}
                        alt=''
                        fill
                        style={{ objectFit: 'cover' }}
                        className='hidden group-hover:block'
                      />
                    </div>
                    <span className='text-d-small writing-mode-vertical text-left'>
                      JAKARTA, INDONESIA
                    </span>
                  </div>
                  <span className='font-bold text-[1.875rem] max-w-[300px] text-left mt-4 leading-tight'>
                    Lorem Ipsum Dolor Sit Amet
                  </span>
                </div>
              </FancyLink>
            ))}
          </div>
          <FancyLink
            className={`w-fit p-4 text-d-small mb-16 text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
          >
            VIEW MORE
          </FancyLink>
        </div>
        <NxtNavigationDesktop focus='collab' />
      </motion.main>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  );
};

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
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
      footerAPI,
      headerAPI,
    },
  };
}

export default OurCollaborators;
