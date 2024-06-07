import React from 'react';
import Comments from './Comments';

const Project = (props) => {
  return (
    <div className='flex flex-col'>
      <a href={props.project.link} target='_blank' rel='noreferrer'
      className='z-10 px-px pt-px bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-t-2xl'>
          <div className='flex flex-col items-center p-3 bg-black w-72 h-[450px] rounded-t-2xl'>
              <div className='top-0 h-48 overflow-hidden rounded-xl'>
                  <img src={props.project.image} alt='project' className='object-cover min-w-full min-h-full' />
              </div>
              <div className='flex flex-wrap justify-center my-3 gap-y-2 gap-x-2'>
                  {props.project.skills.map((skill, index) => (
                    <div key={index} className='flex items-center space-x-1'>
                      <h4 className='text-md'>{skill.icon}</h4>
                      <h4 className='text-xs font-bold'>{skill.skill}</h4>
                    </div>
                  ))}
              </div>
              <div className='mt-auto space-y-2'>
                <h3 className='text-lg font-semibold'>{props.project.name}</h3>
                <h5 className='text-sm font-thin'>{props.project.date}</h5>
                <p className='text-sm'>{props.project.info}</p>
              </div>
          </div>
      </a>
      <Comments project={props.project} />
    </div>
  )
}

export default Project;