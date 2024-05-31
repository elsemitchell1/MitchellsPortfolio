import React from 'react';

const Timeline = (props) => {
    
  return (
    <div className="relative flex flex-col items-center w-full max-w-5xl m-10 mx-auto text-white">
      <div className="absolute h-full transform -translate-x-1/2 border-l-2 border-gray-300 z-5 left-1/2"></div>
      {props.timelineData.map((event, index) => (
        <div key={event.id} className={`z-10 flex-col-reverse flex w-full lg:mb-8 ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          <div className={`flex justify-center w-full lg:w-1/2 ${index % 2 ? 'lg:justify-start lg:pl-8' : 'lg:pr-8 lg:justify-end'}`}>
            <div className="w-full max-w-sm p-px bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-md shadow-lg">
              <div className='w-full h-full p-4 bg-black rounded-md'>
                <h3 className="font-semibold text-md lg:text-lg">{event.title}</h3>
                <time className="block text-xs text-gradient lg:text-sm">{event.date}</time>
                <p className="mt-2 text-xs lg:text-sm">{event.description}</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-12 mx-auto my-8 lg:my-0">
            <div className="z-10 w-10 h-10 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-full"></div>
          </div>
          <div className="lg:w-1/2 ml-[5px] lg:ml-[1.5px]"></div>
        </div>
      ))}
    </div>
  )
}

export default Timeline;