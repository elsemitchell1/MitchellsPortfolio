import React from 'react';
import Resume from '../Images/Mitchell Else - Resume 2023.webp'

const ResumePage = () => {
  return (
    <div className='flex justify-center w-full p-10'>
      <div className='p-[3px] md:p-1 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-xl'>
        <img alt='Resume' className='w-full max-w-5xl rounded-xl md:rounded-lg' src={Resume} />
      </div>
    </div>
  )
}

export default ResumePage;