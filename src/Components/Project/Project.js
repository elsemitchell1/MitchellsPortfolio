import React from 'react';
import FamilyPortrait from '../../Images/FamilyPortrait.png'

const Project = (props) => {
  return (
    <a href="#top"
    className='hover:scale-105 p-px bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-2xl'>
        <div className='p-3 bg-black w-60 h-96 rounded-2xl'>
            <div className='top-0 h-32 overflow-hidden rounded-xl'>
                <img src={FamilyPortrait} alt='project' className='object-cover min-w-full min-h-full' />
            </div>
            <div className='flex flex-wrap justify-center my-3 gap-y-2 gap-x-2'>
                {props.project.skills.map((skill, index) => (
                  <div key={index} className='flex items-center space-x-1'>
                    <h4 className='text-md'>{skill.icon}</h4>
                    <h4 className='text-xs font-bold'>{skill.skill}</h4>
                  </div>
                ))}
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>{props.project.name}</h3>
              <h5 className='text-sm font-thin'>{props.project.date}</h5>
              <p className='text-sm'>{props.project.info}</p>
            </div>
        </div>
    </a>
  )
}

export default Project;