import { useRef, useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Router from 'next/router';

export default function Home() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/editorial/metamorphosis');
      location.replace('/editorial/metamorphosis');
    }
  }, []);
  return (
    <>
      <NextSeo title='Home' />
    </>
  );
  // return (
  //   <Layout>
  //     <NextSeo title='Home' />
  //   </Layout>
  // );
}
