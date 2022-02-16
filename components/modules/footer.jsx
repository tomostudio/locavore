import { useEffect, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from './subscribe';

import Container from './container';
import Image from 'next/image';
import FancyLink from '../utils/fancyLink';

const Footer = ({ className, footer }) => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <footer
      className={`w-full h-auto max-md:h-full flex bg-offBlack text-white px-0 py-14 ${className}`}
    >
      <Container className='flex max-md:flex-col max-md:px-6'>
        <div className='h-full max-md:space-y-10 w-full max-md:w-full flex flex-col'>
          <div className='w-full '>
            <span className='text-sm'>
              UBUD{' '}
              {time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
          {/* Subscription Form  */}
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <SubscribeForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
        <div className='w-full h-full max-md:mt-10 max-md:space-y-10 flex flex-col justify-between'>
          <div className='w-auto h-full space-x-6 flex justify-end max-md:justify-start'>
            {footer.footerLink && footer.footerLink.instagram && (
              <FancyLink
                destination={footer.footerLink.instagram.link}
                blank={true}
                className='relative w-16px h-16px'
              >
                <Image
                  src={`/instagram-white.png`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                />
              </FancyLink>
            )}
            {footer.footerLink && footer.footerLink.facebook && (
              <FancyLink
                destination={footer.footerLink.facebook.link}
                blank={true}
                className='relative w-16px h-16px'
              >
                <Image
                  src={`/facebook-white.png`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                />
              </FancyLink>
            )}
            {footer.footerLink && footer.footerLink.youtube && (
              <FancyLink
                destination={footer.footerLink.youtube.link}
                blank={true}
                className='relative w-16px h-16px'
              >
                <Image
                  src={`/youtube-white.png`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                />
              </FancyLink>
            )}
            {footer.footerLink && footer.footerLink.linkedin && (
              <FancyLink
                destination={footer.footerLink.linkedin.link}
                blank={true}
                className='relative w-16px h-16px'
              >
                <Image
                  src={`/linkedin-white.png`}
                  alt={'Locavore'}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                />
              </FancyLink>
            )}
          </div>
          <div className='w-full h-full flex justify-end max-md:justify-start items-end max-md:items-start'>
            <span className='text-sm'>{footer.creditText}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
