import React, { useEffect, useRef, useState } from 'react';
import 'intersection-observer'; // optional polyfill
import { useInView } from 'react-cool-inview';
import Image from 'next/image';
import Lottie from 'lottie-react';

import FancyLink from '@/components/utils/fancyLink';
import LottieLve from '@/public/nxt/lottie/lve-lottie-jpg-2.json';

// Local Images
import summer from '@/public/nxt/summer.webp';
import cloud1 from '@/public/nxt/cloud01.webp';
import cloud2 from '@/public/nxt/cloud02.webp';
import cloud3 from '@/public/nxt/cloud03.webp';
import cloud4 from '@/public/nxt/cloud04.webp';
import cloud5 from '@/public/nxt/cloud05.webp';
import cloud6 from '@/public/nxt/cloud03.webp';
import worm from '@/public/nxt/worm.webp';
import bee1 from '@/public/nxt/bee01.webp';
import bee2 from '@/public/nxt/bee02.webp';
import bee3 from '@/public/nxt/bee03.webp';
import bee4 from '@/public/nxt/bee01.webp';
import bee5 from '@/public/nxt/bee02.webp';
import butterfly1 from '@/public/nxt/butterfly01.webp';
import butterfly2 from '@/public/nxt/butterfly02.webp';
import sunflower3 from '@/public/nxt/sunflower03.webp';
import sunflower4 from '@/public/nxt/sunflower04.webp';
import sunflower5 from '@/public/nxt/sunflower05.webp';
import NXT_Logo_Bumper from '@/public/nxt/lvlnxt-logo.webp';
import NXT_Logo_Small from '@/public/nxt/nxt-logo.webp';

import HeaderGap from '../headerGap';
import { Snackbar, Tooltip } from '@mui/material';
import { Facebook, Link, Mail, Twitter } from '@/helpers/preset/svg';
import { transition } from '@/helpers/preset/tailwind';

export const Section8ComponentFixedFront = () => {
  return <div id='section8_fixed_front'></div>;
};
export const Section8ComponentFixedBack = () => {
  return (
    <>
      <div id='section8_fixed_back' />
    </>
  );
};

const Section8MarkerTop = ({ setBgColor, setCaption }) => {
  const { observe } = useInView({
    threshold: 1, // Default is 0
    rootMargin: '-50px 0px',
    onEnter: ({ scrollDirection, entry }) => {
      setCaption(8);
      setBgColor(8);
      // console.log('enter 8 top', scrollDirection.vertical);
    },
    onLeave: ({ scrollDirection, entry }) => {
      // Triggered when the target leaves the viewport
      if (scrollDirection.vertical === 'up') {
        // CURRENT
        setCaption(8);
        setBgColor(8);
      }
      // console.log('leave 8 top', scrollDirection.vertical);
    },
  });

  return <div className='w-full h-0' ref={observe} />;
};

export const Section8ComponentInner = ({ general, setBgColor, setCaption }) => {
  const [baseUrl, setBaseUrl] = useState();
  const [snackBar, setSnackBar] = useState(false);
  const [showShare, setShare] = useState(false);
  const [statusVideo, setStatusVideo] = useState(false);
  const logoUp = useRef();
  const videoMarker = useRef();

  const handleClick = (newState) => () => {
    copy();
    setSnackBar(true);
  };

  const handleClose = () => {
    setSnackBar(false);
  };

  const copy = () => {
    const el = document.createElement('input');
    el.value = baseUrl;
    document.body.appendChild(el);
    el.select();
    // document.execCommand('copy');
    navigator.clipboard.writeText(baseUrl);
    document.body.removeChild(el);
  };

  const handleShareButton = () => {
    const shareData = {
      title: `Locavore® — Revealing NXT `,
      text: `Opening Summer 2023`,
      url: baseUrl,
    };

    if (navigator.share) {
      navigator.share(shareData);
    }
  };

  const resize = () => {
    // console.log(resize);
    if (navigator.share) {
      setShare(true);
    } else {
      setShare(false);
    }
  };

  const playVid = () => {
    const vid = document.getElementById('nxt-video');
    if (statusVideo) {
      vid.pause();
      vid.currentTime = 0;
      setStatusVideo(false);
    } else {
      vid.play();
      setStatusVideo(true);
    }
  };

  const scrollFunction = () => {
    if (videoMarker) {
      if (videoMarker.current.getBoundingClientRect().top > 0) {
        const vid = document.getElementById('nxt-video');
        vid.pause();
        vid.currentTime = 0;
        setStatusVideo(false);
      }
    }

    if (logoUp) {
      if (logoUp.current.getBoundingClientRect().top < 0) {
        const vid = document.getElementById('nxt-video');
        vid.pause();
        vid.currentTime = 0;
        setStatusVideo(false);
      }
    }
  };

  useEffect(() => {
    setBaseUrl(window.location.href);
    resize();
    window.addEventListener('resize', resize, true);
    document.addEventListener('scroll', scrollFunction, false);
    return () => {
      window.removeEventListener('resize', resize, true);
      document.removeEventListener('scroll', scrollFunction, false);
    };
  }, []);

  return (
    <>
      {/* Section 8 */}
      <section
        ref={videoMarker}
        id='trigger8'
        className='trigger relative w-full text-4xl flex flex-col justify-center items-center'
        data-scroll-section
      >
        <Section8MarkerTop setCaption={setCaption} setBgColor={setBgColor} />
        <div className='w-full '>
          <div className='h-screen w-full sticky z-5 top-0 flex justify-center items-center'>
            {/* ANIMATION CONTENT STICKY */}
            <div className='frame w-full h-full relative overflow-hidden'>
              <div
                id='sticky_front'
                className='absolute w-full h-full z-5 top-0 left-0 text-red-400 overflow-hidden'
              >
                <div className='relative max-w-screen-lg w-full h-full flex justify-center items-center mx-auto'>
                  <div className='pointer-events-none font-funkturm tracking-[0.08em] absolute w-full h-full flex flex-col justify-center items-center text-center leading-none text-white  text-5xl md:text-8xl sm:text-6xl'>
                    <div className='pointer-events-auto absolute w-screen flex flex-col h-full z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 md:px-20 sm:max-w-screen-sm md:max-w-[1000px] lg:max-w-screen-xl max-h-[100vh]'>
                      <div className='w-full h-full flex justify-center items-center'>
                        <div
                          id='video-frame'
                          className='relative w-full h-fit aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl opacity-0'
                        >
                          <video
                            id='nxt-video'
                            className='w-full h-full object-contain'
                          >
                            <source src='/nxt/video/nxt.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                          </video>
                          <FancyLink
                            onClick={playVid}
                            className={`absolute top-0 left-0 w-full h-full z-2 pointer-events-auto transition-all duration-300 ${
                              statusVideo ? 'opacity-0' : ''
                            }`}
                          >
                            <div
                              id='nxt-bg'
                              className='transition-all duration-300 bg-black w-full h-full flex justify-center items-center'
                            >
                              <span className='text-2xl transition-all ease-linear hover:opacity-50'>
                                PLAY
                              </span>
                            </div>
                          </FancyLink>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      id='logo-frame'
                      className='absolute w-screen flex flex-col z-[49] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 md:px-20 sm:max-w-screen-sm md:max-w-[1000px] lg:max-w-screen-xl opacity-0 max-h-[100vh]'
                    >
                      <div className='w-full h-full flex justify-center items-center'>
                        ANIMATION CONTENT STICKY
                        <div
                          id='logo-end'
                          className='frame w-full scale-[0.75] md:scale-[0.5] md:translate-y-[-30vh] aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden rounded-xl'
                        >
                          <Image
                            src={NXT_Logo_Bumper}
                            fill
                            style={{
                              objectFit: 'cover',
                            }}
                            alt=''
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className='relative translate-y-[-70%] md:translate-y-[-25%] '>
                      <div
                        id='logo-end'
                        className='absolute opacity-0 top-0 translate-y-[0%] left-1/2 translate-x-[-50%] frame w-32 md:w-44'
                      >
                        <Image src={NXT_Logo_Small} alt='' />
                      </div>
                      <div id='new_locavore_exit'>
                        <div id='new_locavore' className='opacity-0'>
                          <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
                            <span>THE NEW</span> <span>LOCAVORE</span>
                          </div>
                        </div>
                      </div>
                      <div
                        id='locavore_nxt'
                        className='absolute opacity-0 flex flex-col items-center top-0 left-1/2 translate-x-[-50%]'
                      >
                        <div className='flex w-fit flex-col gap-4 lg:flex-row lg:gap-8'>
                          <span className='block grow-[0]'>LOCAVORE</span>{' '}
                          <span className='block grow-[0]'>NXT</span>
                        </div>

                        <div className='relative w-full'>
                          <div
                            id='opening'
                            className='opacity-0 flex flex-col justify-center items-center text-center'
                          >
                            <div className='relative w-full flex flex-col mt-4 '>
                              <div className='relative flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center text-center'>
                                <span>OPENING</span>
                                <span className='relative'>
                                  <div
                                    id='summer'
                                    className='w-28 sm:w-32 md:w-40 absolute top-0 lg:top-1/2 translate-y-[60%] lg:translate-y-[30%] translate-x-[-60%] lg:translate-x-[-30%] opacity-0'
                                  >
                                    <Image src={summer} alt='' />
                                  </div>
                                  2023
                                </span>
                              </div>
                              <div className='relative w-full flex justify-center'>
                                {showShare ? (
                                  <FancyLink
                                    onClick={handleShareButton}
                                    className={`absolute left-1/2 translate-x-[-50%] mt-14 w-fit py-4 px-6 text-sm md:text-xl font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
                                  >
                                    <div
                                      id='worm'
                                      className='absolute top-[-100%] left-0 pointer-events-none w-28 h-28 opacity-0'
                                    >
                                      <Image
                                        alt=''
                                        src={worm}
                                        fill
                                        style={{
                                          objectFit: 'contain',
                                        }}
                                      />
                                    </div>
                                    SHARE
                                  </FancyLink>
                                ) : (
                                  <div className='relative mt-12'>
                                    <div
                                      id='worm'
                                      className='absolute top-[-400%] left-1/2 translate-x-[-50%] pointer-events-none w-20 h-20 opacity-0'
                                    >
                                      <Image
                                        alt=''
                                        src={worm}
                                        fill
                                        style={{
                                          objectFit: 'contain',
                                        }}
                                      />
                                    </div>
                                    <div className='relative flex space-x-7 '>
                                      <Tooltip
                                        title='Facebook'
                                        classes={{ tooltip: 'tooltip' }}
                                      >
                                        <FancyLink
                                          blank={true}
                                          destination={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`}
                                          className={`relative w-4 h-4 ${transition.fade}`}
                                        >
                                          <Facebook
                                            fill={'#fff'}
                                            className={'w-full h-full'}
                                          />
                                        </FancyLink>
                                      </Tooltip>
                                      <Tooltip
                                        title='Twitter'
                                        classes={{ tooltip: 'tooltip' }}
                                      >
                                        <FancyLink
                                          blank={true}
                                          destination={`https://twitter.com/share?url=${baseUrl}`}
                                          className={`relative w-4 h-4 ${transition.fade}`}
                                        >
                                          <Twitter
                                            fill={'#fff'}
                                            className={'w-full h-full'}
                                          />
                                        </FancyLink>
                                      </Tooltip>
                                      <Tooltip
                                        title='Email'
                                        classes={{ tooltip: 'tooltip' }}
                                      >
                                        <FancyLink
                                          destination={`mailto:?subject=${general.share.title}&body=${general.share.message} %0D%0A${baseUrl}`}
                                          className={`relative w-4 h-4 ${transition.fade}`}
                                        >
                                          <Mail
                                            fill={'#fff'}
                                            className={'w-full h-full'}
                                          />
                                        </FancyLink>
                                      </Tooltip>
                                      <Tooltip
                                        title='Copy Link'
                                        classes={{ tooltip: 'tooltip' }}
                                      >
                                        <FancyLink
                                          onClick={handleClick({
                                            vertical: 'top',
                                            horizontal: 'center',
                                          })}
                                          className={`relative min-w-1rem min-h-1rem w-4 h-4 p-[1px] ${transition.fade}`}
                                        >
                                          <Link
                                            fill={'#fff'}
                                            className={'w-full h-full'}
                                          />
                                        </FancyLink>
                                      </Tooltip>
                                      <Snackbar
                                        autoHideDuration={3000}
                                        anchorOrigin={{
                                          vertical: 'bottom',
                                          horizontal: 'center',
                                        }}
                                        ContentProps={{
                                          classes: {
                                            root: 'snackbar',
                                          },
                                        }}
                                        open={snackBar}
                                        onClose={handleClose}
                                        message='LINK COPIED'
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FancyLink
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: 'auto',
                        })
                      }
                      id='backtotop'
                      className='absolute opacity-0 bottom-10 z-50 uppercase pointer-events-auto font-default font-light text-xs text-center tracking-widest text-white select-none'
                    >
                      <div className='block animate-fade-up'>Back to Top</div>
                    </FancyLink>
                  </div>
                </div>
              </div>
              <div
                id='sticky_back'
                className='absolute overflow-hidden w-full h-full z-1 top-0 left-0 flex justify-center items-center'
              >
                <div
                  id='cloud_group'
                  className='absolute w-full h-full opacity-0'
                >
                  <div
                    id='cloud1_s8'
                    className='absolute top-1/2 left-1/2 translate-y-[-100%] translate-x-[-100%] w-[27rem] h-40'
                  >
                    <Image
                      src={cloud1}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      alt=''
                    />
                  </div>
                  <div
                    id='cloud2_s8'
                    className='absolute top-1/2 left-1/2 translate-y-[210%] translate-x-[-205%] scale-[2] w-[27rem] h-40'
                  >
                    <Image
                      src={cloud2}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      alt=''
                    />
                  </div>
                  <div
                    id='cloud3_s8'
                    className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-70%] w-[27rem] h-40'
                  >
                    <Image
                      src={cloud3}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      alt=''
                    />
                  </div>
                  <div
                    id='cloud4_s8'
                    className='absolute top-1/2 left-1/2 translate-y-[-10%] translate-x-[-90%] w-36 h-36'
                  >
                    <Image
                      alt=''
                      src={cloud4}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    id='cloud5_s8'
                    className='absolute top-1/2 left-1/2  translate-y-[-255%] translate-x-[-130%] w-[27rem] h-40'
                  >
                    <Image
                      alt=''
                      src={cloud5}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    id='cloud6_s8'
                    className='absolute top-1/2 left-1/2 translate-y-[70%] translate-x-[117%] w-[27rem] h-40'
                  >
                    <Image
                      alt=''
                      src={cloud6}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
                <div className='group_s8'>
                  <div id='group_s8_1' className=' opacity-0'>
                    <div className='absolute top-1/2 left-1/2 translate-y-[450%] translate-x-[-700%] w-12 h-12'>
                      <Image
                        alt=''
                        src={bee1}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[250%] translate-x-[-900%] w-14 h-14'>
                      <Image
                        alt=''
                        src={bee2}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-500%] translate-x-[-240%] w-14 h-14'>
                      <Image
                        alt=''
                        src={bee3}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  </div>
                  <div id='group_s8_2' className=' opacity-0'>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-300%] translate-x-[250%] w-20 h-20'>
                      <Image
                        alt=''
                        src={butterfly1}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-200%] translate-x-[-300%] w-20 h-20'>
                      <Image
                        alt=''
                        src={butterfly2}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-140%] translate-x-[-430%] w-28 h-28'>
                      <Image
                        alt=''
                        src={sunflower3}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-140%] translate-x-[450%] w-24 h-24'>
                      <Image
                        alt=''
                        src={sunflower4}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  </div>
                  <div id='group_s8_3' className=' opacity-0'>
                    <div className='absolute top-1/2 left-1/2 translate-y-[280%] translate-x-[380%] w-20 h-20'>
                      <Image
                        alt=''
                        src={sunflower5}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-330%] translate-x-[200%] w-12 h-12'>
                      <Image
                        alt=''
                        src={bee4}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-y-[-90%] translate-x-[50%] w-14 h-14'>
                      <Image
                        alt=''
                        src={bee5}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='video-to-logo' className='w-full min-h-[100vh] ' />
          <div ref={logoUp} id='logo-moveup' className='w-full h-screen ' />
          <div id='enter_nxt_logo' className='h-[100vh] w-full ' />
          <div id='enter_locavore_nxt' className='h-[100vh] w-full' />
          <div id='enter_opening' className='h-[25vh] w-full ' />
          <div
            id='enter_summer'
            className='h-[25vh] w-full pointer-events-none'
          />
          <div id='enter_cloud' className='relative w-full  '>
            <div
              id='enter_cloud_opacity'
              className='absolute h-[100vh] w-full top-0'
            />
            <div
              id='enter_bug_flower'
              className='relative h-[150vh] w-full mt-[25vh] '
            >
              <div
                id='worm_enter'
                className='h-[25vh] w-full absolute top-[100vh]'
              />
            </div>
            <div id='gap' className='h-[50vh] w-full' />
          </div>
        </div>
      </section>
    </>
  );
};

export const Section8AnimationOBJMobile = [
  // VIDEO ENTER
  () => {
    const id = 'video-enter'; // animation id
    const elem = document.querySelector('#video-frame');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#trigger8', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
            y: '0vh',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // VIDEO TO LOGO
  () => {
    const id = 'video-to-logo'; // animation id
    const elem = document.querySelector('#video-frame');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#video-to-logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'bottom 100%',
        end: 'bottom 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  }, // LOGO APPEAR
  () => {
    const id = 'logo-appear'; // animation id
    const elem = document.querySelector('#logo-end');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            y: '0%',
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-100%',
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // NEW LOCAVORE ENTER (LOGO)
  () => {
    const id = 'new_locavore_enter'; // animation id
    const elem = document.querySelector('#new_locavore');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 60%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // NEW LOCAVORE ENTER
  () => {
    const id = 'new_locavore_enter'; // animation id
    const elem = document.querySelector('#new_locavore');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 60%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // NEW LOCAVORE EXIT
  () => {
    const id = 'new_locavore_exit'; // animation id
    const elem = document.querySelector('#new_locavore_exit');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_locavore_nxt', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // LOCAVORE NXT ENTER
  () => {
    const id = 'locavore_nxt_enter'; // animation id
    const elem = document.querySelector('#locavore_nxt');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_locavore_nxt', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 75%',
        end: 'top 25%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // OPENING ENTER
  () => {
    const id = 'opening_enter'; // animation id
    const elem = document.querySelector('#opening');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_opening', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // BACK TO TOP ENTER
  () => {
    const id = 'opening-btt'; // animation id
    const elem = document.querySelector('#backtotop');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_opening', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // SUMMER ENTER
  () => {
    const id = 'enter_summer'; // animation id
    const elem = document.querySelector('#summer');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_summer', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD OPACITY ENTER
  () => {
    const id = 'cloud-opacity-in'; // animation id
    const elem = document.querySelector('#cloud_group');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_opacity', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD1 ENTER
  () => {
    const id = 'cloud1_s8_enter'; // animation id
    const elem = document.querySelector('#cloud1_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-100%',
            y: '-100%',
            scale: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '102%',
            y: '-281%',
            scale: 1.5,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD2 ENTER
  () => {
    const id = 'cloud2_s8_enter'; // animation id
    const elem = document.querySelector('#cloud2_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '30%',
            scale: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-205%',
            y: '210%',
            scale: 2,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD3 ENTER
  () => {
    const id = 'cloud3_s8_enter'; // animation id
    const elem = document.querySelector('#cloud3_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '-50%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-213%',
            y: '-50%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD4 ENTER
  () => {
    const id = 'cloud4_s8_enter'; // animation id
    const elem = document.querySelector('#cloud4_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-90%',
            y: '-10%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '260%',
            y: '10%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD5 ENTER
  () => {
    const id = 'cloud5_s8_enter'; // animation id
    const elem = document.querySelector('#cloud5_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '-80%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-130%',
            y: '-255%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD6 ENTER
  () => {
    const id = 'cloud6_s8_enter'; // animation id
    const elem = document.querySelector('#cloud6_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-45%',
            y: '40%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '117%',
            y: '70%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // GROUP S8 1 ENTER
  () => {
    const id = 'group_s8_1_enter'; // animation id
    const elem = document.querySelector('#group_s8_1');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bug_flower', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 66%',
        end: 'top 44%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // GROUP S8 2 ENTER
  () => {
    const id = 'group_s8_2_enter'; // animation id
    const elem = document.querySelector('#group_s8_2');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bug_flower', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 44%',
        end: 'top 22%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // GROUP S8 3 ENTER
  () => {
    const id = 'group_s8_3_enter'; // animation id
    const elem = document.querySelector('#group_s8_3');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bug_flower', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 22%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // WORM ENTER
  () => {
    const id = 'worm_enter'; // animation id
    const elem = document.querySelector('#worm');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#worm_enter', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
export const Section8AnimationOBJ = [
  // VIDEO ENTER
  () => {
    const id = 'video-enter'; // animation id
    const elem = document.querySelector('#video-frame');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#trigger8', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
            y: '0vh',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // VIDEO TO LOGO
  () => {
    const id = 'video-to-logo'; // animation id
    const elem = document.querySelector('#video-frame');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#video-to-logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'bottom 100%',
        end: 'bottom 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  }, // LOGO APPEAR
  () => {
    const id = 'logo-appear'; // animation id
    const elem = document.querySelector('#logo-end');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            y: '0%',
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            y: '-100%',
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // NEW LOCAVORE ENTER (LOGO)
  () => {
    const id = 'new_locavore_enter'; // animation id
    const elem = document.querySelector('#new_locavore');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 60%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // NEW LOCAVORE ENTER
  () => {
    const id = 'new_locavore_enter'; // animation id
    const elem = document.querySelector('#new_locavore');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_nxt_logo', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 60%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // NEW LOCAVORE EXIT
  () => {
    const id = 'new_locavore_exit'; // animation id
    const elem = document.querySelector('#new_locavore_exit');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_locavore_nxt', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // LOCAVORE NXT ENTER
  () => {
    const id = 'locavore_nxt_enter'; // animation id
    const elem = document.querySelector('#locavore_nxt');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_locavore_nxt', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 75%',
        end: 'top 25%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // BACK TO TOP ENTER
  () => {
    const id = 'opening-btt'; // animation id
    const elem = document.querySelector('#backtotop');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_opening', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // OPENING ENTER
  () => {
    const id = 'opening_enter'; // animation id
    const elem = document.querySelector('#opening');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_opening', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // SUMMER ENTER
  () => {
    const id = 'enter_summer'; // animation id
    const elem = document.querySelector('#summer');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_summer', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    };

    // Input Animation
    const animation = [
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD OPACITY ENTER
  () => {
    const id = 'cloud-opacity-in'; // animation id
    const elem = document.querySelector('#cloud_group');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud_opacity', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD1 ENTER
  () => {
    const id = 'cloud1_s8_enter'; // animation id
    const elem = document.querySelector('#cloud1_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-100%',
            y: '-100%',
            scale: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '102%',
            y: '-281%',
            scale: 1.5,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD2 ENTER
  () => {
    const id = 'cloud2_s8_enter'; // animation id
    const elem = document.querySelector('#cloud2_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '30%',
            scale: 1,
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-205%',
            y: '210%',
            scale: 2,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD3 ENTER
  () => {
    const id = 'cloud3_s8_enter'; // animation id
    const elem = document.querySelector('#cloud3_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '-50%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-213%',
            y: '-50%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD4 ENTER
  () => {
    const id = 'cloud4_s8_enter'; // animation id
    const elem = document.querySelector('#cloud4_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-90%',
            y: '-10%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '260%',
            y: '10%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD5 ENTER
  () => {
    const id = 'cloud5_s8_enter'; // animation id
    const elem = document.querySelector('#cloud5_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-70%',
            y: '-80%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '-130%',
            y: '-255%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // CLOUD6 ENTER
  () => {
    const id = 'cloud6_s8_enter'; // animation id
    const elem = document.querySelector('#cloud6_s8');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_cloud', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'bottom 52%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            x: '-45%',
            y: '40%',
          },
        ],
      },
      {
        to: [
          elem,
          {
            x: '117%',
            y: '70%',
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // GROUP S8 1 ENTER
  () => {
    const id = 'group_s8_1_enter'; // animation id
    const elem = document.querySelector('#group_s8_1');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bug_flower', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 66%',
        end: 'top 44%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // GROUP S8 2 ENTER
  () => {
    const id = 'group_s8_2_enter'; // animation id
    const elem = document.querySelector('#group_s8_2');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bug_flower', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 44%',
        end: 'top 22%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // GROUP S8 3 ENTER
  () => {
    const id = 'group_s8_3_enter'; // animation id
    const elem = document.querySelector('#group_s8_3');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#enter_bug_flower', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 22%',
        end: 'top 0%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
  // WORM ENTER
  () => {
    const id = 'worm_enter'; // animation id
    const elem = document.querySelector('#worm');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: '#worm_enter', // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 100%',
        end: 'top 50%',
      },
    };

    // Input Animation
    const animation = [
      {
        set: [
          elem,
          {
            opacity: 0,
          },
        ],
      },
      {
        to: [
          elem,
          {
            opacity: 1,
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
