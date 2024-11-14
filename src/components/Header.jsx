import React from 'react';
import Logo from '../assets/svgs/logo';

const Header = () => {
  return (
    <div className='container py-[50px] flex justify-between items-center'>
      <div className='flex items-center gap-[120px]'>
        <div className='svg'>
          <Logo />
        </div>
        <div className='flex items-center gap-[50px] font-montserrat'>
          <p className='nav__wrapper'>HOME</p>
          <p className='nav__wrapper'>BLOG</p>
          <p className='nav__wrapper'>PRODUCT</p>
          <p className='nav__wrapper'>CONTACT</p>
        </div>
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

export default Header;
