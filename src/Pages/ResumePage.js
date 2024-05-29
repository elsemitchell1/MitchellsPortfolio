import React from 'react';
import Resume from '../Images/Mitchell Else - Resume 2023.webp'

const ResumePage = () => {
  return (
    <div className='flex justify-center w-full p-10'>
      <img alt='Resume' className='w-full max-w-5xl' src={Resume} />
    </div>
  )
}

export default ResumePage;