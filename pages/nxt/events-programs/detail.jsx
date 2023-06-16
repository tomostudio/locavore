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
import HeaderGap from '@/components/modules/headerGap';
import Container from '@/components/modules/container';

import detail from '@/public/nxt2/events/detail.png';
import StickyButton from '@/components/modules/stickyButton';
import PillButton from '@/components/modules/pillButton';

const EventsAndProgramsDetail = ({ seoAPI, footerAPI }) => {
  const router = useRouter();
  const appContext = useAppContext();
  const [seo] = seoAPI;
  const [footer] = footerAPI;

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = 'black'
    window.scroll(0, 0);
    appContext.setHeader({
      headerStyle: 'blur-white',
    });

    return () => {
      appContext.setHeader({ headerStyle: 'default' });
    };
  }, []);

  return (
    <Layout>
      <SEO
        title={'Events & Programs'}
        pagelink={router.pathname}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.main
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
        className=' bg-black'
      >
        <HeaderGap />
        <Container className='relative flex flex-col mt-6 mb-10 md:my-20'>
          <div className='relative w-full h-[422px] md:h-[450px] rounded-lg overflow-hidden'>
            <Image src={detail} alt='' fill style={{ objectFit: 'cover' }} />
          </div>
          <div className='w-full flex flex-col mt-10 md:mt-20 mx-auto max-w-4xl'>
            <div className='w-full flex gap-8'>
              <div className='hidden sm:block w-[30%]' />
              <span className='w-full sm:w-[70%] text-center sm:text-left font-funkturm text-m-additionalHeader md:text-d-additionalHeader text-[#BEC29D]'>
                LOREM IPSUM
              </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row gap-8 mt-8'>
              <div className='w-full sm:w-[30%] flex flex-col gap-3'>
                <div className='w-full grid grid-flow-col-dense grid-rows-2 sm:flex sm:flex-col gap-4 sm:gap-3 text-white text-center sm:text-left'>
                  <span>
                    VENUE:
                    <br />
                    LOREM IPSUM
                  </span>
                  <span>
                    DATE:
                    <br />
                    10 OCT 2023
                  </span>
                  <span>
                    LOCATION:
                    <br />
                    LOREM IPSUM
                  </span>
                  <span>
                    TIME:
                    <br />
                    07.00 - FINISH
                  </span>
                </div>
                <FancyLink className='hidden sm:block font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.1rem] w-fit transtion-all duration-300 hover:opacity-30'>
                  Register Now
                </FancyLink>
              </div>
              <div className='w-full sm:w-[70%] text-white editor-styling'>
                <p>
                  Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                  viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                  amet, dolor sit amet consectetur adipiscing elit. Proin nec
                  massa dolor viverra, aliquet dui ac, amett gravida magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                  viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                  amet, dolor sit amet consectetur adipiscing elit. Proin nec
                  massa dolor viverra, aliquet dui ac, amett gravida magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                  viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                  amet, dolor sit amet consectetur adipiscing elit. Proin nec
                  massa dolor viverra, aliquet dui ac, amett gravida magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectet elit. Proin nec massa
                  viverra, aliquet dui ac, gravida magna. Lorem ipsum dolor sit
                  amet, dolor sit amet consectetur adipiscing elit. Proin nec
                  massa dolor viverra, aliquet dui ac, amett gravida magna.
                </p>
              </div>
              <FancyLink className='sm:hidden mx-auto font-serif font-medium border-b border-[#BEC29D] text-[#BEC29D] text-[1.1rem] w-fit transtion-all duration-300 hover:opacity-30'>
                Register Now
              </FancyLink>
            </div>
          </div>
        </Container>
        {/* Button Sticky */}
        <StickyButton destination='/nxt/events-programs' arrow='left'>
          EVENTS & PROGRAMS
        </StickyButton>
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

export default EventsAndProgramsDetail;
