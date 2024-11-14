// import React from 'react';

// const SignupNow = () => {
//   return (
//     <div className='pt-[130px]'>
//       <div className='text-center bg-signup-bg p-4 bg-cover bg-center min-h-[500px] flex  justify-center'>
//         <div className='flex flex-col items-center gap-[100px] pt-[118px]'>
//           <div className='flex items-center gap-[165px]'>
//             <div className='flex flex-col'>
//               <h4 className='h4__wrapper'>1,000 M</h4>
//               <p className='p__wrapper text-textBase'>
//                 Clicks annually through system
//               </p>
//             </div>
//             <div className='flex flex-col'>
//               <h4 className='h4__wrapper'>4.8 M</h4>
//               <p className='p__wrapper text-textBase'>
//                 Relationships created annually
//               </p>
//             </div>
//             <div className='flex flex-col'>
//               <h4 className='h4__wrapper'>100 +</h4>
//               <p className='p__wrapper text-textBase'>Advertisers with udix</p>
//             </div>
//           </div>
//           <button className='bg-primary text-textBase px-[24px] py-[16px] max-w-[150px] text-center'>
//             Sign Up Now!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupNow;

import React from 'react';

const SignupNow = () => {
  return (
    <div className='pt-[130px]'>
      <div className='text-center w-full bg-signup-bg p-4 bg-cover bg-center min-h-[500px] flex justify-center'>
        <div className='flex flex-col items-center gap-8 md:gap-[100px] pt-12 md:pt-[118px]'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-[80px] lg:gap-[165px]'>
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
          <button className='bg-primary text-textBase px-6 py-4 max-w-[150px] text-center text-sm md:text-base'>
            Sign Up Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupNow;
