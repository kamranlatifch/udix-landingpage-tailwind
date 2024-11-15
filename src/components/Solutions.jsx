import React from 'react';
import { ArrowNext, CrmSvg, MobileApp, WebServices } from '@assets/svgs';

const Solutions = () => {
  return (
    <div className='flex flex-col  justify-center items-center'>
      <div className='flex flex-col px-[3.125rem] lg:px-[14.6875rem] justify-center items-center gap-[2.5rem]'>
        <h2 className='h2__wrapper'>
          Solutions that will change your business forever
        </h2>
        <p className='p__wrapper text-center'>
          Some networks believe that by only offering a basic tracking system
          their affiliates can reach a high level of creativity. We like to set
          the bar a lot higher by offering you cutting-edge tech solutions
          together with a team of creative experts.
        </p>
      </div>

      <div className='flex flex-wrap justify-center lg:justify-between items-center mt-[3.75rem] gap-[4.6875rem]'>
        <div className='flex flex-col px-[2.8125rem] py-[1.8125rem] border border-primary gap-[2.5rem] group hover:text-textPrimary hover:bg-primary'>
          <WebServices />
          <div className='flex flex-col gap-[1.0625rem] max-w-[13.75rem]'>
            <h3 className='h3__wrapper text-secondary group-hover:text-textBase'>
              Web Services
            </h3>
            <p className='p__wrapper text-textSecondary group-hover:text-textBase'>
              Some networks believe that by only offering.{' '}
            </p>
          </div>
          <ArrowNext />
        </div>

        <div className='flex flex-col px-[2.8125rem] py-[1.8125rem] border border-primary gap-[2.5rem] group hover:text-textPrimary hover:bg-primary'>
          <CrmSvg />
          <div className='flex flex-col gap-[1.0625rem] max-w-[13.75rem]'>
            <h3 className='h3__wrapper text-secondary group-hover:text-textBase'>
              CRM Product
            </h3>
            <p className='p__wrapper text-textSecondary group-hover:text-textBase'>
              Some networks believe that by only offering.{' '}
            </p>
          </div>
          <ArrowNext />
        </div>
        <div className='flex flex-col px-[2.8125rem] py-[1.8125rem] border border-primary gap-[2.5rem] group hover:text-textPrimary hover:bg-primary'>
          <MobileApp />
          <div className='flex flex-col gap-[1.0625rem] max-w-[13.75rem]'>
            <h3 className='h3__wrapper text-secondary group-hover:text-textBase'>
              Mobile App
            </h3>
            <p className='p__wrapper text-textSecondary group-hover:text-textBase'>
              Some networks believe that by only offering.{' '}
            </p>
          </div>
          <ArrowNext />
        </div>
      </div>
    </div>
  );
};

export { Solutions };
