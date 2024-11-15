import React from 'react';
import { Logo } from '@assets/svgs';

const Header = () => {
  return (
    <div className='container hidden md:flex py-[3.125rem] justify-between items-center'>
      <div className='flex items-center gap-[7.5rem]'>
        <div className='svg'>
          <Logo />
        </div>
        <nav className='flex items-center gap-[3.125rem] font-montserrat'>
          <a className='nav__wrapper'>HOME</a>
          <a className='nav__wrapper'>BLOG</a>
          <a className='nav__wrapper'>PRODUCT</a>
          <a className='nav__wrapper'>CONTACT</a>
        </nav>
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
  );
};

export { Header };
