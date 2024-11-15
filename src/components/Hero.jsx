import React from 'react';

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-[2.5rem] px-[2rem]  lg:px-[19rem] py-[6.25rem]'>
      <h1 className='font-montserrat text-[3.5rem] font-bold text-center'>
        Get It Together And Manage Projects the Right Way.
      </h1>
      <p className='font-raleway text-lg font-normal text-textSecondary text-center lg:w-[36.25rem]'>
        udix is the world’s first smart workspace. We bring all your team’s
        content together while letting you use the tools you love.
      </p>
      <div className='flex flex-wrap justify-center gap-[1.5rem]'>
        <input
          type='email'
          placeholder='Email'
          className='border border-bgGray rounded  md:w-[21.875rem] h-[3.125rem] px-[2.5rem] font-raleway text-[1rem] font-normal'
        />
        <button className='bg-primary rounded text-textBase font-raleway text-base font-medium px-[2.375rem] '>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export { Hero };
