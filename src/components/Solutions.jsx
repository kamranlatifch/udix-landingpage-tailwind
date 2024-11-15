import React from 'react';
import ArrowNext from '../assets/svgs/ArrowNext';
import WebIcon from '../assets/svgs/webServices';
import CRMIcon from '../assets/svgs/crmSvg';
import MobileAppIcon from '../assets/svgs/mobileApp';

const Solutions = () => {
  return (
    <div className='flex flex-col  justify-center items-center'>
      <div className='flex flex-col px-[50px] lg:px-[235px] justify-center items-center gap-[40px]'>
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

      <div className='flex flex-wrap justify-center lg:justify-between items-center mt-[60px] gap-[75px]'>
        <div className='flex flex-col px-[45px] py-[29px] border border-primary gap-[40px] group hover:text-textPrimary hover:bg-primary'>
          <WebIcon />
          <div className='flex flex-col gap-[17px] max-w-[220px]'>
            <h3 className='h3__wrapper text-secondary group-hover:text-textBase'>
              Web Services
            </h3>
            <p className='p__wrapper text-textSecondary group-hover:text-textBase'>
              Some networks believe that by only offering.{' '}
            </p>
          </div>
          <ArrowNext />
        </div>

        <div className='flex flex-col px-[45px] py-[29px] border border-primary gap-[40px] group hover:text-textPrimary hover:bg-primary'>
          <CRMIcon />
          <div className='flex flex-col gap-[17px] max-w-[220px]'>
            <h3 className='h3__wrapper text-secondary group-hover:text-textBase'>
              CRM Product
            </h3>
            <p className='p__wrapper text-textSecondary group-hover:text-textBase'>
              Some networks believe that by only offering.{' '}
            </p>
          </div>
          <ArrowNext />
        </div>
        <div className='flex flex-col px-[45px] py-[29px] border border-primary gap-[40px] group hover:text-textPrimary hover:bg-primary'>
          <MobileAppIcon />
          <div className='flex flex-col gap-[17px] max-w-[220px]'>
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

export default Solutions;
