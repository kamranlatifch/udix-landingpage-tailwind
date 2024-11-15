import React from 'react';

const SignupNow = () => {
  return (
    <div className='relative mt-[130px] text-center w-full bg-signup-bg p-4 bg-cover bg-center min-h-[31.25rem] flex justify-center'>
      <div className='absolute inset-0 bg-[#00000075]'></div>
      <div className='relative flex flex-col items-center gap-8 md:gap-[6.25rem] pt-12 md:pt-[7.375rem]'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-[5rem] lg:gap-[10.3125rem]'>
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='h4__wrapper text-3xl md:text-4xl'>1,000 M</h4>
            <p className='p__wrapper text-textBase text-sm md:text-base'>
              Clicks annually through system
            </p>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='h4__wrapper text-3xl md:text-4xl'>4.8 M</h4>
            <p className='p__wrapper text-textBase text-sm md:text-base'>
              Relationships created annually
            </p>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='h4__wrapper text-3xl md:text-4xl'>100 +</h4>
            <p className='p__wrapper text-textBase text-sm md:text-base'>
              Advertisers with udix
            </p>
          </div>
        </div>
        <button className='bg-primary font-raleway rounded text-textBase px-6 py-4 max-w-[9.375rem] text-center text-sm md:text-base'>
          Sign Up Now!
        </button>
      </div>
    </div>
  );
};

export { SignupNow };
