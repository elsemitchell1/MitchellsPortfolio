import React from 'react';

const Skills = (props) => {
  return (
    <div className='w-full lg:w-[48%] p-px bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-2xl'>
        <div className='flex flex-col items-center justify-center p-4 bg-black rounded-2xl'>
            <h1 className='text-4xl font-bold underline'>{props.heading}</h1>
            <div className='flex flex-wrap justify-center mt-12 mb-6 gap-y-16 gap-x-10'>
                {props.skills.map((skill, index) => (
                    <div className='flex items-center space-x-2'>
                        <h4 className='text-4xl'>{skill.icon}</h4>
                        <h4 className='text-lg font-bold'>{skill.skill}</h4>
                        </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills;