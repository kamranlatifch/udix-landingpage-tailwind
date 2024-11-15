import React from 'react';
import ValuesImg from '../assets/images/ourValuesImg.png';
import { ArrowCircleNextSvg } from '@assets/svgs';

const OurValues = () => {
  return (
    <div className=' flex flex-col lg:flex-row px-[3.125rem] py-[5rem] lg:px-[11.25rem] lg:py-[8.125rem] gap-16 justify-center items-center'>
      <img src={ValuesImg} alt='our-values' />
      <div className='flex flex-col gap-[3.125rem]'>
        <div className='flex flex-col gap-8'>
          <h2 className='h2__wrapper'>Creativity & Technology</h2>
          <p className='p__wrapper'>
            Some networks believe that by only offering a basic tracking system
            their affiliates can reach a high level of creativity. We like to
            set the bar a lot higher by offering you cutting-edge tech solutions
            together with a team of creative experts on-call with the tools you
            need based on real-time results
          </p>
        </div>

        <div className='flex flex-col gap-8 mt-3'>
          <h2 className='h2__wrapper'>Defines our true value</h2>
          <p className='p__wrapper'>
            <ul className='list-none pl-4 space-y-2'>
              <li className='p__wrapper list-item relative'>
                <span className='absolute left-[-1rem]  text-primary text-[1.25rem]'>
                  •
                </span>
                Some networks believe that by only offering a basic tracking
                system
              </li>
              <li className='p__wrapper list-item relative'>
                <span className='absolute left-[-1rem]  text-primary text-[1.25rem]'>
                  •
                </span>
                Some networks believe that by only offering a basic tracking
                system
              </li>{' '}
              <li className='p__wrapper list-item relative'>
                <span className='absolute left-[-1rem]  text-primary text-[1.25rem]'>
                  •
                </span>
                Some networks believe that by only offering a basic tracking
                system
              </li>
            </ul>
          </p>
        </div>

        <div className='flex gap-[0.625rem]'>
          <h4 className='font-montserrat text-base font-extrabold text-primary'>
            Check our solutions
          </h4>
          <ArrowCircleNextSvg />
        </div>
      </div>
    </div>
  );
};

export { OurValues };
