import React from 'react';

const Hero = () => {
  return (
    <div className='px-[2rem]  lg:px-[19rem] py-[6.25rem]'>
      <div className='flex justify-center items-center flex-col gap-[2.5rem]'>
        <h1 className='font-montserrat text-[3.5rem] font-bold text-center'>
          Get It Together And Manage Projects the Right Way.
        </h1>
        <p className='font-raleway text-lg font-normal text-textSecondary text-center lg:w-[580px]'>
          udix is the world’s first smart workspace. We bring all your team’s
          content together while letting you use the tools you love.
        </p>
        <div className='flex flex-wrap justify-center gap-[24px]'>
          <input
            type='email'
            placeholder='Email'
            className='border border-bgGray rounded  md:w-[350px] h-[50px] px-[40px] font-raleway text-[16px] font-normal'
          />
          <button className='bg-primary rounded text-textBase font-raleway text-base font-medium px-[38px] '>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
