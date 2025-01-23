import React from 'react';
import ResumePage1 from '../Images/Mitchell Else Resume 2025p1.webp';
import ResumePage2 from '../Images/Mitchell Else Resume 2025p2.webp';

const ResumePage = () => {
  return (
    <div className='flex justify-center w-full p-10'>
      <div className='flex-col'>
        <div className='mb-10 p-[3px] md:p-1 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-xl'>
          <img alt='Resume' className='w-full max-w-5xl rounded-xl md:rounded-lg' src={ResumePage1} />
        </div>
        <div className='p-[3px] md:p-1 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-xl'>
          <img alt='Resume' className='w-full max-w-5xl rounded-xl md:rounded-lg' src={ResumePage2} />
        </div>
      </div>
    </div>
  )
}

export default ResumePage;