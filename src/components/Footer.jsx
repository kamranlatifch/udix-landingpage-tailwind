import React from 'react';

import {
  FacebookIcon,
  YouTubeIcon,
  LinkedinIcon,
  GooglePlusIcon,
  SkypeIcon,
  Logo,
} from '@assets/svgs';

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row px-[1.875rem] lg:px-[6.25rem] justify-between items-center py-[4.125rem] bg-bgFooter'>
      <div className='flex flex-col max-w-[31.25rem] gap-[1.875rem]'>
        <Logo className='text-[#381DDB]' />
        <p className='p__wrapper'>
          udix is a market-leading provider of digital marketing services, using
          proprietary tools and methodologies to generate high-value engagement
          for our customers.
        </p>
      </div>
      <div className='flex flex-col gap-[0.625rem] lg:gap-[2.5rem]'>
        <div className='flex flex-col md:flex-row items-center gap-[0.625rem] lg:gap-[2.5rem]'>
          <nav className='flex flex-row items-center gap-[0.625rem] md:gap-[3.125rem] font-montserrat'>
            <a className='nav__wrapper'>HOME</a>
            <a className='nav__wrapper'>BLOG</a>
            <a className='nav__wrapper'>PRODUCT</a>
            <a className='nav__wrapper'>CONTACT</a>
          </nav>
          <div className='flex justify-between font-montserrat'>
            <button className='text-primary text-sm font-semibold px-4 py-2'>
              SIGN IN
            </button>
            <button className='text-primary text-sm font-semibold px-4 py-2 border border-primary '>
              SIGN UP
            </button>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end gap-[1.875rem] items-center'>
          <FacebookIcon />
          <YouTubeIcon />
          <LinkedinIcon />
          <GooglePlusIcon />
          <SkypeIcon />
        </div>
      </div>
    </div>
  );
};

export { Footer };
