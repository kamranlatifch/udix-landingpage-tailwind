import React from 'react';
import Logo from '../assets/svgs/logo';
import Facebook from '../assets/svgs/FacebookIcon';
import YouTube from '../assets/svgs/YouTubeIcon';
import Linkedin from '../assets/svgs/LinkedinIcon';
import GooglePlus from '../assets/svgs/GooglePlusIcon';
import Skype from '../assets/svgs/SkypeIcon';

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row px-[30px] lg:px-[100px] justify-between items-center py-[66px] bg-bgFooter'>
      <div className='flex flex-col max-w-[500px] gap-[30px]'>
        <Logo color='#381DDB' />
        <p className='p__wrapper'>
          udix is a market-leading provider of digital marketing services, using
          proprietary tools and methodologies to generate high-value engagement
          for our customers.
        </p>
      </div>
      <div className='flex flex-col gap-[10px] lg:gap-[40px]'>
        <div className='flex flex-col md:flex-row items-center gap-[10px] lg:gap-[40px]'>
          <div className='flex flex-row items-center gap-[10px] md:gap-[50px] font-montserrat'>
            <p className='nav__wrapper'>HOME</p>
            <p className='nav__wrapper'>BLOG</p>
            <p className='nav__wrapper'>PRODUCT</p>
            <p className='nav__wrapper'>CONTACT</p>
          </div>
          <div className='flex justify-between font-montserrat'>
            <button className='text-primary text-sm font-semibold px-4 py-2'>
              SIGN IN
            </button>
            <button className='text-primary text-sm font-semibold px-4 py-2 border border-primary '>
              SIGN UP
            </button>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end gap-[30px] items-center'>
          <Facebook />
          <YouTube />
          <Linkedin />
          <GooglePlus />
          <Skype />
        </div>
      </div>
    </div>
  );
};

export default Footer;
