import React, { useEffect, useState } from 'react';
import 'intersection-observer'; // optional polyfill
import Image from 'next/legacy/image';
import Marquee from 'react-fast-marquee';

// IMPORT LOCAL IMAGE
import collab1 from '@/public/nxt2/collab1.png';
import collab2 from '@/public/nxt2/collab2.png';
import FancyLink from '@/components/utils/fancyLink';
import { useMediaQuery } from '@/helpers/functional/checkMedia';
import urlFor from '@/helpers/sanity/urlFor';

export const Section4ComponentInner = ({ dataSection4 }) => {
  const [dataSection4Split, setDataSection4] = useState([]);

  useEffect(() => {
    // Ambil Data Collaborators
    // Randomize (shuffle)
    // Truncuate (15 / 20 / 25)
    // Set Random Big (minimum per 5 Jarak(boleh lebih))
    // Set Random Empty Space (Ga boleh ada 4 empty space continuosly)

    // UseEffect supaya ga retrigger
    // ini complicated sekali array adjustmentnya
    const tambahData = Array(10).fill(dataSection4[0]); // duplicate array 10 times
    const _dataSection = [];
    for (let i = 0; i < tambahData.length; i += 5) {
      _dataSection.push(tambahData.slice(i, i + 5));
    }
    // console.log(dataSection4[0], _dataSection)
    for (var i = 0; i < _dataSection.length; i++) {
      if (_dataSection[i].length === 5) {
        // Mendapatkan index acak di dalam array pecahan (kecuali awal dan akhir)
        var randomIndex =
          Math.floor(Math.random() * (_dataSection[i].length - 2)) + 1;

        // Menambah properti size pada elemen object
        _dataSection[i][randomIndex] = {
          ..._dataSection[i][randomIndex],
          size: 'big',
        };

        // Menambahkan elemen object kosong pada posisi acak (indeks 0 hingga 4)
        var emptyIndex = Math.floor(Math.random() * 5);
        _dataSection[i].splice(emptyIndex, 0, {});
      }
      setDataSection4(_dataSection);
    }
  }, []);
  return (
    <section className='relative w-full'>
      <div id='enter-collab' className='relative z-10 top-0 w-full h-screen '>
        <div
          id='section4_title'
          className='relative w-full h-full setflex-center-row '
        >
          <span className='hidden md:block text-[#BEC29D] whitespace-pre-line text-center font-funkturm text-m-additionalTitle sm:text-[4rem] md:text-[5rem] lg:text-d-additionalTitle leading-full drop-shadow-collaborators'>
            OUR
            <br />
            COLLABORATORS
          </span>
          <div
            id='slider_collab'
            className='absolute top-0 left-0 -z-1 w-full h-full setflex-center pb-20 opacity-0'
          >
            <span className='text-[#BEC29D] mb-7 whitespace-pre-line text-center font-funkturm text-m-additionalTitle leading-full drop-shadow-collaborators md:hidden'>
              {useMediaQuery('(min-width: 400px)') ? (
                <>
                  OUR
                  <br />
                  COLLABORATORS
                </>
              ) : (
                <>
                  OUR
                  <br />
                  COLLABO—
                  <br />
                  RATORS
                </>
              )}
            </span>

            <Marquee gradient={false}>
              <div className='h-[35vh] sm:h-[40vh] md:h-[60vh] grid grid-flow-col auto-cols-max grid-rows-nxt gap-3 pl-3 md:gap-6 md:pl-6'>
                {dataSection4Split.length > 0 &&
                  dataSection4Split
                    .reduce((prev, next) => prev.concat(next))
                    .map((data, id) => {
                      return Object.keys(data).length > 0 ? (
                        data.size ? (
                          <div
                            key={id}
                            className='h-full aspect-1 row-span-2 col-span-2 drop-shadow-collaborators'
                          >
                            <Image
                              src={urlFor(data.image).width(510).url()}
                              alt={data.image.alt}
                              layout='fill'
                              objectFit='cover'
                              placeholder='blur'
                              blurDataURL={urlFor(data.image)
                                .blur(2)
                                .format('webp')
                                .width(100)
                                .url()}
                            />
                          </div>
                        ) : (
                          <div
                            key={id}
                            className='relative h-full aspect-1 drop-shadow-collaborators'
                          >
                            <Image
                              src={urlFor(data.image).width(510).url()}
                              alt={data.image.alt}
                              layout='fill'
                              objectFit='cover'
                              placeholder='blur'
                              blurDataURL={urlFor(data.image)
                                .blur(2)
                                .format('webp')
                                .width(100)
                                .url()}
                            />
                          </div>
                        )
                      ) : (
                        <div key={id} className='h-full aspect-1' />
                      );
                    })}
              </div>
            </Marquee>
          </div>
          <div className='absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-end'>
            <FancyLink
              className={`w-fit py-4 px-6 mb-20 lg:mb-[4.5rem] text-d-small text-white font-default tracking-widest transition-all ease-linear hover:bg-white border hover:text-black border-white rounded-xl`}
              destination='/nxt/collaborators'
            >
              VIEW OUR COLLABORATORS
            </FancyLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Section4AnimationOBJ = [
  // SLIDER COLLAB ENTER
  () => {
    const id = 'slider-collab-enter'; // animation id
    const elem = document.querySelector('#slider_collab');
    const settings = {
      scrollTrigger: {
        id: id,
        trigger: document.querySelector('#enter-collab'), // which section will be tracked as the scroll trigger
        scrub: 0.5,
        start: 'top 75%',
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
          },
        ],
      },
    ];

    return { id, elem, settings, animation };
  },
];
